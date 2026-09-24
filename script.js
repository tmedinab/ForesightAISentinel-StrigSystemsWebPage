/**
 * Strig Systems — Athene Noctua
 * Enterprise Production Client Controller (Bilingual ES / EN)
 */

const translations = {
  es: {
    // Nav
    nav_problem: "Problema",
    nav_compare: "Comparativa",
    nav_tech: "Tecnología",
    nav_pilot: "Programa Piloto",
    nav_alliances: "I+D & Alianzas",
    nav_team: "Equipo",
    nav_cta: "Postular a Piloto",

    // Hero
    hero_badge: "Proyecto Semilla Inicia CORFO • UdeC • Combate de Incendios en Primera Línea",
    hero_title_1: "Los riesgos se mueven rápido.",
    hero_title_2: "Nosotros los vemos venir.",
    hero_sub: "Plataforma de vigilancia territorial autónoma con drones VTOL e inferencia Edge AI a bordo. Cerramos la brecha nocturna de 10 horas detectando actividad humana no autorizada y precursores térmicos antes de la ignición — optimizando el gasto en patrullaje terrestre hasta en un 40% y evitando el despliegue millonario de aviones de combate al amanecer.",
    hero_cta_primary: "Postular a Piloto Operativo",
    hero_cta_secondary: "Ver Capacidades del Sistema",

    // Metrics
    m1_title: "Ventana Crítica Nocturna",
    m1_sub: "Vigilancia autónoma continua (20:00 a 06:00)",
    m2_title: "Visión Aérea Total",
    m2_sub: "Visión térmica en quebradas invisibles para 4x4",
    m3_title: "Alerta Preignición",
    m3_sub: "Edge AI a bordo (<5% falsas alarmas)",
    m4_title: "Gasto Operacional Nocturno",
    m4_sub: "Ahorro directo vs patrullas 4x4 terrestres",
    m4_tooltip: "Ahorro neto directo estimado al reemplazar 2 camionetas 4x4 terrestres por 1 base autónoma Athene IaaS Nest Alpha en clústeres de 25.000 ha durante la temporada crítica de 5 meses.",

    // Problem
    prob_tag: "El Diagnóstico Territorial",
    prob_title: "La brecha nocturna que cuesta US$130M al año",
    corma_tooltip: "Dato oficial Corporación Chilena de la Madera (CORMA): Gasto consolidado anual de la industria y el Estado en combate y prevención de incendios forestales en Chile.",
    prob_sub: "El 99,7% de los incendios forestales son causados por el ser humano. La aviación tripulada combate de día, pero por seguridad y normativa DGAC no vuela de noche. Cuando el viento y el riesgo de intencionalidad son más altos, el cielo queda vacío y las camionetas en tierra no tienen visibilidad en el bosque profundo.",
    p1_head: "Centrales de Operaciones",
    p1_desc: "Incertidumbre constante. Cuando los satélites reportan calor, el foco ya ha alcanzado escala incontrolable.",
    p1_tag: "Información fragmentada",
    p2_head: "Empresas & Propietarios",
    p2_desc: "Riesgo permanente de pérdidas patrimoniales catastróficas en madera, biomasa e infraestructura productiva.",
    p2_tag: "Pérdidas millonarias",
    p3_head: "Brigadistas en Terreno",
    p3_desc: "Exposición extrema a emboscadas, cortes de camino o accidentes al ingresar de noche a ciegas por caminos de ripio, con menos del 12% de visibilidad efectiva fuera de la huella.",
    p3_tag: "Riesgo vital innecesario",
    quote_text: "Satélites sufren latencia orbital; torres fijas tienen puntos ciegos orográficos; las patrullas en camioneta 4x4 solo ven lo que tocan sus focos en el camino; y los aviones cisterna quedan en tierra al atardecer por seguridad. Athene es el centinela aéreo nocturno que detecta la fogata o el precursor antes de que nazca el incendio, evitando el despliegue millonario de aeronaves de combate al amanecer.",

    // Tactical Benchmark
    comp_tag: "Benchmark Táctico",
    comp_title: "Por Qué las Soluciones Tradicionales Fallan de Noche",
    comp_sub: "Análisis técnico comparativo entre satélites de órbita baja, torres térmicas fijas, vigilancia tripulada convencional y la plataforma autónoma Athene.",
    matrix_scroll_hint: "⇄ Desliza horizontalmente para comparar tecnologías",
    th_dim: "Dimensión Operativa",
    th_sat: "Satélites LEO<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Torres Térmicas Fijas<br><span class=\"th-sub\">Mástiles Ópticos</span>",
    th_drone: "Vigilancia Tripulada<br><span class=\"th-sub\">Avionetas Diurnas + Cuadrillas/Drones</span>",
    strig_badge: "Nuestra Arquitectura",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (VTOL Noctua-01 + Edge AI)</span>",
    r1_dim: "Patrullaje Nocturno Continuo",
    r1_sat: "Pasos orbitales discretos (1 a 4 h). Estándar macrocontinental indiscutido de día, pero con ventana ciega crítica durante la noche.",
    r1_tower: "Continuo 24/7 de alta confiabilidad, pero estrictamente limitado a la línea de vista directa (LOS) de su cuenca visible.",
    r1_drone: "Inoperante de noche. Los aviones cisterna y de coordinación quedan en tierra al atardecer por normativa DGAC/VFR nocturno (riesgo de colisión contra el relieve CFIT). En tierra, las camionetas 4x4 sufren fatiga, lentitud en ripio y nula visibilidad fuera del camino.",
    r1_strig: "<strong>Patrullaje autónomo programado</strong> en las 10 horas de vulnerabilidad nocturna con aeronave VTOL Noctua-01 y estación de acople.",
    r2_dim: "Latencia de Detección & Alerta",
    r2_sat: "<span class=\"badge-negative\">30 a 90 minutos</span> (descarga orbital, procesamiento en la nube y distribución de alertas a centrales).",
    r2_tower: "Instantánea en sensor óptico; requiere operador humano 24/7 en central para verificación y filtrado de falsas alarmas.",
    r2_drone: "Instantánea para el piloto u operador local; demorada hacia la central de despacho si no existe cobertura 4G/5G en la quebrada o predio.",
    r2_strig: "<span class=\"badge-positive\">&lt; 5 segundos</span> (Inferencia Edge AI local a bordo + radioenlace táctico de telemetría de largo alcance).",
    r3_dim: "Detección de Precursores (Humanos / Vehículos)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (Resolución espacial de 375m a 1km. Diseñado para incendios activos, incapaz de ver personas o fogatas).",
    r3_tower: "Nula en senderos boscosos densos o bajo dosel arbóreo fuera del ángulo visual del mástil.",
    r3_drone: "Severamente limitada. Las avionetas no vuelan de noche para detectar campamentos o fogatas tempranas; las patrullas en camioneta solo vigilan caminos habilitados, dejando el interior ciego.",
    r3_strig: "<span class=\"badge-positive\">Detección óptica/térmica</span> de presencia humana y vehículos antes de la ignición (causa del 99,7% de los incendios).",
    r4_dim: "Puntos Ciegos Topográficos",
    r4_sat: "Afectado por nubosidad baja, humo denso e inversión térmica que absorben la radiación infrarroja.",
    r4_tower: "<span class=\"badge-negative\">Crítico:</span> Puntos ciegos físicos insalvables tras cerros, quebradas y laderas opuestas.",
    r4_drone: "Crítico. Las cuadrillas terrestres no tienen visibilidad tras cerros ni en quebradas profundas; las aeronaves diurnas sufren con nubosidad baja y humo denso.",
    r4_strig: "<span class=\"badge-positive\">Mapeo adaptativo:</span> Vuelo autónomo por debajo del techo nuboso, perfilando quebradas y laderas sin sombra topográfica.",
    r5_dim: "Riesgo Humano & Apalancamiento Operativo",
    r5_sat: "Cero exposición humana directa.",
    r5_tower: "Cero exposición humana directa (salvo mantenimiento en cumbres aisladas).",
    r5_drone: "<span class=\"badge-negative\">Alto riesgo vital & Ratio 1:1:</span> Requiere 1 piloto + 1 observador certificado por aeronave. Peligro de accidentes aéreos en vuelo rasante sobre relieve agreste, y cuadrillas terrestres expuestas en caminos forestales aislados en horario nocturno crítico.",
    r5_strig: "<span class=\"badge-positive\">Cero exposición & Multiplicador 1:N:</span> Misión, despegue y aterrizaje 100% autónomos desde estación de acople. Un solo operador táctico C2 supervisa hasta 5 cuadrículas de vuelo automatizado simultáneamente.",
    r6_dim: "Modelo Económico & Estructura de Costo",
    r6_sat: "Suscripción SaaS (US$15k-$60k/año). Accesible para escala macro; no sustituye la vigilancia táctica.",
    r6_tower: "<span class=\"badge-negative\">Altísimo CAPEX:</span> US$40k-$100k por torre instalada (mástil, óptica militar, energía solar y caminos de acceso).",
    r6_drone: "<span class=\"badge-negative\">Costos Desarticulados:</span> Extinción diurna masiva: US$2.000-$3.500/hora de vuelo (aviones cisterna y helicópteros). Patrullaje terrestre nocturno: ~US$6.400/mes por camioneta 4x4 (2 vigilantes 7x7 + combustible + arriendo) con menos del 12% de cobertura predial.",
    r6_strig: "<span class=\"badge-positive\">Intelligence as a Service (IaaS):</span> Suscripción modular (~US$7.500/mes por base Nest Alpha en temporada de riesgo). ~40% menor costo que patrullas 4x4 terrestres, 100% de cobertura en quebradas y prevención activa que ahorra decenas de miles de dólares en combate aéreo al amanecer.",

    // Technology
    tech_tag: "Capacidades Operativas",
    tech_title: "Vigilancia Territorial con Inteligencia A Bordo",
    tech_sub: "Arquitectura autónoma de alta disponibilidad. La aeronave VTOL detecta, clasifica y georreferencia en el borde sin requerir enlace continuo a internet ni servidores en tierra.",
    t1_title: "Gimbal Biespectral Noctua-Optics",
    t1_desc: "Payload giroestabilizado de 3 ejes con sensor microbolómetro LWIR radiométrico no refrigerado (640×512) y cámara óptica diurna 4K. Identificación térmica precisa en oscuridad total con algoritmo de discriminación multi-frame (<5% falsas alarmas).",
    t2_title: "Inferencia Edge AI Zero-Cloud (NVIDIA Jetson)",
    t2_desc: "Cómputo a bordo basado en arquitectura NVIDIA Jetson (Orin Nano Super) con pipeline cuantizado FP16 acelerado por NVIDIA TensorRT sobre JetPack SDK / ROS2. Ejecución local de visión computacional y modelos multimodales ligeros para clasificación y validación de amenazas en tiempo real (<40 ms), operando con autonomía total Zero-Cloud en zonas sin internet ni señal celular.",
    t3_title: "Telemetría Táctica en Zonas Desconectadas",
    t3_desc: "Emisión de fichas de alerta y coordenadas exactas en menos de 5 segundos vía radioenlace táctico FHSS 915 MHz (>20 km LOS con Link Margin >6 dB), garantizando enlace de telemetría ininterrumpido más allá del perímetro físico de patrulla sin dependencia celular.",
    t4_title: "Aeronave VTOL & Hoja de Ruta de Ingeniería",
    t4_desc: "Plataforma de validación VTOL 4+1 lift+cruise (2,1 m de envergadura) en transición hacia la célula propietaria industrial Noctua-01. Diseñada para despegue y aterrizaje vertical independiente de pista, hasta 90 min de autonomía, crucero de ala fija de alta eficiencia, envolvente de viento de 45 km/h (24 kt) y radio operacional seguro de 15 km (cobertura de clústeres de hasta 50.000 ha por estación).",
    t5_title: "Georreferenciación Quirúrgica",
    t5_desc: "Proyección angular instantánea hacia el terreno asistida por posicionamiento centimétrico RTK/GNSS de alta precisión, calculando coordenadas exactas para el despacho inmediato de brigadas.",
    t6_title: "Operación Segura & Marco DGAC",
    t6_desc: "Diseñada bajo estándares de ingeniería aeroespacial. Arquitectura 4+1 lift+cruise con tolerancia a pérdida de motor sustentador, paracaídas balístico pirotécnico autónomo y protocolos operacionales bajo marco DAN 151 / DAN 91 (DGAC Chile) para BVLOS segregado con retorno automático ante contingencia (Auto-RTH).",
    spec_1: "<span class=\"spec-name\">Plataforma MVP:</span> VTOL Lift+Cruise 2,1 m (Hacia Noctua-01)",
    spec_2: "<span class=\"spec-name\">Envolvente:</span> Viento 45 km/h | -5°C a +45°C",
    spec_3: "<span class=\"spec-name\">Respuesta:</span> Alerta Táctica &lt; 5 s (FHSS)",
    spec_4: "<span class=\"spec-name\">Normativa:</span> Marco DGAC DAN 151 / BVLOS",
    spec_5: "<span class=\"spec-name\">Modelo:</span> Intelligence as a Service (0 CAPEX)",

    // Off-Grid Tactical Datalink Architecture
    flow_tag: "ARQUITECTURA DE ENLACE OFF-GRID",
    flow_title: "Cómo se cierra el circuito táctico en zonas sin señal celular",
    flow_sub: "El 80% de los predios forestales y cordilleranos son zonas oscuras de conectividad. Athene opera sin depender de torres 4G/5G mediante radioenlaces tácticos bilaterales directos.",
    flow_s1_title: "Aeronave VTOL (Nodo Central Aéreo)",
    flow_s1_desc: "La aeronave procesa el espectro térmico en tiempo real con NVIDIA Jetson a bordo. Emite telemetría táctica simultánea hacia la cuadrilla y la central, y recibe comandos de misión y acuse de recibo en tiempo real.",
    flow_s1_badge: "Inferencia Edge AI Bilateral",
    flow_c1_label: "⇄ Enlace Bilateral FHSS 915 MHz (&gt;20 km LOS)",
    flow_s2_title: "Cuadrilla 4x4 en Terreno",
    flow_s2_desc: "Receptor táctico de cabina emite alarma acústica y coordenadas GPS directas. La cuadrilla confirma recepción y retroalimenta el estado de intercepción vía enlace directo FHSS.",
    flow_s2_badge: "Receptor Táctico & Retorno Táctico",
    flow_c2_label: "⇄ Enlace Bilateral Satelital Starlink / C2",
    flow_s3_title: "Estación Base Nest & Central C2",
    flow_s3_desc: "La estación base sincroniza telemetría completa vía satélite Starlink hacia la central de despacho del cliente (GIS / Webhook), permitiendo monitoreo global y reasignación dinámica de vuelo.",
    flow_s3_badge: "Gateway Satelital C2 Bidireccional",

    // C2 Tactical Console & Dual Views
    c2_tag: "◈ Consola C2 Athene",
    c2_title: "Simulador de Enlace Táctico & Misión Nocturna",
    c2_sub: "Experimenta en tiempo real la telemetría embarcada de la aeronave Noctua-01 y la inferencia biespectral de Edge AI con discriminación térmica de precursores.",
    c2_status_link: "TELEMETRÍA LINK: ACTIVO (915 MHz FHSS)",
    c2_view_gimbal: "SENSOR GIMBAL (FLIR)",
    c2_view_map: "MANDO SITUACIONAL C2",
    c2_lbl_palette: "PALETA:",
    c2_lbl_zoom: "ZOOM:",
    c2_hint: "💡 Haz clic sobre el cuadrante térmico o el mapa táctico para reorientar el sensor y calcular coordenadas georreferenciadas.",
    c2_btn_dispatch: "Despachar Dossier Táctico C2",
    c2_poly_label: "POLÍGONO PROTEGIDO: PREDIO SAN IGNACIO (12.400 HA)",
    c2_nest_label: "ESTACIÓN BASE NEST [ALPHA]",
    c2_nest_sub: "ACOPLE AUTÓNOMO OK",
    c2_anomaly_label: "⚠️ ANOMALÍA TÉRMICA",
    c2_vtol_label: "NOCTUA-01 [PATRULLA]",
    c2_salute_intel: "INTELIGENCIA TÁCTICA (SALUTE)",
    salute_lbl_size: "S (SIZE):",
    salute_val_size: "2 Personas en sendero",
    salute_lbl_act: "A (ACTIVITY):",
    salute_val_act: "Precursor / Foco Incipiente",
    salute_lbl_loc: "L (LOCATION):",
    salute_lbl_unit: "U (UNIT):",
    salute_val_unit: "Noctua-01 (EO/IR FLIR)",
    salute_lbl_time: "T (TIME):",
    salute_lbl_eq: "E (EQUIPMENT):",
    salute_val_eq: "Bidón de Combustible (VLM Edge)",
    c2_pip_swap: "⇄ CLIC PARA EXPANDIR",

    // ROI Calculator
    roi_badge: "MODELO ECONÓMICO",
    roi_title: "Calculadora de Retorno Operativo Territorial",
    roi_sub: "Modelo Intelligence as a Service (0 CAPEX). Compara el costo del patrullaje terrestre nocturno en camionetas 4x4 (Fuente: estándares de faena forestal en Chile) frente al despliegue autónomo de estaciones Nest Alpha durante la temporada crítica de 5 meses (noviembre a marzo), sumado al ahorro en horas de aviones cisterna al amanecer.",
    roi_lbl_area: "Superficie a Proteger:",
    roi_lbl_manned: "Patrullaje Terrestre 4x4 (Status Quo):",
    roi_sub_manned: "2 camionetas c/guardias 7x7 • Cobertura < 12%",
    roi_tt_manned: "Estándar de faena forestal en Chile (5 meses): 2 vigilantes en rol 7x7 (~US$4.200/mes) + arriendo 4x4 equipada (~US$1.400/mes) + diésel y mantención en ripio (~US$800/mes) = US$6.400/mes por camioneta. 2 camionetas cubren ~25k ha con <12% de visión efectiva.",
    roi_lbl_strig: "Suscripción Athene IaaS (0 CAPEX):",
    roi_sub_strig: "1 Base Nest Alpha + VTOL • Cobertura 100%",
    roi_tt_strig: "Suscripción IaaS temporada de riesgo (5 meses): US$7.500/mes por base Nest Alpha. Incluye estación autónoma, VTOL Noctua-01, recambios, mantenimiento y software C2. Cero inversión en compra de flota (0 CAPEX).",
    roi_lbl_savings: "Ahorro Directo de Vigilancia:",
    roi_tt_savings: "Ahorro neto directo de US$26.500 (-41%) por cada clúster de 25.000 ha durante la temporada de 5 meses al optimizar el gasto operacional fijo de patrullaje terrestre.",
    roi_lbl_co2: "Escudo Preventivo de Combate:",
    roi_sub_co2: "Aviones cisterna evitados al amanecer (1 foco)",
    roi_tt_co2: "Horas de combate aéreo evitadas: Interceptar 1 foco en fase de preignición ahorra ~20 h de vuelo de extinción al amanecer (aviones cisterna Air Tractor AT-802F a US$2.200/h + helicópteros a US$2.500/h = >US$44.000), sin contar la madera comercial salvada.",

    // IaaS Operational Framework
    iaas_tag: "MARCO OPERACIONAL IAAS",
    iaas_title: "Condiciones y Compromiso del Modelo Intelligence as a Service",
    iaas_sub: "Estructurado para que las empresas del sector incorporen vigilancia aérea nocturna sin adquirir activos fijos ni asumir pasivos operacionales.",
    iaas_p1_title: "0 CAPEX & Cero Pasivo de Flota",
    iaas_p1_desc: "La empresa no compra drones ni asume depreciación de aeronaves. Se contrata disponibilidad operativa por temporada de riesgo forestal como gasto operacional (OPEX).",
    iaas_p2_title: "Mantenimiento & Soporte Técnico Integral",
    iaas_p2_desc: "Recambios preventivos de hélices, baterías, sensores y actualización de modelos de IA a bordo gestionados directamente por el equipo de ingeniería de Strig Systems.",
    iaas_p3_title: "Gestión de Cumplimiento DGAC",
    iaas_p3_desc: "Operación conducida bajo protocolos de seguridad operacional conforme a normativa DAN 151 / DAN 91 para operaciones BVLOS segregadas y zonas de contingencia.",

    // Pilot Program
    pilot_tag: "Validación en Terreno",
    pilot_title: "Programa Piloto para Empresas del Sector",
    pilot_sub: "Estructurado en 4 fases metodológicas para empresas forestales, mineras, utilities e instituciones que buscan verificar en terreno la efectividad de la vigilancia nocturna.",
    ph1_title: "Levantamiento & Topografía",
    ph1_desc: "Mapeo de predios prioritarios, modelado de zonas ciegas y calibración de rutas según la probabilidad histórica de focos.",
    ph2_title: "Calibración Sensorial",
    ph2_desc: "Pruebas en terreno de firmas térmicas, validación de telemetría táctica en zonas sin cobertura y simulacros controlados.",
    ph3_title: "Vigilancia Nocturna Activa",
    ph3_desc: "Patrullaje autónomo programado en las horas de mayor vulnerabilidad con telemetría en vivo y soporte al C2 del cliente.",
    ph4_title: "Auditoría & Retorno Operativo",
    ph4_desc: "Informe técnico con tiempos de respuesta, falsas alarmas filtradas, horas de vuelo ahorradas e integración auditada con el centro de operaciones (C2) del cliente.",
    callout_title: "Convocatoria de Validación 2026",
    callout_desc: "Cupos limitados por temporada de incendios en la Macrozona Centro-Sur. Evaluación de factibilidad territorial e interoperabilidad C2 sin costo para predios forestales e industriales.",
    callout_cta: "Solicitar Factibilidad de Piloto",
    callout_briefing: "Agendar Briefing Técnico (15 min)",
    callout_brief_pdf: "Executive Brief (PDF)",

    // Alliances & R&D
    alliances_tag: "Ecosistema & Tracción",
    alliances_title: "I+D Aplicada y Alianzas Estratégicas",
    alliances_sub: "Combinamos ingeniería aeroespacial rigurosa con validación en el mercado real, respaldados por las instituciones líderes en innovación y transferencia tecnológica.",
    p_corfo: "Proyecto Semilla Inicia CORFO",
    p_udec: "Apoyo de la UdeC",
    p_industry: "Validación & Entrevistas Forestales",
    p_thermal: "Contraste Ecosistema Térmico",
    collab1_head: "💼 Inversionistas & Fondos Deep Tech",
    collab1_p: "Apertura a conversaciones con fondos de capital de riesgo enfocados en robótica aérea, dual-use, mitigación climática y tecnologías de defensa territorial.",
    collab2_head: "🔬 Centros de Investigación & Academia",
    collab2_p: "Cooperación técnica en visión computacional nocturna, algoritmos de detección en humo denso y modelos aerodinámicos de alta eficiencia.",
    collab3_head: "🏛️ Agencias Públicas & Municipalidades",
    collab3_p: "Modelos de colaboración B2G para protección de comunidades en la interfaz urbano-forestal y optimización de presupuestos de emergencia.",

    // Team
    team_tag: "Equipo Fundador",
    team_title: "Ingeniería Aeroespacial & Operaciones Tácticas",
    team_sub: "5 ingenieros civiles aeroespaciales de la Universidad de Concepción, combinando diseño aeronáutico, visión computacional, combate de incendios en primera línea y certificación aeronáutica.",
    bio_tomas: "Ingeniero Civil Aeroespacial • Visión Computacional, Machine Learning, CAD/CAM e Ingeniería de Sistemas C4ISR.",
    bio_carlos: "Bombero Operativo • Ingeniero Civil Aeroespacial. Análisis CFD, logística operacional y arquitectura de interfaz táctica.",
    bio_ananda: "Ingeniera Civil Aeroespacial • Integración y ensayos de vuelo RPAS, CAD, análisis estructural (FEA) y CFD.",
    bio_richard: "Ingeniero Civil Aeroespacial • Ingeniería de sistemas, aseguramiento normativo, control de calidad y certificación aeronáutica.",
    bio_pablo: "Ingeniero Civil Aeroespacial • Arquitectura de sistemas, lógica e integración de flujo de datos, validación y verificación.",
    bio_advisor: "PhD Space Systems Engineering and Management. Asesor senior en arquitectura de sistemas espaciales y escalamiento aeroespacial.",

    // CTA
    cta_tag: "Contacto Estratégico",
    cta_title: "Coordinemos una Evaluación Territorial",
    cta_desc: "Si representas a una empresa con activos territoriales de alto valor, un consorcio de respuesta a emergencias o un fondo de inversión, nuestro equipo técnico responderá directamente tu requerimiento.",
    cta_btn1: "Postular a Piloto Operativo",
    cta_btn2: "Consultar por Alianzas / Inversión",

    // Pilot Modal
    modal_badge: "Validación Territorial 2026",
    modal_title: "Postulación al Programa Piloto",
    modal_sub: "Completa los datos de tu entidad. Evaluamos factibilidad operativa e interoperabilidad C2 para la temporada de riesgo.",
    f_name_label: "Nombre y Apellido *",
    f_name_ph: "Ej: Marcela Soto",
    f_email_label: "Correo Corporativo / Institucional *",
    f_email_ph: "nombre@empresa.cl",
    f_company_label: "Empresa u Organización *",
    f_company_ph: "Ej: Forestal / Minera / Institución",
    f_phone_label: "Teléfono / WhatsApp (Opcional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Región Territorial *",
    f_region_default: "Selecciona una región...",
    f_interest_label: "Tipo de Interés *",
    f_interest_default: "Selecciona el tipo de interés...",
    opt_interest_1: "Programa Piloto Operativo (Forestal / Industrial)",
    opt_interest_2: "Alianzas de I+D / Validación Técnica",
    opt_interest_3: "Inversión / Fondos de Capital Deep Tech",
    opt_interest_4: "Consulta General / Demostración C2",
    f_message_label: "Detalles Adicionales o Necesidad Específica (Opcional)",
    f_message_ph: "Describe brevemente el tipo de predio, zona geográfica o consulta técnica...",
    f_submit_btn: "Enviar Postulación a Piloto",
    f_submitting: "Enviando postulación...",
    f_privacy: "Tus datos serán tratados bajo estricta confidencialidad técnica (NDA disponible).",
    form_val_error: "Por favor completa todos los campos obligatorios (*) con un formato válido.",
    form_error_msg: "Hubo un problema al enviar la solicitud. Puedes escribirnos directamente a",
    success_title: "¡Postulación Recibida con Éxito!",
    success_desc: "Hemos recibido los antecedentes de tu entidad. Nuestro equipo de ingeniería aeroespacial revisará la factibilidad territorial y se contactará directamente dentro de 24 horas hábiles.",
    success_close_btn: "Cerrar Ventana",

    // Briefing Modal (15 min)
    briefing_badge: "Ingeniería & Operaciones",
    briefing_modal_title: "Agendar Briefing Técnico de 15 Minutos",
    briefing_modal_sub: "Conversación técnica directa con Tomás Medina (Technical Lead): evaluamos la orografía de tus predios, viabilidad de radioenlace y requerimientos C2.",
    f_contact_label: "Correo Corporativo o WhatsApp *",
    f_contact_ph: "correo@empresa.cl o +56 9...",
    f_briefing_time_label: "Horario Preferente *",
    f_briefing_time_morn: "Mañana (09:00 - 13:00 CLT)",
    f_briefing_time_aft: "Tarde (14:00 - 18:00 CLT)",
    f_briefing_submit: "Solicitar Briefing Técnico",
    f_briefing_direct: "O escribe directamente al Technical Lead:",
    briefing_success_title: "¡Solicitud de Briefing Recibida!",
    briefing_success_desc: "Tomás Medina se contactará contigo para coordinar el enlace de Google Meet según tu preferencia horaria.",

    // Executive Brief (One-Pager Whitepaper)
    brief_doc_print: "🖨️ Imprimir / Guardar como PDF",
    eb_tag: "EXECUTIVE BRIEF 2026",
    eb_sub: "Vigilancia Territorial Autónoma Nocturna",
    eb_h1: "Inteligencia Aérea Autónoma para el Combate de Incendios en la Brecha Nocturna",
    eb_summary: "Athene cierra la ventana ciega nocturna de 10 horas mediante aeronaves VTOL lift+cruise de 2,1 m (plataforma MVP en transición hacia la célula propietaria Noctua-01), inferencia térmica Edge AI a bordo (NVIDIA Jetson) y telemetría táctica FHSS 915 MHz, sustituyendo el costoso patrullaje terrestre y evitando el despliegue millonario de aeronaves de combate al amanecer.",
    eb_b1_title: "1. El Problema Operacional",
    eb_b1_p1: "<strong>Ventana ciega nocturna (20:00 a 06:00):</strong> La aviación tripulada combate de día, pero no vuela de noche por normativa DGAC y riesgo de choque con el relieve (CFIT).",
    eb_b1_p2: "<strong>Costo industrial masivo:</strong> Gasto consolidado anual de US$130M en combate y prevención en Chile (Fuente: CORMA).",
    eb_b1_p3: "<strong>Puntos ciegos terrestres:</strong> Patrullas en 4x4 cubren &lt; 12% del predio, ciegas ante quebradas y rodales interiores donde se inician fogatas y focos intencionales.",
    eb_b2_title: "2. Solución Tecnológica",
    eb_b2_p1: "<strong>Aeronave VTOL Lift+Cruise (2,1 m):</strong> Despegue vertical en un claro de bosque, 90 min de patrulla y 15 km de radio operativo.",
    eb_b2_p2: "<strong>Edge AI Zero-Cloud a Bordo:</strong> Cómputo NVIDIA Jetson + aceleración TensorRT; detección térmica en &lt; 5 s sin conexión a internet ni señal celular.",
    eb_b2_p3: "<strong>Telemetría Táctica FHSS 915 MHz:</strong> Alerta acústica y coordenadas GPS directas a la cabina de la camioneta en terreno (&gt;20 km LOS).",
    eb_b3_title: "3. Modelo Económico IaaS (0 CAPEX)",
    eb_b3_p1: "<strong>Status Quo Terrestre:</strong> 2 camionetas 4x4 con guardias 7x7 = US$64.000 / temporada de 5 meses para 25.000 ha.",
    eb_b3_p2: "<strong>Suscripción Athene IaaS:</strong> 1 Base Nest Alpha + VTOL = US$37.500 / temporada. <strong>Ahorro directo de US$26.500 (-41%)</strong>.",
    eb_b3_p3: "<strong>Escudo de Combate Aéreo:</strong> Interceptar 1 foco en preignición evita ~20 h de vuelo de aviones cisterna Air Tractor AT-802F y helicópteros (&gt;US$44.000).",
    eb_b4_title: "4. Validación Operativa 2026",
    eb_b4_p1: "<strong>Respaldo Institucional:</strong> Proyecto Semilla Inicia CORFO y apoyo de la Universidad de Concepción (UdeC).",
    eb_b4_p2: "<strong>Programa Piloto Macrozona Centro-Sur:</strong> Despliegue en 4 fases metodológicas (Levantamiento, Calibración, Vigilancia Nocturna, Auditoría ROI).",
    eb_b4_p3: "<strong>Contacto Directo:</strong> Tomás Medina (Technical Lead) | <code>tmedina@strigsystems.tech</code> | <code>strigsystems.tech</code>",

    // Footer
    footer_tagline: "Desarrollo de sistemas aéreos autónomos e inteligencia computacional para la mitigación anticipada de riesgos críticos.",
    f_nav: "Navegación",
    f_corp: "Corporativo",
    f_privacy_link: "Política de Privacidad & Gobernanza"
  },

  en: {
    // Nav
    nav_problem: "The Problem",
    nav_compare: "Benchmark",
    nav_tech: "Technology",
    nav_pilot: "Pilot Program",
    nav_alliances: "R&D & Alliances",
    nav_team: "Team",
    nav_cta: "Apply for Pilot",

    // Hero
    hero_badge: "CORFO Seed Grant Awarded • Backed by UdeC • Frontline Firefighting Experience",
    hero_title_1: "Risks move fast.",
    hero_title_2: "We see them coming.",
    hero_sub: "Autonomous territorial surveillance platform powered by VTOL aircraft and onboard Edge AI. We close the critical 10-hour nighttime gap by detecting unauthorized human activity and thermal precursors before ignition—optimizing ground patrol OPEX by up to 40% and preventing multi-million dollar deployments of morning air combat fleets.",
    hero_cta_primary: "Apply for Operational Pilot",
    hero_cta_secondary: "Explore Capabilities",

    // Metrics
    m1_title: "Critical Night Window",
    m1_sub: "Continuous autonomous patrol (20:00 to 06:00)",
    m2_title: "Total Aerial Visibility",
    m2_sub: "Thermal vision in ravines blind to 4x4 trucks",
    m3_title: "Pre-Ignition Tactical Alert",
    m3_sub: "Onboard Edge AI (<5% false alarms)",
    m4_title: "Nighttime OPEX Reduction",
    m4_sub: "Direct savings vs 4x4 ground patrol fleets",
    m4_tooltip: "Estimated direct net savings when replacing 2 ground 4x4 trucks with 1 autonomous Athene IaaS Nest Alpha base across 25,000 ha clusters during the critical 5-month season.",

    // Problem
    prob_tag: "Territorial Diagnostic",
    prob_title: "The nighttime vulnerability gap costing US$130M yearly",
    corma_tooltip: "Official data from Chilean Wood Corporation (CORMA): Consolidated annual expenditure by industry and the State on wildfire fighting and prevention in Chile.",
    prob_sub: "99.7% of wildfires are human-caused. Manned aircraft combat fires during daylight, but due to DGAC flight safety standards do not fly at night. When wind and arson risks peak, the skies remain empty and ground trucks have zero visibility deep within the forest.",
    p1_head: "Operations Centers",
    p1_desc: "Persistent uncertainty. By the time orbital satellites detect thermal anomalies, the fire front has reached catastrophic scale.",
    p1_tag: "Fragmented intelligence",
    p2_head: "Landowners & Forestry",
    p2_desc: "Permanent risk of multi-million dollar capital losses in commercial timber, biomass, and production infrastructure.",
    p2_tag: "Catastrophic exposure",
    p3_head: "Ground Firefighters",
    p3_desc: "Extreme exposure to road blockages, ambushes, or roll-over hazards entering deep forests on gravel tracks at night, with under 12% effective visibility beyond the tire track.",
    p3_tag: "Avoidable human risk",
    quote_text: "Satellites suffer orbital latency; fixed towers face orographic blind spots; 4x4 truck patrols only see what headlights touch on the dirt road; and water bombers are grounded at dusk for flight safety. Athene is the autonomous night sentinel that detects campfires or human precursors before fire ignites, avoiding multi-million dollar air combat deployments at dawn.",

    // Tactical Benchmark
    comp_tag: "Tactical Benchmark",
    comp_title: "Why Legacy Solutions Fail in the Night Window",
    comp_sub: "Comparative technical analysis across LEO satellites, fixed thermal watchtowers, conventional manned patrol, and the Athene autonomous platform.",
    matrix_scroll_hint: "⇄ Swipe horizontally to compare technologies",
    th_dim: "Operational Dimension",
    th_sat: "LEO Satellites<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Fixed Thermal Towers<br><span class=\"th-sub\">Optical Masts</span>",
    th_drone: "Conventional Manned Patrol<br><span class=\"th-sub\">Daytime Planes + Night Crews/Drones</span>",
    strig_badge: "Our Architecture",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (Noctua-01 VTOL + Edge AI)</span>",
    r1_dim: "Continuous Night Patrol",
    r1_sat: "Discrete orbital passes (1 to 4 h). Uncontested daytime macro standard, but leaves a critical blind window throughout the night.",
    r1_tower: "Continuous 24/7 with high reliability, but strictly restricted to direct line of sight (LOS) within its visible basin.",
    r1_drone: "Inoperable at night. Water-dropping air tankers and spotters are grounded at dusk under DGAC/night-VFR rules (controlled flight into terrain / CFIT hazard). On the ground, 4x4 patrol trucks face fatigue, slow speeds on gravel roads, and zero visibility off the track.",
    r1_strig: "<strong>Scheduled autonomous patrol</strong> across the critical 10-hour nighttime vulnerability window with Noctua-01 VTOL airframe and docking station.",
    r2_dim: "Detection & Alert Latency",
    r2_sat: "<span class=\"badge-negative\">30 to 90 minutes</span> (orbital downlink, cloud processing, and regional alert dissemination lag).",
    r2_tower: "Instantaneous at optical sensor; requires 24/7 human console operator for verification and false alarm filtering.",
    r2_drone: "Instantaneous for local pilot or crew; significantly delayed to central dispatch without reliable 4G/5G coverage in remote terrain.",
    r2_strig: "<span class=\"badge-positive\">&lt; 5 seconds</span> (onboard local Edge AI inference + long-range tactical telemetry radio datalink).",
    r3_dim: "Precursor Detection (Humans / Vehicles)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (375m to 1km spatial resolution; engineered for active fires, incapable of spotting individuals or small campfires).",
    r3_tower: "Zero under dense canopy, forest trails, or blind ravines outside direct mast sightline.",
    r3_drone: "Severely limited. Patrol planes cannot fly at night to detect early campfires; 4x4 ground patrols can only monitor main logging roads, leaving dense stands blind.",
    r3_strig: "<span class=\"badge-positive\">Optical & thermal detection</span> of human presence and vehicles prior to ignition (root cause of 99.7% of wildfires).",
    r4_dim: "Topographic Blind Spots",
    r4_sat: "Severely degraded by low cloud cover, thick smoke plumes, and thermal inversions absorbing infrared radiation.",
    r4_tower: "<span class=\"badge-negative\">Critical:</span> Irrecoverable physical blind spots behind ridgelines, valleys, and opposing slopes.",
    r4_drone: "Critical. Ground crews have zero line of sight behind ridges or deep ravines; daytime aircraft face severe degradation in low clouds and heavy smoke.",
    r4_strig: "<span class=\"badge-positive\">Adaptive contour mapping:</span> Autonomous flight beneath cloud decks, navigating ravines and ridges without topographic shadow.",
    r5_dim: "Human Operational Hazard & Ratio",
    r5_sat: "Zero direct human exposure.",
    r5_tower: "Zero direct human exposure (except maintenance on isolated peaks).",
    r5_drone: "<span class=\"badge-negative\">High life risk & 1:1 ratio:</span> Requires 1 pilot + 1 certified spotter per airborne asset. Crash risk in low-altitude patrol, plus ground crews exposed on isolated logging tracks during high-arson night hours.",
    r5_strig: "<span class=\"badge-positive\">Zero exposure & 1:N multiplier:</span> 100% autonomous launch, patrol mission, and docking recovery from automated station. A single tactical C2 operator monitors up to 5 automated flight grids simultaneously.",
    r6_dim: "Economic Model & Cost Structure",
    r6_sat: "SaaS software subscription (US$15k-$60k/yr). Accessible at macro scale; does not replace tactical parcel surveillance.",
    r6_tower: "<span class=\"badge-negative\">Extremely High CAPEX:</span> US$40k-$100k per installed mast (tower, military-grade optics, solar arrays, and access roads).",
    r6_drone: "<span class=\"badge-negative\">Fragmented Heavy OPEX:</span> Daytime mass suppression: US$2,000-$3,500/flight hour (air tankers and heavy helicopters). Nocturnal ground patrol: ~US$6,400/month per 4x4 truck (2 security guards on 7x7 shift + fuel + lease) with under 12% land coverage.",
    r6_strig: "<span class=\"badge-positive\">Intelligence as a Service (IaaS):</span> Modular operational subscription (~US$7,500/month per Nest Alpha base during risk season). ~40% lower cost than 4x4 ground patrols, 100% topographic coverage in ravines, and active prevention saving tens of thousands in dawn air combat.",

    // Technology
    tech_tag: "Operational Capabilities",
    tech_title: "Territorial Surveillance with Onboard Edge Intelligence",
    tech_sub: "High-availability autonomous architecture. The VTOL airframe detects, classifies, and geolocalizes at the edge without requiring persistent internet or ground servers.",
    t1_title: "Noctua-Optics Bi-Spectral Gimbal",
    t1_desc: "3-axis gyro-stabilized payload with uncooled radiometric LWIR microbolometer (640×512) and 4K daytime optical sensor. Pinpoint thermal threat identification in total darkness with multi-frame temporal discrimination algorithm (<5% false alarm rate).",
    t2_title: "Zero-Cloud Edge AI Inference (NVIDIA Jetson)",
    t2_desc: "Onboard computing powered by NVIDIA Jetson (Orin Nano Super) architecture with an FP16 quantized inference pipeline accelerated by NVIDIA TensorRT on JetPack SDK / ROS2. Real-time local execution of computer vision models and multimodal verification (<40 ms), operating completely offline Zero-Cloud without internet or cloud dependency.",
    t3_title: "Tactical Telemetry in Dark Zones",
    t3_desc: "Structured alert dossiers and exact coordinates transmitted in under 5 seconds via 915 MHz FHSS tactical radio datalink (>20 km LOS with >6 dB link margin), ensuring uninterrupted C2 telemetry beyond the physical patrol perimeter without cellular dependency.",
    t4_title: "VTOL Airframe & Engineering Roadmap",
    t4_desc: "4+1 lift+cruise VTOL validation testbed (2.1 m wingspan) transitioning toward the proprietary industrial Noctua-01 airframe. Engineered for runway-independent vertical takeoff, up to 90 min endurance, high-efficiency fixed-wing cruise, 45 km/h (24 kt) wind envelope tolerance, and 15 km safe operational radius (covering clusters up to 50,000 ha per docking base).",
    t5_title: "Real-Time Surgical Geolocalization",
    t5_desc: "Instant angular terrain projection assisted by high-precision RTK/GNSS centimetric positioning, calculating exact target coordinates for the rapid dispatch of ground crews.",
    t6_title: "Certified Safety & DGAC Compliance",
    t6_desc: "Engineered under aerospace safety standards. Redundant 4+1 lift+cruise architecture with lift-motor loss tolerance, autonomous pyrotechnic ballistic parachute, and operational procedures aligned with Chilean DGAC DAN 151 / DAN 91 regulations for segregated BVLOS with automatic contingency return (Auto-RTH).",
    spec_1: "<span class=\"spec-name\">MVP Platform:</span> 2.1 m Lift+Cruise VTOL (Towards Noctua-01)",
    spec_2: "<span class=\"spec-name\">Flight Envelope:</span> Wind 45 km/h | -5°C to +45°C",
    spec_3: "<span class=\"spec-name\">Response:</span> Tactical Alert &lt; 5 s (FHSS)",
    spec_4: "<span class=\"spec-name\">Regulation:</span> DGAC DAN 151 / BVLOS Scope",
    spec_5: "<span class=\"spec-name\">Model:</span> Intelligence as a Service (0 CAPEX)",

    // Off-Grid Tactical Datalink Architecture
    flow_tag: "OFF-GRID DATALINK ARCHITECTURE",
    flow_title: "Closing the Tactical Loop in Zero-Cellular Remote Zones",
    flow_sub: "Over 80% of remote forestry and mountain holdings are connectivity dead zones. Athene operates without 4G/5G dependency via direct bilateral tactical radio links.",
    flow_s1_title: "VTOL Airframe (Central Aerial Node)",
    flow_s1_desc: "The aircraft processes the thermal spectrum in real time with onboard NVIDIA Jetson. It simultaneously broadcasts tactical telemetry to the ground crew and central dispatch, receiving real-time mission updates and acknowledgments.",
    flow_s1_badge: "Bilateral Edge AI Inference",
    flow_c1_label: "⇄ 915 MHz FHSS Bilateral Link (&gt;20 km LOS)",
    flow_s2_title: "Ground 4x4 Patrol Crew",
    flow_s2_desc: "Cab tactical receiver sounds acoustic siren and displays target coordinates. The crew acknowledges receipt and feeds back interception status via direct FHSS link.",
    flow_s2_badge: "Tactical Receiver & Ground Feedback",
    flow_c2_label: "⇄ Starlink / C2 Bilateral Datalink",
    flow_s3_title: "Nest Docking Base & Central C2",
    flow_s3_desc: "The docking station syncs full telemetry via Starlink satellite to the client's central dispatch (GIS / Webhooks), enabling global monitoring and dynamic flight retasking.",
    flow_s3_badge: "Bidirectional C2 Satellite Gateway",

    // C2 Tactical Console & Dual Views
    c2_tag: "◈ Athene C2 Console",
    c2_title: "Tactical Datalink & Night Mission Simulator",
    c2_sub: "Experience real-time onboard telemetry from the Noctua-01 airframe and Edge AI bi-spectral inference with thermal precursor discrimination.",
    c2_status_link: "TELEMETRY LINK: ACTIVE (915 MHz FHSS)",
    c2_view_gimbal: "GIMBAL SENSOR (FLIR)",
    c2_view_map: "C2 SITUATIONAL MAP",
    c2_lbl_palette: "PALETTE:",
    c2_lbl_zoom: "ZOOM:",
    c2_hint: "💡 Click anywhere on the thermal quadrant or tactical map to slew the gimbal sensor and compute target coordinates.",
    c2_btn_dispatch: "Dispatch Tactical C2 Dossier",
    c2_poly_label: "PROTECTED POLYGON: SAN IGNACIO SECTOR (12,400 HA)",
    c2_nest_label: "NEST ALPHA DOCKING BASE",
    c2_nest_sub: "AUTONOMOUS DOCK OK",
    c2_anomaly_label: "⚠️ THERMAL ANOMALY",
    c2_vtol_label: "NOCTUA-01 [PATROL]",
    c2_salute_intel: "TACTICAL INTEL DOSSIER (SALUTE)",
    salute_lbl_size: "S (SIZE):",
    salute_val_size: "2 Individuals on trail",
    salute_lbl_act: "A (ACTIVITY):",
    salute_val_act: "Thermal Precursor / Fire Spot",
    salute_lbl_loc: "L (LOCATION):",
    salute_lbl_unit: "U (UNIT):",
    salute_val_unit: "Noctua-01 (EO/IR FLIR)",
    salute_lbl_time: "T (TIME):",
    salute_lbl_eq: "E (EQUIPMENT):",
    salute_val_eq: "Accelerant Canister (Edge VLM)",
    c2_pip_swap: "⇄ CLICK TO EXPAND",

    // ROI Calculator
    roi_badge: "ECONOMIC MODEL",
    roi_title: "Territorial Operational ROI Calculator",
    roi_sub: "Intelligence as a Service model (0 CAPEX). Compare nocturnal 4x4 ground patrol costs (Source: Chilean forestry operational benchmarks) against autonomous Nest Alpha base deployments during the 5-month critical season (Nov–Mar), plus morning air combat hours avoided.",
    roi_lbl_area: "Acreage to Protect:",
    roi_lbl_manned: "4x4 Ground Patrol (Status Quo):",
    roi_sub_manned: "2 patrol trucks w/7x7 guards • < 12% coverage",
    roi_tt_manned: "Chilean forestry operation standard (5 months): 2 guards on 7x7 rotation (~US$4,200/mo) + equipped 4x4 lease (~US$1,400/mo) + diesel & gravel maintenance (~US$800/mo) = US$6,400/mo per truck. 2 trucks cover ~25k ha with <12% effective visibility.",
    roi_lbl_strig: "Athene IaaS Subscription (0 CAPEX):",
    roi_sub_strig: "1 Nest Alpha Base + VTOL • 100% coverage",
    roi_tt_strig: "Risk season IaaS subscription (5 months): US$7,500/mo per Nest Alpha base. Includes autonomous docking station, Noctua-01 VTOL, spare parts, maintenance, and C2 software. Zero fleet purchase expenditure (0 CAPEX).",
    roi_lbl_savings: "Direct Surveillance Savings:",
    roi_tt_savings: "Direct net savings of US$26,500 (-41%) per 25,000 ha cluster during the 5-month critical season by optimizing fixed ground patrol operational expenditures.",
    roi_lbl_co2: "Preventive Combat Shield:",
    roi_sub_co2: "Air tankers avoided at dawn (1 fire prevented)",
    roi_tt_co2: "Air combat hours avoided: Intercepting 1 hotspot in pre-ignition saves ~20 hours of dawn suppression flight (Air Tractor AT-802F water bombers @ US$2,200/h + helicopters @ US$2,500/h = >US$44,000), not counting commercial timber preserved.",

    // IaaS Operational Framework
    iaas_tag: "IAAS OPERATIONAL FRAMEWORK",
    iaas_title: "Intelligence as a Service Model & Operational Commitments",
    iaas_sub: "Structured for enterprises to deploy autonomous aerial night surveillance without purchasing fixed assets or carrying fleet liabilities.",
    iaas_p1_title: "0 CAPEX & Zero Fleet Liability",
    iaas_p1_desc: "Clients do not buy drones or carry aircraft depreciation. Operational uptime is contracted per wildfire season as an operational expense (OPEX).",
    iaas_p2_title: "Comprehensive Maintenance & Tech Support",
    iaas_p2_desc: "Preventative replacement of props, batteries, thermal sensors, and onboard AI model updates are directly managed by Strig Systems engineering.",
    iaas_p3_title: "DGAC Regulatory Compliance Management",
    iaas_p3_desc: "Operations conducted under strict safety protocols conforming to Chilean DGAC DAN 151 / DAN 91 regulations for segregated BVLOS and contingency zones.",

    // Pilot Program
    pilot_tag: "Field Validation",
    pilot_title: "Early Deployment Pilot Program",
    pilot_sub: "A structured 4-phase deployment designed for forestry conglomerates, mining operations, utilities, and emergency authorities validating autonomous nocturnal surveillance.",
    ph1_title: "Survey & Topographic Analysis",
    ph1_desc: "Mapping priority acreage, modeling line-of-sight blind spots, and tuning flight routes based on historical incident heatmaps.",
    ph2_title: "Sensor Calibration & Field Trials",
    ph2_desc: "Controlled ground trials for thermal signature calibration, long-range tactical telemetry verification, and simulated incident scenarios.",
    ph3_title: "Active Nighttime Surveillance",
    ph3_desc: "Scheduled autonomous patrols throughout hours of maximum vulnerability with live structured telemetry and C2 integration.",
    ph4_title: "Audit & Operational ROI",
    ph4_desc: "Technical evaluation report detailing response latency, filtered false alarms, flight hours saved, and audited integration with the client's existing operations center (C2).",
    callout_title: "2026 Validation Cohort Applications",
    callout_desc: "Limited operational flight slots available per fire season in South-Central Chile. Free territorial feasibility and C2 interoperability assessment for forestry and industrial holdings.",
    callout_cta: "Request Pilot Feasibility Assessment",
    callout_briefing: "Schedule Technical Briefing (15 min)",
    callout_brief_pdf: "Executive Brief (PDF)",

    // Alliances & R&D
    alliances_tag: "Ecosystem & Traction",
    alliances_title: "Applied R&D & Strategic Partnerships",
    alliances_sub: "We blend aerospace engineering rigor with real-world market validation, backed by leading innovation hubs and institutional research laboratories.",
    p_corfo: "CORFO Semilla Inicia Program",
    p_udec: "Backed by UdeC",
    p_industry: "Field Validation & Forestry Interviews",
    p_thermal: "Thermal Ecosystem Industry Contrast",
    collab1_head: "💼 Deep Tech Venture Capital",
    collab1_p: "Open discussions with venture funds focused on autonomous robotics, dual-use technologies, climate resilience, and territorial defense.",
    collab2_head: "🔬 Research Institutes & Academia",
    collab2_p: "Technical cooperation in nighttime computer vision, thermal inference in dense smoke, and high-efficiency aerodynamic models.",
    collab3_head: "🏛️ Public Agencies & Municipalities",
    collab3_p: "B2G operational frameworks designed for wildland-urban interface defense and stabilization of emergency response expenditures.",

    // Team
    team_tag: "Founding Team",
    team_title: "Aerospace Engineering & Tactical Operations",
    team_sub: "5 aerospace engineers from Universidad de Concepción, combining aeronautical design, computer vision, frontline firefighting experience, and civil aviation certification.",
    bio_tomas: "Aerospace Engineer • Computer Vision, Machine Learning, CAD/CAM, and C4ISR Systems Engineering.",
    bio_carlos: "Active Firefighter • Aerospace Engineer. CFD analysis, operational logistics, and tactical interface architecture.",
    bio_ananda: "Aerospace Engineer • RPAS integration & flight testing, CAD, FEA structural analysis, and CFD.",
    bio_richard: "Aerospace Engineer • Systems engineering, regulatory compliance, quality control, and aeronautical certification.",
    bio_pablo: "Aerospace Engineer • Systems architecture, data flow logic & integration, validation and verification.",
    bio_advisor: "PhD Space Systems Engineering and Management. Senior advisor on space mission architectures and deep-tech scaling.",

    // CTA
    cta_tag: "Strategic Inquiries",
    cta_title: "Schedule a Territorial Assessment",
    cta_desc: "Whether you manage critical high-value land holdings, lead an emergency response consortium, or evaluate deep-tech grant investments, our engineering team is ready to connect.",
    cta_btn1: "Apply for Operational Pilot",
    cta_btn2: "Inquire for Alliances / Investment",

    // Pilot Modal
    modal_badge: "2026 Territorial Validation",
    modal_title: "Pilot Program Application",
    modal_sub: "Submit your organization's details. We assess operational feasibility and C2 interoperability for the high-risk fire season.",
    f_name_label: "Full Name *",
    f_name_ph: "e.g., Jane Smith",
    f_email_label: "Corporate / Institutional Email *",
    f_email_ph: "name@company.com",
    f_company_label: "Company or Organization *",
    f_company_ph: "e.g., Forestry / Mining / Agency",
    f_phone_label: "Phone / WhatsApp (Optional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Territorial Region *",
    f_region_default: "Select a region...",
    f_interest_label: "Area of Interest *",
    f_interest_default: "Select area of interest...",
    opt_interest_1: "Operational Pilot Program (Forestry / Industrial)",
    opt_interest_2: "R&D Alliances / Academic Validation",
    opt_interest_3: "Deep Tech / Dual-Use Investment",
    opt_interest_4: "General Inquiry / C2 Demonstration",
    f_message_label: "Additional Details or Specific Requirements (Optional)",
    f_message_ph: "Briefly outline your acreage, geographic zone, or tactical technical inquiry...",
    f_submit_btn: "Submit Pilot Application",
    f_submitting: "Submitting application...",
    f_privacy: "Your data is handled under strict technical non-disclosure standards (NDA available).",
    form_val_error: "Please complete all required fields (*) with a valid format.",
    form_error_msg: "An error occurred sending your application. You can email us directly at",
    success_title: "Application Received Successfully!",
    success_desc: "We have received your organization's information. Our aerospace engineering team will review territorial feasibility and follow up directly within 24 business hours.",
    success_close_btn: "Close Window",

    // Briefing Modal (15 min)
    briefing_badge: "Engineering & Operations",
    briefing_modal_title: "Schedule a 15-Minute Technical Briefing",
    briefing_modal_sub: "Direct technical session with Tomás Medina (Technical Lead): evaluating terrain orography, tactical radio link margins, and C2 requirements.",
    f_contact_label: "Corporate Email or WhatsApp *",
    f_contact_ph: "email@company.com or +56 9...",
    f_briefing_time_label: "Preferred Time Window *",
    f_briefing_time_morn: "Morning (09:00 - 13:00 CLT)",
    f_briefing_time_aft: "Afternoon (14:00 - 18:00 CLT)",
    f_briefing_submit: "Request Technical Briefing",
    f_briefing_direct: "Or email the Technical Lead directly:",
    briefing_success_title: "Briefing Request Received!",
    briefing_success_desc: "Tomás Medina will reach out directly to coordinate the Google Meet link according to your preferred time window.",

    // Executive Brief (One-Pager Whitepaper)
    brief_doc_print: "🖨️ Print / Save as PDF",
    eb_tag: "EXECUTIVE BRIEF 2026",
    eb_sub: "Autonomous Nighttime Territorial Surveillance",
    eb_h1: "Autonomous Aerial Intelligence for Wildfire Fighting Across the Night Gap",
    eb_summary: "Athene eliminates the 10-hour nighttime blind spot using 2.1 m lift+cruise VTOL uncrewed aircraft (MVP platform transitioning toward proprietary Noctua-01 airframe), onboard Edge AI thermal inference (NVIDIA Jetson), and 915 MHz FHSS tactical telemetry—displacing costly ground patrols and averting multi-million dollar firefighting aircraft sorties at dawn.",
    eb_b1_title: "1. Operational Problem",
    eb_b1_p1: "<strong>Nighttime blind window (20:00 to 06:00):</strong> Manned aircraft fight fires by day but are grounded at night by DGAC regulations and controlled flight into terrain (CFIT) risks.",
    eb_b1_p2: "<strong>Massive industrial expenditure:</strong> Annual consolidated spending of US$130M on wildfire fighting and prevention in Chile (Source: CORMA).",
    eb_b1_p3: "<strong>Ground patrol blind spots:</strong> 4x4 pickup patrols cover &lt; 12% of land holdings, blind to ravines and deep stands where campfires and arson fires ignite.",
    eb_b2_title: "2. Technological Solution",
    eb_b2_p1: "<strong>2.1 m Lift+Cruise VTOL Platform:</strong> Vertical takeoff from forest clearings, 90-min endurance, and 15 km operational patrol radius.",
    eb_b2_p2: "<strong>Onboard Zero-Cloud Edge AI:</strong> NVIDIA Jetson compute + TensorRT acceleration; thermal threat detection in &lt; 5 s without internet or cell signal.",
    eb_b2_p3: "<strong>915 MHz FHSS Tactical Telemetry:</strong> Acoustic siren and pinpoint GPS coordinates sent straight to ground 4x4 cabs (&gt;20 km LOS).",
    eb_b3_title: "3. IaaS Economic Framework (0 CAPEX)",
    eb_b3_p1: "<strong>Ground Status Quo:</strong> 2 4x4 pickup patrols with 7x7 guards = US$64,000 / 5-month season for 25,000 ha.",
    eb_b3_p2: "<strong>Athene IaaS Subscription:</strong> 1 Nest Alpha Base + VTOL = US$37,500 / season. <strong>Direct savings of US$26,500 (-41%)</strong>.",
    eb_b3_p3: "<strong>Air Attack Defense Shield:</strong> Intercepting 1 ignition precursor averts ~20 h of Air Tractor AT-802F tankers and helicopters (&gt;US$44,000).",
    eb_b4_title: "4. 2026 Operational Validation",
    eb_b4_p1: "<strong>Institutional Backing:</strong> CORFO Semilla Inicia awardee backed by Universidad de Concepción (UdeC).",
    eb_b4_p2: "<strong>South-Central Chile Pilot Program:</strong> 4-phase deployment methodology (Surveying, Calibration, Nighttime Surveillance, ROI Audit).",
    eb_b4_p3: "<strong>Direct Contact:</strong> Tomás Medina (Technical Lead) | <code>tmedina@strigsystems.tech</code> | <code>strigsystems.tech</code>",

    // Footer
    footer_tagline: "Autonomous uncrewed aircraft systems and Edge AI computing for proactive critical risk mitigation.",
    f_nav: "Platform",
    f_corp: "Corporate",
    f_privacy_link: "Privacy Policy & Governance"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c◈ STRIG SYSTEMS %c| Athene Noctua Online',
    'color: #00f0ff; font-weight: bold; font-size: 14px; background: #050811; padding: 4px 8px; border-radius: 4px; border: 1px solid #00f0ff;',
    'color: #94a3b8; font-size: 12px;'
  );

  // Initialize Language
  const savedLang = localStorage.getItem('strig_lang') || 'es';
  setLanguage(savedLang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(nextLang);
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Card Mouse Tracking Lighting Effect (Optimized with RAF)
  const glassPanels = document.querySelectorAll('.glass-panel');
  glassPanels.forEach(panel => {
    let ticking = false;
    panel.addEventListener('mousemove', (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = panel.getBoundingClientRect();
          panel.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          panel.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  });

  // Initialize Mobile Menu & Header Scroll
  initMobileMenu();
  initHeaderScroll();

  // Initialize Pilot & Conversion Modals
  initPilotModal();
  initBriefingModal();
  initExecutiveBriefModal();

  // Initialize C2 Tactical Simulator
  initC2Simulator();

  // Initialize Territorial ROI Calculator
  initRoiCalculator();

  // Initialize Interactive Tooltips & Source Badges
  initTooltips();
});

/**
 * Apply language dictionary to DOM
 */
function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('strig_lang', lang);

  // Update translatable nodes (innerHTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update toggle button active indicator
  document.querySelectorAll('.lang-option').forEach(span => {
    if (span.getAttribute('data-lang-val') === lang) {
      span.classList.add('active');
    } else {
      span.classList.remove('active');
    }
  });

  // Dispatch custom event for widgets that format dynamic numbers/units
  window.dispatchEvent(new CustomEvent('strig-lang-change', { detail: { lang } }));
}

/**
 * Controller for Pilot Application Modal & Resilient Submission
 */
function initPilotModal() {
  const modal = document.getElementById('pilot-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="pilot-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('pilot-form');
  const successState = document.getElementById('form-success');
  const valError = document.getElementById('form-validation-error');
  const netError = document.getElementById('form-error');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const arrowIcon = submitBtn ? submitBtn.querySelector('.arrow-icon') : null;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const firstInput = modal.querySelector('#form-name');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 120);
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    // Clear validation styling upon interaction
    const inputsToWatch = form.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputsToWatch.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('input-invalid');
        if (valError) valError.style.display = 'none';
      });
      input.addEventListener('change', () => {
        input.classList.remove('input-invalid');
        if (valError) valError.style.display = 'none';
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (valError) valError.style.display = 'none';
      if (netError) netError.style.display = 'none';

      const name = form.querySelector('#form-name');
      const email = form.querySelector('#form-email');
      const company = form.querySelector('#form-company');
      const phone = form.querySelector('#form-phone');
      const region = form.querySelector('#form-region');
      const interest = form.querySelector('#form-interest');
      const message = form.querySelector('#form-message');

      let isValid = true;
      [name, email, company, region, interest].forEach(input => {
        if (!input || !input.value.trim()) {
          if (input) input.classList.add('input-invalid');
          isValid = false;
        } else {
          if (input) input.classList.remove('input-invalid');
        }
      });

      // Email RFC regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && email.value && !emailRegex.test(email.value.trim())) {
        email.classList.add('input-invalid');
        isValid = false;
      }

      if (!isValid) {
        if (valError) {
          valError.style.display = 'block';
          valError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      // Collect data object
      const payload = {
        Nombre: name.value.trim(),
        Email: email.value.trim(),
        Empresa_Organizacion: company.value.trim(),
        Telefono: phone ? phone.value.trim() : '',
        Region: region.value,
        Tipo_Interes: interest.value,
        Mensaje: message ? message.value.trim() : '',
        _subject: `Nueva Postulación Piloto: ${company.value.trim()} (${region.value}) - Strig Systems`,
        _template: 'table',
        _captcha: 'false'
      };

      // Button UI state
      const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
      const dict = translations[currentLang] || translations.es;

      if (submitBtn) submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (arrowIcon) arrowIcon.style.display = 'none';
      if (btnText) btnText.textContent = dict.f_submitting || "Enviando...";

      try {
        const response = await fetch('https://formsubmit.co/ajax/contacto@strigsystems.tech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          form.style.display = 'none';
          if (successState) successState.style.display = 'flex';
          form.reset();
        } else {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
      } catch (err) {
        console.warn('FormSubmit AJAX request failed, showing fallback:', err);
        if (netError) {
          netError.style.display = 'block';
          // Prepare mailto fallback link with pre-filled content
          const fallbackSubject = encodeURIComponent(`Postulación Piloto - ${company.value.trim()}`);
          const fallbackBody = encodeURIComponent(
            `Nombre: ${name.value.trim()}\n` +
            `Email: ${email.value.trim()}\n` +
            `Empresa: ${company.value.trim()}\n` +
            `Teléfono: ${phone ? phone.value.trim() : ''}\n` +
            `Región: ${region.value}\n` +
            `Interés: ${interest.value}\n` +
            `Detalles: ${message ? message.value.trim() : ''}`
          );
          const mailLink = netError.querySelector('.alert-link');
          if (mailLink) {
            mailLink.href = `mailto:contacto@strigsystems.tech?cc=tmedina@strigsystems.tech&subject=${fallbackSubject}&body=${fallbackBody}`;
          }
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnSpinner) btnSpinner.style.display = 'none';
        if (arrowIcon) arrowIcon.style.display = 'inline-block';
        if (btnText) btnText.textContent = dict.f_submit_btn || "Enviar Postulación a Piloto";
      }
    });
  }
}

