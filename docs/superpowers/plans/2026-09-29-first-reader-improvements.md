# Strig Systems & Athene™ — Plan Maestro de Mejoras First-Reader (5 Ejes Especializados)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar de forma integral, rigurosa e incremental todas las mejoras y precisiones técnicas recomendadas en la auditoría *First Reader* por los 5 perfiles evaluadores (Técnico Aeroespacial/IA, Cliente Operacional Forestal, Inversionista DeepTech, Experto en Innovación TRL, y Diseñador UX/UI Aeroespacial).

**Architecture:** Modificaciones modulares en Vanilla HTML5 semántico (`index.html`), Vanilla CSS3 táctico (`styles.css`) y JavaScript ES6+ (`script.js`). Mantenimiento del desacoplamiento puro (Zero Runtime Dependencies), paridad bilingüe estricta 1:1 (`translations.es` / `translations.en`), y coherencia visual HUD militar.

**Tech Stack:** HTML5, CSS3 (Custom Properties & Grid/Flexbox), JavaScript ES6+ (i18n engine, DOM controllers), Node.js (scripts de auditoría: `verify_i18n.js` y regex anti-emoji).

**Spec:** Informe Exhaustivo de Primera Lectura (*First-Reader Audit*) generado en la sesión activa (Auditoría Multidimensional de 5 Perfiles).

---

## Global Constraints

1. **Zero Emoji Policy:** Prohibición estricta de emojis estándar de consumo en todos los archivos (`index.html`, `styles.css`, `script.js`, etc.). Usar exclusivamente micro-iconos SVG en línea o glifos tácticos aeroespaciales (`◈`, `•`, `│`, `—`, `▾`, `▲`).
2. **Strict Bilingual Parity (i18n):** Cada nuevo elemento de texto visible en `index.html` debe poseer `data-i18n="clave"`. Toda clave debe existir en `translations.es` y en `translations.en` dentro de `script.js`. `node scratch/verify_i18n.js` debe arrojar 0 claves faltantes.
3. **Honestidad Tecnológica y Política TRL 3:** Mantener la adhesión estricta al estado de desarrollo actual (TRL 3: prueba de concepto experimental en laboratorio y predio piloto acotado bajo VLOS). Prohibido afirmar disponibilidad comercial inmediata o flotas autónomas activas.
4. **Arquitectura Vanilla Pura:** Cero dependencias externas en tiempo de ejecución (sin frameworks de CSS o JS).
5. **Canales Oficiales Estables:** Uso exclusivo de `contacto@strigsystems.tech` y `tmedina@strigsystems.tech`. Sede formal: Concepción, Chile · Universidad de Concepción.

## Review Focus

1. **Consistencia de Enlaces de Radio:** El drawer técnico del Pilar 3 debe especificar que UHF 902–928 MHz maneja vectores comprimidos de alerta y telemetría crítica, mientras que el video biespectral para triaje visual opera sobre canal digital secundario o descarga en ráfaga.
2. **Doctrina Táctica Dual:** La diferenciación entre Modo Centinela Silencioso (evidencia pericial sin delatar posición) y Modo Disuasión Activa (foco y sirena autorizada) debe quedar cristalina tanto en el Pilar 4 como en el nuevo micro-bloque de despacho.
3. **Paridad Lingüística Inmaculada:** Ninguna etiqueta técnica nueva (ej. `SORA`, `Data Moat`, `Protocolo 02:00 AM`) puede romper la ejecución de `scratch/verify_i18n.js`.
4. **Compatibilidad Visual Responsive:** El micro-bloque visual del "Protocolo de Despacho 02:00 AM" debe fluir horizontalmente en desktop y apilarse limpiamente en vertical en pantallas móviles (<768px).
5. **Contraste Accesible (WCAG AA):** Todo texto técnico en `JetBrains Mono` con opacidades reducidas debe ajustarse para superar un ratio de contraste de 4.5:1 sobre fondo `#07090e`.

---

## Desglose de Tareas de Implementación

### Task 1: Eje Técnico — Clarificación de Radioenlaces, Penetración Térmica y Nomenclatura Hardware

**Files:**
- Modify: `index.html` (Sección `#tecnologia`, `#spec-drawer-2`, `#spec-drawer-3`, `#datalink`, `#faq`)
- Modify: `script.js` (`translations.es`, `translations.en`)
- Test: `scratch/verify_i18n.js`

