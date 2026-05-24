/* ===================================================
   ENERGIX GLOBAL — Main Application JS
   Dados embarcados diretamente (sem fetch externo)
   =================================================== */

// ── Dados embarcados ────────────────────────────────────────────
const EMBEDDED_DATA = {"global_trend":[{"year":2000,"renewables_share_elec":18.716,"solar_share_elec":0.007,"wind_share_elec":0.204,"hydro_share_elec":17.211,"nuclear_share_elec":16.627,"fossil_share_elec":64.656},{"year":2001,"renewables_share_elec":18.044,"solar_share_elec":0.009,"wind_share_elec":0.246,"hydro_share_elec":16.539,"nuclear_share_elec":16.858,"fossil_share_elec":65.098},{"year":2002,"renewables_share_elec":17.908,"solar_share_elec":0.011,"wind_share_elec":0.325,"hydro_share_elec":16.272,"nuclear_share_elec":16.541,"fossil_share_elec":65.552},{"year":2003,"renewables_share_elec":17.442,"solar_share_elec":0.013,"wind_share_elec":0.38,"hydro_share_elec":15.708,"nuclear_share_elec":15.643,"fossil_share_elec":66.915},{"year":2004,"renewables_share_elec":17.982,"solar_share_elec":0.016,"wind_share_elec":0.491,"hydro_share_elec":16.093,"nuclear_share_elec":15.615,"fossil_share_elec":66.403},{"year":2005,"renewables_share_elec":18.096,"solar_share_elec":0.022,"wind_share_elec":0.576,"hydro_share_elec":16.057,"nuclear_share_elec":15.038,"fossil_share_elec":66.867},{"year":2006,"renewables_share_elec":18.228,"solar_share_elec":0.029,"wind_share_elec":0.707,"hydro_share_elec":16.02,"nuclear_share_elec":14.659,"fossil_share_elec":67.113},{"year":2007,"renewables_share_elec":17.974,"solar_share_elec":0.037,"wind_share_elec":0.868,"hydro_share_elec":15.536,"nuclear_share_elec":13.714,"fossil_share_elec":68.313},{"year":2008,"renewables_share_elec":18.908,"solar_share_elec":0.059,"wind_share_elec":1.099,"hydro_share_elec":16.144,"nuclear_share_elec":13.405,"fossil_share_elec":67.687},{"year":2009,"renewables_share_elec":19.467,"solar_share_elec":0.099,"wind_share_elec":1.385,"hydro_share_elec":16.252,"nuclear_share_elec":13.321,"fossil_share_elec":67.211},{"year":2010,"renewables_share_elec":19.721,"solar_share_elec":0.151,"wind_share_elec":1.627,"hydro_share_elec":16.122,"nuclear_share_elec":12.82,"fossil_share_elec":67.46},{"year":2011,"renewables_share_elec":20.016,"solar_share_elec":0.289,"wind_share_elec":2.002,"hydro_share_elec":15.875,"nuclear_share_elec":11.88,"fossil_share_elec":68.104},{"year":2012,"renewables_share_elec":20.977,"solar_share_elec":0.43,"wind_share_elec":2.351,"hydro_share_elec":16.256,"nuclear_share_elec":10.802,"fossil_share_elec":68.22},{"year":2013,"renewables_share_elec":21.712,"solar_share_elec":0.569,"wind_share_elec":2.739,"hydro_share_elec":16.371,"nuclear_share_elec":10.574,"fossil_share_elec":67.713},{"year":2014,"renewables_share_elec":22.263,"solar_share_elec":0.833,"wind_share_elec":2.973,"hydro_share_elec":16.3,"nuclear_share_elec":10.522,"fossil_share_elec":67.215},{"year":2015,"renewables_share_elec":22.967,"solar_share_elec":1.067,"wind_share_elec":3.456,"hydro_share_elec":16.174,"nuclear_share_elec":10.553,"fossil_share_elec":66.48},{"year":2016,"renewables_share_elec":23.732,"solar_share_elec":1.326,"wind_share_elec":3.889,"hydro_share_elec":16.258,"nuclear_share_elec":10.411,"fossil_share_elec":65.857},{"year":2017,"renewables_share_elec":24.466,"solar_share_elec":1.748,"wind_share_elec":4.479,"hydro_share_elec":15.935,"nuclear_share_elec":10.197,"fossil_share_elec":65.337},{"year":2018,"renewables_share_elec":25.089,"solar_share_elec":2.173,"wind_share_elec":4.792,"hydro_share_elec":15.783,"nuclear_share_elec":10.046,"fossil_share_elec":64.865},{"year":2019,"renewables_share_elec":26.071,"solar_share_elec":2.601,"wind_share_elec":5.296,"hydro_share_elec":15.756,"nuclear_share_elec":10.264,"fossil_share_elec":63.665},{"year":2020,"renewables_share_elec":27.987,"solar_share_elec":3.193,"wind_share_elec":5.955,"hydro_share_elec":16.267,"nuclear_share_elec":9.91,"fossil_share_elec":62.102},{"year":2021,"renewables_share_elec":28.102,"solar_share_elec":3.73,"wind_share_elec":6.571,"hydro_share_elec":15.176,"nuclear_share_elec":9.775,"fossil_share_elec":62.123},{"year":2022,"renewables_share_elec":29.47,"solar_share_elec":4.61,"wind_share_elec":7.288,"hydro_share_elec":14.953,"nuclear_share_elec":9.128,"fossil_share_elec":61.402},{"year":2023,"renewables_share_elec":30.323,"solar_share_elec":5.61,"wind_share_elec":7.818,"hydro_share_elec":14.293,"nuclear_share_elec":9.094,"fossil_share_elec":60.583},{"year":2024,"renewables_share_elec":31.935,"solar_share_elec":6.927,"wind_share_elec":8.113,"hydro_share_elec":14.334,"nuclear_share_elec":8.979,"fossil_share_elec":59.086},{"year":2025,"renewables_share_elec":33.76,"solar_share_elec":8.745,"wind_share_elec":8.539,"hydro_share_elec":13.959,"nuclear_share_elec":8.849,"fossil_share_elec":57.39}],"forecast":{"r2":0.996,"mae":0.2375,"rmse":0.3057,"degree":2,"coefficients":[120735.925314,-120.576734,0.030109],"historical_fitted":[{"year":2000,"fitted":18.11},{"year":2001,"fitted":17.999},{"year":2002,"fitted":17.948},{"year":2003,"fitted":17.958},{"year":2004,"fitted":18.027},{"year":2005,"fitted":18.157},{"year":2006,"fitted":18.347},{"year":2007,"fitted":18.598},{"year":2008,"fitted":18.908},{"year":2009,"fitted":19.279},{"year":2010,"fitted":19.71},{"year":2011,"fitted":20.201},{"year":2012,"fitted":20.753},{"year":2013,"fitted":21.364},{"year":2014,"fitted":22.036},{"year":2015,"fitted":22.768},{"year":2016,"fitted":23.56},{"year":2017,"fitted":24.413},{"year":2018,"fitted":25.326},{"year":2019,"fitted":26.299},{"year":2020,"fitted":27.332},{"year":2021,"fitted":28.425},{"year":2022,"fitted":29.579},{"year":2023,"fitted":30.793},{"year":2024,"fitted":32.067},{"year":2025,"fitted":33.401}],"forecast":[{"year":2026,"value":34.8},{"year":2027,"value":36.25},{"year":2028,"value":37.76},{"year":2029,"value":39.34},{"year":2030,"value":40.98}]},"matrix_2025":{"fossil":57.39,"hydro":13.96,"nuclear":8.85,"solar":8.74,"wind":8.54,"other":2.52},"solar_series":[{"year":2000,"value":0.007},{"year":2001,"value":0.009},{"year":2002,"value":0.011},{"year":2003,"value":0.013},{"year":2004,"value":0.016},{"year":2005,"value":0.022},{"year":2006,"value":0.029},{"year":2007,"value":0.037},{"year":2008,"value":0.059},{"year":2009,"value":0.099},{"year":2010,"value":0.151},{"year":2011,"value":0.289},{"year":2012,"value":0.43},{"year":2013,"value":0.569},{"year":2014,"value":0.833},{"year":2015,"value":1.067},{"year":2016,"value":1.326},{"year":2017,"value":1.748},{"year":2018,"value":2.173},{"year":2019,"value":2.601},{"year":2020,"value":3.193},{"year":2021,"value":3.73},{"year":2022,"value":4.61},{"year":2023,"value":5.61},{"year":2024,"value":6.927},{"year":2025,"value":8.745}],"wind_series":[{"year":2000,"value":0.204},{"year":2001,"value":0.246},{"year":2002,"value":0.325},{"year":2003,"value":0.38},{"year":2004,"value":0.491},{"year":2005,"value":0.576},{"year":2006,"value":0.707},{"year":2007,"value":0.868},{"year":2008,"value":1.099},{"year":2009,"value":1.385},{"year":2010,"value":1.627},{"year":2011,"value":2.002},{"year":2012,"value":2.351},{"year":2013,"value":2.739},{"year":2014,"value":2.973},{"year":2015,"value":3.456},{"year":2016,"value":3.889},{"year":2017,"value":4.479},{"year":2018,"value":4.792},{"year":2019,"value":5.296},{"year":2020,"value":5.955},{"year":2021,"value":6.571},{"year":2022,"value":7.288},{"year":2023,"value":7.818},{"year":2024,"value":8.113},{"year":2025,"value":8.539}],"big_economies":{"Brasil":[{"year":2000,"value":89.49},{"year":2001,"value":84.29},{"year":2002,"value":85.74},{"year":2003,"value":87.17},{"year":2004,"value":86.04},{"year":2005,"value":87.13},{"year":2006,"value":86.75},{"year":2007,"value":88.23},{"year":2008,"value":84.31},{"year":2009,"value":89.05},{"year":2010,"value":84.8},{"year":2011,"value":87.19},{"year":2012,"value":82.56},{"year":2013,"value":76.83},{"year":2014,"value":73.28},{"year":2015,"value":74.21},{"year":2016,"value":80.47},{"year":2017,"value":79.25},{"year":2018,"value":82.36},{"year":2019,"value":81.39},{"year":2020,"value":83.17},{"year":2021,"value":77.37},{"year":2022,"value":87.7},{"year":2023,"value":89.0},{"year":2024,"value":87.33},{"year":2025,"value":86.6}],"China":[{"year":2000,"value":16.64},{"year":2001,"value":18.96},{"year":2002,"value":17.62},{"year":2003,"value":15.04},{"year":2004,"value":16.22},{"year":2005,"value":16.17},{"year":2006,"value":15.59},{"year":2007,"value":15.26},{"year":2008,"value":19.02},{"year":2009,"value":17.89},{"year":2010,"value":18.69},{"year":2011,"value":16.81},{"year":2012,"value":20.04},{"year":2013,"value":20.13},{"year":2014,"value":22.25},{"year":2015,"value":23.97},{"year":2016,"value":24.83},{"year":2017,"value":25.24},{"year":2018,"value":25.61},{"year":2019,"value":26.85},{"year":2020,"value":28.09},{"year":2021,"value":28.69},{"year":2022,"value":30.18},{"year":2023,"value":30.61},{"year":2024,"value":33.7},{"year":2025,"value":37.04}],"Alemanha":[{"year":2000,"value":6.22},{"year":2001,"value":6.54},{"year":2002,"value":7.62},{"year":2003,"value":7.75},{"year":2004,"value":9.51},{"year":2005,"value":10.34},{"year":2006,"value":11.51},{"year":2007,"value":14.17},{"year":2008,"value":14.93},{"year":2009,"value":16.34},{"year":2010,"value":16.89},{"year":2011,"value":20.57},{"year":2012,"value":23.14},{"year":2013,"value":24.13},{"year":2014,"value":26.17},{"year":2015,"value":29.43},{"year":2016,"value":29.48},{"year":2017,"value":33.47},{"year":2018,"value":35.26},{"year":2019,"value":40.19},{"year":2020,"value":44.37},{"year":2021,"value":40.17},{"year":2022,"value":44.37},{"year":2023,"value":54.69},{"year":2024,"value":58.64},{"year":2025,"value":59.09}],"EUA":[{"year":2000,"value":9.23},{"year":2001,"value":7.51},{"year":2002,"value":8.75},{"year":2003,"value":9.03},{"year":2004,"value":8.73},{"year":2005,"value":8.75},{"year":2006,"value":9.42},{"year":2007,"value":8.4},{"year":2008,"value":9.18},{"year":2009,"value":10.55},{"year":2010,"value":10.32},{"year":2011,"value":12.47},{"year":2012,"value":12.18},{"year":2013,"value":12.83},{"year":2014,"value":13.35},{"year":2015,"value":13.63},{"year":2016,"value":15.29},{"year":2017,"value":17.45},{"year":2018,"value":17.45},{"year":2019,"value":18.3},{"year":2020,"value":20.32},{"year":2021,"value":20.74},{"year":2022,"value":22.35},{"year":2023,"value":22.68},{"year":2024,"value":24.06},{"year":2025,"value":25.64}],"França":[{"year":2000,"value":12.74},{"year":2001,"value":14.02},{"year":2002,"value":11.37},{"year":2003,"value":10.99},{"year":2004,"value":11.02},{"year":2005,"value":9.66},{"year":2006,"value":10.74},{"year":2007,"value":11.45},{"year":2008,"value":12.76},{"year":2009,"value":12.89},{"year":2010,"value":13.63},{"year":2011,"value":11.63},{"year":2012,"value":15.02},{"year":2013,"value":17.24},{"year":2014,"value":16.6},{"year":2015,"value":16.0},{"year":2016,"value":17.71},{"year":2017,"value":16.54},{"year":2018,"value":19.76},{"year":2019,"value":19.96},{"year":2020,"value":23.71},{"year":2021,"value":22.19},{"year":2022,"value":24.2},{"year":2023,"value":26.89},{"year":2024,"value":27.18},{"year":2025,"value":26.06}],"Índia":[{"year":2000,"value":14.05},{"year":2001,"value":13.0},{"year":2002,"value":11.94},{"year":2003,"value":11.7},{"year":2004,"value":15.64},{"year":2005,"value":15.25},{"year":2006,"value":17.14},{"year":2007,"value":17.8},{"year":2008,"value":16.77},{"year":2009,"value":15.17},{"year":2010,"value":15.11},{"year":2011,"value":16.66},{"year":2012,"value":14.87},{"year":2013,"value":16.03},{"year":2014,"value":15.77},{"year":2015,"value":14.62},{"year":2016,"value":14.44},{"year":2017,"value":15.45},{"year":2018,"value":16.29},{"year":2019,"value":17.62},{"year":2020,"value":19.01},{"year":2021,"value":18.79},{"year":2022,"value":20.19},{"year":2023,"value":19.29},{"year":2024,"value":19.81},{"year":2025,"value":24.07}]},"brazil_highlight":{"renewables":86.6,"solar":11.8,"wind":15.7,"hydro":51.8},"scatter_data":[{"country":"Afghanistan","renewables":86.9,"fossil":13.1,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Albania","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"Europa"},{"country":"Algeria","renewables":1.1,"fossil":98.9,"cluster":"Fossil Dependent","continent":"África"},{"country":"American Samoa","renewables":5.6,"fossil":94.4,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Angola","renewables":73.7,"fossil":26.3,"cluster":"Hydro Leaders","continent":"África"},{"country":"Antigua and Barbuda","renewables":8.1,"fossil":91.9,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Argentina","renewables":34.4,"fossil":58.8,"cluster":"Mixed Renewables","continent":"América do Sul"},{"country":"Armenia","renewables":31.9,"fossil":39.0,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"Aruba","renewables":17.0,"fossil":83.0,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Australia","renewables":35.1,"fossil":64.9,"cluster":"Solar Pioneers","continent":"Oceania"},{"country":"Austria","renewables":86.2,"fossil":13.8,"cluster":"Hydro Leaders","continent":"Europa"},{"country":"Azerbaijan","renewables":11.7,"fossil":88.3,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Bahamas","renewables":0.9,"fossil":99.1,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Bahrain","renewables":0.3,"fossil":99.7,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Bangladesh","renewables":1.9,"fossil":98.1,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Barbados","renewables":9.0,"fossil":91.0,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Belarus","renewables":3.1,"fossil":62.7,"cluster":"Fossil Dependent","continent":"Europa"},{"country":"Belgium","renewables":35.2,"fossil":23.7,"cluster":"Wind Champions","continent":"Europa"},{"country":"Belize","renewables":87.2,"fossil":12.8,"cluster":"Hydro Leaders","continent":"América do Norte"},{"country":"Benin","renewables":4.0,"fossil":96.0,"cluster":"Fossil Dependent","continent":"África"},{"country":"Bermuda","renewables":1.6,"fossil":98.4,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Bhutan","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Bolivia","renewables":34.0,"fossil":66.0,"cluster":"Mixed Renewables","continent":"América do Sul"},{"country":"Bosnia and Herzegovina","renewables":40.3,"fossil":59.7,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Botswana","renewables":0.3,"fossil":99.7,"cluster":"Fossil Dependent","continent":"África"},{"country":"Brazil","renewables":87.3,"fossil":10.6,"cluster":"Hydro Leaders","continent":"América do Sul"},{"country":"Brunei","renewables":0.2,"fossil":99.8,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Bulgaria","renewables":29.9,"fossil":28.9,"cluster":"Solar Pioneers","continent":"Europa"},{"country":"Burkina Faso","renewables":17.2,"fossil":82.8,"cluster":"Fossil Dependent","continent":"África"},{"country":"Burundi","renewables":75.5,"fossil":24.5,"cluster":"Hydro Leaders","continent":"África"},{"country":"Cameroon","renewables":73.1,"fossil":26.9,"cluster":"Hydro Leaders","continent":"África"},{"country":"Canada","renewables":64.3,"fossil":22.3,"cluster":"Mixed Renewables","continent":"América do Norte"},{"country":"Cape Verde","renewables":30.8,"fossil":69.2,"cluster":"Solar Pioneers","continent":"África"},{"country":"Cayman Islands","renewables":4.2,"fossil":95.8,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Chad","renewables":5.4,"fossil":94.6,"cluster":"Fossil Dependent","continent":"África"},{"country":"Chile","renewables":70.0,"fossil":30.0,"cluster":"Solar Pioneers","continent":"América do Sul"},{"country":"China","renewables":33.7,"fossil":61.8,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"Colombia","renewables":61.3,"fossil":38.7,"cluster":"Mixed Renewables","continent":"América do Sul"},{"country":"Congo","renewables":20.9,"fossil":79.1,"cluster":"Fossil Dependent","continent":"África"},{"country":"Cook Islands","renewables":50.0,"fossil":50.0,"cluster":"Solar Pioneers","continent":"Outros"},{"country":"Costa Rica","renewables":99.9,"fossil":0.1,"cluster":"Hydro Leaders","continent":"América do Norte"},{"country":"Cote d'Ivoire","renewables":28.9,"fossil":71.1,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Croatia","renewables":73.4,"fossil":26.6,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Cuba","renewables":4.0,"fossil":96.0,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Cyprus","renewables":24.0,"fossil":76.0,"cluster":"Solar Pioneers","continent":"Ásia"},{"country":"Czechia","renewables":16.9,"fossil":42.3,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Democratic Republic of Congo","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"África"},{"country":"Denmark","renewables":89.2,"fossil":10.8,"cluster":"Wind Champions","continent":"Europa"},{"country":"Djibouti","renewables":35.0,"fossil":65.0,"cluster":"Wind Champions","continent":"África"},{"country":"Dominican Republic","renewables":18.9,"fossil":81.1,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"East Timor","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Ecuador","renewables":72.4,"fossil":27.6,"cluster":"Hydro Leaders","continent":"América do Sul"},{"country":"Egypt","renewables":11.2,"fossil":88.8,"cluster":"Fossil Dependent","continent":"África"},{"country":"El Salvador","renewables":90.8,"fossil":9.2,"cluster":"Solar Pioneers","continent":"América do Norte"},{"country":"Equatorial Guinea","renewables":26.8,"fossil":73.2,"cluster":"Fossil Dependent","continent":"África"},{"country":"Eritrea","renewables":11.1,"fossil":88.9,"cluster":"Fossil Dependent","continent":"África"},{"country":"Estonia","renewables":55.8,"fossil":44.2,"cluster":"Solar Pioneers","continent":"Europa"},{"country":"Eswatini","renewables":96.7,"fossil":3.3,"cluster":"Hydro Leaders","continent":"África"},{"country":"Ethiopia","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"África"},{"country":"Fiji","renewables":63.5,"fossil":36.5,"cluster":"Mixed Renewables","continent":"Oceania"},{"country":"Finland","renewables":55.9,"fossil":4.7,"cluster":"Wind Champions","continent":"Europa"},{"country":"France","renewables":27.2,"fossil":5.1,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"French Polynesia","renewables":34.7,"fossil":65.3,"cluster":"Mixed Renewables","continent":"Oceania"},{"country":"Gabon","renewables":35.4,"fossil":64.6,"cluster":"Mixed Renewables","continent":"África"},{"country":"Gambia","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"África"},{"country":"Georgia","renewables":79.8,"fossil":20.2,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Germany","renewables":58.6,"fossil":41.4,"cluster":"Wind Champions","continent":"Europa"},{"country":"Ghana","renewables":36.2,"fossil":63.8,"cluster":"Mixed Renewables","continent":"África"},{"country":"Gibraltar","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Greece","renewables":49.2,"fossil":50.8,"cluster":"Wind Champions","continent":"Europa"},{"country":"Greenland","renewables":83.3,"fossil":16.7,"cluster":"Hydro Leaders","continent":"Outros"},{"country":"Grenada","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Guam","renewables":8.6,"fossil":91.4,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Guatemala","renewables":68.3,"fossil":31.7,"cluster":"Mixed Renewables","continent":"América do Norte"},{"country":"Guinea","renewables":75.2,"fossil":24.8,"cluster":"Hydro Leaders","continent":"África"},{"country":"Guinea-Bissau","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"África"},{"country":"Guyana","renewables":2.9,"fossil":97.1,"cluster":"Fossil Dependent","continent":"América do Sul"},{"country":"Haiti","renewables":18.6,"fossil":81.4,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Honduras","renewables":55.4,"fossil":44.6,"cluster":"Mixed Renewables","continent":"América do Norte"},{"country":"Hong Kong","renewables":1.0,"fossil":99.0,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Hungary","renewables":31.5,"fossil":26.4,"cluster":"Solar Pioneers","continent":"Europa"},{"country":"Iceland","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"Europa"},{"country":"India","renewables":19.8,"fossil":77.5,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Indonesia","renewables":18.1,"fossil":81.9,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Iran","renewables":5.3,"fossil":92.8,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Iraq","renewables":1.6,"fossil":98.4,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Ireland","renewables":46.5,"fossil":53.5,"cluster":"Wind Champions","continent":"Europa"},{"country":"Israel","renewables":13.8,"fossil":86.2,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Italy","renewables":50.2,"fossil":49.8,"cluster":"Solar Pioneers","continent":"Europa"},{"country":"Jamaica","renewables":12.6,"fossil":87.4,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Japan","renewables":22.9,"fossil":68.7,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Jordan","renewables":24.1,"fossil":75.9,"cluster":"Solar Pioneers","continent":"Ásia"},{"country":"Kazakhstan","renewables":15.2,"fossil":84.8,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Kenya","renewables":91.5,"fossil":8.5,"cluster":"Wind Champions","continent":"África"},{"country":"Kiribati","renewables":25.0,"fossil":75.0,"cluster":"Solar Pioneers","continent":"Oceania"},{"country":"Kuwait","renewables":2.2,"fossil":97.8,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Kyrgyzstan","renewables":88.8,"fossil":11.2,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Laos","renewables":76.7,"fossil":23.3,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Latvia","renewables":73.5,"fossil":26.5,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Lebanon","renewables":43.8,"fossil":56.2,"cluster":"Solar Pioneers","continent":"Ásia"},{"country":"Liberia","renewables":54.4,"fossil":45.6,"cluster":"Mixed Renewables","continent":"África"},{"country":"Libya","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"África"},{"country":"Lithuania","renewables":84.3,"fossil":15.7,"cluster":"Wind Champions","continent":"Europa"},{"country":"Luxembourg","renewables":90.7,"fossil":9.3,"cluster":"Wind Champions","continent":"Europa"},{"country":"Macao","renewables":30.8,"fossil":69.2,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Madagascar","renewables":42.4,"fossil":57.6,"cluster":"Mixed Renewables","continent":"África"},{"country":"Malawi","renewables":95.6,"fossil":4.4,"cluster":"Hydro Leaders","continent":"África"},{"country":"Malaysia","renewables":20.4,"fossil":79.6,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Maldives","renewables":7.1,"fossil":92.9,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Mali","renewables":19.5,"fossil":80.5,"cluster":"Fossil Dependent","continent":"África"},{"country":"Malta","renewables":15.5,"fossil":84.5,"cluster":"Fossil Dependent","continent":"Europa"},{"country":"Mauritania","renewables":22.7,"fossil":77.3,"cluster":"Fossil Dependent","continent":"África"},{"country":"Mauritius","renewables":17.9,"fossil":82.1,"cluster":"Fossil Dependent","continent":"África"},{"country":"Mexico","renewables":21.1,"fossil":75.4,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Moldova","renewables":10.7,"fossil":89.3,"cluster":"Fossil Dependent","continent":"Europa"},{"country":"Mongolia","renewables":8.8,"fossil":91.2,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Montenegro","renewables":59.5,"fossil":40.5,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Montserrat","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"Oceania"},{"country":"Morocco","renewables":24.4,"fossil":75.6,"cluster":"Fossil Dependent","continent":"África"},{"country":"Mozambique","renewables":83.4,"fossil":16.6,"cluster":"Hydro Leaders","continent":"África"},{"country":"Myanmar","renewables":47.9,"fossil":52.1,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"Namibia","renewables":97.6,"fossil":2.4,"cluster":"Solar Pioneers","continent":"África"},{"country":"Nauru","renewables":20.0,"fossil":80.0,"cluster":"Solar Pioneers","continent":"Oceania"},{"country":"Nepal","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Netherlands","renewables":50.7,"fossil":46.3,"cluster":"Wind Champions","continent":"Europa"},{"country":"New Caledonia","renewables":26.9,"fossil":73.1,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"New Zealand","renewables":86.0,"fossil":14.0,"cluster":"Hydro Leaders","continent":"Oceania"},{"country":"Nicaragua","renewables":62.4,"fossil":37.6,"cluster":"Mixed Renewables","continent":"América do Norte"},{"country":"Niger","renewables":3.2,"fossil":96.8,"cluster":"Fossil Dependent","continent":"África"},{"country":"Nigeria","renewables":25.0,"fossil":75.0,"cluster":"Fossil Dependent","continent":"África"},{"country":"North Korea","renewables":63.4,"fossil":36.6,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"North Macedonia","renewables":39.5,"fossil":60.5,"cluster":"Solar Pioneers","continent":"Europa"},{"country":"Norway","renewables":98.6,"fossil":1.4,"cluster":"Hydro Leaders","continent":"Europa"},{"country":"Oman","renewables":4.9,"fossil":95.1,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Pakistan","renewables":37.2,"fossil":49.7,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"Palestine","renewables":39.4,"fossil":60.6,"cluster":"Solar Pioneers","continent":"Ásia"},{"country":"Panama","renewables":68.0,"fossil":32.0,"cluster":"Mixed Renewables","continent":"América do Norte"},{"country":"Papua New Guinea","renewables":23.7,"fossil":76.3,"cluster":"Fossil Dependent","continent":"Oceania"},{"country":"Paraguay","renewables":100.0,"fossil":0.0,"cluster":"Hydro Leaders","continent":"América do Sul"},{"country":"Peru","renewables":60.1,"fossil":39.9,"cluster":"Mixed Renewables","continent":"América do Sul"},{"country":"Philippines","renewables":20.5,"fossil":79.5,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Poland","renewables":31.1,"fossil":68.9,"cluster":"Fossil Dependent","continent":"Europa"},{"country":"Portugal","renewables":85.2,"fossil":14.8,"cluster":"Wind Champions","continent":"Europa"},{"country":"Puerto Rico","renewables":6.0,"fossil":94.0,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Qatar","renewables":4.0,"fossil":96.0,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Romania","renewables":46.5,"fossil":32.8,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Russia","renewables":18.1,"fossil":64.1,"cluster":"Fossil Dependent","continent":"Europa"},{"country":"Rwanda","renewables":49.6,"fossil":50.4,"cluster":"Mixed Renewables","continent":"África"},{"country":"Saint Kitts and Nevis","renewables":8.7,"fossil":91.3,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Saint Lucia","renewables":2.5,"fossil":97.5,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Saint Vincent and the Grenadines","renewables":13.3,"fossil":86.7,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Samoa","renewables":43.8,"fossil":56.2,"cluster":"Solar Pioneers","continent":"Oceania"},{"country":"Senegal","renewables":19.8,"fossil":80.2,"cluster":"Fossil Dependent","continent":"África"},{"country":"Serbia","renewables":32.1,"fossil":67.9,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Seychelles","renewables":15.9,"fossil":84.1,"cluster":"Fossil Dependent","continent":"África"},{"country":"Sierra Leone","renewables":95.2,"fossil":4.8,"cluster":"Hydro Leaders","continent":"África"},{"country":"Slovakia","renewables":24.1,"fossil":14.2,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Slovenia","renewables":41.1,"fossil":23.9,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Solomon Islands","renewables":9.1,"fossil":90.9,"cluster":"Fossil Dependent","continent":"Oceania"},{"country":"Somalia","renewables":20.9,"fossil":79.1,"cluster":"Solar Pioneers","continent":"África"},{"country":"South Africa","renewables":12.5,"fossil":84.3,"cluster":"Fossil Dependent","continent":"África"},{"country":"South Korea","renewables":9.7,"fossil":60.1,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"South Sudan","renewables":1.8,"fossil":98.2,"cluster":"Fossil Dependent","continent":"África"},{"country":"Spain","renewables":57.3,"fossil":23.3,"cluster":"Wind Champions","continent":"Europa"},{"country":"Sri Lanka","renewables":55.2,"fossil":44.8,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"Sudan","renewables":79.7,"fossil":20.3,"cluster":"Hydro Leaders","continent":"África"},{"country":"Suriname","renewables":52.9,"fossil":47.1,"cluster":"Mixed Renewables","continent":"América do Sul"},{"country":"Sweden","renewables":69.4,"fossil":1.2,"cluster":"Wind Champions","continent":"Europa"},{"country":"Switzerland","renewables":67.4,"fossil":1.9,"cluster":"Hydro Leaders","continent":"Europa"},{"country":"Syria","renewables":3.5,"fossil":96.5,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Taiwan","renewables":10.9,"fossil":84.9,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Tajikistan","renewables":94.6,"fossil":5.4,"cluster":"Hydro Leaders","continent":"Ásia"},{"country":"Tanzania","renewables":32.9,"fossil":67.1,"cluster":"Mixed Renewables","continent":"África"},{"country":"Thailand","renewables":14.8,"fossil":85.2,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Togo","renewables":29.6,"fossil":70.4,"cluster":"Solar Pioneers","continent":"África"},{"country":"Tonga","renewables":14.3,"fossil":85.7,"cluster":"Fossil Dependent","continent":"Oceania"},{"country":"Trinidad and Tobago","renewables":0.1,"fossil":99.9,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Tunisia","renewables":4.4,"fossil":95.6,"cluster":"Fossil Dependent","continent":"África"},{"country":"Turkey","renewables":45.6,"fossil":54.4,"cluster":"Mixed Renewables","continent":"Europa"},{"country":"Turkmenistan","renewables":0.0,"fossil":100.0,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Turks and Caicos Islands","renewables":3.7,"fossil":96.3,"cluster":"Fossil Dependent","continent":"Outros"},{"country":"Uganda","renewables":97.1,"fossil":2.9,"cluster":"Hydro Leaders","continent":"África"},{"country":"United Kingdom","renewables":50.6,"fossil":35.1,"cluster":"Wind Champions","continent":"Europa"},{"country":"United States","renewables":24.1,"fossil":58.1,"cluster":"Fossil Dependent","continent":"América do Norte"},{"country":"Uruguay","renewables":98.9,"fossil":1.1,"cluster":"Wind Champions","continent":"América do Sul"},{"country":"Uzbekistan","renewables":16.0,"fossil":84.0,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Venezuela","renewables":91.1,"fossil":8.9,"cluster":"Hydro Leaders","continent":"América do Sul"},{"country":"Vietnam","renewables":42.3,"fossil":57.7,"cluster":"Mixed Renewables","continent":"Ásia"},{"country":"Yemen","renewables":11.2,"fossil":88.8,"cluster":"Fossil Dependent","continent":"Ásia"},{"country":"Zambia","renewables":87.5,"fossil":12.5,"cluster":"Hydro Leaders","continent":"África"},{"country":"Zimbabwe","renewables":57.1,"fossil":42.9,"cluster":"Mixed Renewables","continent":"África"}],"cluster_profiles":{"Hydro Leaders":{"count":33,"renewables":88.5,"solar":2.7,"wind":1.9,"hydro":78.7,"fossil":10.5,"top5":["Albania","Nepal","Bhutan","Ethiopia","Democratic Republic of Congo"]},"Wind Champions":{"count":16,"renewables":65.5,"solar":10.9,"wind":30.5,"hydro":11.6,"fossil":25.3,"top5":["Uruguay","Kenya","Luxembourg","Denmark","Portugal"]},"Solar Pioneers":{"count":20,"renewables":42.6,"solar":22.5,"wind":4.5,"hydro":11.0,"fossil":53.3,"top5":["Namibia","El Salvador","Chile","Estonia","Italy"]},"Fossil Dependent":{"count":86,"renewables":10.8,"solar":3.7,"wind":1.6,"hydro":4.2,"fossil":87.3,"top5":["Poland","Macao","Cote d'Ivoire","New Caledonia","Equatorial Guinea"]},"Mixed Renewables":{"count":36,"renewables":48.4,"solar":4.1,"wind":3.9,"hydro":36.7,"fossil":44.6,"top5":["Latvia","Croatia","Guatemala","Panama","Canada"]}},"ranking":[{"rank":1,"country":"Albania","value":100.0,"continent":"Europa","cluster":"Hydro Leaders"},{"rank":2,"country":"Democratic Republic of Congo","value":100.0,"continent":"África","cluster":"Hydro Leaders"},{"rank":3,"country":"Bhutan","value":100.0,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":4,"country":"Ethiopia","value":100.0,"continent":"África","cluster":"Hydro Leaders"},{"rank":5,"country":"Paraguay","value":100.0,"continent":"América do Sul","cluster":"Hydro Leaders"},{"rank":6,"country":"Nepal","value":100.0,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":7,"country":"Iceland","value":100.0,"continent":"Europa","cluster":"Hydro Leaders"},{"rank":8,"country":"Costa Rica","value":99.91,"continent":"América do Norte","cluster":"Hydro Leaders"},{"rank":9,"country":"Uruguay","value":98.88,"continent":"América do Sul","cluster":"Wind Champions"},{"rank":10,"country":"Norway","value":98.61,"continent":"Europa","cluster":"Hydro Leaders"},{"rank":11,"country":"Namibia","value":97.56,"continent":"África","cluster":"Solar Pioneers"},{"rank":12,"country":"Uganda","value":97.07,"continent":"África","cluster":"Hydro Leaders"},{"rank":13,"country":"Eswatini","value":96.72,"continent":"África","cluster":"Hydro Leaders"},{"rank":14,"country":"Malawi","value":95.63,"continent":"África","cluster":"Hydro Leaders"},{"rank":15,"country":"Sierra Leone","value":95.24,"continent":"África","cluster":"Hydro Leaders"},{"rank":16,"country":"Tajikistan","value":94.59,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":17,"country":"Kenya","value":91.48,"continent":"África","cluster":"Wind Champions"},{"rank":18,"country":"Venezuela","value":91.14,"continent":"América do Sul","cluster":"Hydro Leaders"},{"rank":19,"country":"El Salvador","value":90.81,"continent":"América do Norte","cluster":"Solar Pioneers"},{"rank":20,"country":"Luxembourg","value":90.73,"continent":"Europa","cluster":"Wind Champions"},{"rank":21,"country":"Denmark","value":89.19,"continent":"Europa","cluster":"Wind Champions"},{"rank":22,"country":"Kyrgyzstan","value":88.78,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":23,"country":"Zambia","value":87.47,"continent":"África","cluster":"Hydro Leaders"},{"rank":24,"country":"Brazil","value":87.33,"continent":"América do Sul","cluster":"Hydro Leaders"},{"rank":25,"country":"Belize","value":87.23,"continent":"América do Norte","cluster":"Hydro Leaders"},{"rank":26,"country":"Afghanistan","value":86.87,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":27,"country":"Austria","value":86.22,"continent":"Europa","cluster":"Hydro Leaders"},{"rank":28,"country":"New Zealand","value":85.98,"continent":"Oceania","cluster":"Hydro Leaders"},{"rank":29,"country":"Portugal","value":85.19,"continent":"Europa","cluster":"Wind Champions"},{"rank":30,"country":"Lithuania","value":84.3,"continent":"Europa","cluster":"Wind Champions"},{"rank":31,"country":"Mozambique","value":83.43,"continent":"África","cluster":"Hydro Leaders"},{"rank":32,"country":"Greenland","value":83.33,"continent":"Outros","cluster":"Hydro Leaders"},{"rank":33,"country":"Georgia","value":79.83,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":34,"country":"Sudan","value":79.69,"continent":"África","cluster":"Hydro Leaders"},{"rank":35,"country":"Laos","value":76.72,"continent":"Ásia","cluster":"Hydro Leaders"},{"rank":36,"country":"Burundi","value":75.51,"continent":"África","cluster":"Hydro Leaders"},{"rank":37,"country":"Guinea","value":75.19,"continent":"África","cluster":"Hydro Leaders"},{"rank":38,"country":"Angola","value":73.7,"continent":"África","cluster":"Hydro Leaders"},{"rank":39,"country":"Latvia","value":73.46,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":40,"country":"Croatia","value":73.45,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":41,"country":"Cameroon","value":73.14,"continent":"África","cluster":"Hydro Leaders"},{"rank":42,"country":"Ecuador","value":72.44,"continent":"América do Sul","cluster":"Hydro Leaders"},{"rank":43,"country":"Chile","value":70.04,"continent":"América do Sul","cluster":"Solar Pioneers"},{"rank":44,"country":"Sweden","value":69.36,"continent":"Europa","cluster":"Wind Champions"},{"rank":45,"country":"Guatemala","value":68.33,"continent":"América do Norte","cluster":"Mixed Renewables"},{"rank":46,"country":"Panama","value":67.98,"continent":"América do Norte","cluster":"Mixed Renewables"},{"rank":47,"country":"Switzerland","value":67.45,"continent":"Europa","cluster":"Hydro Leaders"},{"rank":48,"country":"Canada","value":64.27,"continent":"América do Norte","cluster":"Mixed Renewables"},{"rank":49,"country":"Fiji","value":63.48,"continent":"Oceania","cluster":"Mixed Renewables"},{"rank":50,"country":"North Korea","value":63.36,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":51,"country":"Nicaragua","value":62.39,"continent":"América do Norte","cluster":"Mixed Renewables"},{"rank":52,"country":"Colombia","value":61.34,"continent":"América do Sul","cluster":"Mixed Renewables"},{"rank":53,"country":"Peru","value":60.11,"continent":"América do Sul","cluster":"Mixed Renewables"},{"rank":54,"country":"Montenegro","value":59.49,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":55,"country":"Germany","value":58.64,"continent":"Europa","cluster":"Wind Champions"},{"rank":56,"country":"Spain","value":57.34,"continent":"Europa","cluster":"Wind Champions"},{"rank":57,"country":"Zimbabwe","value":57.12,"continent":"África","cluster":"Mixed Renewables"},{"rank":58,"country":"Finland","value":55.86,"continent":"Europa","cluster":"Wind Champions"},{"rank":59,"country":"Estonia","value":55.75,"continent":"Europa","cluster":"Solar Pioneers"},{"rank":60,"country":"Honduras","value":55.45,"continent":"América do Norte","cluster":"Mixed Renewables"},{"rank":61,"country":"Sri Lanka","value":55.24,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":62,"country":"Liberia","value":54.39,"continent":"África","cluster":"Mixed Renewables"},{"rank":63,"country":"Suriname","value":52.87,"continent":"América do Sul","cluster":"Mixed Renewables"},{"rank":64,"country":"Netherlands","value":50.74,"continent":"Europa","cluster":"Wind Champions"},{"rank":65,"country":"United Kingdom","value":50.65,"continent":"Europa","cluster":"Wind Champions"},{"rank":66,"country":"Italy","value":50.17,"continent":"Europa","cluster":"Solar Pioneers"},{"rank":67,"country":"Cook Islands","value":50.0,"continent":"Outros","cluster":"Solar Pioneers"},{"rank":68,"country":"Rwanda","value":49.56,"continent":"África","cluster":"Mixed Renewables"},{"rank":69,"country":"Greece","value":49.23,"continent":"Europa","cluster":"Wind Champions"},{"rank":70,"country":"Myanmar","value":47.86,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":71,"country":"Ireland","value":46.52,"continent":"Europa","cluster":"Wind Champions"},{"rank":72,"country":"Romania","value":46.51,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":73,"country":"Turkey","value":45.61,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":74,"country":"Lebanon","value":43.82,"continent":"Ásia","cluster":"Solar Pioneers"},{"rank":75,"country":"Samoa","value":43.75,"continent":"Oceania","cluster":"Solar Pioneers"},{"rank":76,"country":"Madagascar","value":42.39,"continent":"África","cluster":"Mixed Renewables"},{"rank":77,"country":"Vietnam","value":42.28,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":78,"country":"Slovenia","value":41.11,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":79,"country":"Bosnia and Herzegovina","value":40.35,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":80,"country":"North Macedonia","value":39.46,"continent":"Europa","cluster":"Solar Pioneers"},{"rank":81,"country":"Palestine","value":39.39,"continent":"Ásia","cluster":"Solar Pioneers"},{"rank":82,"country":"Pakistan","value":37.2,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":83,"country":"Ghana","value":36.22,"continent":"África","cluster":"Mixed Renewables"},{"rank":84,"country":"Cambodia","value":35.66,"continent":"Ásia","cluster":"Outros"},{"rank":85,"country":"Gabon","value":35.38,"continent":"África","cluster":"Mixed Renewables"},{"rank":86,"country":"Belgium","value":35.23,"continent":"Europa","cluster":"Wind Champions"},{"rank":87,"country":"Australia","value":35.08,"continent":"Oceania","cluster":"Solar Pioneers"},{"rank":88,"country":"Djibouti","value":35.0,"continent":"África","cluster":"Wind Champions"},{"rank":89,"country":"French Polynesia","value":34.72,"continent":"Oceania","cluster":"Mixed Renewables"},{"rank":90,"country":"Argentina","value":34.38,"continent":"América do Sul","cluster":"Mixed Renewables"},{"rank":91,"country":"Bolivia","value":34.0,"continent":"América do Sul","cluster":"Mixed Renewables"},{"rank":92,"country":"China","value":33.7,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":93,"country":"Tanzania","value":32.92,"continent":"África","cluster":"Mixed Renewables"},{"rank":94,"country":"Serbia","value":32.06,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":95,"country":"Armenia","value":31.89,"continent":"Ásia","cluster":"Mixed Renewables"},{"rank":96,"country":"Hungary","value":31.47,"continent":"Europa","cluster":"Solar Pioneers"},{"rank":97,"country":"Poland","value":31.15,"continent":"Europa","cluster":"Fossil Dependent"},{"rank":98,"country":"Cape Verde","value":30.77,"continent":"África","cluster":"Solar Pioneers"},{"rank":99,"country":"Macao","value":30.77,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":100,"country":"Bulgaria","value":29.92,"continent":"Europa","cluster":"Solar Pioneers"},{"rank":101,"country":"Togo","value":29.58,"continent":"África","cluster":"Solar Pioneers"},{"rank":102,"country":"Cote d'Ivoire","value":28.92,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":103,"country":"France","value":27.18,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":104,"country":"New Caledonia","value":26.92,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":105,"country":"Equatorial Guinea","value":26.85,"continent":"África","cluster":"Fossil Dependent"},{"rank":106,"country":"Kiribati","value":25.0,"continent":"Oceania","cluster":"Solar Pioneers"},{"rank":107,"country":"Nigeria","value":25.0,"continent":"África","cluster":"Fossil Dependent"},{"rank":108,"country":"Morocco","value":24.41,"continent":"África","cluster":"Fossil Dependent"},{"rank":109,"country":"Jordan","value":24.08,"continent":"Ásia","cluster":"Solar Pioneers"},{"rank":110,"country":"United States","value":24.06,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":111,"country":"Slovakia","value":24.05,"continent":"Europa","cluster":"Mixed Renewables"},{"rank":112,"country":"Cyprus","value":24.01,"continent":"Ásia","cluster":"Solar Pioneers"},{"rank":113,"country":"Papua New Guinea","value":23.68,"continent":"Oceania","cluster":"Fossil Dependent"},{"rank":114,"country":"Japan","value":22.93,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":115,"country":"Mauritania","value":22.7,"continent":"África","cluster":"Fossil Dependent"},{"rank":116,"country":"Mexico","value":21.12,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":117,"country":"Somalia","value":20.93,"continent":"África","cluster":"Solar Pioneers"},{"rank":118,"country":"Congo","value":20.88,"continent":"África","cluster":"Fossil Dependent"},{"rank":119,"country":"Philippines","value":20.47,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":120,"country":"Malaysia","value":20.37,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":121,"country":"Nauru","value":20.0,"continent":"Oceania","cluster":"Solar Pioneers"},{"rank":122,"country":"India","value":19.81,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":123,"country":"Senegal","value":19.79,"continent":"África","cluster":"Fossil Dependent"},{"rank":124,"country":"Mali","value":19.46,"continent":"África","cluster":"Fossil Dependent"},{"rank":125,"country":"Dominican Republic","value":18.85,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":126,"country":"Haiti","value":18.61,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":127,"country":"Russia","value":18.1,"continent":"Europa","cluster":"Fossil Dependent"},{"rank":128,"country":"Indonesia","value":18.09,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":129,"country":"Mauritius","value":17.89,"continent":"África","cluster":"Fossil Dependent"},{"rank":130,"country":"Burkina Faso","value":17.16,"continent":"África","cluster":"Fossil Dependent"},{"rank":131,"country":"Aruba","value":17.0,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":132,"country":"Czechia","value":16.89,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":133,"country":"Uzbekistan","value":15.95,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":134,"country":"Seychelles","value":15.87,"continent":"África","cluster":"Fossil Dependent"},{"rank":135,"country":"Malta","value":15.53,"continent":"Europa","cluster":"Fossil Dependent"},{"rank":136,"country":"Kazakhstan","value":15.21,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":137,"country":"Thailand","value":14.84,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":138,"country":"Tonga","value":14.29,"continent":"Oceania","cluster":"Fossil Dependent"},{"rank":139,"country":"Israel","value":13.81,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":140,"country":"Saint Vincent and the Grenadines","value":13.33,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":141,"country":"Jamaica","value":12.6,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":142,"country":"South Africa","value":12.51,"continent":"África","cluster":"Fossil Dependent"},{"rank":143,"country":"Azerbaijan","value":11.75,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":144,"country":"Yemen","value":11.24,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":145,"country":"Egypt","value":11.2,"continent":"África","cluster":"Fossil Dependent"},{"rank":146,"country":"Eritrea","value":11.11,"continent":"África","cluster":"Fossil Dependent"},{"rank":147,"country":"Taiwan","value":10.92,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":148,"country":"Moldova","value":10.71,"continent":"Europa","cluster":"Fossil Dependent"},{"rank":149,"country":"South Korea","value":9.71,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":150,"country":"Solomon Islands","value":9.09,"continent":"Oceania","cluster":"Fossil Dependent"},{"rank":151,"country":"Barbados","value":9.01,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":152,"country":"Mongolia","value":8.84,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":153,"country":"United Arab Emirates","value":8.81,"continent":"Ásia","cluster":"Outros"},{"rank":154,"country":"Saint Kitts and Nevis","value":8.7,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":155,"country":"Guam","value":8.6,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":156,"country":"Antigua and Barbuda","value":8.11,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":157,"country":"Maldives","value":7.06,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":158,"country":"Puerto Rico","value":6.0,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":159,"country":"American Samoa","value":5.56,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":160,"country":"Chad","value":5.41,"continent":"África","cluster":"Fossil Dependent"},{"rank":161,"country":"Iran","value":5.32,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":162,"country":"Singapore","value":4.93,"continent":"Ásia","cluster":"Outros"},{"rank":163,"country":"Oman","value":4.89,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":164,"country":"Tunisia","value":4.4,"continent":"África","cluster":"Fossil Dependent"},{"rank":165,"country":"Cayman Islands","value":4.22,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":166,"country":"Qatar","value":4.02,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":167,"country":"Cuba","value":4.01,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":168,"country":"Benin","value":3.96,"continent":"África","cluster":"Fossil Dependent"},{"rank":169,"country":"Turks and Caicos Islands","value":3.7,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":170,"country":"Syria","value":3.54,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":171,"country":"Niger","value":3.16,"continent":"África","cluster":"Fossil Dependent"},{"rank":172,"country":"Belarus","value":3.08,"continent":"Europa","cluster":"Fossil Dependent"},{"rank":173,"country":"Guyana","value":2.9,"continent":"América do Sul","cluster":"Fossil Dependent"},{"rank":174,"country":"Saint Lucia","value":2.5,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":175,"country":"Kuwait","value":2.24,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":176,"country":"Saudi Arabia","value":2.16,"continent":"Ásia","cluster":"Outros"},{"rank":177,"country":"Bangladesh","value":1.89,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":178,"country":"South Sudan","value":1.79,"continent":"África","cluster":"Fossil Dependent"},{"rank":179,"country":"Bermuda","value":1.64,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":180,"country":"Iraq","value":1.62,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":181,"country":"Algeria","value":1.07,"continent":"África","cluster":"Fossil Dependent"},{"rank":182,"country":"Hong Kong","value":1.04,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":183,"country":"Bahamas","value":0.89,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":184,"country":"Botswana","value":0.29,"continent":"África","cluster":"Fossil Dependent"},{"rank":185,"country":"Bahrain","value":0.26,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":186,"country":"Brunei","value":0.18,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":187,"country":"Trinidad and Tobago","value":0.1,"continent":"América do Norte","cluster":"Fossil Dependent"},{"rank":188,"country":"Turkmenistan","value":0.03,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":189,"country":"Libya","value":0.03,"continent":"África","cluster":"Fossil Dependent"},{"rank":190,"country":"Gambia","value":0.0,"continent":"África","cluster":"Fossil Dependent"},{"rank":191,"country":"East Timor","value":0.0,"continent":"Ásia","cluster":"Fossil Dependent"},{"rank":192,"country":"Montserrat","value":0.0,"continent":"Oceania","cluster":"Fossil Dependent"},{"rank":193,"country":"Guinea-Bissau","value":0.0,"continent":"África","cluster":"Fossil Dependent"},{"rank":194,"country":"Gibraltar","value":0.0,"continent":"Outros","cluster":"Fossil Dependent"},{"rank":195,"country":"Grenada","value":0.0,"continent":"América do Norte","cluster":"Fossil Dependent"}],"annual_growth":[{"year":2001,"yoy":-0.672},{"year":2002,"yoy":-0.136},{"year":2003,"yoy":-0.466},{"year":2004,"yoy":0.54},{"year":2005,"yoy":0.114},{"year":2006,"yoy":0.132},{"year":2007,"yoy":-0.254},{"year":2008,"yoy":0.934},{"year":2009,"yoy":0.559},{"year":2010,"yoy":0.254},{"year":2011,"yoy":0.295},{"year":2012,"yoy":0.961},{"year":2013,"yoy":0.735},{"year":2014,"yoy":0.551},{"year":2015,"yoy":0.704},{"year":2016,"yoy":0.765},{"year":2017,"yoy":0.734},{"year":2018,"yoy":0.623},{"year":2019,"yoy":0.982},{"year":2020,"yoy":1.916},{"year":2021,"yoy":0.115},{"year":2022,"yoy":1.368},{"year":2023,"yoy":0.853},{"year":2024,"yoy":1.612},{"year":2025,"yoy":1.825}],"composition":[{"year":2000,"solar":0.01,"wind":0.2,"hydro":17.21,"nuclear":16.63,"fossil":64.66,"other_renew":1.29},{"year":2001,"solar":0.01,"wind":0.25,"hydro":16.54,"nuclear":16.86,"fossil":65.1,"other_renew":1.25},{"year":2002,"solar":0.01,"wind":0.33,"hydro":16.27,"nuclear":16.54,"fossil":65.55,"other_renew":1.3},{"year":2003,"solar":0.01,"wind":0.38,"hydro":15.71,"nuclear":15.64,"fossil":66.92,"other_renew":1.34},{"year":2004,"solar":0.02,"wind":0.49,"hydro":16.09,"nuclear":15.62,"fossil":66.4,"other_renew":1.38},{"year":2005,"solar":0.02,"wind":0.58,"hydro":16.06,"nuclear":15.04,"fossil":66.87,"other_renew":1.44},{"year":2006,"solar":0.03,"wind":0.71,"hydro":16.02,"nuclear":14.66,"fossil":67.11,"other_renew":1.47},{"year":2007,"solar":0.04,"wind":0.87,"hydro":15.54,"nuclear":13.71,"fossil":68.31,"other_renew":1.53},{"year":2008,"solar":0.06,"wind":1.1,"hydro":16.14,"nuclear":13.4,"fossil":67.69,"other_renew":1.61},{"year":2009,"solar":0.1,"wind":1.39,"hydro":16.25,"nuclear":13.32,"fossil":67.21,"other_renew":1.73},{"year":2010,"solar":0.15,"wind":1.63,"hydro":16.12,"nuclear":12.82,"fossil":67.46,"other_renew":1.82},{"year":2011,"solar":0.29,"wind":2.0,"hydro":15.88,"nuclear":11.88,"fossil":68.1,"other_renew":1.85},{"year":2012,"solar":0.43,"wind":2.35,"hydro":16.26,"nuclear":10.8,"fossil":68.22,"other_renew":1.94},{"year":2013,"solar":0.57,"wind":2.74,"hydro":16.37,"nuclear":10.57,"fossil":67.71,"other_renew":2.03},{"year":2014,"solar":0.83,"wind":2.97,"hydro":16.3,"nuclear":10.52,"fossil":67.22,"other_renew":2.16},{"year":2015,"solar":1.07,"wind":3.46,"hydro":16.17,"nuclear":10.55,"fossil":66.48,"other_renew":2.27},{"year":2016,"solar":1.33,"wind":3.89,"hydro":16.26,"nuclear":10.41,"fossil":65.86,"other_renew":2.26},{"year":2017,"solar":1.75,"wind":4.48,"hydro":15.94,"nuclear":10.2,"fossil":65.34,"other_renew":2.3},{"year":2018,"solar":2.17,"wind":4.79,"hydro":15.78,"nuclear":10.05,"fossil":64.86,"other_renew":2.34},{"year":2019,"solar":2.6,"wind":5.3,"hydro":15.76,"nuclear":10.26,"fossil":63.66,"other_renew":2.42},{"year":2020,"solar":3.19,"wind":5.96,"hydro":16.27,"nuclear":9.91,"fossil":62.1,"other_renew":2.57},{"year":2021,"solar":3.73,"wind":6.57,"hydro":15.18,"nuclear":9.78,"fossil":62.12,"other_renew":2.63},{"year":2022,"solar":4.61,"wind":7.29,"hydro":14.95,"nuclear":9.13,"fossil":61.4,"other_renew":2.62},{"year":2023,"solar":5.61,"wind":7.82,"hydro":14.29,"nuclear":9.09,"fossil":60.58,"other_renew":2.6},{"year":2024,"solar":6.93,"wind":8.11,"hydro":14.33,"nuclear":8.98,"fossil":59.09,"other_renew":2.56},{"year":2025,"solar":8.74,"wind":8.54,"hydro":13.96,"nuclear":8.85,"fossil":57.39,"other_renew":2.52}],"filters":{"years":[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],"clusters":["Hydro Leaders","Wind Champions","Solar Pioneers","Fossil Dependent","Mixed Renewables"],"continents":["África","Ásia","Europa","América do Norte","América do Sul","Oceania"]},"summary":{"renewables_2025":33.76,"renewables_2000":18.72,"solar_2025":8.74,"solar_2000":0.01,"wind_2025":8.54,"wind_2000":0.2,"fossil_2025":57.39,"fossil_2000":64.66,"countries":190,"years":26,"growth_pct":80.4}};

// ── State ──────────────────────────────────────────
let DATA = null;
let activeFilters = { years: [], clusters: [], continents: [] };
let charts = {};

// ── Color Maps ──────────────────────────────────────
const COLORS = {
  green:   '#3DBE6C',
  greenDk: '#2A9350',
  solar:   '#F5C518',
  wind:    '#4A90D9',
  hydro:   '#2EBFA5',
  nuclear: '#9B6FCF',
  fossil:  '#E05252',
  other:   '#7BC67E',
  clusters: {
    'Hydro Leaders':    '#2EBFA5',
    'Wind Champions':   '#4A90D9',
    'Solar Pioneers':   '#F5C518',
    'Fossil Dependent': '#E05252',
    'Mixed Renewables': '#9B6FCF'
  },
  continents: {
    'África':          '#F5C518',
    'Ásia':            '#4A90D9',
    'Europa':          '#3DBE6C',
    'América do Norte':'#E05252',
    'América do Sul':  '#2EBFA5',
    'Oceania':         '#9B6FCF',
    'Outros':          '#8C9BB0'
  }
};

const CLUSTER_PT = {
  'Hydro Leaders':    'Hydro Leaders',
  'Wind Champions':   'Wind Champions',
  'Solar Pioneers':   'Solar Pioneers',
  'Fossil Dependent': 'Fossil Dependent',
  'Mixed Renewables': 'Mixed Renewables'
};

// ── Init ────────────────────────────────────────────
async function init() {
  try {
    // Dados embarcados diretamente no JS — sem dependência de fetch externo
    DATA = EMBEDDED_DATA;
    setupFilters();
    buildDashboard();
    setupFilterUI();
  } catch (e) {
    console.error('Erro ao inicializar dashboard:', e);
    document.getElementById('loading').innerHTML =
      '<p style="color:#E05252;padding:40px;text-align:center">Erro ao inicializar o dashboard. Verifique o console.</p>';
  }
}

// ── Setup Filters UI ────────────────────────────────
function setupFilters() {
  const { years, clusters, continents } = DATA.filters;

  renderChips('filter-years',      years,      activeFilters.years,      'year');
  renderChips('filter-clusters',   clusters,   activeFilters.clusters,   'cluster');
  renderChips('filter-continents', continents, activeFilters.continents, 'continent');
}

function renderChips(containerId, items, activeArr, type) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  items.forEach(item => {
    const chip = document.createElement('span');
    chip.className = 'filter-chip' + (activeArr.includes(item) ? ' selected' : '');
    chip.textContent = item;
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      const idx = activeArr.indexOf(item);
      if (idx > -1) activeArr.splice(idx, 1);
      else activeArr.push(item);
    });
    el.appendChild(chip);
  });
}