/**
 * Controller for 15-Minute Technical Briefing Modal
 */
function initBriefingModal() {
  const modal = document.getElementById('briefing-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="briefing-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('briefing-form');
  const successState = document.getElementById('briefing-success');
  const netError = document.getElementById('briefing-error');
  const submitBtn = document.getElementById('b-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const arrowIcon = submitBtn ? submitBtn.querySelector('.arrow-icon') : null;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const firstInput = modal.querySelector('#b-name');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 120);
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    const inputsToWatch = form.querySelectorAll('.form-input, .form-select');
    inputsToWatch.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('input-invalid');
        if (netError) netError.style.display = 'none';
      });
      input.addEventListener('change', () => {
        input.classList.remove('input-invalid');
        if (netError) netError.style.display = 'none';
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (netError) netError.style.display = 'none';

      const name = form.querySelector('#b-name');
      const contact = form.querySelector('#b-contact');
      const time = form.querySelector('#b-time');

      let isValid = true;
      if (!name || !name.value.trim()) {
        if (name) name.classList.add('input-invalid');
        isValid = false;
      }
      if (!contact || !contact.value.trim()) {
        if (contact) contact.classList.add('input-invalid');
        isValid = false;
      }

      if (!isValid) return;

      const payload = {
        Nombre: name.value.trim(),
        Contacto: contact.value.trim(),
        Horario_Preferente: time ? time.value : 'Mañana (09:00 - 13:00 CLT)',
        _subject: `Solicitud Briefing Técnico 15 min - ${name.value.trim()}`,
        _template: 'table',
        _captcha: 'false'
      };

      const currentLang = document.documentElement.getAttribute('data-lang') || 'es';
      const dict = translations[currentLang] || translations.es;

      if (submitBtn) submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (arrowIcon) arrowIcon.style.display = 'none';
      if (btnText) btnText.textContent = dict.f_submitting || "Enviando...";

      try {
        const response = await fetch('https://formsubmit.co/ajax/tmedina@strigsystems.tech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          form.style.display = 'none';
          if (successState) successState.style.display = 'flex';
          form.reset();
        } else {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
      } catch (err) {
        console.warn('Briefing FormSubmit request failed:', err);
        if (netError) {
          netError.style.display = 'block';
          const fallbackSub = encodeURIComponent(`Solicitud Briefing Técnico - ${name.value.trim()}`);
          const fallbackBody = encodeURIComponent(
            `Nombre: ${name.value.trim()}\nContacto: ${contact.value.trim()}\nHorario Preferente: ${time ? time.value : ''}`
          );
          const mailLink = netError.querySelector('.alert-link');
          if (mailLink) {
            mailLink.href = `mailto:tmedina@strigsystems.tech?subject=${fallbackSub}&body=${fallbackBody}`;
          }
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnSpinner) btnSpinner.style.display = 'none';
        if (arrowIcon) arrowIcon.style.display = 'inline-block';
        if (btnText) btnText.textContent = dict.f_briefing_submit || "Solicitar Briefing Técnico";
      }
    });
  }
}

