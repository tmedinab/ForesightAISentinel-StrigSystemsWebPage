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
    hero_sub: "<strong class=\"hl-product\">Athene</strong> es la plataforma de inteligencia aérea autónoma desarrollada por Strig Systems para cerrar la brecha nocturna de incendios mediante aeronaves VTOL e inferencia térmica Edge AI a bordo. Detectamos precursores y actividad humana no autorizada antes de la ignición, reduciendo la exposición en terreno y optimizando la respuesta al amanecer.",
    hero_cta_primary: "Sumarse al programa de validación 2026-27",
    hero_cta_secondary: "Ver hoja de ruta y tecnología",
    hero_cta_brief: "Executive Brief (PDF)",

    // Metrics & Progressive Disclosure Micro-Fichas
    m1_title: "Brecha nocturna",
    m1_sub: "Vigilancia aérea en la ventana donde la aviación tripulada está en tierra",
    m1_tax: "[ORIGEN DEL PROBLEMA]",
    m1_tip_title: "Brecha nocturna y riesgo humano",
    m1_val_today: "Monitoreo térmico aéreo en la ventana crítica nocturna mientras brigadas y avionetas están inactivas por riesgo de relieve (CFIT).",
    m1_val_context: "El 99,7% de los incendios forestales en Chile se originan por causa humana intencional o accidental (CONAF, 2003-2023).",
    m2_title: "Radio de misión proyectado",
    m2_sub: "Meta de diseño para 50.000 ha (Noctua) • Hoy: Rango acotado en predio piloto (VLOS)",
    m2_tax: "Objetivo de producto",
    m2_tip_title: "Radio de cobertura territorial",
    m2_val_today: "Operación en rango acotado en línea de vista visual (VLOS) sobre predio piloto privado con operador en sitio.",
    m2_val_goal: "Radio de 15 km (BVLOS). Aeronave VTOL con capacidad aerodinámica de 45–60 min de crucero para proteger clústeres de 50.000 ha.",
    m2_val_framework: "Escalamiento sujeto a certificación de riesgo operacional SORA (JARUS) y segregación aérea DGAC.",
    m3_title: "Detección térmica",
    m3_sub: "Inferencia Edge AI local a bordo • Alerta consolidada a estación en minutos (meta ≤ 3 min)",
    m3_tax: "Meta: <10% falsas alarmas",
    m3_tip_title: "Inferencia térmica local Edge AI",
    m3_val_today: "Detección de fuentes térmicas y personas en microsegundos a bordo (NVIDIA Jetson) y alerta consolidada a estación en minutos (meta ≤ 3 min).",
    m3_val_goal: "Despacho de coordenadas verificadas con tasa de falsas alarmas < 5% (criterio de aceptación técnica MVP < 10%).",
    m3_val_framework: "Arquitectura Zero-Cloud: no requiere internet ni nube para detectar en tiempo real.",
    m4_title: "Disuasión autorizada",
    m4_sub: "Foco de alta intensidad y sirena acústica activados exclusivamente con autorización del operador",
    m4_tax: "Diferenciador clave",
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
    p1_s3_val: "Objetivo aerodinámico: resistencia a ráfagas de hasta 10–12 m/s (~36–43 km/h, representativo de viento Puelche). Respaldo con paracaídas balístico de recuperación.",
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
    p4_s1_lbl: "Doctrina HITL:",
    p4_s1_val: "El sistema de disuasión física (foco destellante de alta potencia y sirena acústica) solo se activa con autorización previa y deliberada del operador.",
    p4_s2_lbl: "Reporte Pericial:",
    p4_s2_val: "Generación de expediente digital de incidente con firma criptográfica, sellado de tiempo y captura biespectral para aseguradoras y fiscalía.",
    p4_s3_lbl: "Privacidad por Diseño:",
    p4_s3_val: "Difuminado y anonimización automática de rostros y propiedad privada no involucrada (Ley 19.628 / Ley 21.719).",
    p4_s4_lbl: "Operación Offline:",
    p4_s4_val: "Estación de operador con cartografía precargada localmente para despliegue autónomo en faenas remotas.",
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
    rm5_title: "Noctua VTOL, Nest automatizado y BVLOS",
    rm5_desc: "Evolución de plataforma: integración del fuselaje VTOL Noctua, estación robotizada Nest para escalamiento a supervisión de flotas 1:N (un operador para múltiples aeronaves sin personal en terreno), enlaces satelitales de respaldo y radio extendido de 15 km bajo certificación BVLOS.",

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
    faq_a2: "Como objetivo de diseño aerodinámico para la plataforma experimental, se apunta a una envolvente capaz de tolerar ráfagas de hasta 10–12 m/s (~36–43 km/h), representativas de las condiciones estivales y de viento Puelche en la Macrozona Centro-Sur. En los ensayos actuales de validación (TRL 3-4), ante ráfagas que comprometan los márgenes de seguridad en predio piloto, el protocolo operacional ordena descenso y aborto preventivo inmediato.",
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
    alliances_title: "I+D aplicada y alianzas estratégicas",
    alliances_sub: "Combinamos ingeniería aeroespacial rigurosa con validación en el mercado real, respaldados por las instituciones líderes en innovación y transferencia tecnológica.",
    p_corfo: "Proyecto Semilla Inicia CORFO",
    p_udec: "Apoyo de la UdeC",
    p_industry: "Validación & Entrevistas Forestales",
    p_thermal: "Contraste Ecosistema Térmico",
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
    eb_summary: "Athene aborda la brecha nocturna mediante aeronaves VTOL (plataforma de validación en transición hacia Noctua), inferencia térmica Edge AI a bordo (NVIDIA Jetson) y telemetría táctica FHSS 915 MHz, sustituyendo la exposición terrestre a ciegas y optimizando el despacho aéreo al amanecer.",
    eb_b1_title: "1. El Problema Operacional",
    eb_b1_p1: "<strong>Ventana ciega nocturna:</strong> La aviación tripulada combate de día, pero no vuela de noche por normativa DGAC y riesgo de choque con el relieve (CFIT).",
    eb_b1_p2: "<strong>99,7% de origen humano:</strong> La casi totalidad de los incendios derivan de acción humana intencional o negligente (Fuente: CONAF).",
    eb_b1_p3: "<strong>Puntos ciegos terrestres:</strong> Patrullas en 4x4 cubren &lt; 12% del predio, ciegas ante quebradas y rodales interiores donde se inician fogatas y focos intencionales.",
    eb_b2_title: "2. Solución Tecnológica",
    eb_b2_p1: "<strong>Plataforma VTOL y dron Noctua:</strong> Validación inicial sobre aeronave comercial adaptada; autonomía de diseño 45–60 min y despegue vertical sin pista.",
    eb_b2_p2: "<strong>Edge AI Zero-Cloud a Bordo:</strong> Cómputo local NVIDIA Jetson; detección térmica en segundos sin conexión a internet ni señal celular.",
    eb_b2_p3: "<strong>Disuasión con Autorización Humana:</strong> Activación de foco de alta intensidad y sirena acústica siempre autorizada por el operador en tierra (Human-in-the-Loop).",
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
    f_terms_link: "Términos de Servicio & Pilotaje B2B",

    // Talent Callout & Modal
    talent_badge: "◈ CONVOCATORIA I+D & INGENIERÍA",
    talent_status: "[Banco de Talento 2026-27]",
    talent_title: "Construye la próxima generación de autonomía aérea con nosotros",
    talent_desc: "Buscamos ingenieros, investigadores, tesistas y pilotos apasionados por visión computacional en el borde, diseño aerodinámico, aviónica embebida y misiones de vuelo tácticas en terreno.",
    talent_btn: "Súmate a la Misión",
    f_talent_link: "Convocatoria I+D & Talento",
    t_modal_badge: "Convocatoria I+D & Talento",
    t_modal_title: "Súmate a la Misión de Strig Systems",
    t_modal_sub: "Buscamos ingenieros, investigadores, tesistas y pilotos apasionados por construir autonomía aérea de impacto real. Cuéntanos sobre tu experiencia y proyectos técnicos.",
    t_name_label: "Nombre y apellido *",
    t_name_ph: "Ej: Valentina Morales",
    t_email_label: "Correo electrónico *",
    t_email_ph: "nombre@correo.com",
    t_phone_label: "Teléfono / WhatsApp",
    t_phone_ph: "+56 9 1234 5678",
    t_track_label: "Área técnica principal *",
    t_track_opt_default: "Selecciona tu foco...",
    t_track_opt_1: "Visión Computacional & Edge AI (PyTorch / TensorRT / Jetson)",
    t_track_opt_2: "Diseño Aeronáutico, Mecánica & CFD (CAD / FEA / Aerodinámica)",
    t_track_opt_3: "Aviónica Embebida, Firmware & Hardware (PX4 / STM32 / PCB)",
    t_track_opt_4: "Operaciones de Vuelo, Mantenimiento & Piloto RPAS (DGAC)",
    t_track_opt_5: "Memoria de Título / Práctica / Investigación UdeC",
    t_track_opt_6: "Otra especialidad de ingeniería",
    t_link_label: "Enlace a GitHub, LinkedIn, ResearchGate o Portafolio *",
    t_link_ph: "https://github.com/tu-usuario o linkedin.com/in/tu-perfil",
    t_projects_label: "¿Qué proyectos has construido o en qué subsistema de Athene te gustaría aportar? *",
    t_projects_ph: "Cuéntanos brevemente sobre tus proyectos de ingeniería, herramientas que dominas o líneas de investigación que te apasionan...",
    t_submit_btn: "Enviar credenciales de ingeniería",
    t_submitting: "Transmitiendo antecedentes...",
    t_privacy: "Tus antecedentes serán tratados con estricta confidencialidad por el equipo fundador de Strig Systems.",
    t_success_title: "¡Antecedentes Recibidos con Éxito!",
    t_success_desc: "Gracias por tu interés en sumarte a Strig Systems. El equipo técnico revisará tus antecedentes y proyectos para coordinar una reunión de ingeniería según las convocatorias y necesidades del proyecto."
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
    hero_sub: "<strong class=\"hl-product\">Athene</strong> is the autonomous aerial intelligence platform engineered by Strig Systems to close the nocturnal wildfire gap using VTOL aircraft and onboard Edge AI thermal inference. We detect precursors and unauthorized human activity before ignition—minimizing ground crew hazard and optimizing dawn air combat sorties.",
    hero_cta_primary: "Join 2026-27 Validation Program",
    hero_cta_secondary: "View Roadmap & Technology",
    hero_cta_brief: "Executive Brief (PDF)",

    // Metrics & Progressive Disclosure Micro-Fichas
    m1_title: "Nighttime Gap",
    m1_sub: "Aerial surveillance while manned aviation remains grounded",
    m1_tax: "[ROOT PROBLEM]",
    m1_tip_title: "Nighttime Gap & Human Risk",
    m1_val_today: "Aerial thermal monitoring during the critical night window while ground crews and airplanes are inactive due to terrain collision risk (CFIT).",
    m1_val_context: "99.7% of forest fires in Chile originate from intentional or accidental human causes (CONAF, 2003-2023).",
    m2_title: "Projected Mission Radius",
    m2_sub: "Design target for 50,000 ha (Noctua) • Today: Bounded range on pilot acreage (VLOS)",
    m2_tax: "[PRODUCT GOAL]",
    m2_tip_title: "Territorial Coverage Radius",
    m2_val_today: "Bounded-range Visual Line of Sight (VLOS) flight operations on private pilot site with on-site operator.",
    m2_val_goal: "15 km radius (BVLOS). VTOL airframe with 45–60 min cruise capacity to protect 50,000 ha clusters.",
    m2_val_framework: "Scaling subject to SORA operational risk certification (JARUS) and DGAC airspace segregation.",
    m3_title: "Thermal Detection",
    m3_sub: "Onboard Edge AI local inference • Consolidated alert to station in minutes (target ≤ 3 min)",
    m3_tax: "[TARGET: <10% FALSE ALARMS]",
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
    p1_s3_val: "Aerodynamic design objective: gust resilience up to 10–12 m/s (~36–43 km/h, representative of Puelche wind conditions). Ballistic recovery parachute backup.",
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
    p4_s1_lbl: "HITL Doctrine:",
    p4_s1_val: "The physical deterrence payload (high-intensity light and acoustic siren) only activates upon explicit, deliberate operator authorization.",
    p4_s2_lbl: "Forensic Report:",
    p4_s2_val: "Digital incident dossier with cryptographic signature, timestamp, and bi-spectral capture for insurers and prosecutors.",
    p4_s3_lbl: "Privacy by Design:",
    p4_s3_val: "Automated blurring and anonymization of non-involved human faces and private property (Law 19,628 / 21,719 compliance).",
    p4_s4_lbl: "Offline Operation:",
    p4_s4_val: "Ground operator console with locally preloaded offline GIS maps for autonomous deployment in remote locations.",
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
    rm5_title: "Noctua VTOL, Automated Nest & BVLOS",
    rm5_desc: "Platform evolution: integration of custom Noctua VTOL airframe and automated Nest robotic dock for scaling to 1:N fleet supervision (single operator controlling multiple aircraft simultaneously with zero ground presence) and 15 km extended radius under BVLOS certification.",

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
    faq_a2: "As an aerodynamic design target for the experimental platform, we aim for an operational envelope tolerating gusts up to 10–12 m/s (~36–43 km/h), representative of summer and Puelche wind conditions in south-central Chile. In current live validation trials (TRL 3-4), if wind gusts compromise safety margins over the pilot site, operational protocols mandate immediate landing and preventive mission abort.",
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
    alliances_title: "Applied R&D & Strategic Partnerships",
    alliances_sub: "We blend aerospace engineering rigor with real-world market validation, backed by leading innovation hubs and institutional research laboratories.",
    p_corfo: "CORFO Semilla Inicia Program",
    p_udec: "Backed by UdeC",
    p_industry: "Field Validation & Forestry Interviews",
    p_thermal: "Thermal Ecosystem Industry Contrast",
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
    eb_summary: "Athene addresses the nighttime gap using VTOL aircraft (validation platform transitioning toward Noctua), onboard Edge AI thermal inference (NVIDIA Jetson), and 915 MHz FHSS tactical telemetry—displacing blind ground patrol exposure and optimizing dawn air combat sorties.",
    eb_b1_title: "1. Operational Problem",
    eb_b1_p1: "<strong>Nighttime blind window:</strong> Manned aircraft fight fires by day but are grounded at night by DGAC regulations and controlled flight into terrain (CFIT) hazards.",
    eb_b1_p2: "<strong>99.7% human origin:</strong> The vast majority of wildfires stem from intentional or negligent human action (Source: CONAF).",
    eb_b1_p3: "<strong>Ground patrol blind spots:</strong> 4x4 pickup patrols cover &lt; 12% of land holdings, blind to ravines and deep stands where fires ignite.",
    eb_b2_title: "2. Technological Solution",
    eb_b2_p1: "<strong>VTOL Platform & Noctua Drone:</strong> Initial validation on adapted commercial airframe; 45–60 min design endurance and runway-independent vertical takeoff.",
    eb_b2_p2: "<strong>Onboard Zero-Cloud Edge AI:</strong> NVIDIA Jetson local compute; thermal detection in seconds without internet or cell coverage.",
    eb_b2_p3: "<strong>Deterrence with Human Authorization:</strong> High-intensity light and acoustic siren activation always authorized by ground operator (Human-in-the-Loop).",
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
    f_terms_link: "B2B Terms of Service & Pilotage",

    // Talent Callout & Modal
    talent_badge: "◈ R&D & ENGINEERING CALL",
    talent_status: "[Talent Pool 2026-27]",
    talent_title: "Build the next generation of aerial autonomy with us",
    talent_desc: "We are seeking engineers, researchers, thesis candidates, and pilots passionate about edge computer vision, aerodynamic airframe design, embedded avionics, and tactical flight operations.",
    talent_btn: "Join the Mission",
    f_talent_link: "R&D & Talent Call",
    t_modal_badge: "R&D & Engineering Call",
    t_modal_title: "Join the Mission at Strig Systems",
    t_modal_sub: "We are seeking engineers, researchers, thesis candidates, and pilots passionate about building real-world aerial autonomy. Tell us about your background and technical projects.",
    t_name_label: "Full Name *",
    t_name_ph: "E.g., Valentina Morales",
    t_email_label: "Email Address *",
    t_email_ph: "name@domain.com",
    t_phone_label: "Phone / WhatsApp",
    t_phone_ph: "+56 9 1234 5678",
    t_track_label: "Primary Technical Track *",
    t_track_opt_default: "Select your primary track...",
    t_track_opt_1: "Computer Vision & Edge AI (PyTorch / TensorRT / Jetson)",
    t_track_opt_2: "Aeronautical Design, Mechanics & CFD (CAD / FEA / Aerodynamics)",
    t_track_opt_3: "Embedded Avionics, Firmware & Hardware (PX4 / STM32 / PCB)",
    t_track_opt_4: "Flight Operations, Maintenance & RPAS Pilot (DGAC)",
    t_track_opt_5: "Thesis Project / Internship / UdeC Research",
    t_track_opt_6: "Other engineering discipline",
    t_link_label: "Link to GitHub, LinkedIn, ResearchGate or Portfolio *",
    t_link_ph: "https://github.com/your-user or linkedin.com/in/your-profile",
    t_projects_label: "What technical projects have you built or which Athene subsystem would you like to contribute to? *",
    t_projects_ph: "Tell us briefly about your engineering projects, tools you master, or research areas that drive you...",
    t_submit_btn: "Submit Engineering Credentials",
    t_submitting: "Transmitting credentials...",
    t_privacy: "Your background information will be handled with strict confidentiality by the Strig Systems founding engineering team.",
    t_success_title: "Credentials Successfully Received!",
    t_success_desc: "Thank you for your interest in joining Strig Systems. Our technical team will review your background and projects to coordinate an engineering session based on upcoming R&D phases."
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
  initScrollSpy();

  // Initialize Unified Contact Modal, Talent Modal & Executive Brief Modal
  initContactModal();
  initTalentModal();
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
});