function setupFilterUI() {
  const btn = document.getElementById('btn-filtros');
  const dropdown = document.getElementById('filter-dropdown');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== btn)
      dropdown.classList.remove('active');
  });

  document.getElementById('btn-aplicar').addEventListener('click', () => {
    dropdown.classList.remove('active');
    applyFilters();
  });

  document.getElementById('btn-limpar').addEventListener('click', () => {
    activeFilters.years = [];
    activeFilters.clusters = [];
    activeFilters.continents = [];
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('selected'));
    applyFilters();
  });
}

function applyFilters() {
  updateActiveFilterBar();
  updateRanking();
  updateScatter();
}

function updateActiveFilterBar() {
  const bar = document.getElementById('active-filters-bar');
  const all = [
    ...activeFilters.years.map(y => ({ label: y, type: 'year' })),
    ...activeFilters.clusters.map(c => ({ label: c, type: 'cluster' })),
    ...activeFilters.continents.map(c => ({ label: c, type: 'continent' }))
  ];
  if (all.length === 0) { bar.classList.remove('visible'); return; }
  bar.classList.add('visible');
  bar.innerHTML = '<span>Filtros ativos:</span>';
  all.forEach(f => {
    const tag = document.createElement('div');
    tag.className = 'active-filter-tag';
    tag.innerHTML = `${f.label} <button onclick="removeFilter('${f.type}','${f.label}')">×</button>`;
    bar.appendChild(tag);
  });
}

