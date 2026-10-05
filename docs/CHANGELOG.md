# Registro de Cambios (Changelog) — Strig Systems & Athene™

Todas las modificaciones notables realizadas en la plataforma web de **Strig Systems** se documentan en este archivo de manera cronológica y categorizada.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y respeta las decisiones de arquitectura registradas en `docs/adr/`.
## [1.4.4] — 2026-10-01
### Corregido
* **Restauración de Biografías Auténticas y Eliminación de Roles No Autorizados:**
  * Eliminación de especializaciones de subsistemas inventadas o no autorizadas en fundadores (como asignaciones no oficiales de propulsión o viento puelche).
  * Restauración de las credenciales y biografías históricas oficiales del commit `de95002` en `nosotros.html`, `venture.html` y `script.js` (español e inglés):
    * Tomás Medina: Ingeniero Civil Aeroespacial • Visión Computacional, Machine Learning, CAD/CAM e Ingeniería de Sistemas.
    * Carlos Gutiérrez: Bombero Operativo • Ingeniero Civil Aeroespacial. Análisis CFD, logística operacional y arquitectura de interfaz táctica.
    * Ananda Glaria: Ingeniera Civil Aeroespacial • Integración y ensayos de vuelo RPAS, CAD, análisis estructural (FEA) y CFD.
    * Richard Solís: Ingeniero Civil Aeroespacial • Ingeniería de sistemas, aseguramiento normativo, control de calidad y certificación aeronáutica.
    * Pablo Alarcón: Ingeniero Civil Aeroespacial • Arquitectura de sistemas, lógica e integración de flujo de datos, validación y verificación.
    * Dr. Alejandro López: PhD Space Systems Engineering and Management • Asesor en arquitectura de misión y desarrollo de tecnología aeroespacial.
  * Estandarización de badges y roles de fundadores en `CO-FOUNDER` / `Co-founder` para Carlos, Ananda, Richard y Pablo, y `FUNDADOR & LEAD TÉCNICO` / `FOUNDER & TECHNICAL LEAD` para Tomás.
* **Corrección de Formato, Fondo y Animaciones en Página Nosotros/Historia (`nosotros.html`):**
  * Inclusión de los elementos de fondo ambiental `.background-grid` y orbes de resplandor radial `.glow-orb` (`glow-top-left`, `glow-center-right`) corrigiendo el fondo negro plano vacío.
  * Estandarización del encabezado a `<header class="site-header">` con logotipo corporativo y badge de producto Athene.
  * Corrección estructural de la línea de tiempo de tracción en `#camino`: encapsulación de cada hito dentro de tarjetas `.traction-content.glass-panel` con nodos animados `@keyframes pulseNodeCyan` y `@keyframes pulseNodeAmber` para hitos futuros (`.node-future`).
  * Actualización de tarjeta del asesor académico senior Dr. Alejandro López de `.advisor-box` a `.advisor-card.glass-panel` con avatar y micro-retículas tácticas conformes a `styles.css`.
  * Integración del banner final de contacto estratégico `.contact-card.glass-panel` (`#contacto`) en `nosotros.html`, replicando con exactitud la calidad estética de la página principal: título H2 con tipografía Space Grotesk, descripción de alto contraste, 3 botones de acción (sumarse a validación, ver dossier ejecutivo PDF, consultar alianzas) y las 5 píldoras tácticas con micro-iconos SVG en línea.
  * Estandarización del logotipo de marca en el footer de `nosotros.html`, `venture.html` y `programa.html` (`.brand` con `.brand-shield` y `.accent-text`), eliminando el estilo violeta por defecto de hipervínculos no estilizados.
  * Corrección de cruces de idioma en el footer de `nosotros.html` (reemplazo de claves `v_nav_market` y `p_nav_cta` por `fn1_title` y `fn2_title`).

### Añadido
* **Banderas de Advertencia para Datos de Mercado en Validación (`venture.html`):**
  * Inclusión de banner informativo `.market-pending-banner` sobre la cuadrícula de mercado `#mercado` indicando `[ESTIMACIÓN PRELIMINAR // PENDIENTE DE VALIDACIÓN CON EQUIPO FUNDADOR]`.
  * Marcaje de tarjetas TAM, SAM, SOM y Costo de Inacción con badge táctico `[ESTIMACIÓN PRELIMINAR]` en español e inglés (`v_mkt_preliminary_badge`).

