/**
 * Strig Systems — Athene™
 * Compact public landing controller
 * Zero Runtime Dependencies · Bilingual Parity (ES / EN) · Zero Emojis
 */

const translations = {
  es: {
    contact_optional: "Agregar datos de contacto (opcional)",
    join_optional: "Agregar información sobre ti (opcional)",

    join_title: "Colabora en el desarrollo de Athene",
    join_card_desc: "Buscamos estudiantes, egresados e investigadores interesados en aportar al proyecto mediante colaboración extracurricular.",
    join_cta: "Quiero colaborar",
    join_intro: "Cuéntanos qué te gustaría aportar o aprender. Conversaremos contigo para definir una posible colaboración.",
    join_future: "Más adelante esperamos abrir prácticas y memorias, según las necesidades del proyecto y la coordinación con tu universidad.",
    join_mode: "Colaboración extracurricular",
    join_studies: "Carrera o especialidad (opcional)",
    join_institution: "Universidad o institución (opcional)",
    join_availability: "¿Cuánto tiempo podrías dedicar? (opcional)",
    join_portfolio: "Portafolio, GitHub o LinkedIn (opcional)",
    join_message: "¿Cómo te gustaría participar? *",
    join_hint: "Cuéntanos sobre tus intereses y lo que te gustaría aportar o aprender.",
    join_submit: "Enviar mensaje",

    contact_reason_label: "Motivo de la consulta",
    contact_reason_athene: "Athene · Vigilancia y pruebas",
    contact_reason_collaboration: "Colaboración",
    contact_reason_general: "Consulta general",
    contact_hint_athene: "¿Qué necesitas monitorear? Cuéntanos sobre el terreno o tu interés en futuras pruebas.",
    contact_hint_collaboration: "¿Cómo te gustaría colaborar con nosotros?",
    contact_hint_general: "Cuéntanos brevemente el motivo de tu consulta.",
    contact_close: "Cerrar ventana",

    // Page metadata & Header
    h_company: "Ingeniería aeroespacial y sistemas autónomos · Chile",
    h_page_title: "Strig Systems | Athene — Inteligencia Aérea Autónoma",
    lang_code: "EN",
    h_nav_cta: "Contactar",

    // Hero Section
    h_visual_tag: "ARQUITECTURA CONCEPTUAL",
    h_visual_title: "Un sistema. Tres funciones conectadas.",
    h_visual_caption: "Ilustración conceptual del flujo de observación, análisis a bordo y revisión humana. No representa el diseño de Noctua ni resultados de pruebas.",
    h_visual_delivery: "Imágenes y alertas para el operador",
    h_flow_1: "Observación aérea",
    h_flow_2: "Análisis a bordo",
    h_flow_3: "Revisión humana",
    h_stage_label: "ESTADO DEL PROYECTO",
    h_stage_now: "Hoy · TRL 3",
    h_stage_now_desc: "Preparación de integración y primeras pruebas.",
    h_stage_next: "Próximo · Demostración 2027",
    h_stage_next_desc: "Evaluación conjunta de los componentes.",
    h_stage_future: "Evolución · Aeronave y estación",
    h_stage_future_desc: "Noctua y Nest como desarrollos futuros.",
    h_capabilities_label: "ARQUITECTURA EN DESARROLLO",
    h_status: "Desarrollo experimental · TRL 3",
    h_badge: "Semilla Inicia Corfo • IncubaUdeC • Finalistas 7th Gear Challenge - Gearbox UdeC",
    h_eyebrow_tag: "VIGILANCIA AÉREA PARA LA BRECHA NOCTURNA",
    h_title_1: "Los riesgos se mueven rápido.",
    h_title_2: "Nosotros los vemos venir.",
    h_desc: "Athene es un sistema en desarrollo que utiliza plataformas aéreas autónomas con supervisión humana para apoyar la vigilancia forestal nocturna. Busca detectar presencia de personas e indicios de incendio mediante análisis térmico a bordo y revisión humana de las alertas.",
    h_cta_pilot: "Conversar con el equipo",
    h_cta_brief: "Ver resumen del proyecto",

    // 3 Capability Pillars
    h_p1_tag: "AERONÁUTICA",
    h_p1_title: "Plataforma aérea experimental",
    h_p1_desc: "Las primeras pruebas se plantean sobre una aeronave comercial adaptada. Noctua es la plataforma VTOL de ala fija para la evolución del sistema.",

    h_p2_tag: "ANÁLISIS",
    h_p2_title: "Análisis térmico a bordo",
    h_p2_desc: "Procesamiento de imágenes térmicas para detectar presencia de personas e indicios de incendio durante la noche.",

    h_p3_tag: "SUPERVISIÓN",
    h_p3_title: "Revisión humana de alertas",
    h_p3_desc: "El operador revisa imágenes y alertas para evaluar el contexto y orientar una respuesta temprana.",

    // Technical Specifications & Pilot Card
    h_ip_tag: "POSIBLES PRUEBAS EN TERRENO",
    h_ip_title: "Exploremos posibles pruebas con Athene",
    h_ip_body: "Buscamos conocer necesidades de vigilancia forestal y conversar con organizaciones interesadas en orientar futuras pruebas del sistema.",
    h_ip_footer_note: "Equipo Strig Systems · Concepción, Chile.",
    h_ip_btn: "Conversar con el equipo",

    // Backing strip
    h_b1: "Equipo con formación aeroespacial UdeC",
    h_b2: "Corfo · Adjudicatarios Semilla Inicia",
    h_b3: "Finalistas 7th Gear Challenge - Gearbox UdeC",
    h_b4: "IncubaUdeC",
    team_tag: "Equipo fundador",
    team_title: "El equipo detrás de Strig Systems",
    team_intro: "Equipo con formación en Ingeniería Civil Aeroespacial en la Universidad de Concepción, dedicado al desarrollo de Strig Systems y Athene.",
    team_role_lead: "Cofundador · Responsable técnico",
    team_role_ops: "Cofundador · Operaciones",
    team_role_cofounder_f: "Cofundadora",
    team_role_cofounder: "Cofundador",
    team_linkedin: "LinkedIn",
    team_name_tomas: "Tomás Medina",
    team_name_carlos: "Carlos Gutiérrez",
    team_name_ananda: "Ananda Glaria",
    team_name_richard: "Richard Solís",
    institutional_title: "Nos apoyan",
    institutional_incuba: "Incubados en IncubaUdeC · Mentorías con Red de Mentores IU",
    institutional_corfo: "Financiamiento · Semilla Inicia Corfo",


    // Footer
    f_tagline: "Empresa chilena de ingeniería aeroespacial y sistemas autónomos. Desarrollamos Athene™, un sistema centinela aéreo para vigilancia forestal nocturna.",
    f_location: "Concepción, Chile",
    f_copyright: "© 2026 Strig Systems SpA. Todos los derechos reservados.",
    f_terms: "Términos de Servicio B2B",
    f_privacy_link: "Política de Privacidad",

    // Modal tabs & headers
    modal_title: "Conversemos",
    modal_sub: "Cuéntanos qué necesitas o cómo te gustaría colaborar.",

    // Form labels & placeholders
    f_name_label: "Nombre y apellido *",
    f_name_ph: "Ej: Marcela Soto",
    f_email_label: "Correo electrónico *",
    f_email_ph: "nombre@empresa.cl",
    f_company_label: "Empresa u organización (opcional)",
    f_company_ph: "Nombre de tu organización",
    f_phone_label: "Teléfono (opcional)",
    f_phone_ph: "+56 9 1234 5678",
    f_message_label: "Mensaje *",
    f_message_ph: "Escribe tu mensaje…",
    f_consent_label: "Acepto el uso de mis datos para responder a esta consulta, según la",
    form_val_error: "Revisa los datos del formulario y acepta el uso de tus datos para continuar.",
    form_sending: "Enviando…",
    form_error_msg: "No pudimos enviar tu consulta. Puedes enviarla por correo a",
    f_submit_btn: "Enviar consulta",
    success_title: "Tu consulta fue enviada.",
    success_desc: "Revisaremos tu mensaje y te responderemos al correo que indicaste.",
    success_close_btn: "Cerrar",

    // Dynamic Intent Variations

    // Executive Brief Modal
    brief_doc_print: "Imprimir / Guardar como PDF",
    eb_product: "SISTEMA ATHENE",
    eb_tag: "RESUMEN DEL PROYECTO 2026-27",
    eb_sub: "Vigilancia forestal nocturna",
    eb_h1: "Observación aérea para la vigilancia forestal nocturna",
    eb_summary: "Athene es un sistema en desarrollo experimental (TRL 3 declarado) para apoyar la vigilancia forestal nocturna con plataformas aéreas autónomas y supervisión humana. Estamos preparando la integración y las primeras pruebas.",
    eb_b1_title: "1. El desafío",
    eb_b1_p1: "La oscuridad, las quebradas y los sectores interiores del bosque dificultan la observación desde caminos.",
    eb_b1_p2: "Buscamos detectar presencia de personas e indicios de incendio para apoyar la evaluación del operador, sin identificar personas ni determinar su intención.",
    eb_b2_title: "2. El sistema",
    eb_b2_p1: "Plataforma aérea: primeras pruebas previstas sobre una aeronave comercial adaptada. Noctua es el desarrollo VTOL de ala fija previsto para la evolución del sistema.",
    eb_b2_p2: "Análisis a bordo: procesamiento térmico local, diseñado para realizar la inferencia sin conexión a internet.",
    eb_b2_p3: "Supervisión humana: el operador revisa imágenes y alertas para evaluar el contexto y orientar una respuesta.",
    eb_b3_title: "3. Impacto que buscamos validar",
    eb_b3_p1: "Evaluar si la información aérea ayuda a reducir la exposición del personal en quebradas y caminos aislados.",
    eb_b3_p2: "Evaluar la detección nocturna y la utilidad de las alertas para apoyar decisiones y una respuesta temprana en terreno.",
    eb_b4_title: "4. Desarrollo y próximas pruebas",
    eb_b4_p1: "Semilla Inicia Corfo y acompañamiento de la UdeC. Demostración técnica prevista en Gearbox para enero de 2027.",
    eb_b4_p2: "Integrar los componentes y realizar primeras pruebas para evaluar su funcionamiento conjunto, precisión y tiempos de respuesta.",
  },

  en: {
    contact_optional: "Add contact details (optional)",
    join_optional: "Add information about yourself (optional)",

    join_title: "Contribute to the development of Athene",
    join_card_desc: "We welcome students, graduates and researchers interested in contributing through extracurricular collaboration.",
    join_cta: "I'd like to contribute",
    join_intro: "Tell us what you would like to contribute or learn. We will discuss a possible collaboration with you.",
    join_future: "We hope to offer internships and thesis opportunities in the future, depending on project needs and coordination with your university.",
    join_mode: "Extracurricular collaboration",
    join_studies: "Degree programme or specialty (optional)",
    join_institution: "University or institution (optional)",
    join_availability: "How much time could you contribute? (optional)",
    join_portfolio: "Portfolio, GitHub or LinkedIn (optional)",
    join_message: "How would you like to participate? *",
    join_hint: "Tell us about your interests and what you would like to contribute or learn.",
    join_submit: "Send message",

    contact_reason_label: "Reason for contacting us",
    contact_reason_athene: "Athene · Surveillance and testing",
    contact_reason_collaboration: "Collaboration",
    contact_reason_general: "General enquiry",
    contact_hint_athene: "What do you need to monitor? Tell us about the site or your interest in future tests.",
    contact_hint_collaboration: "How would you like to collaborate with us?",
    contact_hint_general: "Briefly describe your enquiry.",
    contact_close: "Close dialog",

    // Page metadata & Header
    h_company: "Aerospace engineering and autonomous systems · Chile",
    h_page_title: "Strig Systems | Athene — Autonomous Aerial Intelligence",
    lang_code: "ES",
    h_nav_cta: "Contact",

    // Hero Section
    h_visual_tag: "CONCEPTUAL ARCHITECTURE",
    h_visual_title: "One system. Three connected functions.",
    h_visual_caption: "Conceptual illustration of observation, onboard analysis and human review. It does not represent the Noctua design or test results.",
    h_visual_delivery: "Images and alerts for the operator",
    h_flow_1: "Aerial observation",
    h_flow_2: "Onboard analysis",
    h_flow_3: "Human review",
    h_stage_label: "PROJECT STATUS",
    h_stage_now: "Today · TRL 3",
    h_stage_now_desc: "Preparing integration and initial tests.",
    h_stage_next: "Next · 2027 demonstration",
    h_stage_next_desc: "Testing the components together.",
    h_stage_future: "Evolution · Aircraft and station",
    h_stage_future_desc: "Noctua and Nest as future developments.",
    h_capabilities_label: "ARCHITECTURE UNDER DEVELOPMENT",
    h_status: "Experimental development · TRL 3",
    h_badge: "Corfo Semilla Inicia Grant • IncubaUdeC • 7th Gear Challenge Finalists - Gearbox UdeC",
    h_eyebrow_tag: "AERIAL SURVEILLANCE FOR THE NIGHTTIME GAP",
    h_title_1: "Risks move fast.",
    h_title_2: "We see them coming.",
    h_desc: "Athene is a system under development that uses autonomous aerial platforms with human supervision to support nighttime forestry surveillance. It aims to detect the presence of people and signs of fire through onboard thermal analysis and human review of alerts.",
    h_cta_pilot: "Talk with the team",
    h_cta_brief: "View project overview",

    // 3 Capability Pillars
    h_p1_tag: "AERONAUTICS",
    h_p1_title: "Experimental aerial platform",
    h_p1_desc: "Initial tests are planned on an adapted commercial aircraft. Noctua is the fixed-wing VTOL platform envisioned for the future system.",

    h_p2_tag: "ANALYSIS",
    h_p2_title: "Onboard thermal analysis",
    h_p2_desc: "Thermal image processing to detect the presence of people and signs of fire at night.",

    h_p3_tag: "SUPERVISION",
    h_p3_title: "Human review of alerts",
    h_p3_desc: "The operator reviews images and alerts to assess the context and guide an early response.",

    // Technical Specifications & Pilot Card
    h_ip_tag: "POTENTIAL FIELD TESTS",
    h_ip_title: "Explore potential tests with Athene",
    h_ip_body: "We want to understand forestry surveillance needs and talk with organisations interested in informing future system tests.",
    h_ip_footer_note: "Strig Systems Team · Concepción, Chile.",
    h_ip_btn: "Talk with the team",

    // Backing strip
    h_b1: "Team with UdeC aerospace training",
    h_b2: "Corfo · Semilla Inicia Grant Awardees",
    h_b3: "7th Gear Challenge Finalists - Gearbox UdeC",
    h_b4: "IncubaUdeC",
    team_tag: "Founding team",
    team_title: "The team behind Strig Systems",
    team_intro: "A team with a background in Aerospace Engineering at Universidad de Concepción, developing Strig Systems and Athene.",
    team_role_lead: "Co-founder · Technical lead",
    team_role_ops: "Co-founder · Operations",
    team_role_cofounder_f: "Co-founder",
    team_role_cofounder: "Co-founder",
    team_linkedin: "LinkedIn",
    team_name_tomas: "Tomás Medina",
    team_name_carlos: "Carlos Gutiérrez",
    team_name_ananda: "Ananda Glaria",
    team_name_richard: "Richard Solís",
    institutional_title: "Supported by",
    institutional_incuba: "Incubated at IncubaUdeC · Mentoring by Red de Mentores IU",
    institutional_corfo: "Funding · Corfo Semilla Inicia",


    // Footer
    f_tagline: "Chilean aerospace engineering and autonomous systems company. We develop Athene™, an aerial sentinel system for nighttime forest monitoring.",
    f_location: "Concepción, Chile",
    f_copyright: "© 2026 Strig Systems SpA. All rights reserved.",
    f_terms: "B2B Terms of Service",
    f_privacy_link: "Privacy Policy",

    // Modal tabs & headers
    modal_title: "Let's talk",
    modal_sub: "Tell us what you need or how you would like to collaborate.",

    // Form labels & placeholders
    f_name_label: "Full Name *",
    f_name_ph: "E.g.: Sarah Jenkins",
    f_email_label: "Email address *",
    f_email_ph: "name@company.com",
    f_company_label: "Company or organization (optional)",
    f_company_ph: "Your organisation’s name",
    f_phone_label: "Phone (optional)",
    f_phone_ph: "+56 9 1234 5678",
    f_message_label: "Message *",
    f_message_ph: "Write your message…",
    f_consent_label: "I agree to the use of my data to respond to this enquiry, as described in the",
    form_val_error: "Check the form details and consent to the use of your data to continue.",
    form_sending: "Sending…",
    form_error_msg: "We could not send your enquiry. You can email it to",
    f_submit_btn: "Send enquiry",
    success_title: "Your enquiry has been sent.",
    success_desc: "We will review your message and reply to the email address you provided.",
    success_close_btn: "Close",

    // Dynamic Intent Variations

    // Executive Brief Modal
    brief_doc_print: "Print / Save as PDF",
    eb_product: "ATHENE SYSTEM",
    eb_tag: "PROJECT OVERVIEW 2026-27",
    eb_sub: "Nighttime forestry surveillance",
    eb_h1: "Aerial observation for nighttime forestry surveillance",
    eb_summary: "Athene is a system under experimental development (declared TRL 3) to support nighttime forestry surveillance using autonomous aerial platforms with human supervision. We are preparing integration and initial tests.",
    eb_b1_title: "1. The challenge",
    eb_b1_p1: "Darkness, ravines and interior forest areas make observation from roads difficult.",
    eb_b1_p2: "We aim to detect the presence of people and signs of fire to support operator assessment, without identifying individuals or determining their intent.",
    eb_b2_title: "2. The system",
    eb_b2_p1: "Aerial platform: initial tests planned on an adapted commercial aircraft. Noctua is the fixed-wing VTOL development envisioned for the future system.",
    eb_b2_p2: "Onboard analysis: local thermal processing, designed to run inference without an internet connection.",
    eb_b2_p3: "Human supervision: the operator reviews images and alerts to assess the context and guide a response.",
    eb_b3_title: "3. Impact we aim to validate",
    eb_b3_p1: "Assess whether aerial information helps reduce personnel exposure in ravines and isolated roads.",
    eb_b3_p2: "Assess nighttime detection and the usefulness of alerts in supporting decisions and an early response in the field.",
    eb_b4_title: "4. Development and upcoming tests",
    eb_b4_p1: "Corfo Semilla Inicia funding and UdeC support. Technical demonstration planned at Gearbox for January 2027.",
    eb_b4_p2: "Integrate components and run initial tests to assess combined operation, accuracy and response times.",
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

  document.querySelectorAll('[data-i18n-aria]').forEach(elem => {
    const label = dict[elem.dataset.i18nAria];
    if (label) elem.setAttribute('aria-label', label);
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
 * Controller for exploratory company contact
 */
function initContactModal(prefix = 'contact') {
  const isJoin = prefix === 'join';
  const element = suffix => document.getElementById(`${prefix}-${suffix}`);
  const modal = element('modal');
  if (!modal) return;
  const form = element('form');
  const reason = element('reason');
  const message = element('message');
  const hint = element('message-hint');
  const submit = element('submit-btn');
  const buttonText = submit.querySelector('.btn-text');
  const spinner = submit.querySelector('.btn-spinner');
  const error = element('error');
  const validation = element('validation-error');
  const success = element('success');
  let lastActiveElement;
  let focusFrame;
  let sending = false;
  const dict = () => translations[document.documentElement.dataset.lang] || translations.es;
  const reasonKeys = { athene: 'contact_reason_athene', collaboration: 'contact_reason_collaboration', general: 'contact_reason_general' };

  function updateReason() {
    const key = reasonKeys[reason.value] ? reason.value : 'general';
    reason.value = key;
    hint.textContent = dict()[isJoin ? 'join_hint' : `contact_hint_${key}`];
    buttonText.textContent = dict()[sending ? 'form_sending' : (isJoin ? 'join_submit' : 'f_submit_btn')];
  }
  reason.addEventListener('change', updateReason);
  window.addEventListener('strig-lang-change', updateReason);

  function clearErrors() {
    validation.style.display = 'none';
    error.style.display = 'none';
    form.querySelectorAll('.input-invalid').forEach(el => el.classList.remove('input-invalid'));
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  }
  form.addEventListener('input', event => {
    event.target.classList.remove('input-invalid');
    event.target.removeAttribute('aria-invalid');
    if (event.target.type === 'checkbox') event.target.parentElement.classList.remove('input-invalid');
    validation.style.display = 'none';
  });

  function openModal(intent = 'general') {
    lastActiveElement = document.activeElement;
    if (!sending) {
      reason.value = reasonKeys[intent] ? intent : 'general';
      clearErrors();
      updateReason();
      form.style.display = '';
      success.style.display = 'none';
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (window.umami) window.umami.track('Open-Contact-Modal', { intent: reason.value });
    cancelAnimationFrame(focusFrame);
    let remaining = 20;
    const focusVisible = () => {
      if (!modal.classList.contains('active') || modal.contains(document.activeElement)) return;
      element('name').focus({ preventScroll: true });
      if (!modal.contains(document.activeElement) && remaining-- > 0) focusFrame = requestAnimationFrame(focusVisible);
    };
    focusFrame = requestAnimationFrame(focusVisible);
  }
  function closeModal() {
    cancelAnimationFrame(focusFrame);
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    lastActiveElement?.focus();
  }
  document.querySelectorAll(`[data-open-modal="${prefix}-modal"]`).forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      openModal(button.dataset.intent || 'general');
    });
  });
  modal.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', closeModal));
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('active')) return;
    if (event.key === 'Escape') { event.preventDefault(); closeModal(); return; }
    if (event.key !== 'Tab') return;
    const focusables = [...modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary')]
      .filter(el => el.tabIndex >= 0 && el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden');
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || form.elements._honey.value) return;
    clearErrors();
    const fields = [...form.querySelectorAll('[required]'), ...form.querySelectorAll('input[type="url"]')];
    const invalid = fields.filter(el => !el.checkValidity() || (el.required && el.type !== 'checkbox' && !el.value.trim()));
    if (invalid.length) {
      invalid.forEach(el => {
        el.classList.add('input-invalid');
        el.setAttribute('aria-invalid', 'true');
        if (el.type === 'checkbox') el.parentElement.classList.add('input-invalid');
      });
      validation.style.display = 'block';
      invalid[0].closest('details')?.setAttribute('open', '');
      invalid[0].focus();
      return;
    }
    const value = suffix => element(suffix)?.value.trim() || '';
    const intent = reason.value;
    const payload = {
      Motivo: dict()[isJoin ? 'join_mode' : reasonKeys[intent]],
      Nombre: value('name'), Email: value('email'),
      Empresa_Organizacion: value('company'), Telefono: value('phone'),
      Mensaje: message.value.trim(), _template: 'table', _captcha: 'false'
    };
    if (isJoin) {
      delete payload.Empresa_Organizacion; delete payload.Telefono;
      Object.assign(payload, {Formacion: value('studies'), Institucion: value('institution'), Disponibilidad: value('availability'), Portafolio: value('portfolio')});
    }
    payload._subject = `${payload.Motivo}: ${payload.Empresa_Organizacion || payload.Nombre} - Strig Systems`;
    sending = true;
    submit.disabled = true;
    reason.disabled = true;
    form.setAttribute('aria-busy', 'true');
    spinner.style.display = 'inline-block';
    updateReason();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://formsubmit.co/ajax/contacto@strigsystems.tech', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload), signal: controller.signal
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      if (result.success !== true && result.success !== 'true') throw new Error('Submission not accepted');
      form.style.display = 'none';
      success.style.display = 'flex';
      if (modal.classList.contains('active')) element('success-title').focus();
      if (window.umami) window.umami.track('Submit-Contact-Success', { intent });
      form.reset();
      form.querySelectorAll('details').forEach(details => { details.open = false; });
      reason.value = intent;
    } catch (err) {
      const body = Object.entries(payload).filter(([key]) => !key.startsWith('_')).map(([key, val]) => `${key}: ${val}`).join('\n');
      error.querySelector('.alert-link').href = `mailto:contacto@strigsystems.tech?cc=tmedina@strigsystems.tech&subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`;
      error.style.display = 'block';
    } finally {
      clearTimeout(timeout);
      sending = false;
      submit.disabled = false;
      reason.disabled = false;
      form.removeAttribute('aria-busy');
      spinner.style.display = 'none';
      updateReason();
    }
  });
  updateReason();
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
  initContactModal('join');
  initExecutiveBriefModal();
});