function removeFilter(type, value) {
  if (type === 'year')      { const i = activeFilters.years.indexOf(+value || value);      if (i > -1) activeFilters.years.splice(i, 1); }
  if (type === 'cluster')   { const i = activeFilters.clusters.indexOf(value);   if (i > -1) activeFilters.clusters.splice(i, 1); }
  if (type === 'continent') { const i = activeFilters.continents.indexOf(value); if (i > -1) activeFilters.continents.splice(i, 1); }
  document.querySelectorAll('.filter-chip').forEach(c => {
    const v = c.textContent.trim();
    if (v == value) c.classList.remove('selected');
  });
  applyFilters();
}

// ── Filter helpers ───────────────────────────────────
function getFilteredRanking() {
  let data = [...DATA.ranking];
  if (activeFilters.clusters.length)   data = data.filter(r => activeFilters.clusters.includes(r.cluster));
  if (activeFilters.continents.length) data = data.filter(r => activeFilters.continents.includes(r.continent));
  return data;
}

function getFilteredScatter() {
  let data = [...DATA.scatter_data];
  if (activeFilters.clusters.length)   data = data.filter(r => activeFilters.clusters.includes(r.cluster));
  if (activeFilters.continents.length) data = data.filter(r => activeFilters.continents.includes(r.continent));
  return data;
}

