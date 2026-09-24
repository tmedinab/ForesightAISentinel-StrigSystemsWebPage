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
    hero_badge: "Fondo Semilla CORFO Adjudicado • Apoyo UdeC",
    hero_title_1: "Los riesgos se mueven rápido.",
    hero_title_2: "Nosotros los vemos venir.",
    hero_sub: "Plataforma de vigilancia territorial autónoma con drones VTOL e inferencia Edge AI a bordo. Cerramos la brecha nocturna de 10 horas detectando actividad humana no autorizada —precursor del 99,7% de los incendios forestales— antes de que se inicien los focos, con 90% menor costo que la aviación tripulada.",
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
    prob_tag: "El Diagnóstico Territorial",
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
    quote_text: "Satélites tienen latencia orbital; torres fijas tienen puntos ciegos topográficos; drones manuales exigen cuadrillas nocturnas en riesgo. Ninguno responde a tiempo la pregunta decisiva: <em>¿Hay una amenaza humana o térmica en este instante y coordenadas exactas?</em>",

    // Tactical Benchmark
    comp_tag: "Benchmark Táctico",
    comp_title: "Por Qué las Soluciones Tradicionales Fallan de Noche",
    comp_sub: "Análisis técnico comparativo entre satélites de órbita baja, torres térmicas fijas, drones manuales y la plataforma autónoma Athene.",
    matrix_scroll_hint: "⇄ Desliza horizontalmente para comparar tecnologías",
    th_dim: "Dimensión Operativa",
    th_sat: "Satélites LEO<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Torres Térmicas Fijas<br><span class=\"th-sub\">Mástiles Ópticos</span>",
    th_drone: "Drones Manuales<br><span class=\"th-sub\">Cuadrillas Nocturnas</span>",
    strig_badge: "Nuestra Arquitectura",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (VTOL Noctua-01 + Edge AI)</span>",
    r1_dim: "Patrullaje Nocturno Continuo",
    r1_sat: "Pasos orbitales discretos (1 a 4 horas). Vacío ciego entre pasadas.",
    r1_tower: "Continuo 24/7, pero estrictamente limitado a línea de vista (LOS).",
    r1_drone: "30 a 45 min por batería. Limitado por fatiga y visibilidad de operadores.",
    r1_strig: "<strong>Patrullaje autónomo programado</strong> en las 10 horas de vulnerabilidad nocturna con aeronave VTOL Noctua-01.",
    r2_dim: "Latencia de Detección & Alerta",
    r2_sat: "<span class=\"badge-negative\">30 a 90 minutos</span> (bajada orbital y procesamiento satelital).",
    r2_tower: "Instantánea en sensor; requiere verificación manual en central C2.",
    r2_drone: "Instantánea para operador local; demorada a central si no hay 4G/5G.",
    r2_strig: "<span class=\"badge-positive\">&lt; 5 segundos</span> (Inferencia Edge NPU local a bordo + radioenlace táctico).",
    r3_dim: "Detección de Precursores (Humanos / Vehículos)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (Resolución 375m a 1km. Incapaz de ver personas o fogatas).",
    r3_tower: "Nula en zonas boscosas densas o senderos fuera de visión directa.",
    r3_drone: "Posible a baja cota, pero arriesgando cuadrillas humanas en el bosque.",
    r3_strig: "<span class=\"badge-positive\">Detección óptica/térmica</span> de personas y vehículos antes de la ignición (99,7% de causas).",
    r4_dim: "Puntos Ciegos Topográficos",
    r4_sat: "Afectado por nubes densas, humo copioso y copas arbóreas cerradas.",
    r4_tower: "<span class=\"badge-negative\">Crítico:</span> Puntos ciegos físicos tras cerros, quebradas y valles.",
    r4_drone: "Limitado por relieve agreste y restricción de alcance visual (VLOS).",
    r4_strig: "<span class=\"badge-positive\">Mapeo adaptativo:</span> Vuelo autónomo por debajo de nubes, perfilando quebradas y laderas sin sombra topográfica.",
    r5_dim: "Riesgo Humano en Terreno",
    r5_sat: "Cero riesgo directo.",
    r5_tower: "Cero riesgo directo.",
    r5_drone: "<span class=\"badge-negative\">Alto riesgo:</span> Cuadrillas expuestas de noche en caminos forestales remotos.",
    r5_strig: "<span class=\"badge-positive\">Cero riesgo humano:</span> Misión, despegue y aterrizaje 100% autónomos desde estación de acople.",
    r6_dim: "Modelo Económico & Costo",
    r6_sat: "Suscripción SaaS (US$15k-$60k/año), sin detección de precursores.",
    r6_tower: "<span class=\"badge-negative\">Altísimo CAPEX:</span> US$40k-$100k por torre instalada (mástil + energía).",
    r6_drone: "CAPEX medio + alto costo en horas hombre nocturnas y camionetas 4x4.",
    r6_strig: "<span class=\"badge-positive\">0 CAPEX (Intelligence as a Service):</span> Suscripción operativa por hectárea; 90% menor costo vs aviación tripulada.",

    // Technology
    tech_tag: "Capacidades Operativas",
    tech_title: "Vigilancia Territorial con Inteligencia A Bordo",
    tech_sub: "Arquitectura autónoma de alta disponibilidad. La aeronave VTOL detecta, clasifica y georreferencia en el borde sin requerir enlace continuo a internet ni servidores en tierra.",
    t1_title: "Visión Térmica Bi-Espectral",
    t1_desc: "Detección infrarroja radiométrica y óptica de alta definición en gimbal estabilizado. Identificación de amenazas térmicas y presencia en oscuridad total con menos de 5% de falsas alarmas.",
    t2_title: "Inteligencia Artificial Embarcada (Zero-Cloud)",
    t2_desc: "Inferencia de visión computacional 100% local a bordo. La aeronave detecta, clasifica y valida amenazas en tiempo real sin requerir internet, nube externa ni conectividad celular.",
    t3_title: "Telemetría Táctica en Zonas Desconectadas",
    t3_desc: "Emisión de fichas de alerta y coordenadas exactas en menos de 5 segundos vía radioenlace táctico de largo alcance, garantizando operatividad en quebradas y predios remotos.",
    t4_title: "Aeronave VTOL Noctua-01",
    t4_desc: "Vector aéreo híbrido de despegue y aterrizaje vertical independiente de pista. Hasta 90 min de autonomía, crucero eficiente de ala fija, envolvente de viento de hasta 45 km/h (24 kt) y cobertura de 15 km de radio operativo.",
    t5_title: "Georreferenciación Quirúrgica",
    t5_desc: "Proyección angular instantánea hacia el terreno asistida por posicionamiento centimétrico de alta precisión, calculando coordenadas exactas para el despacho inmediato de brigadas.",
    t6_title: "Operación Segura & Marco DGAC",
    t6_desc: "Diseñado bajo estándares de ingeniería aeroespacial. Protocolos operacionales en proceso de acreditación técnica bajo normativa DAN 151 / DAN 91 (DGAC Chile) para operaciones BVLOS con segregación y paracaídas balístico.",
    spec_1: "<span class=\"spec-name\">Plataforma:</span> VTOL Noctua-01",
    spec_2: "<span class=\"spec-name\">Envolvente:</span> Viento hasta 45 km/h (24 kt)",
    spec_3: "<span class=\"spec-name\">Respuesta:</span> Alertas Tácticas en &lt; 5 Segundos",
    spec_4: "<span class=\"spec-name\">Normativa:</span> Enfoque DGAC DAN 151 / BVLOS",
    spec_5: "<span class=\"spec-name\">Modelo:</span> Intelligence as a Service (0 CAPEX)",

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
    p_corfo: "Fondo Semilla Inicia 25INI2-313170",
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
    f_corp: "Corporativo"
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
    hero_badge: "CORFO Seed Grant Awarded • Backed by UdeC",
    hero_title_1: "Risks move fast.",
    hero_title_2: "We see them coming.",
    hero_sub: "Autonomous territorial surveillance platform powered by VTOL uncrewed aircraft and onboard Edge AI. We close the critical 10-hour nighttime window by detecting unauthorized human activity—precursor to 99.7% of wildfires—before ignition occurs, slashing aerial patrol costs by 90%.",
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
    prob_tag: "Territorial Assessment",
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
    quote_text: "Satellites suffer orbital latency; fixed watchtowers face topographic blind spots; manual drones place nocturnal ground crews at risk. None answers the decisive question in time: <em>Is there an unauthorized human presence or thermal anomaly right now at exact coordinates?</em>",

    // Tactical Benchmark
    comp_tag: "Tactical Benchmark",
    comp_title: "Why Legacy Solutions Fail in the Night Window",
    comp_sub: "Comparative technical analysis across LEO satellites, fixed thermal watchtowers, manual drones, and the Athene autonomous platform.",
    matrix_scroll_hint: "⇄ Swipe horizontally to compare technologies",
    th_dim: "Operational Dimension",
    th_sat: "LEO Satellites<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Fixed Thermal Towers<br><span class=\"th-sub\">Optical Masts</span>",
    th_drone: "Manual Drones<br><span class=\"th-sub\">Night Ground Crews</span>",
    strig_badge: "Our Architecture",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (Noctua-01 VTOL + Edge AI)</span>",
    r1_dim: "Continuous Night Patrol",
    r1_sat: "Discrete orbital passes (every 1 to 4 hours). Blind gaps between passes.",
    r1_tower: "Continuous 24/7, but strictly limited to line-of-sight (LOS).",
    r1_drone: "30 to 45 min per battery. Constrained by crew fatigue and nocturnal line-of-sight.",
    r1_strig: "<strong>Scheduled autonomous patrol</strong> across the critical 10-hour nighttime vulnerability window with Noctua-01 VTOL airframe.",
    r2_dim: "Detection & Alert Latency",
    r2_sat: "<span class=\"badge-negative\">30 to 90 minutes</span> (orbital downlink and cloud processing lag).",
    r2_tower: "Instant at sensor; requires manual verification by dispatch operator.",
    r2_drone: "Instant for local pilot; delayed to dispatch C2 without 4G/5G cell signal.",
    r2_strig: "<span class=\"badge-positive\">&lt; 5 seconds</span> (onboard local Edge NPU inference + tactical radio datalink).",
    r3_dim: "Precursor Detection (Humans / Vehicles)",
    r3_sat: "<span class=\"badge-negative\">0%</span> (375m to 1km resolution; incapable of spotting individuals or small campfires).",
    r3_tower: "Zero under dense canopy or topographic corridors away from direct mast view.",
    r3_drone: "Feasible at low altitude, but requires risking ground crews in the forest.",
    r3_strig: "<span class=\"badge-positive\">Optical & thermal detection</span> of human presence and vehicles prior to ignition (root cause of 99.7% of fires).",
    r4_dim: "Topographic Blind Spots",
    r4_sat: "Degraded by cloud cover, heavy smoke, and dense tree canopy.",
    r4_tower: "<span class=\"badge-negative\">Critical:</span> Physical blind spots behind hills, ravines, and opposite slopes.",
    r4_drone: "Restricted by rugged topography and visual line of sight (VLOS) regulations.",
    r4_strig: "<span class=\"badge-positive\">Adaptive contour mapping:</span> Autonomous flight beneath cloud decks, navigating ravines and ridges without topographic shadow.",
    r5_dim: "Human Operational Hazard",
    r5_sat: "Zero physical hazard.",
    r5_tower: "Zero physical hazard.",
    r5_drone: "<span class=\"badge-negative\">High hazard:</span> Nocturnal ground crews operating on remote forest roads in danger zones.",
    r5_strig: "<span class=\"badge-positive\">Zero human hazard:</span> 100% autonomous launch, patrol mission, and docking recovery.",
    r6_dim: "Economic Model & Cost",
    r6_sat: "Software subscription (US$15k-$60k/yr), zero precursor prevention capability.",
    r6_tower: "<span class=\"badge-negative\">Extremely High CAPEX:</span> US$40k-$100k per installed mast (power + micro-links).",
    r6_drone: "Medium CAPEX + heavy recurring night-shift labor and 4x4 fleet logistics.",
    r6_strig: "<span class=\"badge-positive\">0 CAPEX (Intelligence as a Service):</span> Operational subscription per protected hectare; 90% cost reduction vs manned patrol.",

    // Technology
    tech_tag: "Operational Capabilities",
    tech_title: "Autonomous Aerial Intelligence at the Edge",
    tech_sub: "High-availability autonomous architecture. The VTOL airframe detects, classifies, and geolocalizes at the edge without requiring persistent internet or ground servers.",
    t1_title: "Bi-Spectral Thermal Vision",
    t1_desc: "Radiometric infrared and high-definition optical sensing on a stabilized gimbal. Pinpoint threat identification and human presence verification in complete darkness with under 5% false alarm rates.",
    t2_title: "Onboard Edge AI (Zero-Cloud)",
    t2_desc: "100% local onboard computer vision inference. The aircraft detects, classifies, and verifies threats in real time without requiring internet, cloud servers, or cellular connectivity.",
    t3_title: "Tactical Telemetry in Dark Zones",
    t3_desc: "Transmission of structured alert packages and exact coordinates in under 5 seconds over long-range tactical radio links, fully operational in canyons and remote terrain.",
    t4_title: "Noctua-01 Autonomous VTOL Airframe",
    t4_desc: "Runway-independent hybrid vertical takeoff and fixed-wing cruise vector. Up to 90 min endurance, 45 km/h (24 kt) wind envelope tolerance, and 15 km operational radius across rugged topography.",
    t5_title: "Real-Time Surgical Geolocalization",
    t5_desc: "Instant angular terrain projection assisted by high-precision centimetric positioning, calculating exact target coordinates for the rapid dispatch of ground crews.",
    t6_title: "Certified Safety & DGAC Compliance",
    t6_desc: "Engineered under aerospace safety standards. Flight procedures and redundancy protocols aligned with Chilean civil aviation DAN 151 / DAN 91 technical regulations for BVLOS operations with ballistic parachute.",
    spec_1: "<span class=\"spec-name\">Platform:</span> VTOL Noctua-01",
    spec_2: "<span class=\"spec-name\">Flight Envelope:</span> Wind up to 45 km/h (24 kt)",
    spec_3: "<span class=\"spec-name\">Response:</span> Tactical Alerts in &lt; 5 Seconds",
    spec_4: "<span class=\"spec-name\">Regulation:</span> DGAC DAN 151 / BVLOS Scope",
    spec_5: "<span class=\"spec-name\">Model:</span> Intelligence as a Service (0 CAPEX)",

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
    p_corfo: "CORFO Seed Grant 25INI2-313170",
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
    f_corp: "Corporate"
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
            mailLink.href = `mailto:contacto@strigsystems.tech?subject=${fallbackSubject}&body=${fallbackBody}`;
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