/**
 * Apply language dictionary to DOM
 */
function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('strig_lang', lang);

  // Update document title
  document.title = lang === 'en'
    ? "Strig Systems | Athene — Autonomous Aerial Intelligence"
    : "Strig Systems | Athene — Inteligencia Aérea Autónoma";

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
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
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
 * Controller for Dedicated R&D Talent & Engineering Call Modal
 */
function initTalentModal() {
  const modal = document.getElementById('talent-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="talent-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('talent-form');
  const successState = document.getElementById('talent-success');
  const valError = document.getElementById('talent-validation-error');
  const netError = document.getElementById('talent-error');
  const submitBtn = document.getElementById('talent-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const arrowIcon = submitBtn ? submitBtn.querySelector('.arrow-icon') : null;

  let lastActiveElement = null;

  function getDict() {
    const lang = document.documentElement.getAttribute('data-lang') || 'es';
    return translations[lang] || translations.es;
  }

  function openModal() {
    lastActiveElement = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    if (valError) valError.style.display = 'none';
    if (netError) netError.style.display = 'none';

    const firstInput = form ? form.querySelector('input:not([type="hidden"]), select, textarea') : null;
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

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (valError) valError.style.display = 'none';
      if (netError) netError.style.display = 'none';

      const name = document.getElementById('talent-name');
      const email = document.getElementById('talent-email');
      const phone = document.getElementById('talent-phone');
      const track = document.getElementById('talent-track');
      const link = document.getElementById('talent-link');
      const projects = document.getElementById('talent-projects');

      let isValid = true;

      [name, email, track, link, projects].forEach(input => {
        if (!input) return;
        if (!input.checkValidity() || !input.value.trim()) {
          input.classList.add('input-invalid');
          isValid = false;
        } else {
          input.classList.remove('input-invalid');
        }
      });

      if (!isValid) {
        if (valError) {
          valError.style.display = 'block';
          valError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      const trackText = track && track.options[track.selectedIndex] ? track.options[track.selectedIndex].text : 'General';
      const dynamicSubject = `[TALENTO I+D] Postulación: ${name.value.trim()} (${trackText}) - Strig Systems`;

      const payload = {
        Tipo: 'POSTULACION_TALENTO_ID',
        Nombre: name.value.trim(),
        Email: email.value.trim(),
        Telefono: phone ? phone.value.trim() : 'N/A',
        Area_Tecnica: trackText,
        Portafolio_Perfil: link.value.trim(),
        Proyectos_Aporte: projects.value.trim(),
        _subject: dynamicSubject,
        _template: 'table',
        _captcha: 'false'
      };

      const dict = getDict();
      if (submitBtn) submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (arrowIcon) arrowIcon.style.display = 'none';
      if (btnText) btnText.textContent = dict.t_submitting || "Transmitiendo antecedentes...";

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
          if (successState) {
            successState.style.display = 'flex';
          }
          form.reset();
        } else {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
      } catch (err) {
        console.warn('FormSubmit Talent AJAX request failed, showing fallback:', err);
        if (netError) {
          netError.style.display = 'block';
          const fallbackSubject = encodeURIComponent(dynamicSubject);
          const fallbackBody = encodeURIComponent(
            `Nombre: ${name.value.trim()}\n` +
            `Email: ${email.value.trim()}\n` +
            `Teléfono: ${phone ? phone.value.trim() : ''}\n` +
            `Área Técnica: ${trackText}\n` +
            `Portafolio / GitHub: ${link.value.trim()}\n\n` +
            `Proyectos y Aporte:\n${projects.value.trim()}`
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
        if (btnText) btnText.textContent = dict.t_submit_btn || "Enviar credenciales de ingeniería";
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

  let lastActiveElement = null;

  function openModal() {
    lastActiveElement = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
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
  });

  btnDetailed.addEventListener('click', () => {
    btnDetailed.classList.add('active');
    btnDetailed.setAttribute('aria-pressed', 'true');
    btnCompact.classList.remove('active');
    btnCompact.setAttribute('aria-pressed', 'false');
    wrapper.classList.add('detailed-mode');
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