// ── Build Dashboard ──────────────────────────────────
function buildDashboard() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';

  buildHeroKPIs();
  buildIndicators();
  buildTrendChart();
  buildDonutChart();
  buildForecastTable();
  buildSolarChart();
  buildWindChart();
  buildBigEconomiesChart();
  buildBrazilHighlight();
  buildRanking();
  buildScatterChart();
  buildClusterProfiles();
  buildDistributionChart();
  buildCompositionChart();
  buildAnnualGrowthChart();
}

// ── KPIs ─────────────────────────────────────────────
function buildHeroKPIs() {
  const s = DATA.summary;
  document.getElementById('kpi-renew').textContent   = s.renewables_2025.toFixed(1) + '%';
  document.getElementById('kpi-countries').textContent = s.countries;
  document.getElementById('kpi-years').textContent   = s.years;
  document.getElementById('kpi-growth').textContent  = '+' + s.growth_pct.toFixed(1) + '%';
}

// ── Indicators ───────────────────────────────────────
function buildIndicators() {
  const s = DATA.summary;
  const deltaRen   = (s.renewables_2025 - s.renewables_2000).toFixed(1);
  const deltaSolar = (s.solar_2025 - s.solar_2000).toFixed(1);
  const deltaWind  = (s.wind_2025 - s.wind_2000).toFixed(1);
  const deltaFoss  = (s.fossil_2025 - s.fossil_2000).toFixed(1);

  document.getElementById('ind-renew-val').textContent   = s.renewables_2025.toFixed(1) + '%';
  document.getElementById('ind-solar-val').textContent   = s.solar_2025.toFixed(2) + '%';
  document.getElementById('ind-wind-val').textContent    = s.wind_2025.toFixed(2) + '%';
  document.getElementById('ind-fossil-val').textContent  = s.fossil_2025.toFixed(1) + '%';

  document.getElementById('ind-renew-delta').textContent  = '▲ +' + deltaRen + ' pp desde 2000';
  document.getElementById('ind-solar-delta').textContent  = '▲ +' + deltaSolar + ' pp desde 2000';
  document.getElementById('ind-wind-delta').textContent   = '▲ +' + deltaWind + ' pp desde 2000';
  document.getElementById('ind-fossil-delta').textContent = '▼ ' + deltaFoss + ' pp desde 2000';
}

