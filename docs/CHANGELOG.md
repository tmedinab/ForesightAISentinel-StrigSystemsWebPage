# Registro de Cambios (Changelog) — Strig Systems & Athene™

Todas las modificaciones notables realizadas en la plataforma web de **Strig Systems** se documentan en este archivo de manera cronológica y categorizada.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y respeta las decisiones de arquitectura registradas en `docs/adr/`.

---

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
