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
    hero_badge: "Proyecto Semilla Inicia CORFO • UdeC • Experiencia Bomberil en Primera Línea",
    hero_title_1: "Los riesgos se mueven rápido.",
    hero_title_2: "Nosotros los vemos venir.",
    hero_sub: "Plataforma de vigilancia territorial autónoma con drones VTOL e inferencia Edge AI a bordo. Cerramos la brecha nocturna de 10 horas detectando actividad humana no autorizada —precursor del 99,7% de los incendios forestales— antes de que inicien los focos, reduciendo hasta un 90% el costo de vuelo y un 85% el gasto operacional territorial consolidado.",
    hero_cta_primary: "Postular a Piloto Operativo",
    hero_cta_secondary: "Ver Capacidades del Sistema",

    // Metrics
    m1_title: "Ahorro en Costo de Vuelo",
    m1_sub: "US$250/h vs US$2.500/h avión tripulado",
    m2_title: "Ventana Crítica Nocturna",
    m2_sub: "Vigilancia autónoma en oscuridad total",
    m3_title: "Falsas Alarmas",
    m3_sub: "Verificación multi-frame a bordo (cero fatiga de alerta)",
    m4_title: "Modelo Intelligence as a Service",
    m4_sub: "Suscripción por cobertura territorial",

    // Problem
    prob_tag: "Diagnóstico Territorial • Foco en Primera Línea",
    prob_title: "La brecha nocturna que cuesta US$130M al año",
    prob_sub: "El 99,7% de los incendios forestales son causados por el ser humano. La aviación tripulada combate de día, pero por normativa y seguridad no vuela de noche. Cuando el riesgo de propagación e intencionalidad es más alto, el cielo queda vacío.",
    p1_head: "Centrales de Operaciones",
    p1_desc: "Incertidumbre constante. Cuando los satélites reportan calor, el foco ya ha alcanzado escala incontrolable.",
    p1_tag: "Información fragmentada",
    p2_head: "Empresas & Propietarios",
    p2_desc: "Riesgo permanente de pérdidas patrimoniales catastróficas en madera, biomasa e infraestructura productiva.",
    p2_tag: "Pérdidas millonarias",
    p3_head: "Brigadistas en Terreno",
    p3_desc: "Exposición a peligro extremo ingresando de noche a ciegas en el bosque sin verificación aérea previa del terreno.",
    p3_tag: "Riesgo vital innecesario",
    quote_text: "Satélites sufren latencia orbital; torres fijas tienen puntos ciegos topográficos; la vigilancia tripulada (avionetas y cuadrillas) no opera de noche o arriesga vidas. Ninguno responde a tiempo la pregunta decisiva: <em>¿Hay una presencia humana no autorizada o anomalía térmica ahora mismo en estas coordenadas exactas?</em>",

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
    r1_drone: "Inoperante de noche. Las avionetas quedan en tierra al atardecer por restricción DGAC/VFR (riesgo CFIT en penumbra). En tierra, las cuadrillas con drones sufren fatiga y 30-45 min de batería por vuelo.",
    r1_strig: "<strong>Patrullaje autónomo programado</strong> en las 10 horas de vulnerabilidad nocturna con aeronave VTOL Noctua-01 y estación de acople.",
    r2_dim: "Latencia de Detección & Alerta",
    r2_sat: "<span class=\"badge-negative\">30 a 90 minutos</span> (descarga orbital, procesamiento en la nube y distribución de alertas a centrales).",
    r2_tower: "Instantánea en sensor óptico; requiere operador humano 24/7 en central para verificación y filtrado de falsas alarmas.",
    r2_drone: "Instantánea para el piloto u operador local; demorada hacia la central de despacho si no existe cobertura 4G/5G en la quebrada o predio.",
    r2_strig: "<span class=\"badge-positive\">&lt; 5 segundos</span> (Inferencia Edge NPU local a bordo + radioenlace táctico de telemetría de largo alcance).",
    r3_dim: "Detección de Precursores (Humanos / Vehículos)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (Resolución espacial de 375m a 1km. Diseñado para incendios activos, incapaz de ver personas o fogatas).",
    r3_tower: "Nula en senderos boscosos densos o bajo dosel arbóreo fuera del ángulo visual del mástil.",
    r3_drone: "Severamente limitada. Las avionetas no vuelan de noche para detectar campamentos o fogatas tempranas; las patrullas en camioneta sólo vigilan caminos habilitados, dejando el interior ciego.",
    r3_strig: "<span class=\"badge-positive\">Detección óptica/térmica</span> de presencia humana y vehículos antes de la ignición (causa del 99,7% de los incendios).",
    r4_dim: "Puntos Ciegos Topográficos",
    r4_sat: "Afectado por nubosidad baja, humo denso e inversión térmica que absorben la radiación infrarroja.",
    r4_tower: "<span class=\"badge-negative\">Crítico:</span> Puntos ciegos físicos insalvables tras cerros, quebradas y laderas opuestas.",
    r4_drone: "Crítico. Las cuadrillas terrestres no tienen visibilidad tras cerros ni en quebradas profundas; las aeronaves diurnas sufren con nubosidad baja y humo denso.",
    r4_strig: "<span class=\"badge-positive\">Mapeo adaptativo:</span> Vuelo autónomo por debajo del techo nuboso, perfilando quebradas y laderas sin sombra topográfica.",
    r5_dim: "Riesgo Humano en Terreno",
    r5_sat: "Cero exposición humana directa.",
    r5_tower: "Cero exposición humana directa (salvo mantenimiento en cumbres aisladas).",
    r5_drone: "<span class=\"badge-negative\">Alto riesgo vital:</span> Peligro de accidentes aéreos en vuelo rasante sobre relieve agreste, y cuadrillas terrestres expuestas en caminos forestales aislados en horario de riesgo.",
    r5_strig: "<span class=\"badge-positive\">Cero exposición humana:</span> Misión, despegue y aterrizaje 100% autónomos desde estación de acople.",
    r6_dim: "Modelo Económico & Costo",
    r6_sat: "Suscripción SaaS (US$15k-$60k/año). Accesible para escala macro; no sustituye la vigilancia táctica.",
    r6_tower: "<span class=\"badge-negative\">Altísimo CAPEX:</span> US$40k-$100k por torre instalada (mástil, óptica militar, energía solar y caminos de acceso).",
    r6_drone: "<span class=\"badge-negative\">OPEX Masivo:</span> US$600-$1.500/hora de vuelo en avioneta diurna + horas extra nocturnas de brigadas, combustible 4x4 y reposición por desgaste de drones.",
    r6_strig: "<span class=\"badge-positive\">0 CAPEX (Intelligence as a Service):</span> Suscripción operativa por hectárea protegida; 90% menor costo por hora de vuelo y ~85% de ahorro anual consolidado.",

    // Technology
    tech_tag: "Capacidades Operativas",
    tech_title: "Vigilancia Territorial con Inteligencia A Bordo",
    tech_sub: "Arquitectura autónoma de alta disponibilidad. La aeronave VTOL detecta, clasifica y georreferencia en el borde sin requerir enlace continuo a internet ni servidores en tierra.",
    t1_title: "Gimbal Bi-Espectral Noctua-Optics",
    t1_desc: "Payload giroestabilizado de 3 ejes con sensor microbolómetro LWIR radiométrico no refrigerado (640×512) y cámara óptica diurna 4K. Identificación térmica precisa en oscuridad total con algoritmo de discriminación multi-frame (<5% falsas alarmas).",
    t2_title: "Inferencia Edge NPU Zero-Cloud (NVIDIA Jetson)",
    t2_desc: "Cómputo a bordo basado en arquitectura NVIDIA Jetson (Orin Nano Super) con pipeline cuantizado FP16 acelerado por NVIDIA TensorRT sobre JetPack SDK / ROS2. Ejecución local de visión computacional y modelos multimodales ligeros para clasificación y validación de amenazas en tiempo real (<40 ms), operando con autonomía total Zero-Cloud en zonas sin internet ni señal celular.",
    t3_title: "Telemetría Táctica en Zonas Desconectadas",
    t3_desc: "Emisión de fichas de alerta y coordenadas exactas en menos de 5 segundos vía radioenlace táctico FHSS 915 MHz (>20 km LOS con Link Margin >6 dB), garantizando enlace de telemetría ininterrumpido más allá del perímetro físico de patrulla sin dependencia celular.",
    t4_title: "Aeronave VTOL & Hoja de Ruta de Ingeniería",
    t4_desc: "Plataforma de validación VTOL 4+1 lift+cruise (2,1 m de envergadura) en transición hacia la célula propietaria industrial Noctua-01. Diseñada para despegue y aterrizaje vertical independiente de pista, hasta 90 min de autonomía, crucero de ala fija de alta eficiencia, envolvente de viento de 45 km/h (24 kt) y radio operacional seguro de 15 km (cobertura de clústeres de hasta 50.000 ha por estación).",
    t5_title: "Georreferenciación Quirúrgica",
    t5_desc: "Proyección angular instantánea hacia el terreno asistida por posicionamiento centimétrico RTK/GNSS de alta precisión, calculando coordenadas exactas para el despacho inmediato de brigadas.",
    t6_title: "Operación Segura & Marco DGAC",
    t6_desc: "Diseñado bajo estándares de ingeniería aeroespacial. Protocolos operacionales en proceso de acreditación técnica bajo normativa DAN 151 / DAN 91 (DGAC Chile) para operaciones BVLOS con segregación de espacio aéreo, telemetría redundante y paracaídas balístico.",
    spec_1: "<span class=\"spec-name\">Plataforma:</span> VTOL Noctua-01",
    spec_2: "<span class=\"spec-name\">Envolvente:</span> Viento 45 km/h | -5°C a +45°C",
    spec_3: "<span class=\"spec-name\">Respuesta:</span> Alerta Táctica &lt; 5 s (FHSS)",
    spec_4: "<span class=\"spec-name\">Normativa:</span> Marco DGAC DAN 151 / BVLOS",
    spec_5: "<span class=\"spec-name\">Modelo:</span> Intelligence as a Service (0 CAPEX)",

    // C2 Tactical Console & Dual Views
    c2_tag: "◈ Consola C2 Athene",
    c2_title: "Simulador de Enlace Táctico & Misión Nocturna",
    c2_sub: "Experimenta en tiempo real la telemetría embarcada de la aeronave Noctua-01 y la inferencia bi-espectral del Edge NPU con discriminación térmica de precursores.",
    c2_status_link: "TELEMETRÍA LINK: ACTIVO (915 MHz FHSS)",
    c2_view_gimbal: "SENSOR GIMBAL (FLIR)",
    c2_view_map: "MANDO SITUACIONAL C2",
    c2_lbl_palette: "PALETA:",
    c2_lbl_zoom: "ZOOM:",
    c2_hint: "💡 Haz clic sobre el cuadrante térmico o el mapa táctico para re-orientar el sensor y calcular coordenadas georreferenciadas.",
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
    salute_val_eq: "Bidón Combustible (VLM Edge)",
    c2_pip_swap: "⇄ CLIC PARA EXPANDIR",

    // ROI Calculator
    roi_badge: "MODELO ECONÓMICO",
    roi_title: "Calculadora de Retorno Operativo Territorial",
    roi_sub: "Modelo Intelligence as a Service (0 CAPEX). Estima el ahorro operacional integral (~85% vs aviación tripulada) y la reducción de emisiones según la superficie de tus predios.",
    roi_lbl_area: "Superficie a Proteger:",
    roi_lbl_manned: "Costo Aviación Tripulada Estimado:",
    roi_sub_manned: "Avioneta diurna + cuadrilla",
    roi_lbl_strig: "Suscripción Athene (0 CAPEX):",
    roi_sub_strig: "Patrullaje nocturno autónomo",
    roi_lbl_savings: "Ahorro Neto Operacional:",
    roi_lbl_co2: "Huella CO2 Evitada:",
    roi_sub_co2: "Cero emisiones fósiles de vuelo",

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
    team_sub: "5 ingenieros civiles aeroespaciales de la Universidad de Concepción, combinando diseño aeronáutico, visión computacional, experiencia bomberil en primera línea y certificación civil.",
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
    hero_sub: "Autonomous territorial surveillance platform powered by VTOL aircraft and onboard Edge AI. We close the critical 10-hour nighttime gap by detecting unauthorized human activity—precursor to 99.7% of wildfires—before ignition occurs, slashing aerial patrol flight costs by up to 90% and consolidating territorial OPEX savings by 85%.",
    hero_cta_primary: "Apply for Operational Pilot",
    hero_cta_secondary: "Explore Capabilities",

    // Metrics
    m1_title: "Flight Cost Reduction",
    m1_sub: "US$250/h vs US$2,500/h manned aircraft",
    m2_title: "Critical Night Window",
    m2_sub: "Autonomous patrol in pitch-black darkness",
    m3_title: "False Alarm Rate",
    m3_sub: "Onboard multi-frame verification (zero alert fatigue)",
    m4_title: "Intelligence as a Service",
    m4_sub: "Territorial coverage subscription, zero CAPEX",

    // Problem
    prob_tag: "Territorial Assessment • Frontline Firefighting Experience",
    prob_title: "The nighttime vulnerability gap costing US$130M yearly",
    prob_sub: "99.7% of wildfires are human-caused. Manned aircraft operate strictly during daylight due to flight safety regulations. When arson and weather-driven fire spread peak, the airspace remains unprotected.",
    p1_head: "Operations Centers",
    p1_desc: "Persistent uncertainty. By the time orbital satellites detect thermal anomalies, the fire front has reached catastrophic scale.",
    p1_tag: "Fragmented intelligence",
    p2_head: "Landowners & Forestry",
    p2_desc: "Permanent risk of multi-million dollar capital losses in commercial timber, biomass, and production infrastructure.",
    p2_tag: "Catastrophic exposure",
    p3_head: "Ground Firefighters",
    p3_desc: "Extreme physical hazard entering rugged mountainous terrain in darkness without prior aerial reconnaissance.",
    p3_tag: "Avoidable human risk",
    quote_text: "Satellites suffer orbital latency; fixed watchtowers face topographic blind spots; conventional manned surveillance (patrol planes and ground crews) is grounded at night or risks human lives. None answers the decisive question in time: <em>Is there an unauthorized human presence or thermal anomaly right now at exact coordinates?</em>",

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
    r1_drone: "Inoperable at night. Light aircraft are grounded at sunset by DGAC/VFR rules (CFIT terrain hazard). On the ground, crews with drones face operator fatigue and 30-45 min battery limits.",
    r1_strig: "<strong>Scheduled autonomous patrol</strong> across the critical 10-hour nighttime vulnerability window with Noctua-01 VTOL airframe and docking station.",
    r2_dim: "Detection & Alert Latency",
    r2_sat: "<span class=\"badge-negative\">30 to 90 minutes</span> (orbital downlink, cloud processing, and regional alert dissemination lag).",
    r2_tower: "Instantaneous at optical sensor; requires 24/7 human console operator for verification and false alarm filtering.",
    r2_drone: "Instantaneous for local pilot or crew; significantly delayed to central dispatch without reliable 4G/5G coverage in remote terrain.",
    r2_strig: "<span class=\"badge-positive\">&lt; 5 seconds</span> (onboard local Edge NPU inference + long-range tactical telemetry radio datalink).",
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
    r5_dim: "Human Operational Hazard",
    r5_sat: "Zero direct human exposure.",
    r5_tower: "Zero direct human exposure (except maintenance on isolated peaks).",
    r5_drone: "<span class=\"badge-negative\">High human hazard:</span> Severe crash risk (CFIT) in low-altitude patrol, plus ground crews exposed on isolated logging tracks during high-arson hours.",
    r5_strig: "<span class=\"badge-positive\">Zero human hazard:</span> 100% autonomous launch, patrol mission, and docking recovery from automated station.",
    r6_dim: "Economic Model & Cost",
    r6_sat: "SaaS software subscription (US$15k-$60k/yr). Accessible at macro scale; does not replace tactical parcel surveillance.",
    r6_tower: "<span class=\"badge-negative\">Extremely High CAPEX:</span> US$40k-$100k per installed mast (tower, military-grade optics, solar arrays, and access roads).",
    r6_drone: "<span class=\"badge-negative\">Massive OPEX:</span> US$600-$1,500/flight hour for daytime patrol planes + heavy night overtime labor, 4x4 fleet fuel/maintenance, and drone attrition.",
    r6_strig: "<span class=\"badge-positive\">0 CAPEX (Intelligence as a Service):</span> Operational subscription per protected hectare; 90% flight-hour cost reduction and ~85% net annual territorial savings.",

    // Technology
    tech_tag: "Operational Capabilities",
    tech_title: "Territorial Surveillance with Onboard Edge Intelligence",
    tech_sub: "High-availability autonomous architecture. The VTOL airframe detects, classifies, and geolocalizes at the edge without requiring persistent internet or ground servers.",
    t1_title: "Noctua-Optics Bi-Spectral Gimbal",
    t1_desc: "3-axis gyro-stabilized payload with uncooled radiometric LWIR microbolometer (640×512) and 4K daytime optical sensor. Pinpoint thermal threat identification in total darkness with multi-frame temporal discrimination algorithm (<5% false alarm rate).",
    t2_title: "Onboard Edge AI Zero-Cloud (NVIDIA Jetson)",
    t2_desc: "Onboard computing powered by NVIDIA Jetson (Orin Nano Super) architecture with an FP16 quantized inference pipeline accelerated by NVIDIA TensorRT on JetPack SDK / ROS2. Real-time local execution of computer vision models and multimodal verification (<40 ms), operating completely offline Zero-Cloud without internet or cloud dependency.",
    t3_title: "Tactical Telemetry in Dark Zones",
    t3_desc: "Structured alert dossiers and exact coordinates transmitted in under 5 seconds via 915 MHz FHSS tactical radio datalink (>20 km LOS with >6 dB link margin), ensuring uninterrupted C2 telemetry beyond the physical patrol perimeter without cellular dependency.",
    t4_title: "VTOL Airframe & Engineering Roadmap",
    t4_desc: "4+1 lift+cruise VTOL validation testbed (2.1 m wingspan) transitioning toward the proprietary industrial Noctua-01 airframe. Engineered for runway-independent vertical takeoff, up to 90 min endurance, high-efficiency fixed-wing cruise, 45 km/h (24 kt) wind envelope tolerance, and 15 km safe operational radius (covering clusters up to 50,000 ha per docking base).",
    t5_title: "Real-Time Surgical Geolocalization",
    t5_desc: "Instant angular terrain projection assisted by high-precision RTK/GNSS centimetric positioning, calculating exact target coordinates for the rapid dispatch of ground crews.",
    t6_title: "Certified Safety & DGAC Compliance",
    t6_desc: "Engineered under aerospace safety standards. Flight procedures and redundancy protocols aligned with Chilean civil aviation DAN 151 / DAN 91 technical regulations for BVLOS operations with airspace segregation, redundant telemetry, and ballistic parachute.",
    spec_1: "<span class=\"spec-name\">Platform:</span> VTOL Noctua-01",
    spec_2: "<span class=\"spec-name\">Flight Envelope:</span> Wind 45 km/h | -5°C to +45°C",
    spec_3: "<span class=\"spec-name\">Response:</span> Tactical Alert &lt; 5 s (FHSS)",
    spec_4: "<span class=\"spec-name\">Regulation:</span> DGAC DAN 151 / BVLOS Scope",
    spec_5: "<span class=\"spec-name\">Model:</span> Intelligence as a Service (0 CAPEX)",

    // C2 Tactical Console & Dual Views
    c2_tag: "◈ Athene C2 Console",
    c2_title: "Tactical Datalink & Night Mission Simulator",
    c2_sub: "Experience real-time onboard telemetry from the Noctua-01 airframe and Edge NPU bi-spectral inference with thermal precursor discrimination.",
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
    roi_sub: "Intelligence as a Service model (0 CAPEX). Estimate consolidated operational savings (~85% vs manned aviation) and emissions avoided based on your acreage.",
    roi_lbl_area: "Acreage to Protect:",
    roi_lbl_manned: "Estimated Manned Aviation Cost:",
    roi_sub_manned: "Daytime aircraft + ground crew",
    roi_lbl_strig: "Athene Subscription (0 CAPEX):",
    roi_sub_strig: "Autonomous nighttime patrol",
    roi_lbl_savings: "Net Operational Savings:",
    roi_lbl_co2: "Carbon Footprint Avoided:",
    roi_sub_co2: "Zero fossil aviation emissions",

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

  // Initialize Pilot Modal
  initPilotModal();

  // Initialize C2 Tactical Simulator
  initC2Simulator();

  // Initialize Territorial ROI Calculator
  initRoiCalculator();
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
 * Interactive Territorial Acreage ROI Calculator
 */
