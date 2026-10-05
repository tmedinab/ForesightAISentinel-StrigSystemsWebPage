/**
 * Strig Systems — Athene™
 * Holding Page Client Controller (Controlled Disclosure & IP Protection Edition)
 * Zero Runtime Dependencies · Bilingual Parity (ES / EN) · Zero Emojis
 */

const translations = {
  es: {
    // Page metadata & Header
    h_page_title: "Strig Systems | Athene — Inteligencia Aérea Autónoma",
    lang_code: "EN",
    h_nav_cta: "Solicitar Briefing",

    // Hero Section
    h_status: "TRL 3 · Prototipo en desarrollo · Demo técnica ene 2027",
    h_badge: "Semilla Inicia CORFO • Lab Aeroespacial UdeC • Gearbox",
    h_title_1: "Los riesgos se mueven rápido.",
    h_title_2: "Nosotros los vemos venir.",
    h_desc: "Plataforma centinela aérea autónoma con inferencia térmica Edge AI a bordo. Diseñada para cubrir la brecha nocturna de incendios forestales mediante la detección temprana de precursores y actividad humana no autorizada antes de la ignición.",
    h_cta_pilot: "Solicitar Acceso a Dossier & Validación Piloto",
    h_cta_brief: "Executive Briefing (PDF)",

    // 3 Capability Pillars
    h_p1_tag: "[AERONÁUTICA // 01]",
    h_p1_title: "Célula Aérea VTOL Autónoma",
    h_p1_desc: "Aeronave de despegue vertical sin pista y crucero eficiente de ala fija. Diseñada para patrullaje nocturno continuo sobre quebradas y topografía forestal compleja.",

    h_p2_tag: "[ZERO-CLOUD // 02]",
    h_p2_title: "Inferencia Edge AI a Bordo",
    h_p2_desc: "Cómputo local de visión térmica radiométrica LWIR a bordo. Detección y clasificación de precursores en microsegundos sin requerir internet satelital ni 4G/5G.",

    h_p3_tag: "[HITL // 03]",
    h_p3_title: "Doctrina Human-in-the-Loop",
    h_p3_desc: "Alerta inmediata y georreferenciada a la estación de mando. Disuasión activa mediante foco de alta intensidad y sirena autorizada exclusivamente por el operador humano.",

    // Controlled Disclosure & IP Box
    h_ip_tag: "◈ DIVULGACIÓN CONTROLADA & RESERVA TÉCNICA // LEY N° 19.039",
    h_ip_protocol: "[PROTOCOLO NDA DISPONIBLE]",
    h_ip_title: "Resguardo de Propiedad Intelectual & Especificaciones de Ingeniería",
    h_ip_body: "La arquitectura de sistemas, diseño aerodinámico, algoritmos de visión computacional y modelos analíticos de Athene™ son propiedad intelectual y tecnológica exclusiva de Strig Systems SpA. Por motivos de reserva estratégica y resguardo de propiedad industrial durante la fase de desarrollo y validación experimental (TRL 3), las especificaciones técnicas completas, planos de célula y dossier operativo se suministran de manera confidencial y bajo Acuerdo de Confidencialidad (NDA) a empresas forestales calificadas, agencias públicas y fondos de inversión acreditados.",
    h_ip_footer_note: "Mesa técnica de evaluación y coordinación: Concepción, Chile.",
    h_ip_btn: "Solicitar Acuerdo de Confidencialidad (NDA)",

    // Backing strip
    h_b1: "5 Ingenieros Civiles Aeroespaciales UdeC",
    h_b2: "CORFO · Adjudicatarios Semilla Inicia",
    h_b3: "Aceleradora Gearbox UdeC",
    h_b4: "Lab Aeroespacial UdeC",

    // Footer
    f_tagline: "Startup chilena de ingeniería aeroespacial y defensa deeptech. Desarrolladores del sistema centinela aéreo autónomo Athene™.",
    f_location: "Concepción, Chile · Universidad de Concepción",
    f_copyright: "© 2026 Strig Systems SpA. Todos los derechos reservados.",
    f_terms: "Términos de Servicio B2B",
    f_privacy_link: "Política de Privacidad",

    // Modal tabs & headers
    intent_tab_pilot: "Predio Piloto 2026-27",
    intent_tab_briefing: "Briefing Técnico (15 min)",
    intent_tab_alliances: "NDA & Inversión",
    modal_badge: "Validación territorial 2026-27",
    modal_title: "Sumarse al programa de validación 2026-27",
    modal_sub: "Completa los datos de tu entidad para evaluar conjuntamente la factibilidad territorial y requerimientos de validación en terreno.",

    // Form labels & placeholders
    f_name_label: "Nombre y apellido *",
    f_name_ph: "Ej: Marcela Soto",
    f_email_label: "Correo corporativo o institucional *",
    f_email_ph: "nombre@empresa.cl",
    f_company_label: "Empresa u organización *",
    f_company_ph: "Ej: Forestal / Minera / Institución",
    f_phone_label: "Teléfono / WhatsApp (opcional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Región territorial *",
    opt_select_region: "Selecciona una región",
    f_interest_label: "Tipo de entidad o predio *",
    opt_select_interest: "Selecciona tipo de interés",
    opt_interest_1: "Empresa forestal (Predio productivo)",
    opt_interest_2: "Organismo público de emergencia / B2G",
    opt_interest_3: "Comunidad / Protección de interfaz urbano-forestal",
    opt_interest_4: "Infraestructura crítica / Red eléctrica / Energía",
    f_briefing_time_label: "Horario preferente de reunión *",
    opt_time_morning: "Mañana (09:00 - 12:00 CLT)",
    opt_time_afternoon: "Tarde (14:00 - 17:00 CLT)",
    opt_time_late: "Fin de tarde (17:00 - 19:00 CLT)",
    f_alliance_type_label: "Naturaleza de la consulta / NDA *",
    opt_alliance_1: "Fondo de inversión / Venture Capital",
    opt_alliance_nda: "Solicitud de NDA para Evaluación Técnica",
    opt_alliance_2: "Centro de I+D / Cooperación académica",
    opt_alliance_3: "Agencia pública / Municipalidad / B2G",
    f_message_label: "Detalles adicionales o necesidad específica (opcional)",
    f_message_ph: "Describe brevemente el tipo de predio, zona geográfica o consulta técnica...",
    f_consent_label: "Acepto el tratamiento de mis datos de contacto para la evaluación técnica y declaro conocer los Términos de Servicio y la Política de Privacidad (Ley N° 19.628 / 21.719).",
    form_val_error: "Por favor completa todos los campos obligatorios (*) con un formato válido.",
    form_error_msg: "Hubo un problema al enviar la solicitud. Puedes escribirnos directamente a",
    f_submit_btn: "Enviar solicitud de validación",
    f_privacy: "Tus datos serán tratados bajo estricta confidencialidad técnica (NDA disponible).",
    f_briefing_direct: "O escribe directamente al Technical Lead:",
    success_title: "¡Solicitud Recibida con Éxito!",
    success_desc: "Hemos recibido los antecedentes de tu entidad. Nuestro equipo de ingeniería aeroespacial revisará la solicitud y se contactará directamente dentro de 24 horas hábiles.",
    success_close_btn: "Cerrar Ventana",

    // Dynamic Intent Variations
    badge_pilot: "Validación territorial 2026-27",
    title_pilot: "Sumarse al programa de validación 2026-27",
    sub_pilot: "Completa los datos de tu entidad para evaluar conjuntamente la factibilidad territorial y requerimientos de validación en terreno.",
    badge_briefing: "Mesa Técnica · 15 Minutos",
    title_briefing: "Agendar Briefing Técnico Operacional",
    sub_briefing: "Coordinación directa de 15 minutos por Google Meet con el equipo de ingeniería para revisar alcance, arquitectura y capacidades.",
    badge_alliances: "Reserva Técnica & NDA",
    title_alliances: "Solicitud de NDA & Cooperación Estratégica",
    sub_alliances: "Canal institucional para fondos de inversión, centros de I+D o entidades interesadas en firmar Acuerdo de Confidencialidad.",
    f_briefing_submit: "Solicitar Briefing Técnico",
    f_submit_alliances: "Enviar Solicitud de NDA",
    briefing_success_title: "¡Solicitud de Briefing Recibida!",
    briefing_success_desc: "Tomás Medina se contactará contigo para coordinar el enlace de Google Meet según el horario seleccionado.",

    // Executive Brief Modal
    brief_doc_print: "Imprimir / Guardar como PDF",
    eb_product: "PLATAFORMA ATHENE",
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Vigilancia Territorial Autónoma Nocturna",
    eb_h1: "Inteligencia Aérea Autónoma para la Brecha Nocturna de Incendios",
    eb_summary: "Athene aborda la brecha nocturna mediante aeronaves autónomas VTOL (validación inicial sobre plataforma adaptada), inferencia térmica Edge AI a bordo (NVIDIA Jetson) y telemetría táctica FHSS 915 MHz, sustituyendo la exposición terrestre a ciegas y optimizando el despacho aéreo al amanecer.",
    eb_b1_title: "1. El Problema Operacional",
    eb_b1_p1: "Ventana ciega nocturna: La aviación tripulada combate de día, pero no vuela de noche por normativa DGAC y riesgo de choque con el relieve (CFIT).",
    eb_b1_p2: "99,7% de origen humano: La casi totalidad de los incendios derivan de acción humana intencional o negligente (Fuente: CONAF).",
    eb_b1_p3: "Puntos ciegos terrestres: Patrullas en 4x4 cubren < 12% del predio, ciegas ante quebradas y rodales interiores donde se inician fogatas y focos intencionales.",
    eb_b2_title: "2. Solución Tecnológica",
    eb_b2_p1: "Aeronave VTOL Noctua™: Validación inicial sobre plataforma adaptada; autonomía de diseño 45–60 min y despegue vertical sin pista hacia la célula VTOL dedicada.",
    eb_b2_p2: "Edge AI Zero-Cloud a Bordo: Cómputo local NVIDIA Jetson; detección térmica en segundos sin conexión a internet ni señal celular.",
    eb_b2_p3: "Disuasión con Autorización Humana: Activación de foco de alta intensidad y sirena acústica siempre autorizada por el operador en tierra (Human-in-the-Loop).",
    eb_b3_title: "3. Modelo de Impacto Operacional IaaS",
    eb_b3_p1: "Seguridad del Personal: Cero exposición humana innecesaria en quebradas y caminos aislados en horario nocturno crítico.",
    eb_b3_p2: "Detección Temprana & Disuasión: Detección de actividad humana a 100 m de altura y disuasión autorizada por el operador antes de la ignición.",
    eb_b3_p3: "Optimización al Amanecer: Georreferenciación temprana de coordenadas y perímetro que ahorra horas críticas de combate aéreo al inicio del día.",
    eb_b4_title: "4. Programa de Validación 2026-27",
    eb_b4_p1: "Estado Actual TRL 3: Proyecto Semilla Inicia CORFO, apoyo UdeC y demostración técnica programada en Gearbox (Enero 2027).",
    eb_b4_p2: "Campaña en Predio Piloto: 4 fases metodológicas (Levantamiento, Calibración, Vigilancia Nocturna, Auditoría Operacional).",
    eb_b4_p3: "Gobernanza & Contacto: Modelos y software bajo titularidad exclusiva de Strig Systems SpA • Tomás Medina (Technical Lead) | contacto@strigsystems.tech"
  },

  en: {
    // Page metadata & Header
    h_page_title: "Strig Systems | Athene — Autonomous Aerial Intelligence",
    lang_code: "ES",
    h_nav_cta: "Request Briefing",

    // Hero Section
    h_status: "TRL 3 · Prototype under development · Technical demo Jan 2027",
    h_badge: "CORFO Semilla Inicia Grant • UdeC Aerospace Lab • Gearbox",
    h_title_1: "Wildfires move fast.",
    h_title_2: "We see them coming.",
    h_desc: "Autonomous aerial sentinel platform with onboard Edge AI thermal inference. Designed to close the nocturnal gap by detecting precursors and unauthorized human activity before ignition.",
    h_cta_pilot: "Request Dossier Access & Pilot Validation",
    h_cta_brief: "Executive Briefing (PDF)",

    // 3 Capability Pillars
    h_p1_tag: "[AEROSPACE // 01]",
    h_p1_title: "Autonomous VTOL Airframe",
    h_p1_desc: "Runway-free vertical takeoff and high-efficiency fixed-wing cruising. Engineered for continuous nocturnal patrol over ravines and rugged forestry terrain.",

    h_p2_tag: "[ZERO-CLOUD // 02]",
    h_p2_title: "Onboard Edge AI Inference",
    h_p2_desc: "Local LWIR radiometric thermal computer vision processed at the edge. Threat classification in microseconds without relying on satellite or 4G/5G connectivity.",

    h_p3_tag: "[HITL // 03]",
    h_p3_title: "Human-in-the-Loop Doctrine",
    h_p3_desc: "Instant geo-referenced telemetry dispatched to ground command. Active deterrents (strobe light and acoustic siren) strictly authorized by a human operator.",

    // Controlled Disclosure & IP Box
    h_ip_tag: "◈ CONTROLLED DISCLOSURE & TECHNICAL RESERVE // LAW NO. 19,039",
    h_ip_protocol: "[NDA PROTOCOL AVAILABLE]",
    h_ip_title: "Intellectual Property Safeguard & Engineering Specifications",
    h_ip_body: "System architecture, aerodynamic airframe design, computer vision algorithms, and mission logic of Athene™ are the exclusive intellectual property of Strig Systems SpA. To safeguard strategic engineering assets during the experimental laboratory phase (TRL 3), comprehensive technical specifications and operational dossiers are shared strictly under Non-Disclosure Agreement (NDA) with qualified forestry operators, defense agencies, and accredited venture capital funds.",
    h_ip_footer_note: "Technical evaluation & operations desk: Concepción, Chile.",
    h_ip_btn: "Request Non-Disclosure Agreement (NDA)",

    // Backing strip
    h_b1: "5 UdeC Aerospace Engineers",
    h_b2: "CORFO · Semilla Inicia Grant Awardees",
    h_b3: "Gearbox UdeC Accelerator",
    h_b4: "UdeC Aerospace Lab",

    // Footer
    f_tagline: "Chilean deeptech aerospace & defense startup. Creators of the Athene™ autonomous aerial sentinel system.",
    f_location: "Concepción, Chile · Universidad de Concepción",
    f_copyright: "© 2026 Strig Systems SpA. All rights reserved.",
    f_terms: "B2B Terms of Service",
    f_privacy_link: "Privacy Policy",

    // Modal tabs & headers
    intent_tab_pilot: "Pilot Property 2026-27",
    intent_tab_briefing: "Technical Briefing (15 min)",
    intent_tab_alliances: "NDA & Investment",
    modal_badge: "Territorial Validation 2026-27",
    modal_title: "Join the 2026-27 Validation Program",
    modal_sub: "Submit your organization's details to evaluate joint territorial feasibility and field validation requirements.",

    // Form labels & placeholders
    f_name_label: "Full Name *",
    f_name_ph: "E.g.: Sarah Jenkins",
    f_email_label: "Corporate or Institutional Email *",
    f_email_ph: "name@company.com",
    f_company_label: "Company or Organization *",
    f_company_ph: "E.g.: Forestry Operator / Mining / Government",
    f_phone_label: "Phone / WhatsApp (optional)",
    f_phone_ph: "+56 9 1234 5678",
    f_region_label: "Territorial Region *",
    opt_select_region: "Select a region",
    f_interest_label: "Entity or Property Type *",
    opt_select_interest: "Select type of interest",
    opt_interest_1: "Forestry Enterprise (Productive Land)",
    opt_interest_2: "Public Emergency Agency / B2G",
    opt_interest_3: "Community / Wildland-Urban Interface Protection",
    opt_interest_4: "Critical Infrastructure / Energy Grid",
    f_briefing_time_label: "Preferred Meeting Time *",
    opt_time_morning: "Morning (09:00 - 12:00 CLT)",
    opt_time_afternoon: "Afternoon (14:00 - 17:00 CLT)",
    opt_time_late: "Late Afternoon (17:00 - 19:00 CLT)",
    f_alliance_type_label: "Nature of Inquiry / NDA *",
    opt_alliance_1: "Venture Capital / Investment Fund",
    opt_alliance_nda: "NDA Request for Technical Evaluation",
    opt_alliance_2: "R&D Center / Academic Cooperation",
    opt_alliance_3: "Public Agency / Municipality / B2G",
    f_message_label: "Additional Details or Specific Requirements (optional)",
    f_message_ph: "Briefly describe your land type, geographic zone, or technical inquiry...",
    f_consent_label: "I agree to the processing of my contact information for technical evaluation and acknowledge the Terms of Service and Privacy Policy (Law No. 19,628 / 21,719).",
    form_val_error: "Please complete all required fields (*) with a valid format.",
    form_error_msg: "An error occurred while submitting. You can write directly to",
    f_submit_btn: "Submit Validation Request",
    f_privacy: "Your data is handled under strict technical confidentiality (NDA available).",
    f_briefing_direct: "Or reach the Technical Lead directly:",
    success_title: "Application Received Successfully!",
    success_desc: "We have received your entity's submission. Our aerospace engineering team will review requirements and reach out within 24 business hours.",
    success_close_btn: "Close Window",

    // Dynamic Intent Variations
    badge_pilot: "Territorial Validation 2026-27",
    title_pilot: "Join the 2026-27 Validation Program",
    sub_pilot: "Submit your organization's details to evaluate joint territorial feasibility and field validation requirements.",
    badge_briefing: "Technical Desk · 15 Minutes",
    title_briefing: "Schedule Operational Technical Briefing",
    sub_briefing: "Direct 15-minute Google Meet call with the engineering team to review system scope, architecture, and capabilities.",
    badge_alliances: "Technical Reserve & NDA",
    title_alliances: "NDA Request & Strategic Cooperation",
    sub_alliances: "Institutional channel for venture funds, R&D centers, or entities seeking to execute a Non-Disclosure Agreement.",
    f_briefing_submit: "Request Technical Briefing",
    f_submit_alliances: "Submit NDA Request",
    briefing_success_title: "Briefing Request Received!",
    briefing_success_desc: "Tomás Medina will reach out to coordinate the Google Meet link according to your selected time slot.",

    // Executive Brief Modal
    brief_doc_print: "Print / Save as PDF",
    eb_product: "ATHENE PLATFORM",
    eb_tag: "EXECUTIVE BRIEF 2026-27",
    eb_sub: "Autonomous Nocturnal Aerial Surveillance",
    eb_h1: "Autonomous Aerial Intelligence for the Nocturnal Wildfire Gap",
    eb_summary: "Athene tackles the nocturnal gap utilizing autonomous VTOL aircraft (initial validation on an adapted experimental platform), onboard Edge AI thermal inference (NVIDIA Jetson), and tactical FHSS 915 MHz telemetry, replacing hazardous unguided night ground patrols and optimizing dawn aerial water-bombing dispatch.",
    eb_b1_title: "1. Operational Problem",
    eb_b1_p1: "Nocturnal blind gap: Manned aviation operates during daylight, but cannot fly at night due to DGAC regulations and controlled flight into terrain (CFIT) risks.",
    eb_b1_p2: "99.7% human origin: Almost all forest fires stem from intentional or negligent human activity (Source: CONAF historical records).",
    eb_b1_p3: "Ground blind spots: Ground 4x4 patrols cover < 12% of forestry acreage, completely blind to ravines and deep interior stands where fires are initiated.",
    eb_b2_title: "2. Technological Solution",
    eb_b2_p1: "Noctua™ VTOL Aircraft: Initial validation on adapted testbed; 45–60 min design endurance and runway-free vertical takeoff transitioning into dedicated VTOL cell.",
    eb_b2_p2: "Onboard Zero-Cloud Edge AI: NVIDIA Jetson edge compute; instant thermal threat classification without cellular or internet dependency.",
    eb_b2_p3: "Authorized Deterrence: High-intensity strobe illumination and acoustic siren strictly activated upon human operator ground authorization (Human-in-the-Loop).",
    eb_b3_title: "3. Operational Impact & IaaS Model",
    eb_b3_p1: "Personnel Safety: Zero unnecessary ground firefighter exposure in isolated ravines during critical night hours.",
    eb_b3_p2: "Early Detection & Deterrence: Detection of human activity at 100 m AGL and operator-authorized deterrence prior to ignition.",
    eb_b3_p3: "Dawn Aerial Dispatch: Early geo-referenced thermal perimeter dispatch, saving critical hours of aerial water-bombing flight time at sunrise.",
    eb_b4_title: "4. Validation Program 2026-27",
    eb_b4_p1: "Current TRL 3 Status: Supported by CORFO Semilla Inicia grant, UdeC Aerospace Lab, with technical demo day in Gearbox (January 2027).",
    eb_b4_p2: "Private Pilot Campaign: 4 methodological phases (Surveying, Sensor Calibration, Nocturnal Surveillance, Joint Audit).",
    eb_b4_p3: "Governance & Contact: Proprietary models and software owned exclusively by Strig Systems SpA • Tomás Medina (Technical Lead) | contacto@strigsystems.tech"
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
      pill.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    const pilotFields = modal.querySelectorAll('.intent-field-pilot');
    const briefingFields = modal.querySelectorAll('.intent-field-briefing');
    const alliancesFields = modal.querySelectorAll('.intent-field-alliances');

    pilotFields.forEach(f => f.style.display = (intent === 'pilot') ? 'block' : 'none');
    briefingFields.forEach(f => f.style.display = (intent === 'briefing') ? 'block' : 'none');
    alliancesFields.forEach(f => f.style.display = (intent === 'alliances') ? 'block' : 'none');

    if (intent === 'briefing') {
      if (badgeText) badgeText.textContent = dict.badge_briefing || "Mesa Técnica · 15 Minutos";
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
        dynamicSubject = `Solicitud Briefing Técnico: ${name.value.trim()} (${company.value.trim()}) - Strig Systems`;
      } else if (currentIntent === 'alliances') {
        dynamicSubject = `Solicitud NDA / Inversión: ${company.value.trim()} - Strig Systems`;
      } else {
        dynamicSubject = `Nueva Postulación Piloto: ${company.value.trim()} - Strig Systems`;
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
      if (btnText) btnText.textContent = "Enviando...";

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
