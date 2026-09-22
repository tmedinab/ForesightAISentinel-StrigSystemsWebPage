/**
 * Strig Systems — Foresight AI Sentinel
 * Enterprise Production Client Controller (Bilingual ES / EN)
 */

const translations = {
  es: {
    // Nav
    nav_problem: "Problema",
    nav_tech: "Tecnología",
    nav_pilot: "Programa Piloto",
    nav_collab: "I+D & Alianzas",
    nav_team: "Equipo",
    nav_cta: "Postular a Piloto",

    // Hero
    hero_badge: "Tecnología Aeroespacial • Apoyada por CORFO & Lab Aeroespacial UdeC",
    hero_title_line1: "Vigilancia aérea autónoma para la",
    hero_title_line2: "protección de activos críticos.",
    hero_subtitle: "Cerramos la ventana de vulnerabilidad nocturna en grandes extensiones territoriales. Nuestra plataforma VTOL autónoma integra Edge AI para detectar, verificar y geo-referenciar amenazas en tiempo real, reduciendo hasta un 90% el costo de monitoreo aéreo.",
    hero_cta_primary: "Postular a Piloto Operativo",
    hero_cta_secondary: "Ver Alcance del Piloto",

    // Metrics
    m1_title: "Reducción de Costo Operativo",
    m1_desc: "Frente a patrullaje de aviación tripulada tradicional",
    m2_title: "Ventana Crítica Nocturna",
    m2_desc: "Vigilancia continua cuando la aviación convencional no opera",
    m3_title: "Tasa de Falsos Positivos",
    m3_desc: "Fusión sensorial bi-espectral y verificación a bordo",
    m4_title: "Modelo Intelligence as a Service",
    m4_desc: "Suscripción por cobertura territorial sin compra de flota",

    // Problem
    prob_tag: "Contexto Operacional",
    prob_title: "La brecha nocturna en la protección territorial",
    prob_subtitle: "En temporadas de alto riesgo, los incidentes provocados por acción humana se concentran en horarios sin cobertura aérea activa. La ausencia de vigilancia táctica nocturna deriva en focos descontrolados y pérdidas millonarias.",
    p1_title: "Centrales de Operaciones",
    p1_desc: "Información tardía o fragmentada. Cuando los sistemas satelitales reportan un incremento térmico, el frente de fuego ya ha alcanzado escala de emergencia.",
    p1_pill: "Toma de decisiones reactiva",
    p2_title: "Propietarios de Activos",
    p2_desc: "Exposición permanente a pérdidas severas en biomasa comercial, instalaciones industriales y predios agrícolas por focos no contenidos en su origen.",
    p2_pill: "Pérdida patrimonial crítica",
    p3_title: "Equipos de Respuesta en Terreno",
    p3_desc: "Despliegues nocturnos en zonas complejas sin reconocimiento aéreo previo, incrementando el peligro para brigadas y cuadrillas operativas.",
    p3_pill: "Riesgo vital innecesario",

    comp_title: "Limitaciones del Estado del Arte",
    c1_title: "Sistemas Satelitales",
    c1_desc: "Mapeo térmico macro, pero con alta latencia de refresco e incapacidad de discernir precursores humanos o focos incipientes.",
    c2_title: "Torres Ópticas Fijas",
    c2_desc: "Monitoreo estacionario vulnerable a puntos ciegos por relieve topográfico, nubosidad baja y vegetación densa.",
    c3_title: "Drones Manuales VLOS",
    c3_desc: "Requieren cuadrilla y piloto en terreno. Alcance limitado a línea de vista visual, respuesta lenta y costo operativo inviable a escala.",
    comp_quote: "Ninguna alternativa convencional resuelve oportunamente la interrogante crítica: <em>¿Existe una amenaza humana o térmica en este instante y coordenadas precisas?</em>",

    // Technology
    tech_tag: "Plataforma Foresight AI",
    tech_title: "Arquitectura Integrada de Vigilancia Aérea",
    tech_subtitle: "Un ecosistema de software y hardware concebido para transformar sensores aéreos aislados en una red inteligente de respuesta y toma de decisiones autónoma.",
    f1_title: "Fusión Sensorial Térmica + Óptica a Bordo",
    f1_desc: "Inferencia de visión computacional en el borde (Edge AI). Identifica y verifica fuentes de calor y presencia en oscuridad total, manteniendo la tasa de falsos positivos por debajo del 5%.",
    f2_title: "Telémetro Láser y Georreferenciación Quirúrgica",
    f2_desc: "Cálculo instantáneo de coordenadas geográficas de la anomalía sin margen de error por perspectiva, facilitando el despacho exacto de recursos terrestres.",
    f3_title: "Re-enrutamiento Autónomo y Telemetría Ligera",
    f3_desc: "Ante eventos sospechosos, la aeronave adapta su patrón de vuelo de forma autónoma y emite alertas estructuradas de bajo peso de datos, operando sin depender de enlaces 4G/5G de alta velocidad.",
    f4_title: "Supervisión Estratégica (Human-in-the-Loop)",
    f4_desc: "Capacidades de transmisión de video y audio táctico a demanda. El operador central mantiene el control supervisorio y la potestad de la decisión final.",

    // Table
    tbl_h1: "Parámetro",
    tbl_h2: "Operación con Dron Convencional",
    tbl_h3: "Plataforma Foresight AI (Strig Systems)",
    r1_title: "Modo de Navegación",
    r1_c1: "Pilotaje manual asistido por operador en terreno",
    r1_c2: "Misiones programadas con re-enrutamiento reactivo autónomo",
    r2_title: "Dependencia de Conectividad",
    r2_c1: "Requiere enlace ininterrumpido de alto ancho de banda",
    r2_c2: "Procesamiento Edge autónomo; no se detiene ante pérdida de señal",
    r3_title: "Filtrado y Calidad de Datos",
    r3_c1: "Flujo de video en bruto que induce fatiga operativa",
    r3_c2: "Fusión bi-espectral y alertas filtradas con precisión < 5% falsas alarmas",
    r4_title: "Estructura de Costos",
    r4_c1: "Costos escalados por cuadrilla y equipo dedicado",
    r4_c2: "Ahorro del 90% en patrullaje (~US$250/h vs US$2.500/h avión tripulado)",
    r5_title: "Trayectoria Regulatoria",
    r5_c1: "Línea de vista visual diurna (VLOS)",
    r5_c2: "Diseñado para transición a operaciones nocturnas BVLOS bajo DGAC",

    // Pilot Program
    pilot_tag: "Despliegue Operativo",
    pilot_title: "Programa Piloto para Clientes y Empresas del Sector",
    pilot_subtitle: "Diseñado para empresas forestales, minería, utilities e instituciones públicas que buscan evaluar el impacto de la vigilancia autónoma en sus predios de mayor riesgo.",
    st1_title: "Levantamiento Territorial & Riesgos",
    st1_desc: "Mapeo de predios prioritarios, análisis de topografía, identificación de zonas ciegas actuales e integración con los protocolos de seguridad del cliente.",
    st2_title: "Calibración & Pruebas en Terreno",
    st2_desc: "Despliegue controlado para calibración de firmas térmicas, prueba de enlace de alertas ligeras y simulación de escenarios de detección nocturna.",
    st3_title: "Vigilancia Nocturna Activa",
    st3_desc: "Patrullaje autónomo programado en las ventanas horarias de máxima vulnerabilidad con monitoreo y soporte en tiempo real.",
    st4_title: "Informe Técnico & Retorno Operativo",
    st4_desc: "Auditoría completa de métricas: tiempo de detección, incidentes prevenidos, reducción de despachos en falso y propuesta de escalamiento IaaS.",
    pilot_bar_title: "Postulación al Programa de Validación 2026",
    pilot_bar_desc: "Disponibilidad limitada de cupos operacionales por temporada. Prioridad para predios de alto riesgo forestal e industrial.",
    pilot_bar_cta: "Solicitar Evaluación de Factibilidad",

    // Innovation & Alliances
    collab_tag: "Ecosistema & Tracción",
    collab_title: "I+D Aplicada, Concursos y Alianzas Estratégicas",
    collab_subtitle: "Combinamos rigor científico aeroespacial con validación de mercado industrial. Participamos activamente en consorcios de innovación y programas de aceleración de alta exigencia.",
    part_c_title: "Fondo Semilla CORFO",
    part_c_desc: "Proyecto adjudicado para la validación técnica y comercial de la arquitectura de vigilancia autónoma.",
    part_u_title: "Laboratorio Aeroespacial UdeC",
    part_u_desc: "Respaldo científico e infraestructura de ensayos para integración de sistemas aerodinámicos y aviónica.",
    part_g_title: "Gearbox UdeC & Desafíos Globales",
    part_g_desc: "Aceleración tecnológica, participación en Brain Chile y preparación para programas de escalamiento internacional.",
    part_i_title: "Validación con la Industria",
    part_i_desc: "Entrevistas operativas y contraste de requerimientos técnicos con gerencias de Arauco, OroraTech y Everseek.",

    opp_title: "Oportunidades de Colaboración e Inversión",
    opp_col1_title: "💼 Fondos de Capital & Inversionistas",
    opp_col1_desc: "Levantamiento de ronda para escalamiento de prototipos VTOL de largo alcance y certificación operacional nocturna BVLOS.",
    opp_col2_title: "🔬 Centros Tecnológicos & Academia",
    opp_col2_desc: "Colaboración en modelos de inferencia computacional para condiciones atmosféricas extremas y sensores multiespectrales.",
    opp_col3_title: "🏛️ Instituciones Públicas & Gobiernos",
    opp_col3_desc: "Modelos B2G orientados a la protección de interfaz urbano-forestal y reducción de costos públicos en emergencias.",

    // Team
    team_tag: "Equipo de Liderazgo",
    team_title: "Ingeniería Aeroespacial y Operaciones Tácticas",
    team_subtitle: "Un equipo con base en ingeniería aeroespacial, experiencia operativa directa en emergencias y dominio de la normativa aeronáutica civil.",
    bio_tomas: "Ingeniería Aeroespacial. Especialista en Visión Computacional, Machine Learning, Ingeniería de Sistemas y CAD/CAM.",
    bio_carlos: "Ingeniería Aeroespacial. Bombero Operativo. Especialista en CFD, análisis aerodinámico y arquitectura táctica.",
    bio_richard: "Ingeniería Aeroespacial. Diseño RPAS, certificación de aeronavegabilidad y regulaciones operacionales DGAC.",
    bio_ananda: "Ingeniería Aeroespacial. Integración de sistemas, ensayos de vuelo RPAS, simulación aerodinámica y CFD.",
    bio_advisor: "PhD Space Systems Engineering and Management. Asesor en arquitectura de misión y desarrollo de tecnología aeroespacial.",

    // CTA
    cta_tag: "Canal de Contacto Directo",
    cta_title: "Coordinemos una Evaluación Operacional",
    cta_desc: "Si representas a una empresa forestal, institución de respuesta territorial, o eres evaluador de fondos y desafíos de innovación, nuestro equipo técnico está disponible para atender tu requerimiento.",
    cta_btn_pilot: "Postular a Piloto Operativo",
    cta_btn_collab: "Consultar por Alianzas / Inversión",

    // Footer
    footer_mission: "Desarrollo de sistemas aéreos no tripulados e inteligencia computacional para la mitigación anticipada de riesgos en el mundo físico.",
    footer_col_nav: "Plataforma",
    footer_col_corp: "Corporativo"
  },

  en: {
    // Nav
    nav_problem: "The Problem",
    nav_tech: "Technology",
    nav_pilot: "Pilot Program",
    nav_collab: "R&D & Partnerships",
    nav_team: "Team",
    nav_cta: "Apply for Pilot",

    // Hero
    hero_badge: "Deep Tech Aerospace • Backed by CORFO & UdeC Aerospace Lab",
    hero_title_line1: "Autonomous aerial intelligence for",
    hero_title_line2: "critical asset protection.",
    hero_subtitle: "We close the nighttime vulnerability window across vast land holdings. Our autonomous VTOL platform integrates Edge AI to detect, verify, and geolocate threats in real-time, reducing aerial surveillance costs by up to 90%.",
    hero_cta_primary: "Apply for Operational Pilot",
    hero_cta_secondary: "View Pilot Program Scope",

    // Metrics
    m1_title: "Operational Cost Reduction",
    m1_desc: "Compared to conventional piloted aviation patrols",
    m2_title: "Critical Night Window",
    m2_desc: "Continuous surveillance during hours when manned flights cannot operate",
    m3_title: "False Alarm Rate",
    m3_desc: "Bi-spectral sensor fusion with onboard edge verification",
    m4_title: "Intelligence as a Service Model",
    m4_desc: "Predictable coverage-based subscription with zero hardware CAPEX",

    // Problem
    prob_tag: "Operational Context",
    prob_title: "The Night Window in Territorial Defense",
    prob_subtitle: "During high-risk seasons, human-caused fire incidents peak during hours without aerial coverage. The absence of nighttime tactical surveillance leads to uncontrolled wildfire spread and catastrophic losses.",
    p1_title: "Operations Centers",
    p1_desc: "Delayed or fragmented intelligence. By the time satellite monitoring registers heat signatures, active fire fronts have reached emergency proportions.",
    p1_pill: "Reactive decision-making",
    p2_title: "Land & Asset Owners",
    p2_desc: "Permanent risk of multi-million dollar capital losses in commercial timber, processing facilities, and agricultural land from uncontained ignitions.",
    p2_pill: "Catastrophic asset vulnerability",
    p3_title: "Ground Response Crews",
    p3_desc: "Night deployments into rugged terrain without prior aerial reconnaissance, elevating physical risk for firefighters and tactical personnel.",
    p3_pill: "Avoidable human risk",

    comp_title: "State of the Art Limitations",
    c1_title: "Satellite Systems",
    c1_desc: "Broad regional thermal mapping with orbital latency, unable to discern human precursors or early ignitions in real-time.",
    c2_title: "Fixed Optical Towers",
    c2_desc: "Stationary coverage subject to blind spots caused by terrain elevation, low clouds, and dense vegetation.",
    c3_title: "Manual VLOS Drones",
    c3_desc: "Require on-site pilots and transport crews. Constrained to visual line of sight with slow deployment and prohibitive cost per hectare.",
    comp_quote: "No conventional alternative answers the decisive question in time: <em>Is there a verified human or thermal threat right now at exact coordinates?</em>",

    // Technology
    tech_tag: "Foresight AI Platform",
    tech_title: "Integrated Aerial Intelligence Architecture",
    tech_subtitle: "A unified hardware and software ecosystem engineered to transform isolated aerial sensors into an autonomous, mission-driven decision network.",
    f1_title: "Onboard Bi-Spectral Sensor Fusion (Thermal + Optical)",
    f1_desc: "Edge AI computer vision inference that identifies and verifies heat signatures and human presence in pitch-black conditions, keeping false alarms below 5%.",
    f2_title: "Laser Rangefinder & Surgical Geolocalization",
    f2_desc: "Instant calculation of precise geographic target coordinates without parallax error, enabling pinpoint dispatch of ground units.",
    f3_title: "Autonomous Re-tasking & Low-Bandwidth Telemetry",
    f3_desc: "When anomalies are flagged, the aircraft dynamically adapts its flight path and transmits lightweight structured text alerts without relying on high-speed cellular networks.",
    f4_title: "Tactical Supervision (Human-in-the-Loop)",
    f4_desc: "On-demand video and tactical audio broadcasting for field deterrence. Central operators maintain strategic supervision and final decision authority.",

    // Table
    tbl_h1: "Dimension",
    tbl_h2: "Conventional Drone Operations",
    tbl_h3: "Foresight AI Platform (Strig Systems)",
    r1_title: "Navigation Mode",
    r1_c1: "Manual piloting assisted by operators on site",
    r1_c2: "Autonomous scheduled missions with reactive AI re-routing",
    r2_title: "Connectivity Dependency",
    r2_c1: "Requires uninterrupted high-bandwidth link",
    r2_c2: "Onboard Edge AI processing; operational continuity during signal loss",
    r3_title: "Data Filtering & Quality",
    r3_c1: "Raw video streams driving operator cognitive fatigue",
    r3_c2: "Bi-spectral sensor fusion with < 5% false alarm filtering",
    r4_title: "Cost Structure",
    r4_c1: "Escalating costs per team, truck, and flight crew",
    r4_c2: "90% cost reduction (~US$250/h vs US$2,500/h manned aircraft)",
    r5_title: "Regulatory Runway",
    r5_c1: "Daytime Visual Line of Sight (VLOS) restriction",
    r5_c2: "Engineered for night BVLOS operational certification under DGAC",

    // Pilot Program
    pilot_tag: "Operational Deployment",
    pilot_title: "Early Deployment Pilot Program",
    pilot_subtitle: "Tailored for commercial forestry enterprises, mining complexes, utilities, and public emergency authorities seeking to validate autonomous surveillance on high-risk acreage.",
    st1_title: "Territorial Assessment & Risk Mapping",
    st1_desc: "Evaluation of priority assets, topographic analysis, blind spot identification, and integration with customer security protocols.",
    st2_title: "Field Calibration & Ground Trials",
    st2_desc: "Controlled deployments for thermal signature tuning, telemetry verification, and simulated nocturnal intrusion scenarios.",
    st3_title: "Active Nighttime Surveillance",
    st3_desc: "Scheduled autonomous patrols throughout hours of maximum vulnerability with real-time operational oversight.",
    st4_title: "Technical Audit & ROI Review",
    st4_desc: "Full post-trial audit: detection response times, confirmed threats neutralized, dispatch reduction metrics, and scale-up roadmap.",
    pilot_bar_title: "2026 Validation Cohort Applications",
    pilot_bar_desc: "Limited operational bandwidth per seasonal cohort. Priority assigned to high-risk industrial and forest interfaces.",
    pilot_bar_cta: "Request Feasibility Assessment",

    // Innovation & Alliances
    collab_tag: "Ecosystem & Traction",
    collab_title: "Applied R&D, Innovation Grants & Strategic Alliances",
    collab_subtitle: "We combine aerospace engineering rigor with industrial market validation, participating in competitive technology consortia and deep-tech acceleration initiatives.",
    part_c_title: "CORFO Seed Grant",
    part_c_desc: "Public innovation grant awarded for the technical and commercial validation of autonomous surveillance architectures.",
    part_u_title: "UdeC Aerospace Laboratory",
    part_u_desc: "Scientific partnership and wind-tunnel testing facilities for aerodynamic integration, CFD, and advanced avionics.",
    part_g_title: "Gearbox UdeC & Global Challenges",
    part_g_desc: "Deep tech acceleration, Brain Chile validation, and preparation for global venture scaling initiatives.",
    part_i_title: "Industrial Validation",
    part_i_desc: "Field-informed technical requirements validated through operational interviews with leadership at Arauco, OroraTech, and Everseek.",

    opp_title: "Partnership & Investment Opportunities",
    opp_col1_title: "💼 Venture Capital & Strategic Investors",
    opp_col1_desc: "Rounds focused on scaling extended-range VTOL platforms and nocturnal BVLOS regulatory certification.",
    opp_col2_title: "🔬 Research Institutes & Academia",
    opp_col2_desc: "Collaborative research in computer vision inference under adverse weather and multispectral sensor miniaturization.",
    opp_col3_title: "🏛️ Public Agencies & Municipalities",
    opp_col3_desc: "B2G frameworks dedicated to urban-wildland interface defense and structural public emergency cost stabilization.",

    // Team
    team_tag: "Leadership Team",
    team_title: "Aerospace Engineering & Tactical Operations",
    team_subtitle: "A specialized founding team combining aerospace engineering, direct emergency field experience, and aeronautical civil certification.",
    bio_tomas: "Aerospace Engineering. Specialist in Computer Vision, Machine Learning, Systems Engineering, and CAD/CAM.",
    bio_carlos: "Aerospace Engineering. Active Operational Firefighter. Specialist in CFD, aerodynamics, and tactical interface architecture.",
    bio_richard: "Aerospace Engineering. RPAS design, airworthiness certification, and DGAC civil aviation operational regulations.",
    bio_ananda: "Aerospace Engineering. Systems integration, RPAS flight testing, aerodynamic simulation, and CFD.",
    bio_advisor: "PhD Space Systems Engineering and Management. Senior advisor on space mission architectures and deep-tech scaling.",

    // CTA
    cta_tag: "Direct Inquiries",
    cta_title: "Schedule an Operational Assessment",
    cta_desc: "Whether you represent a forestry conglomerate, a civil defense organization, or an evaluation committee for deep-tech grants and venture capital, our technical leadership is ready to connect.",
    cta_btn_pilot: "Apply for Operational Pilot",
    cta_btn_collab: "Inquire for Alliances / Investment",

    // Footer
    footer_mission: "Autonomous uncrewed aircraft systems and Edge AI computing for proactive physical risk mitigation across critical territories.",
    footer_col_nav: "Platform",
    footer_col_corp: "Corporate"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c◈ STRIG SYSTEMS %c| Foresight AI Platform Online',
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

  // Card Mouse Tracking Lighting Effect
  const glassPanels = document.querySelectorAll('.glass-panel');
  glassPanels.forEach(panel => {
    panel.addEventListener('mousemove', (e) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      panel.style.setProperty('--mouse-x', `${x}px`);
      panel.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});

/**
 * Apply language dictionary to DOM
 */
function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('strig_lang', lang);

  // Update translatable nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
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