### Seguridad / Consistencia
* **Verificación de Cero Emojis (v1.4.4):** 0 emojis en todos los archivos del repositorio (`verify_emojis.js` = 0).
* **Paridad i18n Confirmada (v1.4.4):** 825 claves ES / 825 claves EN en estricta sincronía — `Missing in EN: []`, `Missing in ES: []`, `HTML keys missing in translations: []`.
* **Cache-Busting Actualizado a `?v=1.4.4`:** Sincronizado en `index.html`, `nosotros.html`, `venture.html`, `programa.html`, `terms.html` y `privacy.html`.

## [1.4.3] — 2026-10-01
### Corregido
* **Restauración de Rutas de Imágenes y Miniaturas Rotos:**
  * En `venture.html`: Corrección de 4 rutas de imágenes erróneas del equipo (`_portrait.jpg` a `.png`/archivos existentes: `ananda_glaria.png`, `richard_solis.jpg`, `pablo_alarcon.jpg`, `alejandro_lopez.png`).
  * En `nosotros.html`: Restauración de las fotos de perfil de los 5 fundadores y del asesor senior Dr. Alejandro López dentro de `.founder-avatar-circle`, eliminando los reemplazos de iniciales textuales (`TM`, `CG`, etc.), e inclusión de los logos oficiales de respaldo institucional (CORFO Semilla Inicia, Laboratorio Aeroespacial UdeC y Aceleradora Gearbox UdeC).
  * En `programa.html`: Restauración de las miniaturas visuales en las 3 tarjetas de diagnóstico del problema territorial en `#diagnostico` (`monitoring_center.png`, `forest_landowners.png`, `firefighters_danger.png`).
  * En `index.html`: Eliminación de query strings estáticas (`?v=2`) en rutas relativas de imágenes que producían errores `ERR_FILE_NOT_FOUND` bajo el protocolo local `file:///` en entornos Windows Chromium.
* **Eliminación de Filtraciones de Idioma (Language Leakage) y Discrepancias i18n:**
  * En `venture.html`: Adición de atributos `data-i18n` a todos los cargos de fundadores (`v_role_tomas`, `v_role_carlos`, etc.) que estaban hardcodeados en inglés, provocando que se mostraran en inglés con el sitio en español.
  * En `script.js`: Corrección de `v_m1_meta` en inglés que contenía el término en español `"DOCTRINA"` (`"AUTONOMY & DOCTRINA"` → `"AUTONOMY & DOCTRINE"`) y de `founder_lead` en español que figuraba en inglés como `"FOUNDER & LEAD"` (`"FUNDADOR & LEAD TÉCNICO"`).
  * En todas las subpáginas: Etiquetado de 34 tags tácticos de metadata (`[IAAS // 01]`, `[01 // VISIÓN TÉRMICA]`, `[FINANCIAMIENTO PÚBLICO]`, `[DIAG // 01]`, etc.) con atributos `data-i18n` y registro espejo en `translations.es` y `translations.en`.

### Añadido
* **Estilos CSS para Logos de Respaldo Institucional (`styles.css`):**
  * `.support-partner-logo-wrap` y `.support-partner-logo` con contenedor de altura fija (38px), `object-fit: contain` y micro-transición lumínica `brightness` en estado hover.
* **Paridad Bilingüe Expandida (823 Claves):**
  * Incorporación de 34 nuevas claves a `script.js` alcanzando 823 claves en estricta sincronía entre `translations.es` y `translations.en`, con 0 claves faltantes en el HTML (`verify_i18n.js`).

### Seguridad / Consistencia
* **Verificación de Cero Emojis (v1.4.3):** 0 emojis en todos los archivos del repositorio (`verify_emojis.js` = 0).
* **Paridad i18n Confirmada (v1.4.3):** 823 claves ES / 823 claves EN — `Missing in EN: []`, `Missing in ES: []`, `HTML keys missing in translations: []`.
* **Auditoría de Enlaces e Imágenes en Disco (`deep_audit.js`):** 0 imágenes rotas en el proyecto.
* **Cache-Busting Actualizado a `?v=1.4.3`:** En `index.html`, `venture.html`, `programa.html` y `nosotros.html`.