**Interfaces:**
- Consumes: Claves existentes `p2_s1_val`, `p3_s1_val`, `p3_s4_val`, `faq_a1`.
- Produces: Nuevas descripciones técnicas sobre enlace biespectral, penetración térmica por plumas convectivas y clarificación de **Athene™** (sistema/software) vs **Noctua™** (aeronave VTOL proyectada).

- [ ] **Step 1: Auditar textos actuales en `index.html` y `script.js` para los drawers del Pilar 2 y Pilar 3.**
- [ ] **Step 2: Actualizar `index.html` con las especificaciones técnicas precisas:**
  - En `#spec-drawer-2`: Añadir nota sobre detección térmica bajo dosel mediante plumas de convección y banqueo aerodinámico multi-ángulo.
  - En `#spec-drawer-3`: Precisar la arquitectura dual (enlace primario UHF 915 MHz para telemetría/vectores + enlace secundario digital para confirmación en video o descarga post-vuelo).
  - [x] Homogeneizar la jerarquía (Punto 1.3): Athene™ es el sistema centinela aéreo autónomo integral; Noctua™ es la carga útil optrónica biespectral y célula VTOL avanzada futura (`m2_sub`, `rm5_title`, `rm5_desc`, `eb_summary`, `eb_b2_p1`).
- [ ] **Step 3: Agregar las traducciones correspondientes en `script.js` para español e inglés.**
- [ ] **Step 4: Ejecutar `node scratch/verify_i18n.js` para verificar 0 discrepancias.**

---

### Task 2: Eje Cliente — Micro-flujo "Protocolo de Despacho 02:00 AM" y Doctrina Sigilo/Disuasión

**Files:**
- Modify: `index.html` (Sección `#impacto` o `#datalink`, `#spec-drawer-4`, FAQ Q4)
- Modify: `styles.css` (Clases para el micro-flujo táctico de despacho y badges de doctrina)
- Modify: `script.js` (`translations.es`, `translations.en`)
- Test: `scratch/verify_i18n.js`

**Interfaces:**
- Consumes: Estructuras visuales de `.glass-panel` y tokens semánticos `--accent-cyan`, `--accent-emerald`, `--accent-rose`.
- Produces: Componente `.dispatch-protocol-strip` con 3 fases: 1. Detección Local $\rightarrow$ 2. Triaje Humano en Consola $\rightarrow$ 3. Despacho GeoJSON a Central en $\le 3$ min.

- [ ] **Step 1: Diseñar la estructura HTML para el bloque "Protocolo de Despacho 02:00 AM" dentro de `#impacto`.**
- [x] **Step 2: Añadir el descriptor de doctrina dual:**
  - **Modo Centinela Silencioso (Sigilo):** Monitoreo pasivo y registro pericial con anonimización legal, protegiendo a las cuadrillas en terreno.
  - **Modo Disuasión Activa:** Activación deliberada de foco estroboscópico de alta potencia y sirena disuasiva para cortar la ignición en interfaz urbano-forestal.
- [ ] **Step 3: Escribir estilos en `styles.css` para el flujo de 3 pasos (layout flexbox/grid con flechas conectoras tácticas).**
- [ ] **Step 4: Registrar claves i18n en `script.js` en ES y EN.**
- [ ] **Step 5: Ejecutar `node scratch/verify_i18n.js` y verificar paridad.**

---

### Task 3: Eje Inversionista — Foso de Datos Propietario (*Data Moat*) y Segmentación VC en Formulario

**Files:**
- Modify: `index.html` (Sección `#tecnologia` / `#comparativa`, modal `#contact-modal`)
- Modify: `styles.css` (Estilos para sub-campos dinámicos en selector de intención)
- Modify: `script.js` (Lógica de filtrado en selector de intención y traducciones)
- Test: `scratch/verify_i18n.js`

**Interfaces:**
- Consumes: Intent selector existente `data-intent-target="alliances"`.
- Produces: Campo dinámico de etapa/ticket para fondos de inversión y bloque explicativo del Data Moat de firmas térmicas chilenas.