// ── Trend Chart ──────────────────────────────────────
function buildTrendChart() {
  const trend = DATA.global_trend;
  const fitted = DATA.forecast.historical_fitted;
  const fc = DATA.forecast.forecast;
  const r2 = DATA.forecast.r2;

  const years    = trend.map(d => d.year);
  const renew    = trend.map(d => d.renewables_share_elec);
  const fossil   = trend.map(d => d.fossil_share_elec);
  const fittedY  = fitted.map(d => d.fitted);
  const fcYears  = fc.map(d => d.year);
  const fcVals   = fc.map(d => d.value);

  document.getElementById('r2-value').textContent = 'R² = ' + r2.toFixed(4);

  const allYears = [...years, ...fcYears];
  const allFitted = [...fittedY, ...fcVals];

  const ctx = document.getElementById('trendChart').getContext('2d');
  charts.trend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: allYears,
      datasets: [
        {
          label: 'Renováveis %',
          data: [...renew, ...Array(fcYears.length).fill(null)],
          borderColor: COLORS.green,
          backgroundColor: hexAlpha(COLORS.green, 0.08),
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 4,
          fill: true,
          tension: 0.35,
          order: 2
        },
        {
          label: 'Fóssil %',
          data: [...fossil, ...Array(fcYears.length).fill(null)],
          borderColor: COLORS.fossil,
          backgroundColor: 'transparent',
          borderWidth: 1.8,
          pointRadius: 0,
          pointHoverRadius: 4,
          fill: false,
          tension: 0.35,
          borderDash: [0],
          order: 3
        },
        {
          label: 'Regressão Polinomial',
          data: allFitted,
          borderColor: '#E05252',
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderDash: [5, 4],
          pointRadius: 0,
          fill: false,
          tension: 0.35,
          order: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(17,24,39,0.92)',
          titleColor: '#fff',
          bodyColor: 'rgba(255,255,255,0.75)',
          padding: 12,
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y !== null ? ctx.parsed.y.toFixed(2) + '%' : 'N/A'}`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false },
          ticks: { color: '#8C9BB0', font: { family: 'Roboto', size: 11 }, maxTicksLimit: 8 }
        },
        y: {
          grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false },
          ticks: { color: '#8C9BB0', font: { family: 'Roboto', size: 11 }, callback: v => v + '%' },
          min: 10, max: 75
        }
      }
    }
  });
}

// ── Donut Chart ──────────────────────────────────────
function buildDonutChart() {
  const m = DATA.matrix_2025;
  const ctx = document.getElementById('donutChart').getContext('2d');
  const labels = ['Fóssil', 'Hidro', 'Nuclear', 'Eólica', 'Solar', 'Outras Renov.'];
  const values = [m.fossil, m.hydro, m.nuclear, m.wind, m.solar, m.other];
  const colors = [COLORS.fossil, COLORS.hydro, COLORS.nuclear, COLORS.wind, COLORS.solar, COLORS.other];

  charts.donut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{ data: values, backgroundColor: colors, borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#5A6A7A',
            font: { family: 'Roboto', size: 11.5 },
            padding: 12,
            usePointStyle: true,
            pointStyleWidth: 8
          }
        },
        tooltip: {
          backgroundColor: 'rgba(17,24,39,0.92)',
          titleColor: '#fff',
          bodyColor: 'rgba(255,255,255,0.75)',
          padding: 10,
          callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed.toFixed(2)}%` }
        }
      }
    }
  });
}

