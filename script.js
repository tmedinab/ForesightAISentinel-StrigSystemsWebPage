/**
 * Strig Systems — Athene Noctua
 * Enterprise Production Client Controller (Bilingual ES / EN)
 */

const translations = {
  es: {
    // Nav
    nav_problem: "Problema",
    nav_tech_menu: "Tecnología",
    nav_tech: "Arquitectura y sensores",
    nav_tech_desc: "Gimbal EO/IR, Edge AI Jetson y telemetría FHSS",
    nav_roadmap: "Hoja de ruta (TRL 3)",
    nav_roadmap_desc: "Hitos 2026-27 y Visión de Plataforma",
    nav_compare: "Benchmark táctico",
    nav_compare_desc: "Athene vs Satélites, Torres y Brigadas",
    nav_val_menu: "Validación",
    nav_pilot: "Programa de validación",
    nav_pilot_desc: "Validación conjunta en predio piloto privado",
    nav_impact: "Impacto operacional",
    nav_impact_desc: "Seguridad nocturna, disuasión y ataque al amanecer",
    nav_faq: "FAQ técnica",
    nav_faq_desc: "Límites operacionales, niebla y falsas alarmas",
    nav_company_menu: "Compañía",
    nav_team: "Equipo fundador",
    nav_team_desc: "5 ingenieros civiles aeroespaciales UdeC",
    nav_alliances: "I+D y alianzas",
    nav_alliances_desc: "CORFO, Gearbox, UdeC, Arauco",
    nav_contact: "Contacto directo",
    nav_contact_desc: "Canal institucional y consultas",
    nav_cta: "Sumarse a validación",

    // Dynamic Values & Media Tags
    m1_metric_val: "Noche",
    m3_metric_val: "Segundos",
    btn_matrix_compact: "Resumen",
    btn_matrix_detailed: "+ Análisis detallado",
    media_bench_tag: "[Integración de sistemas de aviónica · Banco de pruebas]",
    media_video_tag: "[Validación de visión térmica e IA a bordo]",
    media_video_meta: "LWIR 640×512 radiométrica · 30 FPS",
    media_hud_target: "PRECURSOR DETECTADO",
    ph1_time: "Fase 01 · Coordinación",
    ph2_time: "Fase 02 · Calibración",
    ph3_time: "Fase 03 · Ensayos nocturnos",
    ph4_time: "Fase 04 · Evaluación conjunta",
    contact_nda_pill: "Acuerdos de confidencialidad (NDA) disponibles",
    footer_copyright: "© 2026 Strig Systems SpA. Todos los derechos reservados.",
    eb_product: "PLATAFORMA ATHENE",

    // Hero
    hero_status: "TRL 3 · Prototipo en desarrollo · Demo técnica ene 2027",
    hero_badge: "Semilla Inicia CORFO • Lab Aeroespacial UdeC",
    hero_eyebrow_tag: "SISTEMA CENTINELA AÉREO AUTÓNOMO",
    hero_title_1: "Los riesgos se mueven rápido.",
    hero_title_2: "Nosotros los vemos venir.",
    hero_sub: "Drones autónomos que vuelan de noche para detectar conatos e intencionalidad antes de que el fuego crezca. <strong class=\"hl-product\">Athene</strong> es la plataforma de inteligencia aérea autónoma desarrollada por Strig Systems para cerrar la brecha nocturna de incendios mediante aeronaves VTOL e inferencia térmica Edge AI a bordo. Detectamos precursores y anomalías térmicas antes de la ignición, reduciendo la exposición en terreno y optimizando la respuesta al amanecer.",
    hero_cta_primary: "Sumarse al programa de validación 2026-27",
    hero_cta_secondary: "Ver hoja de ruta y tecnología",
    hero_cta_brief: "Executive Brief (PDF)",

    // Metrics & Progressive Disclosure Micro-Fichas
    m1_title: "Brecha nocturna",
    m1_sub: "Vigilancia aérea en la ventana donde la aviación tripulada está en tierra",
    m1_tax: "[BRECHA OPERACIONAL]",
    m1_tip_title: "Brecha nocturna y riesgo humano",
    m1_val_today: "Monitoreo térmico aéreo en la ventana crítica nocturna mientras brigadas y avionetas están inactivas por riesgo de relieve (CFIT).",
    m1_val_context: "El 99,7% de los incendios forestales en Chile se originan por causa humana intencional o accidental (CONAF, 2003-2023).",
    m2_title: "Radio de misión proyectado",
    m2_sub: "Meta de diseño para 50.000 ha (Aeronave Noctua™) • Hoy: Rango acotado en predio piloto (VLOS)",
    m2_tax: "[OBJETIVO DE PRODUCTO]",
    m2_tip_title: "Radio de cobertura territorial",
    m2_val_today: "Operación en rango acotado en línea de vista visual (VLOS) sobre predio piloto privado con operador en sitio.",
    m2_val_goal: "Radio de 15 km (BVLOS). Aeronave VTOL con capacidad aerodinámica de 45–60 min de crucero para proteger clústeres de 50.000 ha.",
    m2_val_framework: "Escalamiento sujeto a certificación de riesgo operacional SORA (JARUS) y segregación aérea DGAC.",
    m3_title: "Detección térmica",
    m3_sub: "Inferencia Edge AI local a bordo • Alerta consolidada a estación en minutos (meta ≤ 3 min)",
    m3_tax: "[OBJETIVO DE PRODUCTO]",
    m3_tip_title: "Inferencia térmica local Edge AI",
    m3_val_today: "Detección de fuentes térmicas y personas en microsegundos a bordo (NVIDIA Jetson) y alerta consolidada a estación en minutos (meta ≤ 3 min).",
    m3_val_goal: "Despacho de coordenadas verificadas con tasa de falsas alarmas < 5% (criterio de aceptación técnica MVP < 10%).",
    m3_val_framework: "Arquitectura Zero-Cloud: no requiere internet ni nube para detectar en tiempo real.",
    m4_title: "Disuasión autorizada",
    m4_sub: "Foco de alta intensidad y sirena acústica activados exclusivamente con autorización del operador",
    m4_tax: "[DIFERENCIADOR CLAVE]",
    m4_tip_title: "Human-in-the-Loop · Protocolo de seguridad",
    m4_val_today: "Cero disuasión autónoma. El sistema clasifica el precursor pero la activación de la baliza física requiere la orden expresa del operador.",
    m4_val_framework: "Control de seguridad estricto que protege a las brigadas de emboscadas o desorientación en terreno profundo.",
    lbl_today: "HOY (MVP 2026-27):",
    lbl_goal: "OBJETIVO:",
    lbl_framework: "CONDICIÓN / MARCO:",
    lbl_context: "EVIDENCIA:",

    // Problem
    prob_tag: "El diagnóstico territorial",
    prob_title: "La brecha nocturna de combate y vigilancia",
    corma_tooltip: "Dato oficial CONAF (2003-2023): El 99,7% de los incendios forestales en Chile se inician por causa humana, ya sea intencional o accidental.",
    prob_sub: "El 99,7% de los incendios forestales son causados por el ser humano (CONAF, 2003-2023). La aviación tripulada combate de día, pero por seguridad y normativa DGAC no vuela de noche. Cuando el viento y el riesgo de intencionalidad son más altos, el cielo queda vacío y las cuadrillas en tierra no tienen visibilidad en el bosque profundo.",
    p1_head: "Centrales de operaciones",
    p1_desc: "Incertidumbre constante. Cuando los satélites reportan calor, el foco ya ha alcanzado escala incontrolable.",
    p1_tag: "Información fragmentada",
    p2_head: "Empresas y propietarios",
    p2_desc: "Riesgo permanente de pérdidas patrimoniales catastróficas en madera, biomasa e infraestructura productiva.",
    p2_tag: "Daño patrimonial crítico",
    p3_head: "Brigadistas en terreno",
    p3_desc: "Exposición extrema a emboscadas, cortes de camino o accidentes al ingresar de noche a ciegas por caminos de ripio, con escasa visibilidad efectiva fuera de la huella.",
    p3_tag: "Riesgo vital innecesario",
    quote_text: "Los satélites sufren retrasos de órbita, las torres fijas tienen puntos ciegos tras los cerros y quebradas, y las patrullas en camioneta solo ven lo que alcanzan sus focos en el camino. Al atardecer, los aviones cisterna quedan en tierra por seguridad. <span class=\"hl-product\">Athene</span> cambia esta realidad: patrulla el cielo nocturno y <span class=\"hl-green\">detecta la presencia humana antes de que se inicie el fuego</span>, protegiendo a las brigadas y cortando la amenaza en su origen.",

    // Tactical Benchmark
    comp_tag: "Benchmark táctico",
    comp_title: "Por qué las soluciones tradicionales fallan de noche",
    comp_sub: "Análisis técnico comparativo entre satélites de órbita baja, torres térmicas fijas, vigilancia tripulada convencional y la plataforma Athene.",
    matrix_scroll_hint: "⇄ Desliza horizontalmente para comparar tecnologías",
    th_dim: "Dimensión operativa",
    th_sat: "Satélites LEO<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Torres térmicas fijas<br><span class=\"th-sub\">Mástiles ópticos</span>",
    th_drone: "Vigilancia convencional<br><span class=\"th-sub\">Avionetas diurnas + cuadrillas 4x4 / drones manuales</span>",
    strig_badge: "Nuestra arquitectura",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (plataforma VTOL + Edge AI)</span>",
    r1_dim: "Patrullaje nocturno continuo",
    r1_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Ventana ciega (1–4 h):</span> Pasos orbitales no continuos.</div><div class=\"cell-detail\">Estándar macrocontinental de día, sin cobertura continua durante los turnos nocturnos en faena.</div></div>",
    r1_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Continua pero estática:</strong> Limitada a línea visual directa.</div><div class=\"cell-detail\">Alta confiabilidad 24/7, pero limitada a la línea de vista directa (LOS) desde la torre, vulnerable a puntos ciegos tras quebradas y cerros.</div></div>",
    r1_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Sin vuelo nocturno:</span> Aeronaves en tierra por norma VFR.</div><div class=\"cell-detail\">Aeronaves tripuladas impedidas de operar de noche por DGAC. Camionetas con fatiga y &lt;12% de cobertura.</div></div>",
    r1_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Patrullaje aéreo activo:</span> Vuelo nocturno en predio piloto.</div><div class=\"cell-detail\">Operación táctica programada con operador calificado en terreno (VLOS) bajo normativa DGAC.</div></div>",
    r2_dim: "Latencia de detección y alerta",
    r2_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">30 a 90 min:</span> Descarga y cola de procesamiento orbital.</div><div class=\"cell-detail\">Tiempo acumulado entre paso del satélite, procesamiento en servidor en la nube y distribución a centrales.</div></div>",
    r2_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Instantánea pero manual:</strong> Depende de operador 24/7 en pantalla.</div><div class=\"cell-detail\">Detección óptica directa que requiere personal dedicado para verificar en video y filtrar falsas alarmas.</div></div>",
    r2_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Local en terreno:</strong> Sin retransmisión rápida si no hay 4G/5G.</div><div class=\"cell-detail\">Alerta inmediata solo para la cuadrilla en sitio; demorada a central en quebradas sin cobertura celular.</div></div>",
    r2_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Inferida en segundos:</span> Alerta a estación en ≤ 3 min.</div><div class=\"cell-detail\">Edge AI clasifica a bordo en microsegundos. Despacho de ficha sintética a la estación en ≤ 3 min desde la detección en vuelo.</div></div>",
    r3_dim: "Detección de precursores (humanos / vehículos)",
    r3_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Sin resolución:</span> Píxeles de 375 m a 1 km.</div><div class=\"cell-detail\">Diseñado para frentes de fuego activos masivos, incapaz de ver personas, fogatas tempranas o vehículos.</div></div>",
    r3_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Ángulo rasante:</span> Bloqueada por copas de árboles y relieve.</div><div class=\"cell-detail\">Ineficaz en senderos bajo dosel arbóreo denso o quebradas fuera del ángulo de inclinación del mástil.</div></div>",
    r3_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Muy limitada:</span> Camionetas restringidas a caminos.</div><div class=\"cell-detail\">Aeronaves no vuelan de noche; patrullas en camioneta solo vigilan caminos principales, dejando el interior a oscuras.</div></div>",
    r3_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Detección óptica/térmica:</span> Siluetas y calor desde 100 m.</div><div class=\"cell-detail\">Identifica anomalías térmicas y siluetas humanas en claros y senderos para autorizar disuasión antes del fuego.</div></div>",
    r4_dim: "Puntos ciegos topográficos",
    r4_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Bloqueo atmosférico:</span> Ciegas ante nubosidad o humo.</div><div class=\"cell-detail\">Afectado severamente por nubosidad baja, humo denso e inversión térmica que absorben la radiación infrarroja.</div></div>",
    r4_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Puntos ciegos críticos:</span> Invisibilidad tras cerros y laderas.</div><div class=\"cell-detail\">Sombra topográfica física insalvable tras filos, quebradas profundas y laderas opuestas.</div></div>",
    r4_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Relieve adverso:</span> Sin visión de fondo de quebrada.</div><div class=\"cell-detail\">Cuadrillas en camioneta sin línea visual en quebradas profundas; aeronaves diurnas afectadas por humo rasante.</div></div>",
    r4_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Perspectiva cenital:</span> Vuelo superior que elimina sombras.</div><div class=\"cell-detail\">Patrullaje aéreo con vista cenital sobre laderas, quebradas y caminos forestales, eliminando los puntos ciegos que ocultan las torres fijas y brigadas terrestres.</div></div>",
    r5_dim: "Riesgo humano y supervisión",
    r5_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Cero exposición directa:</strong> Operación orbital remota.</div><div class=\"cell-detail\">Vigilancia desde el espacio sin riesgo físico para personal en terreno.</div></div>",
    r5_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Baja exposición:</strong> Riesgo acotado a accesos y cumbres.</div><div class=\"cell-detail\">Operación remota desde central; riesgo limitado al mantenimiento en cumbres aisladas de difícil acceso.</div></div>",
    r5_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Alto desgaste humano:</span> Operador manual nocturno.</div><div class=\"cell-detail\">1 piloto dedicado mirando pantalla continuamente en la oscuridad por cada dron manual; brigadistas en 4x4 expuestos de noche en rutas forestales aisladas.</div></div>",
    r5_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Supervisión en tierra (HITL):</span> Operador en base segura.</div><div class=\"cell-detail\">Control y autorización de disuasión desde consola protegida, sin brigadistas expuestos en zonas de riesgo.</div></div>",
    r6_dim: "Modelo operativo y acceso",
    r6_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>SaaS macro:</strong> Suscripción de datos globales.</div><div class=\"cell-detail\">Suscripción de datos satelitales; útil para análisis macrocontinental, pero no sustituye la vigilancia y respuesta táctica directa en terreno.</div></div>",
    r6_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Alto CAPEX:</span> Inversión intensiva en infraestructura fija.</div><div class=\"cell-detail\">Alto costo inicial por torre instalada (mástil estructural, óptica militar, respaldo solar y caminos de acceso).</div></div>",
    r6_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Alto costo operativo:</span> Horas de vuelo caras y baja cobertura.</div><div class=\"cell-detail\">Costo elevado por hora de vuelo diurno y patrullas terrestres nocturnas de baja cobertura (&lt;12%).</div></div>",
    r6_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Servicio táctico llave en mano:</span> Cero carga operativa y máxima disponibilidad.</div><div class=\"cell-detail\">Modelo por servicio: vigilancia nocturna lista para operar, mantenimiento aeronáutico preventivo, disponibilidad de vuelo garantizada y actualización continua de sensores e IA sin inmovilizar capital ni cargar a sus equipos.</div></div>",
    r7_dim: "Cobertura meteorológica adversa",
    r7_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Bloqueo atmosférico:</span> Degradación por nubes y humo.</div><div class=\"cell-detail\">La radiación infrarroja espacial se atenúa drásticamente con nubosidad baja, neblina costera y humo denso.</div></div>",
    r7_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Alta resistencia:</span> Mástil fijo anclado a terreno.</div><div class=\"cell-detail\">Estructuras rígidas capaces de soportar vientos severos sostenidos y ráfagas, aunque la óptica sufre vibración con viento extremo.</div></div>",
    r7_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Ventana limitada:</span> Vuelos diurnos y rutas cortadas.</div><div class=\"cell-detail\">Avionetas en tierra ante turbulencia severa o visibilidad baja; camionetas 4x4 bloqueadas por derrumbes, ramas o niebla profunda.</div></div>",
    r7_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-warning\">En validación TRL 3:</span> Envolvente objetivo 10–12 m/s (~19–23 kt).</div><div class=\"cell-detail\">Objetivo de diseño aerodinámico para viento Puelche (~36–43 km/h / ~19–23 kt). Plataforma experimental equipada con paracaídas balístico FDIR.</div></div>",
    r8_dim: "Certificación y marco operacional",
    r8_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Sin conflicto aéreo:</span> Órbita baja no segregada.</div><div class=\"cell-detail\">Operación en el espacio exterior sin requerimiento de permisos aeronáuticos locales ante DGAC.</div></div>",
    r8_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Infraestructura privada:</span> Obra civil en predio.</div><div class=\"cell-detail\">No requiere autorizaciones de vuelo, aunque demanda permisos de obra, impacto ambiental y servidumbres de paso.</div></div>",
    r8_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Restricción VFR / VLOS:</span> Prohibición nocturna tripulada.</div><div class=\"cell-detail\">DGAC prohíbe el vuelo nocturno a baja cota para avionetas tripuladas por riesgo CFIT. Drones comerciales limitados a línea visual (VLOS).</div></div>",
    r8_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-warning\">Sujeto a proceso regulatorio:</span> Hoy VLOS en predio piloto.</div><div class=\"cell-detail\">Fase actual en línea de vista (VLOS) bajo DAN 151; escalamiento a 15 km estructurado bajo metodología de evaluación de riesgos SORA (DGAC/JARUS).</div></div>",

    // Technology - 4 Athene Pillars
    tech_tag: "Pilares del sistema Athene",
    tech_title: "Arquitectura de Misión · Plataforma Athene",
    tech_sub: "Arquitectura de alta disponibilidad y tolerancia a fallos. Procesamiento, clasificación y georreferenciación en el borde sin requerir enlace continuo a internet ni servidores en la nube.",
    p1_status_badge: "[MVP: Aeronave adaptada · TRL 3-4]",
    p1_title: "Plataforma VTOL y navegación táctica",
    p1_desc: "Aeronave híbrida con despegue vertical sin pista y crucero horizontal de ala fija. Diseñada para cubrir radios de hasta 15 km con 45–60 min de autonomía y navegación determinista bajo geocerca.",
    p1_s1_lbl: "Configuración:",
    p1_s1_val: "QuadPlane Lift + Cruise (4 motores verticales + 1 de crucero).",
    p1_s2_lbl: "Frontera C-2 (Safety):",
    p1_s2_val: "El controlador de vuelo primario retiene el 100% de la autoridad de vuelo y contención FDIR, aislado del cómputo IA.",
    p1_s3_lbl: "Criterio de diseño:",
    p1_s3_val: "Objetivo aerodinámico: resistencia a ráfagas de hasta 10–12 m/s (~36–43 km/h / ~19–23 kt, representativo de viento Puelche). Respaldo con paracaídas balístico de recuperación.",
    p1_s4_lbl: "Operación Hoy:",
    p1_s4_val: "Predio piloto privado en línea de vista (rango acotado VLOS). Objetivo: BVLOS (15 km) bajo SORA.",
    p2_status_badge: "[NVIDIA Jetson · Zero-Cloud]",
    p2_title: "Carga útil optrónica e inferencia a bordo",
    p2_desc: "Cámara biespectral con estabilización activa en 3 ejes, sensor térmico radiométrico LWIR y óptica 4K. La inferencia local procesa a bordo en microsegundos sin requerir internet ni servidores en la nube.",
    p2_s1_lbl: "Sensor Térmico:",
    p2_s1_val: "Microbolómetro LWIR radiométrico (640×512) no refrigerado + sensor óptico 4K en gimbal 3 ejes.",
    p2_s2_lbl: "Georreferenciación:",
    p2_s2_val: "Fusión computacional de GPS centimétrico (RTK) y modelo de elevación del terreno (DEM), calculando coordenadas del foco con precisión métrica en tiempo real.",
    p2_s3_lbl: "Pipeline IA:",
    p2_s3_val: "NVIDIA Jetson Orin Nano Dev Kit con aceleración TensorRT FP16 para detección de siluetas humanas y precursores térmicos.",
    p2_s4_lbl: "Precisión:",
    p2_s4_val: "Filtrado multi-frame para discriminación de falsos positivos (meta < 5%; aceptación MVP < 10%).",
    p3_status_badge: "[UHF LoRa · Resiliente off-grid]",
    p3_title: "Comunicaciones tácticas para zonas oscuras",
    p3_desc: "Arquitectura de enlace dual para operar en quebradas y faenas forestales sin cobertura celular ni internet móvil, asegurando la entrega ininterrumpida de telemetría y alertas críticas.",
    p3_s1_lbl: "Radioenlace Alerta:",
    p3_s1_val: "Transceptor UHF 902–928 MHz @ 500 mW para reporte de telemetría y vectores de alerta en zonas sin 4G.",
    p3_s2_lbl: "C2 de Seguridad:",
    p3_s2_val: "Enlace primario C2 en 2,4 GHz con diversidad de antenas para control de vuelo y telemetría crítica.",
    p3_s3_lbl: "Formato Alerta:",
    p3_s3_val: "Paquete binario comprimido con coordenadas UTM, timestamp, clase de objetivo y nivel de confianza.",
    p3_s4_lbl: "Transmisión Video:",
    p3_s4_val: "Streaming RTSP bajo demanda condicionado a disponibilidad de ancho de banda local.",
    p4_status_badge: "[Human-in-the-Loop · Auditable]",
    p4_title: "Centro de mando C2 y cadena de evidencia",
    p4_desc: "Consola táctica para supervisión humana continua, triaje de alertas y generación de Reportes Digitales con valor probatorio pericial, estampa de tiempo y anonimización de privacidad.",
    p4_s1_lbl: "Doctrina Operacional Dual (HITL):",
    p4_s1_val: "Modo Centinela Silencioso (vigilancia térmica pasiva sin emisiones acústicas ni lumínicas para evidencia legal pericial) o Modo Disuasión Activa (foco estroboscópico y sirena para frustrar la ignición en interfaz). Toda activación física requiere autorización expresa y deliberada del operador humano.",
    p4_s2_lbl: "Reporte Pericial:",
    p4_s2_val: "Generación de expediente digital de incidente con firma criptográfica, sellado de tiempo y captura biespectral para aseguradoras y fiscalía.",
    p4_s3_lbl: "Privacidad y Cumplimiento Legal:",
    p4_s3_val: "Difuminado y anonimización automática de rostros y patentes vehiculares en el borde (Edge AI Zero-Cloud) previo a la generación de fichas forenses, conforme a la Ley N° 19.628 y Ley N° 21.719.",
    p4_s4_lbl: "Operación Offline:",
    p4_s4_val: "Estación de operador con cartografía precargada localmente para despliegue autónomo en faenas remotas.",
    p4_s5_lbl: "Propiedad Intelectual:",
    p4_s5_val: "Arquitectura de sistemas, modelos de inferencia entrenados y software de misión desarrollados bajo titularidad y gobernanza exclusiva de Strig Systems SpA.",
    spec_toggle_txt: "+ Detalles",
    rm_card_hint: "+ Detalle",
    media_bench_caption: "Banco de pruebas de laboratorio: integración funcional de aviónica de vuelo redundante, computador de misión Edge AI y módulos de radioenlace táctico interconectados.",
    media_video_caption: "Procesamiento térmico en tiempo real: detección y seguimiento de anomalías calóricas y siluetas humanas mediante modelos optimizados a bordo.",
    hud_alt_tip: "Altitud relativa sobre el terreno (AGL) mediante sensor barométrico y LIDAR",
    hud_gs_tip: "Velocidad respecto al suelo (~66,6 km/h) optimizada para estabilidad del gimbal",
    hud_hdg_tip: "Rumbo magnético con triple brújula redundante compensada",
    hud_target_tip: "Clasificación local de precursor térmico y silueta humana con inferencia a bordo",
    hud_link_tip: "Enlace de telemetría y C2 activo mediante salto de frecuencia FHSS",
    hud_rtk_tip: "Posicionamiento GNSS cinemático en tiempo real con precisión centimétrica",


    // Off-Grid Tactical Datalink Architecture
    flow_tag: "Arquitectura de enlace off-grid",
    flow_title: "Cómo se cierra el circuito táctico en zonas sin señal celular",
    flow_sub: "Gran parte de los predios forestales y cordilleranos son zonas de baja cobertura. Athene opera con radioenlaces tácticos locales entre la aeronave y la estación en tierra.",
    flow_s1_title: "Aeronave VTOL (nodo aéreo)",
    flow_s1_desc: "Inferencia térmica Edge AI a bordo con NVIDIA Jetson. Detecta precursores y presencia humana, emite alertas a la estación en tierra y ejecuta retorno de emergencia ante pérdida de enlace.",
    flow_s1_badge: "Edge AI a bordo",
    flow_s1_f1_lbl: "Aviónica y cómputo:",
    flow_s1_f1_val: "Controlador de vuelo de arquitectura redundante y procesador Edge AI acoplados por enlace serie optoaislado con telemetría MAVLink v2.",
    flow_s1_f2_lbl: "Geoposicionamiento:",
    flow_s1_f2_val: "Fusión a bordo de GPS centimétrico (RTK) y modelo de elevación del terreno (DEM) para cálculo de coordenadas del foco con precisión métrica.",
    flow_c1_label: "⇄ Radioenlace FHSS 915 MHz (Línea de Vista)",
    flow_s2_title: "Estación de operador (terreno)",
    flow_s2_desc: "Recepción táctica de alertas y telemetría en tiempo real. El operador evalúa y autoriza la activación del foco disuasivo y sirena desde una posición segura.",
    flow_s2_badge: "Supervisión humana (HITL)",
    flow_s2_f1_lbl: "Consola táctica:",
    flow_s2_f1_val: "Laptop IP65 rugerizada para faenas forestales con cartografía vectorial offline precargada.",
    flow_s2_f2_lbl: "Autorización HITL:",
    flow_s2_f2_val: "Doble confirmación de seguridad en consola antes de activar el foco o sirena disuasiva.",
    flow_c2_label: "⇄ Enlace Red Local / IP Disponible",
    flow_s3_title: "Central de despacho y coordinación del partner",
    flow_s3_desc: "Recepción de fichas de alerta georreferenciadas y logs de misión para coordinación de brigadas y auditoría (integración GIS / Webhook).",
    flow_s3_badge: "Integración operacional",
    flow_s3_f1_lbl: "Interoperabilidad proyectada:",
    flow_s3_f1_val: "Objetivo de arquitectura: exportación de datos en formatos abiertos (GeoJSON / KML / REST API) proyectada para compatibilidad futura con sistemas GIS y centrales de despacho forestal (ArcGIS, QGIS).",
    flow_s3_f2_lbl: "Trazabilidad legal:",
    flow_s3_f2_val: "Ficha de incidente con estampa de tiempo y coordenadas verificadas para trazabilidad pericial.",

    // Roadmap
    roadmap_tag: "Roadmap",
    roadmap_title: "Estado del proyecto y próximos hitos",
    roadmap_sub: "Desarrollo riguroso por etapas verificables. Diferenciamos lo que está resuelto hoy, los ensayos en marcha y los objetivos de escalamiento industrial.",
    rm1_phase: "Estado actual · TRL 3",
    rm1_title: "Diseño de sistema y prototipo en análisis",
    rm1_desc: "Requisitos de ingeniería, arquitectura de sistemas y plan de pruebas definidos. Validación de concepto analítico y selección de componentes críticos.",
    rm2_phase: "Oct – dic 2026 · Ensayos",
    rm2_title: "Plataforma multirrotor y demo técnica",
    rm2_desc: "Integración de aviónica, sensores y Edge AI en una plataforma multirrotor adaptada para la primera demostración técnica funcional y validación de procesamiento en terreno (diciembre 2026 – enero 2027).",
    rm3_phase: "Feb 2027 · Simulación",
    rm3_title: "Validación human-in-the-loop (HITL)",
    rm3_desc: "Pruebas en entorno simulado de la interfaz de operador táctico, protocolo de autorización de foco/sirena y cadena de decisión en tiempo real.",
    rm4_phase: "Jun 2027 · Validación en terreno",
    rm4_title: "Validación técnica y operacional en terreno",
    rm4_desc: "Campaña de vuelos diurnos y nocturnos con aeronave VTOL adaptada desplegada desde bases de brigadas o pistas forestales existentes (recambio rápido de baterías en tierra). En esta fase la plataforma Athene ya entrega valor operativo real de detección y alerta temprana en predio privado (VLOS), antes de requerir estaciones robóticas automatizadas.",
    rm5_phase: "Visión a futuro",
    rm5_title: "Aeronave VTOL Noctua™, Nest automatizado y BVLOS",
    rm5_desc: "Evolución de plataforma: integración o diseño de la aeronave VTOL Noctua™ con autonomía extendida y resistencia al viento, estación robotizada Nest para escalamiento a supervisión de flotas 1:N (un operador para múltiples aeronaves sin personal en terreno), enlaces satelitales de respaldo y radio extendido de 15 km bajo certificación BVLOS.",

    // Pilot / Validation Program
    pilot_tag: "Validación en terreno",
    pilot_title: "Programa de validación conjunta 2026-27",
    pilot_sub: "Estructurado en 4 fases metodológicas para empresas forestales, mineras e instituciones que buscan co-diseñar y verificar en terreno la efectividad de la vigilancia nocturna.",
    ph1_title: "Levantamiento territorial y coordinación",
    ph1_desc: "Definición de predios prioritarios, levantamiento de zonas ciegas y coordinación con equipos de protección patrimonial y despacho.",
    ph2_title: "Calibración sensorial en terreno",
    ph2_desc: "Validación de firmas térmicas en condiciones reales, comprobación de radioenlace off-grid y calibración de umbrales radiométricos.",
    ph3_title: "Ensayos nocturnos y patrullaje activo",
    ph3_desc: "Vuelos programados en la brecha nocturna con transmisión táctica local e integración asistida con el operador en tierra.",
    ph4_title: "Auditoría y retorno operativo conjunto",
    ph4_desc: "Evaluación conjunta de tiempos de respuesta, falsas alarmas filtradas, horas de vuelo ahorradas e integración con la central del cliente.",

    // Territorial Criteria (Validation Cohort)
    crit_badge: "Requisitos y priorización",
    crit_title: "Criterios de selección para predios piloto 2026-27",
    crit_sub: "Buscamos optimizar la campaña de validación en entornos que presenten la mayor necesidad táctica y condiciones operativas seguras.",
    crit1_title: "Interfaz urbano-forestal",
    crit1_desc: "Predios colindantes con comunidades, infraestructura crítica o caminos públicos de alto tránsito.",
    crit2_title: "Historial de recurrencia",
    crit2_desc: "Zonas con registro histórico de focos o actividad sospechosa en turnos nocturnos.",
    crit3_title: "Infraestructura base",
    crit3_desc: "Acceso a base de brigadas, aeródromo o helipista con energía para recambio rápido de baterías.",
    crit4_title: "Zona centro-sur",
    crit4_desc: "Enfoque prioritario en las regiones del Maule, Ñuble, Biobío, Araucanía y Los Ríos.",

    // Operational Impact Framework
    impact_badge: "Modelo de impacto operacional",
    impact_title: "Valor operacional en la brecha crítica",
    impact_sub: "Enfoque cualitativo centrado en la reducción del riesgo humano y el daño territorial, sin promesas comerciales arbitrarias en fase de prototipo.",
    imp1_title: "Seguridad nocturna y menor exposición innecesaria",
    imp1_desc: "Evita el desplazamiento a ciegas de brigadistas y cuadrillas terrestres en camionetas 4x4 por caminos forestales y quebradas aisladas durante la noche. El reconocimiento aéreo confirma o descarta la amenaza antes de movilizar personal.",
    imp2_title: "Detección previa y disuasión autorizada",
    imp2_desc: "Detección óptica y térmica de actividad humana no autorizada visible desde 100 m de altura. Ante una anomalía, el operador humano en tierra puede autorizar la activación del foco destellante de alta intensidad y la sirena acústica para disuadir antes de la ignición.",
    imp3_title: "Optimización del ataque aéreo al amanecer",
    imp3_desc: "Al georreferenciar y contener focos o fogatas tempranas en plena noche, se entrega a las centrales de despacho información precisa de coordenadas y perímetro, evitando horas críticas de vuelo de aviones y helicópteros cisterna al inicio del día.",

    // Cost of Inaction (Loss Aversion)
    cost_badge: "[DIAGNÓSTICO OPERACIONAL · COSTO DE INACCIÓN]",
    cost_title: "La diferencia crítica entre las 02:00 AM y las 07:00 AM",
    scen1_time: "02:00 AM · DETECCIÓN TÉRMICA ATHENE",
    scen1_head: "Contención temprana en fase precursora",
    scen1_p: "Inferencia Edge AI local a bordo y alerta con coordenadas precisas. Se neutraliza la amenaza con 1 patrulla ligera o disuasión acústica/lumínica autorizada. Cero hectáreas arrasadas y cero brigadistas expuestos en quebradas a ciegas.",
    scen1_metric: "Impacto: Contención inmediata · Riesgo bajo control",
    scen2_time: "07:00 AM · SIN VIGILANCIA NOCTURNA",
    scen2_head: "Ignición descontrolada durante 5 horas",
    scen2_p: "El fuego avanza toda la noche al amparo del viento de ladera. Al amanecer, se requieren múltiples aviones cisterna, helicópteros pesados, corte de rutas productivas y millones en pérdidas patrimoniales y responsabilidad civil.",
    scen2_metric: "Impacto: Emergencia desatada · Despacho aéreo masivo",

    // IaaS Operational Framework
    iaas_tag: "Adaptación de misión y servicio (IaaS)",
    iaas_title: "Adaptación de plataforma y principios del servicio (IaaS)",
    iaas_sub: "Trabajamos de forma colaborativa para calibrar sensores, adaptar la aeronave a las variables críticas de cada faena y operar sin compra de flotas ni pasivos de capital.",
    iaas_p1_title: "Servicio llave en mano sin compra de aeronaves",
    iaas_p1_desc: "Sin adquisición de drones, depreciación ni riesgo aeronáutico interno. Vuelos ejecutados y supervisados en terreno por personal calificado de Strig Systems bajo estándar DGAC. El partner solo contrata el servicio de cobertura táctica.",
    iaas_p2_title: "Adaptación de carga útil y calibración continua",
    iaas_p2_desc: "Configuramos sensores y algoritmos térmicos según las variables críticas de su predio o faena. Strig Systems asume el mantenimiento, reposición de baterías y actualización de software a bordo.",
    iaas_p3_title: "Seguridad operacional y marco normativo",
    iaas_p3_desc: "Vuelos ejecutados bajo estándares estrictos de seguridad operacional conforme a normativa DGAC DAN 151 / DAN 91 para vuelos de prueba y validación segregada en predio privado.",

    // Pilot Callout Bar
    callout_title: "Convocatoria de validación 2026-27",
    callout_desc: "Cupos limitados por temporada en la Macrozona Centro-Sur para empresas forestales e industriales que deseen co-diseñar y evaluar la factibilidad en terreno.",
    callout_cta: "Sumarse al programa de validación",
    callout_briefing: "Agendar briefing técnico (15 min)",
    callout_brief_pdf: "Executive Brief (PDF)",

    // FAQ Section
    faq_tag: "Preguntas frecuentes",
    faq_title: "Criterios técnicos, operacionales y límites del sistema",
    faq_sub: "Límites operacionales actuales, condiciones de vuelo y respuestas claras para equipos técnicos y gerencias de protección.",
    faq_q1: "¿Cómo opera la visión térmica ante humo denso o niebla?",
    faq_a1: "La banda infrarroja LWIR (8–14 µm) penetra humo óptico no ionizado y partículas en suspensión que bloquean por completo las cámaras visuales. Sin embargo, no lo resuelve todo: en presencia de niebla densa (dispersión Mie por gotas de agua) o condiciones meteorológicas que reduzcan la visibilidad mínima requerida bajo reglas VLOS, la operación de vuelo se suspende por estrictos protocolos de seguridad operacional.",
    faq_q2: "¿Cuál es el objetivo de diseño para la envolvente de viento?",
    faq_a2: "Como objetivo de diseño aerodinámico para la plataforma experimental, se apunta a una envolvente capaz de tolerar ráfagas de hasta 10–12 m/s (~36–43 km/h / ~19–23 kt), representativas de las condiciones estivales y de viento Puelche en la Macrozona Centro-Sur. En los ensayos actuales de validación (TRL 3-4), ante ráfagas que comprometan los márgenes de seguridad en predio piloto, el protocolo operacional ordena descenso y aborto preventivo inmediato.",
    faq_q3: "¿Cómo se gestionan las falsas alarmas térmicas causadas por rocas o ganado?",
    faq_a3: "El pipeline de Edge AI integra algoritmos de discriminación multi-frame y umbrales radiométricos de gradiente térmico (meta de diseño < 5% falsas alarmas; criterio de aceptación de MVP < 10%). Además, la plataforma opera bajo supervisión humana (Human-in-the-Loop): toda alerta emitida a la estación en tierra debe ser revisada visualmente por el operador antes de activar medidas de disuasión o despacho.",
    faq_q4: "¿Quién es responsable de la operación y el pilotaje en terreno?",
    faq_a4: "Durante el Programa de Validación 2026-27, todos los vuelos son ejecutados y supervisados en terreno por personal calificado de Strig Systems bajo certificación y normativa aeronáutica chilena (DAN 151 / DAN 91). El cliente o partner territorial no requiere pilotos propios ni asume responsabilidad técnica sobre la aeronave.",
    faq_q5: "¿Qué alcance y capacidades NO tiene el sistema hoy?",
    faq_a5: "Con total transparencia: hoy el sistema no opera vuelos más allá de la línea de vista visual (BVLOS), no cuenta con estación de acople automatizada no asistida, ni ofrece un radio de 15 km de servicio comercial. Actualmente nos encontramos en TRL 3 realizando ensayos controlados en predio piloto privado en rango acotado bajo reglas de línea de vista visual (VLOS). Dichas capacidades forman parte de la visión y hoja de ruta futura.",
    faq_q6: "¿Cómo opera la recarga de energía y logística en predios forestales remotos?",
    faq_a6: "En la fase actual de validación y despliegue temprano, no dependemos de costosas estaciones robóticas off-grid no probadas. Operamos de forma pragmática aprovechando la infraestructura existente de las empresas e instituciones: bases de brigadas terrestres, helipistas o pistas de aviación tripulada que ya cuentan con energía y perímetro seguro. El equipo en tierra realiza recambios rápidos de baterías (hot-swap) entre misiones consecutivas. A futuro, este aprendizaje en terreno guiará el diseño e instalación de las estaciones de acople y recarga autónoma (Nest).",
    faq_q7: "¿Cómo se proyecta la integración con centrales de despacho y software GIS existente?",
    faq_a7: "Aunque actualmente nos encontramos en fase experimental (TRL 3), la arquitectura de datos se diseña bajo estándares abiertos. La hoja de ruta técnica contempla la exportación de alertas y telemetría en formatos normalizados (GeoJSON, KML y API REST) para facilitar la interoperabilidad futura con centrales de monitoreo forestal (Arauco, CMPC, CONAF) sin imponer software cerrado ni silos de información.",
    faq_q8: "¿En qué se diferencia Athene de adquirir un dron comercial con cámara térmica?",
    faq_a8: "Un dron comercial convencional (multirrotor tipo quadcopter) requiere un piloto humano con radiocontrol mirando activamente una pantalla en la oscuridad durante 25–30 minutos de batería, con alcance acotado y alto riesgo de fatiga. Athene se concibe como una plataforma autónoma de ala fija/VTOL diseñada para patrullaje nocturno continuo de largo alcance (25+ km / 90+ min), con inferencia Edge AI a bordo (Zero-Cloud). La aeronave procesa el espectro térmico en vuelo y solo alerta al operador ante precursores reales (doctrina Human-in-the-Loop), multiplicando la cobertura territorial sin desgastar cuadrillas humanas en terreno.",

    // Alliances & R&D
    alliances_tag: "Ecosistema y tracción",
    alliances_title: "Validación industrial y ecosistema",
    alliances_sub: "Combinamos ingeniería aeroespacial rigurosa con validación en terreno y contraste activo con actores clave del sector forestal y espacial.",
    p_corfo: "Proyecto Semilla Inicia CORFO",
    p_udec: "Apoyo de la UdeC",
    p_industry: "Validación de problema con gerentes de protección patrimonial",
    p_thermal: "Validación con ecosistema de detección térmica satelital",
    collab1_head: "Inversionistas y fondos deep tech",
    collab1_p: "Apertura a conversaciones con fondos de capital de riesgo enfocados en robótica aérea, dual-use, mitigación climática y tecnologías de defensa territorial.",
    collab2_head: "Centros de investigación y academia",
    collab2_p: "Cooperación técnica en visión computacional nocturna, algoritmos de detección en humo denso y modelos aerodinámicos de alta eficiencia.",
    collab3_head: "Agencias públicas y municipalidades",
    collab3_p: "Modelos de colaboración B2G para protección de comunidades en la interfaz urbano-forestal y optimización de presupuestos de emergencia.",

    // Team
    team_tag: "Equipo fundador",
    team_title: "Ingeniería aeroespacial y operaciones tácticas",
    team_sub: "5 ingenieros civiles aeroespaciales de la Universidad de Concepción, combinando diseño aeronáutico, visión computacional, combate de incendios en primera línea y certificación aeronáutica.",
    bio_tomas: "Ingeniero Civil Aeroespacial • Visión Computacional, Machine Learning y CAD/CAM.",
    bio_carlos: "Bombero Operativo • Ingeniero Civil Aeroespacial. Análisis CFD, logística operacional y arquitectura de interfaz táctica.",
    bio_ananda: "Ingeniera Civil Aeroespacial • Integración y ensayos de vuelo RPAS, CAD, análisis estructural (FEA) y CFD.",
    bio_richard: "Ingeniero Civil Aeroespacial • Ingeniería de sistemas, aseguramiento normativo, control de calidad y certificación aeronáutica.",
    bio_pablo: "Ingeniero Civil Aeroespacial • Arquitectura de sistemas, lógica e integración de flujo de datos, validación y verificación.",
    bio_advisor: "PhD Space Systems Engineering and Management. Asesor senior en arquitectura de sistemas espaciales y escalamiento aeroespacial.",

    // CTA
    cta_tag: "Contacto estratégico",
    cta_title: "Coordinemos una evaluación territorial",
    cta_desc: "Si representas a una empresa con activos territoriales de alto valor, un consorcio de respuesta a emergencias o un fondo de inversión, nuestro equipo técnico responderá directamente tu requerimiento.",
    cta_btn1: "Sumarse al programa de validación",
    cta_btn_brief: "Ver Dossier Técnico Ejecutivo",
    cta_btn2: "Consultar por alianzas e inversión",

    // Contact Modal & Intent Selector
    intent_tab_pilot: "Validación territorial (2026-27)",
    intent_tab_briefing: "Briefing técnico (15 min)",
    intent_tab_alliances: "I+D & Alianzas",
    modal_badge: "Validación territorial 2026-27",
    modal_title: "Sumarse al programa de validación 2026-27",
    modal_sub: "Completa los datos de tu entidad para evaluar conjuntamente la factibilidad territorial y requerimientos de validación en terreno.",
    alliances_badge: "Ecosistema & Inversión",
    alliances_modal_title: "Alianzas de I+D e inversión estratégica",
    alliances_modal_sub: "Contacto directo con el equipo fundador para fondos de capital deep tech, centros de investigación aeroespacial o cooperación técnico-operacional.",
    f_alliance_type_label: "Tipo de colaboración *",
    opt_alliance_1: "Fondo de inversión / Venture Capital",
    opt_alliance_2: "Centro de I+D / Cooperación académica",
    opt_alliance_3: "Agencia pública / Municipalidad / B2G",
    f_submit_alliances: "Enviar propuesta de alianza",
    f_name_label: "Nombre y apellido *",
    f_name_ph: "Ej: Marcela Soto",
    f_email_label: "Correo corporativo o institucional *",
    f_email_ph: "nombre@empresa.cl",
    f_company_label: "Empresa u organización *",
    f_company_ph: "Ej: Forestal / Minera / Institución",
    f_phone_label: "Teléfono / WhatsApp (opcional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Región territorial *",
    f_region_default: "Selecciona una región...",
    f_reg_biobio: "Región del Biobío",
    f_reg_araucania: "Región de La Araucanía",
    f_reg_maule: "Región del Maule",
    f_reg_nuble: "Región de Ñuble",
    f_reg_rios: "Región de Los Ríos",
    f_reg_lagos: "Región de Los Lagos",
    f_reg_valparaiso: "Región de Valparaíso",
    f_reg_metro: "Región Metropolitana",
    f_reg_other: "Otra región de Chile",
    f_reg_intl: "Internacional (fuera de Chile)",
    f_interest_label: "Tipo de interés *",
    f_interest_default: "Selecciona el tipo de interés...",
    opt_interest_1: "Programa de validación técnica (forestal / industrial)",
    opt_interest_2: "Alianzas de I+D y validación técnica",
    opt_interest_3: "Inversión y fondos de capital deep tech",
    opt_interest_4: "Consulta general y demostración técnica",
    f_message_label: "Detalles adicionales o necesidad específica (opcional)",
    f_message_ph: "Describe brevemente el tipo de predio, zona geográfica o consulta técnica...",
    f_submit_btn: "Enviar solicitud de validación",
    f_submitting: "Enviando solicitud...",
    f_privacy: "Tus datos serán tratados bajo estricta confidencialidad técnica (NDA disponible).",
    f_consent_label: "Acepto el tratamiento de mis datos de contacto para la evaluación técnica de la validación y declaro conocer los <a href=\"terms.html\" target=\"_blank\" class=\"legal-inline-link\">Términos de Servicio B2B</a> y la <a href=\"privacy.html\" target=\"_blank\" class=\"legal-inline-link\">Política de Privacidad</a> (Ley N° 19.628 / Ley N° 21.719).",
    form_val_error: "Por favor completa todos los campos obligatorios (*) con un formato válido.",
    form_error_msg: "Hubo un problema al enviar la solicitud. Puedes escribirnos directamente a",
    success_title: "¡Postulación Recibida con Éxito!",
    success_desc: "Hemos recibido los antecedentes de tu entidad. Nuestro equipo de ingeniería aeroespacial revisará la factibilidad territorial y se contactará directamente dentro de 24 horas hábiles.",
    success_close_btn: "Cerrar Ventana",

    // Briefing Modal (15 min)
    briefing_badge: "Ingeniería y operaciones",
    briefing_modal_title: "Agendar briefing técnico de 15 minutos",
    briefing_modal_sub: "Conversación técnica directa con Tomás Medina (Technical Lead): evaluamos el relieve y la topografía de tus predios, viabilidad de radioenlace y requerimientos de integración territorial.",
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
    brief_doc_print: "Imprimir / Guardar como PDF",
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Vigilancia Territorial Autónoma Nocturna",
    eb_h1: "Inteligencia Aérea Autónoma para la Brecha Nocturna de Incendios",
    eb_summary: "Athene aborda la brecha nocturna mediante la aeronave autónoma VTOL Noctua (validación inicial sobre plataforma adaptada), inferencia térmica Edge AI a bordo (NVIDIA Jetson) y telemetría táctica FHSS 915 MHz, sustituyendo la exposición terrestre a ciegas y optimizando el despacho aéreo al amanecer.",
    eb_b1_title: "1. El Problema Operacional",
    eb_b1_p1: "<strong>Ventana ciega nocturna:</strong> La aviación tripulada combate de día, pero no vuela de noche por normativa DGAC y riesgo de choque con el relieve (CFIT).",
    eb_b1_p2: "<strong>99,7% de origen humano:</strong> La casi totalidad de los incendios derivan de acción humana intencional o negligente (Fuente: CONAF).",
    eb_b1_p3: "<strong>Puntos ciegos terrestres:</strong> Patrullas en 4x4 cubren &lt; 12% del predio, ciegas ante quebradas y rodales interiores donde se inician fogatas y focos intencionales.",
    eb_b2_title: "2. Solución Tecnológica",
    eb_b2_p1: "<strong>Aeronave VTOL Noctua™:</strong> Validación inicial sobre plataforma adaptada; autonomía de diseño 45–60 min y despegue vertical sin pista hacia la célula VTOL dedicada.",
    eb_b2_p2: "<strong>Edge AI Zero-Cloud a Bordo:</strong> Cómputo local NVIDIA Jetson; detección térmica en segundos sin conexión a internet ni señal celular.",
    eb_b2_p3: "<strong>Disuasión con Autorización Humana:</strong> Activación de foco de alta intensidad y sirena acústica siempre autorizada por el operador en tierra (Human-in-the-Loop).",
    eb_b3_title: "3. Modelo de Impacto Operacional IaaS",
    eb_b3_p1: "<strong>Seguridad del Personal:</strong> Cero exposición humana innecesaria en quebradas y caminos aislados en horario nocturno crítico.",
    eb_b3_p2: "<strong>Detección Temprana & Disuasión:</strong> Detección de actividad humana a 100 m de altura y disuasión autorizada por el operador antes de la ignición.",
    eb_b3_p3: "<strong>Optimización al Amanecer:</strong> Georreferenciación temprana de coordenadas y perímetro que ahorra horas críticas de combate aéreo al inicio del día.",
    eb_b4_title: "4. Programa de Validación 2026-27",
    eb_b4_p1: "<strong>Estado Actual TRL 3:</strong> Proyecto Semilla Inicia CORFO, apoyo UdeC y demostración técnica programada en Gearbox (Enero 2027).",
    eb_b4_p2: "<strong>Campaña en Predio Piloto:</strong> 4 fases metodológicas (Levantamiento, Calibración, Vigilancia Nocturna, Auditoría Operacional).",
    eb_b4_p3: "<strong>Gobernanza & Contacto:</strong> Modelos y software bajo titularidad exclusiva de Strig Systems SpA • Tomás Medina (Technical Lead) | <code>contacto@strigsystems.tech</code>",

    // Footer
    footer_tagline: "Desarrollo de sistemas aéreos autónomos e inteligencia computacional para la mitigación anticipada de riesgos críticos.",
    f_nav: "Navegación",
    f_corp: "Corporativo",
    f_privacy_link: "Política de Privacidad & Gobernanza",
    f_terms_link: "Términos de Servicio & Pilotaje B2B",

    // Subpage: Venture (/venture.html)
    v_back_home: "← Volver al Centro de Comando",
    v_nav_market: "Mercado",
    v_nav_moat: "Foso Tecnológico",
    v_nav_traction: "Tracción",
    v_nav_model: "Modelo & Capital",
    v_nav_team: "Equipo",
    v_nav_cta: "Contactar Inversión",
    v_hero_eyebrow: "DOSSIER DE INVERSIÓN // STRIG SYSTEMS SpA",
    v_hero_title_1: "Infraestructura centinela autónoma",
    v_hero_title_2: "para la protección forestal e industrial.",
    v_hero_sub: "Strig Systems desarrolla sistemas aéreos no tripulados de largo alcance e inferencia térmica Edge AI para resolver la brecha nocturna de incendios, donde la aviación tripulada está impedida de operar por seguridad y normativa DGAC.",
    v_cta_pitch: "Agendar briefing técnico (15 min)",
    v_cta_brief: "Executive Brief (PDF)",
    v_mkt_tag: "Oportunidad de mercado",
    v_mkt_title: "Dimensionamiento de mercado y brecha de capital",
    v_mkt_sub: "Pérdidas multimillonarias recurrentes en la Macrozona Centro-Sur y una demanda no resuelta de vigilancia nocturna continua.",
    v_mkt_pending_tag: "[ESTIMACIÓN PRELIMINAR // PENDIENTE DE VALIDACIÓN CON EQUIPO FUNDADOR]",
    v_mkt_pending_desc: "Métricas macrosectoriales y proyecciones de superficie estimadas para modelación inicial, en proceso de calibración y verificación con datos primarios de la campaña piloto.",
    v_mkt_preliminary_badge: "[CALIBRACIÓN EN CURSO]",
    v_tam_tag: "TAM · MERCADO TOTAL DISPONIBLE",
    v_tam_val: "2.4 MM ha",
    v_tam_title: "Plantaciones forestales comerciales en Chile",
    v_tam_desc: "Superficie total de plantaciones productivas (Arauco, CMPC y medianos propietarios) en permanente exposición a incendios catastróficos estacionales.",
    v_sam_tag: "SAM · MERCADO ALCANZABLE",
    v_sam_val: ">1.5 MM ha",
    v_sam_title: "Grandes tenencias en Macrozona Centro-Sur",
    v_sam_desc: "Empresas e industrias con clústeres forestales continuos >10.000 ha en Biobío, Ñuble, Maule y La Araucanía con presupuestos activos de protección patrimonial.",
    v_som_tag: "SOM · MERCADO OBJETIVO TEMPRANO",
    v_som_val: "50.000 ha",
    v_som_title: "Campaña de validación 2026-27",
    v_som_desc: "2 a 3 predios piloto privados de alta prioridad para demostración operacional en terreno, calibración de IA y levantamiento de contratos IaaS plurianuales.",
    v_inaction_tag: "COSTO DE INACCIÓN",
    v_inaction_val: "US$ 150M+",
    v_inaction_title: "Gasto anual en combate y daños directos",
    v_inaction_desc: "Inversión pública y privada combinada en temporadas severas. Patrullas terrestres 4x4 cubren &lt;12% del territorio y no tienen visibilidad en quebradas.",
    v_moat_tag: "Foso defensivo & tecnología",
    v_moat_title: "Por qué nuestra arquitectura es difícil de replicar",
    v_moat_sub: "Cuatro vectores de diferenciación estructural frente a drones comerciales de consumo y satélites espaciales.",
    v_m1_meta: "FOSO 01 // AUTONOMÍA & DOCTRINA",
    v_m1_title: "Centinela autónomo vs Drones manuales",
    v_m1_desc: "Un dron comercial quadcopter exige un piloto humano dedicado mirando una pantalla en la oscuridad durante 25 min de batería. Athene ejecuta misiones autónomas preprogramadas con despegue/aterrizaje vertical (VTOL) y solo escala alertas clasificadas al operador humano (Human-in-the-Loop).",
    v_m1_diff: "Ventaja: 1 operador puede supervisar N aeronaves en consola segura, eliminando fatiga y riesgos nocturnos.",
    v_m2_meta: "FOSO 02 // CÓMPUTO EN EL BORDE",
    v_m2_title: "Edge AI Zero-Cloud vs Dependencia satelital",
    v_m2_desc: "La inferencia térmica radiométrica LWIR corre localmente a bordo en procesadores de bajo consumo (NVIDIA Jetson). No dependemos de enlaces 4G/5G ni servidores en la nube para clasificar un conato o silueta en microsegundos dentro de quebradas sin cobertura celular.",
    v_m2_diff: "Ventaja: Cero latencia de enlace y resiliencia ante cortes intencionales de fibra o señal.",
    v_m3_meta: "FOSO 03 // VENTANA OPERACIONAL",
    v_m3_title: "Especialización nocturna vs Vuelo diurno",
    v_m3_desc: "La aviación tripulada de combate tiene prohibido operar de noche por normativa DGAC y riesgo de colisión contra relieve (CFIT). Diseñamos específicamente para la ventana 00:00–06:00 AM, momento donde se gesta la mayor intencionalidad y los vientos secos aceleran conatos desatendidos.",
    v_m3_diff: "Ventaja: Dominio exclusivo de la ventana crítica donde las empresas hoy están 100% ciegas.",
    v_m4_meta: "FOSO 04 // DATA MOAT PROPIETARIO",
    v_m4_title: "Banco propietario de firmas térmicas",
    v_m4_desc: "Cada hora de patrullaje en faena forestal real alimenta nuestro dataset propietario de radiometría infrarroja bajo dosel arbóreo sudamericano, falsos positivos de biomasa caliente (rocas, animales, faena diurna remanente) y perfiles de propagación.",
    v_m4_diff: "Ventaja: Un competidor extranjero que compre un dron comercial no posee el dataset entrenado para bosques chilenos.",
    v_trac_tag: "Tracción & Hitos",
    v_trac_title: "De la concepción aeroespacial a la validación en faena",
    v_trac_sub: "Hoja de ruta respaldada institucionalmente por CORFO y la Universidad de Concepción.",
    v_t1_date: "Octubre 2025",
    v_t1_title: "Constitución y Fundación de Strig Systems SpA",
    v_t1_desc: "Fundada por 5 ingenieros civiles aeroespaciales de la Universidad de Concepción tras identificar la brecha operativa en el combate de incendios forestales.",
    v_t2_date: "Noviembre 2025",
    v_t2_title: "Adjudicación Semilla Inicia CORFO",
    v_t2_desc: "Financiamiento de validación técnica y comercial de rápida implementación para la plataforma Athene.",
    v_t3_date: "Diciembre 2025 – Marzo 2026",
    v_t3_title: "Entrevistas de Discovery y Validación de Problema",
    v_t3_desc: "Validación técnica con gerentes de protección patrimonial de empresas forestales líderes (Arauco) y contraste con el ecosistema térmico satelital (OroraTech / Everseek).",
    v_t4_date: "Activo 2026",
    v_t4_title: "Incubación y Aceleración en Gearbox UdeC",
    v_t4_desc: "Ingreso al programa de aceleración de la Facultad de Ingeniería UdeC. Desarrollo experimental y banco de pruebas de aviónica y visión térmica.",
    v_t5_date: "Enero 2027 (Próximo)",
    v_t5_title: "Demo Day Gearbox — Vuelo Experimental TRL 3",
    v_t5_desc: "Demostración de vuelo y clasificación autónoma de fuentes térmicas ante el jurado internacional (Chris Klaus, Fusen World) e inversionistas.",
    v_t6_date: "Junio 2027 (Proyectado)",
    v_t6_title: "Campaña en Predio Piloto Privado Forestal",
    v_t6_desc: "Validación operacional nocturna en terreno real junto a empresa forestal colaboradora bajo régimen de vuelo acotado VLOS.",
    v_biz_tag: "Modelo de negocio & Gobernanza",
    v_biz_title: "Intelligence as a Service (IaaS)",
    v_biz_sub: "Alineación de incentivos sin barreras de entrada de capital para la industria.",
    v_b1_title: "Suscripción de patrullaje nocturno",
    v_b1_desc: "Cobro recurrente por ciclo de protección y horas de vuelo programadas. Cero adquisición de flotas aéreas por parte del cliente.",
    v_b2_title: "Modelo por negociar en fase piloto",
    v_b2_desc: "Para la campaña 2026-27, el modelo se estructura a medida según el tamaño del predio, la topografía y los requerimientos de despacho de la empresa colaboradora.",
    v_posture_badge: "[RONDA & CAPITAL // TRL 3]",
    v_posture_title: "Postura frente al capital e inversores",
    v_posture_p: "Actualmente nos encontramos financiados por el fondo Semilla Inicia de CORFO y respaldados por la Universidad de Concepción. Strig Systems no se encuentra en ronda activa de levantamiento de capital en este momento, pero mantenemos conversaciones abiertas con fondos de Venture Capital especializados (robótica, dual-use, mitigación climática), syndicates e inversionistas ángel estratégicos que deseen vincularse temprano de cara al Demo Day de enero 2027 y la ronda Seed de escalamiento 2027.",
    v_posture_cta: "Conversar con el equipo fundador",
    v_team_tag: "Equipo fundador",
    v_team_title: "Ingeniería aeroespacial con mentalidad de ejecución",
    v_team_sub: "5 ingenieros civiles aeroespaciales de la Universidad de Concepción que dominan aviónica, control determinista, estructuras y visión artificial.",
    v_bio_tomas: "Ingeniero Civil Aeroespacial • Visión Computacional, Machine Learning, CAD/CAM e Ingeniería de Sistemas.",
    v_bio_carlos: "Bombero Operativo • Ingeniero Civil Aeroespacial. Análisis CFD, logística operacional y arquitectura de interfaz táctica.",
    v_bio_ananda: "Ingeniera Civil Aeroespacial • Integración y ensayos de vuelo RPAS, CAD, análisis estructural (FEA) y CFD.",
    v_bio_richard: "Ingeniero Civil Aeroespacial • Ingeniería de sistemas, aseguramiento normativo, control de calidad y certificación aeronáutica.",
    v_bio_pablo: "Ingeniero Civil Aeroespacial • Arquitectura de sistemas, lógica e integración de flujo de datos, validación y verificación.",
    team_adv_badge: "ADVISOR TÉCNICO",
    v_bio_advisor: "PhD Space Systems Engineering and Management. Asesor en arquitectura de misión y desarrollo de tecnología aeroespacial.",
    v_cta_sec_tag: "Alianzas & Inversión",
    v_cta_sec_title: "Conversemos sobre el futuro de la vigilancia autónoma",
    v_cta_sec_sub: "Estamos disponibles para coordinar un briefing técnico de 15 minutos o compartir el One-Pager ejecutivo con fondos e inversionistas estratégicos.",

    // Subpage: Programa de Validación (/programa.html)
    p_back_home: "← Volver al Centro de Comando",
    p_nav_benchmark: "Benchmark",
    p_nav_protocol: "Protocolo 02:00 AM",
    p_nav_methodology: "Metodología",
    p_nav_criteria: "Criterios Predio",
    p_nav_iaas: "Modelo IaaS",
    p_nav_faq: "FAQ",
    p_nav_cta: "Postular Predio Piloto",
    p_hero_eyebrow: "PROGRAMA DE VALIDACIÓN TERRITORIAL 2026-27 // CO-INNOVACIÓN FORESTAL",
    p_hero_title_1: "Validación operacional de vigilancia aérea nocturna",
    p_hero_title_2: "en predio piloto privado forestal.",
    p_hero_sub: "Invitamos a gerencias de protección patrimonial y operaciones forestales a validar en terreno la plataforma centinela Athene bajo régimen de vuelo acotado VLOS, reduciendo el riesgo humano y anticipando igniciones en la brecha 00:00–06:00 AM.",
    p_cta_apply: "Postular predio a validación 2026-27",
    p_cta_brief: "Executive Brief (PDF)",
    p_c1_title: "Ventana ciega nocturna",
    p_c1_body: "La aviación tripulada combate de día pero está legal y operativamente en tierra de noche por riesgo de colisión contra relieve (CFIT). Los conatos crecen sin contención hasta el amanecer.",
    p_c2_title: "Puntos ciegos terrestres",
    p_c2_body: "Las patrullas en camioneta 4x4 cubren &lt; 12% del predio, limitadas a caminos transitables y ciegas ante fondos de quebrada y rodales densos donde se inician las fogatas y focos intencionales.",
    p_c3_title: "Exposición innecesaria del personal",
    p_c3_body: "El personal de vigilancia y brigadistas se desplazan de noche por zonas aisladas sin confirmación previa de amenaza, exponiéndose a emboscadas, accidentes o atrapamiento en caso de propagación súbita.",
    p_proto_tag: "Doctrina táctica Human-in-the-Loop",
    p_proto_title: "El ciclo de alerta y despacho 02:00 AM",
    p_proto_sub: "Cómo opera Athene desde la detección térmica subsuperficial hasta la autorización humana en consola C2 en menos de 3 minutos.",
    p_step1_time: "02:14:02 CLT",
    p_step1_step: "PASO 01 // DETECCIÓN",
    p_step1_title: "Firma térmica en fondo de quebrada",
    p_step1_desc: "Sensor optrónico biespectral LWIR radiométrico (<50 mK) detecta una anomalía térmica puntual en una quebrada ciega para torres y patrullas terrestres.",
    p_step2_time: "02:14:05 CLT",
    p_step2_step: "PASO 02 // INFERENCIA LOCAL",
    p_step2_title: "Edge AI Zero-Cloud a bordo",
    p_step2_desc: "El módulo NVIDIA Jetson a bordo procesa la signatura en microsegundos, discriminando entre rocas calientes o fauna y actividad humana / conato naciente.",
    p_step3_time: "02:14:20 CLT",
    p_step3_step: "PASO 03 // TELEMETRÍA C2",
    p_step3_title: "Enlace táctico FHSS a consola base",
    p_step3_desc: "Transmisión en banda 900 MHz anti-interferencia con telemetría de vuelo, coordenadas WGS84 de alta precisión y micro-captura térmica sintética a la estación terrena.",
    p_step4_time: "02:15:10 CLT",
    p_step4_step: "PASO 04 // DECISIÓN HUMANA",
    p_step4_title: "Autorización Human-in-the-Loop",
    p_step4_desc: "El operador calificado en consola segura verifica la imagen térmica. Cero disuasión física autónoma: cualquier acción física requiere autorización explícita.",
    p_step5_time: "02:16:00 CLT",
    p_step5_step: "PASO 05 // RESPUESTA",
    p_step5_title: "Disuasión o exportación GeoJSON",
    p_step5_desc: "El operador autoriza el foco destellante de alta intensidad para disuadir o despacha el paquete GeoJSON a la central de monitoreo para orientar brigadas al amanecer.",

    // Off-Grid Tactical Datalink Architecture
    flow_tag: "Arquitectura de enlace off-grid",
    flow_title: "Cómo se cierra el circuito táctico en zonas sin señal celular",
    flow_sub: "Gran parte de los predios forestales y cordilleranos son zonas de baja cobertura. Athene opera con radioenlaces tácticos locales entre la aeronave y la estación en tierra.",
    flow_s1_title: "Aeronave VTOL (nodo aéreo)",
    flow_s1_desc: "Inferencia térmica Edge AI a bordo con NVIDIA Jetson. Detecta precursores y presencia humana, emite alertas a la estación en tierra y ejecuta retorno de emergencia ante pérdida de enlace.",
    flow_s1_badge: "Edge AI a bordo",
    flow_s1_f1_lbl: "Aviónica y cómputo:",
    flow_s1_f1_val: "Controlador de vuelo de arquitectura redundante y procesador Edge AI acoplados por enlace serie optoaislado con telemetría MAVLink v2.",
    flow_s1_f2_lbl: "Geoposicionamiento:",
    flow_s1_f2_val: "Fusión a bordo de GPS centimétrico (RTK) y modelo de elevación del terreno (DEM) para cálculo de coordenadas del foco con precisión métrica.",
    flow_c1_label: "⇄ Radioenlace FHSS 915 MHz (Línea de Vista)*",
    flow_s2_title: "Estación de operador (terreno)",
    flow_s2_desc: "Recepción táctica de alertas y telemetría en tiempo real. El operador evalúa y autoriza la activación del foco disuasivo y sirena desde una posición segura.",
    flow_s2_badge: "Supervisión humana (HITL)",
    flow_s2_f1_lbl: "Consola táctica:",
    flow_s2_f1_val: "Laptop IP65 rugerizada para faenas forestales con cartografía vectorial offline precargada.",
    flow_s2_f2_lbl: "Autorización HITL:",
    flow_s2_f2_val: "Doble confirmación de seguridad en consola antes de activar el foco o sirena disuasiva.",
    flow_c2_label: "⇄ Enlace Red Local / IP Disponible",
    flow_s3_title: "Central de despacho y coordinación del partner",
    flow_s3_desc: "Recepción de fichas de alerta georreferenciadas y logs de misión para coordinación de brigadas y auditoría (integración GIS / Webhook).",
    flow_s3_badge: "Integración operacional",
    flow_s3_f1_lbl: "Interoperabilidad proyectada:",
    flow_s3_f1_val: "Objetivo de arquitectura: exportación de datos en formatos abiertos (GeoJSON / KML / REST API) proyectada para compatibilidad futura con sistemas GIS y centrales de despacho forestal (ArcGIS, QGIS).",
    flow_s3_f2_lbl: "Trazabilidad legal:",
    flow_s3_f2_val: "Ficha de incidente con estampa de tiempo y coordenadas verificadas para trazabilidad pericial.",
    flow_reg_badge: "[NORMATIVA & ESPECTRO]",
    flow_reg_text: "* Cumplimiento radioeléctrico y operacional: Telemetría y C2 operando en banda ISM 915 MHz bajo resolución de potencias de SUBTEL (Chile) mediante espectro ensanchado por salto de frecuencia (FHSS). Operación de vuelo bajo normativa DGAC DAN 313 (Norma de Aeronaves Pilotadas a Distancia / RPAS) en régimen VLOS acotado con piloto de seguridad certificado en terreno durante la campaña de validación 2026-27.",
    spec_toggle_txt: "+ Detalles",

    p_iaas_tag: "Modelo de servicio & pilotaje",
    p_iaas_title: "Condiciones operacionales y gobernanza de datos",
    p_iaas_sub: "Estructura flexible orientada a la colaboración sin barreras de entrada ni inversión en aeronaves por parte de la empresa forestal.",
    p_iaas1_tag: "[IAAS // CONDICIÓN 01]",
    p_iaas1_title: "Suscripción sin adquisición de flota (Cero CAPEX)",
    p_iaas1_desc: "La empresa colaboradora no adquiere aeronaves ni asume depreciación de hardware. Strig Systems provee la plataforma, la aviónica de misión, el mantenimiento y la operación.",
    p_iaas2_tag: "[IAAS // CONDICIÓN 02]",
    p_iaas2_title: "Acuerdo a medida para campaña 2026-27",
    p_iaas2_desc: "El alcance del pilotaje se define conjuntamente según la cantidad de hectáreas prioritarias, la topografía y los puntos críticos de interfaz forestal.",
    p_iaas3_tag: "[IAAS // CONDICIÓN 03]",
    p_iaas3_title: "Gobernanza de datos y confidencialidad (NDA)",
    p_iaas3_desc: "Todos los vuelos de validación se operan bajo acuerdos estrictos de confidencialidad técnica (NDA). Los datos cartográficos del predio permanecen bajo reserva exclusiva.",
    p_faq_tag: "Respuestas a dudas operacionales",
    p_faq_title: "Preguntas Frecuentes de Operaciones",
    p_faq_sub: "Criterios de ingeniería sobre límites operacionales, meteorología y despliegue en terreno.",
    p_faq1_q: "¿Cómo se gestiona el riesgo de colisión con el relieve (CFIT) en vuelo nocturno?",
    p_faq1_a: "La aeronave vuela rutas preprogramadas sobre un modelo digital de elevación (DEM) de alta resolución, manteniendo un margen vertical de seguridad constante sobre el terreno. El control de vuelo primario opera con barreras geográficas (geofencing) y no depende de la percepción visual del piloto en tierra.",
    p_faq2_q: "¿Cómo manejan las falsas alarmas causadas por animales, rocas calientes o faenas diurnas?",
    p_faq2_a: "El modelo Edge AI combina signatura radiométrica (temperatura absoluta del pixel) con análisis espacial de forma y persistencia temporal. La tasa de falsas alarmas es un KPI central de la validación: el criterio de aceptación técnica del MVP es < 10%, con meta operacional de < 5% en régimen continuo.",
    p_faq3_q: "¿Qué ocurre si hay viento fuerte o ráfagas (viento Puelche)?",
    p_faq3_a: "El criterio de diseño aerodinámico de la plataforma experimental contempla tolerancia a ráfagas de hasta 10–12 m/s (~36–43 km/h / ~19–23 kt). Si los sensores de viento en la estación base o a bordo detectan condiciones fuera de la envolvente de seguridad, la misión se aborta automáticamente y la aeronave retorna a base (RTL).",
    p_faq4_q: "¿Qué pasa si se pierde el enlace de telemetría con la estación base?",
    p_faq4_a: "La aeronave cuenta con lógica FDIR (Fault Detection, Isolation and Recovery) determinista en el controlador de vuelo primario. Ante pérdida prolongada de enlace, ejecuta una maniobra predeterminada: ascender a altitud de seguridad, reintentar enlace y retornar a la estación base mediante navegación inercial respaldada por GNSS redundante.",
    p_faq5_q: "¿Quién opera la aeronave durante la campaña de validación?",
    p_faq5_a: "Durante la fase de validación 2026-27, las misiones son operadas directamente por el equipo técnico de Strig Systems, con operadores certificados por la DGAC. La empresa participante aporta el acceso al predio, información de contexto territorial y el equipo de enlace para la evaluación conjunta de resultados.",
    p_faq6_q: "¿Cómo se integra Athene con nuestras centrales de monitoreo existentes (CONAF, Arauco, CMPC)?",
    p_faq6_a: "La estación base genera alertas normalizadas con coordenadas georreferenciadas (GeoJSON / KML) y micro-captura térmica sintética. La arquitectura está proyectada para exportar datos hacia centrales de despacho existentes mediante API estándar o correo táctico en la fase de validación.",
    p_faq7_q: "¿El sistema puede operar con niebla costera o camanchaca?",
    p_faq7_a: "El sensor LWIR (8–14 μm) penetra humo ligero y neblina dispersa con mucha mayor eficacia que los sensores ópticos visibles. Sin embargo, en condiciones de niebla densa con condensación líquida activa (gotas de agua en suspensión), la atenuación infrarroja es significativa; en esos casos, la plataforma restringe el techo de vuelo o suspende la misión por seguridad.",
    p_faq8_q: "¿Cuál es el marco regulatorio para vuelos nocturnos con drones en Chile?",
    p_faq8_a: "Las operaciones iniciales del programa piloto se realizan en predio privado acotado bajo régimen de línea de vista (VLOS), conforme a la normativa DAN 151 / DAN 91 de la DGAC. La transición hacia misiones de largo alcance más allá de la línea de vista (BVLOS) se estructura progresivamente mediante la metodología SORA (Specific Operations Risk Assessment).",
    p_cta_box_tag: "Programa Piloto 2026-27",
    p_cta_box_title: "¿Interesado en evaluar Athene en el predio de su empresa?",
    p_cta_box_sub: "Coordinemos una reunión técnica de factibilidad territorial o un briefing de 15 minutos con Tomás Medina (Technical Lead).",

    // Subpage: Nosotros & Equipo Aeroespacial (/nosotros.html)
    n_back_home: "← Volver al Centro de Comando",
    n_nav_history: "Historia",
    n_nav_simple: "Qué Hacemos",
    n_nav_roadmap: "Camino & TRL",
    n_nav_backing: "Respaldo",
    n_nav_team: "Equipo",
    n_nav_glossary: "Glosario",
    n_nav_collab: "Colaborar",
    n_nav_cta: "Escribir al Equipo",
    n_hero_eyebrow: "IDENTIDAD // STRIG SYSTEMS SpA",
    n_hero_title_1: "Ingeniería aeroespacial nacida en",
    n_hero_title_2: "la Universidad de Concepción.",
    n_hero_sub: "Somos 5 ingenieros civiles aeroespaciales que creemos que los bosques, las comunidades y el territorio de Chile se pueden proteger mejor combinando autonomía aérea, visión térmica e inteligencia artificial soberana.",
    n_cta_contact: "Conversar con el equipo",
    n_cta_brief: "Executive Brief (PDF)",
    n_simple_tag: "Qué hacemos · En simple",
    n_simple_title: "Tecnología aeroespacial explicada sin rodeos",
    n_simple_sub: "La gran mayoría de los incendios forestales catastróficos en Chile comienzan de noche en quebradas y caminos aislados. Nosotros construimos los ojos y la inteligencia para anticiparlos.",
    n_s1_title: "Ojos en la oscuridad total",
    n_s1_desc: "No usamos cámaras normales de luz de día. Llevamos sensores térmicos que captan la radiación calórica invisible: pueden detectar una fogata recién encendida o personas caminando en plena noche bajo las ramas de los árboles.",
    n_s2_title: "Cerebro local sin internet",
    n_s2_desc: "En las quebradas del sur no hay señal de celular 4G ni 5G. Por eso la inteligencia artificial viaja físicamente a bordo del dron: clasifica en microsegundos si una fuente de calor es peligrosa sin mandar datos a ningún servidor externo.",
    n_s3_title: "Proteger la vida de las brigadas",
    n_s3_desc: "Ningún brigadista ni guardia debería internarse a ciegas a una quebrada de noche arriesgando accidentes o emboscadas. El centinela aéreo verifica primero desde el cielo y entrega coordenadas exactas antes de mover personal.",
    n_trl_tag: "Madurez técnica & honestidad",
    n_trl_title: "Qué significa TRL 3 y cómo avanzamos",
    n_trl_sub: "En ingeniería rigurosa no se promete disponibilidad comercial antes de tiempo. Te explicamos con total transparencia en qué fase estamos y cuáles son los compromisos reales asumidos.",
    n_trl_badge: "[METROLOGÍA DE MADUREZ // TRL 3]",
    n_trl_box_title: "¿Qué significa exactamente encontrarse en TRL 3?",
    n_trl_box_p1: "La escala TRL (Technology Readiness Level) fue creada por la NASA y es el estándar internacional adoptado por CORFO para medir cuán lista está una tecnología, desde la idea teórica (TRL 1) hasta el despliegue industrial probado (TRL 9).",
    n_trl_box_p2: "<strong>TRL 3 significa \"Prueba de concepto experimental en laboratorio\":</strong> Hemos validado los modelos matemáticos, los algoritmos de inferencia térmica en procesadores embebidos y la arquitectura de aviónica en bancos de prueba. No vendemos drones en cajas ni servicios de catálogo inmediato: estamos construyendo el prototipo para la primera demostración pública de vuelo en enero de 2027 (Demo Day Gearbox) y la campaña de validación en predio privado en junio de 2027.",
    n_t1_date: "Octubre 2025",
    n_t1_title: "Fundación de Strig Systems SpA",
    n_t1_desc: "Conformación de la empresa en Concepción por 5 ingenieros civiles aeroespaciales egresados de la Universidad de Concepción con foco en autonomía y mitigación de incendios.",
    n_t2_date: "Noviembre 2025",
    n_t2_title: "Adjudicación Semilla Inicia CORFO",
    n_t2_desc: "Selección en el fondo público de CORFO para financiamiento no dilutivo de la prueba de concepto y validación técnico-comercial de Athene.",
    n_t3_date: "2026 (En ejecución)",
    n_t3_title: "Aceleración en Gearbox UdeC & Banco de Aviónica",
    n_t3_desc: "Desarrollo experimental en el Laboratorio Aeroespacial UdeC, afinamiento de modelos térmicos y entrevistas de validación con empresas forestales líderes.",
    n_t4_date: "Enero 2027 (Próximo hito)",
    n_t4_title: "Demo Day Gearbox — Vuelo Demostrativo",
    n_t4_desc: "Vuelo de prueba de concepto y demostración de inferencia térmica en tiempo real ante el jurado internacional (Chris Klaus, Fusen World) e inversionistas.",
    n_t5_date: "Junio 2027 (Proyectado)",
    n_t5_title: "Campaña de Validación en Terreno Forestal",
    n_t5_desc: "Ensayos nocturnos en predio piloto privado forestal bajo régimen acotado de línea de vista (VLOS), midiendo tiempos de detección y reducción de falsas alarmas.",
    n_resp_tag: "Infraestructura & alianzas",
    n_resp_title: "Respaldo institucional y base técnica",
    n_resp_sub: "Contamos con el soporte de instituciones líderes en ciencia, ingeniería y fomento a la innovación profunda.",
    n_sup1_title: "CORFO · Semilla Inicia",
    n_sup1_desc: "Adjudicatarios del fondo público de CORFO (Gobierno de Chile) destinado a emprendimientos innovadores de base científico-tecnológica de alto impacto para acelerar su validación técnica y comercial.",
    n_sup2_title: "Lab Aeroespacial UdeC",
    n_sup2_desc: "Espacio de desarrollo y banco de pruebas dentro de la Facultad de Ingeniería de la Universidad de Concepción. Disponemos de capacidades de modelación aerodinámica, túnel de viento y simulación estructural.",
    n_sup3_title: "Gearbox UdeC",
    n_sup3_desc: "Aceleradora tecnológica de la Facultad de Ingeniería UdeC. Provee mentoría de negocios, gobernanza corporativa y el puente hacia inversionistas de capital de riesgo e industrias del país.",
    n_team_tag: "Equipo fundador",
    n_team_title: "Los 5 ingenieros detrás del proyecto",
    n_team_sub: "Nos conocimos y formamos como ingenieros civiles aeroespaciales en la Universidad de Concepción, compartiendo la convicción de que la ingeniería pesada se puede hacer desde el Biobío.",
    founder_lead: "FUNDADOR & LEAD TÉCNICO",
    spec_tomas: "Ingeniero Civil Aeroespacial · UdeC",
    n_bio_tomas: "Ingeniero Civil Aeroespacial • Visión Computacional, Machine Learning, CAD/CAM e Ingeniería de Sistemas.",
    founder_ops: "CO-FOUNDER",
    spec_carlos: "Ingeniero Civil Aeroespacial · UdeC",
    n_bio_carlos: "Bombero Operativo • Ingeniero Civil Aeroespacial. Análisis CFD, logística operacional y arquitectura de interfaz táctica.",
    founder_aero: "CO-FOUNDER",
    spec_ananda: "Ingeniera Civil Aeroespacial · UdeC",
    n_bio_ananda: "Ingeniera Civil Aeroespacial • Integración y ensayos de vuelo RPAS, CAD, análisis estructural (FEA) y CFD.",
    founder_prop: "CO-FOUNDER",
    spec_richard: "Ingeniero Civil Aeroespacial · UdeC",
    n_bio_richard: "Ingeniero Civil Aeroespacial • Ingeniería de sistemas, aseguramiento normativo, control de calidad y certificación aeronáutica.",
    founder_dyn: "CO-FOUNDER",
    spec_pablo: "Ingeniero Civil Aeroespacial · UdeC",
    n_bio_pablo: "Ingeniero Civil Aeroespacial • Arquitectura de sistemas, lógica e integración de flujo de datos, validación y verificación.",
    n_glo_tag: "Glosario accesible",
    n_glo_title: "Entendiendo los conceptos clave sin jerga",
    n_glo_sub: "Si lees nuestras presentaciones o reportes técnicos, aquí tienes la traducción al lenguaje de todos los días.",
    g1_term: "Edge AI (Inteligencia en el Borde)",
    g1_lay: "El cerebro computacional viaja físicamente dentro de la aeronave, permitiéndole analizar imágenes térmicas al instante sin necesitar internet ni señal de celular.",
    g1_tech: "Inferencia radiométrica local en GPU embebida de bajo consumo (NVIDIA Jetson) con latencia menor a 10 ms.",
    g2_term: "LWIR (Infrarrojo de Onda Larga)",
    g2_lay: "Una cámara que no capta los colores que ve el ojo humano, sino el calor exacto que desprenden los objetos, la vegetación o las personas en oscuridad total.",
    g2_tech: "Sensor microbolómetro en espectro 8–14 μm con sensibilidad térmica NETD &lt; 50 mK para detección subsuperficial.",
    g3_term: "VTOL (Despegue y Aterrizaje Vertical)",
    g3_lay: "Aeronave que despega hacia arriba como un helicóptero en un espacio reducido (un camino de tierra o claro forestal) y luego vuela con alas fijas de forma rápida como un avión.",
    g3_tech: "Configuración híbrida que combina empuje vertical para despegue sin pista y sustentación alar de alta eficiencia de crucero.",
    g4_term: "Human-in-the-Loop (Humano al Mando)",
    g4_lay: "La inteligencia artificial detecta y avisa, pero jamás actúa sola: cualquier acción física o alerta crítica requiere la autorización expresa de una persona calificada.",
    g4_tech: "Protocolo determinista C2 donde el operador valida la firma calórica antes de activar proyectores o escalar a centrales de despacho.",
    g5_term: "FHSS 900 MHz (Salto de Frecuencia)",
    g5_lay: "Una radio táctica de largo alcance que cambia de canal decenas de veces por segundo para evitar interferencias, bloqueos y asegurar que el enlace de control nunca se corte.",
    g5_tech: "Frequency-Hopping Spread Spectrum en banda ISM sub-GHz con alta penetración a través de follaje y topografía quebrada.",
    g6_term: "TRL (Nivel de Madurez Tecnológica)",
    g6_lay: "Una regla del 1 al 9 creada por la NASA para saber si una tecnología es solo una idea teórica (1), una prueba de laboratorio (3) o un producto comercial terminado (9).",
    g6_tech: "Technology Readiness Level. Strig Systems se encuentra en TRL 3 avanzando hacia TRL 4 (validación en entorno simulado y terreno acotado).",
    g7_term: "VLOS vs BVLOS (Línea de Vista de Vuelo)",
    g7_lay: "VLOS significa volar donde el ojo humano puede ver la aeronave. BVLOS significa que la aeronave vuela a kilómetros de distancia guiada solo por sus instrumentos y sensores.",
    g7_tech: "Visual Line of Sight (DAN 151/91) para fase piloto temprana; Beyond Visual Line of Sight estructurado bajo análisis de riesgo SORA.",
    g8_term: "FDIR (Recuperación Automática ante Fallas)",
    g8_lay: "Un sistema de seguridad inteligente que detecta si una pieza o sensor falla en el aire y toma automáticamente la decisión más segura: volver a casa o desplegar paracaídas.",
    g8_tech: "Fault Detection, Isolation and Recovery. Algoritmo a bordo que conmuta sensores redundantes y ejecuta secuencias de retorno a base (RTL).",
    n_collab_tag: "Comunidad & vinculación",
    n_collab_title: "Construye con nosotros",
    n_collab_sub: "Estamos creando una compañía deeptech desde Concepción con impacto global. Hay tres formas directas de vincularte con nosotros hoy.",
    c1_title: "¿Estudias en la UdeC y te apasiona el vuelo?",
    c1_desc: "Buscamos memoristas, tesistas y estudiantes de ingeniería civil aeroespacial, mecánica, eléctrica, electrónica o informática que quieran meter las manos en hardware real, visión computacional y dinámica de vuelo.",
    c1_btn: "Postular como colaborador",
    c2_title: "Prensa, divulgación y periodistas",
    c2_desc: "Si cubres innovación tecnológica, ciencia aplicada, prevención de incendios o emprendimiento deeptech en Chile y Latinoamérica, podemos coordinar entrevistas técnicas y compartir nuestro dossier de prensa.",
    c2_btn: "Contactar a vocería",
    c3_title: "Comunidades, ONGs e industrias",
    c3_desc: "¿Representas a una comunidad de interfaz bosque-ciudad, una empresa con faenas aisladas o un centro de investigación aplicada? Queremos conocer tu realidad territorial para aprender de tus desafíos.",
    c3_btn: "Proponer colaboración",

    // Landing Funnel & Streamlined Sections
    funnel_tag: "RUTAS DE ACCESO // CHANNELS",
    funnel_title: "¿Cómo podemos colaborar?",
    funnel_sub: "Seleccione el canal diseñado para su perfil institucional o interés operativo.",
    fn1_tag: "[ VENTURE & SEED 2027 ]",
    fn1_title: "Inversores, Fondos y Aceleradoras",
    fn1_desc: "Tesis de inversión DeepTech, mercado TAM/SAM/SOM, ventajas de foso defensivo (Data Moat), modelo IaaS e hitos de tracción hacia la ronda Semilla 2027.",
    fn1_action: "Ver tesis y datos para inversores",
    fn2_tag: "[ ASSET PROTECTION & PILOT ]",
    fn2_title: "Empresas Forestales e Industriales",
    fn2_desc: "Protocolo de despacho 02:00 AM, benchmark táctico contra drones manuales y satélites, metodología de validación en predio piloto y modelo IaaS por negociar.",
    fn2_action: "Explorar programa de validación 2026-27",
    fn3_tag: "[ QUIÉNES SOMOS // PROPÓSITO ]",
    fn3_title: "Comunidad, Estudiantes y Prensa",
    fn3_desc: "La historia de 5 ingenieros aeroespaciales UdeC, explicación en lenguaje accesible sin jerga técnica, glosario táctico, respaldo institucional y oportunidades de vinculación.",
    fn3_action: "Conocer al equipo y nuestra historia",

    sol_tag: "ARQUITECTURA Y CAPACIDADES // 30 SEGUNDOS",
    sol_title: "Inteligencia aérea donde otros sistemas están ciegos",
    sol_sub: "Diseñada específicamente para operar en la oscuridad, sin depender de redes celulares y con confirmación humana permanente.",
    sol_d1_title: "Centinela VTOL Nocturno & Data Moat",
    sol_d1_desc: "Patrullaje preprogramado en la brecha ciega de 21:00 a 08:00 hrs sin piloto manual en terreno, acumulando banco propietario de firmas térmicas y biomasa chilena.",
    sol_d2_title: "Inferencia Edge AI Zero-Cloud a Bordo",
    sol_d2_desc: "Procesamiento térmico en tiempo real en NVIDIA Jetson integrado en la aeronave, discriminando conatos incipientes en milisegundos sin requerir internet satelital ni 4G.",
    sol_d3_title: "Doctrina Human-in-the-Loop (HITL)",
    sol_d3_desc: "Toda alerta es retransmitida a la consola del operador humano; ninguna acción disuasiva o notificación a brigadas se ejecuta sin confirmación y autorización humana.",
    sol_explore_cta: "Ver protocolo de despacho de 5 pasos y especificaciones tácticas",

    team_compact_tag: "EQUIPO FUNDADOR // INGENIERÍA UDEC",
    team_compact_title: "Ingenieros civiles aeroespaciales formados para ejecutar",
    team_compact_sub: "El equipo técnico multidisciplinario detrás del diseño aerodinámico, aviónica, visión computacional y control de Athene.",
    team_explore_cta: "Conocer la historia de los 5 fundadores y cómo colaborar",

    nav_inicio: "Inicio",
    nav_nosotros: "Nosotros",
    nav_protocolo_link: "Protocolo de 5 Pasos",
    nav_protocolo_link_desc: "Secuencia de alerta 02:00 AM y despacho C2",
    nav_benchmark_link: "Benchmark Táctico",
    nav_benchmark_link_desc: "Athene vs satélites, torres y drones manuales",
    nav_piloto_link: "Validación 2026-27",
    nav_piloto_link_desc: "Metodología de 4 fases y criterios de predio",
    nav_faq_operacional: "FAQ Operacional",
    nav_faq_operacional_desc: "Viento, niebla, falsas alarmas y costos",
    nav_especificaciones: "Especificaciones Tácticas",

    // Segmented Pages Parity Keys
    iaas_tag1: "[IAAS // 01]",
    iaas_tag2: "[IAAS // 02]",
    v_role_tomas: "Founder & Lead Técnico",
    v_role_carlos: "Co-founder",
    v_role_ananda: "Co-founder",
    v_role_richard: "Co-founder",
    v_role_pablo: "Co-founder",
    v_role_advisor: "PhD Space Systems Engineering and Management • Director Lab Aeroespacial UdeC",
    footer_copyright_udec: "© 2026 Strig Systems SpA. Concepción, Chile · Universidad de Concepción.",
    p_diag1_id: "[DIAG // 01]",
    p_diag2_id: "[DIAG // 02]",
    p_diag3_id: "[DIAG // 03]",
    p_crit1_tag: "CRIT // 01",
    p_crit2_tag: "CRIT // 02",
    p_crit3_tag: "CRIT // 03",
    p_crit4_tag: "CRIT // 04",
    n_card1_tag: "[01 // VISIÓN TÉRMICA]",
    n_card2_tag: "[02 // INTELIGENCIA A BORDO]",
    n_card3_tag: "[03 // SEGURIDAD HUMANA]",
    n_sup1_tag: "[FINANCIAMIENTO PÚBLICO]",
    n_sup2_tag: "[BASE DE INGENIERÍA]",
    n_sup3_tag: "[ACELERACIÓN]",
    g_tag_comp: "[COMPUTACIÓN]",
    g_tag_sens: "[SENSORICA]",
    g_tag_aero: "[AERONÁUTICA]",
    g_tag_ethic: "[DOCTRINA ÉTICA]",
    g_tag_comm: "[COMUNICACIONES]",
    g_tag_global: "[ESTÁNDAR GLOBAL]",
    g_tag_dgac: "[NORMATIVA DGAC]",
    g_tag_safety: "[SEGURIDAD DE VUELO]",
    collab_tag1: "[ESTUDIANTES & INGENIERÍA]",
    collab_tag2: "[PRENSA & MEDIOS]",
    collab_tag3: "[ALIANZAS & INDUSTRIA]"
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
    nav_contact: "Direct Contact",
    nav_contact_desc: "Institutional channel & inquiries",
    nav_cta: "Join Validation",

    // Dynamic Values & Media Tags
    m1_metric_val: "Night",
    m3_metric_val: "Seconds",
    btn_matrix_compact: "Summary",
    btn_matrix_detailed: "+ Detailed Analysis",
    media_bench_tag: "[Avionics & Sensor Integration · Testbench]",
    media_video_tag: "[Thermal Vision & Onboard AI Validation]",
    media_video_meta: "LWIR 640×512 Radiometric · 30 FPS",
    media_hud_target: "PRECURSOR DETECTED",
    ph1_time: "Phase 01 · Alignment",
    ph2_time: "Phase 02 · Calibration",
    ph3_time: "Phase 03 · Night Trials",
    ph4_time: "Phase 04 · Joint Evaluation",
    contact_nda_pill: "Non-Disclosure Agreements (NDA) Available",
    footer_copyright: "© 2026 Strig Systems SpA. All rights reserved.",
    eb_product: "ATHENE PLATFORM",

    // Hero
    hero_status: "TRL 3 · Prototype in development · Technical demo Jan 2027",
    hero_badge: "CORFO Seed Grant • UdeC Aerospace Lab",
    hero_eyebrow_tag: "AUTONOMOUS AERIAL SENTINEL SYSTEM",
    hero_title_1: "Risks move fast.",
    hero_title_2: "We see them coming.",
    hero_sub: "Autonomous drones that fly at night to detect fire outbreaks and unauthorized activity before flames spread. <strong class=\"hl-product\">Athene</strong> is the autonomous aerial intelligence platform engineered by Strig Systems to close the nocturnal wildfire gap using VTOL aircraft and onboard Edge AI thermal inference. We detect precursors and thermal anomalies before ignition, reducing ground crew hazard and optimizing dawn response.",
    hero_cta_primary: "Join 2026-27 Validation Program",
    hero_cta_secondary: "View Roadmap & Technology",
    hero_cta_brief: "Executive Brief (PDF)",

    // Metrics & Progressive Disclosure Micro-Fichas
    m1_title: "Nighttime Gap",
    m1_sub: "Aerial surveillance while manned aviation remains grounded",
    m1_tax: "[OPERATIONAL GAP]",
    m1_tip_title: "Nighttime Gap & Human Risk",
    m1_val_today: "Aerial thermal monitoring during the critical night window while ground crews and airplanes are inactive due to terrain collision risk (CFIT).",
    m1_val_context: "99.7% of forest fires in Chile originate from intentional or accidental human causes (CONAF, 2003-2023).",
    m2_title: "Projected Mission Radius",
    m2_sub: "Design target for 50,000 ha (Noctua™ Aircraft) • Today: Bounded range on pilot acreage (VLOS)",
    m2_tax: "[PRODUCT TARGET]",
    m2_tip_title: "Territorial Coverage Radius",
    m2_val_today: "Bounded-range Visual Line of Sight (VLOS) flight operations on private pilot site with on-site operator.",
    m2_val_goal: "15 km radius (BVLOS). VTOL airframe with 45–60 min cruise capacity to protect 50,000 ha clusters.",
    m2_val_framework: "Scaling subject to SORA operational risk certification (JARUS) and DGAC airspace segregation.",
    m3_title: "Thermal Detection",
    m3_sub: "Onboard Edge AI local inference • Consolidated alert to station in minutes (target ≤ 3 min)",
    m3_tax: "[PRODUCT TARGET]",
    m3_tip_title: "Local Edge AI Thermal Inference",
    m3_val_today: "Detection of thermal sources and humans in microseconds onboard (NVIDIA Jetson) with consolidated alert to station in minutes (target ≤ 3 min).",
    m3_val_goal: "Dispatch of verified coordinates with false alarm rate < 5% (MVP technical acceptance criterion < 10%).",
    m3_val_framework: "Zero-Cloud Architecture: requires no internet or cloud connectivity for real-time edge detection.",
    m4_title: "Authorized Deterrence",
    m4_sub: "High-intensity light and acoustic siren activated exclusively with operator authorization",
    m4_tax: "[KEY DIFFERENTIATOR]",
    m4_tip_title: "Human-in-the-Loop · Safety Doctrine",
    m4_val_today: "Zero autonomous deterrence. The system classifies precursors, but triggering the physical beacon requires deliberate operator authorization.",
    m4_val_framework: "Strict safety control protocol protecting ground crews from ambushes or disoriented entry in deep forest.",
    lbl_today: "TODAY (MVP 2026-27):",
    lbl_goal: "TARGET:",
    lbl_framework: "CONDITION / FRAMEWORK:",
    lbl_context: "EVIDENCE:",

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
    quote_text: "Satellites face orbital delays, fixed towers face blind spots behind ridges and ravines, and ground patrols only see what headlights reach on the road. At dusk, firefighting aircraft are grounded for safety. <span class=\"hl-product\">Athene</span> changes this paradigm: patrolling nocturnal skies to <span class=\"hl-green\">detect human presence before fire ignites</span>, safeguarding ground crews and stopping the threat at its source.",

    // Tactical Benchmark
    comp_tag: "Tactical Benchmark",
    comp_title: "Why Legacy Solutions Fail in the Night Window",
    comp_sub: "Comparative technical analysis across LEO satellites, fixed thermal watchtowers, conventional manned patrol, and the Athene platform.",
    matrix_scroll_hint: "⇄ Swipe horizontally to compare technologies",
    th_dim: "Operational Dimension",
    th_sat: "LEO Satellites<br><span class=\"th-sub\">FIRMS / OroraTech</span>",
    th_tower: "Fixed Thermal Towers<br><span class=\"th-sub\">Optical Masts</span>",
    th_drone: "Conventional surveillance<br><span class=\"th-sub\">Daytime planes + 4x4 patrols / manual drones</span>",
    strig_badge: "Our Architecture",
    th_strig: "Strig Systems<br><span class=\"th-sub\">Athene (VTOL Platform + Edge AI)</span>",
    r1_dim: "Continuous Nighttime Patrol",
    r1_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Blind window (1–4 h):</span> Non-continuous orbital passes.</div><div class=\"cell-detail\">Continental standard by day, with no continuous coverage during nighttime field shifts.</div></div>",
    r1_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Continuous but static:</strong> Limited to direct line of sight.</div><div class=\"cell-detail\">High 24/7 reliability, but strictly confined to direct line-of-sight (LOS) from the tower, vulnerable to blind spots behind ravines and ridges.</div></div>",
    r1_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Grounded at night:</span> Aircraft grounded by VFR regulations.</div><div class=\"cell-detail\">Manned aircraft prevented from night flights by DGAC. Ground trucks face fatigue and &lt;12% parcel coverage.</div></div>",
    r1_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Active aerial patrol:</span> Night flight on pilot site.</div><div class=\"cell-detail\">Scheduled tactical flight with qualified ground operator (VLOS) under DGAC aviation regulations.</div></div>",
    r2_dim: "Detection & Alert Latency",
    r2_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">30 to 90 min:</span> Downlink and cloud processing queue.</div><div class=\"cell-detail\">Cumulative lag between satellite overpass, cloud computing ingestion, and regional alert dispatch.</div></div>",
    r2_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Instant but manual:</strong> Requires 24/7 console operator.</div><div class=\"cell-detail\">Direct optical sensor alert requiring human watchstander to verify video and filter false alarms.</div></div>",
    r2_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Local on-site:</strong> Delayed dispatch without 4G/5G signal.</div><div class=\"cell-detail\">Immediate for local crew; delayed to command center when operating in ravines with zero cellular signal.</div></div>",
    r2_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Inferred in seconds:</span> Station alert in ≤ 3 min.</div><div class=\"cell-detail\">Onboard Edge AI classifies in microseconds. Synthetic alert dispatched to station within ≤ 3 min from in-flight sighting.</div></div>",
    r3_dim: "Precursor Detection (Humans / Vehicles)",
    r3_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">No fine resolution:</span> 375m to 1km pixel footprint.</div><div class=\"cell-detail\">Engineered for active fire fronts, incapable of spotting individuals, early campfires, or vehicles.</div></div>",
    r3_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Grazing angle:</span> Blocked by tree canopy and ridges.</div><div class=\"cell-detail\">Ineffective on trails beneath dense forest canopy or ravines outside direct optical mast line of sight.</div></div>",
    r3_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Severely limited:</span> Ground patrols confined to roads.</div><div class=\"cell-detail\">Patrol planes do not fly at night; trucks only patrol logging roads, leaving forest interiors unmonitored.</div></div>",
    r3_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Optical & thermal:</span> Silhouettes and heat from 100 m.</div><div class=\"cell-detail\">Identifies thermal anomalies and human silhouettes in clearings and trails to authorize deterrence before fire starts.</div></div>",
    r4_dim: "Topographic Blind Spots",
    r4_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Atmospheric blockage:</span> Degraded by clouds and smoke.</div><div class=\"cell-detail\">Severely degraded by low overcast, thick smoke layers, and thermal inversions absorbing infrared radiation.</div></div>",
    r4_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Critical blind spots:</span> Hidden behind ridges and slopes.</div><div class=\"cell-detail\">Permanent physical blind spots behind ridgelines, deep ravines, and opposing mountain faces.</div></div>",
    r4_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Rugged terrain:</span> No visibility into deep ravines.</div><div class=\"cell-detail\">Ground crews lack line of sight in steep canyons; daytime planes suffer low-altitude turbulence and smoke.</div></div>",
    r4_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Zenith perspective:</span> Overhead flight eliminating shadows.</div><div class=\"cell-detail\">Overhead aerial patrol across forestry slopes, ravines, and roads, eliminating blind spots hidden from fixed towers and ground crews.</div></div>",
    r5_dim: "Human Risk & Supervision",
    r5_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Zero direct exposure:</strong> Remote orbital operation.</div><div class=\"cell-detail\">Surveillance conducted from orbit with no physical exposure for field personnel.</div></div>",
    r5_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Low direct exposure:</strong> Confined to maintenance trips.</div><div class=\"cell-detail\">Remote operation from ops center; physical hazard limited to maintenance runs on isolated peaks.</div></div>",
    r5_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">High human strain:</span> Continuous manual night operator.</div><div class=\"cell-detail\">1 dedicated pilot staring at screens continuously in the dark per manual drone; 4x4 ground crews exposed at night on isolated forestry routes.</div></div>",
    r5_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Ground supervision (HITL):</span> Operator at safe base.</div><div class=\"cell-detail\">Deterrence authorized from safe field workstation; zero personnel exposed in dangerous frontlines.</div></div>",
    r6_dim: "Operating Model & Access",
    r6_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><strong>Macro SaaS:</strong> Global data subscription.</div><div class=\"cell-detail\">Satellite data subscription; useful for macro-continental monitoring, but cannot replace direct tactical surveillance and response on the ground.</div></div>",
    r6_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">High CAPEX:</span> Heavy capital in fixed infrastructure.</div><div class=\"cell-detail\">Steep initial capital per watchtower (structural mast, military optics, solar backup, and access roads).</div></div>",
    r6_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">High operating cost:</span> Pricey flight hours & low coverage.</div><div class=\"cell-detail\">Heavier hourly costs for daytime flight and nocturnal 4x4 patrols covering &lt;12% of the forest parcel.</div></div>",
    r6_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Full Turnkey Service:</span> Zero operational overhead and ready-to-deploy patrol.</div><div class=\"cell-detail\">As-a-service model: turnkey night surveillance, certified preventive maintenance, guaranteed aerial availability, and continuous sensor and AI upgrades without capital lockup or operational burden on internal teams.</div></div>",
    r7_dim: "Adverse Weather Operations",
    r7_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Atmospheric blockage:</span> Degradation from cloud & smoke.</div><div class=\"cell-detail\">Spaceborne infrared radiation attenuates sharply through low cloud cover, coastal fog, and dense smoke plumes.</div></div>",
    r7_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">High resistance:</span> Fixed masts anchored to ground.</div><div class=\"cell-detail\">Rigid structures withstand sustained heavy winds and gusts, though optics may suffer vibration under extreme wind conditions.</div></div>",
    r7_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">Narrow window:</span> Daytime flights & blocked trails.</div><div class=\"cell-detail\">Airplanes grounded during severe turbulence or low visibility; 4x4 patrols blocked by mudslides, debris, or thick fog.</div></div>",
    r7_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-warning\">TRL 3 Validation:</span> Design target 10–12 m/s wind (~19–23 kt).</div><div class=\"cell-detail\">Aerodynamic design envelope targeted for Puelche winds (~36–43 km/h / ~19–23 kt). Experimental platform backed by ballistic recovery parachute.</div></div>",
    r8_dim: "Certification & Operational Scope (BVLOS)",
    r8_sat: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">No airspace conflict:</span> Unsegregated low Earth orbit.</div><div class=\"cell-detail\">Operates in outer space without local civil aviation flight segregation permits.</div></div>",
    r8_tower: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-positive\">Private infrastructure:</span> Fixed civil engineering.</div><div class=\"cell-detail\">Requires no flight permits, though demands land rights, environmental filings, and tower construction access.</div></div>",
    r8_drone: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-negative\">VFR / VLOS limits:</span> Nighttime manned flight ban.</div><div class=\"cell-detail\">Civil aviation prohibits nighttime low-altitude flights for manned aircraft due to CFIT risk. Commercial drones limited to VLOS.</div></div>",
    r8_strig: "<div class=\"matrix-cell-content\"><div class=\"cell-verdict\"><span class=\"badge-warning\">Regulatory Process:</span> Today VLOS on pilot site.</div><div class=\"cell-detail\">Current trials strictly under Visual Line of Sight (VLOS) under DAN 151; 15 km scaling structured under SORA risk methodology (DGAC/JARUS).</div></div>",

    // Technology - 4 Athene Pillars
    tech_tag: "Athene System Pillars",
    tech_title: "Mission Architecture · Athene Platform",
    tech_sub: "High-availability, fault-tolerant architecture. Edge processing, classification, and georeferencing without requiring continuous internet connection or cloud servers.",
    p1_status_badge: "[MVP: MODIFIED AIRFRAME · TRL 3-4]",
    p1_title: "VTOL Platform & Tactical Navigation",
    p1_desc: "Hybrid airframe with runway-free vertical takeoff and fixed-wing cruise. Engineered for mission radii up to 15 km with 45–60 min endurance and deterministic geofenced navigation.",
    p1_s1_lbl: "Configuration:",
    p1_s1_val: "QuadPlane Lift + Cruise (4 vertical lift motors + 1 horizontal pusher).",
    p1_s2_lbl: "C-2 Safety Boundary:",
    p1_s2_val: "The primary flight controller retains 100% flight authority and FDIR containment, isolated from mission AI.",
    p1_s3_lbl: "Design Envelope Target:",
    p1_s3_val: "Aerodynamic design objective: gust resilience up to 10–12 m/s (~36–43 km/h / ~19–23 kt, representative of Puelche wind conditions). Ballistic recovery parachute backup.",
    p1_s4_lbl: "Operations Today:",
    p1_s4_val: "Private pilot site in visual line of sight (bounded VLOS range). Goal: BVLOS (15 km) under SORA.",
    p2_status_badge: "[NVIDIA JETSON · ZERO-CLOUD]",
    p2_title: "Optronic Payload & Onboard Edge AI",
    p2_desc: "3-axis actively stabilized bispectral camera with LWIR radiometric thermal sensor and 4K optical camera. Onboard inference processes in microseconds without requiring internet or cloud servers.",
    p2_s1_lbl: "Thermal Sensor:",
    p2_s1_val: "Uncooled radiometric LWIR microbolometer (640×512) + 4K optical sensor on 3-axis gimbal.",
    p2_s2_lbl: "Georeferencing:",
    p2_s2_val: "Computational fusion of centimetric GPS (RTK) and digital elevation models (DEM), estimating fire coordinates with metric accuracy in real time.",
    p2_s3_lbl: "AI Pipeline:",
    p2_s3_val: "NVIDIA Jetson Orin Nano Dev Kit with TensorRT FP16 acceleration for human silhouettes and thermal precursor detection.",
    p2_s4_lbl: "Filtering:",
    p2_s4_val: "Multi-frame temporal filtering for false alarm rejection (target < 5%; MVP acceptance < 10%).",
    p3_status_badge: "[UHF LORA · OFF-GRID RESILIENT]",
    p3_title: "Tactical Communications for Dark Zones",
    p3_desc: "Dual-link tactical datalink architecture to operate across deep ravines and forestry holdings without cellular 4G/5G or mobile internet, ensuring alert delivery.",
    p3_s1_lbl: "Alert Radio Link:",
    p3_s1_val: "UHF transceiver 902–928 MHz @ 500 mW delivering telemetry and alert vectors in 4G dark zones.",
    p3_s2_lbl: "Safety C2 Link:",
    p3_s2_val: "Primary C2 2.4 GHz diversity datalink for flight control authority and critical telemetry.",
    p3_s3_lbl: "Alert Format:",
    p3_s3_val: "Compressed binary telemetry packet with UTM coordinates, timestamp, object class, and confidence score.",
    p3_s4_lbl: "Video Downlink:",
    p3_s4_val: "On-demand RTSP streaming conditioned on available local link bandwidth.",
    p4_status_badge: "[HUMAN-IN-THE-LOOP · AUDITABLE]",
    p4_title: "C2 Command Center & Chain of Evidence",
    p4_desc: "Tactical ground console for continuous human supervision, alert triage, and generation of forensically auditable Digital Incident Reports with cryptographic timestamps and privacy masking.",
    p4_s1_lbl: "Dual Operational Doctrine (HITL):",
    p4_s1_val: "Silent Sentinel Mode (passive thermal monitoring without acoustic or light emissions for legal evidence) or Active Deterrence Mode (strobe spotlight and siren to preempt ignition in interface zones). Physical activation strictly requires explicit, deliberate authorization from the human operator.",
    p4_s2_lbl: "Forensic Report:",
    p4_s2_val: "Digital incident dossier with cryptographic signature, timestamp, and bi-spectral capture for insurers and prosecutors.",
    p4_s3_lbl: "Privacy & Legal Compliance:",
    p4_s3_val: "Automatic on-edge blurring and anonymization of faces and vehicle plates (Zero-Cloud Edge AI) prior to generating forensic evidence files, compliant with Law No. 19,628 and Law No. 21,719.",
    p4_s4_lbl: "Offline Operation:",
    p4_s4_val: "Ground operator console with locally preloaded offline GIS maps for autonomous deployment in remote locations.",
    p4_s5_lbl: "Intellectual Property:",
    p4_s5_val: "System architecture, trained inference models, and mission software developed under the exclusive ownership and governance of Strig Systems SpA.",
    spec_toggle_txt: "+ Details",
    rm_card_hint: "+ Details",
    media_bench_caption: "Functional laboratory integration bench: redundant flight avionics, Edge AI mission computer, and tactical datalink modules interconnected.",
    media_video_caption: "Real-time thermal processing: detection and tracking of caloric anomalies and human silhouettes using onboard optimized models.",
    hud_alt_tip: "Above Ground Level (AGL) altitude via barometric sensor and LIDAR",
    hud_gs_tip: "Ground Speed (~66.6 km/h) optimized for gimbal imaging stability",
    hud_hdg_tip: "Magnetic heading with triple redundant calibrated compasses",
    hud_target_tip: "Local classification of thermal precursor and human silhouette with onboard inference",
    hud_link_tip: "Active telemetry & C2 link secured via FHSS frequency hopping",
    hud_rtk_tip: "Real-time kinematic GNSS positioning with centimeter precision",


    // Off-Grid Tactical Datalink Architecture
    flow_tag: "OFF-GRID DATALINK ARCHITECTURE",
    flow_title: "Closing the Tactical Loop in Zero-Cellular Remote Zones",
    flow_sub: "A majority of forestry and mountainous parcels have poor cellular coverage. Athene operates via direct local tactical radio links between the aircraft and the ground station.",
    flow_s1_title: "VTOL Aircraft (Aerial Node)",
    flow_s1_desc: "Onboard Edge AI thermal inference with NVIDIA Jetson. Detects precursors and human presence, sends alerts to the ground station, and triggers emergency return upon link loss.",
    flow_s1_badge: "Onboard Edge AI",
    flow_s1_f1_lbl: "Avionics & Compute:",
    flow_s1_f1_val: "Redundant-architecture flight controller and Edge AI computer coupled via opto-isolated serial link with MAVLink v2 telemetry.",
    flow_s1_f2_lbl: "Geopositioning:",
    flow_s1_f2_val: "Onboard fusion of centimetric GPS (RTK) and digital elevation models (DEM) for metric fire coordinate estimation.",
    flow_c1_label: "⇄ 915 MHz FHSS Tactical Link (Line-of-Sight)",
    flow_s2_title: "Operator Station (Field)",
    flow_s2_desc: "Real-time reception of tactical alerts and telemetry. The operator evaluates and authorizes deterrence light and siren activation from a safe position.",
    flow_s2_badge: "Human Supervision (HITL)",
    flow_s2_f1_lbl: "Tactical Console:",
    flow_s2_f1_val: "IP65 ruggedized laptop for forestry field ops with offline preloaded vector cartography.",
    flow_s2_f2_lbl: "HITL Authorization:",
    flow_s2_f2_val: "Dual safety confirmation on console before triggering deterrence light or siren.",
    flow_c2_label: "⇄ Local Network / Available IP Link",
    flow_s3_title: "Partner Dispatch & Operations Center",
    flow_s3_desc: "Reception of georeferenced alert dossiers and mission logs for crew coordination and audit trails (GIS / Webhook integration).",
    flow_s3_badge: "Operational Integration",
    flow_s3_f1_lbl: "Projected Interoperability:",
    flow_s3_f1_val: "Architectural roadmap: open data export (GeoJSON / KML / REST API) projected for future compatibility with forestry dispatch centers and GIS software (ArcGIS, QGIS).",
    flow_s3_f2_lbl: "Legal Traceability:",
    flow_s3_f2_val: "Incident dossier with timestamp and verified coordinates for forensic traceability.",

    // Roadmap
    roadmap_tag: "Roadmap",
    roadmap_title: "Project Status & Upcoming Milestones",
    roadmap_sub: "Rigorous development across verifiable stages. We differentiate what is solved today, active trials, and industrial scaling goals.",
    rm1_phase: "Current Status · TRL 3",
    rm1_title: "System Design & Prototype in Analysis",
    rm1_desc: "Engineering requirements, systems architecture, and test plans defined. Analytical concept validation and selection of critical components.",
    rm2_phase: "Oct – Dec 2026 · Trials",
    rm2_title: "Adapted Multirotor Platform & Technical Demo",
    rm2_desc: "Integration of avionics, sensors, and Edge AI onto an adapted multirotor platform for the first functional technical demonstration and edge processing validation in the field (December 2026 – January 2027).",
    rm3_phase: "Feb 2027 · Simulation",
    rm3_title: "Human-in-the-Loop (HITL) Validation",
    rm3_desc: "Simulation environment testing of tactical operator interface, deterrent light/siren authorization protocol, and real-time decision loop.",
    rm4_phase: "Jun 2027 · Field Validation",
    rm4_title: "Field Technical & Operational Validation",
    rm4_desc: "Day and night flight campaign using an adapted VTOL aircraft deployed from existing brigade bases or airstrips (rapid ground battery hot-swaps). In this phase, the Athene platform already delivers tangible operational value for detection and early warning on private pilot sites (bounded VLOS), prior to requiring automated robotic stations.",
    rm5_phase: "Future Vision",
    rm5_title: "Noctua™ VTOL Aircraft, Automated Nest & BVLOS",
    rm5_desc: "Platform evolution: integration or design of the Noctua™ VTOL aircraft with extended endurance and wind resistance, automated Nest robotic dock for scaling to 1:N fleet supervision (single operator controlling multiple aircraft simultaneously with zero ground presence), backup satellite links, and 15 km extended radius under BVLOS certification.",

    // Pilot / Validation Program
    pilot_tag: "Field Validation",
    pilot_title: "Joint Validation Program 2026-27",
    pilot_sub: "Structured into 4 methodological phases for forestry, mining, and institutional partners seeking to co-design and verify nocturnal surveillance in the field.",
    ph1_title: "Territory Mapping & Operational Alignment",
    ph1_desc: "Defining priority acreage, modeling blind spots, and coordinating protocols with property protection and dispatch teams.",
    ph2_title: "On-Site Sensor Calibration",
    ph2_desc: "Real-world validation of thermal signatures, testing off-grid tactical datalinks, and tuning radiometric thresholds.",
    ph3_title: "Night Trials & Active Patrol",
    ph3_desc: "Scheduled night flights during peak vulnerability hours with local tactical datalinks and assisted operator verification.",
    ph4_title: "Audit & Joint Operational Review",
    ph4_desc: "Joint technical assessment of response times, filtered false alarms, avoided flight hours, and dispatch integration.",

    // Territorial Criteria (Validation Cohort)
    crit_badge: "Requirements & Prioritization",
    crit_title: "Selection Criteria for 2026-27 Pilot Sites",
    crit_sub: "We aim to optimize the validation campaign in parcels exhibiting the highest tactical urgency alongside secure logistical conditions.",
    crit1_title: "Wildland-Urban Interface",
    crit1_desc: "Parcels bordering communities, critical infrastructure, or high-traffic public roads.",
    crit2_title: "Historical Recurrence",
    crit2_desc: "Zones with established historical incidence of nocturnal suspicious activity or ignitions.",
    crit3_title: "Base Infrastructure",
    crit3_desc: "Access to existing brigade station, forward airstrip, or helipad with power for fast battery swaps.",
    crit4_title: "South-Central Chile",
    crit4_desc: "Priority focus across Maule, Ñuble, Biobío, Araucanía, and Los Ríos regions.",

    // Operational Impact Framework
    impact_badge: "Operational Impact Model",
    impact_title: "Operational Value in the Critical Gap",
    impact_sub: "Qualitative approach focused on reducing human risk and territorial damage, free of unbacked commercial figures during the prototype stage.",
    imp1_title: "Nighttime Safety & Zero Unnecessary Exposure",
    imp1_desc: "Avoids blind nighttime deployment of ground crews and firefighters in 4x4 trucks across isolated forest roads and ravines. Aerial reconnaissance confirms or rules out threats before moving personnel.",
    imp2_title: "Prior Detection & Authorized Deterrence",
    imp2_desc: "Optical and thermal detection of unauthorized human activity visible from 100 m altitude. Upon detecting an anomaly, the ground operator can authorize high-intensity light and acoustic siren deterrence before ignition.",
    imp3_title: "Dawn Air Attack Optimization",
    imp3_desc: "By georeferencing and containing early fires or campfires during the night, dispatch centers receive accurate coordinates and perimeter data, avoiding critical tanker flight hours at daybreak.",

    // Cost of Inaction (Loss Aversion)
    cost_badge: "[OPERATIONAL ASSESSMENT · COST OF INACTION]",
    cost_title: "The Critical Divide Between 02:00 AM and 07:00 AM",
    scen1_time: "02:00 AM · ATHENE THERMAL DETECTION",
    scen1_head: "Early Precursor Containment",
    scen1_p: "Onboard local Edge AI inference and alert with high-precision coordinates. Threat mitigated via single ground light patrol or authorized siren/beacon deterrence. Zero hectares destroyed and zero crews blindsided in deep ravines.",
    scen1_metric: "Impact: Immediate containment · Risk neutralized",
    scen2_time: "07:00 AM · NO NOCTURNAL SURVEILLANCE",
    scen2_head: "5 Hours of Unchecked Nocturnal Ignition",
    scen2_p: "Flames expand all night propelled by slope winds. By dawn, containment requires multiple air tankers, heavy helicopters, commercial road shutdowns, and millions in timber loss and legal liabilities.",
    scen2_metric: "Impact: Massive wildfire emergency · Heavy air combat sorties",

    // IaaS Operational Framework
    iaas_tag: "Mission Adaptation & Service Model (IaaS)",
    iaas_title: "Airframe Adaptation & Intelligence-as-a-Service Principles",
    iaas_sub: "We collaborate closely to calibrate sensors, tailor the airframe to each operation's critical variables, and deliver turnkey intelligence without fleet purchases or capital liabilities.",
    iaas_p1_title: "Turnkey Intelligence Service · Zero Fleet Liabilities",
    iaas_p1_desc: "No drone purchases, asset depreciation, or internal aviation liability. Flight operations are conducted and supervised in the field by certified Strig Systems personnel under DGAC standards. Partners contract purely tactical coverage.",
    iaas_p2_title: "Payload Tailoring & Continuous Mission Tuning",
    iaas_p2_desc: "We configure thermal sensors and onboard algorithms according to your site's critical variables. Strig Systems handles maintenance, battery cycles, and continuous software updates.",
    iaas_p3_title: "Operational Safety & Regulatory Compliance",
    iaas_p3_desc: "Flights executed under strict operational safety standards conforming to Chilean DGAC DAN 151 / DAN 91 regulations for segregated test flights on private property.",

    // Pilot Callout Bar
    callout_title: "2026-27 Validation Cohort",
    callout_desc: "Limited operational flight slots per fire season in South-Central Chile for forestry and industrial partners seeking to co-design and evaluate field feasibility.",
    callout_cta: "Join Validation Program",
    callout_briefing: "Schedule Technical Briefing (15 min)",
    callout_brief_pdf: "Executive Brief (PDF)",

    // FAQ Section
    faq_tag: "FAQ",
    faq_title: "Technical Criteria, Operational Limits & Capabilities",
    faq_sub: "Current operational boundaries, flight conditions, and candid answers for technical teams and operations managers.",
    faq_q1: "How does thermal vision perform in dense smoke or fog?",
    faq_a1: "The LWIR (8–14 µm) band penetrates non-ionized optical smoke and suspended particulates that blind visual cameras. However, it is not an all-weather panacea: in dense fog (Mie scattering from water droplets) or weather conditions reducing visibility below VLOS legal minimums, flight operations are suspended under strict safety protocols.",
    faq_q2: "What is the design objective for the flight wind envelope?",
    faq_a2: "As an aerodynamic design target for the experimental platform, we aim for an operational envelope tolerating gusts up to 10–12 m/s (~36–43 km/h / ~19–23 kt), representative of summer and Puelche wind conditions in south-central Chile. In current live validation trials (TRL 3-4), if wind gusts compromise safety margins over the pilot site, operational protocols mandate immediate landing and preventive mission abort.",
    faq_q3: "How are thermal false alarms from heated rocks or livestock handled?",
    faq_a3: "The onboard Edge AI pipeline incorporates multi-frame temporal discrimination and radiometric thermal gradient thresholds (design goal < 5% false alarms; MVP acceptance < 10%). Furthermore, operations remain Human-in-the-Loop: every alert sent to the ground station is visually verified by the operator prior to authorizing deterrence or dispatch.",
    faq_q4: "Who is responsible for flight operations and piloting in the field?",
    faq_a4: "During the 2026-27 Validation Program, all flights are conducted and supervised in the field by qualified Strig Systems personnel under Chilean civil aviation regulations (DAN 151 / DAN 91). Partners do not need internal pilots or aircraft liability.",
    faq_q5: "What capabilities and scope does the system NOT have today?",
    faq_a5: "With total transparency: today the system does not operate beyond visual line of sight (BVLOS), does not have an unassisted automated docking station, nor does it offer a 15 km commercial service radius. We are currently at TRL 3 conducting controlled trials on private pilot sites within a bounded range under visual line of sight (VLOS) rules. These capabilities are part of our future roadmap and vision.",
    faq_q6: "How are battery recharging and logistics handled in remote forest zones?",
    faq_a6: "In the current validation and early deployment phase, we do not rely on expensive, unproven off-grid robotic boxes. We operate pragmatically leveraging our partners' existing infrastructure: ground brigade bases, helipads, or forward airstrips that already possess power, secure perimeters, and logistics. Ground crew performs rapid battery hot-swaps between consecutive patrol sorties. In the future, operational lessons learned from this field campaign will directly guide the engineering and deployment of automated docking and charging stations (Nest).",
    faq_q7: "How is integration planned with existing dispatch centers and GIS software?",
    faq_a7: "While currently in an experimental phase (TRL 3), our data architecture is designed around open standards. The technical roadmap projects telemetry and alert export in normalized formats (GeoJSON, KML, and REST API) to facilitate future interoperability with forestry dispatch systems (Arauco, CMPC, CONAF) without locking operators into proprietary closed silos.",
    faq_q8: "How does Athene differ from off-the-shelf commercial drones with thermal cameras?",
    faq_a8: "A conventional commercial drone (quadcopter multirotor) requires a human pilot with a controller actively staring at a screen in the dark during a 25–30 minute battery cycle, with limited range and high fatigue. Athene is conceived as an autonomous fixed-wing/VTOL platform designed for continuous long-range night patrol (25+ km / 90+ min), with onboard Edge AI inference (Zero-Cloud). The aircraft processes the thermal spectrum in flight and only alerts the human operator upon validated precursors (Human-in-the-Loop doctrine), drastically multiplying territory coverage without wearing down ground crews.",

    // Alliances & R&D
    alliances_tag: "Ecosystem & Traction",
    alliances_title: "Industrial Validation & Ecosystem",
    alliances_sub: "We blend aerospace engineering rigor with field discovery and active validation alongside forestry and space industry stakeholders.",
    p_corfo: "CORFO Semilla Inicia Program",
    p_udec: "Backed by UdeC",
    p_industry: "Problem validation with asset protection leadership",
    p_thermal: "Validation with satellite thermal detection ecosystem",
    collab1_head: "Deep Tech Venture Capital",
    collab1_p: "Open discussions with venture funds focused on autonomous robotics, dual-use technologies, climate resilience, and territorial defense.",
    collab2_head: "Research Institutes & Academia",
    collab2_p: "Technical cooperation in nighttime computer vision, thermal inference in dense smoke, and high-efficiency aerodynamic models.",
    collab3_head: "Public Agencies & Municipalities",
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
    cta_btn_brief: "View Executive Technical Dossier",
    cta_btn2: "Inquire for Alliances / Investment",

    // Contact Modal & Intent Selector
    intent_tab_pilot: "Field Validation (2026-27)",
    intent_tab_briefing: "Technical Briefing (15 min)",
    intent_tab_alliances: "R&D & Alliances",
    modal_badge: "2026-27 Territorial Validation",
    modal_title: "Join the 2026-27 Validation Program",
    modal_sub: "Submit your organization's details to jointly evaluate territorial feasibility and field validation requirements.",
    alliances_badge: "Ecosystem & Investment",
    alliances_modal_title: "R&D Alliances & Strategic Investment",
    alliances_modal_sub: "Direct contact with the founding team for deep tech venture funds, aerospace research centers, or operational partnerships.",
    f_alliance_type_label: "Collaboration Type *",
    opt_alliance_1: "Investment Fund / Venture Capital",
    opt_alliance_2: "R&D Center / Academic Collaboration",
    opt_alliance_3: "Public Agency / Municipality / B2G",
    f_submit_alliances: "Submit Alliance Inquiry",
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
    f_reg_biobio: "Biobío Region",
    f_reg_araucania: "La Araucanía Region",
    f_reg_maule: "Maule Region",
    f_reg_nuble: "Ñuble Region",
    f_reg_rios: "Los Ríos Region",
    f_reg_lagos: "Los Lagos Region",
    f_reg_valparaiso: "Valparaíso Region",
    f_reg_metro: "Metropolitan Region (Santiago)",
    f_reg_other: "Other Chilean Region",
    f_reg_intl: "International (Outside Chile)",
    f_interest_label: "Area of Interest *",
    f_interest_default: "Select area of interest...",
    opt_interest_1: "Technical Validation Program (Forestry / Industrial)",
    opt_interest_2: "R&D Alliances / Academic Validation",
    opt_interest_3: "Deep Tech / Dual-Use Investment",
    opt_interest_4: "General Inquiry / Technical Demonstration",
    f_message_label: "Additional Details or Specific Requirements (Optional)",
    f_message_ph: "Briefly describe your land area, geographic zone, or technical inquiry...",
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
    briefing_modal_sub: "Direct technical session with Tomás Medina (Technical Lead): evaluating terrain topography, tactical radio link margins, and operational integration requirements.",
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
    brief_doc_print: "Print / Save as PDF",
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Autonomous Nighttime Territorial Surveillance",
    eb_h1: "Autonomous Aerial Intelligence for the Nighttime Wildfire Gap",
    eb_summary: "Athene addresses the nighttime gap using the autonomous Noctua VTOL aircraft (initial validation on adapted platform), onboard Edge AI thermal inference (NVIDIA Jetson), and 915 MHz FHSS tactical telemetry—displacing blind ground patrol exposure and optimizing dawn air combat sorties.",
    eb_b1_title: "1. Operational Problem",
    eb_b1_p1: "<strong>Nighttime blind window:</strong> Manned aircraft fight fires by day but are grounded at night by DGAC regulations and controlled flight into terrain (CFIT) hazards.",
    eb_b1_p2: "<strong>99.7% human origin:</strong> The vast majority of wildfires stem from intentional or negligent human action (Source: CONAF).",
    eb_b1_p3: "<strong>Ground patrol blind spots:</strong> 4x4 pickup patrols cover &lt; 12% of land holdings, blind to ravines and deep stands where fires ignite.",
    eb_b2_title: "2. Technological Solution",
    eb_b2_p1: "<strong>Noctua™ VTOL Aircraft:</strong> Initial validation on adapted commercial platform; 45–60 min design endurance and runway-independent vertical takeoff towards the dedicated VTOL airframe.",
    eb_b2_p2: "<strong>Onboard Zero-Cloud Edge AI:</strong> NVIDIA Jetson local compute; thermal detection in seconds without internet or cell coverage.",
    eb_b2_p3: "<strong>Deterrence with Human Authorization:</strong> High-intensity light and acoustic siren activation always authorized by ground operator (Human-in-the-Loop).",
    eb_b3_title: "3. IaaS Operational Impact Model",
    eb_b3_p1: "<strong>Personnel Safety:</strong> Zero unnecessary human exposure in ravines and isolated logging roads during critical night hours.",
    eb_b3_p2: "<strong>Early Detection & Deterrence:</strong> Detection of human activity at 100 m altitude and authorized deterrence before ignition.",
    eb_b3_p3: "<strong>Dawn Air Attack Optimization:</strong> Early georeferencing of coordinates and perimeter saving critical air tanker sorties at daybreak.",
    eb_b4_title: "4. 2026-27 Validation Program",
    eb_b4_p1: "<strong>Current Status TRL 3:</strong> CORFO Semilla Inicia grant awardee, backed by UdeC, with technical demo at Gearbox (January 2027).",
    eb_b4_p2: "<strong>Private Pilot Site Campaign:</strong> 4-phase deployment methodology (Surveying, Calibration, Nighttime Surveillance, Operational Audit).",
    eb_b4_p3: "<strong>Governance & Contact:</strong> Models and mission software under exclusive ownership of Strig Systems SpA • Tomás Medina (Technical Lead) | <code>contacto@strigsystems.tech</code>",

    // Footer
    footer_tagline: "Autonomous uncrewed aircraft systems and Edge AI computing for proactive critical risk mitigation.",
    f_nav: "Navigation",
    f_corp: "Corporate",
    f_privacy_link: "Privacy Policy & Governance",
    f_terms_link: "B2B Terms of Service & Pilotage",

    // Subpage: Venture (/venture.html)
    v_back_home: "← Return to Command Center",
    v_nav_market: "Market",
    v_nav_moat: "Tech Moat",
    v_nav_traction: "Traction",
    v_nav_model: "Model & Capital",
    v_nav_team: "Team",
    v_nav_cta: "Contact Investor Relations",
    v_hero_eyebrow: "INVESTMENT DOSSIER // STRIG SYSTEMS SpA",
    v_hero_title_1: "Autonomous sentinel infrastructure",
    v_hero_title_2: "for forestry and industrial protection.",
    v_hero_sub: "Strig Systems develops long-range uncrewed aerial systems and onboard Edge AI thermal inference to solve the nighttime wildfire gap, where manned aviation is grounded by safety regulations and DGAC directives.",
    v_cta_pitch: "Schedule 15-Min Technical Briefing",
    v_cta_brief: "Executive Brief (PDF)",
    v_mkt_tag: "Market Opportunity",
    v_mkt_title: "Market Sizing & Capital Allocation Gap",
    v_mkt_sub: "Recurring multi-million dollar losses in South-Central Chile and an unsolved demand for persistent nighttime surveillance.",
    v_mkt_pending_tag: "[PRELIMINARY ESTIMATE // PENDING FOUNDING TEAM VALIDATION]",
    v_mkt_pending_desc: "Macrosectoral metrics and surface projections estimated for initial modeling, currently under calibration and verification with primary pilot campaign data.",
    v_mkt_preliminary_badge: "[CALIBRATION IN PROGRESS]",
    v_tam_tag: "TAM · TOTAL ADDRESSABLE MARKET",
    v_tam_val: "2.4M ha",
    v_tam_title: "Commercial forest plantations in Chile",
    v_tam_desc: "Total surface area of productive plantations (Arauco, CMPC, and mid-sized landholders) chronically exposed to seasonal catastrophic wildfires.",
    v_sam_tag: "SAM · SERVICEABLE ADDRESSABLE MARKET",
    v_sam_val: ">1.5M ha",
    v_sam_title: "Large landholdings in South-Central Chile",
    v_sam_desc: "Forestry enterprises with continuous clusters >10,000 ha across Biobío, Ñuble, Maule, and La Araucanía with dedicated asset protection budgets.",
    v_som_tag: "SOM · SERVICEABLE OBTAINABLE MARKET",
    v_som_val: "50,000 ha",
    v_som_title: "2026-27 Territorial Validation Campaign",
    v_som_desc: "2 to 3 high-priority private pilot sites for field operational demonstration, AI edge calibration, and multi-year IaaS contracts.",
    v_inaction_tag: "COST OF INACTION",
    v_inaction_val: "US$ 150M+",
    v_inaction_title: "Annual suppression spend & direct damages",
    v_inaction_desc: "Combined public and private expenditure during severe seasons. Ground 4x4 patrols cover &lt;12% of acreage and remain blind to deep ravines.",
    v_moat_tag: "Defensibility & Technology",
    v_moat_title: "Why Our Architecture Is Difficult to Replicate",
    v_moat_sub: "Four vectors of structural differentiation versus consumer drones and orbital satellite constellations.",
    v_m1_meta: "MOAT 01 // AUTONOMY & DOCTRINE",
    v_m1_title: "Autonomous Sentinel vs Manual Drones",
    v_m1_desc: "A commercial quadcopter demands a dedicated human pilot staring at a screen in the dark across a 25-min battery life. Athene executes pre-programmed autonomous missions with vertical takeoff/landing (VTOL) and only escalates classified alerts to the human operator (Human-in-the-Loop).",
    v_m1_diff: "Advantage: 1 operator can supervise N aircraft from a secure C2 console, eliminating fatigue and nighttime ground hazards.",
    v_m2_meta: "MOAT 02 // EDGE COMPUTING",
    v_m2_title: "Zero-Cloud Edge AI vs Satellite/Cellular Latency",
    v_m2_desc: "LWIR radiometric thermal inference runs locally onboard on low-power compute (NVIDIA Jetson). We require zero 4G/5G links or cloud servers to classify an outbreak or human silhouette in microseconds within zero-coverage ravines.",
    v_m2_diff: "Advantage: Zero link latency and resilience against deliberate fiber or cellular signal sabotage.",
    v_m3_meta: "MOAT 03 // OPERATIONAL WINDOW",
    v_m3_title: "Nocturnal Specialization vs Daytime Flight",
    v_m3_desc: "Manned aerial firefighting is strictly grounded at night by DGAC regulations and controlled flight into terrain (CFIT) hazards. We design specifically for the 00:00–06:00 AM window, when intentional ignitions peak and dry winds accelerate unchecked fires.",
    v_m3_diff: "Advantage: Exclusive operational dominance over the critical window where industrial operators are currently 100% blind.",
    v_m4_meta: "MOAT 04 // PROPRIETARY DATA MOAT",
    v_m4_title: "Proprietary Thermal Signature Benchmark",
    v_m4_desc: "Every flight hour in real forest terrain expands our proprietary radiometric infrared dataset under South American canopy, training edge filters against warm rock, wildlife, and residual machinery false positives.",
    v_m4_diff: "Advantage: A foreign competitor deploying off-the-shelf drones lacks the local radiometric training dataset for South American ecosystems.",
    v_trac_tag: "Traction & Milestones",
    v_trac_title: "From Aerospace Lab Conception to Field Validation",
    v_trac_sub: "Roadmap backed by CORFO and the University of Concepción.",
    v_t1_date: "October 2025",
    v_t1_title: "Incorporation of Strig Systems SpA",
    v_t1_desc: "Founded by 5 aerospace engineering graduates from Universidad de Concepción after identifying the structural nighttime gap in wildfire suppression.",
    v_t2_date: "November 2025",
    v_t2_title: "CORFO Semilla Inicia Grant Award",
    v_t2_desc: "Non-dilutive funding for rapid technical and commercial validation of the Athene sentinel platform.",
    v_t3_date: "December 2025 – March 2026",
    v_t3_title: "Discovery Interviews & Problem Validation",
    v_t3_desc: "Technical validation with asset protection managers at leading forestry enterprises (Arauco) and benchmarking against satellite thermal networks (OroraTech / Everseek).",
    v_t4_date: "Active 2026",
    v_t4_title: "Incubation & Acceleration at Gearbox UdeC",
    v_t4_desc: "Selection into the engineering accelerator at Universidad de Concepción. Experimental hardware-in-the-loop avionics testbench and thermal vision pipeline development.",
    v_t5_date: "January 2027 (Upcoming)",
    v_t5_title: "Gearbox Demo Day — TRL 3 Flight Demonstration",
    v_t5_desc: "Autonomous flight demonstration and real-time edge thermal classification before the international evaluation jury (Chris Klaus, Fusen World) and deeptech venture funds.",
    v_t6_date: "June 2027 (Projected)",
    v_t6_title: "Private Forestry Pilot Site Deployment",
    v_t6_desc: "Nocturnal field operational validation in commercial forest acreage alongside partner enterprise under bounded VLOS flight envelope.",
    v_biz_tag: "Business Model & Governance",
    v_biz_title: "Intelligence as a Service (IaaS)",
    v_biz_sub: "Incentive alignment without upfront capital expenditure barriers for industrial operators.",
    v_b1_title: "Nocturnal Surveillance Subscription",
    v_b1_desc: "Recurring fee per protection cycle and scheduled flight hours. Zero fleet acquisition or depreciation on the client balance sheet.",
    v_b2_title: "Negotiable Structure in Pilot Phase",
    v_b2_desc: "For the 2026-27 validation campaign, pricing is structured to fit site acreage, topography, and dispatch integration requirements.",
    v_posture_badge: "[ROUND & CAPITAL // TRL 3]",
    v_posture_title: "Venture Capital Posture",
    v_posture_p: "We are currently funded by CORFO Semilla Inicia and supported by Universidad de Concepción. Strig Systems is not currently conducting an active funding round; however, we maintain open relationships with specialized deeptech VCs (robotics, dual-use, climate resilience), syndicates, and strategic angels ahead of our January 2027 Demo Day and planned 2027 Seed round.",
    v_posture_cta: "Connect with the Founding Team",
    v_team_tag: "Founding Team",
    v_team_title: "Aerospace Engineering with Execution Mindset",
    v_team_sub: "5 civil aerospace engineers from Universidad de Concepción mastering avionics, deterministic control, structures, and computer vision.",
    v_bio_tomas: "Civil Aerospace Engineer • Computer Vision, Machine Learning, CAD/CAM and Systems Engineering.",
    v_bio_carlos: "Active Firefighter • Civil Aerospace Engineer. CFD analysis, operational logistics, and tactical interface architecture.",
    v_bio_ananda: "Civil Aerospace Engineer • RPAS integration and flight trials, CAD, finite element analysis (FEA), and CFD.",
    v_bio_richard: "Civil Aerospace Engineer • Systems engineering, regulatory compliance, quality assurance, and aeronautical certification.",
    v_bio_pablo: "Civil Aerospace Engineer • Systems architecture, data flow logic and integration, verification and validation.",
    team_adv_badge: "TECHNICAL ADVISOR",
    v_bio_advisor: "PhD Space Systems Engineering and Management. Advisor in mission architecture and aerospace technology development.",
    v_cta_sec_tag: "Alliances & Investment",
    v_cta_sec_title: "Let's Discuss the Future of Autonomous Surveillance",
    v_cta_sec_sub: "We are available to schedule a 15-minute technical briefing or share our executive whitepaper with funds and strategic partners.",

    // Subpage: Pilot Validation Program (/programa.html)
    p_back_home: "← Return to Command Center",
    p_nav_benchmark: "Benchmark",
    p_nav_protocol: "02:00 AM Protocol",
    p_nav_methodology: "Methodology",
    p_nav_criteria: "Site Criteria",
    p_nav_iaas: "IaaS Model",
    p_nav_faq: "FAQ",
    p_nav_cta: "Apply for Pilot Site",
    p_hero_eyebrow: "2026-27 TERRITORIAL VALIDATION PROGRAM // FORESTRY CO-INNOVATION",
    p_hero_title_1: "Operational validation of nighttime aerial surveillance",
    p_hero_title_2: "on private forestry pilot acreage.",
    p_hero_sub: "We invite asset protection directors and forestry operations teams to field-validate the Athene sentinel platform under a bounded VLOS flight envelope, mitigating human exposure and anticipating ignitions in the 00:00–06:00 AM gap.",
    p_cta_apply: "Apply Site for 2026-27 Validation",
    p_cta_brief: "Executive Brief (PDF)",
    p_c1_title: "Nocturnal Blind Window",
    p_c1_body: "Manned aerial suppression operates by day but is legally and operationally grounded at night due to Controlled Flight Into Terrain (CFIT) hazards. Ignitions spread unchecked until daybreak.",
    p_c2_title: "Ground Blind Spots",
    p_c2_body: "4x4 pickup patrols cover &lt; 12% of land holdings, restricted to accessible roads and blind to deep ravines and dense stands where intentional fire outbreaks start.",
    p_c3_title: "Unnecessary Human Exposure",
    p_c3_body: "Surveillance personnel and ground crews traverse remote sectors at night without prior threat verification, exposed to ambushes, road accidents, or fire entrapment during sudden flare-ups.",
    p_proto_tag: "Human-in-the-Loop Tactical Doctrine",
    p_proto_title: "The 02:00 AM Alert & Dispatch Cycle",
    p_proto_sub: "How Athene operates from subsurface thermal detection to human authorization on the C2 console in under 3 minutes.",
    p_step1_time: "02:14:02 CLT",
    p_step1_step: "STEP 01 // DETECTION",
    p_step1_title: "Thermal signature in deep ravine",
    p_step1_desc: "Bispectral radiometric LWIR optronic sensor (<50 mK) detects a pinpoint thermal anomaly in a ravine completely blind to optical towers and ground patrols.",
    p_step2_time: "02:14:05 CLT",
    p_step2_step: "STEP 02 // LOCAL INFERENCE",
    p_step2_title: "Onboard Zero-Cloud Edge AI",
    p_step2_desc: "Onboard NVIDIA Jetson module processes the radiometric signature in microseconds, discriminating between warm rock/wildlife and human presence or nascent fire.",
    p_step3_time: "02:14:20 CLT",
    p_step3_step: "STEP 03 // C2 TELEMETRY",
    p_step3_title: "FHSS tactical link to ground station",
    p_step3_desc: "Anti-jamming 900 MHz band transmission delivering telemetry, high-precision WGS84 coordinates, and synthetic thermal thumbnail to the ground console.",
    p_step4_time: "02:15:10 CLT",
    p_step4_step: "STEP 04 // HUMAN DECISION",
    p_step4_title: "Human-in-the-Loop authorization",
    p_step4_desc: "Qualified operator on secure C2 console inspects radiometric imagery. Zero autonomous physical deterrence: any active countermeasure requires explicit human authorization.",
    p_step5_time: "02:16:00 CLT",
    p_step5_step: "STEP 05 // RESPONSE",
    p_step5_title: "Deterrence or GeoJSON export",
    p_step5_desc: "Operator triggers high-intensity strobe light for deterrence or immediately exports GeoJSON package to dispatch headquarters to direct ground crews at dawn.",

    // Off-Grid Tactical Datalink Architecture
    flow_tag: "OFF-GRID DATALINK ARCHITECTURE",
    flow_title: "Closing the Tactical Loop in Zero-Cellular Remote Zones",
    flow_sub: "A majority of forestry and mountainous parcels have poor cellular coverage. Athene operates via direct local tactical radio links between the aircraft and the ground station.",
    flow_s1_title: "VTOL Aircraft (Aerial Node)",
    flow_s1_desc: "Onboard Edge AI thermal inference with NVIDIA Jetson. Detects precursors and human presence, sends alerts to the ground station, and triggers emergency return upon link loss.",
    flow_s1_badge: "Onboard Edge AI",
    flow_s1_f1_lbl: "Avionics & Compute:",
    flow_s1_f1_val: "Redundant-architecture flight controller and Edge AI computer coupled via opto-isolated serial link with MAVLink v2 telemetry.",
    flow_s1_f2_lbl: "Geopositioning:",
    flow_s1_f2_val: "Onboard fusion of centimetric GPS (RTK) and digital elevation models (DEM) for metric fire coordinate estimation.",
    flow_c1_label: "⇄ 915 MHz FHSS Tactical Link (Line-of-Sight)*",
    flow_s2_title: "Operator Station (Field)",
    flow_s2_desc: "Real-time reception of tactical alerts and telemetry. The operator evaluates and authorizes deterrence light and siren activation from a safe position.",
    flow_s2_badge: "Human Supervision (HITL)",
    flow_s2_f1_lbl: "Tactical Console:",
    flow_s2_f1_val: "IP65 ruggedized laptop for forestry field ops with offline preloaded vector cartography.",
    flow_s2_f2_lbl: "HITL Authorization:",
    flow_s2_f2_val: "Dual safety confirmation on console before triggering deterrence light or siren.",
    flow_c2_label: "⇄ Local Network / Available IP Link",
    flow_s3_title: "Partner Dispatch & Operations Center",
    flow_s3_desc: "Reception of georeferenced alert dossiers and mission logs for crew coordination and audit trails (GIS / Webhook integration).",
    flow_s3_badge: "Operational Integration",
    flow_s3_f1_lbl: "Projected Interoperability:",
    flow_s3_f1_val: "Architectural roadmap: open data export (GeoJSON / KML / REST API) projected for future compatibility with forestry dispatch centers and GIS software (ArcGIS, QGIS).",
    flow_s3_f2_lbl: "Legal Traceability:",
    flow_s3_f2_val: "Incident dossier with timestamp and verified coordinates for forensic traceability.",
    flow_reg_badge: "[REGULATORY & SPECTRUM]",
    flow_reg_text: "* Regulatory compliance and spectrum: Telemetry and C2 link operating in 915 MHz ISM band under SUBTEL Chile power emission regulations with Frequency-Hopping Spread Spectrum (FHSS) anti-jamming modulation. Flight operations conducted under DGAC DAN 313 (Remotely Piloted Aircraft Systems / RPAS regulations) in bounded VLOS regime with certified on-site safety pilot during the 2026-27 validation campaign.",
    spec_toggle_txt: "+ Details",

    p_iaas_tag: "Service Model & Piloting",
    p_iaas_title: "Operational Conditions & Data Governance",
    p_iaas_sub: "Flexible structure focused on collaboration with zero capital acquisition barriers or aircraft ownership required by the forestry partner.",
    p_iaas1_tag: "[IAAS // CONDITION 01]",
    p_iaas1_title: "Subscription without Fleet Acquisition (Zero CAPEX)",
    p_iaas1_desc: "The collaborating enterprise purchases no aircraft and absorbs zero hardware depreciation. Strig Systems provides the platform, mission avionics, maintenance, and flight operations.",
    p_iaas2_tag: "[IAAS // CONDITION 02]",
    p_iaas2_title: "Customized Agreement for 2026-27 Campaign",
    p_iaas2_desc: "Pilot scope is co-defined according to priority acreage, topography, and critical forest-urban interface zones.",
    p_iaas3_tag: "[IAAS // CONDITION 03]",
    p_iaas3_title: "Data Governance & Confidentiality (NDA)",
    p_iaas3_desc: "All validation flight operations are conducted under strict technical non-disclosure agreements (NDA). Geospatial property data remains under exclusive client confidentiality.",
    p_faq_tag: "Answers to Operational Inquiries",
    p_faq_title: "Operational Frequently Asked Questions",
    p_faq_sub: "Engineering criteria on operational envelopes, meteorology, and field deployment.",
    p_faq1_q: "How is Controlled Flight Into Terrain (CFIT) risk managed during nighttime missions?",
    p_faq1_a: "The aircraft executes pre-programmed flight paths over a high-resolution Digital Elevation Model (DEM), maintaining a constant vertical safety buffer above terrain. Primary flight control operates with strict geofencing and does not rely on visual ground pilot perception.",
    p_faq2_q: "How are false alarms from wildlife, heated rocks, or lingering daytime machinery handled?",
    p_faq2_a: "The Edge AI model cross-references radiometric signature (absolute pixel temperature) with spatial morphology and temporal persistence. False alarm rate is a core validation KPI: technical acceptance criterion is < 10%, targeting < 5% in persistent operational service.",
    p_faq3_q: "What happens in high wind or sudden gusts (Puelche wind conditions)?",
    p_faq3_a: "The experimental platform aerodynamic design targets gust tolerance up to 10–12 m/s (~36–43 km/h / ~19–23 kt). If onboard or ground meteorological sensors detect conditions exceeding the safety envelope, the mission aborts automatically and the aircraft executes Return-to-Launch (RTL).",
    p_faq4_q: "What occurs if telemetry link to the ground station is lost?",
    p_faq4_a: "The aircraft incorporates deterministic Fault Detection, Isolation and Recovery (FDIR) logic on the primary flight controller. Upon persistent link loss, it executes a failsafe climb to safe transit altitude, re-attempts link handshake, and returns to home base via redundant inertial navigation and GNSS.",
    p_faq5_q: "Who operates the aircraft during the validation campaign?",
    p_faq5_a: "During the 2026-27 validation phase, flight missions are operated directly by Strig Systems technical personnel with DGAC-certified UAV operators. The partner enterprise provides site access, territorial context, and liaison personnel for joint evaluation.",
    p_faq6_q: "How does Athene interface with existing dispatch centers (CONAF, Arauco, CMPC)?",
    p_faq6_a: "The ground station generates standardized georeferenced alert packets (GeoJSON / KML) and synthetic thermal thumbnails. Data architecture is designed to export directly to existing dispatch software via standard REST API or encrypted tactical email during the pilot phase.",
    p_faq7_q: "Can the system operate in coastal fog or low-cloud conditions (camanchaca)?",
    p_faq7_a: "The LWIR sensor (8–14 μm) penetrates light smoke and thin haze far more effectively than optical cameras. However, dense fog with liquid droplet condensation attenuates infrared radiation; in severe conditions, flight ceilings are restricted or missions held for safety.",
    p_faq8_q: "What is the regulatory framework for commercial nighttime drone flight in Chile?",
    p_faq8_a: "Initial pilot operations are conducted over bounded private forestry land within Visual Line of Sight (VLOS) under DGAC DAN 151 / DAN 91 regulations. Progression toward long-range Beyond Visual Line of Sight (BVLOS) operations is systematically structured following SORA (Specific Operations Risk Assessment) guidelines.",
    p_cta_box_tag: "2026-27 Pilot Program",
    p_cta_box_title: "Interested in evaluating Athene on your enterprise acreage?",
    p_cta_box_sub: "Let's coordinate a territorial feasibility meeting or a 15-minute briefing with Tomás Medina (Technical Lead).",

    // Subpage: About Us & Aerospace Team (/nosotros.html)
    n_back_home: "← Return to Command Center",
    n_nav_history: "Story",
    n_nav_simple: "What We Do",
    n_nav_roadmap: "Roadmap & TRL",
    n_nav_backing: "Backing",
    n_nav_team: "Team",
    n_nav_glossary: "Glossary",
    n_nav_collab: "Collaborate",
    n_nav_cta: "Contact the Team",
    n_hero_eyebrow: "IDENTITY // STRIG SYSTEMS SpA",
    n_hero_title_1: "Aerospace engineering born at",
    n_hero_title_2: "Universidad de Concepción.",
    n_hero_sub: "We are 5 civil aerospace engineers who believe Chile's forests, communities, and territory can be better protected by uniting aerial autonomy, thermal vision, and sovereign artificial intelligence.",
    n_cta_contact: "Connect with the Team",
    n_cta_brief: "Executive Brief (PDF)",
    n_simple_tag: "What we do · In plain language",
    n_simple_title: "Aerospace technology explained simply",
    n_simple_sub: "The vast majority of catastrophic wildfires in Chile start at night in isolated ravines and logging trails. We build the eyes and intelligence to anticipate them.",
    n_s1_title: "Eyes in complete darkness",
    n_s1_desc: "We do not rely on standard daylight cameras. We carry thermal sensors that capture invisible heat radiation: detecting nascent campfires or people walking under forest canopy in the dead of night.",
    n_s2_title: "Onboard brain without internet",
    n_s2_desc: "In remote mountain ravines there is zero 4G or 5G coverage. That is why our artificial intelligence travels physically inside the aircraft: processing radiometric images in microseconds without sending data to outside servers.",
    n_s3_title: "Safeguarding human frontline lives",
    n_s3_desc: "No firefighter or security ranger should enter remote ravines blindfolded at night facing entrapment or road accidents. The aerial sentinel confirms first from the sky, delivering precise coordinates before deploying personnel.",
    n_trl_tag: "Technical maturity & honesty",
    n_trl_title: "What TRL 3 means and how we progress",
    n_trl_sub: "Rigorous engineering never promises commercial shelf availability prematurely. We explain transparently where we stand and our real committed milestones.",
    n_trl_badge: "[MATURITY METRICS // TRL 3]",
    n_trl_box_title: "What exactly does being at TRL 3 mean?",
    n_trl_box_p1: "The Technology Readiness Level (TRL) scale was created by NASA and is the global benchmark adopted by CORFO to evaluate technological maturity, spanning from basic theory (TRL 1) to proven flight operations (TRL 9).",
    n_trl_box_p2: "<strong>TRL 3 means \"Experimental proof-of-concept in laboratory\":</strong> We have validated mathematical flight models, thermal inference on embedded GPUs, and mission avionics on testbenches. We do not sell boxed drones or catalog services today: we are building the experimental prototype for our first public flight demonstration in January 2027 (Gearbox Demo Day) and private forestry pilot validation in June 2027.",
    n_t1_date: "October 2025",
    n_t1_title: "Incorporation of Strig Systems SpA",
    n_t1_desc: "Formation of the company in Concepción by 5 aerospace engineering graduates from Universidad de Concepción focused on autonomy and wildfire mitigation.",
    n_t2_date: "November 2025",
    n_t2_title: "CORFO Semilla Inicia Grant Award",
    n_t2_desc: "Selection for non-dilutive public funding from CORFO to advance technical proof-of-concept and commercial validation of Athene.",
    n_t3_date: "2026 (In Execution)",
    n_t3_title: "Gearbox UdeC Acceleration & Avionics Testbench",
    n_t3_desc: "Experimental development in the UdeC Aerospace Lab, thermal AI model tuning, and discovery interviews with leading forestry managers.",
    n_t4_date: "January 2027 (Upcoming Milestone)",
    n_t4_title: "Gearbox Demo Day — Autonomous Flight Demo",
    n_t4_desc: "Proof-of-concept flight and live edge thermal inference demonstration before the international evaluation jury (Chris Klaus, Fusen World) and investors.",
    n_t5_date: "June 2027 (Projected)",
    n_t5_title: "Forestry Pilot Site Field Campaign",
    n_t5_desc: "Nocturnal field trials on private forestry acreage under bounded Visual Line of Sight (VLOS) envelope, validating detection latency and false alarm filters.",
    n_resp_tag: "Infrastructure & Partnerships",
    n_resp_title: "Institutional backing & engineering foundation",
    n_resp_sub: "Supported by leading institutions in science, aeronautics, and deeptech venture acceleration.",
    n_sup1_title: "CORFO · Semilla Inicia",
    n_sup1_desc: "Awardees of Chilean government competitive seed funding for high-impact science and technology ventures to accelerate commercial and technical validation.",
    n_sup2_title: "UdeC Aerospace Laboratory",
    n_sup2_desc: "Development and experimental testbench facility within the Faculty of Engineering at Universidad de Concepción. Equipped with wind tunnel, aerodynamic modeling, and composite design tools.",
    n_sup3_title: "Gearbox UdeC",
    n_sup3_desc: "Deeptech accelerator at the Faculty of Engineering, Universidad de Concepción. Providing governance mentoring, industrial alignment, and venture capital connections.",
    n_team_tag: "Founding Team",
    n_team_title: "The 5 engineers behind the project",
    n_team_sub: "We met and trained as aerospace engineers at Universidad de Concepción, united by the conviction that heavy deeptech can be engineered from the Biobío region.",
    founder_lead: "FOUNDER & TECHNICAL LEAD",
    spec_tomas: "Civil Aerospace Engineer · UdeC",
    n_bio_tomas: "Civil Aerospace Engineer • Computer Vision, Machine Learning, CAD/CAM and Systems Engineering.",
    founder_ops: "CO-FOUNDER",
    spec_carlos: "Civil Aerospace Engineer · UdeC",
    n_bio_carlos: "Active Firefighter • Civil Aerospace Engineer. CFD analysis, operational logistics, and tactical interface architecture.",
    founder_aero: "CO-FOUNDER",
    spec_ananda: "Civil Aerospace Engineer · UdeC",
    n_bio_ananda: "Civil Aerospace Engineer • RPAS integration and flight trials, CAD, finite element analysis (FEA), and CFD.",
    founder_prop: "CO-FOUNDER",
    spec_richard: "Civil Aerospace Engineer · UdeC",
    n_bio_richard: "Civil Aerospace Engineer • Systems engineering, regulatory compliance, quality assurance, and aeronautical certification.",
    founder_dyn: "CO-FOUNDER",
    spec_pablo: "Civil Aerospace Engineer · UdeC",
    n_bio_pablo: "Civil Aerospace Engineer • Systems architecture, data flow logic and integration, verification and validation.",
    n_glo_tag: "Accessible Glossary",
    n_glo_title: "Demystifying deeptech terminology",
    n_glo_sub: "If you read our whitepapers or investor decks, here are the core concepts translated into everyday language.",
    g1_term: "Edge AI (Onboard Computing)",
    g1_lay: "The computing brain physically travels inside the aircraft, allowing it to process thermal imagery instantly without requiring internet or cellular service.",
    g1_tech: "Local radiometric inference on embedded low-power GPU (NVIDIA Jetson) operating under 10 ms latency.",
    g2_term: "LWIR (Long-Wave Infrared)",
    g2_lay: "A camera that captures exact heat emitted by objects, foliage, or people in total darkness, rather than reflected visible light.",
    g2_tech: "Microbolometer sensor in 8–14 μm spectrum with NETD < 50 mK thermal sensitivity for subsurface anomaly detection.",
    g3_term: "VTOL (Vertical Takeoff and Landing)",
    g3_lay: "An aircraft that takes off straight up like a helicopter in tight clearings or dirt roads, and then flies forward on wings like an airplane.",
    g3_tech: "Hybrid configuration combining vertical thrust for runway-free deployment with high aerodynamic cruise efficiency.",
    g4_term: "Human-in-the-Loop (HITL)",
    g4_lay: "Artificial intelligence detects and alerts, but never acts on its own: any physical countermeasure or critical escalation requires explicit human sign-off.",
    g4_tech: "Deterministic C2 protocol where human operator validates radiometric footprint before triggering illumination or dispatch alerts.",
    g5_term: "FHSS 900 MHz (Frequency Hopping)",
    g5_lay: "A tactical radio link that changes channels dozens of times per second to prevent interference, jamming, and signal loss in rough terrain.",
    g5_tech: "Frequency-Hopping Spread Spectrum in sub-GHz ISM band offering superior canopy penetration through deep forestry ravines.",
    g6_term: "TRL (Technology Readiness Level)",
    g6_lay: "A 1-to-9 measurement scale created by NASA to gauge whether a technology is an idea (1), a lab prototype (3), or fully operational in the field (9).",
    g6_tech: "Technology Readiness Level. Strig Systems is currently at TRL 3 advancing toward TRL 4 (validation in simulated and bounded environments).",
    g7_term: "VLOS vs BVLOS (Flight Visibility)",
    g7_lay: "VLOS means flying where the operator can physically see the aircraft. BVLOS means flying miles away guided strictly by onboard sensors and instruments.",
    g7_tech: "Visual Line of Sight under DGAC DAN 151/91 for early pilots; progression to Beyond Visual Line of Sight guided by SORA risk methodology.",
    g8_term: "FDIR (Fault Recovery Architecture)",
    g8_lay: "A smart safety system that senses if an onboard component fails and automatically takes the safest course: returning home or deploying an emergency parachute.",
    g8_tech: "Fault Detection, Isolation and Recovery. Onboard algorithmic logic switching redundant sensors and commanding failsafe Return-to-Launch (RTL).",
    n_collab_tag: "Community & Engagement",
    n_collab_title: "Build with us",
    n_collab_sub: "We are building a deeptech venture from Concepción with global aspirations. Here are three ways to get involved today.",
    c1_title: "Studying at UdeC with a passion for aerospace?",
    c1_desc: "We look for thesis students, researchers, and interns in aerospace, mechanical, electrical, electronic, and software engineering wanting hands-on hardware, computer vision, and flight dynamics experience.",
    c1_btn: "Apply as Collaborator",
    c2_title: "Press, media & journalists",
    c2_desc: "If you cover Chilean innovation, climate tech, wildfire prevention, or aerospace engineering, we are glad to schedule technical interviews and share our media kit.",
    c2_btn: "Contact Press Desk",
    c3_title: "Communities, NGOs & Industry",
    c3_desc: "Do you represent a community on the wildland-urban interface, an enterprise with isolated assets, or an applied research center? We want to understand your operational reality.",
    c3_btn: "Propose Partnership",

    // Landing Funnel & Streamlined Sections
    funnel_tag: "ACCESS CHANNELS // ROUTING",
    funnel_title: "How can we collaborate?",
    funnel_sub: "Select the channel tailored for your institutional profile or operational focus.",
    fn1_tag: "[ VENTURE & SEED 2027 ]",
    fn1_title: "Investors, Funds & Accelerators",
    fn1_desc: "DeepTech investment thesis, TAM/SAM/SOM market, defensive data moat advantages, IaaS unit economics, and traction milestones toward Seed 2027.",
    fn1_action: "View thesis & investor deck data",
    fn2_tag: "[ ASSET PROTECTION & PILOT ]",
    fn2_title: "Forestry & Industrial Operators",
    fn2_desc: "02:00 AM alert dispatch loop, tactical benchmark vs manual drones and satellites, pilot field trial methodology, and negotiated IaaS model.",
    fn2_action: "Explore 2026-27 validation program",
    fn3_tag: "[ WHO WE ARE // PURPOSE ]",
    fn3_title: "Community, Students & Media",
    fn3_desc: "The story of 5 UdeC aerospace engineers, jargon-free explanations, plain-language tactical glossary, institutional backing, and career collaboration channels.",
    fn3_action: "Meet the team & read our story",

    sol_tag: "ARCHITECTURE & CAPABILITIES // 30 SECONDS",
    sol_title: "Aerial intelligence where other systems are blind",
    sol_sub: "Designed specifically to operate in complete darkness, independent of cellular networks, with permanent human authorization.",
    sol_d1_title: "Nighttime VTOL Sentinel & Data Moat",
    sol_d1_desc: "Pre-programmed patrols across the 21:00 to 08:00 blind window with no field pilot needed, accumulating a proprietary bank of thermal signatures and Chilean biomass.",
    sol_d2_title: "Zero-Cloud Edge AI Onboard Inference",
    sol_d2_desc: "Real-time thermal processing via NVIDIA Jetson embedded on the aircraft, discriminating nascent hot spots in milliseconds without requiring satellite or 4G data.",
    sol_d3_title: "Human-in-the-Loop Doctrine (HITL)",
    sol_d3_desc: "Every alert is relayed to the human operator console; no physical deterrence or brigade alert is dispatched without human confirmation and authorization.",
    sol_explore_cta: "View 5-step dispatch protocol & tactical specifications",

    team_compact_tag: "FOUNDING TEAM // UDEC ENGINEERING",
    team_compact_title: "Civil aerospace engineers built to execute",
    team_compact_sub: "The multidisciplinary technical team behind Athene's aerodynamic design, avionics, computer vision, and deterministic control.",
    team_explore_cta: "Meet the 5 founders and discover how to collaborate",

    nav_inicio: "Home",
    nav_nosotros: "About Us",
    nav_protocolo_link: "5-Step Protocol",
    nav_protocolo_link_desc: "02:00 AM alert sequence and C2 dispatch",
    nav_benchmark_link: "Tactical Benchmark",
    nav_benchmark_link_desc: "Athene vs satellites, watchtowers, and manual drones",
    nav_piloto_link: "Validation 2026-27",
    nav_piloto_link_desc: "4-phase methodology & site criteria",
    nav_faq_operacional: "Operational FAQ",
    nav_faq_operacional_desc: "Wind, fog, false alarms & cost model",
    nav_especificaciones: "Tactical Specifications",

    // Segmented Pages Parity Keys
    iaas_tag1: "[IAAS // 01]",
    iaas_tag2: "[IAAS // 02]",
    v_role_tomas: "Founder & Technical Lead",
    v_role_carlos: "Co-founder",
    v_role_ananda: "Co-founder",
    v_role_richard: "Co-founder",
    v_role_pablo: "Co-founder",
    v_role_advisor: "PhD Space Systems Engineering and Management • Director UdeC Aerospace Lab",
    footer_copyright_udec: "© 2026 Strig Systems SpA. Concepción, Chile · University of Concepción.",
    p_diag1_id: "[DIAG // 01]",
    p_diag2_id: "[DIAG // 02]",
    p_diag3_id: "[DIAG // 03]",
    p_crit1_tag: "CRIT // 01",
    p_crit2_tag: "CRIT // 02",
    p_crit3_tag: "CRIT // 03",
    p_crit4_tag: "CRIT // 04",
    n_card1_tag: "[01 // THERMAL VISION]",
    n_card2_tag: "[02 // ONBOARD INTELLIGENCE]",
    n_card3_tag: "[03 // HUMAN SAFETY]",
    n_sup1_tag: "[PUBLIC FUNDING]",
    n_sup2_tag: "[ENGINEERING BASE]",
    n_sup3_tag: "[ACCELERATION]",
    g_tag_comp: "[COMPUTATION]",
    g_tag_sens: "[SENSORS]",
    g_tag_aero: "[AERONAUTICS]",
    g_tag_ethic: "[ETHICAL DOCTRINE]",
    g_tag_comm: "[COMMUNICATIONS]",
    g_tag_global: "[GLOBAL STANDARD]",
    g_tag_dgac: "[DGAC REGULATION]",
    g_tag_safety: "[FLIGHT SAFETY]",
    collab_tag1: "[STUDENTS & ENGINEERING]",
    collab_tag2: "[PRESS & MEDIA]",
    collab_tag3: "[INDUSTRY ALLIANCES]"
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
      if (window.umami) {
        window.umami.track('Switch-Language', { lang: nextLang });
      }
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
  initScrollSpy();

  // Initialize Unified Contact Modal & Executive Brief Modal
  initContactModal();
  initExecutiveBriefModal();


  // Initialize Technical FAQ Accordion
  initFaq();

  // Initialize Interactive Tooltips & Source Badges
  initTooltips();

  // Initialize Interactive Tech Spec Drawers
  initTechSpecDrawers();

  // Initialize Tactical Benchmark Progressive Disclosure Matrix Controls
  initMatrixViewToggle();

  // Initialize Live Avionics HUD Telemetry Micro-Fluctuations (Resource & Battery Aware)
  initLiveHudTelemetry();

  // Initialize Umami Virtual Pages & Section Reading Telemetry (Privacy-First)
  initUmamiSectionAndScrollTelemetry();

  // Initialize Tactical Back-to-Top Floating Button
  initBackToTop();
});

