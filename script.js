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
    t4_title: "Aeronave VTOL de Rango Extendido",
    t4_desc: "Despegue y aterrizaje vertical independiente de pista en cualquier relieve. Cobertura territorial de cientos de hectáreas por patrullaje con alta resistencia a condiciones de viento.",
    t5_title: "Georreferenciación Quirúrgica",
    t5_desc: "Proyección angular instantánea hacia el terreno asistida por posicionamiento centimétrico de alta precisión, calculando coordenadas exactas para el despacho inmediato de brigadas.",
    t6_title: "Operación Segura & Certificada",
    t6_desc: "Diseñado bajo rigurosos marcos de seguridad aeronáutica civil, protocolos de redundancia, paracaídas balístico y contingencia autónoma para misiones críticas complejas.",

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

    // Footer
    footer_tagline: "Desarrollo de sistemas aéreos autónomos e inteligencia computacional para la mitigación anticipada de riesgos críticos.",
    f_nav: "Navegación",
    f_corp: "Corporativo"
  },

  en: {
    // Nav
    nav_problem: "The Problem",
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
    t4_title: "Extended-Range Autonomous VTOL Airframe",
    t4_desc: "Runway-independent vertical takeoff and landing across any terrain. Continuous tactical surveillance covering hundreds of hectares per mission with high wind resistance.",
    t5_title: "Real-Time Surgical Geolocalization",
    t5_desc: "Instant angular terrain projection assisted by high-precision centimetric positioning, calculating exact target coordinates for the rapid dispatch of ground crews.",
    t6_title: "Certified Safety & Mission Redundancy",
    t6_desc: "Engineered under rigorous civil aviation safety standards, redundant subsystems, ballistic parachute recovery, and autonomous contingency fail-safes for critical operations.",

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

    // Footer
    footer_tagline: "Autonomous uncrewed aircraft systems and Edge AI computing for proactive critical risk mitigation.",
    f_nav: "Platform",
    f_corp: "Corporate"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c◈ STRIG SYSTEMS %c| Foresight AI Sentinel Online',
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