- [ ] **Step 1: Incorporar en `#tecnologia` (o drawer de inferencia) la mención explícita al Foso de Datos (*Data Moat*):** Cada hora de vuelo en faena real alimenta el banco propietario de firmas térmicas y falsos positivos de biomasa sudamericana.
- [ ] **Step 2: Enriquecer el formulario de contacto `#contact-modal`:**
  - En la pestaña de alianzas e inversión, al seleccionar "Fondo de inversión / Venture Capital", añadir selector secundario: Etapa de interés (Pre-Seed / Seed / Syndicate / Scouting).
- [ ] **Step 3: Actualizar el controlador de formulario en `script.js` para manejar el nuevo campo dinámico.**
- [ ] **Step 4: Incorporar claves de traducción en `script.js` (ES y EN) y validar con `scratch/verify_i18n.js`.**

---

### Task 4: Eje Innovación — Marco Regulatorio SORA (DGAC/JARUS) y Protección de PI

**Files:**
- Modify: `index.html` (Sección `#roadmap`, Hitos 4 y 5; Pilar 1; Executive Brief)
- Modify: `script.js` (`translations.es`, `translations.en`)
- Test: `scratch/verify_i18n.js`

**Interfaces:**
- Consumes: Hitos actuales de la hoja de ruta (`rm4_desc`, `rm5_desc`, `p1_s4_val`).
- Produces: Integración formal de la metodología SORA (*Specific Operations Risk Assessment*) y declaración de titularidad de propiedad intelectual en Strig Systems SpA.

- [ ] **Step 1: Modificar las descripciones de los Hitos 4 y 5 en `#roadmap`:**
  - Especificar que la evolución desde vuelos en línea de vista (VLOS) hacia más allá de la línea de vista (BVLOS) se estructura bajo la metodología de evaluación de riesgos operacionales SORA reconocida por DGAC y JARUS.
- [ ] **Step 2: Incorporar en el drawer del Pilar 1 la referencia a los niveles SAIL / mitigaciones SORA.**
- [x] **Step 3: En el Executive Brief One-Pager y footer, reforzar la declaración formal de titularidad de la propiedad intelectual de algoritmos y arquitectura.**
- [ ] **Step 4: Añadir traducciones en ES y EN en `script.js` y comprobar paridad con `verify_i18n.js`.**

---

### Task 5: Eje Diseño & UX — Ritmo Visual en Bloque IaaS/Impacto, Micro-contrastes y Transiciones

**Files:**
- Modify: `styles.css` (Selectores `.iaas-pillar-card`, micro-contrastes `.criteria-tag`, `.spec-lbl`, transiciones de formulario)
- Modify: `index.html` (Estructura de tarjetas IaaS con identificadores tácticos `[IAAS // 01]`, etc.)
- Test: Inspección visual en navegador local `http://127.0.0.1:8888/`

**Interfaces:**
- Consumes: Variables CSS `:root` (`--accent-cyan`, `--border-glass`, `--text-secondary`, `--text-muted`).
- Produces: Diferenciación visual marcada entre tarjetas de impacto operativo y pilares IaaS, contraste de texto WCAG AA verificado, y transiciones animadas suaves en el modal.

- [x] **Step 1: Diferenciación visual de `.iaas-pillar-card` en `styles.css`:**
  - Agregar un encabezado táctico mono `[IAAS // 01]` y un borde superior o perimetral distintivo con sutil gradiente.
- [x] **Step 2: Auditoría y corrección de micro-contrastes:**
  - Revisar selectores en `styles.css` con opacidad reducida (`.criteria-tag`, `.spec-lbl`, `.photo-reticle-label`) para asegurar un valor mínimo de `#94a3b8` o superior, garantizando legibilidad en pantallas industriales.
- [x] **Step 3: Añadir micro-transición suave en los campos dinámicos de `#contact-modal`:**
  - Aplicar transición de `opacity` y `transform: translateY(4px)` al alternar pestañas del selector de intención.

---

### Task 6: Auditoría Final, Verificación i18n, Chequeo Cero Emojis y Registro de Cambios

**Files:**
- Modify: `docs/CHANGELOG.md`
- Create: `docs/adr/0005-first-reader-technical-and-operational-improvements.md` (si procede)
- Test: Scripts de auditoría de consola

- [ ] **Step 1: Ejecutar verificación i18n completa:**
  ```bash
  node scratch/verify_i18n.js
  ```
  *(Debe devolver 0 claves faltantes en ES y EN).*
