# ⚡ Energix Global — Inteligência em Energia Renovável

> Dashboard premium de análise da participação de energias renováveis na geração elétrica mundial (2000–2025), com Machine Learning (K-Means Clustering) e Regressão Polinomial para projeção até 2030.

<br>

## 📁 Estrutura do Projeto

```
energix_global/
│
├── 📄 README.md                  ← Este arquivo
├── 📄 vercel.json                ← Configuração de deploy (Vercel)
├── 📄 requirements.txt           ← Dependências Python
├── 📄 .gitignore
│
├── 📂 dashboard/                 ← Frontend (servido pelo Vercel)
│   ├── index.html                ← Dashboard principal
│   ├── 📂 css/
│   │   └── style.css             ← Design premium glassmorphism
│   ├── 📂 js/
│   │   └── app.js                ← Gráficos, filtros e lógica
│   ├── 📂 data/
│   │   └── data.json             ← Dataset pré-processado (gerado pelo pipeline)
│   └── 📂 assets/img/
│       ├── fig_logo.png          ← Logomarca Energix Global
│       ├── fig_br.png            ← Bandeira do Brasil
│       ├── fig_chart.png         ← Ícone de gráfico (hero background)
│       ├── card_01.png           ← Ícone renováveis
│       ├── card_02.png           ← Ícone solar
│       ├── card_03.png           ← Ícone eólica
│       └── card_04.png           ← Ícone fóssil
│
├── 📂 scripts/                   ← Pipeline Python (ETL + ML)
│   ├── __init__.py
│   ├── process_data.py           ← Pipeline principal — gera data.json
│   ├── clustering.py             ← K-Means Clustering (módulo isolado)
│   ├── forecast.py               ← Regressão Polinomial & Forecast (módulo isolado)
│   └── eda.py                    ← Análise Exploratória de Dados
│
└── 📂 dataset/
    └── dataset_renewable.csv     ← Dataset bruto (Our World in Data)
```

<br>

## 🚀 Deploy no Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SEU_USUARIO/energix-global)

### Passos

1. **Faça push** do projeto para o GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit — Energix Global Dashboard"
   git remote add origin https://github.com/SEU_USUARIO/energix-global.git
   git push -u origin main
   ```

2. **Acesse** [vercel.com](https://vercel.com) → **Add New Project** → importe o repositório

3. **Configurações** — o `vercel.json` já configura tudo automaticamente:
   - Output Directory: `dashboard`
   - Build Command: nenhum (site estático)

4. Clique em **Deploy** ✅

<br>

## 💻 Executar Localmente

### Frontend (Dashboard)

> ⚠️ O `fetch()` do `data.json` requer um servidor HTTP — não abra o `index.html` direto no navegador.

```bash
# Opção 1 — Python
cd energix_global
python3 -m http.server 8080 --directory dashboard
# Acesse: http://localhost:8080

# Opção 2 — Node.js
npx serve dashboard
```

### Pipeline Python (regenerar data.json)

```bash
# Instalar dependências
pip install -r requirements.txt

# Executar pipeline completo
python -m scripts.process_data

# Com caminhos customizados
python -m scripts.process_data \
  --dataset dataset/dataset_renewable.csv \
  --output  dashboard/data
```

<br>

## 🔬 Scripts Python

### `scripts/process_data.py` — Pipeline Principal
Orquestra todo o ETL + ML e gera o `data.json` consumido pelo dashboard.

```bash
python -m scripts.process_data [--dataset PATH] [--output PATH]
```

### `scripts/clustering.py` — K-Means Clustering
Módulo isolado para clustering. Pode ser executado standalone.

```bash
python -m scripts.clustering [--year 2024] [--k 5] [--output PATH]
```

**Exemplo de saída:**
```
Cluster                Países    Renov%   Solar%  Eólica%   Hidro%  Fóssil%
Hydro Leaders              33      79.6      2.7      2.9     67.7     20.1
Wind Champions             16      66.4     12.9     33.8      8.9     30.6
Solar Pioneers             20      38.1     18.9      5.1     11.5     61.2
Fossil Dependent           86      13.0      3.1      1.6      7.1     86.2
Mixed Renewables           36      35.0      7.3      6.8     16.9     26.2
```

### `scripts/forecast.py` — Regressão Polinomial
Módulo isolado para regressão e projeção. Pode ser executado standalone.

```bash
python -m scripts.forecast [--degree 2] [--horizon 2030] [--output PATH]
```

**Exemplo de saída:**
```
Regressão Polinomial Grau 2
R²   = 0.996
MAE  = 0.3214
RMSE = 0.4187

