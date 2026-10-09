/**
 * Strig Systems — Athene™
 * Compact public landing controller
 * Zero Runtime Dependencies · Bilingual Parity (ES / EN) · Zero Emojis
 */

const translations = {
  es: {
    // Page metadata & Header
    h_company: "Ingeniería aeroespacial y sistemas autónomos · Chile",
    h_page_title: "Strig Systems | Athene — Inteligencia Aérea Autónoma",
    lang_code: "EN",
    h_nav_cta: "Solicitar Briefing",

    // Hero Section
    h_visual_tag: "ARQUITECTURA CONCEPTUAL",
    h_visual_title: "Un sistema. Tres funciones conectadas.",
    h_visual_caption: "Arquitectura conceptual con aeronave genérica y componentes ampliados. La evidencia se enriquece durante la observación. No representa el diseño de Noctua ni resultados medidos.",
    h_visual_boundary: "Aeronave VTOL · cámara y computador a bordo",
    h_visual_delivery: "Imágenes y avisos al puesto de supervisión local",
    h_flow_1: "Aeronave y cámara",
    h_flow_2: "Inferencia a bordo",
    h_flow_3: "Evaluación humana",
    h_stage_label: "ESTADO DEL PROYECTO",
    h_stage_now: "Hoy · TRL 3",
    h_stage_now_desc: "Arquitectura y preparación de integración.",
    h_stage_next: "Próximo · Demo 2027",
    h_stage_next_desc: "Integración experimental prevista.",
    h_stage_future: "Visión · Noctua / Nest",
    h_stage_future_desc: "Plataforma aérea y estación proyectadas.",
    h_capabilities_label: "ARQUITECTURA EN DESARROLLO",
    h_status: "TRL 3 · Prototipo en desarrollo · Demo prevista ene 2027",
    h_badge: "Semilla Inicia Corfo • IncubaUdeC • Finalistas 7th Gear Challenge - Gearbox UdeC",
    h_eyebrow_tag: "VIGILANCIA AÉREA PARA LA BRECHA NOCTURNA",
    h_title_1: "Los riesgos se mueven rápido.",
    h_title_2: "Nosotros los vemos venir.",
    h_desc: "Plataforma centinela aérea autónoma diseñada para reducir la brecha nocturna de vigilancia forestal mediante análisis térmico a bordo y supervisión humana de las alertas.",
    h_cta_pilot: "Conversar sobre un piloto",
    h_cta_brief: "Ver resumen ejecutivo",

    // 3 Capability Pillars
    h_p1_tag: "[AERONÁUTICA // 01]",
    h_p1_title: "Plataforma aérea experimental",
    h_p1_desc: "Validación inicial prevista sobre una aeronave comercial adaptada. Noctua es la plataforma VTOL de ala fija proyectada para la evolución del sistema.",

    h_p2_tag: "[ANÁLISIS // 02]",
    h_p2_title: "Análisis térmico a bordo",
    h_p2_desc: "Análisis térmico a bordo para detectar presencia de personas e indicios de incendio durante la noche. La precisión y los tiempos de respuesta se evaluarán en pruebas.",

    h_p3_tag: "[SUPERVISIÓN // 03]",
    h_p3_title: "Supervisión humana de alertas",
    h_p3_desc: "El operador revisa imágenes y alertas para evaluar actividad humana que podría generar riesgo de incendio y apoyar una respuesta temprana.",

    // Technical Specifications & Pilot Card
    h_ip_tag: "CONVERSACIÓN TÉCNICA",
    h_ip_protocol: "[VALIDACIÓN 2026-27]",
    h_ip_title: "¿Quieres explorar una validación en terreno?",
    h_ip_body: "Conversemos sobre tus necesidades de vigilancia forestal y cómo podrían orientar las pruebas de Athene. Estamos preparando la integración experimental del sistema.",
    h_ip_footer_note: "Equipo Strig Systems · Concepción, Chile.",
    h_ip_btn: "Conversar con el equipo",

    // Backing strip
    h_b1: "5 Ingenieros Civiles Aeroespaciales UdeC",
    h_b2: "Corfo · Adjudicatarios Semilla Inicia",
    h_b3: "Finalistas 7th Gear Challenge - Gearbox UdeC",
    h_b4: "IncubaUdeC",
    team_tag: "Equipo fundador",
    team_title: "El equipo detrás de Strig Systems",
    team_intro: "Cinco ingenieros civiles aeroespaciales formados en la Universidad de Concepción, detrás del desarrollo de Strig Systems y Athene.",
    team_role_lead: "Cofundador · Lead técnico",
    team_role_ops: "Cofundador · Operaciones",
    team_role_cofounder_f: "Cofundadora",
    team_role_cofounder: "Cofundador",
    team_linkedin: "LinkedIn",
    team_name_tomas: "Tomás Medina",
    team_name_carlos: "Carlos Gutiérrez",
    team_name_ananda: "Ananda Glaria",
    team_name_richard: "Richard Solís",
    team_name_pablo: "Pablo Alarcón",
    institutional_title: "Nos apoyan",
    institutional_incuba: "Incubados en IncubaUdeC · Mentorías con Red de Mentores IU",
    institutional_corfo: "Financiamiento · Semilla Inicia Corfo",


    // Footer
    f_tagline: "Empresa chilena de ingeniería aeroespacial y sistemas autónomos. Desarrollamos Athene™, un sistema centinela aéreo para vigilancia forestal nocturna.",
    f_location: "Concepción, Chile · Universidad de Concepción",
    f_copyright: "© 2026 Strig Systems SpA. Todos los derechos reservados.",
    f_terms: "Términos de Servicio B2B",
    f_privacy_link: "Política de Privacidad",

    // Modal tabs & headers
    intent_tab_pilot: "Predio Piloto 2026-27",
    intent_tab_briefing: "Briefing Técnico (15 min)",
    intent_tab_alliances: "Colaboración",
    modal_badge: "Validación territorial 2026-27",
    modal_title: "Sumarse al programa de validación 2026-27",
    modal_sub: "Completa los datos de tu entidad para evaluar conjuntamente la factibilidad territorial y requerimientos de validación en terreno.",

    // Form labels & placeholders
    f_name_label: "Nombre y apellido *",
    f_name_ph: "Ej: Marcela Soto",
    f_email_label: "Correo electrónico *",
    f_email_ph: "nombre@empresa.cl",
    f_company_label: "Empresa u organización (opcional)",
    f_company_ph: "Ej: Forestal / Minera / Institución",
    f_phone_label: "Teléfono / WhatsApp (opcional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Región del posible piloto (opcional)",
    opt_select_region: "Selecciona una región",
    f_interest_label: "Tipo de entidad o predio (opcional)",
    opt_select_interest: "Selecciona tipo de interés",
    opt_interest_1: "Empresa forestal (Predio productivo)",
    opt_interest_2: "Organismo público de emergencia / B2G",
    opt_interest_3: "Comunidad / Protección de interfaz urbano-forestal",
    opt_interest_4: "Infraestructura crítica / Red eléctrica / Energía",
    f_briefing_time_label: "Horario preferente de reunión *",
    opt_time_morning: "Mañana (09:00 - 12:00 CLT)",
    opt_time_afternoon: "Tarde (14:00 - 17:00 CLT)",
    opt_time_late: "Fin de tarde (17:00 - 19:00 CLT)",
    f_alliance_type_label: "Tipo de colaboración",
    opt_alliance_1: "Fondo de inversión / Venture Capital",
    opt_alliance_nda: "Solicitud de NDA para Evaluación Técnica",
    opt_alliance_2: "Centro de I+D / Cooperación académica",
    opt_alliance_3: "Agencia pública / Municipalidad / B2G",
    f_message_label: "Detalles adicionales o necesidad específica (opcional)",
    f_message_ph: "Describe brevemente el tipo de predio, zona geográfica o consulta técnica...",
    f_consent_label: "Acepto el tratamiento de mis datos para responder a esta consulta y declaro conocer:",
    form_val_error: "Por favor completa todos los campos obligatorios (*) con un formato válido.",
    form_sending: "Enviando…",
    form_error_msg: "Hubo un problema al enviar la solicitud. Puedes escribirnos directamente a",
    f_submit_btn: "Enviar solicitud de validación",
    f_privacy: "Usaremos estos datos para responder a tu consulta.",
    f_briefing_direct: "O escribe directamente al Technical Lead:",
    success_title: "¡Solicitud Recibida con Éxito!",
    success_desc: "Hemos recibido tu consulta. El equipo se pondrá en contacto para conversar sobre los próximos pasos.",
    success_close_btn: "Cerrar Ventana",

    // Dynamic Intent Variations
    badge_pilot: "Validación territorial 2026-27",
    title_pilot: "Sumarse al programa de validación 2026-27",
    sub_pilot: "Completa los datos de tu entidad para evaluar conjuntamente la factibilidad territorial y requerimientos de validación en terreno.",
    badge_briefing: "Equipo Strig Systems · 15 Minutos",
    title_briefing: "Conversar sobre Athene",
    sub_briefing: "Una conversación con el equipo sobre el proyecto, su etapa actual y oportunidades de validación.",
    badge_alliances: "Colaboración e I+D",
    title_alliances: "Explorar una colaboración",
    sub_alliances: "Cuéntanos cómo te gustaría colaborar con el desarrollo y la validación de Athene.",
    f_briefing_submit: "Solicitar Briefing Técnico",
    f_submit_alliances: "Enviar consulta",
    briefing_success_title: "¡Solicitud de Briefing Recibida!",
    briefing_success_desc: "Tomás Medina se contactará contigo para coordinar el enlace de Google Meet según el horario seleccionado.",

    // Executive Brief Modal
    brief_doc_print: "Imprimir / Guardar como PDF",
    eb_product: "PLATAFORMA ATHENE",
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Vigilancia Territorial Autónoma Nocturna",
    eb_h1: "Inteligencia Aérea Autónoma para la Brecha Nocturna de Incendios",
    eb_summary: "Athene es un sistema centinela aéreo en desarrollo experimental (TRL 3 declarado). Estamos definiendo su arquitectura y preparando la integración de una plataforma de pruebas, análisis térmico a bordo y supervisión humana. El programa 2026-27 busca evaluar esa integración.",
    eb_b1_title: "1. El Problema Operacional",
    eb_b1_p1: "Brecha nocturna: La observación y la respuesta en oscuridad y relieve complejo presentan restricciones operacionales que deben evaluarse para cada misión.",
    eb_b1_p2: "Actividad humana: La vigilancia propuesta busca detectar presencia de personas y evaluar su contexto para advertir situaciones que podrían originar un incendio.",
    eb_b1_p3: "Puntos ciegos terrestres: Las quebradas y los rodales interiores dificultan la observación desde caminos; su cobertura se evaluará en cada predio piloto.",
    eb_b2_title: "2. Solución Tecnológica",
    eb_b2_p1: "Plataforma aérea: Validación inicial prevista sobre aeronave comercial adaptada. Noctua es la plataforma VTOL futura; su configuración y prestaciones requieren validación.",
    eb_b2_p2: "Edge AI a bordo: Procesamiento térmico local proyectado, sin depender de internet para la inferencia. Latencia y precisión pendientes de medición.",
    eb_b2_p3: "Supervisión humana: Imágenes y alertas para que un operador evalúe el contexto y apoye decisiones de respuesta.",
    eb_b3_title: "3. Impacto que buscamos validar",
    eb_b3_p1: "Seguridad del personal: Objetivo de reducir exposición en quebradas y caminos aislados mediante información previa para el equipo de respuesta.",
    eb_b3_p2: "Observación nocturna: Evaluar la detección de presencia humana y anomalías térmicas para apoyar la vigilancia preventiva y la detección temprana de incendios.",
    eb_b3_p3: "Apoyo al despacho: Georreferenciación e información de contexto proyectadas para apoyar decisiones de respuesta junto a un socio piloto.",
    eb_b4_title: "4. Programa de Validación 2026-27",
    eb_b4_p1: "Estado actual TRL 3: Proyecto Semilla Inicia Corfo, apoyo UdeC y demostración técnica prevista en Gearbox para enero de 2027.",
    eb_b4_p2: "Próximos pasos: Integración experimental y primeras pruebas para evaluar el funcionamiento conjunto del sistema.",
    eb_b4_p3: "Contacto: Equipo Strig Systems · Concepción, Chile · contacto@strigsystems.tech"
  },

  en: {
    // Page metadata & Header
    h_company: "Aerospace engineering and autonomous systems · Chile",
    h_page_title: "Strig Systems | Athene — Autonomous Aerial Intelligence",
    lang_code: "ES",
    h_nav_cta: "Request Briefing",

    // Hero Section
    h_visual_tag: "CONCEPTUAL ARCHITECTURE",
    h_visual_title: "One system. Three connected functions.",
    h_visual_caption: "Conceptual architecture with a generic aircraft and enlarged components. Evidence is enriched during observation. It does not depict the Noctua design or measured results.",
    h_visual_boundary: "VTOL aircraft · onboard camera and computer",
    h_visual_delivery: "Images and notices to the local supervision station",
    h_flow_1: "Aircraft and camera",
    h_flow_2: "Onboard inference",
    h_flow_3: "Human assessment",
    h_stage_label: "PROJECT STATUS",
    h_stage_now: "Today · TRL 3",
    h_stage_now_desc: "Architecture and integration preparation.",
    h_stage_next: "Next · 2027 demo",
    h_stage_next_desc: "Experimental integration planned.",
    h_stage_future: "Vision · Noctua / Nest",
    h_stage_future_desc: "Proposed aircraft and ground station.",
    h_capabilities_label: "ARCHITECTURE UNDER DEVELOPMENT",
    h_status: "TRL 3 · Prototype under development · Demo planned Jan 2027",
    h_badge: "Corfo Semilla Inicia Grant • IncubaUdeC • 7th Gear Challenge Finalists - Gearbox UdeC",
    h_eyebrow_tag: "AERIAL SURVEILLANCE FOR THE NIGHTTIME GAP",
    h_title_1: "Risks move fast.",
    h_title_2: "We see them coming.",
    h_desc: "An autonomous aerial sentinel platform designed to reduce the nighttime forestry surveillance gap through onboard thermal analysis and human oversight of alerts.",
    h_cta_pilot: "Discuss a validation pilot",
    h_cta_brief: "View executive brief",

    // 3 Capability Pillars
    h_p1_tag: "[AEROSPACE // 01]",
    h_p1_title: "Experimental aerial platform",
    h_p1_desc: "Initial validation is planned on an adapted commercial aircraft. Noctua is the proposed fixed-wing VTOL platform for the future system.",

    h_p2_tag: "[ANALYSIS // 02]",
    h_p2_title: "Onboard thermal analysis",
    h_p2_desc: "Onboard thermal analysis to detect the presence of people and signs of fire at night. Accuracy and response times will be assessed during testing.",

    h_p3_tag: "[SUPERVISION // 03]",
    h_p3_title: "Human oversight of alerts",
    h_p3_desc: "The operator reviews images and alerts to assess human activity that could pose a fire risk and support an early response.",

    // Technical Specifications & Pilot Card
    h_ip_tag: "TECHNICAL CONVERSATION",
    h_ip_protocol: "[2026-27 VALIDATION]",
    h_ip_title: "Would you like to explore field validation?",
    h_ip_body: "Let’s discuss your forestry surveillance needs and how they could inform Athene testing. We are preparing experimental system integration.",
    h_ip_footer_note: "Strig Systems Team · Concepción, Chile.",
    h_ip_btn: "Talk with the team",

    // Backing strip
    h_b1: "5 UdeC Aerospace Engineers",
    h_b2: "Corfo · Semilla Inicia Grant Awardees",
    h_b3: "7th Gear Challenge Finalists - Gearbox UdeC",
    h_b4: "IncubaUdeC",
    team_tag: "Founding team",
    team_title: "The team behind Strig Systems",
    team_intro: "Five aerospace engineers trained at Universidad de Concepción, developing Strig Systems and Athene.",
    team_role_lead: "Co-founder · Technical lead",
    team_role_ops: "Co-founder · Operations",
    team_role_cofounder_f: "Co-founder",
    team_role_cofounder: "Co-founder",
    team_linkedin: "LinkedIn",
    team_name_tomas: "Tomás Medina",
    team_name_carlos: "Carlos Gutiérrez",
    team_name_ananda: "Ananda Glaria",
    team_name_richard: "Richard Solís",
    team_name_pablo: "Pablo Alarcón",
    institutional_title: "Supported by",
    institutional_incuba: "Incubated at IncubaUdeC · Mentoring by Red de Mentores IU",
    institutional_corfo: "Funding · Corfo Semilla Inicia",


    // Footer
    f_tagline: "Chilean aerospace engineering and autonomous systems company. We develop Athene™, an aerial sentinel system for nighttime forest monitoring.",
    f_location: "Concepción, Chile · Universidad de Concepción",
    f_copyright: "© 2026 Strig Systems SpA. All rights reserved.",
    f_terms: "B2B Terms of Service",
    f_privacy_link: "Privacy Policy",

    // Modal tabs & headers
    intent_tab_pilot: "Pilot Property 2026-27",
    intent_tab_briefing: "Technical Briefing (15 min)",
    intent_tab_alliances: "Collaboration",
    modal_badge: "Territorial Validation 2026-27",
    modal_title: "Join the 2026-27 Validation Program",
    modal_sub: "Submit your organization's details to evaluate joint territorial feasibility and field validation requirements.",

    // Form labels & placeholders
    f_name_label: "Full Name *",
    f_name_ph: "E.g.: Sarah Jenkins",
    f_email_label: "Email address *",
    f_email_ph: "name@company.com",
    f_company_label: "Company or organization (optional)",
    f_company_ph: "E.g.: Forestry Operator / Mining / Government",
    f_phone_label: "Phone / WhatsApp (optional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Potential pilot region (optional)",
    opt_select_region: "Select a region",
    f_interest_label: "Organization or property type (optional)",
    opt_select_interest: "Select type of interest",
    opt_interest_1: "Forestry Enterprise (Productive Land)",
    opt_interest_2: "Public Emergency Agency / B2G",
    opt_interest_3: "Community / Wildland-Urban Interface Protection",
    opt_interest_4: "Critical Infrastructure / Energy Grid",
    f_briefing_time_label: "Preferred Meeting Time *",
    opt_time_morning: "Morning (09:00 - 12:00 CLT)",
    opt_time_afternoon: "Afternoon (14:00 - 17:00 CLT)",
    opt_time_late: "Late Afternoon (17:00 - 19:00 CLT)",
    f_alliance_type_label: "Collaboration type",
    opt_alliance_1: "Venture Capital / Investment Fund",
    opt_alliance_nda: "NDA Request for Technical Evaluation",
    opt_alliance_2: "R&D Center / Academic Cooperation",
    opt_alliance_3: "Public Agency / Municipality / B2G",
    f_message_label: "Additional Details or Specific Requirements (optional)",
    f_message_ph: "Briefly describe your land type, geographic zone, or technical inquiry...",
    f_consent_label: "I consent to the processing of my details to respond to this enquiry and acknowledge:",
    form_val_error: "Please complete all required fields (*) with a valid format.",
    form_sending: "Sending…",
    form_error_msg: "An error occurred while submitting. You can write directly to",
    f_submit_btn: "Submit Validation Request",
    f_privacy: "We will use these details to respond to your enquiry.",
    f_briefing_direct: "Or reach the Technical Lead directly:",
    success_title: "Application Received Successfully!",
    success_desc: "We have received your enquiry. The team will contact you to discuss next steps.",
    success_close_btn: "Close Window",

    // Dynamic Intent Variations
    badge_pilot: "Territorial Validation 2026-27",
    title_pilot: "Join the 2026-27 Validation Program",
    sub_pilot: "Submit your organization's details to evaluate joint territorial feasibility and field validation requirements.",
    badge_briefing: "Strig Systems Team · 15 Minutes",
    title_briefing: "Discuss Athene",
    sub_briefing: "A conversation with the team about the project, its current stage and validation opportunities.",
    badge_alliances: "Collaboration and R&D",
    title_alliances: "Explore a collaboration",
    sub_alliances: "Tell us how you would like to contribute to Athene development and validation.",
    f_briefing_submit: "Request Technical Briefing",
    f_submit_alliances: "Send enquiry",
    briefing_success_title: "Briefing Request Received!",
    briefing_success_desc: "Tomás Medina will reach out to coordinate the Google Meet link according to your selected time slot.",

    // Executive Brief Modal
    brief_doc_print: "Print / Save as PDF",
    eb_product: "ATHENE PLATFORM",
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Autonomous Nocturnal Aerial Surveillance",
    eb_h1: "Autonomous Aerial Intelligence for the Nocturnal Wildfire Gap",
    eb_summary: "Athene is an aerial sentinel system under experimental development (declared TRL 3). We are defining its architecture and preparing the integration of a test platform, onboard thermal analysis and human supervision. The 2026-27 program aims to assess that integration.",
    eb_b1_title: "1. Operational Problem",
    eb_b1_p1: "Nocturnal gap: Observation and response in darkness and complex terrain face operational constraints that must be assessed for each mission.",
    eb_b1_p2: "Human activity: The proposed surveillance aims to detect the presence of people and assess context to flag situations that could lead to a fire.",
    eb_b1_p3: "Ground blind spots: Ravines and interior stands limit observation from roads; coverage will be assessed at each pilot site.",
    eb_b2_title: "2. Technological Solution",
    eb_b2_p1: "Aerial platform: Initial validation is planned on an adapted commercial aircraft. Noctua is the future VTOL platform; its configuration and performance require validation.",
    eb_b2_p2: "Onboard Edge AI: Proposed local thermal processing, with inference independent of internet access. Latency and accuracy await measurement.",
    eb_b2_p3: "Human supervision: Images and alerts for an operator to assess context and support response decisions.",
    eb_b3_title: "3. Impact we aim to validate",
    eb_b3_p1: "Personnel safety: Aim to reduce exposure in ravines and isolated roads through advance information for response teams.",
    eb_b3_p2: "Nighttime observation: Assess the detection of human presence and thermal anomalies to support preventive surveillance and early fire detection.",
    eb_b3_p3: "Dispatch support: Proposed georeferencing and contextual information to support response decisions with a pilot partner.",
    eb_b4_title: "4. Validation Program 2026-27",
    eb_b4_p1: "Current TRL 3 status: Corfo Semilla Inicia project, UdeC support and a technical demonstration planned at Gearbox for January 2027.",
    eb_b4_p2: "Next steps: Experimental integration and initial tests to assess how the system works together.",
    eb_b4_p3: "Contact: Strig Systems team · Concepción, Chile · contacto@strigsystems.tech"
  }
};