/**
 * Apply language dictionary to DOM
 */
function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('strig_lang', lang);

  // Update document title dynamically based on data-page
  const page = document.documentElement.getAttribute('data-page') || 'home';
  if (page === 'venture') {
    document.title = lang === 'en'
      ? "Strig Systems | Venture, Market & Tech Moat (TRL 3)"
      : "Strig Systems | Venture, Mercado y Foso Defensivo (TRL 3)";
  } else if (page === 'programa') {
    document.title = lang === 'en'
      ? "Strig Systems | 2026-27 Territorial Validation Program"
      : "Strig Systems | Programa de Validación Territorial 2026-27";
  } else if (page === 'nosotros') {
    document.title = lang === 'en'
      ? "Strig Systems | About Us & Aerospace Team"
      : "Strig Systems | Nosotros y Equipo Aeroespacial";
  } else {
    document.title = lang === 'en'
      ? "Strig Systems | Athene — Autonomous Aerial Intelligence"
      : "Strig Systems | Athene — Inteligencia Aérea Autónoma";
  }

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
 * Controller for Unified Contact Modal with Multi-Intent Switching
 * Supports Validation, Briefing, and Alliances with dynamic fields
 */
function initContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="contact-modal"], [data-open-modal="pilot-modal"], [data-open-modal="briefing-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('contact-form');
  const successState = document.getElementById('contact-success');
  const valError = document.getElementById('contact-validation-error');
  const netError = document.getElementById('contact-error');
  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const arrowIcon = submitBtn ? submitBtn.querySelector('.arrow-icon') : null;

  const badgeText = document.getElementById('contact-badge-text');
  const modalTitle = document.getElementById('contact-modal-title');
  const modalSub = document.getElementById('contact-modal-sub');
  const intentInput = document.getElementById('form-intent-input');
  const directNote = document.getElementById('contact-direct-note');
  const privacyNote = document.getElementById('contact-privacy-note');
  const successTitle = document.getElementById('contact-success-title');
  const successDesc = document.getElementById('contact-success-desc');

  const intentPills = modal.querySelectorAll('[data-intent-target]');
  const pilotFields = modal.querySelectorAll('.intent-field-pilot');
  const briefingFields = modal.querySelectorAll('.intent-field-briefing');
  const alliancesFields = modal.querySelectorAll('.intent-field-alliances');

  let currentIntent = 'pilot';
  let lastActiveElement = null;

  function getDict() {
    const lang = document.documentElement.getAttribute('data-lang') || 'es';
    return translations[lang] || translations.es;
  }

  function setIntent(intent) {
    currentIntent = intent;
    const dict = getDict();

    intentPills.forEach(pill => {
      const target = pill.getAttribute('data-intent-target');
      if (target === intent) {
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
      } else {
        pill.classList.remove('active');
        pill.setAttribute('aria-selected', 'false');
      }
    });

    if (valError) valError.style.display = 'none';
    if (netError) netError.style.display = 'none';

    if (intent === 'briefing') {
      pilotFields.forEach(el => {
        el.style.display = 'none';
        const sel = el.querySelector('select, input');
        if (sel) sel.removeAttribute('required');
      });
      alliancesFields.forEach(el => {
        el.style.display = 'none';
        const sel = el.querySelector('select, input');
        if (sel) sel.removeAttribute('required');
      });
      briefingFields.forEach(el => {
        el.style.display = 'flex';
        const sel = el.querySelector('select, input');
        if (sel) sel.setAttribute('required', 'required');
      });

      if (badgeText) badgeText.innerHTML = dict.briefing_badge || "Ingeniería y operaciones";
      if (modalTitle) modalTitle.innerHTML = dict.briefing_modal_title || "Agendar briefing técnico de 15 minutos";
      if (modalSub) modalSub.innerHTML = dict.briefing_modal_sub || "Conversación técnica directa con Tomás Medina (Technical Lead)...";
      if (btnText) btnText.innerHTML = dict.f_briefing_submit || "Solicitar briefing técnico";
      if (directNote) directNote.style.display = 'block';
      if (privacyNote) privacyNote.style.display = 'none';
      if (intentInput) intentInput.value = "Briefing técnico (15 min)";

    } else if (intent === 'alliances') {
      pilotFields.forEach(el => {
        el.style.display = 'none';
        const sel = el.querySelector('select, input');
        if (sel) sel.removeAttribute('required');
      });
      briefingFields.forEach(el => {
        el.style.display = 'none';
        const sel = el.querySelector('select, input');
        if (sel) sel.removeAttribute('required');
      });
      alliancesFields.forEach(el => {
        el.style.display = 'flex';
        const sel = el.querySelector('select, input');
        if (sel) sel.setAttribute('required', 'required');
      });

      if (badgeText) badgeText.innerHTML = dict.alliances_badge || "Ecosistema & Inversión";
      if (modalTitle) modalTitle.innerHTML = dict.alliances_modal_title || "Alianzas de I+D e inversión estratégica";
      if (modalSub) modalSub.innerHTML = dict.alliances_modal_sub || "Contacto directo con el equipo fundador...";
      if (btnText) btnText.innerHTML = dict.f_submit_alliances || "Enviar propuesta de alianza";
      if (directNote) directNote.style.display = 'none';
      if (privacyNote) privacyNote.style.display = 'block';
      if (intentInput) intentInput.value = "I+D & Alianzas";

    } else {
      // Default: pilot
      briefingFields.forEach(el => {
        el.style.display = 'none';
        const sel = el.querySelector('select, input');
        if (sel) sel.removeAttribute('required');
      });
      alliancesFields.forEach(el => {
        el.style.display = 'none';
        const sel = el.querySelector('select, input');
        if (sel) sel.removeAttribute('required');
      });
      pilotFields.forEach(el => {
        el.style.display = 'flex';
        const sel = el.querySelector('select, input');
        if (sel) sel.setAttribute('required', 'required');
      });

      if (badgeText) badgeText.innerHTML = dict.modal_badge || "Validación territorial 2026-27";
      if (modalTitle) modalTitle.innerHTML = dict.modal_title || "Sumarse al programa de validación 2026-27";
      if (modalSub) modalSub.innerHTML = dict.modal_sub || "Completa los datos de tu entidad...";
      if (btnText) btnText.innerHTML = dict.f_submit_btn || "Enviar solicitud de validación";
      if (directNote) directNote.style.display = 'none';
      if (privacyNote) privacyNote.style.display = 'block';
      if (intentInput) intentInput.value = "Validación territorial (2026-27)";
    }
  }

  intentPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const target = pill.getAttribute('data-intent-target');
      if (target) setIntent(target);
    });
  });

  window.addEventListener('strig-lang-change', () => {
    setIntent(currentIntent);
  });

  function openModal(intent = 'pilot') {
    lastActiveElement = document.activeElement;
    setIntent(intent);
    if (form) form.style.display = '';
    if (successState) successState.style.display = 'none';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (window.umami) {
      window.umami.track('Open-Contact-Modal', { intent: intent });
    }
    const firstInput = modal.querySelector('#contact-name');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 120);
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const explicitIntent = btn.getAttribute('data-intent');
      const modalTarget = btn.getAttribute('data-open-modal');
      const intent = explicitIntent || (modalTarget === 'briefing-modal' ? 'briefing' : 'pilot');
      openModal(intent);
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

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    const inputsToWatch = form.querySelectorAll('.form-input, .form-select, .form-textarea, .form-checkbox');
    inputsToWatch.forEach(input => {
      const clearError = () => {
        input.classList.remove('input-invalid');
        if (input.type === 'checkbox' && input.parentElement) {
          input.parentElement.classList.remove('input-invalid');
        }
        if (valError) valError.style.display = 'none';
      };
      input.addEventListener('input', clearError);
      input.addEventListener('change', clearError);
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (valError) valError.style.display = 'none';
      if (netError) netError.style.display = 'none';

      const name = form.querySelector('#contact-name');
      const email = form.querySelector('#contact-email');
      const company = form.querySelector('#contact-company');
      const phone = form.querySelector('#contact-phone');
      const region = form.querySelector('#contact-region');
      const interest = form.querySelector('#contact-interest');
      const briefingTime = form.querySelector('#contact-briefing-time');
      const allianceType = form.querySelector('#contact-alliance-type');
      const message = form.querySelector('#contact-message');
      const consent = form.querySelector('#contact-consent');

      let isValid = true;

      // Base fields validation
      [name, email, company].forEach(input => {
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

      // Intent-specific validation
      if (currentIntent === 'pilot') {
        [region, interest].forEach(sel => {
          if (!sel || !sel.value) {
            if (sel) sel.classList.add('input-invalid');
            isValid = false;
          } else {
            if (sel) sel.classList.remove('input-invalid');
          }
        });
      } else if (currentIntent === 'briefing') {
        if (!briefingTime || !briefingTime.value) {
          if (briefingTime) briefingTime.classList.add('input-invalid');
          isValid = false;
        } else {
          if (briefingTime) briefingTime.classList.remove('input-invalid');
        }
      } else if (currentIntent === 'alliances') {
        if (!allianceType || !allianceType.value) {
          if (allianceType) allianceType.classList.add('input-invalid');
          isValid = false;
        } else {
          if (allianceType) allianceType.classList.remove('input-invalid');
        }
      }

      // Consent validation
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

      // Dynamic subject
      let dynamicSubject = '';
      if (currentIntent === 'briefing') {
        dynamicSubject = `Solicitud Briefing Técnico 15 min: ${name.value.trim()} (${company.value.trim()}) - Strig Systems`;
      } else if (currentIntent === 'alliances') {
        dynamicSubject = `Propuesta de Alianza / Inversión: ${company.value.trim()} - Strig Systems`;
      } else {
        dynamicSubject = `Nueva Postulación Piloto: ${company.value.trim()} (${region ? region.value : ''}) - Strig Systems`;
      }

      const payload = {
        Intencion: currentIntent.toUpperCase(),
        Nombre: name.value.trim(),
        Email: email.value.trim(),
        Empresa_Organizacion: company.value.trim(),
        Telefono: phone ? phone.value.trim() : '',
        Region: currentIntent === 'pilot' && region ? region.value : 'N/A',
        Tipo_Interes: currentIntent === 'pilot' && interest ? interest.value : 'N/A',
        Horario_Preferente: currentIntent === 'briefing' && briefingTime ? briefingTime.value : 'N/A',
        Tipo_Colaboracion: currentIntent === 'alliances' && allianceType ? allianceType.value : 'N/A',
        Mensaje: message ? message.value.trim() : '',
        _subject: dynamicSubject,
        _template: 'table',
        _captcha: 'false'
      };

      const dict = getDict();
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
          if (window.umami) {
            window.umami.track('Submit-Contact-Success', { intent: currentIntent });
          }
          if (successState) {
            successState.style.display = 'flex';
            if (currentIntent === 'briefing') {
              if (successTitle) successTitle.innerHTML = dict.briefing_success_title || "¡Solicitud de Briefing Recibida!";
              if (successDesc) successDesc.innerHTML = dict.briefing_success_desc || "Tomás Medina se contactará contigo para coordinar el enlace de Google Meet.";
            } else {
              if (successTitle) successTitle.innerHTML = dict.success_title || "¡Postulación Recibida con Éxito!";
              if (successDesc) successDesc.innerHTML = dict.success_desc || "Hemos recibido los antecedentes de tu entidad...";
            }
          }
          form.reset();
        } else {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
      } catch (err) {
        console.warn('FormSubmit AJAX request failed, showing fallback:', err);
        if (netError) {
          netError.style.display = 'block';
          const fallbackSubject = encodeURIComponent(dynamicSubject);
          const fallbackBody = encodeURIComponent(
            `Intención: ${currentIntent}\n` +
            `Nombre: ${name.value.trim()}\n` +
            `Email: ${email.value.trim()}\n` +
            `Empresa: ${company.value.trim()}\n` +
            `Teléfono: ${phone ? phone.value.trim() : ''}\n` +
            `Mensaje: ${message ? message.value.trim() : ''}`
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
        if (btnText) {
          if (currentIntent === 'briefing') {
            btnText.textContent = dict.f_briefing_submit || "Solicitar Briefing Técnico";
          } else if (currentIntent === 'alliances') {
            btnText.textContent = dict.f_submit_alliances || "Enviar Propuesta de Alianza";
          } else {
            btnText.textContent = dict.f_submit_btn || "Enviar Solicitud de Validación";
          }
        }
      }
    });
  }
}

// Backward-compatibility alias
function initPilotModal() { /* Handled by initContactModal */ }

/**
 * Controller for 15-Minute Technical Briefing Modal (Handled by initContactModal)
 */
function initBriefingModal() { /* Handled by initContactModal */ }

/**
 * Controller for Executive Brief One-Pager Whitepaper Modal & Print
 */
function initExecutiveBriefModal() {
  const modal = document.getElementById('brief-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="brief-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const printBtn = document.getElementById('brief-print-btn');

  let lastActiveElement = null;

  function openModal() {
    lastActiveElement = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (window.umami) {
      window.umami.track('Open-Executive-Brief');
    }
    const closeBtn = modal.querySelector('[data-close-modal]');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 120);
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
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

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusables = modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      if (window.umami) {
        window.umami.track('Print-Executive-Brief-PDF');
      }
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
        wrap.classList.add('dropdown-closed-temporarily');
        setTimeout(() => {
          wrap.classList.remove('dropdown-closed-temporarily');
        }, 600);
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
 * Active Section ScrollSpy for Nav Links
 */
function initScrollSpy() {
  const navSections = document.querySelectorAll('section[id]');
  if (!('IntersectionObserver' in window) || !navSections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Reset dropdown buttons active state
        document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.classList.remove('active'));

        // Update desktop nav
        document.querySelectorAll('.nav-links a, .nav-dropdown-menu a').forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
            const parentDropdown = link.closest('.nav-dropdown-wrap');
            if (parentDropdown) {
              const btn = parentDropdown.querySelector('.nav-dropdown-btn');
              if (btn) btn.classList.add('active');
            }
          } else {
            link.classList.remove('active');
          }
        });

        // Update mobile nav
        document.querySelectorAll('.mobile-nav-item').forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -55% 0px'
  });

  navSections.forEach(section => observer.observe(section));
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
  const triggers = document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger, .hud-stat-trigger');
  if (!triggers.length) return;

  triggers.forEach(trigger => {
    // Handle click/tap for mobile & touchscreens
    trigger.addEventListener('click', (e) => {
      // Don't toggle off if clicking inside the tooltip popup text itself
      if (e.target.closest('.metric-tooltip, .source-tooltip, .hud-micro-tip')) return;

      e.stopPropagation();
      const card = trigger.closest('.metric-card, .hud-stat-trigger') || trigger;
      const infoBtn = card.querySelector ? card.querySelector('.metric-info-trigger') : null;
      const isActive = card.classList.contains('active');

      // Close all other open tooltips
      document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger, .hud-stat-trigger').forEach(t => {
        if (t !== card && t !== infoBtn) {
          t.classList.remove('active');
          if (t.setAttribute) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        card.classList.remove('active');
        if (infoBtn) infoBtn.setAttribute('aria-expanded', 'false');
        if (card.setAttribute) card.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('active');
        if (infoBtn) infoBtn.setAttribute('aria-expanded', 'true');
        if (card.setAttribute) card.setAttribute('aria-expanded', 'true');
      }
    });

    // Handle keyboard accessibility (Enter / Space / Escape)
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      } else if (e.key === 'Escape') {
        const card = trigger.closest('.metric-card, .hud-stat-trigger') || trigger;
        const infoBtn = card.querySelector ? card.querySelector('.metric-info-trigger') : null;
        card.classList.remove('active');
        if (infoBtn) {
          infoBtn.setAttribute('aria-expanded', 'false');
          infoBtn.blur();
        }
        if (card.setAttribute) card.setAttribute('aria-expanded', 'false');
        card.blur();
      }
    });
  });

  // Close when clicking anywhere outside
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger, .hud-stat-trigger').forEach(trigger => {
      if (!trigger.contains(e.target)) {
        trigger.classList.remove('active');
        if (trigger.setAttribute) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close on Escape key globally
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.source-badge-wrap, .metric-card, .metric-info-trigger, .hud-stat-trigger').forEach(trigger => {
        trigger.classList.remove('active');
        if (trigger.setAttribute) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/**
 * Controller for interactive technology & flow specification drawers (progressive disclosure)
 */
function initTechSpecDrawers() {
  const toggles = document.querySelectorAll('.tech-spec-toggle, .flow-spec-toggle');
  if (!toggles.length) return;

  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = toggle.closest('.tech-card, .flow-step-card');
      if (!card) return;

      const drawer = card.querySelector('.tech-spec-drawer, .flow-spec-drawer');
      const isExpanded = card.classList.contains('expanded');

      if (isExpanded) {
        card.classList.remove('expanded');
        toggle.setAttribute('aria-expanded', 'false');
        if (drawer) drawer.setAttribute('aria-hidden', 'true');
      } else {
        card.classList.add('expanded');
        toggle.setAttribute('aria-expanded', 'true');
        if (drawer) drawer.setAttribute('aria-hidden', 'false');
        if (window.umami && typeof window.umami.track === 'function') {
          const drawerId = drawer ? drawer.id : 'unknown';
          window.umami.track('Tech-Drawer-Open', { drawer: drawerId });
        }
      }
    });

    // Keyboard accessibility (Enter / Space)
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });
}

