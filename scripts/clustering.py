"""
╔══════════════════════════════════════════════════════════════════╗
║  ENERGIX GLOBAL — Módulo de Clustering K-Means                   ║
║  Autor  : Renan Pinheiro  |  2026                                 ║
╠══════════════════════════════════════════════════════════════════╣
║  Aplica K-Means (k=5) nos dados de geração elétrica de 2024      ║
║  e classifica os países em 5 perfis energéticos:                 ║
║                                                                   ║
║  • Hydro Leaders    — dominância hidrelétrica                     ║
║  • Wind Champions   — liderança eólica                            ║
║  • Solar Pioneers   — destaque solar                              ║
║  • Fossil Dependent — alta dependência de combustíveis fósseis    ║
║  • Mixed Renewables — mix equilibrado de renováveis               ║
║                                                                   ║
║  Uso standalone:                                                  ║
║    python scripts/clustering.py                                   ║
║    python scripts/clustering.py --year 2023 --k 6                 ║
╚══════════════════════════════════════════════════════════════════╝
"""

import argparse
import json
import logging
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

log = logging.getLogger("energix.clustering")

# ── Constantes ─────────────────────────────────────────────────────
N_CLUSTERS = 5
RANDOM_STATE = 42
N_INIT = 10

FEATURES = [
    "renewables_share_elec",
    "solar_share_elec",
    "wind_share_elec",
    "hydro_share_elec",
    "fossil_share_elec",
]

CONTINENT_MAP: dict[str, list[str]] = {
    "África": [
        "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon",
        "Cape Verde","Central African Republic","Chad","Comoros","Congo","Ivory Coast",
        "Democratic Republic of Congo","Djibouti","Egypt","Equatorial Guinea","Eritrea",
        "Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya",
        "Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius",
        "Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","Sao Tome and Principe",
        "Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan",
        "Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe",
    ],
    "Ásia": [
        "Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei",
        "Cambodia","China","Cyprus","Georgia","India","Indonesia","Iran","Iraq","Israel",
        "Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia",
        "Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine",
        "Philippines","Qatar","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria",
        "Taiwan","Tajikistan","Thailand","Timor-Leste","Turkmenistan",
        "United Arab Emirates","Uzbekistan","Vietnam","Yemen","East Timor",
    ],
    "Europa": [
        "Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina",
        "Bulgaria","Croatia","Czech Republic","Denmark","Estonia","Finland","France",
        "Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia",
        "Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro",
        "Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia",
        "San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland",
        "Turkey","Ukraine","United Kingdom","Vatican",
    ],
    "América do Norte": [
        "Antigua and Barbuda","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba",
        "Dominica","Dominican Republic","El Salvador","Grenada","Guatemala","Haiti",
        "Honduras","Jamaica","Mexico","Nicaragua","Panama","Saint Kitts and Nevis",
        "Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States",
    ],
    "América do Sul": [
        "Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana",
        "Paraguay","Peru","Suriname","Uruguay","Venezuela",
    ],
    "Oceania": [
        "Australia","Fiji","French Polynesia","Kiribati","Marshall Islands","Micronesia",
        "Nauru","New Zealand","Palau","Papua New Guinea","Samoa","Solomon Islands",
        "Tonga","Tuvalu","Vanuatu","Montserrat",
    ],
}

COUNTRY_TO_CONTINENT = {
    c: cont for cont, cs in CONTINENT_MAP.items() for c in cs
}


# ══════════════════════════════════════════════════════════════════
#  FUNÇÃO PRINCIPAL
# ══════════════════════════════════════════════════════════════════

def run_clustering(
    df: pd.DataFrame,
    year: int = 2024,
    n_clusters: int = N_CLUSTERS,
) -> tuple[pd.DataFrame, dict, list[dict]]:
    """
    Executa K-Means nos dados de um dado ano e retorna:

    Args:
        df          — DataFrame completo do dataset
        year        — ano de referência para o clustering (padrão: 2024)
        n_clusters  — número de clusters K (padrão: 5)

    Returns:
        df_clust        — DataFrame filtrado com coluna 'cluster_name'
        cluster_profiles — dict com perfis médios e top-5 por cluster
        scatter_data    — lista de dicts para o scatter plot
    """
    log.info("Preparando dados para clustering — ano: %d  |  k: %d", year, n_clusters)

    # Filtrar ano e países reais
    mask = (
        df["iso_code"].notna()
        & (df["iso_code"].str.len() == 3)
        & (df["year"] == year)
    )
    df_year = df[mask].copy()
    df_clust = df_year.dropna(subset=FEATURES).copy()

    log.info("Países disponíveis para clustering: %d", len(df_clust))

    # Normalização
    scaler = StandardScaler()
    X = scaler.fit_transform(df_clust[FEATURES])

    # K-Means
    km = KMeans(n_clusters=n_clusters, random_state=RANDOM_STATE, n_init=N_INIT)
    df_clust = df_clust.copy()
    df_clust["cluster_id"] = km.fit_predict(X)

    log.info("Inertia: %.2f  |  Iterações: %d", km.inertia_, km.n_iter_)

    # Nomeação automática dos clusters com base nos perfis
    df_clust, cluster_name_map = _name_clusters(df_clust)

    log.info("Clusters nomeados:")
    for cid, cname in cluster_name_map.items():
        n = (df_clust["cluster_id"] == cid).sum()
        log.info("  Cluster %d → %-22s  (%d países)", cid, cname, n)

    # Perfis dos clusters
    cluster_profiles = _build_profiles(df_clust)

    # Scatter data
    scatter_data = _build_scatter(df_clust)

    return df_clust, cluster_profiles, scatter_data