Projeção:
  2026 → 34.80%
  2027 → 36.25%
  2028 → 37.76%
  2029 → 39.34%
  2030 → 40.98%
```

### `scripts/eda.py` — Análise Exploratória
Relatório completo no terminal: cobertura, estatísticas, rankings, correlações.

```bash
python -m scripts.eda [--dataset PATH]
```

<br>

## 📊 Funcionalidades do Dashboard

| Seção | Descrição |
|---|---|
| **KPIs Globais** | 33.8% renovável · 190 países · 26 anos · +80.4% crescimento |
| **Indicadores 2025** | Solar, Eólica, Renováveis e Fóssil com variação desde 2000 |
| **Tendência Global** | Série histórica + Regressão Polinomial (R²=0.996) |
| **Matriz 2025** | Donut interativo com 6 fontes de energia |
| **Projeção 2026–2030** | Previsão ML com variação anual |
| **Solar & Eólica** | Barras de crescimento histórico por fonte |
| **Grandes Economias** | Comparativo Brasil, China, EUA, Alemanha, França, Índia |
| **Destaque Brasil** | 86.6% renovável, 11.8% solar, 15.7% eólica, 51.8% hidro |
| **Ranking 195 países** | Scroll com barra de participação renovável (2024) |
| **K-Means Clustering** | Scatter + perfis dos 5 clusters + distribuição |
| **Composição Histórica** | Área empilhada 2000–2025 |
| **Crescimento Anual** | Barras YoY da participação renovável |
| **Filtros Dinâmicos** | Por Cluster, Continente e Ano |

<br>

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Frontend** | HTML5, CSS3 (Glassmorphism, CSS Variables) |
| **Gráficos** | Chart.js 4.4 |
| **Tipografia** | Montserrat (títulos) + Roboto (corpo) — Google Fonts |
| **Python ETL** | pandas 2.x, numpy |
| **Machine Learning** | scikit-learn (KMeans, PolynomialFeatures, LinearRegression) |
| **Deploy** | Vercel (Static Site) |

<br>

## 🔬 Metodologia ML

### K-Means Clustering
- **Features**: `renewables_share_elec`, `solar_share_elec`, `wind_share_elec`, `hydro_share_elec`, `fossil_share_elec`
- **Pré-processamento**: StandardScaler (normalização Z-score)
- **K = 5 clusters**: nomeados automaticamente por perfil dominante
- **Dados**: 2024 · 191 países com dados completos
- **Parâmetros**: `random_state=42`, `n_init=10`

### Regressão Polinomial
- **Grau**: 2 (quadrático)
- **Alvo**: `renewables_share_elec` global (World aggregate)
- **Estimador**: OLS — `PolynomialFeatures(degree=2) + LinearRegression(fit_intercept=False)`
- **Dados**: 2000–2025 (26 pontos)
- **R²**: 0.9960 · MAE: 0.32 pp · RMSE: 0.42 pp

<br>

## 📈 Fonte de Dados

- **Dataset**: [Our World in Data — Energy Dataset](https://ourworldindata.org/energy)
- **Arquivo**: `dataset/dataset_renewable.csv`
- **Cobertura**: 220 países/regiões · 2000–2025 · 33 variáveis energéticas
- **Atualização**: anual

<br>

## 👨‍💻 Autor

Desenvolvido por **Renan Pinheiro** · 2026 · Version 1.0.0
