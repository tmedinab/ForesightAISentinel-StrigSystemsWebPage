/**
 * Strig Systems — Athene Noctua
 * Enterprise Production Client Controller (Bilingual ES / EN)
 */

const translations = {
  es: {
    // Nav
    nav_problem: "Problema",
    nav_tech_menu: "Tecnología",
    nav_tech: "Arquitectura & Sensores",
    nav_tech_desc: "Gimbal EO/IR, Edge AI Jetson y telemetría FHSS",
    nav_roadmap: "Hoja de Ruta (TRL 3)",
    nav_roadmap_desc: "Hitos 2026-27 y Visión de Plataforma",
    nav_compare: "Benchmark Táctico",
    nav_compare_desc: "Athene vs Satélites, Torres y Brigadas",
    nav_val_menu: "Validación",
    nav_pilot: "Programa de Validación",
    nav_pilot_desc: "Validación conjunta en predio piloto privado",
    nav_impact: "Impacto Operacional",
    nav_impact_desc: "Seguridad nocturna, disuasión y ataque al amanecer",
    nav_faq: "FAQ Técnica",
    nav_faq_desc: "Límites operacionales, niebla y falsas alarmas",
    nav_company_menu: "Compañía",
    nav_team: "Equipo Fundador",
    nav_team_desc: "5 ingenieros civiles aeroespaciales UdeC",
    nav_alliances: "I+D & Alianzas",
    nav_alliances_desc: "CORFO, Gearbox, UdeC, Arauco",
    nav_cta: "Sumarse a Validación",

    // Hero
    hero_status: "Prototipo en desarrollo · TRL 3 · Demo técnica Gearbox Ene 2027",
    hero_badge: "Proyecto Semilla Inicia CORFO • UdeC • Combate de Incendios en Primera Línea",
    hero_title_1: "Los riesgos se mueven rápido.",
    hero_title_2: "Nosotros los vemos venir.",
    hero_sub: "Plataforma de inteligencia aérea para la brecha nocturna de incendios mediante aeronaves VTOL e inferencia térmica Edge AI a bordo. Detectamos precursores y actividad humana no autorizada antes de la ignición, reduciendo la exposición en terreno y optimizando la respuesta al amanecer.",
    hero_cta_primary: "Sumarse al Programa de Validación 2026-27",
    hero_cta_secondary: "Ver Hoja de Ruta & Tecnología",

    // Metrics & Taxonomy
    m1_title: "Brecha Nocturna",
    m1_sub: "Vigilancia aérea mientras la aviación tripulada está en tierra",
    m1_tax: "[PROBLEMA]",
    m1_tip_title: "Brecha Nocturna · ¿Por qué aquí?",
    m1_tooltip: "Es el origen del problema: por normativa DGAC y riesgo de relieve (CFIT), aviones cisterna y helicópteros quedan en tierra al atardecer. Athene vigila esa ventana ciega donde el 99,7% de los incendios se inician por causa humana.",
    m2_title: "Radio de Misión",
    m2_sub: "Meta de diseño para 50.000 ha • Hoy: 1 km en predio experimental (VLOS)",
    m2_tax: "Objetivo de Producto",
    m2_tip_title: "Radio 15 km · ¿Por qué aquí?",
    m2_tooltip: "Es nuestro objetivo de producto a escala territorial: alcanzar 15 km de radio bajo certificación BVLOS para proteger clústeres de 50.000 ha. En la fase actual de validación operamos en predios piloto a 1 km en línea de vista (VLOS).",
    m3_title: "Detección Térmica",
    m3_sub: "Inferencia local a bordo • Alerta a operador en minutos (meta ≤ 3 min)",
    m3_tax: "Meta MVP: <10% Falsas Alarmas",
    m3_tip_title: "Detección Térmica · ¿Por qué aquí?",
    m3_tooltip: "Frente a la latencia satelital (30 a 90 minutos) y la lentitud terrestre, la inferencia Edge AI a bordo detecta precursores térmicos en segundos y despacha la alerta a la estación en minutos (meta de diseño ≤ 3 min con <10% falsas alarmas).",
    m4_title: "Disuasión Autorizada",
    m4_sub: "Estrobo de alta intensidad y sirena activados por el operador ante actividad humana",
    m4_tax: "Diferenciador Clave",
    m4_tip_title: "Human-in-the-Loop · ¿Por qué aquí?",
    m4_tooltip: "Seguridad y criterio humano: la IA a bordo detecta precursores y presencia humana, pero el estrobo y la sirena solo se activan con autorización expresa del operador en tierra, protegiendo a las brigadas de emboscadas o exposición a ciegas.",

    // Problem
    prob_tag: "El Diagnóstico Territorial",
    prob_title: "La brecha nocturna de combate y vigilancia",
    corma_tooltip: "Dato oficial CONAF (2003-2023): El 99,7% de los incendios forestales en Chile se inician por causa humana, ya sea intencional o accidental.",
    prob_sub: "El 99,7% de los incendios forestales son causados por el ser humano (CONAF, 2003-2023). La aviación tripulada combate de día, pero por seguridad y normativa DGAC no vuela de noche. Cuando el viento y el riesgo de intencionalidad son más altos, el cielo queda vacío y las cuadrillas en tierra no tienen visibilidad en el bosque profundo.",
    p1_head: "Centrales de Operaciones",
    p1_desc: "Incertidumbre constante. Cuando los satélites reportan calor, el foco ya ha alcanzado escala incontrolable.",
    p1_tag: "Información fragmentada",
    p2_head: "Empresas & Propietarios",
    p2_desc: "Riesgo permanente de pérdidas patrimoniales catastróficas en madera, biomasa e infraestructura productiva.",
    p2_tag: "Pérdidas millonarias",
    p3_head: "Brigadistas en Terreno",
    p3_desc: "Exposición extrema a emboscadas, cortes de camino o accidentes al ingresar de noche a ciegas por caminos de ripio, con escasa visibilidad efectiva fuera de la huella.",
    p3_tag: "Riesgo vital innecesario",
    quote_text: "Satélites sufren latencia orbital; torres fijas tienen puntos ciegos orográficos; las patrullas en camioneta 4x4 solo ven lo que tocan sus focos en el camino; y los aviones cisterna quedan en tierra al atardecer por seguridad. Athene es el centinela aéreo nocturno que detecta la actividad humana y el precursor térmico antes de que se inicie el fuego, optimizando el despliegue al amanecer.",

    // Tactical Benchmark
    comp_tag: "Benchmark Táctico",
    comp_title: "Por Qué las Soluciones Tradicionales Fallan de Noche",
    comp_sub: "Análisis técnico comparativo entre satélites de órbita baja, torres térmicas fijas, vigilancia tripulada convencional y la plataforma Athene.",
    matrix_scroll_hint: "⇄ Desliza horizontalmente para comparar tecnologías",
    th_dim: "Dimensión Operativa",
    th_sat: "Satélites LEO<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Torres Térmicas Fijas<br><span class=\"th-sub\">Mástiles Ópticos</span>",
    th_drone: "Vigilancia Tripulada<br><span class=\"th-sub\">Avionetas Diurnas + Cuadrillas/Drones</span>",
    strig_badge: "Nuestra Arquitectura",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (Plataforma VTOL + Edge AI)</span>",
    r1_dim: "Patrullaje Nocturno Continuo",
    r1_sat: "Pasos orbitales discretos (1 a 4 h). Estándar macrocontinental indiscutido de día, pero con ventana ciega crítica durante la noche.",
    r1_tower: "Continuo 24/7 de alta confiabilidad, pero estrictamente limitado a la línea de vista directa (LOS) de su cuenca visible.",
    r1_drone: "Inoperante de noche. Los aviones cisterna y de coordinación quedan en tierra al atardecer por normativa DGAC/VFR nocturno (riesgo de colisión contra el relieve CFIT). En tierra, las cuadrillas terrestres sufren fatiga, lentitud en ripio y nula visibilidad fuera del camino.",
    r1_strig: "<strong>Patrullaje aéreo nocturno</strong> en predio piloto con operador calificado (VLOS). <span class=\"tax-badge tax-badge-vision\">Visión: Estación Nest Autónoma</span>",
    r2_dim: "Latencia de Detección & Alerta",
    r2_sat: "<span class=\"badge-negative\">30 a 90 minutos</span> (descarga orbital, procesamiento en la nube y distribución de alertas a centrales).",
    r2_tower: "Instantánea en sensor óptico; requiere operador humano 24/7 en central para verificación y filtrado de falsas alarmas.",
    r2_drone: "Instantánea para el piloto u operador local; demorada hacia la central de despacho si no existe cobertura 4G/5G en la quebrada o predio.",
    r2_strig: "<span class=\"badge-positive\">Detección en segundos</span> con Edge AI a bordo. Alerta a la estación de operador en minutos (meta MVP ≤ 3 min).",
    r3_dim: "Detección de Precursores (Humanos / Vehículos)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (Resolución espacial de 375m a 1km. Diseñado para incendios activos, incapaz de ver personas o fogatas).",
    r3_tower: "Nula en senderos boscosos densos o bajo dosel arbóreo fuera del ángulo visual del mástil.",
    r3_drone: "Severamente limitada. Las avionetas no vuelan de noche para detectar campamentos o fogatas tempranas; las patrullas en camioneta solo vigilan caminos habilitados, dejando el interior ciego.",
    r3_strig: "<span class=\"badge-positive\">Detección óptica/térmica</span> de presencia humana visible desde 100 m para disuasión antes del inicio del fuego.",
    r4_dim: "Puntos Ciegos Topográficos",
    r4_sat: "Afectado por nubosidad baja, humo denso e inversión térmica que absorben la radiación infrarroja.",
    r4_tower: "<span class=\"badge-negative\">Crítico:</span> Puntos ciegos físicos insalvables tras cerros, quebradas y laderas opuestas.",
    r4_drone: "Crítico. Las cuadrillas terrestres no tienen visibilidad tras cerros ni en quebradas profundas; las aeronaves diurnas sufren con nubosidad baja y humo denso.",
    r4_strig: "<span class=\"badge-positive\">Perspectiva cenital:</span> Vuelo adaptado sobre quebradas que reduce drásticamente los puntos ciegos de torres fijas y patrullas terrestres.",
    r5_dim: "Riesgo Humano & Supervisión",
    r5_sat: "Cero exposición humana directa.",
    r5_tower: "Cero exposición humana directa (salvo mantenimiento en cumbres aisladas).",
    r5_drone: "<span class=\"badge-negative\">Alto riesgo vital & Ratio 1:1:</span> Requiere 1 piloto + 1 observador certificado por aeronave. Peligro de accidentes en vuelo rasante sobre relieve agreste, y cuadrillas terrestres expuestas en caminos forestales aislados en horario nocturno.",
    r5_strig: "<span class=\"badge-positive\">Supervisión en tierra (HITL):</span> Operador en tierra autoriza la disuasión desde una posición segura. <span class=\"tax-badge tax-badge-vision\">Visión: 1 operador supervisa N cuadrículas</span>",
    r6_dim: "Modelo Operativo & Acceso",
    r6_sat: "Suscripción SaaS global. Accesible para escala macro; no sustituye la vigilancia táctica local.",
    r6_tower: "<span class=\"badge-negative\">Altísimo CAPEX:</span> Inversión en torres instaladas (mástil, óptica militar, energía solar y caminos de acceso).",
    r6_drone: "<span class=\"badge-negative\">Costos Desarticulados:</span> Extinción diurna masiva por hora de vuelo (aviones cisterna y helicópteros). Patrullaje terrestre nocturno en camioneta 4x4 con menos del 12% de cobertura predial.",
    r6_strig: "<span class=\"badge-positive\">Modelo IaaS:</span> Sin adquisición de flota ni activos de capital (0 CAPEX). Co-diseño y validación técnica en terreno con empresas del sector.",

    // Technology
    tech_tag: "Capacidades Operativas",
    tech_title: "Vigilancia Territorial con Inteligencia A Bordo",
    tech_sub: "Arquitectura de alta disponibilidad. La aeronave procesa, clasifica y georreferencia en el borde sin requerir enlace continuo a internet ni servidores en la nube.",
    t1_title: "Gimbal Biespectral",
    t1_desc: "Payload giroestabilizado con sensor microbolómetro LWIR radiométrico no refrigerado (640×512) y cámara óptica diurna. Detección térmica en oscuridad con filtrado multi-frame para discriminación de fuentes térmicas (meta < 5% falsas alarmas; criterio de aceptación de MVP < 10%).",
    t2_title: "Inferencia Edge AI Zero-Cloud (NVIDIA Jetson)",
    t2_desc: "Cómputo a bordo basado en arquitectura NVIDIA Jetson (Orin Nano) con pipeline cuantizado FP16 acelerado por NVIDIA TensorRT. Ejecución local de visión computacional y modelos de detección térmica en tiempo real, operando con autonomía Zero-Cloud en zonas sin internet ni señal celular.",
    t3_title: "Telemetría Táctica en Zonas Desconectadas",
    t3_desc: "Emisión de fichas de alerta y telemetría hacia la estación de operador en tierra vía radioenlace FHSS 915 MHz en línea de vista (LOS). El despacho hacia brigadas se coordina e integra directamente con el partner de pilotaje.",
    t4_title: "Plataforma Aérea & Primer Dron Noctua",
    t4_desc: "Validación inicial sobre célula comercial adaptada en transición hacia Noctua (primer dron de la plataforma, diseñado o integrado). Autonomía de diseño de 45–60 min (meta 45 min), envolvente de viento de hasta 10 m/s (~36 km/h) y radio operacional de 1 km en predio piloto (VLOS). <span class=\"tax-badge tax-badge-goal\">Objetivo: 15 km</span>",
    t5_title: "Georreferenciación Asistida",
    t5_desc: "Proyección angular hacia el terreno asistida por posicionamiento GNSS/RTK, calculando coordenadas estimadas con precisión objetivo de metros (requiere modelo digital de elevación DEM cargado de la zona).",
    t6_title: "Operación Segura & Evidencia Auditable",
    t6_desc: "Paracaídas balístico de recuperación (en diseño) y protocolos de retorno seguro (Auto-RTH). Operación bajo marco DAN 151 / DAN 91 (DGAC Chile) en predio privado segregado (VLOS) y registro auditable de cada misión para aseguradoras y centrales.",
    spec_1: "<span class=\"spec-name\">Plataforma MVP:</span> Célula Comercial Adaptada (Hacia Noctua)",
    spec_2: "<span class=\"spec-name\">Envolvente:</span> Viento hasta 10 m/s (36 km/h)",
    spec_3: "<span class=\"spec-name\">Respuesta:</span> Alerta en minutos (Meta ≤ 3 min)",
    spec_4: "<span class=\"spec-name\">Operación:</span> Vuelo VLOS en predio privado (DGAC)",
    spec_5: "<span class=\"spec-name\">Modelo:</span> Intelligence as a Service (0 CAPEX)",

    // Off-Grid Tactical Datalink Architecture
    flow_tag: "ARQUITECTURA DE ENLACE OFF-GRID",
    flow_title: "Cómo se cierra el circuito táctico en zonas sin señal celular",
    flow_sub: "Gran parte de los predios forestales y cordilleranos son zonas de baja cobertura. Athene opera con radioenlaces tácticos locales entre la aeronave y la estación en tierra.",
    flow_s1_title: "Aeronave VTOL (Nodo Aéreo)",
    flow_s1_desc: "Inferencia térmica Edge AI a bordo con NVIDIA Jetson. Detecta precursores y presencia humana, emite alertas a la estación en tierra y ejecuta retorno de emergencia ante pérdida de enlace.",
    flow_s1_badge: "Edge AI a Bordo",
    flow_c1_label: "⇄ Radioenlace FHSS 915 MHz (Línea de Vista)",
    flow_s2_title: "Estación de Operador (Terreno)",
    flow_s2_desc: "Recepción táctica de alertas y telemetría en tiempo real. El operador evalúa y autoriza la activación de estrobo y sirena de disuasión desde una posición segura.",
    flow_s2_badge: "Supervisión Humana (HITL)",
    flow_c2_label: "⇄ Enlace Red Local / IP Disponible",
    flow_s3_title: "Central C2 / Despacho del Partner",
    flow_s3_desc: "Recepción de fichas de alerta georreferenciadas y logs de misión para coordinación de brigadas y auditoría (integración GIS / Webhook).",
    flow_s3_badge: "Integración Operacional",

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

    // Roadmap
    roadmap_tag: "Hoja de Ruta de Ingeniería",
    roadmap_title: "Estado del Proyecto y Próximos Hitos",
    roadmap_sub: "Desarrollo riguroso por etapas verificables. Diferenciamos lo que está resuelto hoy, los ensayos en marcha y los objetivos de escalamiento industrial.",
    rm1_phase: "Estado Actual · TRL 3",
    rm1_title: "Diseño de Sistema y Prototipo en Análisis",
    rm1_desc: "Requisitos de ingeniería, arquitectura de sistemas y plan de pruebas definidos. Validación de concepto analítico y selección de componentes críticos.",
    rm2_phase: "Oct – Dic 2026 · Ensayos",
    rm2_title: "Plataforma Hexarrotor y Demo Gearbox",
    rm2_desc: "Integración en plataforma hexarrotor de pruebas para validación de sensórica y procesamiento. Demostración técnica en Gearbox UdeC programada para enero de 2027.",
    rm3_phase: "Feb 2027 · Simulación",
    rm3_title: "Validación Human-in-the-Loop (HITL)",
    rm3_desc: "Pruebas en entorno simulado de la interfaz de operador táctico, protocolo de autorización de estrobo/sirena y cadena de decisión en tiempo real.",
    rm4_phase: "Jun 2027 · Validación en Terreno",
    rm4_title: "Validación Técnica y Operacional (CORFO)",
    rm4_desc: "Campaña de vuelos experimentales diurnos/nocturnos en predio piloto privado (VLOS) bajo proyecto Semilla Inicia CORFO y retroalimentación de la industria forestal.",
    rm5_phase: "Visión de Plataforma",
    rm5_title: "Noctua VTOL, Nest Automatizado & BVLOS",
    rm5_desc: "Integración o diseño de célula VTOL Noctua, estación Nest de aterrizaje y carga automatizada, supervisión 1:N de múltiples cuadrículas, enlaces satelitales y radio de 15 km bajo certificación BVLOS.",

    // Pilot / Validation Program
    pilot_tag: "Validación en Terreno",
    pilot_title: "Programa de Validación Conjunta 2026-27",
    pilot_sub: "Estructurado en 4 fases metodológicas para empresas forestales, mineras e instituciones que buscan co-diseñar y verificar en terreno la efectividad de la vigilancia nocturna.",
    ph1_title: "Levantamiento & Topografía",
    ph1_desc: "Mapeo de predios prioritarios, modelado de zonas ciegas y calibración de rutas según la probabilidad histórica de focos.",
    ph2_title: "Calibración Sensorial",
    ph2_desc: "Pruebas en terreno de firmas térmicas, validación de telemetría táctica en zonas sin cobertura y simulacros controlados.",
    ph3_title: "Vigilancia Nocturna Activa",
    ph3_desc: "Patrullaje aéreo programado en las horas de mayor vulnerabilidad con telemetría en vivo y soporte al C2 del cliente.",
    ph4_title: "Auditoría & Retorno Operativo",
    ph4_desc: "Informe técnico con tiempos de respuesta, falsas alarmas filtradas, horas de vuelo ahorradas e integración auditada con el centro de operaciones (C2) del cliente.",

    // Operational Impact Framework
    impact_badge: "MODELO DE IMPACTO OPERACIONAL",
    impact_title: "Valor Operacional en la Brecha Crítica",
    impact_sub: "Enfoque cualitativo centrado en la reducción del riesgo humano y el daño territorial, sin promesas comerciales arbitrarias en fase de prototipo.",
    imp1_title: "Seguridad Nocturna y Cero Exposición Innecesaria",
    imp1_desc: "Evita el desplazamiento a ciegas de brigadistas y cuadrillas terrestres en camionetas 4x4 por caminos forestales y quebradas aisladas durante la noche. El reconocimiento aéreo confirma o descarta la amenaza antes de movilizar personal.",
    imp2_title: "Detección Previa y Disuasión Autorizada",
    imp2_desc: "Detección óptica y térmica de actividad humana no autorizada visible desde 100 m de altura. Ante una anomalía, el operador humano en tierra puede autorizar la activación del estrobo luminoso y la sirena acústica para disuadir antes de la ignición.",
    imp3_title: "Optimización del Ataque Aéreo al Amanecer",
    imp3_desc: "Al georreferenciar y contener focos o fogatas tempranas en plena noche, se entrega a las centrales de despacho información precisa de coordenadas y perímetro, evitando horas críticas de vuelo de aviones y helicópteros cisterna al inicio del día.",

    // IaaS Operational Framework
    iaas_tag: "MARCO DE CO-DISEÑO IAAS",
    iaas_title: "Condiciones y Principios del Modelo Intelligence as a Service",
    iaas_sub: "Estructurado para que las empresas del sector participen en la validación técnica sin adquirir activos fijos de capital ni asumir pasivos operacionales.",
    iaas_p1_title: "0 CAPEX & Cero Pasivo de Flota",
    iaas_p1_desc: "Sin adquisición de drones ni depreciación de activos. El acceso al servicio se proyecta como gasto operacional (OPEX) por temporada o campaña de vigilancia.",
    iaas_p2_title: "Soporte Técnico & Mantenimiento Integral",
    iaas_p2_desc: "Aseguramiento de mantenimiento de componentes, baterías, calibración sensorial y actualización continua de algoritmos gestionados por el equipo de ingeniería de Strig Systems.",
    iaas_p3_title: "Protocolos Operacionales & Marco de Seguridad",
    iaas_p3_desc: "Operación conducida bajo estándares de seguridad operacional conforme a normativa DAN 151 / DAN 91 para vuelos de prueba y validación segregada en predio privado.",

    // Pilot Callout Bar
    callout_title: "Convocatoria de Validación 2026-27",
    callout_desc: "Cupos limitados por temporada en la Macrozona Centro-Sur para empresas forestales e industriales que deseen co-diseñar y evaluar la factibilidad en terreno.",
    callout_cta: "Sumarse al Programa de Validación",
    callout_briefing: "Agendar Briefing Técnico (15 min)",
    callout_brief_pdf: "Executive Brief (PDF)",

    // FAQ Section
    faq_tag: "Resolución Técnica",
    faq_title: "Preguntas Frecuentes de Operación",
    faq_sub: "Criterios de ingeniería, límites operacionales actuales y respuestas directas para equipos técnicos y gerencias de protección.",
    faq_q1: "¿Cómo opera la visión térmica ante humo denso o niebla?",
    faq_a1: "La banda infrarroja LWIR (8–14 µm) penetra humo óptico no ionizado y partículas en suspensión que bloquean por completo las cámaras visuales. Sin embargo, no lo resuelve todo: en presencia de niebla densa (dispersión Mie por gotas de agua) o condiciones meteorológicas que reduzcan la visibilidad mínima requerida bajo reglas VLOS, la operación de vuelo se suspende por estrictos protocolos de seguridad operacional.",
    faq_q2: "¿Cuál es la envolvente de viento máxima de la plataforma?",
    faq_a2: "La plataforma de validación actual está diseñada para operar con seguridad en vientos sostenidos de hasta 10 m/s (~36 km/h). Si las condiciones locales de ráfaga superan este umbral, el sistema activa automáticamente protocolos de descenso o aborto de misión hacia la zona de aterrizaje segura.",
    faq_q3: "¿Cómo se gestionan las falsas alarmas térmicas causadas por rocas o ganado?",
    faq_a3: "El pipeline de Edge AI integra algoritmos de discriminación multi-frame y umbrales radiométricos de gradiente térmico (meta de diseño < 5% falsas alarmas; criterio de aceptación de MVP < 10%). Además, la plataforma opera bajo supervisión humana (Human-in-the-Loop): toda alerta emitida a la estación en tierra debe ser revisada visualmente por el operador antes de activar medidas de disuasión o despacho.",
    faq_q4: "¿Quién es responsable de la operación y el pilotaje en terreno?",
    faq_a4: "Durante el Programa de Validación 2026-27, todos los vuelos son ejecutados y supervisados en terreno por personal calificado de Strig Systems bajo certificación y normativa aeronáutica chilena (DAN 151 / DAN 91). El cliente o partner territorial no requiere pilotos propios ni asume responsabilidad técnica sobre la aeronave.",
    faq_q5: "¿Qué alcance y capacidades NO tiene el sistema hoy?",
    faq_a5: "Con total transparencia: hoy el sistema no opera vuelos más allá de la línea de vista visual (BVLOS), no cuenta con estación de acople automatizada no asistida, ni ofrece un radio de 15 km de servicio comercial. Actualmente nos encontramos en TRL 3 realizando ensayos controlados en predio piloto privado (VLOS ~1 km). Dichas capacidades forman parte de la visión y hoja de ruta futura.",

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
    bio_tomas: "Ingeniero Civil Aeroespacial • Visión Computacional, Machine Learning y CAD/CAM.",
    bio_carlos: "Bombero Operativo • Ingeniero Civil Aeroespacial. Análisis CFD, logística operacional y arquitectura de interfaz táctica.",
    bio_ananda: "Ingeniera Civil Aeroespacial • Integración y ensayos de vuelo RPAS, CAD, análisis estructural (FEA) y CFD.",
    bio_richard: "Ingeniero Civil Aeroespacial • Ingeniería de sistemas, aseguramiento normativo, control de calidad y certificación aeronáutica.",
    bio_pablo: "Ingeniero Civil Aeroespacial • Arquitectura de sistemas, lógica e integración de flujo de datos, validación y verificación.",
    bio_advisor: "PhD Space Systems Engineering and Management. Asesor senior en arquitectura de sistemas espaciales y escalamiento aeroespacial.",

    // CTA
    cta_tag: "Contacto Estratégico",
    cta_title: "Coordinemos una Evaluación Territorial",
    cta_desc: "Si representas a una empresa con activos territoriales de alto valor, un consorcio de respuesta a emergencias o un fondo de inversión, nuestro equipo técnico responderá directamente tu requerimiento.",
    cta_btn1: "Sumarse al Programa de Validación",
    cta_btn2: "Consultar por Alianzas / Inversión",

    // Pilot Modal
    modal_badge: "Validación Territorial 2026-27",
    modal_title: "Sumarse al Programa de Validación 2026-27",
    modal_sub: "Completa los datos de tu entidad para evaluar conjuntamente la factibilidad territorial y requerimientos de validación en terreno.",
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
    opt_interest_1: "Programa de Validación Técnica (Forestal / Industrial)",
    opt_interest_2: "Alianzas de I+D / Validación Técnica",
    opt_interest_3: "Inversión / Fondos de Capital Deep Tech",
    opt_interest_4: "Consulta General / Demostración C2",
    f_message_label: "Detalles Adicionales o Necesidad Específica (Opcional)",
    f_message_ph: "Describe brevemente el tipo de predio, zona geográfica o consulta técnica...",
    f_submit_btn: "Enviar Solicitud de Validación",
    f_submitting: "Enviando solicitud...",
    f_privacy: "Tus datos serán tratados bajo estricta confidencialidad técnica (NDA disponible).",
    f_consent_label: "Acepto el tratamiento de mis datos de contacto para la evaluación técnica de la validación y declaro conocer los <a href=\"terms.html\" target=\"_blank\" class=\"legal-inline-link\">Términos de Servicio B2B</a> y la <a href=\"privacy.html\" target=\"_blank\" class=\"legal-inline-link\">Política de Privacidad</a> (Ley N° 19.628 / Ley N° 21.719).",
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
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Vigilancia Territorial Autónoma Nocturna",
    eb_h1: "Inteligencia Aérea Autónoma para la Brecha Nocturna de Incendios",
    eb_summary: "Athene aborda la brecha nocturna mediante aeronaves VTOL (plataforma de validación en transición hacia Noctua), inferencia térmica Edge AI a bordo (NVIDIA Jetson) y telemetría táctica FHSS 915 MHz, sustituyendo la exposición terrestre a ciegas y optimizando el despacho aéreo al amanecer.",
    eb_b1_title: "1. El Problema Operacional",
    eb_b1_p1: "<strong>Ventana ciega nocturna:</strong> La aviación tripulada combate de día, pero no vuela de noche por normativa DGAC y riesgo de choque con el relieve (CFIT).",
    eb_b1_p2: "<strong>99,7% de origen humano:</strong> La casi totalidad de los incendios derivan de acción humana intencional o negligente (Fuente: CONAF).",
    eb_b1_p3: "<strong>Puntos ciegos terrestres:</strong> Patrullas en 4x4 cubren &lt; 12% del predio, ciegas ante quebradas y rodales interiores donde se inician fogatas y focos intencionales.",
    eb_b2_title: "2. Solución Tecnológica",
    eb_b2_p1: "<strong>Plataforma VTOL & Dron Noctua:</strong> Validación inicial sobre célula comercial adaptada; autonomía de diseño 45–60 min y despegue vertical sin pista.",
    eb_b2_p2: "<strong>Edge AI Zero-Cloud a Bordo:</strong> Cómputo local NVIDIA Jetson; detección térmica en segundos sin conexión a internet ni señal celular.",
    eb_b2_p3: "<strong>Disuasión con Autorización Humana:</strong> Activación de estrobo luminoso y sirena acústica siempre autorizada por el operador en tierra (Human-in-the-Loop).",
    eb_b3_title: "3. Modelo de Impacto Operacional IaaS",
    eb_b3_p1: "<strong>Seguridad del Personal:</strong> Cero exposición humana innecesaria en quebradas y caminos aislados en horario nocturno crítico.",
    eb_b3_p2: "<strong>Detección Temprana & Disuasión:</strong> Detección de actividad humana a 100 m de altura y disuasión autorizada por el operador antes de la ignición.",
    eb_b3_p3: "<strong>Optimización al Amanecer:</strong> Georreferenciación temprana de coordenadas y perímetro que ahorra horas críticas de combate aéreo al inicio del día.",
    eb_b4_title: "4. Programa de Validación 2026-27",
    eb_b4_p1: "<strong>Estado Actual TRL 3:</strong> Proyecto Semilla Inicia CORFO, apoyo UdeC y demostración técnica programada en Gearbox (Enero 2027).",
    eb_b4_p2: "<strong>Campaña en Predio Piloto:</strong> 4 fases metodológicas (Levantamiento, Calibración, Vigilancia Nocturna, Auditoría Operacional).",
    eb_b4_p3: "<strong>Contacto Directo:</strong> Tomás Medina (Technical Lead) | <code>contacto@strigsystems.tech</code> | <code>strigsystems.tech</code>",

    // Footer
    footer_tagline: "Desarrollo de sistemas aéreos autónomos e inteligencia computacional para la mitigación anticipada de riesgos críticos.",
    f_nav: "Navegación",
    f_corp: "Corporativo",
    f_privacy_link: "Política de Privacidad & Gobernanza",
    f_terms_link: "Términos de Servicio & Pilotaje B2B"
  },

  en: {
    // Nav
    nav_problem: "The Problem",
    nav_tech_menu: "Technology",
    nav_tech: "Architecture & Sensors",
    nav_tech_desc: "EO/IR Gimbal, Edge AI Jetson & FHSS telemetry",
    nav_roadmap: "Roadmap (TRL 3)",
    nav_roadmap_desc: "2026-27 Milestones & Platform Vision",
    nav_compare: "Tactical Benchmark",
    nav_compare_desc: "Athene vs Satellites, Towers & Ground Crews",
    nav_val_menu: "Validation",
    nav_pilot: "Validation Program",
    nav_pilot_desc: "Joint operational trial on private pilot site",
    nav_impact: "Operational Impact",
    nav_impact_desc: "Night surveillance, deterrence & dawn strike",
    nav_faq: "Technical FAQ",
    nav_faq_desc: "Operational limits, fog & false alarm filtering",
    nav_company_menu: "Company",
    nav_team: "Founding Team",
    nav_team_desc: "5 aerospace engineers from UdeC",
    nav_alliances: "R&D & Alliances",
    nav_alliances_desc: "CORFO, Gearbox, UdeC, Arauco",
    nav_cta: "Join Validation",

    // Hero
    hero_status: "Prototype under development · TRL 3 · Gearbox technical demo Jan 2027",
    hero_badge: "CORFO Seed Grant Awarded • Backed by UdeC • Frontline Firefighting Experience",
    hero_title_1: "Risks move fast.",
    hero_title_2: "We see them coming.",
    hero_sub: "Aerial intelligence platform for the critical wildfire nighttime gap using VTOL aircraft and onboard Edge AI thermal inference. We detect precursors and unauthorized human activity before ignition, reducing ground exposure and optimizing response at dawn.",
    hero_cta_primary: "Join 2026-27 Validation Program",
    hero_cta_secondary: "View Roadmap & Technology",

    // Metrics & Taxonomy
    m1_title: "Nighttime Gap",
    m1_sub: "Aerial surveillance while manned aviation remains grounded",
    m1_tax: "[PROBLEM]",
    m1_tip_title: "Nighttime Gap · Why is this here?",
    m1_tooltip: "This is the root problem: under aviation regulations and terrain risk (CFIT), manned tankers and helicopters are grounded at dusk. Athene monitors this blind window where 99.7% of wildfires ignite due to human activity.",
    m2_title: "Mission Radius",
    m2_sub: "Design target for 50,000 ha • Today: 1 km in experimental estate (VLOS)",
    m2_tax: "Product Target",
    m2_tip_title: "15 km Radius · Why is this here?",
    m2_tooltip: "It is our territorial product goal: achieving a 15 km operational radius under BVLOS certification to safeguard 50,000 ha clusters. In our current validation phase, we operate in pilot estates at 1 km VLOS.",
    m3_title: "Thermal Detection",
    m3_sub: "On-board local inference • Alert to operator in minutes (target ≤ 3 min)",
    m3_tax: "MVP Target: <10% False Alarms",
    m3_tip_title: "Thermal Detection · Why is this here?",
    m3_tooltip: "Compared to satellite latency (30–90 min) and slow ground patrols, on-board Edge AI detects thermal precursors in seconds and delivers alerts to the station in minutes (MVP design target ≤ 3 min with <10% false alarms).",
    m4_title: "Authorized Deterrence",
    m4_sub: "High-intensity strobe and siren activated by the operator upon detecting human activity",
    m4_tax: "Key Differentiator",
    m4_tip_title: "Human-in-the-Loop · Why is this here?",
    m4_tooltip: "Operational safety and human oversight: on-board AI detects precursors and human presence, but high-intensity strobes and sirens are only triggered with explicit authorization from the ground operator, eliminating blind crew exposure.",

    // Problem
    prob_tag: "Territorial Diagnostic",
    prob_title: "The Nighttime Surveillance and Combat Gap",
    corma_tooltip: "Official CONAF data (2003-2023): 99.7% of wildfires in Chile are caused by human activity, whether intentional or accidental.",
    prob_sub: "99.7% of wildfires are human-caused (CONAF, 2003-2023). Manned aircraft fight fires by day, but are grounded at night due to DGAC safety standards. When wind and arson risks peak, the skies remain empty and ground crews lack visibility in the deep forest.",
    p1_head: "Operations Centers",
    p1_desc: "Persistent uncertainty. By the time orbital satellites detect thermal anomalies, the fire front has reached uncontrollable scale.",
    p1_tag: "Fragmented intelligence",
    p2_head: "Landowners & Forestry",
    p2_desc: "Permanent risk of catastrophic capital losses in timber, biomass, and production infrastructure.",
    p2_tag: "Catastrophic exposure",
    p3_head: "Ground Firefighters",
    p3_desc: "Extreme exposure to road blockages, ambushes, or roll-over hazards entering deep forests on gravel tracks at night, with negligible visibility off the road.",
    p3_tag: "Avoidable human risk",
    quote_text: "Satellites suffer orbital latency; fixed towers face orographic blind spots; 4x4 truck patrols only see what headlights touch on the dirt road; and water bombers are grounded at dusk for safety. Athene is the autonomous night sentinel that detects human activity and thermal precursors before fire ignites, optimizing deployment at dawn.",

    // Tactical Benchmark
    comp_tag: "Tactical Benchmark",
    comp_title: "Why Legacy Solutions Fail in the Night Window",
    comp_sub: "Comparative technical analysis across LEO satellites, fixed thermal watchtowers, conventional manned patrol, and the Athene platform.",
    matrix_scroll_hint: "⇄ Swipe horizontally to compare technologies",
    th_dim: "Operational Dimension",
    th_sat: "LEO Satellites<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Fixed Thermal Towers<br><span class=\"th-sub\">Optical Masts</span>",
    th_drone: "Conventional Manned Patrol<br><span class=\"th-sub\">Daytime Planes + Night Crews/Drones</span>",
    strig_badge: "Our Architecture",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (VTOL Platform + Edge AI)</span>",
    r1_dim: "Continuous Night Patrol",
    r1_sat: "Discrete orbital passes (1 to 4 h). Uncontested daytime macro standard, but leaves a critical blind window throughout the night.",
    r1_tower: "Continuous 24/7 with high reliability, but strictly restricted to direct line of sight (LOS) within its visible basin.",
    r1_drone: "Inoperable at night. Water-dropping air tankers and spotters are grounded at dusk under DGAC/night-VFR rules (controlled flight into terrain / CFIT hazard). On the ground, 4x4 patrol trucks face fatigue, slow speeds on gravel roads, and zero visibility off the track.",
    r1_strig: "<strong>Nighttime aerial patrol</strong> in pilot site with qualified operator (VLOS). <span class=\"tax-badge tax-badge-vision\">Vision: Autonomous Nest Base</span>",
    r2_dim: "Detection & Alert Latency",
    r2_sat: "<span class=\"badge-negative\">30 to 90 minutes</span> (orbital downlink, cloud processing, and regional alert dissemination lag).",
    r2_tower: "Instantaneous at optical sensor; requires 24/7 human console operator for verification and false alarm filtering.",
    r2_drone: "Instantaneous for local pilot or crew; significantly delayed to central dispatch without reliable 4G/5G coverage in remote terrain.",
    r2_strig: "<span class=\"badge-positive\">Detection in seconds</span> with onboard Edge AI. Alert to operator station in minutes (MVP goal ≤ 3 min).",
    r3_dim: "Precursor Detection (Humans / Vehicles)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (375m to 1km spatial resolution; engineered for active fires, incapable of spotting individuals or small campfires).",
    r3_tower: "Zero under dense canopy, forest trails, or blind ravines outside direct mast sightline.",
    r3_drone: "Severamente limited. Patrol planes cannot fly at night to detect early campfires; 4x4 ground patrols can only monitor main logging roads, leaving dense stands blind.",
    r3_strig: "<span class=\"badge-positive\">Optical & thermal detection</span> of human presence visible from 100 m altitude for deterrence before fire starts.",
    r4_dim: "Topographic Blind Spots",
    r4_sat: "Severely degraded by low cloud cover, thick smoke plumes, and thermal inversions absorbing infrared radiation.",
    r4_tower: "<span class=\"badge-negative\">Critical:</span> Irrecoverable physical blind spots behind ridgelines, valleys, and opposing slopes.",
    r4_drone: "Critical. Ground crews have zero line of sight behind ridges or deep ravines; daytime aircraft face severe degradation in low clouds and heavy smoke.",
    r4_strig: "<span class=\"badge-positive\">Zenith perspective:</span> Adapted flight over ravines drastically reducing blind spots of fixed watchtowers and ground patrols.",
    r5_dim: "Human Risk & Supervision",
    r5_sat: "Zero direct human exposure.",
    r5_tower: "Zero direct human exposure (except maintenance on isolated peaks).",
    r5_drone: "<span class=\"badge-negative\">High life risk & 1:1 ratio:</span> Requires 1 pilot + 1 certified spotter per airborne asset. Crash hazard in low flight over rough relief, and ground crews exposed on isolated logging tracks at night.",
    r5_strig: "<span class=\"badge-positive\">Ground supervision (HITL):</span> Ground operator authorizes deterrence from a safe position. <span class=\"tax-badge tax-badge-vision\">Vision: 1 operator supervises N grids</span>",
    r6_dim: "Operating Model & Access",
    r6_sat: "Global SaaS subscription. Accessible at macro scale; does not replace tactical parcel surveillance.",
    r6_tower: "<span class=\"badge-negative\">Extremely High CAPEX:</span> Investment in installed watchtowers (mast, military optics, solar power, and access roads).",
    r6_drone: "<span class=\"badge-negative\">Fragmented Heavy OPEX:</span> Daytime mass suppression flight hourly costs. Nocturnal 4x4 ground patrol covering under 12% of holding.",
    r6_strig: "<span class=\"badge-positive\">IaaS Model:</span> No fleet acquisition or capital assets (0 CAPEX). Co-design and technical field validation with forestry enterprises.",

    // Technology
    tech_tag: "Operational Capabilities",
    tech_title: "Territorial Surveillance with Onboard Edge Intelligence",
    tech_sub: "High-availability architecture. The aircraft processes, classifies, and georeferences at the edge without requiring persistent internet or cloud servers.",
    t1_title: "Bi-Spectral Gimbal",
    t1_desc: "Gyro-stabilized payload with uncooled radiometric LWIR microbolometer (640×512) and daytime optical sensor. Thermal detection in darkness with multi-frame filtering for heat source discrimination (target < 5% false alarms; MVP acceptance < 10%).",
    t2_title: "Zero-Cloud Edge AI Inference (NVIDIA Jetson)",
    t2_desc: "Onboard computing powered by NVIDIA Jetson (Orin Nano) architecture with an FP16 quantized inference pipeline accelerated by NVIDIA TensorRT. Real-time local execution of computer vision and thermal detection models, operating offline Zero-Cloud in areas without internet or cell coverage.",
    t3_title: "Tactical Telemetry in Disconnected Areas",
    t3_desc: "Alert dossier and telemetry transmission to ground operator station via 915 MHz FHSS line-of-sight (LOS) radio link. Crew dispatch is coordinated and integrated directly with the pilot partner.",
    t4_title: "Aerial Platform & Noctua First Drone",
    t4_desc: "Initial validation on modified commercial airframe transitioning toward Noctua (first platform drone, designed or integrated). 45–60 min design endurance (target 45 min), wind envelope up to 10 m/s (~36 km/h), and 1 km operational radius in pilot site (VLOS). <span class=\"tax-badge tax-badge-goal\">Goal: 15 km</span>",
    t5_title: "Assisted Georeferencing",
    t5_desc: "Angular terrain projection assisted by GNSS/RTK positioning, computing estimated target coordinates with meter-level target accuracy (requires loaded digital elevation model DEM of the area).",
    t6_title: "Safe Operations & Auditable Records",
    t6_desc: "Ballistic recovery parachute (in design) and safe return contingency protocols (Auto-RTH). Operations under DGAC DAN 151 / DAN 91 framework in segregated private site (VLOS) with auditable mission logging for insurers and operations centers.",
    spec_1: "<span class=\"spec-name\">MVP Platform:</span> Modified Commercial Airframe (Towards Noctua)",
    spec_2: "<span class=\"spec-name\">Flight Envelope:</span> Wind up to 10 m/s (36 km/h)",
    spec_3: "<span class=\"spec-name\">Response:</span> Alert in minutes (Goal ≤ 3 min)",
    spec_4: "<span class=\"spec-name\">Operation:</span> VLOS flight on private site (DGAC)",
    spec_5: "<span class=\"spec-name\">Model:</span> Intelligence as a Service (0 CAPEX)",

    // Off-Grid Tactical Datalink Architecture
    flow_tag: "OFF-GRID DATALINK ARCHITECTURE",
    flow_title: "Closing the Tactical Loop in Zero-Cellular Remote Zones",
    flow_sub: "A majority of forestry and mountainous parcels have poor cellular coverage. Athene operates via direct local tactical radio links between the aircraft and the ground station.",
    flow_s1_title: "VTOL Aircraft (Aerial Node)",
    flow_s1_desc: "Onboard Edge AI thermal inference with NVIDIA Jetson. Detects precursors and human presence, sends alerts to the ground station, and triggers emergency return upon link loss.",
    flow_s1_badge: "Onboard Edge AI",
    flow_c1_label: "⇄ 915 MHz FHSS Tactical Link (Line-of-Sight)",
    flow_s2_title: "Operator Station (Field)",
    flow_s2_desc: "Real-time reception of tactical alerts and telemetry. The operator evaluates and authorizes the activation of the deterrence strobe and siren from a safe position.",
    flow_s2_badge: "Human Supervision (HITL)",
    flow_c2_label: "⇄ Local Network / Available IP Link",
    flow_s3_title: "Central C2 / Partner Dispatch",
    flow_s3_desc: "Reception of georeferenced alert dossiers and mission logs for crew coordination and audit trails (GIS / Webhook integration).",
    flow_s3_badge: "Operational Integration",

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

    // Roadmap
    roadmap_tag: "Engineering Roadmap",
    roadmap_title: "Project Status & Upcoming Milestones",
    roadmap_sub: "Rigorous development across verifiable stages. We differentiate what is solved today, active trials, and industrial scaling goals.",
    rm1_phase: "Current Status · TRL 3",
    rm1_title: "System Design & Prototype in Analysis",
    rm1_desc: "Engineering requirements, systems architecture, and test plans defined. Analytical concept validation and selection of critical components.",
    rm2_phase: "Oct – Dec 2026 · Trials",
    rm2_title: "Hexacopter Platform & Gearbox Demo",
    rm2_desc: "Integration into hexacopter testbed for sensor and processing validation. Technical demo at Gearbox UdeC scheduled for January 2027.",
    rm3_phase: "Feb 2027 · Simulation",
    rm3_title: "Human-in-the-Loop (HITL) Validation",
    rm3_desc: "Simulation environment testing of tactical operator interface, strobe/siren authorization protocol, and real-time decision loop.",
    rm4_phase: "Jun 2027 · Field Validation",
    rm4_title: "Technical & Operational Validation (CORFO)",
    rm4_desc: "Day/night experimental flight campaign in private pilot site (VLOS) under CORFO Semilla Inicia grant with forestry industry feedback.",
    rm5_phase: "Platform Vision",
    rm5_title: "Noctua VTOL, Automated Nest & BVLOS",
    rm5_desc: "Integration or design of Noctua VTOL airframe, automated landing/charging Nest station, 1:N multi-grid supervision, satellite links, and 15 km radius under BVLOS certification.",

    // Pilot / Validation Program
    pilot_tag: "Field Validation",
    pilot_title: "Joint Validation Program 2026-27",
    pilot_sub: "Structured into 4 methodological phases for forestry, mining, and institutional partners seeking to co-design and verify nocturnal surveillance in the field.",
    ph1_title: "Survey & Topographic Analysis",
    ph1_desc: "Mapping priority acreage, modeling line-of-sight blind spots, and tuning flight routes based on historical incident heatmaps.",
    ph2_title: "Sensor Calibration & Field Trials",
    ph2_desc: "Controlled ground trials for thermal signature calibration, tactical telemetry verification, and simulated incident scenarios.",
    ph3_title: "Active Nighttime Surveillance",
    ph3_desc: "Scheduled aerial patrol throughout hours of maximum vulnerability with live structured telemetry and C2 integration.",
    ph4_title: "Audit & Operational ROI",
    ph4_desc: "Technical evaluation report detailing response latency, filtered false alarms, flight hours saved, and audited integration with the client's operations center (C2).",

    // Operational Impact Framework
    impact_badge: "OPERATIONAL IMPACT MODEL",
    impact_title: "Operational Value in the Critical Gap",
    impact_sub: "Qualitative approach focused on reducing human risk and territorial damage, free of unbacked commercial figures during the prototype stage.",
    imp1_title: "Nighttime Safety & Zero Unnecessary Exposure",
    imp1_desc: "Avoids blind nighttime deployment of ground crews and firefighters in 4x4 trucks across isolated forest roads and ravines. Aerial reconnaissance confirms or rules out threats before moving personnel.",
    imp2_title: "Prior Detection & Authorized Deterrence",
    imp2_desc: "Optical and thermal detection of unauthorized human activity visible from 100 m altitude. Upon detecting an anomaly, the ground operator can authorize strobe and siren deterrence before ignition.",
    imp3_title: "Dawn Air Attack Optimization",
    imp3_desc: "By georeferencing and containing early fires or campfires during the night, dispatch centers receive accurate coordinates and perimeter data, avoiding critical tanker flight hours at daybreak.",

    // IaaS Operational Framework
    iaas_tag: "IAAS CO-DESIGN FRAMEWORK",
    iaas_title: "Conditions and Principles of the Intelligence as a Service Model",
    iaas_sub: "Structured for industry partners to participate in technical validation without acquiring fixed capital assets or carrying development liabilities.",
    iaas_p1_title: "0 CAPEX & Zero Fleet Liability",
    iaas_p1_desc: "No drone purchases or asset depreciation. Service access is projected as an operational expenditure (OPEX) per surveillance season or campaign.",
    iaas_p2_title: "Technical Support & Comprehensive Maintenance",
    iaas_p2_desc: "Component maintenance, battery management, sensor calibration, and continuous algorithmic updates managed directly by the Strig Systems engineering team.",
    iaas_p3_title: "Operational Protocols & Safety Framework",
    iaas_p3_desc: "Operations conducted under operational safety standards conforming to Chilean DGAC DAN 151 / DAN 91 regulations for segregated test flights on private property.",

    // Pilot Callout Bar
    callout_title: "2026-27 Validation Cohort",
    callout_desc: "Limited operational flight slots per fire season in South-Central Chile for forestry and industrial partners seeking to co-design and evaluate field feasibility.",
    callout_cta: "Join Validation Program",
    callout_briefing: "Schedule Technical Briefing (15 min)",
    callout_brief_pdf: "Executive Brief (PDF)",

    // FAQ Section
    faq_tag: "Technical Resolution",
    faq_title: "Operational Frequently Asked Questions",
    faq_sub: "Engineering criteria, current operational boundaries, and direct answers for technical and land protection teams.",
    faq_q1: "How does thermal vision perform in dense smoke or fog?",
    faq_a1: "The LWIR (8–14 µm) band penetrates non-ionized optical smoke and suspended particulates that blind visual cameras. However, it is not an all-weather panacea: in dense fog (Mie scattering from water droplets) or weather conditions reducing visibility below VLOS legal minimums, flight operations are suspended under strict safety protocols.",
    faq_q2: "What is the maximum wind envelope of the platform?",
    faq_a2: "The current validation platform is designed to operate safely in sustained winds up to 10 m/s (~36 km/h). If localized gust thresholds are exceeded, the system automatically initiates descent or abort protocols toward the safe landing zone.",
    faq_q3: "How are thermal false alarms from heated rocks or livestock handled?",
    faq_a3: "The onboard Edge AI pipeline incorporates multi-frame temporal discrimination and radiometric thermal gradient thresholds (design goal < 5% false alarms; MVP acceptance < 10%). Furthermore, operations remain Human-in-the-Loop: every alert sent to the ground station is visually verified by the operator prior to authorizing deterrence or dispatch.",
    faq_q4: "Who is responsible for flight operations and piloting in the field?",
    faq_a4: "During the 2026-27 Validation Program, all flights are conducted and supervised in the field by qualified Strig Systems personnel under Chilean civil aviation regulations (DAN 151 / DAN 91). Partners do not need internal pilots or aircraft liability.",
    faq_q5: "What capabilities and scope does the system NOT have today?",
    faq_a5: "With complete transparency: the system does not currently operate beyond visual line of sight (BVLOS), does not feature an automated unattended docking base, and does not offer a 15 km commercial radius. We are currently at TRL 3 executing controlled trials on a private pilot site (VLOS ~1 km). These expanded capabilities belong to our platform roadmap and vision.",

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
    bio_tomas: "Aerospace Engineer • Computer Vision, Machine Learning, and CAD/CAM.",
    bio_carlos: "Active Firefighter • Aerospace Engineer. CFD analysis, operational logistics, and tactical interface architecture.",
    bio_ananda: "Aerospace Engineer • RPAS integration & flight testing, CAD, FEA structural analysis, and CFD.",
    bio_richard: "Aerospace Engineer • Systems engineering, regulatory compliance, quality control, and aeronautical certification.",
    bio_pablo: "Aerospace Engineer • Systems architecture, data flow logic & integration, validation and verification.",
    bio_advisor: "PhD Space Systems Engineering and Management. Senior advisor on space mission architectures and deep-tech scaling.",

    // CTA
    cta_tag: "Strategic Inquiries",
    cta_title: "Schedule a Territorial Assessment",
    cta_desc: "Whether you manage critical high-value land holdings, lead an emergency response consortium, or evaluate deep-tech investments, our engineering team is ready to connect.",
    cta_btn1: "Join Validation Program",
    cta_btn2: "Inquire for Alliances / Investment",

    // Pilot Modal
    modal_badge: "2026-27 Territorial Validation",
    modal_title: "Join the 2026-27 Validation Program",
    modal_sub: "Submit your organization's details to jointly evaluate territorial feasibility and field validation requirements.",
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
    opt_interest_1: "Technical Validation Program (Forestry / Industrial)",
    opt_interest_2: "R&D Alliances / Academic Validation",
    opt_interest_3: "Deep Tech / Dual-Use Investment",
    opt_interest_4: "General Inquiry / C2 Demonstration",
    f_message_label: "Additional Details or Specific Requirements (Optional)",
    f_message_ph: "Briefly outline your acreage, geographic zone, or tactical technical inquiry...",
    f_submit_btn: "Submit Validation Request",
    f_submitting: "Submitting request...",
    f_privacy: "Your data is handled under strict technical non-disclosure standards (NDA available).",
    f_consent_label: "I agree to data processing for technical validation evaluation and acknowledge the <a href=\"terms.html\" target=\"_blank\" class=\"legal-inline-link\">B2B Terms of Service</a> and <a href=\"privacy.html\" target=\"_blank\" class=\"legal-inline-link\">Privacy Policy</a> (Law No. 19,628 / Law No. 21,719).",
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
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Autonomous Nighttime Territorial Surveillance",
    eb_h1: "Autonomous Aerial Intelligence for the Nighttime Wildfire Gap",
    eb_summary: "Athene addresses the nighttime gap using VTOL aircraft (validation platform transitioning toward Noctua), onboard Edge AI thermal inference (NVIDIA Jetson), and 915 MHz FHSS tactical telemetry—displacing blind ground patrol exposure and optimizing dawn air combat sorties.",
    eb_b1_title: "1. Operational Problem",
    eb_b1_p1: "<strong>Nighttime blind window:</strong> Manned aircraft fight fires by day but are grounded at night by DGAC regulations and controlled flight into terrain (CFIT) hazards.",
    eb_b1_p2: "<strong>99.7% human origin:</strong> The vast majority of wildfires stem from intentional or negligent human action (Source: CONAF).",
    eb_b1_p3: "<strong>Ground patrol blind spots:</strong> 4x4 pickup patrols cover &lt; 12% of land holdings, blind to ravines and deep stands where fires ignite.",
    eb_b2_title: "2. Technological Solution",
    eb_b2_p1: "<strong>VTOL Platform & Noctua Drone:</strong> Initial validation on adapted commercial airframe; 45–60 min design endurance and runway-independent vertical takeoff.",
    eb_b2_p2: "<strong>Onboard Zero-Cloud Edge AI:</strong> NVIDIA Jetson local compute; thermal detection in seconds without internet or cell coverage.",
    eb_b2_p3: "<strong>Deterrence with Human Authorization:</strong> Luminous strobe and acoustic siren activation always authorized by ground operator (Human-in-the-Loop).",
    eb_b3_title: "3. IaaS Operational Impact Model",
    eb_b3_p1: "<strong>Personnel Safety:</strong> Zero unnecessary human exposure in ravines and isolated logging roads during critical night hours.",
    eb_b3_p2: "<strong>Early Detection & Deterrence:</strong> Detection of human activity at 100 m altitude and authorized deterrence before ignition.",
    eb_b3_p3: "<strong>Dawn Air Attack Optimization:</strong> Early georeferencing of coordinates and perimeter saving critical air tanker sorties at daybreak.",
    eb_b4_title: "4. 2026-27 Validation Program",
    eb_b4_p1: "<strong>Current Status TRL 3:</strong> CORFO Semilla Inicia grant awardee, backed by UdeC, with technical demo at Gearbox (January 2027).",
    eb_b4_p2: "<strong>Private Pilot Site Campaign:</strong> 4-phase deployment methodology (Surveying, Calibration, Nighttime Surveillance, Operational Audit).",
    eb_b4_p3: "<strong>Direct Contact:</strong> Tomás Medina (Technical Lead) | <code>contacto@strigsystems.tech</code> | <code>strigsystems.tech</code>",

    // Footer
    footer_tagline: "Autonomous uncrewed aircraft systems and Edge AI computing for proactive critical risk mitigation.",
    f_nav: "Navigation",
    f_corp: "Corporate",
    f_privacy_link: "Privacy Policy & Governance",
    f_terms_link: "B2B Terms of Service & Pilotage"
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

  // Initialize Navigation Dropdowns, Mobile Menu & Header Scroll
  initNavDropdowns();
  initMobileMenu();
  initHeaderScroll();

  // Initialize Pilot & Conversion Modals
  initPilotModal();
  initBriefingModal();
  initExecutiveBriefModal();

  // Initialize C2 Tactical Simulator
  initC2Simulator();

  // Initialize Technical FAQ Accordion
  initFaq();

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

      // Consent validation
      const consent = form.querySelector('#form-consent');
      if (consent && !consent.checked) {
        if (consent.parentElement) consent.parentElement.classList.add('input-invalid');
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

      const consent = form.querySelector('#b-consent');
      if (consent && !consent.checked) {
        if (consent.parentElement) consent.parentElement.classList.add('input-invalid');
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
 * Controller for Desktop Navigation Dropdowns
 */
function initNavDropdowns() {
  const dropdownWraps = document.querySelectorAll('.nav-dropdown-wrap');
  if (!dropdownWraps.length) return;

  function closeAllDropdowns(exceptWrap = null) {
    dropdownWraps.forEach(wrap => {
      if (wrap !== exceptWrap) {
        wrap.classList.remove('active');
        const btn = wrap.querySelector('.nav-dropdown-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  dropdownWraps.forEach(wrap => {
    const btn = wrap.querySelector('.nav-dropdown-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = wrap.classList.contains('active');
      closeAllDropdowns(wrap);
      if (!isActive) {
        wrap.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        wrap.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close when clicking any dropdown link inside
    wrap.querySelectorAll('.dropdown-link').forEach(link => {
      link.addEventListener('click', () => {
        closeAllDropdowns();
      });
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown-wrap')) {
      closeAllDropdowns();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
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
 * Controller for Technical FAQ Accordion
 */
function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open items for cleaner single-accordion behavior
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Controller for interactive tooltips and source badges (click/tap toggling & click-outside dismissal)
 */
function initTooltips() {
  const triggers = document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    // Handle click/tap for mobile & touchscreens
    trigger.addEventListener('click', (e) => {
      // Don't toggle off if clicking inside the tooltip popup text itself
      if (e.target.closest('.metric-tooltip, .source-tooltip')) return;

      e.stopPropagation();
      const card = trigger.closest('.metric-card') || trigger;
      const infoBtn = card.querySelector ? card.querySelector('.metric-info-trigger') : null;
      const isActive = card.classList.contains('active');

      // Close all other open tooltips
      document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger').forEach(t => {
        if (t !== card && t !== infoBtn) {
          t.classList.remove('active');
          if (t.setAttribute) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        card.classList.remove('active');
        if (infoBtn) infoBtn.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('active');
        if (infoBtn) infoBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Handle keyboard accessibility (Enter / Space / Escape)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      } else if (e.key === 'Escape') {
        const card = trigger.closest('.metric-card') || trigger;
        const infoBtn = card.querySelector ? card.querySelector('.metric-info-trigger') : null;
        card.classList.remove('active');
        if (infoBtn) {
          infoBtn.setAttribute('aria-expanded', 'false');
          infoBtn.blur();
        }
        card.blur();
      }
    });
  });

  // Close when clicking anywhere outside
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger').forEach(trigger => {
      if (!trigger.contains(e.target)) {
        trigger.classList.remove('active');
        if (trigger.setAttribute) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close on Escape key globally
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger').forEach(trigger => {
        trigger.classList.remove('active');
        if (trigger.setAttribute) trigger.setAttribute('aria-expanded', 'false');
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
            ? `✓ Multichannel tactical package transmitted (2.1s): FHSS 915 MHz to Ground Station (Operator HITL) + Local Network / IP Webhook to Central C2 GIS Dispatch.`
            : `✓ Paquete táctico multicanal transmitido (2,1s): Radioenlace FHSS 915 MHz a Estación de Operador en terreno (HITL) + Webhook Central GIS / Despacho por red local/IP.`;
        }
      });
    }
  }

  // Start rendering
  render();

  // Resize handler
  window.addEventListener('resize', updateTargetBoxPosition, { passive: true });
}