// ── Forecast Table ────────────────────────────────────
function buildForecastTable() {
  const fc = DATA.forecast.forecast;
  const tbody = document.getElementById('forecast-tbody');
  let prev = DATA.summary.renewables_2025;
  tbody.innerHTML = '';
  fc.forEach(row => {
    const delta = (row.value - prev).toFixed(2);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="year-cell">${row.year}</td>
      <td class="val-cell">${row.value.toFixed(2)}%</td>
      <td class="delta-cell">+${delta}pp</td>`;
    tbody.appendChild(tr);
    prev = row.value;
  });
}

// ── Solar Chart ───────────────────────────────────────
function buildSolarChart() {
  const data = DATA.solar_series;
  const ctx  = document.getElementById('solarChart').getContext('2d');
  charts.solar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.year),
      datasets: [{
        label: 'Solar %',
        data: data.map(d => d.value),
        backgroundColor: data.map(d => hexAlpha(COLORS.solar, d.year >= 2020 ? 1 : 0.75)),
        borderRadius: 4,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: tooltipDefaults('Solar %') },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#8C9BB0', font: { size: 10 }, maxTicksLimit: 7 } },
        y: { grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false }, ticks: { color: '#8C9BB0', font: { size: 11 }, callback: v => v + '%' } }
      }
    }
  });
}

// ── Wind Chart ────────────────────────────────────────
function buildWindChart() {
  const data = DATA.wind_series;
  const ctx  = document.getElementById('windChart').getContext('2d');
  charts.wind = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.year),
      datasets: [{
        label: 'Eólica %',
        data: data.map(d => d.value),
        backgroundColor: data.map(d => hexAlpha(COLORS.wind, d.year >= 2020 ? 1 : 0.75)),
        borderRadius: 4,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: tooltipDefaults('Eólica %') },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#8C9BB0', font: { size: 10 }, maxTicksLimit: 7 } },
        y: { grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false }, ticks: { color: '#8C9BB0', font: { size: 11 }, callback: v => v + '%' } }
      }
    }
  });
}

// ── Big Economies Chart ───────────────────────────────
function buildBigEconomiesChart() {
  const econ = DATA.big_economies;
  const ECON_COLORS = {
    'Brasil':   COLORS.green,
    'China':    '#E05252',
    'Alemanha': COLORS.wind,
    'EUA':      COLORS.solar,
    'França':   COLORS.nuclear,
    'Índia':    COLORS.hydro
  };
  const firstKey = Object.keys(econ)[0];
  const years = econ[firstKey].map(d => d.year);

  const datasets = Object.entries(econ).map(([name, series]) => ({
    label: name,
    data: series.map(d => d.value),
    borderColor: ECON_COLORS[name],
    backgroundColor: 'transparent',
    borderWidth: 2,
    pointRadius: 0,
    pointHoverRadius: 4,
    tension: 0.35
  }));

  const ctx = document.getElementById('economiesChart').getContext('2d');
  charts.economies = new Chart(ctx, {
    type: 'line',
    data: { labels: years, datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#5A6A7A', font: { family: 'Roboto', size: 11 }, padding: 14, usePointStyle: true }
        },
        tooltip: {
          backgroundColor: 'rgba(17,24,39,0.92)',
          titleColor: '#fff',
          bodyColor: 'rgba(255,255,255,0.75)',
          padding: 12,
          callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}%` }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false }, ticks: { color: '#8C9BB0', font: { size: 10 }, maxTicksLimit: 7 } },
        y: { grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false }, ticks: { color: '#8C9BB0', font: { size: 11 }, callback: v => v + '%' } }
      }
    }
  });
}