# ── Helpers internos ────────────────────────────────────────────────

def _name_clusters(df_clust: pd.DataFrame) -> tuple[pd.DataFrame, dict]:
    """
    Nomeia automaticamente cada cluster com base em seus perfis médios.

    Regra de nomeação (prioridade):
    1. Hydro Leaders   → maior hydro_share_elec
    2. Wind Champions  → maior wind_share_elec
    3. Fossil Dependent→ maior fossil_share_elec
    4. Solar Pioneers  → maior solar_share_elec (dos restantes)
    5. Mixed Renewables→ o que sobrar
    """
    profiles = df_clust.groupby("cluster_id")[FEATURES].mean()

    assigned: dict[int, str] = {}

    hydro_c  = int(profiles["hydro_share_elec"].idxmax())
    assigned[hydro_c] = "Hydro Leaders"

    wind_c   = int(profiles[~profiles.index.isin(assigned)]["wind_share_elec"].idxmax())
    assigned[wind_c]  = "Wind Champions"

    fossil_c = int(profiles[~profiles.index.isin(assigned)]["fossil_share_elec"].idxmax())
    assigned[fossil_c] = "Fossil Dependent"

    solar_c  = int(profiles[~profiles.index.isin(assigned)]["solar_share_elec"].idxmax())
    assigned[solar_c]  = "Solar Pioneers"

    mixed_c  = [x for x in profiles.index if x not in assigned][0]
    assigned[mixed_c]  = "Mixed Renewables"

    df_clust = df_clust.copy()
    df_clust["cluster_name"] = df_clust["cluster_id"].map(assigned)

    return df_clust, assigned


def _build_profiles(df_clust: pd.DataFrame) -> dict:
    """Gera o perfil médio e top-5 países de cada cluster."""
    profiles = {}
    cluster_order = [
        "Hydro Leaders", "Wind Champions", "Solar Pioneers",
        "Fossil Dependent", "Mixed Renewables",
    ]
    for name in cluster_order:
        grp = df_clust[df_clust["cluster_name"] == name]
        if grp.empty:
            continue
        top5 = (
            grp.sort_values("renewables_share_elec", ascending=False)["country"]
            .head(5)
            .tolist()
        )
        profiles[name] = {
            "count":      int(len(grp)),
            "renewables": round(float(grp["renewables_share_elec"].mean()), 1),
            "solar":      round(float(grp["solar_share_elec"].mean()),      1),
            "wind":       round(float(grp["wind_share_elec"].mean()),       1),
            "hydro":      round(float(grp["hydro_share_elec"].mean()),      1),
            "fossil":     round(float(grp["fossil_share_elec"].mean()),     1),
            "top5":       top5,
        }
    return profiles


def _build_scatter(df_clust: pd.DataFrame) -> list[dict]:
    """Gera os dados do scatter plot (país, renováveis, fóssil, cluster, continente)."""
    return [
        {
            "country":    r["country"],
            "renewables": round(float(r["renewables_share_elec"]), 1),
            "fossil":     round(float(r["fossil_share_elec"]),     1),
            "cluster":    r["cluster_name"],
            "continent":  COUNTRY_TO_CONTINENT.get(r["country"], "Outros"),
        }
        for _, r in df_clust.iterrows()
    ]


# ══════════════════════════════════════════════════════════════════
#  ENTRY POINT STANDALONE
# ══════════════════════════════════════════════════════════════════

def _parse_args() -> argparse.Namespace:
    ROOT = Path(__file__).resolve().parent.parent
    parser = argparse.ArgumentParser(description="Energix — K-Means Clustering")
    parser.add_argument("--dataset", type=Path,
                        default=ROOT / "dataset" / "dataset_renewable.csv")
    parser.add_argument("--year",    type=int, default=2024,
                        help="Ano de referência para o clustering")
    parser.add_argument("--k",       type=int, default=N_CLUSTERS,
                        help="Número de clusters K (padrão: 5)")
    parser.add_argument("--output",  type=Path,
                        default=ROOT / "dashboard" / "data" / "clusters.json",
                        help="Arquivo JSON de saída")
    return parser.parse_args()


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO,
                        format="%(asctime)s  %(levelname)-8s  %(message)s",
                        datefmt="%H:%M:%S")

    args = _parse_args()

    df = pd.read_csv(args.dataset)
    df_clust, profiles, scatter = run_clustering(df, year=args.year, n_clusters=args.k)

    result = {"cluster_profiles": profiles, "scatter_data": scatter}
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    log.info("Resultado salvo em: %s", args.output)

    # Resumo por cluster
    print("\n──────────────────────────────────────────")
    print(f"{'Cluster':<22} {'Países':>7}  {'Renov%':>7}  {'Solar%':>6}  {'Eólica%':>7}  {'Hidro%':>6}  {'Fóssil%':>7}")
    print("──────────────────────────────────────────")
    for name, p in profiles.items():
        print(f"{name:<22} {p['count']:>7}  {p['renewables']:>7.1f}  {p['solar']:>6.1f}  {p['wind']:>7.1f}  {p['hydro']:>6.1f}  {p['fossil']:>7.1f}")
    print("──────────────────────────────────────────\n")