## [1.4.2] — 2026-10-01
### Añadido
* **Diagrama de Enlace Táctico Off-Grid (`tactical-flow-box`) en `programa.html`:** Migración completa del diagrama interactivo trilateral de arquitectura de enlace (Estación de Operador ⇄ Aeronave VTOL ⇄ Central de Despacho) en la sección `#protocolo` de [`programa.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/programa.html), integrando micro-cajones de especificaciones técnicas (`.flow-spec-drawer`) y soporte de accesibilidad táctil y por teclado.
* **Nota Regulatoria de Espectro y Vuelo (Banda 915 MHz & DGAC DAN 313):** Adición en [`programa.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/programa.html) de aviso táctico (`.flow-regulation-notice`) que detalla la operación en banda ISM 915 MHz bajo resolución técnica de potencias de SUBTEL (Chile) mediante espectro ensanchado por salto de frecuencia (FHSS), y la conducción de misiones conforme a la normativa DGAC DAN 313 en régimen VLOS acotado con piloto certificado en terreno.
* **Unidades Aeronáuticas (Nudos / kt) en Envolvente de Viento:** Incorporación de la conversión en nudos (`~19–23 kt`) junto a las unidades de velocidad de viento (`10–12 m/s / ~36–43 km/h / ~19–23 kt`) en la matriz de benchmark, especificaciones técnicas y preguntas frecuentes (FAQ) en español e inglés dentro de [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js) y [`programa.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/programa.html), respondiendo a los estándares de rigor técnico de pares de ingeniería aeroespacial.
* **Sitemap XML Actualizado (`sitemap.xml`):** Registro de todas las rutas canónicas del ecosistema (`/`, `/programa.html`, `/venture.html`, `/nosotros.html`, `/terms.html`, `/privacy.html`) con fecha de actualización `2026-10-01` y jerarquías de prioridad SEO.

### Modificado
* **Optimización Mobile de Diagrama Táctico y Cadena de Misión:**
  * En `.flow-grid-bilateral` para pantallas móviles (< 860px y < 520px): ordenamiento visual secuencial en columna (Aeronave → Conector → Operador → Conector → Central) con etiquetas multilínea que previenen desbordes en monitores estrechos.
  * En `.protocol-chain` para dispositivos móviles (< 600px): implementación de una línea de tiempo táctica vertical con espina cian continua y marcadores visuales de paso horario.
* **Estandarización Universal de Cache-Busting (`?v=1.4.2`):** Sincronización uniforme de los parámetros de versión de `styles.css` y `script.js` en todos los archivos HTML (`index.html`, `venture.html`, `programa.html`, `nosotros.html`, `terms.html`, `privacy.html`, `404.html`).

### Seguridad / Consistencia
* **Verificación de Cero Emojis (v1.4.2):** 0 emojis en todos los archivos del repositorio (`index.html`, `styles.css`, `script.js`, `venture.html`, `programa.html`, `nosotros.html`, `terms.html`, `privacy.html`, `404.html`).
* **Paridad Bilingüe Estricta (789 Claves):** 789 claves idénticas en `translations.es` y `translations.en` en `script.js` — `Missing in EN: []`, `Missing in ES: []`, `HTML keys missing in translations: []` verificadas por `verify_i18n.js`.

## [1.4.1] — 2026-09-30
### Corregido
* **Selectores CSS Faltantes para Componentes de Subpáginas:** Diagnóstico y adición de 10 selectores CSS faltantes en [`styles.css`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/styles.css) que causaban que componentes de las subpáginas no recibieran estilos, apareciendo como texto crudo o bloques sin formato:
  * `.founders-grid` — Grid de 5 columnas para la tarjeta de fundadores en `venture.html`.
  * `.founder-card`, `.founder-avatar-circle`, `.founder-name`, `.founder-role`, `.founder-bio`, `.founder-social-links`, `.founder-social-placeholder` — Estilado completo de tarjetas de fundadores.
  * `.iaas-card-tactical-header` — Encabezado táctico de las tarjetas IaaS en `venture.html` y `programa.html`.
  * `.iaas-head` — Tipografía de título para subsecciones IaaS.
  * `.iaas-p` — Párrafo de descripción de pilares IaaS.
  * `.moat-card-title`, `.moat-card-body`, `.moat-comparison` — Sub-selectores de tarjetas de foso defensivo en `venture.html`.
  * `.benchmark-table-wrapper` — Contenedor con scroll horizontal para la tabla de benchmark en `programa.html`.
  * `.venture-posture-box`, `.tax-badge-goal` — Postura de inversión y badge de objetivo en `venture.html`.
  * `.advisor-box` — Contenedor de asesor en `nosotros.html`.
  * Responsive media queries para `.founders-grid`, `.market-grid` (4→2→1 col) y `.moat-grid` (2→1 col).
* **Migración del Sistema de Footer de `venture.html` y `programa.html`:** Ambas páginas usaban la estructura de footer del sistema anterior (`<footer class="footer">`, `.footer-content`, `.footer-links-grid`, `.footer-col-title`, `.footer-bottom`) para el cual no existían reglas CSS activas. Se migró al sistema de footer nuevo (`<footer class="site-footer">`, `.footer-layout`, `.footer-brand-side`, `.footer-links-side`) ya definido en `styles.css` y utilizado por `nosotros.html`, garantizando consistencia de estilos entre las 3 subpáginas.
* **Migración del Back-to-Top en `venture.html` y `programa.html`:** El botón flotante usaba la clase legacy `.back-to-top` con `.back-to-top-text`, incompatibles con el CSS activo que define `.back-to-top-btn` con `.back-to-top-hud`. Migrado al sistema nuevo para consistencia total con `nosotros.html` y el código de `initBackToTop()` en `script.js`.
* **Cache-Busting:** Actualización de strings de versión a `?v=1.4.1` recomendada para el próximo despliegue.

### Seguridad / Consistencia
* **Verificación de Cero Emojis (v1.4.1):** 0 emojis en todos los archivos auditados (`index.html`, `styles.css`, `script.js`, `terms.html`, `privacy.html`, `venture.html`, `programa.html`, `nosotros.html`).
* **Paridad i18n Confirmada (v1.4.1):** 760 claves ES / 760 claves EN — `Missing in EN: []`, `Missing in ES: []`, `HTML keys missing: []`.

## [1.4.0] — 2026-09-30
### Añadido
* **Arquitectura de Embudo Multicanal y Reducción Quirúrgica de Landing (`index.html`):** Transformación de la página principal de 14 secciones densas a 7 secciones estratégicas de alto impacto (~64 segundos de lectura) orientadas a segmentar a los visitantes hacia subpáginas de profundidad:
  1. *Hero unificado:* Barra de credenciales TRL 3 / CORFO / UdeC, frase llana en subtítulo y 2 llamadas a la acción claras.
  2. *Dashboard de estado:* 4 fichas métricas estandarizadas con taxonomía visible (`[BRECHA OPERACIONAL]`, `[OBJETIVO DE PRODUCTO]`, `[DIFERENCIADOR CLAVE]`).
  3. *El problema:* Diagnóstico territorial del costo de la brecha nocturna 21:00–08:00 hrs.
  4. *La solución en 30 segundos:* Showcase multimedia optrónico con telemetría HUD en tiempo real simulada y 3 diferenciadores clave (Centinela VTOL & Data Moat, Inferencia Edge AI Zero-Cloud a bordo y Doctrina Human-in-the-Loop).
  5. *Validación industrial & equipo fundador:* Respaldo de CORFO, UdeC, Arauco (discovery) y OroraTech/Everseek, acompañado por el bloque compacto de los 5 fundadores ingenieros aeroespaciales UdeC.
  6. *3 Caminos (Rutas de acceso):* Tarjetas glass-panel de enrutamiento hacia `/venture.html`, `/programa.html` y `/nosotros.html`.
  7. *Contacto estratégico compacto:* Píldoras con micro-iconos SVG y disparadores modales de validación y briefing.
* **Subpágina `/venture.html` (Inversionistas, Fondos y Aceleradoras):** Portal para Venture Capital, ángeles estratégicos y jurados internacionales (Chris Klaus / Fusen World, Demo Day Gearbox enero 2027), detallando tesis de inversión DeepTech, tamaño de mercado TAM/SAM/SOM, 4 vectores de foso defensivo (*Data Moat* de firmas térmicas chilenas), modelo de negocio IaaS e hitos de tracción hacia la ronda Semilla 2027.
* **Subpágina `/programa.html` (Empresas Forestales e Industriales):** Portal técnico para gerencias de protección patrimonial y operaciones forestales (Arauco, CMPC, CONAF), conteniendo el protocolo de despacho 02:00 AM en 5 pasos, benchmark táctico completo de 8 dimensiones con advertencias ámbar TRL 3, metodología de validación en 4 fases, criterios de predio piloto y modelo IaaS por negociar.
* **Subpágina `/nosotros.html` (Comunidad, Estudiantes y Prensa):** Portal institucional y humano que narra el origen y propósito de los 5 fundadores aeroespaciales de la Universidad de Concepción, traduce la tecnología a lenguaje accesible sin tecnicismos, explica la metrología TRL 3 con total honestidad, ofrece un glosario táctico de 8 términos y expone 3 canales de vinculación para tesistas UdeC, prensa y comunidades locales.
* **Navegación Táctica Global Actualizada:** Barra de navegación unificada en `index.html` con menús desplegables protegidos por el puente de hover indestructible de 8px (*Tecnología* y *Programa*) y enlace directo a *Nosotros*.
* **Paridad Bilingüe Estricta (760 Claves):** Incorporación de 40 nuevas claves en `translations.es` y `translations.en` en [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js), alcanzando 760 claves en espejo exacto y 0 discrepancias (`verify_i18n.js`).

### Modificado
* **Estandarización de Caché (Cache-Busting):** Actualización masiva de versiones a `?v=1.4.0` en todos los archivos HTML (`index.html`, `venture.html`, `programa.html`, `nosotros.html`, `terms.html`, `privacy.html`, `404.html`).
* **Política de Enlaces de Fundadores Preservada:** Enlaces de LinkedIn del equipo fundador en la sección compacta y subpáginas mantenidos en modo táctico inactivo (`pointer-events: none; opacity: 0.65; title="LinkedIn · Próximamente disponible"`) a la espera de autorización y suministro explícito de perfiles por parte de Tomás.

### Seguridad / Consistencia
* **Verificación de Cero Emojis:** 100% de cumplimiento en todos los archivos del repositorio (`verify_emojis.js` = 0 emojis).
* **Validación Sintáctica de HTML:** Comprobación estricta de apertura y cierre de etiquetas sin discrepancias en `index.html`, `venture.html`, `programa.html` y `nosotros.html`.

## [1.3.6] — 2026-09-30
### Añadido
* **Badges Ámbar Honestos en Benchmark Táctico (`.badge-warning`):** Incorporación de la clase `.badge-warning` (`color: var(--accent-amber); font-weight: 700;`) y dos nuevas dimensiones operativas en la matriz comparativa:
  * *Dimensión 7 (Cobertura meteorológica adversa):* Declaración transparente de estado TRL 3 en Athene con objetivo de diseño aerodinámico 10–12 m/s (~36–43 km/h para viento Puelche), reconociendo honestamente la alta resistencia física de las torres fijas ancladas.
  * *Dimensión 8 (Certificación y marco operacional BVLOS):* Declaración transparente de régimen actual en predio piloto privado en línea de vista (VLOS bajo DAN 151) y proceso de escalamiento a 15 km estructurado bajo la metodología SORA (DGAC/JARUS), reconociendo la ausencia de conflicto aéreo de los satélites LEO y la naturaleza de obra civil de las torres.
* **Estilos para Enlace Activo de Fundador (`.founder-social-link`):** Definición de micro-estilo interactivo en [`styles.css`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/styles.css) para perfiles públicos de LinkedIn activos con resplandor cian táctico y elevación al hover.

### Modificado
* **Hero Subtitle en Lenguaje Accesible (Tarea 1.2):** Incorporación de frase llana de comprensión instantánea al inicio del subtítulo en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html) y en `script.js` (`hero_sub` en ES y EN), permitiendo a cualquier lector (inversionistas, prensa o evaluadores) entender qué hace Strig en 3 segundos sin perder la profundidad técnica aeroespacial.
* **Badges de Taxonomía Estáticos en Tarjetas de Métricas (Tarea 1.3):** Ajuste de taxonomía visible sin necesidad de hover (`[BRECHA OPERACIONAL]`, `[OBJETIVO DE PRODUCTO]`, `[DIFERENCIADOR CLAVE]`) con tipografía mono 0.58rem y estandarización de iconos SVG vectoriales en los botones de información de las tarjetas 2, 3 y 4.
* **Reclasificación de Alianzas a Validación Industrial & Ecosistema (Tarea 1.4):** Modificación del título de la sección `#alianzas` a *"Validación industrial y ecosistema"* (`alliances_title`) y reclasificación formal de los descriptores de Arauco (`p_industry`: *"Validación de problema con gerentes de protección patrimonial"*) y OroraTech/Everseek (`p_thermal`: *"Validación con ecosistema de detección térmica satelital"*), reflejando con total veracidad el estado de entrevistas de discovery.
* **Renovación de Caché (Cache-Busting):** Actualización a `?v=1.3.6` en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html), [`privacy.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/privacy.html), [`terms.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/terms.html) y [`404.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/404.html).

## [1.3.5] — 2026-09-30
### Corregido
* **Fijación Viewport del Botón Flotante (`#back-to-top`):** Corrección de especificidad CSS en [`styles.css`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/styles.css) donde la regla `.glass-panel:not(.nav-dropdown-menu)` sobreescribía `position: fixed` con `position: relative`, haciendo que el botón quedara retenido al final del flujo del DOM en lugar de flotar en la esquina inferior del viewport. Se aplicó `position: fixed !important`, `z-index: 950`, `pointer-events: none/auto` y exclusión en el selector de panel.
* **Invocación Reactiva e Inmediata en Montaje:** En [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js), ajuste del umbral de aparición a 300px (justo tras rebasar el pliegue del hero) y llamada inmediata a `updateVisibility()` durante la inicialización para evaluar el estado si el usuario entra a través de un ancla.
* **Renovación Forzada de Caché de Navegador (Cache-Busting):** Actualización de strings de versión a `?v=1.3.5` en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html), [`privacy.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/privacy.html), [`terms.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/terms.html) y [`404.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/404.html) para forzar a navegadores con copia local en caché a descargar los nuevos estilos y scripts sin requerir vaciado manual de historial.

## [1.3.4] — 2026-09-30
### Añadido
* **Botón Flotante Táctico "Back to Top" (`#back-to-top`):** Control flotante estilizado con micro-icono SVG táctico, tipografía mono HUD (`TOP`), animación suave de retorno al origen (`window.scrollTo({ top: 0, behavior: 'smooth' })`), visibilidad reactiva (>450px de scroll) y throttling vía `requestAnimationFrame` para máximo rendimiento.
* **Página de Error Personalizada 404 (`404.html`):** Interfaz para GitHub Pages con estética Aerospace HUD (`ERR // 404 - SECTOR NO ENCONTRADO`), enlaces de retorno al centro de comando (`/`), motor i18n reactivo y baliza de telemetría Umami.
* **Metadatos Semánticos Schema.org JSON-LD & `theme-color`:** Inyección de marcado estructurado `Organization` deeptech aeroespacial en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html) y meta tag de color para navegadores móviles (`#07090e`).
* **Optimización de Exportación/Impresión PDF para Executive Brief:** Reglas CSS `@page { size: A4 portrait; margin: 0.6cm 0.8cm; }` y `break-inside: avoid;` en `.brief-box`, garantizando que el One-Pager ejecutivo se imprima o exporte en exactamente una sola página A4 sin saltos indeseados.
* **Backlog de Mejoras First-Reader:** Registro de mejoras operativas y narrativas (FR-01 a FR-07) en [`docs/superpowers/plans/2026-09-29-first-reader-improvements.md`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/superpowers/plans/2026-09-29-first-reader-improvements.md) para desarrollo futuro.

### Corregido
* **Restauración de Estado en Reapertura de Modales (`openModal`):** Corrección lógica en [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js) asegurando que al reabrir `#contact-modal` tras un envío previo, el formulario se restaure automáticamente (`form.style.display = ''`) y el estado de éxito se oculte (`successState.style.display = 'none'`).
* **Eliminación Reactiva de Errores en Consentimiento (`form-checkbox`):** Inclusión de casillas de verificación en los listeners de cambio para remover el error de validación en tiempo real al marcarlas.
* **Telemetría Asíncrona Resiliente en Umami:** Verificación defensiva previa de `window.umami.track` antes de marcar secciones como registradas, evitando omisiones por carga diferida de la baliza.

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