// ── Brazil Highlight ──────────────────────────────────
function buildBrazilHighlight() {
  const b = DATA.brazil_highlight;
  document.getElementById('br-renew').textContent = b.renewables + '%';
  document.getElementById('br-solar').textContent = b.solar + '%';
  document.getElementById('br-wind').textContent  = b.wind + '%';
  document.getElementById('br-hydro').textContent = b.hydro + '%';
}

// ── Ranking ───────────────────────────────────────────
function buildRanking() { updateRanking(); }

function updateRanking() {
  const items = getFilteredRanking();
  const container = document.getElementById('ranking-list');
  container.innerHTML = '';

  items.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'ranking-item';

    let rankClass = '';
    if (item.rank === 1) rankClass = 'gold';
    else if (item.rank === 2) rankClass = 'silver';
    else if (item.rank === 3) rankClass = 'bronze';

    const barColor = item.value === 100 ? COLORS.green :
                     item.value >= 50   ? hexAlpha(COLORS.green, 0.75) :
                     item.value >= 25   ? COLORS.solar :
                     COLORS.fossil;

    div.innerHTML = `
      <span class="rank-num ${rankClass}">${item.rank}</span>
      <span class="rank-country" title="${item.country}">${item.country}</span>
      <div class="rank-bar-wrap">
        <div class="rank-bar" style="width:${item.value}%;background:${barColor}"></div>
      </div>
      <span class="rank-value">${item.value.toFixed(1)}%</span>`;
    container.appendChild(div);
  });
}

