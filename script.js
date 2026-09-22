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
    hero_sub: "Plataforma de vigilancia territorial autónoma con drones VTOL e inferencia Edge AI a bordo. Cerramos la ventana de vulnerabilidad nocturna de 10 horas donde la aviación tripulada no puede operar, reduciendo el costo de patrullaje de <strong>US$2.500 a US$250 por hora</strong>.",
    hero_cta_primary: "Postular a Piloto Operativo",
    hero_cta_secondary: "Ver Capacidades del Sistema",

    // Metrics
    m1_title: "Ahorro en Costo de Vuelo",
    m1_sub: "US$250/h vs US$2.500/h avión tripulado",
    m2_title: "Ventana Crítica Nocturna",
    m2_sub: "Vigilancia autónoma en oscuridad total",
    m3_title: "Falsas Alarmas",
    m3_sub: "Fusión termográfica y óptica a bordo",
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
    quote_text: "Satélites tienen alta latencia orbital; torres fijas tienen puntos ciegos topográficos; drones manuales requieren cuadrilla en terreno. Ninguno responde a tiempo la pregunta decisiva: <em>¿Hay una amenaza humana o térmica en este instante y coordenadas exactas?</em>",

    // Technology
    tech_tag: "Capacidades Operativas",
    tech_title: "Vigilancia Territorial con Inteligencia A Bordo",
    tech_sub: "Arquitectura autónoma de alta disponibilidad. La aeronave VTOL detecta, clasifica y georreferencia en el borde sin requerir enlace continuo a internet ni servidores en tierra.",
    t1_title: "Visión Térmica Bi-Espectral",
    t1_desc: "Detección infrarroja radiométrica y óptica de alta definición en gimbal estabilizado. Identificación de amenazas térmicas y presencia en oscuridad total con menos de 5% de falsas alarmas.",
    t2_title: "Inteligencia Artificial Embarcada",
    t2_desc: "Procesamiento de visión computacional a bordo en el borde (Edge AI). Análisis de video y clasificación autónoma en tiempo real sin depender de conectividad externa ni saturar enlaces.",
    t3_title: "Telemetría Táctica para Zonas Remotas",
    t3_desc: "Emisión de alertas estructuradas en menos de 5 segundos mediante radioenlaces de largo alcance, garantizando operatividad táctica en quebradas y predios sin cobertura celular.",
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
    ph4_desc: "Informe técnico con tiempos de detección, falsas alarmas filtradas, horas de vuelo ahorradas y propuesta de escalamiento IaaS.",
    callout_title: "Convocatoria de Validación 2026",
    callout_desc: "Cupos de vuelo limitados por temporada de incendios. Evaluación de factibilidad territorial sin costo para predios forestales e industriales.",
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
    team_sub: "Un equipo multidisciplinario que une diseño aeronáutico, visión computacional, experiencia directa como bombero operativo y certificación civil DGAC.",
    bio_tomas: "Ingeniería Aeroespacial • Visión Computacional, Machine Learning, Ingeniería de Sistemas y CAD/CAM.",
    bio_carlos: "Ingeniería Aeroespacial • Bombero Operativo. CFD, análisis aerodinámico y arquitectura táctica.",
    bio_richard: "Ingeniería Aeroespacial • Diseño RPAS, certificación aeronáutica y regulaciones operacionales DGAC.",
    bio_ananda: "Ingeniería Aeroespacial • Integración de sistemas, ensayos de vuelo RPAS, CAD/CAM y CFD.",
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
    hero_sub: "Autonomous territorial surveillance platform powered by VTOL uncrewed aircraft and onboard Edge AI. We close the critical 10-hour nighttime vulnerability window where manned aviation cannot fly, slashing aerial patrol costs from <strong>US$2,500 to US$250 per flight hour</strong>.",
    hero_cta_primary: "Apply for Operational Pilot",
    hero_cta_secondary: "Explore Capabilities",

    // Metrics
    m1_title: "Flight Cost Reduction",
    m1_sub: "US$250/h vs US$2,500/h manned aircraft",
    m2_title: "Critical Night Window",
    m2_sub: "Autonomous patrol in pitch-black darkness",
    m3_title: "False Alarm Rate",
    m3_sub: "Onboard thermal and optical fusion",
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
    quote_text: "Satellites have orbital latency; fixed watchtowers suffer topographic blind spots; manual drones require ground crews. None answers the decisive question in time: <em>Is there a verified human or thermal threat right now at exact coordinates?</em>",

    // Technology
    tech_tag: "Operational Capabilities",
    tech_title: "Autonomous Aerial Intelligence at the Edge",
    tech_sub: "High-availability autonomous architecture. The VTOL airframe detects, classifies, and geolocalizes at the edge without requiring persistent internet or ground servers.",
    t1_title: "Bi-Spectral Thermal Vision",
    t1_desc: "Radiometric infrared and high-definition optical sensing on a stabilized gimbal. Pinpoint threat identification and human presence verification in complete darkness with under 5% false alarm rates.",
    t2_title: "Onboard Edge Artificial Intelligence",
    t2_desc: "Direct onboard computer vision inference. Real-time video processing and autonomous threat verification without saturating telemetry bandwidth or relying on ground servers.",
    t3_title: "Tactical Telemetry for Remote Dark Zones",
    t3_desc: "Ultra-fast structured tactical alerts dispatched in under 5 seconds over long-range radio links, operating reliably in canyons and acreage without cellular 4G/5G coverage.",
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
    ph4_desc: "Comprehensive engineering report: detection latency, false alarm reduction, manned flight hours saved, and IaaS scale-up roadmap.",
    callout_title: "2026 Validation Cohort Applications",
    callout_desc: "Limited operational flight slots available per fire season. Free territorial feasibility evaluation for industrial and forestry holdings.",
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
    team_sub: "A multidisciplinary team combining aeronautical design, computer vision, operational firefighting experience, and DGAC civil certification.",
    bio_tomas: "Aerospace Engineering • Computer Vision, Machine Learning, Systems Engineering, and CAD/CAM.",
    bio_carlos: "Aerospace Engineering • Operational Firefighter. CFD, aerodynamic analysis, and tactical mission architecture.",
    bio_richard: "Aerospace Engineering • RPAS design, airworthiness certification, and DGAC civil operational regulations.",
    bio_ananda: "Aerospace Engineering • Systems integration, RPAS flight testing, CAD/CAM, and CFD.",
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