/**
 * Controller for Tactical Benchmark Matrix progressive disclosure view modes (Compact vs Detailed)
 */
function initMatrixViewToggle() {
  const btnCompact = document.getElementById('btnMatrixCompact');
  const btnDetailed = document.getElementById('btnMatrixDetailed');
  const wrapper = document.querySelector('.matrix-table-wrapper');
  if (!btnCompact || !btnDetailed || !wrapper) return;

  btnCompact.addEventListener('click', () => {
    btnCompact.classList.add('active');
    btnCompact.setAttribute('aria-pressed', 'true');
    btnDetailed.classList.remove('active');
    btnDetailed.setAttribute('aria-pressed', 'false');
    wrapper.classList.remove('detailed-mode');
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track('Matrix-View-Compact');
    }
  });

  btnDetailed.addEventListener('click', () => {
    btnDetailed.classList.add('active');
    btnDetailed.setAttribute('aria-pressed', 'true');
    btnCompact.classList.remove('active');
    btnCompact.setAttribute('aria-pressed', 'false');
    wrapper.classList.add('detailed-mode');
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track('Matrix-View-Detailed');
    }
  });
}

/**
 * Controller for Live Avionics HUD Telemetry Micro-Fluctuations (Resource & Battery Aware)
 */
function initLiveHudTelemetry() {
  const container = document.querySelector('.tactical-video-container');
  const altVal = document.getElementById('hud-val-alt');
  const gsVal = document.getElementById('hud-val-gs');
  const hdgVal = document.getElementById('hud-val-hdg');

  if (!container || !altVal || !gsVal || !hdgVal) return;

  // Respect reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let timer = null;
  let isVisible = false;

  const baseAlt = 100;
  const baseGs = 18.5;
  const baseHdg = 42;

  function updateTelemetry() {
    if (!isVisible || document.hidden) return;

    // Small realistic aerospace micro-jitter
    const altDelta = (Math.random() * 2.4 - 1.2).toFixed(1);
    const newAlt = (baseAlt + parseFloat(altDelta)).toFixed(0);

    const gsDelta = (Math.random() * 0.8 - 0.4).toFixed(1);
    const newGs = (baseGs + parseFloat(gsDelta)).toFixed(1);

    const hdgDelta = Math.floor(Math.random() * 3 - 1);
    const newHdg = String(baseHdg + hdgDelta).padStart(3, '0');

    altVal.textContent = `ALT: ${newAlt}m AGL`;
    gsVal.textContent = `GS: ${newGs} m/s`;
    hdgVal.textContent = `HDG: ${newHdg}°`;
  }

  function start() {
    if (!timer) {
      timer = setInterval(updateTelemetry, 2200);
    }
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible && !document.hidden) {
          start();
        } else {
          stop();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(container);
  } else {
    isVisible = true;
    start();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else if (isVisible) {
      start();
    }
  });
}

