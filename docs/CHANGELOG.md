# Registro de Cambios (Changelog) — Strig Systems & Athene™

Todas las modificaciones notables realizadas en la plataforma web de **Strig Systems** se documentan en este archivo de manera cronológica y categorizada.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y respeta las decisiones de arquitectura registradas en `docs/adr/`.

## [1.3.3] — 2026-09-29
### Añadido
* **Telemetría Web & Analítica Privacy-First (Umami Cloud):** Integración de baliza analítica sin cookies ni banners invasivos en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html), [`privacy.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/privacy.html) y [`terms.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/terms.html) (`data-website-id="aa979513-3790-4797-99e5-03d4a57d74ee"`).
* **Instrumentación de Eventos Tácticos Clave ([`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js)):** Despacho programático y reactivo de eventos hacia Umami:
  * `Switch-Language`: Registro de conmutación a inglés o español con propiedad de idioma.
  * `Open-Contact-Modal`: Apertura del modal con registro de intención (`pilot`, `briefing`, `alliances`).
  * `Submit-Contact-Success`: Envío exitoso de formulario de contacto/pilotaje.
  * `Open-Executive-Brief`: Apertura del dossier ejecutivo en modal.
  * `Print-Executive-Brief-PDF`: Clic en descarga/impresión del One-Pager en PDF.
  * `Tech-Drawer-Open`: Apertura interactiva de drawers de especificaciones técnicas (sensores, enlace, Edge AI).
  * `Matrix-View-Detailed` / `Matrix-View-Compact`: Conmutación de la matriz comparativa de benchmark.
* **Páginas Virtuales y Telemetría de Retención por Sección:** Inyección dinámica de visitas virtuales hacia la pestaña *Pages* de Umami (`/#problema`, `/#comparativa`, `/#tecnologia`, `/#roadmap`, `/#piloto`, `/#equipo`, etc.) condicionadas a lectura efectiva ($\ge 3$ segundos en viewport vía `IntersectionObserver`) o navegación directa por ancla.
* **Hitos de Profundidad de Desplazamiento (`Scroll-Depth`):** Registro de hitos al 25%, 50%, 75% y 100% de la página, con desvinculación automática del oyente de eventos al alcanzar el 100% para preservar batería y CPU.
* **Cumplimiento de Privacidad y Rendimiento:** Cero almacenamiento de cookies en el navegador, cumplimiento normativo estricto (GDPR/CCPA/Ley N° 19.628) sin requerir banners de consentimiento, y carga asíncrona sin impacto en el rendimiento (<2 KB).

## [1.3.2] — 2026-09-29
### Añadido
* **Encabezados Tácticos en Bloque IaaS (`.iaas-pillar-card`):** Incorporación de tags tácticos mono (`IAAS // 01`, `IAAS // 02`, `IAAS // 03`) con micro-led cian (`.iaas-card-dot`), borde superior acentuado (`border-top: 2px solid rgba(0, 229, 255, 0.45)`) y efecto hover lift para diferenciación visual nítida frente a tarjetas de impacto operativo.
* **Micro-transición Cinemática en Modal (`#contact-modal`):** Animación suave `@keyframes intentFieldFadeIn` (0.28s cubic-bezier) para los campos dinámicos condicionales al alternar el selector de intención.
* **Titularidad de Propiedad Intelectual (`p4_s5_lbl`, `p4_s5_val`, `eb_b4_p3`):** Declaración formal de gobernanza y titularidad exclusiva de Strig Systems SpA sobre arquitectura, software de misión y modelos de inferencia entrenados.

### Modificado
* **Doctrina Operacional Dual HITL (`p4_s1_lbl`, `p4_s1_val`):** Especificación nítida en el Pilar 4 de la Consola Táctica entre *Modo Centinela Silencioso* (vigilancia térmica pasiva sin emisiones acústicas/lumínicas para acopio de evidencia forense) y *Modo Disuasión Activa* (foco estroboscópico y sirena acústica disuasiva para disuadir ignición intencional), ambos bajo doctrina estricta Human-in-the-Loop.
* **Privacidad y Cumplimiento Legal (`p4_s3_lbl`, `p4_s3_val`):** Refuerzo del protocolo de anonimización y difuminado local en el borde (Edge AI Zero-Cloud) para rostros y patentes vehiculares previo a la entrega de fichas periciales, conforme a la Ley N° 19.628 y Ley N° 21.719.
* **Taxonomía Hardware Athene™ vs Noctua™ (Blindaje Canónico):** Homogeneización definitiva de nomenclatura en `AGENTS.md` (Sección 2.1), métricas (`m2_sub`), roadmap (`rm5_title`, `rm5_desc`) y Executive Brief (`eb_summary`, `eb_b2_p1`), definiendo a **Athene™** como el sistema centinela aéreo autónomo integral (C2 y Edge AI) y a **Noctua™** como la aeronave UAV VTOL de largo alcance desarrollada por Strig Systems.
* **Contraste Accesible (WCAG AA):** Elevación de micro-textos en `.media-frame-meta` y `.pillar-desc` desde opacidad atenuada a `#cbd5e1` (ratio >11:1 sobre fondo `#07090e`), garantizando legibilidad en displays industriales y tabletas en terreno.

## [1.3.1] — 2026-09-28
### Modificado
* **Envolvente de Vuelo (Criterio de Diseño TRL 3-4):** Reformulación transparente de la tolerancia al viento en la ficha técnica de Athene y en el FAQ (`p1_s3_lbl`, `p1_s3_val`, `faq_q2`, `faq_a2`) como *criterio u objetivo de diseño aerodinámico* para régimen de viento Puelche (10–12 m/s / ~36–43 km/h), erradicando claims prematuros de catálogo o certificación comercial.
* **Interoperabilidad de Centrales de Despacho (C2 / GIS):** Definición de la salida de datos abierta (GeoJSON / KML / API REST) como *objetivo de arquitectura proyectada* (`flow_s3_f1_lbl`, `flow_s3_f1_val`, `faq_q7`, `faq_a7`) para vinculación futura con centrales forestales (CONAF, Arauco, CMPC).
* **Foso Tecnológico (Moat vs Drones Comerciales):** Refuerzo en el benchmark táctico (`th_drone`, `r5_drone`) e incorporación de pregunta técnica en el FAQ (`faq_q8`, `faq_a8`) detallando la ventaja operativa de la autonomía VTOL de 25+ km con inferencia Edge AI a bordo (Zero-Cloud) frente a quadcopters manuales que atan a operadores a pantallas nocturnas.
* **Política de Honestidad en `AGENTS.md` (Sección 1.3):** Incorporación de directrices explícitas que norman la presentación de envolventes de vuelo e interoperabilidad C2 durante la etapa TRL 3.

## [1.3.0] — 2026-09-28
### Añadido
* **Pipeline de Verificación Unificado (`scratch/preflight_check.js`):** Script integral que automatiza la triple auditoría de preflight: política de 0 emojis en todo el repositorio, paridad bilingüe estricta entre `translations.es` y `translations.en`, y cobertura del 100% de atributos `data-i18n` presentes en el DOM HTML.
* **Acceso Táctico a One-Pager Ejecutivo en Hero (`.btn-hero-brief`):** Incorporación del botón de acceso directo `Executive Brief (PDF)` junto a las acciones principales del hero, permitiendo a gerencias técnicas e inversionistas abrir e imprimir de inmediato el resumen de misión.
* **Telemetría Dinámica de Aviónica HUD (`initLiveHudTelemetry`):** Motor de micro-fluctuación realista en tiempo real para lecturas de altitud AGL, velocidad respecto al suelo y rumbo magnético en el showcase técnico. Diseñado bajo disciplina estricta de eficiencia energética con `IntersectionObserver` (0% de CPU/batería fuera de pantalla) y compatibilidad con `prefers-reduced-motion`.
* **Glosario Operacional Mandatorio en `AGENTS.md` (Sección 2.4):** Tabla canónica de términos técnicos obligatorios (conatos incipientes, sensor LWIR radiométrico, enlace FHSS 900 MHz, centinela aéreo UAV VTOL, doctrina HITL) y prohibición de jerga publicitaria no verificable ("marketing fluff").
* **Blindaje del Sistema de Diseño en `AGENTS.md` (Sección 3.4):** Prohibición explícita de estéticas genéricas de IA (paletas púrpuras/violetas SaaS, hiper-redondeos orgánicos) y salvaguarda de retículas militares angulares.
* **Disciplina de Recursos y Resiliencia en `AGENTS.md` (Secciones 4.6 y 4.7):** Protocolos para gestión de batería y ciclo de vida de animaciones (`visibilitychange`), además del contrato de fallback `mailto:` para resiliencia en adquisición B2B.

### Modificado
* **Iconografía en Micro-Fichas de Métricas:** Reemplazo del glifo informativo por micro-icono SVG vectorial en línea accesible, manteniendo cero símbolos de consumo en el marcado.

## [1.2.0] — 2026-09-28
### Añadido
* **Sistema Oficial de ADRs:** Creación del directorio `docs/adr/` con protocolo formal y registros fundacionales:
  * `ADR-0000`: Protocolo de Decisiones de Arquitectura y Plantilla Oficial.
  * `ADR-0001`: Arquitectura Web Pura Vanilla (Zero Runtime Dependencies).
  * `ADR-0002`: Sistema de Paridad Bilingüe Estricta (Strict i18n Parity).
  * `ADR-0003`: Lenguaje Visual DeepTech y Política Estricta de Cero Emojis.
  * `ADR-0004`: Geometría de Navegación, Posicionamiento de Menús Desplegables y Puente de Hover.
* **Documento Rector del Repositorio:** Creación y expansión progresiva de `AGENTS.md` como constitución técnica y estética para desarrolladores y agentes de IA. Incluye la Sección 2.3 de Invariantes Corporativos y Canales Oficiales.
* **Barra de Credenciales Hero Unificada (`.hero-credential-bar`):** Fusión de insignias institucionales (`• TRL 3 · Prototipo en desarrollo · Demo Gearbox ene 2027 │ ◈ Semilla Inicia CORFO • Lab Aeroespacial UdeC`) en una cápsula HUD horizontal de cristal de alta precisión.
* **Kicker de Producto Hero (`.hero-product-eyebrow`):** Ubicación jerárquica de `◈ ATHENE™ // SISTEMA CENTINELA AÉREO AUTÓNOMO` directamente sobre el H1.
* **Canal Institucional en Menú (`#contacto`):** Incorporación del 3er enlace en el dropdown "Compañía" (*Mesa Técnica & Contacto Directo*) con soporte bilingüe completo (`nav_contact`, `nav_contact_desc`).

### Modificado
* **Insignias de Contacto y Footer (`.contact-footer-pills`):** Reemplazo de tags de texto crudos (`[LOC]`, `[GEO]`, etc.) por micro-iconos SVG en línea. Eliminación de coordenadas geográficas numéricas crudas en favor de la denominación formal `Concepción, Chile · Universidad de Concepción (Lab Aeroespacial)`.
* **Enrutamiento Oficial de Correos:** Formalización de `tmedina@strigsystems.tech` para contacto directo con el Lead & Fundador (Tomás Medina) y `contacto@strigsystems.tech` para mesa técnica y operaciones (Carlos Gutiérrez).
* **Gradiente de Marca Athene:** Extensión del gradiente metálico blanco-a-cian (`.hl-product`) a la mención de Athene en el bloque de citas y subtítulos destacados, eliminando el celeste plano monótono.

### Corregido
* **Espaciado y Geometría de la Barra de Navegación (`.nav-links`):**
  * Solución a la sobredimensión de los envoltorios `.nav-dropdown-wrap`: la regla global `.glass-panel { position: relative; }` al pie de la hoja de estilos sobrescribía `position: absolute` del menú desplegable por cascada (ambos con especificidad `(0, 1, 0)`), expandiendo cada contenedor a 413px y separando los botones por más de 400px.
  * Se asignó `.nav-dropdown-wrap { width: auto !important; flex-shrink: 0 !important; }`, `.nav-dropdown-wrap .nav-dropdown-menu { position: absolute !important; }` y se acotó la regla a `.glass-panel:not(.nav-dropdown-menu)`. El ancho de los botones colapsó inmediatamente a sus 92px naturales con espaciado limpio de 1.75rem.
* **Armonización de Altura de Tarjetas Desplegables:**
  * Eliminación de la asimetría visual (Validación a 269px vs Compañía a 169px). Al integrar 3 elementos en cada menú y balancear los textos descriptivos a 1 línea regular, todas las tarjetas desplegables renderizan a una altura homogénea (~203–219px).
* **Posicionamiento de Menús Desplegables (`.nav-dropdown-menu`):**
  * Asignación de `height: 100%` a `.header-inner`, `.nav-links` y `.nav-dropdown-wrap`.
  * Reposicionamiento del menú a `top: calc(100% + 8px)`, eliminando el solapamiento de 12.8px sobre la barra de navegación.
  * Refuerzo del puente hover con especificidad prioritaria (`.nav-dropdown-wrap .nav-dropdown-menu::before`, `top: -14px; height: 14px; width: 100%; pointer-events: auto; !important`), resolviendo interferencias con retículas de esquinas.
  * Reemplazo de la animación ascendente por un micro-asentamiento descendente (`translateY(-6px)` a `translateY(0)`).
* **Eliminación de Barras de Desplazamiento Fantasma en Tabla Comparativa (`.matrix-table-wrapper`):**
  * Corrección del padding lateral fraccional (`1.8rem` = 28.8px a `1.5rem` = 24px) que causaba un desbordamiento de 1 solo subpíxel e inducía a Windows a mostrar barras de desplazamiento horizontales y verticales.
  * Incorporación de `overflow-y: hidden` para impedir scrollbars verticales internos en la tarjeta.
  * Estilización de barra de desplazamiento táctica aeroespacial de 6px en cian HUD para pantallas móviles y tablets.
* **Nivelación de Tarjetas de Flujo C2 (`.flow-step-card`):** Adición de `align-items: stretch` en `.flow-grid` para garantizar alturas idénticas en todas las tarjetas de arquitectura de misión.

### Seguridad y Consistencia
* **Purga Absoluta de Emojis:** Erradicación total de emojis de consumo en todos los archivos (`index.html`, `styles.css`, `script.js`, `terms.html`, `privacy.html`), reemplazados por micro-iconos SVG y glifos aeroespaciales (`◈`, `•`, `│`).
* **Auditoría de Paridad Bilingüe:** Verificación exitosa de 418 claves en español y 418 claves en inglés con 0 discrepancias (`scratch/verify_i18n.js`).

---

## [1.1.0] — 2026-09-24
### Añadido
* **Calculadora Táctica de ROI (`#calculadora-roi`):** Módulo interactivo con cálculo dinámico en tiempo real de hectáreas protegidas, costo de brigadas terrestres y mitigación de pérdidas económicas.
* **Simulador de Misión / Radar HUD (`#simulador`):** Alternancia interactiva entre vista térmica FLIR y óptica EO con retícula táctica y detección de objetivos (fuegos tempranos, intrusos vehiculares).
* **Modal de Validación y Contacto (`#contact-modal`):** Formulario multicriterio accesible para postulación al programa piloto forestal e industrial.
* **Páginas Legales Institucionales:** Adición de `terms.html` y `privacy.html` con soporte de impresión y paridad bilingüe.

---

## [1.0.0] — 2026-09-23
### Añadido
* **Lanzamiento Inicial de Plataforma:** Plataforma web institucional deeptech de Strig Systems y sistema Athene™.
* **Motor i18n Vanilla:** Soporte bilingüe ES / EN sin recarga de página.
* **Diseño Glassmorphism Táctico:** Sistema de tokens de diseño en modo oscuro con acentos cian, ámbar y azul espacial.