function initRoiCalculator() {
  const slider = document.getElementById('roi-slider');
  const areaReadout = document.getElementById('roi-area-readout');
  const mannedVal = document.getElementById('roi-manned-val');
  const strigVal = document.getElementById('roi-strig-val');
  const savingsVal = document.getElementById('roi-savings-val');
  const savingsPct = document.getElementById('roi-savings-pct');
  const co2Val = document.getElementById('roi-co2-val');
  const presetBtns = document.querySelectorAll('.roi-preset-btn');

  if (!slider) return;

  function updateRoi() {
    const ha = parseInt(slider.value, 10);
    const lang = document.documentElement.getAttribute('data-lang') || 'es';
    const isEs = lang === 'es';

    // Financial model:
    // Manned Aviation: US$ 6.50 / ha / year
    // Athene Autonomous VTOL IaaS: US$ 0.95 / ha / year
    // Carbon Footprint Avoided: 0.00194 metric tons CO2e / ha / year
    const mannedCost = ha * 6.5;
    const strigCost = ha * 0.95;
    const savings = mannedCost - strigCost;
    const co2Avoided = ha * 0.00194;

    const locale = isEs ? 'es-CL' : 'en-US';
    const perYear = isEs ? 'año' : 'yr';
    const costWord = isEs ? 'COSTO' : 'COST';

    if (areaReadout) {
      areaReadout.textContent = `${ha.toLocaleString(locale)} ha`;
    }
    if (mannedVal) {
      mannedVal.textContent = `US$ ${Math.round(mannedCost).toLocaleString(locale)} / ${perYear}`;
    }
    if (strigVal) {
      strigVal.textContent = `US$ ${Math.round(strigCost).toLocaleString(locale)} / ${perYear}`;
    }
    if (savingsVal) {
      savingsVal.textContent = `US$ ${Math.round(savings).toLocaleString(locale)}`;
    }
    if (savingsPct) {
      savingsPct.textContent = `-85% ${costWord}`;
    }
    if (co2Val) {
      co2Val.textContent = `${co2Avoided.toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 })} t CO2e`;
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
          alertStatus.style.display = 'block';
          alertStatus.innerHTML = `✓ Paquete FHSS 915 MHz emitido a Central C2 y Cuadrilla Alpha-1. Tiempo de transmisión: 2,4s.`;
        }
      });
    }
  }

  // Start rendering
  render();

  // Resize handler
  window.addEventListener('resize', updateTargetBoxPosition, { passive: true });
}