/**
 * Controller for Umami Virtual Pages & Section Reading Telemetry (Privacy-First & Performance-Aware)
 */
function initUmamiSectionAndScrollTelemetry() {
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length) return;

  const sectionTitles = {
    problema: 'Problema · Brecha Nocturna',
    comparativa: 'Benchmark Táctico',
    tecnologia: 'Arquitectura & Sensores',
    roadmap: 'Hoja de Ruta (TRL 3)',
    piloto: 'Programa Piloto 2026-27',
    faq: 'Preguntas Frecuentes',
    alianzas: 'Alianzas Estratégicas',
    equipo: 'Equipo Fundador UdeC',
    contacto: 'Contacto Institucional'
  };

  const trackedSections = new Set();
  const sectionTimers = new Map();
  const DWELL_TIME_MS = 3000;

  function recordSectionView(sectionId) {
    if (trackedSections.has(sectionId)) return;

    if (window.umami && typeof window.umami.track === 'function') {
      trackedSections.add(sectionId);
      // Virtual pageview for Umami "Pages" tab
      window.umami.track((props) => ({
        ...props,
        url: '/#' + sectionId,
        title: 'Strig Systems | ' + (sectionTitles[sectionId] || sectionId)
      }));
      // Explicit engagement event for Umami "Events" tab
      window.umami.track('Section-Read', { section: sectionId });
    }
  }

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        if (entry.isIntersecting) {
          if (!sectionTimers.has(id) && !trackedSections.has(id)) {
            const timer = setTimeout(() => {
              recordSectionView(id);
              sectionTimers.delete(id);
            }, DWELL_TIME_MS);
            sectionTimers.set(id, timer);
          }
        } else {
          if (sectionTimers.has(id)) {
            clearTimeout(sectionTimers.get(id));
            sectionTimers.delete(id);
          }
        }
      });
    }, {
      threshold: 0.35
    });

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  // Immediate tracking on explicit nav anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (href && href.length > 1) {
        const targetId = href.substring(1);
        if (sectionTitles[targetId]) {
          recordSectionView(targetId);
        }
      }
    });
  });

  // Scroll Depth Milestones (25%, 50%, 75%, 100%)
  const milestones = { 25: false, 50: false, 75: false, 100: false };
  let scrollTicking = false;

  function checkScrollDepth() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;

    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    [25, 50, 75, 100].forEach(mark => {
      if (scrollPercent >= mark && !milestones[mark]) {
        milestones[mark] = true;
        if (window.umami && typeof window.umami.track === 'function') {
          window.umami.track('Scroll-Depth', { depth: mark + '%' });
        }
      }
    });

    if (milestones[100]) {
      window.removeEventListener('scroll', onScrollThrottled);
    }
  }

  function onScrollThrottled() {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        checkScrollDepth();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScrollThrottled, { passive: true });
}

/**
 * Controller for Tactical Back-to-Top Floating Button
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  let ticking = false;
  const SCROLL_THRESHOLD = 300;

  function updateVisibility() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > SCROLL_THRESHOLD) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Evaluate initial scroll state immediately on mount
  updateVisibility();
}