/**
 * Update DOM elements with translations
 */
function setLanguage(lang) {
  const currentLang = (lang === 'en') ? 'en' : 'es';
  document.documentElement.setAttribute('lang', currentLang);
  document.documentElement.setAttribute('data-lang', currentLang);
  localStorage.setItem('strig_lang', currentLang);

  const dict = translations[currentLang];
  if (!dict) return;

  // Text content elements
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // Placeholder inputs
  document.querySelectorAll('[data-i18n-ph]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-ph');
    if (dict[key]) {
      elem.setAttribute('placeholder', dict[key]);
    }
  });

  // Update Page Title
  if (dict.h_page_title) {
    document.title = dict.h_page_title;
  }

  // Toggle button indicator
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const codeSpan = langBtn.querySelector('.lang-code');
    if (codeSpan) {
      codeSpan.textContent = (currentLang === 'es') ? 'EN' : 'ES';
    }
  }

  // Update dual-option lang button active highlight
  document.querySelectorAll('.lang-btn .lang-option').forEach(opt => {
    if (opt.getAttribute('data-lang-val') === currentLang) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  window.dispatchEvent(new CustomEvent('strig-lang-change', { detail: { lang: currentLang } }));
}

/**
 * Controller for Contact & Pilot / NDA Qualification Modal
 */
function initContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="contact-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const form = document.getElementById('contact-form');
  const successState = document.getElementById('contact-success');
  const intentPills = modal.querySelectorAll('.intent-pill');

  const badgeText = document.getElementById('contact-badge-text');
  const modalTitle = document.getElementById('contact-modal-title');
  const modalSub = document.getElementById('contact-modal-sub');
  const formIntentInput = document.getElementById('form-intent-input');
  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;
  const arrowIcon = submitBtn ? submitBtn.querySelector('.arrow-icon') : null;
  const valError = document.getElementById('contact-validation-error');
  const netError = document.getElementById('contact-error');
  const successTitle = document.getElementById('contact-success-title');
  const successDesc = document.getElementById('contact-success-desc');
  const privacyNote = document.getElementById('contact-privacy-note');
  const directNote = document.getElementById('contact-direct-note');

  let currentIntent = 'pilot';
  let lastActiveElement = null;
  let focusFrame = null;

  function getDict() {
    const lang = document.documentElement.getAttribute('data-lang') || 'es';
    return translations[lang] || translations.es;
  }

  function setIntent(intent) {
    currentIntent = intent;
    const dict = getDict();

    intentPills.forEach(pill => {
      const isTarget = pill.getAttribute('data-intent-target') === intent;
      pill.classList.toggle('active', isTarget);
      pill.setAttribute('aria-pressed', isTarget ? 'true' : 'false');
    });

    const pilotFields = modal.querySelectorAll('.intent-field-pilot');
    const briefingFields = modal.querySelectorAll('.intent-field-briefing');
    const alliancesFields = modal.querySelectorAll('.intent-field-alliances');

    pilotFields.forEach(f => f.style.display = (intent === 'pilot') ? 'block' : 'none');
    briefingFields.forEach(f => f.style.display = (intent === 'briefing') ? 'block' : 'none');
    alliancesFields.forEach(f => f.style.display = (intent === 'alliances') ? 'block' : 'none');

    if (intent === 'briefing') {
      if (badgeText) badgeText.textContent = dict.badge_briefing || "Equipo Strig Systems · 15 Minutos";
      if (modalTitle) modalTitle.textContent = dict.title_briefing || "Agendar Briefing Técnico";
      if (modalSub) modalSub.textContent = dict.sub_briefing || "Coordinación directa de 15 minutos por Google Meet.";
      if (btnText) btnText.textContent = dict.f_briefing_submit || "Solicitar Briefing Técnico";
      if (formIntentInput) formIntentInput.value = "Briefing Técnico (15 min)";
      if (privacyNote) privacyNote.style.display = 'none';
      if (directNote) directNote.style.display = 'block';
    } else if (intent === 'alliances') {
      if (badgeText) badgeText.textContent = dict.badge_alliances || "Reserva Técnica & NDA";
      if (modalTitle) modalTitle.textContent = dict.title_alliances || "Solicitud de NDA & Cooperación";
      if (modalSub) modalSub.textContent = dict.sub_alliances || "Canal institucional para fondos de inversión y firmas de NDA.";
      if (btnText) btnText.textContent = dict.f_submit_alliances || "Enviar Solicitud de NDA";
      if (formIntentInput) formIntentInput.value = "Solicitud de NDA / Inversión";
      if (privacyNote) privacyNote.style.display = 'block';
      if (directNote) directNote.style.display = 'none';
    } else {
      if (badgeText) badgeText.textContent = dict.badge_pilot || "Validación territorial 2026-27";
      if (modalTitle) modalTitle.textContent = dict.title_pilot || "Sumarse al programa de validación";
      if (modalSub) modalSub.textContent = dict.sub_pilot || "Completa los datos de tu entidad.";
      if (btnText) btnText.textContent = dict.f_submit_btn || "Enviar solicitud de validación";
      if (formIntentInput) formIntentInput.value = "Validación territorial (2026-27)";
      if (privacyNote) privacyNote.style.display = 'block';
      if (directNote) directNote.style.display = 'none';
    }
  }

  intentPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = pill.getAttribute('data-intent-target');
      setIntent(target);
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
      cancelAnimationFrame(focusFrame);
      let remainingFrames = 20;
      const focusWhenVisible = () => {
        if (!modal.classList.contains('active') || modal.contains(document.activeElement)) return;
        firstInput.focus({ preventScroll: true });
        if (document.activeElement !== firstInput && remainingFrames-- > 0) {
          focusFrame = requestAnimationFrame(focusWhenVisible);
        }
      };
      focusFrame = requestAnimationFrame(focusWhenVisible);
    }
  }

  function closeModal() {
    cancelAnimationFrame(focusFrame);
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
      const explicitIntent = btn.getAttribute('data-intent') || 'pilot';
      openModal(explicitIntent);
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
      const focusables = [...modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
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
    } else if (e.key === 'Escape') {
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
      [name, email].forEach(input => {
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
      const senderLabel = company.value.trim() || name.value.trim();
      let dynamicSubject = '';
      if (currentIntent === 'briefing') {
        dynamicSubject = `Solicitud Briefing Técnico: ${name.value.trim()} (${company.value.trim()}) - Strig Systems`;
      } else if (currentIntent === 'alliances') {
        dynamicSubject = `Consulta de colaboración: ${senderLabel} - Strig Systems`;
      } else {
        dynamicSubject = `Consulta sobre piloto: ${senderLabel} - Strig Systems`;
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
        Tipo_Consulta: currentIntent === 'alliances' && allianceType ? allianceType.value : 'N/A',
        Mensaje: message ? message.value.trim() : '',
        _subject: dynamicSubject,
        _template: 'table',
        _captcha: 'false'
      };

      const dict = getDict();
      if (submitBtn) submitBtn.disabled = true;
      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (arrowIcon) arrowIcon.style.display = 'none';
      if (btnText) btnText.textContent = dict.form_sending;

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
              if (successTitle) successTitle.textContent = dict.briefing_success_title || "¡Solicitud de Briefing Recibida!";
              if (successDesc) successDesc.textContent = dict.briefing_success_desc || "Tomás Medina se contactará contigo para coordinar el enlace de Google Meet.";
            } else {
              if (successTitle) successTitle.textContent = dict.success_title || "¡Solicitud Recibida con Éxito!";
              if (successDesc) successDesc.textContent = dict.success_desc || "Hemos recibido los antecedentes de tu entidad.";
            }
          }
          form.reset();
        } else {
          throw new Error(`Server returned HTTP ${response.status}`);
        }
      } catch (err) {
        console.warn('FormSubmit AJAX request failed, displaying mailto fallback:', err);
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
            btnText.textContent = dict.f_submit_alliances || "Enviar Solicitud de NDA";
          } else {
            btnText.textContent = dict.f_submit_btn || "Enviar solicitud de validación";
          }
        }
      }
    });
  }
}

/**
 * Controller for Executive Brief Modal & Print to PDF
 */
function initExecutiveBriefModal() {
  const modal = document.getElementById('brief-modal');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-modal="brief-modal"]');
  const closeBtns = modal.querySelectorAll('[data-close-modal]');
  const printBtn = document.getElementById('brief-print-btn');

  let lastActiveElement = null;
  let focusFrame = null;

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
      cancelAnimationFrame(focusFrame);
      let remainingFrames = 20;
      const focusWhenVisible = () => {
        if (!modal.classList.contains('active') || modal.contains(document.activeElement)) return;
        closeBtn.focus({ preventScroll: true });
        if (document.activeElement !== closeBtn && remainingFrames-- > 0) {
          focusFrame = requestAnimationFrame(focusWhenVisible);
        }
      };
      focusFrame = requestAnimationFrame(focusWhenVisible);
    }
  }

  function closeModal() {
    cancelAnimationFrame(focusFrame);
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
      const focusables = [...modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
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
    } else if (e.key === 'Escape') {
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

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log(
    '%c◈ STRIG SYSTEMS %c| Controlled Disclosure Holding Mode Online',
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

  // Initialize Modals
  initContactModal();
  initExecutiveBriefModal();
});