// ── Scatter Chart ─────────────────────────────────────
function buildScatterChart() {
  renderScatter(getFilteredScatter());
}

function renderScatter(data) {
  const ctx = document.getElementById('scatterChart').getContext('2d');
  if (charts.scatter) { charts.scatter.destroy(); }

  const grouped = {};
  data.forEach(d => {
    if (!grouped[d.cluster]) grouped[d.cluster] = [];
    grouped[d.cluster].push({ x: d.fossil, y: d.renewables, country: d.country });
  });

  const datasets = Object.entries(grouped).map(([cluster, pts]) => ({
    label: cluster,
    data: pts,
    backgroundColor: hexAlpha(COLORS.clusters[cluster] || '#8C9BB0', 0.7),
    borderColor: COLORS.clusters[cluster] || '#8C9BB0',
    borderWidth: 1,
    pointRadius: 5,
    pointHoverRadius: 7
  }));

  charts.scatter = new Chart(ctx, {
    type: 'scatter',
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#5A6A7A', font: { family: 'Roboto', size: 11 }, padding: 12, usePointStyle: true }
        },
        tooltip: {
          backgroundColor: 'rgba(17,24,39,0.92)',
          titleColor: '#fff',
          bodyColor: 'rgba(255,255,255,0.75)',
          padding: 10,
          callbacks: {
            title: items => items[0].raw.country,
            label: item => ` Renov: ${item.parsed.y}% | Fóssil: ${item.parsed.x}%`
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Fóssil %', color: '#8C9BB0', font: { size: 11 } },
          grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false },
          ticks: { color: '#8C9BB0', font: { size: 10 } }
        },
        y: {
          title: { display: true, text: 'Renováveis %', color: '#8C9BB0', font: { size: 11 } },
          grid: { color: 'rgba(220,228,240,0.4)', drawBorder: false },
          ticks: { color: '#8C9BB0', font: { size: 10 }, callback: v => v + '%' }
        }
      }
    }
  });
}

function updateScatter() { renderScatter(getFilteredScatter()); }

// ── Cluster Profiles ──────────────────────────────────
function buildClusterProfiles() {
  const profiles = DATA.cluster_profiles;
  const container = document.getElementById('cluster-profiles-grid');
  container.innerHTML = '';

  const order = ['Hydro Leaders','Wind Champions','Solar Pioneers','Fossil Dependent','Mixed Renewables'];
  order.forEach(name => {
    const p = profiles[name];
    if (!p) return;
    const color = COLORS.clusters[name];
    const card = document.createElement('div');
    card.className = 'cluster-profile-card';
    card.style.background = hexAlpha(color, 0.06);
    card.style.borderColor = hexAlpha(color, 0.25);
    card.innerHTML = `
      <div class="cluster-profile-header">
        <div class="cluster-dot" style="background:${color}"></div>
        <span class="cluster-profile-name">${name}</span>
        <span style="margin-left:auto;font-size:10.5px;color:#8C9BB0">${p.count} países</span>
      </div>
      <div class="cluster-profile-stats">
        <div class="cluster-stat-row"><span class="label">Renov.</span><span class="val" style="color:${color}">${p.renewables}%</span></div>
        <div class="cluster-stat-row"><span class="label">Solar</span><span class="val">${p.solar}%</span></div>
        <div class="cluster-stat-row"><span class="label">Eólica</span><span class="val">${p.wind}%</span></div>
        <div class="cluster-stat-row"><span class="label">Hidro</span><span class="val">${p.hydro}%</span></div>
        <div class="cluster-stat-row"><span class="label">Fóssil</span><span class="val">${p.fossil}%</span></div>
      </div>
      <div class="cluster-countries">Top: ${p.top5.join(', ')}</div>`;
    container.appendChild(card);
  });
}

// ── Distribution Chart ────────────────────────────────
function buildDistributionChart() {
  const profiles = DATA.cluster_profiles;
  const total = Object.values(profiles).reduce((a,b) => a + b.count, 0);
  const order = ['Hydro Leaders','Wind Champions','Solar Pioneers','Mixed Renewables','Fossil Dependent'];
  const container = document.getElementById('dist-bars');
  container.innerHTML = '';
  order.forEach(name => {
    const p = profiles[name];
    if (!p) return;
    const pct = (p.count / total * 100).toFixed(1);
    const color = COLORS.clusters[name];
    const row = document.createElement('div');
    row.className = 'dist-row';
    row.innerHTML = `
      <span class="dist-label">${name}</span>
      <div class="dist-bar-wrap">
        <div class="dist-bar" style="width:${pct}%;background:${hexAlpha(color,0.75)}"></div>
      </div>
      <span class="dist-count">${p.count}</span>`;
    container.appendChild(row);
  });
}

// ── Composition Chart ─────────────────────────────────
function buildCompositionChart() {
  const comp = DATA.composition;
  const years = comp.map(d => d.year);
  const ctx = document.getElementById('compositionChart').getContext('2d');

  charts.composition = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { label: 'Fóssil',      data: comp.map(d => d.fossil),      borderColor: COLORS.fossil,  backgroundColor: hexAlpha(COLORS.fossil, 0.55),  fill: true, borderWidth: 1, pointRadius: 0, tension: 0.3 },
        { label: 'Hidro',       data: comp.map(d => d.hydro),       borderColor: COLORS.hydro,   backgroundColor: hexAlpha(COLORS.hydro, 0.6),    fill: true, borderWidth: 1, pointRadius: 0, tension: 0.3 },
        { label: 'Solar',       data: comp.map(d => d.solar),       borderColor: COLORS.solar,   backgroundColor: hexAlpha(COLORS.solar, 0.7),    fill: true, borderWidth: 1, pointRadius: 0, tension: 0.3 },
        { label: 'Eólica',      data: comp.map(d => d.wind),        borderColor: COLORS.wind,    backgroundColor: hexAlpha(COLORS.wind, 0.6),     fill: true, borderWidth: 1, pointRadius: 0, tension: 0.3 },
        { label: 'Nuclear',     data: comp.map(d => d.nuclear),     borderColor: COLORS.nuclear, backgroundColor: hexAlpha(COLORS.nuclear, 0.5),  fill: true, borderWidth: 1, pointRadius: 0, tension: 0.3 },
        { label: 'Outras Renov.', data: comp.map(d => d.other_renew), borderColor: COLORS.other, backgroundColor: hexAlpha(COLORS.other, 0.6),   fill: true, borderWidth: 1, pointRadius: 0, tension: 0.3 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#5A6A7A', font: { family:'Roboto', size:11 }, padding:10, usePointStyle:true }
        },
        tooltip: {
          backgroundColor:'rgba(17,24,39,0.92)', titleColor:'#fff', bodyColor:'rgba(255,255,255,0.75)', padding:10,
          callbacks: { label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)}%` }
        }
      },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { color:'#8C9BB0', font:{size:10}, maxTicksLimit:7 } },
        y: { stacked: true, grid: { color:'rgba(220,228,240,0.4)', drawBorder:false }, ticks: { color:'#8C9BB0', font:{size:11}, callback: v => v+'%' }, max: 100 }
      }
    }
  });
}

// ── Annual Growth Chart ───────────────────────────────
function buildAnnualGrowthChart() {
  const ag = DATA.annual_growth;
  const ctx = document.getElementById('growthChart').getContext('2d');

  charts.growth = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ag.map(d => d.year),
      datasets: [{
        label: 'Var. anual (pp)',
        data: ag.map(d => d.yoy),
        backgroundColor: ag.map(d => d.yoy >= 0 ? hexAlpha(COLORS.green, 0.8) : hexAlpha(COLORS.fossil, 0.7)),
        borderRadius: 3,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor:'rgba(17,24,39,0.92)', titleColor:'#fff', bodyColor:'rgba(255,255,255,0.75)', padding:10,
          callbacks: { label: ctx => ` ${ctx.parsed.y > 0 ? '+' : ''}${ctx.parsed.y.toFixed(2)} pp` }
        }
      },
      scales: {
        x: { grid:{ display:false }, ticks:{ color:'#8C9BB0', font:{size:10}, maxTicksLimit:8 } },
        y: {
          grid:{ color:'rgba(220,228,240,0.4)', drawBorder:false },
          ticks:{ color:'#8C9BB0', font:{size:11}, callback: v => (v>0?'+':'')+v+' pp' },
          afterDataLimits: scale => { scale.min = scale.min - 0.2; scale.max = scale.max + 0.1; }
        }
      }
    }
  });
}

// ── Helpers ───────────────────────────────────────────
function hexAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function tooltipDefaults(label) {
  return {
    backgroundColor: 'rgba(17,24,39,0.92)',
    titleColor: '#fff',
    bodyColor: 'rgba(255,255,255,0.75)',
    padding: 10,
    callbacks: { label: ctx => ` ${label}: ${ctx.parsed.y.toFixed(3)}%` }
  };
}

// ── Start ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