- [ ] **Step 2: Ejecutar verificación de cero emojis:**
  ```bash
  node -e "const fs = require('fs'); const regex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F1FF}]/u; ['index.html', 'styles.css', 'script.js', 'terms.html', 'privacy.html'].forEach(f => { const m = fs.readFileSync(f, 'utf8').match(new RegExp(regex, 'gu')) || []; console.log(f, 'Emojis:', m.length); });"
  ```
  *(Debe devolver estrictamente 0 en todos los archivos).*
- [ ] **Step 3: Documentar los cambios en `docs/CHANGELOG.md` bajo la versión correspondiente.**
- [ ] **Step 4: Redactar `docs/adr/0005-first-reader-technical-and-operational-improvements.md` según el protocolo de arquitectura.**

---

## 7. Backlog de Hallazgos First-Reader (Pendientes para Potencial Inclusión)

> **Estado:** Registrados como pendientes para definición interna previa a cualquier publicación en la web pública.

* [ ] **FR-01 (Eje Técnico/Forestal): Detección Bajo Dosel Cerrado:**  
  *Contexto:* Los clientes forestales (Arauco/CMPC) se preguntan cómo el sensor térmico LWIR penetra plantaciones de pino/eucalipto denso.  
  *Propuesta:* Explicar en el drawer del Pilar 2 que la detección se fundamenta en la captación de **plumas convectivas térmicas ascendentes** (calor que asciende entre las ramas) y el **banqueo aerodinámico multi-ángulo** de la aeronave al orbitar, descartando la idea errónea de transparencia a través de madera.
* [ ] **FR-02 (Eje Coherencia de Datos): Armonización de Radio y Autonomía:**  
  *Contexto:* Hero y Tecnología mencionan 15 km y 45–60 min, mientras FAQ Q8 cita 25+ km y 90+ min.  
  *Propuesta:* Declarar con transparencia que **15 km y 45–60 min** corresponden a la envolvente objetivo de la aeronave Noctua™ MVP (TRL 4-5), mientras que **25+ km y 90+ min** representan el horizonte de escalamiento industrial de largo plazo (TRL 6+ con estación Nest).
* [ ] **FR-03 (Eje Inversionista/VC): Foso Defensivo de Datos (Data Moat):**  
  *Contexto:* La plataforma no resalta el valor del software y la IA como barrera de entrada frente a fabricantes de drones comerciales.  
  *Propuesta:* Formalizar en el Pilar 2 y Alianzas la acumulación del banco propietario de firmas térmicas y falsos positivos de biomasa sudamericana (*Data Moat*) como barrera defensiva de software.
* [ ] **FR-04 (Eje Regulatorio/DGAC): Metodología SORA (JARUS):**  
  *Contexto:* La transición hacia vuelos BVLOS (15 km) requiere un marco metodológico explícito.  
  *Propuesta:* Incorporar la metodología SORA (*Specific Operations Risk Assessment*) y niveles SAIL en los Hitos 4 y 5 del Roadmap y en el Pilar 1.
* [ ] **FR-05 (Eje UI/UX): Homogeneización de Micro-Iconos en el Hero:**  
  *Contexto:* La métrica 1 usa un SVG inline (`14x14`), mientras que las métricas 2, 3 y 4 usan un glifo Unicode crudo `ℹ`.  
  *Propuesta:* Reemplazar los 3 glifos Unicode por el micro-SVG vectorial estandarizado.
* [ ] **FR-06 (Eje Telecomunicaciones): Confirmación Visual en Zonas sin Cobertura 4G:**  
  *Contexto:* En quebradas profundas sin señal celular, el operador necesita verificar la alerta antes de autorizar disuasión física.  
  *Propuesta:* Aclarar en el Pilar 3 que el enlace UHF 915 MHz es capaz de transmitir micro-capturas térmicas comprimidas en ráfaga (thumbnails radiométricos) para triaje visual en consola antes del despacho.
* [ ] **FR-07 (Eje Gobernanza & Equipo): Balance de Roles en el Equipo Fundador:**  
  *Contexto:* 5 ingenieros aeroespaciales transmiten alta capacidad técnica pero dejan dudas sobre la gestión comercial/financiera B2B.  
  *Propuesta:* Precisar y formalizar las áreas de liderazgo comercial, financiero y regulatorio dentro del equipo fundador UdeC.