/**
 * Controller for Executive Brief One-Pager Whitepaper Modal & Print
 */
function initExecutiveBriefModal() {
  const modal = document.getElementById('brief-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="brief-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const printBtn = document.getElementById('brief-print-btn');

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/**
 * Controller for Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (!toggleBtn || !drawer) return;

  function toggleDrawer(open) {
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains('open');
    if (shouldOpen) {
      drawer.classList.add('open');
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    } else {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  // Close when clicking any link inside the mobile drawer
  drawer.querySelectorAll('.mobile-nav-item, .btn-mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      toggleDrawer(false);
    });
  });

  // Close when clicking outside header & drawer
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleDrawer(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleDrawer(false);
    }
  });
}

/**
 * Dynamic Header Scroll Blur & Compact State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Interactive Territorial Acreage ROI Calculator (Chilean Forestry Operational Model)
 * Baseline: 4x4 Ground Patrol (2 guards 7x7 + lease + fuel = US$ 6,400/mo/truck, 5-month season Nov-Mar)
 * Solution: Athene IaaS (Nest Alpha Base + VTOL Noctua-01 = US$ 7,500/mo/base, 5-month season Nov-Mar)
 * Shield: Morning air suppression hours avoided (Air Tractor / Helicopter combat > US$ 44,000 / incident)
 */
function initRoiCalculator() {
  const slider = document.getElementById('roi-slider');
  const areaReadout = document.getElementById('roi-area-readout');
  const mannedVal = document.getElementById('roi-manned-val');
  const mannedSub = document.getElementById('roi-manned-sub');
  const strigVal = document.getElementById('roi-strig-val');
  const strigSub = document.getElementById('roi-strig-sub');
  const savingsVal = document.getElementById('roi-savings-val');
  const savingsPct = document.getElementById('roi-savings-pct');
  const co2Val = document.getElementById('roi-co2-val');
  const co2Sub = document.getElementById('roi-co2-sub');
  const presetBtns = document.querySelectorAll('.roi-preset-btn');

  if (!slider) return;

  function updateRoi() {
    const ha = parseInt(slider.value, 10);
    const lang = document.documentElement.getAttribute('data-lang') || 'es';
    const isEs = lang === 'es';
    const locale = isEs ? 'es-CL' : 'en-US';

    // 1. Ground Patrol Status Quo:
    // 1 truck covers ~12,500 ha with < 12% visual coverage
    // Cost: US$ 6,400 / month * 5 months = US$ 32,000 per truck / season
    const trucks = Math.max(1, Math.round(ha / 12500));
    const mannedCost = trucks * 32000;

    // 2. Athene IaaS:
    // 1 Nest Alpha base covers up to 25,000 ha cluster (15 km operational radius)
    // Subscription: US$ 7,500 / month * 5 months = US$ 37,500 per base / season
    // For smaller pilot sectors (<= 12.5k ha), shared modular cluster rate applies (US$ 18,750 / season)
    let bases = 1;
    let strigCost = 37500;
    if (ha <= 12500) {
      bases = 1;
      strigCost = 18750; // modular cluster rate (US$ 3,750/mo)
    } else {
      bases = Math.max(1, Math.round(ha / 25000));
      strigCost = bases * 37500;
    }

    // 3. Direct Operational Savings:
    const savings = mannedCost - strigCost;
    const pct = mannedCost > 0 ? Math.round((savings / mannedCost) * 100) : 41;

    // 4. Combat Avoidance Shield:
    // 1 prevented fire saves ~20 hours of Air Tractor AT-802F (US$ 2,200/h) or AS350 helicopter suppression
    const avoidedFires = Math.max(1, Math.round(ha / 25000));
    const combatAvoided = avoidedFires * 44000;

    const seasonWord = isEs ? 'temporada (5 m)' : 'season (5 mo)';
    const directWord = isEs ? 'DIRECTO' : 'DIRECT';

    if (areaReadout) {
      areaReadout.textContent = `${ha.toLocaleString(locale)} ha`;
    }
    if (mannedVal) {
      mannedVal.textContent = `US$ ${Math.round(mannedCost).toLocaleString(locale)} / ${seasonWord}`;
    }
    if (mannedSub) {
      mannedSub.textContent = isEs
        ? `${trucks} ${trucks > 1 ? 'camionetas' : 'camioneta'} c/guardias 7x7 • Cobertura < 12%`
        : `${trucks} patrol ${trucks > 1 ? 'trucks' : 'truck'} w/7x7 guards • < 12% coverage`;
    }
    if (strigVal) {
      strigVal.textContent = `US$ ${Math.round(strigCost).toLocaleString(locale)} / ${seasonWord}`;
    }
    if (strigSub) {
      if (ha <= 12500) {
        strigSub.textContent = isEs
          ? `1 Base Nest Alpha (Sector Prioritario) • Cobertura 100%`
          : `1 Nest Alpha Base (Priority Sector) • 100% coverage`;
      } else {
        strigSub.textContent = isEs
          ? `${bases} ${bases > 1 ? 'Bases' : 'Base'} Nest Alpha + VTOL • Cobertura 100%`
          : `${bases} Nest Alpha ${bases > 1 ? 'Bases' : 'Base'} + VTOL • 100% coverage`;
      }
    }
    if (savingsVal) {
      savingsVal.textContent = `US$ ${Math.round(savings).toLocaleString(locale)}`;
    }
    if (savingsPct) {
      savingsPct.textContent = `-${pct}% ${directWord}`;
    }
    if (co2Val) {
      co2Val.textContent = `> US$ ${Math.round(combatAvoided).toLocaleString(locale)}`;
    }
    if (co2Sub) {
      co2Sub.textContent = isEs
        ? `Aviones cisterna evitados al amanecer (${avoidedFires} ${avoidedFires > 1 ? 'focos' : 'foco'})`
        : `Air tankers avoided at dawn (${avoidedFires} ${avoidedFires > 1 ? 'fires' : 'fire'} prevented)`;
    }

    // Sync preset buttons active state
    presetBtns.forEach(btn => {
      const pVal = parseInt(btn.getAttribute('data-preset'), 10);
      if (pVal === ha) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  slider.addEventListener('input', updateRoi);

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset');
      if (preset) {
        slider.value = preset;
        updateRoi();
      }
    });
  });

  // Listen for language changes to update localized suffixes
  window.addEventListener('strig-lang-change', updateRoi);

  // Initial calculation
  updateRoi();
}

/**
 * Controller for interactive tooltips and source badges (click/tap toggling & click-outside dismissal)
 */
function initTooltips() {
  const triggers = document.querySelectorAll('.source-badge-wrap, .metric-info-trigger, .roi-info-trigger');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    // Handle click/tap for mobile & touchscreens
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = trigger.classList.contains('active');

      // Close all other open tooltips
      triggers.forEach(t => {
        if (t !== trigger) {
          t.classList.remove('active');
          t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        trigger.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        trigger.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Handle keyboard accessibility (Enter / Space / Escape)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      } else if (e.key === 'Escape') {
        trigger.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.blur();
      }
    });
  });

  // Close when clicking anywhere outside
  document.addEventListener('click', (e) => {
    triggers.forEach(trigger => {
      if (!trigger.contains(e.target)) {
        trigger.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close on Escape key globally
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      triggers.forEach(trigger => {
        trigger.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/**
 * Controller for Tactical C2 FLIR Mission Simulator & Dual Situational Map
 */
function initC2Simulator() {
  const canvas = document.getElementById('c2-flir-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const screenWrapper = document.getElementById('c2-screen-wrapper');

  // Interactive controls
  const paletteBtns = document.querySelectorAll('.c2-mode-btn');
  const zoomBtns = document.querySelectorAll('.c2-zoom-btn');
  const btnGimbal = document.getElementById('c2-btn-gimbal');
  const btnMap = document.getElementById('c2-btn-map');

  // Panels & Views
  const panelGimbal = document.getElementById('c2-gimbal-panel');
  const panelMap = document.getElementById('c2-map-panel');
  const pipWindow = document.getElementById('c2-pip-window');
  const pipViewport = document.getElementById('c2-pip-viewport');
  const pipBadge = document.getElementById('c2-pip-badge');

  // Tactical Map SVG Elements
  const mapSvg = document.getElementById('c2-map-svg');
  const mapTarget = document.getElementById('c2-map-target');
  const mapTargetTemp = document.getElementById('c2-map-target-temp');
  const mapTargetCoords = document.getElementById('c2-map-target-coords');
  const mapVtol = document.getElementById('c2-map-vtol');
  const saluteLocation = document.getElementById('salute-location');

  // Readouts
  const headingVal = document.getElementById('c2-heading-val');
  const pitchLadder = document.getElementById('c2-pitch-ladder');
  const targetBox = document.getElementById('c2-target-box');
  const targetTag = document.getElementById('c2-target-tag');
  const targetTemp = document.getElementById('c2-target-temp');
  const latVal = document.getElementById('c2-lat-val');
  const lonVal = document.getElementById('c2-lon-val');
  const fovVal = document.getElementById('c2-fov-val');
  const bufferTxt = document.getElementById('c2-buffer-txt');
  const bufferFill = document.getElementById('c2-buffer-fill');
  const gimbalVal = document.getElementById('c2-gimbal-val');

  // Dossier modal
  const dispatchBtn = document.getElementById('c2-dispatch-btn');
  const dossierModal = document.getElementById('c2-dossier-modal');
  const dossierClose = document.getElementById('c2-dossier-close');
  const dossierCoords = document.getElementById('dossier-coords');
  const dossierTemp = document.getElementById('dossier-temp');
  const copyBtn = document.getElementById('dossier-copy-btn');
  const exportBtn = document.getElementById('dossier-sim-export-btn');
  const alertStatus = document.getElementById('dossier-alert-status');

  // State
  let currentView = 'gimbal'; // 'gimbal' | 'map'
  let currentPalette = 'ironbow';
  let currentZoom = 1.0;
  const vtol = { x: 390, y: 180 };
  let target = {
    x: 485,
    y: 235,
    temp: 284,
    lat: -37.24238,
    lon: -72.68450
  };
  let isBufferRunning = false;
  let t = 0;

  // Setup PiP internal elements
  let pipCanvas = null;
  let pipCtx = null;
  let pipMapClone = null;

  if (pipViewport) {
    // 1. Mini canvas for live FLIR mirror (when in map view)
    pipCanvas = document.createElement('canvas');
    pipCanvas.width = 210;
    pipCanvas.height = 118;
    pipCanvas.className = 'c2-pip-canvas';
    pipCanvas.style.display = 'none';
    pipCtx = pipCanvas.getContext('2d');
    pipViewport.appendChild(pipCanvas);

    // 2. Mini Map SVG container for map preview (when in gimbal view)
    if (mapSvg) {
      pipMapClone = mapSvg.cloneNode(true);
      pipMapClone.id = 'c2-pip-map-clone';
      pipMapClone.style.display = 'block';
      pipMapClone.style.width = '100%';
      pipMapClone.style.height = '100%';
      pipViewport.appendChild(pipMapClone);
    }
  }

  function setConsoleView(view) {
    currentView = view;
    const isEn = (document.documentElement.getAttribute('data-lang') || 'es') === 'en';

    if (view === 'gimbal') {
      if (panelGimbal) panelGimbal.classList.add('active');
      if (panelMap) panelMap.classList.remove('active');
      if (btnGimbal) btnGimbal.classList.add('active');
      if (btnMap) btnMap.classList.remove('active');
      if (pipCanvas) pipCanvas.style.display = 'none';
      if (pipMapClone) pipMapClone.style.display = 'block';
      if (pipBadge) {
        pipBadge.textContent = isEn ? "⇄ C2 MAP (CLICK)" : "⇄ MAPA C2 (CLIC)";
      }
    } else {
      if (panelMap) panelMap.classList.add('active');
      if (panelGimbal) panelGimbal.classList.remove('active');
      if (btnMap) btnMap.classList.add('active');
      if (btnGimbal) btnGimbal.classList.remove('active');
      if (pipMapClone) pipMapClone.style.display = 'none';
      if (pipCanvas) pipCanvas.style.display = 'block';
      if (pipBadge) {
        pipBadge.textContent = isEn ? "⇄ FLIR GIMBAL (CLICK)" : "⇄ GIMBAL FLIR (CLIC)";
      }
    }
  }

  if (btnGimbal) btnGimbal.addEventListener('click', () => setConsoleView('gimbal'));
  if (btnMap) btnMap.addEventListener('click', () => setConsoleView('map'));
  if (pipWindow) {
    pipWindow.addEventListener('click', () => {
      setConsoleView(currentView === 'gimbal' ? 'map' : 'gimbal');
    });
    pipWindow.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setConsoleView(currentView === 'gimbal' ? 'map' : 'gimbal');
      }
    });
  }

  // Generate 256-color LUTs for true radiometric rendering
  const luts = {
    ironbow: createIronbowLUT(),
    whitehot: createWhiteHotLUT(),
    blackhot: createBlackHotLUT()
  };

  function createIronbowLUT() {
    const lut = new Uint8ClampedArray(256 * 3);
    for (let i = 0; i < 256; i++) {
      const p = i / 255;
      let r = 0, g = 0, b = 0;
      if (p < 0.25) {
        const f = p / 0.25;
        r = Math.floor(18 + f * 72);
        g = 0;
        b = Math.floor(40 + f * 90);
      } else if (p < 0.5) {
        const f = (p - 0.25) / 0.25;
        r = Math.floor(90 + f * 110);
        g = Math.floor(f * 25);
        b = Math.floor(130 - f * 80);
      } else if (p < 0.75) {
        const f = (p - 0.5) / 0.25;
        r = Math.floor(200 + f * 55);
        g = Math.floor(25 + f * 115);
        b = Math.floor(50 - f * 50);
      } else if (p < 0.92) {
        const f = (p - 0.75) / 0.17;
        r = 255;
        g = Math.floor(140 + f * 90);
        b = Math.floor(f * 20);
      } else {
        const f = (p - 0.92) / 0.08;
        r = 255;
        g = Math.min(255, Math.floor(230 + f * 25));
        b = Math.min(255, Math.floor(20 + f * 235));
      }
      lut[i * 3] = r;
      lut[i * 3 + 1] = g;
      lut[i * 3 + 2] = b;
    }
    return lut;
  }

  function createWhiteHotLUT() {
    const lut = new Uint8ClampedArray(256 * 3);
    for (let i = 0; i < 256; i++) {
      lut[i * 3] = i;
      lut[i * 3 + 1] = i;
      lut[i * 3 + 2] = i;
    }
    return lut;
  }

  function createBlackHotLUT() {
    const lut = new Uint8ClampedArray(256 * 3);
    for (let i = 0; i < 256; i++) {
      const inv = 255 - i;
      lut[i * 3] = inv;
      lut[i * 3 + 1] = inv;
      lut[i * 3 + 2] = inv;
    }
    return lut;
  }

  // Pre-generate thermal intensity grid (offscreen 400x225)
  const gw = 400;
  const gh = 225;
  const rawIntensity = new Float32Array(gw * gh);

  for (let y = 0; y < gh; y++) {
    for (let x = 0; x < gw; x++) {
      const nx = x / gw;
      const ny = y / gh;
      const mountain = Math.sin(nx * 5.2 + ny * 2.1) * 0.15 + Math.cos(nx * 3.1 - ny * 4.2) * 0.12;
      let val = 0.22 + ny * 0.1 + mountain;
      const roadX = 0.35 + Math.sin(ny * 6) * 0.12 + ny * 0.25;
      const distToRoad = Math.abs(nx - roadX);
      if (distToRoad < 0.012) {
        val -= 0.08;
      }
      const treeNoise = ((x * 17 + y * 31) % 19) / 19 * 0.04;
      val += treeNoise;
      rawIntensity[y * gw + x] = Math.max(0.05, Math.min(0.55, val));
    }
  }

  const offCanvas = document.createElement('canvas');
  offCanvas.width = gw;
  offCanvas.height = gh;
  const offCtx = offCanvas.getContext('2d');
  const imgData = offCtx.createImageData(gw, gh);
  const data = imgData.data;

  // Lifecycle visibility tracking to pause RAF when off-screen (battery & Core Web Vitals)
  let isC2Visible = true;
  let isRendering = false;
  const c2Section = document.getElementById('c2-console');
  if (c2Section && 'IntersectionObserver' in window) {
    const c2Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isC2Visible = entry.isIntersecting;
        if (isC2Visible && !isRendering) {
          isRendering = true;
          requestAnimationFrame(render);
        }
      });
    }, { threshold: 0.05 });
    c2Observer.observe(c2Section);
  }

  // Main Render Loop
  function render() {
    if (!isC2Visible) {
      isRendering = false;
      return;
    }
    isRendering = true;
    t += 0.025;
    const activeLut = luts[currentPalette] || luts.ironbow;

    const tx = (target.x / 800) * gw;
    const ty = (target.y / 450) * gh;

    // Secondary human presence walking near campfire
    const hx = tx + Math.cos(t * 1.5) * 12;
    const hy = ty + Math.sin(t * 1.2) * 8;

    let pIdx = 0;
    for (let y = 0; y < gh; y++) {
      for (let x = 0; x < gw; x++) {
        let intensity = rawIntensity[y * gw + x];

        // Main fire precursor heat bloom
        const dx1 = x - tx;
        const dy1 = y - ty;
        const distSq1 = dx1 * dx1 + dy1 * dy1;
        if (distSq1 < 400) {
          const bloom = Math.exp(-distSq1 / 55);
          const flicker = 1.0 + Math.sin(t * 8 + x * 0.5) * 0.06;
          intensity += bloom * 0.75 * flicker;
        }

        // Secondary human heat signature
        const dx2 = x - hx;
        const dy2 = y - hy;
        const distSq2 = dx2 * dx2 + dy2 * dy2;
        if (distSq2 < 120) {
          const humanBloom = Math.exp(-distSq2 / 20);
          intensity += humanBloom * 0.38;
        }

        const lutIdx = Math.max(0, Math.min(255, Math.floor(intensity * 255)));
        const lPos = lutIdx * 3;

        data[pIdx] = activeLut[lPos];
        data[pIdx + 1] = activeLut[lPos + 1];
        data[pIdx + 2] = activeLut[lPos + 2];
        data[pIdx + 3] = 255;
        pIdx += 4;
      }
    }

    offCtx.putImageData(imgData, 0, 0);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'medium';
    ctx.drawImage(offCanvas, 0, 0, 800, 450);

    // If map view is active, live-mirror the FLIR canvas into the PiP window!
    if (currentView === 'map' && pipCtx && pipCanvas) {
      pipCtx.drawImage(canvas, 0, 0, 210, 118);
    }

    // Dynamic rotation of VTOL vector towards target
    const dx = target.x - vtol.x;
    const dy = target.y - vtol.y;
    const targetAngleDeg = (Math.atan2(dy, dx) * 180 / Math.PI);
    const flightWobble = Math.sin(t * 0.8) * 1.5;
    const currentHeadingAngle = targetAngleDeg + flightWobble;

    if (mapVtol) {
      mapVtol.setAttribute('transform', `translate(${vtol.x}, ${vtol.y}) rotate(${currentHeadingAngle.toFixed(1)})`);
    }
    if (pipMapClone) {
      const cloneVtol = pipMapClone.querySelector('#c2-map-vtol');
      if (cloneVtol) {
        cloneVtol.setAttribute('transform', `translate(${vtol.x}, ${vtol.y}) rotate(${currentHeadingAngle.toFixed(1)})`);
      }
    }

    // Update Telemetry dynamics
    const curHeading = (68.4 + Math.sin(t * 0.6) * 3.2).toFixed(1);
    const curRoll = (Math.sin(t * 0.8) * 1.8).toFixed(1);
    const curPitch = (-2.1 + Math.cos(t * 0.5) * 0.8).toFixed(1);

    if (headingVal) headingVal.textContent = `${curHeading}° ENE`;
    if (gimbalVal) gimbalVal.textContent = `AZ +${(14.2 + Math.sin(t * 0.7) * 1.5).toFixed(1)}° | EL -32.8°`;

    if (pitchLadder) {
      pitchLadder.style.transform = `translate(-50%, -50%) rotate(${curRoll}deg) translateY(${curPitch * 3}px)`;
    }

    updateTargetBoxPosition();
    if (isC2Visible) {
      requestAnimationFrame(render);
    } else {
      isRendering = false;
    }
  }

  function updateTargetBoxPosition() {
    if (!targetBox || !screenWrapper) return;
    const rect = screenWrapper.getBoundingClientRect();
    const scaleX = rect.width / 800;
    const scaleY = rect.height / 450;

    targetBox.style.left = `${target.x * scaleX}px`;
    targetBox.style.top = `${target.y * scaleY}px`;
  }

  // Palette button interactions
  paletteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      paletteBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPalette = btn.getAttribute('data-palette') || 'ironbow';
    });
  });

  // Digital Zoom buttons
  zoomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      zoomBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentZoom = parseFloat(btn.getAttribute('data-zoom') || '1.0');

      if (canvas) {
        canvas.style.transform = `scale(${currentZoom})`;
      }

      if (fovVal) {
        if (currentZoom === 1.0) fovVal.textContent = "45.0° HFOV";
        else if (currentZoom === 2.5) fovVal.textContent = "18.0° HFOV";
        else if (currentZoom === 5.0) fovVal.textContent = "9.0° HFOV";
      }
    });
  });

  // Centralized Target Update (Works for both Gimbal click & Map click)
  function updateTargetPosition(normX, normY) {
    target.x = normX;
    target.y = normY;

    const dLat = (normY - 225) * 0.00018;
    const dLon = (normX - 400) * 0.00022;
    target.lat = -37.24238 + dLat;
    target.lon = -72.68450 + dLon;

    const randomTemp = Math.floor(190 + Math.random() * 140);
    target.temp = randomTemp;

    if (targetTemp) targetTemp.textContent = `T_MAX: ${randomTemp}°C (ΔT +${randomTemp - 16}°C)`;
    if (latVal) latVal.textContent = `${Math.abs(target.lat).toFixed(5)}° S`;
    if (lonVal) lonVal.textContent = `${Math.abs(target.lon).toFixed(5)}° W`;

    // Update Tactical Map SVG elements
    if (mapTarget) {
      mapTarget.setAttribute('transform', `translate(${target.x}, ${target.y})`);
    }
    if (mapTargetTemp) {
      mapTargetTemp.textContent = `T_MAX: ${randomTemp}°C [PRECURSOR]`;
    }
    const easting = Math.round(724000 + (normX / 800) * 4000);
    const northing = Math.round(5875000 + ((450 - normY) / 450) * 4000);
    const utmStr = `18H WE ${Math.round(easting / 100)} ${Math.round(northing / 100)}`;
    if (mapTargetCoords) {
      mapTargetCoords.textContent = `UTM: ${utmStr}`;
    }
    if (saluteLocation) {
      saluteLocation.textContent = `UTM ${utmStr}`;
    }

    // Mirror to PiP clone if present
    if (pipMapClone) {
      const cloneTarget = pipMapClone.querySelector('#c2-map-target');
      if (cloneTarget) cloneTarget.setAttribute('transform', `translate(${target.x}, ${target.y})`);
    }

    runBufferAnimation();
  }

  // Click-to-Lock Target Position
  if (screenWrapper) {
    screenWrapper.addEventListener('click', (e) => {
      // Do not intercept clicks on PiP or SALUTE card
      if (e.target.closest('#c2-pip-window') || e.target.closest('#c2-salute-card')) return;

      const rect = screenWrapper.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const normX = Math.max(40, Math.min(760, (clickX / rect.width) * 800));
      const normY = Math.max(40, Math.min(410, (clickY / rect.height) * 450));

      updateTargetPosition(normX, normY);
    });
  }

  function runBufferAnimation() {
    if (isBufferRunning) return;
    isBufferRunning = true;
    let frame = 0;
    if (bufferFill) bufferFill.style.width = '0%';
    if (bufferTxt) bufferTxt.textContent = "BUFFERING (0/16)";

    const interval = setInterval(() => {
      frame++;
      const pct = (frame / 16) * 100;
      if (bufferFill) bufferFill.style.width = `${pct}%`;
      if (bufferTxt) bufferTxt.textContent = `BUFFERING (${frame}/16)`;

      if (frame >= 16) {
        clearInterval(interval);
        isBufferRunning = false;
        if (bufferTxt) bufferTxt.textContent = "CONFIRMED (16/16)";
        if (targetTag) {
          targetTag.textContent = "TARGET LOCKED [PRECURSOR]";
          targetTag.style.background = "rgba(245, 158, 11, 0.9)";
        }
      }
    }, 45);
  }

  // Dossier Modal Logic
  if (dispatchBtn && dossierModal) {
    dispatchBtn.addEventListener('click', () => {
      if (dossierCoords) dossierCoords.textContent = `${target.lat.toFixed(5)}, ${target.lon.toFixed(5)}`;
      if (dossierTemp) dossierTemp.textContent = `${target.temp}°C (Punto Anómalo Crítico)`;
      if (alertStatus) alertStatus.style.display = 'none';
      dossierModal.classList.add('active');
      dossierModal.setAttribute('aria-hidden', 'false');
    });

    if (dossierClose) {
      dossierClose.addEventListener('click', () => {
        dossierModal.classList.remove('active');
        dossierModal.setAttribute('aria-hidden', 'true');
      });
    }

    dossierModal.addEventListener('click', (e) => {
      if (e.target === dossierModal) {
        dossierModal.classList.remove('active');
        dossierModal.setAttribute('aria-hidden', 'true');
      }
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = `${target.lat.toFixed(5)}, ${target.lon.toFixed(5)}`;
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.textContent = "¡Coordenadas Copiadas!";
          setTimeout(() => { copyBtn.textContent = "Copiar Coordenadas GPS"; }, 2000);
        });
      });
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        if (alertStatus) {
          const isEn = (document.documentElement.getAttribute('data-lang') || 'es') === 'en';
          alertStatus.style.display = 'block';
          alertStatus.innerHTML = isEn
            ? `✓ Multichannel tactical package transmitted (2.1s): FHSS 915 MHz to Crew Alpha-1 in field + Starlink Satlink Uplink + Central C2 GIS Webhook.`
            : `✓ Paquete táctico multicanal transmitido (2,1s): Radioenlace FHSS 915 MHz a Cuadrilla Alpha-1 en terreno + Uplink Satelital Starlink + Webhook Central GIS / Despacho.`;
        }
      });
    }
  }

  // Start rendering
  render();

  // Resize handler
  window.addEventListener('resize', updateTargetBoxPosition, { passive: true });
}




