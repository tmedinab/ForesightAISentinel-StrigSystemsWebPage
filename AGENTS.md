# AGENTS.md — Strig Systems & Athene™ Guía de Decisiones, Arquitectura y Documentación

> **Documento Oficial de Referencia Técnica para Desarrolladores y Agentes de Inteligencia Artificial.**  
> Este repositorio alberga la plataforma web institucional deeptech de **Strig Systems** y su sistema centinela aéreo autónomo **Athene™**.  
> **Cualquier agente o programador que opere en este repositorio DEBE consultar y acatar rigurosamente las directrices, contratos de código y protocolos de documentación aquí descritos.**

---

## Tabla de Contenidos Progresiva

1. [Nivel 1: Mandatos Inviolables y Pre-flight Check (Lectura rápida: 1 min)](#1-nivel-1-mandatos-inviolables-y-pre-flight-check)
2. [Nivel 2: Arquitectura de Marca y Dominio DeepTech](#2-nivel-2-arquitectura-de-marca-y-dominio-deeptech)
3. [Nivel 3: Sistema de Diseño y Tokens Estéticos (Aerospace HUD UI)](#3-nivel-3-sistema-de-diseño-y-tokens-estéticos-aerospace-hud-ui)
4. [Nivel 4: Componentes Críticos y Geometría de Maquetación](#4-nivel-4-componentes-críticos-y-geometría-de-maquetación)
5. [Nivel 5: Protocolos Formales de Documentación (ADRs y Changelog)](#5-nivel-5-protocolos-formales-de-documentación)
6. [Nivel 6: Checklist de Verificación Final](#6-nivel-6-checklist-de-verificación-final)

---

## 1. Nivel 1: Mandatos Inviolables y Pre-flight Check

Antes de modificar o proponer cualquier línea de código, el agente debe memorizar estos 5 invariantes absolutos:

### 1.1. CERO EMOJIS (Zero Emoji Policy)
* **Prohibición Total:** Terminantemente prohibido el uso de emojis estándar de consumo (emojis de cohete, escudo, pino, advertencia, cruz, etc.) en cualquier archivo (`index.html`, `script.js`, `styles.css`, `terms.html`, `privacy.html`, `AGENTS.md`, etc.).
* **Sustitutos Obligatorios:**
  * **Micro-iconos SVG en línea:** `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.8"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
  * **Glifos técnicos aeroespaciales:** `◈` (diamante militar/producto), `•` (bullet de telemetría HUD), `│` (separador vertical fino), `—` (em-dash), `▾` / `▲` (indicadores de dropdown/acordeón).
  * **Tags tácticos en monospace:** `[TRL 3]`, `[FHSS 900MHz]`, `[EO/IR LWIR]`, `[NV-JETSON]`.
* **Comando de Verificación:**
  ```bash
  node -e "const fs = require('fs'); const regex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F1FF}]/u; ['index.html', 'styles.css', 'script.js', 'terms.html', 'privacy.html'].forEach(f => { const m = fs.readFileSync(f, 'utf8').match(new RegExp(regex, 'gu')) || []; console.log(f, 'Emojis:', m.length); });"
  ```
  *(El resultado DEBE ser estrictamente 0 en todos los archivos).*

### 1.2. Paridad Bilingüe Estricta (Strict i18n Parity)
* **Regla:** Cada elemento textual visible debe contar con su atributo `data-i18n="clave"`.
* **Espejo Exacto:** Toda clave registrada en `translations.es` DEBE existir con su traducción técnica precisa en `translations.en` dentro de [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js).
* **Comando de Verificación Obligatorio:**
  ```bash
  node scratch/verify_i18n.js
  ```
  *(Debe arrojar `Missing in EN: []`, `Missing in ES: []`, `HTML keys missing in translations: []`).*

### 1.3. Honestidad Tecnológica y Política TRL 3
* **Madurez Actual:** **TRL 3** (Prueba de concepto experimental validada en laboratorio aeroespacial).
* **Financiamiento:** Adjudicatarios oficiales del fondo **Semilla Inicia de CORFO** (Noviembre 2025).
* **Incubación:** Programa de aceleración **Gearbox UdeC** (Facultad de Ingeniería, Universidad de Concepción).
* **Hitos Reales Comprometidos:**
  * *Enero 2027:* Demo Day Gearbox (vuelo autónomo de prueba de concepto).
  * *Junio 2027:* Validación operacional en predio piloto privado forestal.
* **Prohibición de Claims Falsos y Venta de Humo:** NUNCA afirmar que el sistema tiene "flotas activas en servicio comercial", "patrullando millones de hectáreas", ni vender disponibilidad inmediata de anaquel. La narrativa se orienta a invitar a actores industriales (Arauco, CMPC, CONAF) a sumarse al **Programa de Validación Piloto Temprano 2026-27**.
* **Envolvente de Vuelo y Viento:** Toda cifra de tolerancia a vientos o ráfagas (ej: 10–12 m/s / ~36–43 km/h, representativo de viento Puelche) DEBE formularse estrictamente como *"Criterio u objetivo de diseño aerodinámico para la plataforma experimental (TRL 3-4)"*. Queda prohibido presentarlo como una envolvente operacional garantizada de catálogo.
* **Interoperabilidad de Centrales de Despacho (C2 / GIS):** La compatibilidad con centrales de monitoreo (CONAF, Arauco, CMPC) debe describirse siempre como *"Objetivo de arquitectura de datos abierta proyectada (exportación normalizada en GeoJSON / KML / REST API)"*, declarando con transparencia que nos encontramos en fase experimental de laboratorio y predio piloto.
* **Foso Tecnológico (Moat vs Drones Manuales de Consumo):** La narrativa debe subrayar la diferenciación estructural de Athene (centinela autónomo VTOL de largo alcance con inferencia Edge AI a bordo y doctrina Human-in-the-Loop) frente a drones comerciales convencionales (cuadricópteros que exigen piloto humano dedicado mirando una pantalla en la oscuridad durante 25 minutos).

### 1.4. Arquitectura Pura Vanilla (Zero Runtime Dependencies)
* **Stack:** HTML5 semántico, CSS3 moderno con variables y Grid/Flexbox, JavaScript ES6+ modular sin dependencias externas (sin React, Vue, Next.js, Tailwind, ni Bootstrap).
* Se garantiza carga instantánea (<100ms), cero vulnerabilidades de cadena de suministro y total independencia técnica.

### 1.5. Política de Enlaces de Fundadores y Privacidad
* Los enlaces de LinkedIn del equipo fundador en `#equipo` se mantienen como enlaces deshabilitados o con estilo visual táctico (`pointer-events: none; opacity: 0.65`) hasta que el fundador (Tomás) autorice y suministre explícitamente los perfiles públicos oficiales. **Nunca inventar URLs externas.**

---

## 2. Nivel 2: Arquitectura de Marca y Dominio DeepTech

### 2.1. Nomenclatura Oficial del Ecosistema (Taxonomía Blindada)
1. **Compañía Matriz:** `Strig Systems` (`Strig Systems SpA`) — Startup deeptech chilena de ingeniería aeroespacial y defensa, fundada por ingenieros civiles aeroespaciales de la Universidad de Concepción (UdeC).
2. **Sistema y Plataforma Principal:** `Athene™` (Sistema Centinela Aéreo Autónomo) — Plataforma centinela integral de inteligencia aérea, alerta temprana y comando C2. Abarca la suite de software de misión, los modelos de inferencia térmica Edge AI a bordo (NVIDIA Jetson / Zero-Cloud), la consola táctica de supervisión humana continua (HITL) y los protocolos de enlace táctico.
3. **Aeronave UAV VTOL:** `Noctua™` — Aeronave autónoma de despegue y aterrizaje vertical (VTOL) y ala fija de largo alcance desarrollada por Strig Systems. Integra aerodinámica de alta eficiencia, bahía de aviónica interna con unidad Edge AI integrada y torreta optrónica biespectral (LWIR radiométrico <50 mK + visible 4K).
   * *Estado actual (TRL 3-4):* Validación experimental del sistema Athene sobre plataforma aérea comercial adaptada (mula de pruebas) en predio piloto acotado bajo régimen VLOS.
   * *Horizonte industrial (Hito 5 / BVLOS):* Integración de la plataforma aérea propia **Noctua™ VTOL**, diseñada desde cero para resistencia a vientos severos (Puelche 10–12 m/s), 90+ min de autonomía y operación con estación robotizada Nest.
4. **Estación de Despliegue en Tierra:** `Nest™` — Estación base terrestre robotizada proyectada para recarga rápida o sustitución automática de baterías, resguardo meteorológico de la aeronave Noctua™ y operación desatendida 1:N.

### 2.2. Parámetros Técnicos Clave de la Plataforma
* **Autonomía:** 90+ minutos de patrullaje continuo por ciclo de batería.
* **Radio Táctico de Cobertura:** 25+ km de enlace seguro en banda 900 MHz FHSS (Frequency-Hopping Spread Spectrum).
* **Computación de Bordo:** Unidad Edge AI de bajo consumo (NVIDIA Jetson) ejecutando inferencia en tiempo real en la aeronave, sin dependencia de conectividad satelital ni 4G/5G para detectar amenazas térmicas.
* **Cámara Térmica:** Sensor LWIR (Long-Wave Infrared) con sensibilidad térmica <50 mK para detección de conatos subsuperficiales e incendios nacientes invisibles al ojo humano.

### 2.3. Identidad Corporativa y Canales Oficiales Estables (Invariantes)
* **Razón Social:** `Strig Systems SpA` (Startup deeptech chilena de ingeniería aeroespacial y defensa).
* **Sede Operativa e Institucional:** `Concepción, Chile · Universidad de Concepción (Facultad de Ingeniería / Lab Aeroespacial)`.
  * *Regla:* NUNCA emplear coordenadas geográficas crudas (e.g. `36°49'S 73°03'W`) en la interfaz; referir siempre formalmente a la ciudad y a la Universidad de Concepción.
* **Canales de Correo y Enrutamiento Oficial:**
  * **Lead & Fundador Principal:** `tmedina@strigsystems.tech` (Tomás Medina — Lead Técnico y Fundador).
  * **Canal General y Operaciones:** `contacto@strigsystems.tech` (Canal institucional y de operaciones, recibido y gestionado por Carlos Gutiérrez).
  * *Regla de Presentación Pública:* En la interfaz pública (píldoras de contacto, footer, dropdowns), mostrar los correos de forma directa y limpia (`contacto@strigsystems.tech` y `tmedina@strigsystems.tech`) sin añadir paréntesis personales ni aclaraciones redundantes como `(Equipo Strig Systems · Carlos)`. La distinción entre canal general y personal se sobreentiende por la dirección.
* **Equipo Fundador (5 Ingenieros Civiles Aeroespaciales UdeC):**
  1. **Tomás Medina:** Founder & Lead.
  2. **Carlos Gutiérrez:** Co-founder & Operaciones.
  3. **Ananda Glaria:** Co-founder.
  4. **Richard Solís:** Co-founder.
  5. **Pablo Alarcón:** Co-founder.
* **Presentación Gráfica de Insignias y Tokens de Marca:**
  * En `.contact-footer-pills` y componentes de datos de contacto, emplear exclusivamente **micro-iconos SVG en línea** (`viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`) en lugar de tags de texto crudos (`[LOC]`, `[GEO]`, etc.).
  * El nombre de producto **Athene** en subtítulos y bloques destacados debe utilizar el gradiente metálico institucional:
    `background: linear-gradient(135deg, #ffffff 40%, var(--accent-cyan) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;` (`.hl-product`), prohibiendo el uso de celeste plano invariable (`hl-cyan` sólido).

### 2.4. Glosario Táctico Obligatorio y Localización Chilena / Latinoamericana (Tactical Nomenclature)
El lenguaje técnico de Strig Systems refleja la precisión de ingeniería aeroespacial y el combate de incendios real en terreno chileno. Queda terminantemente prohibido el uso de afirmaciones vagas o vocabulario publicitario genérico ("marketing fluff"), así como calcos peninsulares o traducciones literales descontextualizadas:

| Concepto Operativo | Término Prohibido (Vago / Ajeno / Fluff) | Término Técnico Obligatorio (Chile / LATAM) |
|---|---|---|
| Detección térmica | "Detecta pequeños fuegos" / "cámara de calor" | **Detección de conatos incipientes y anomalías calóricas subsuperficiales vía sensor LWIR radiométrico** |
| Plataforma de vuelo | "Célula" / "célula aérea" / "dron inteligente" | **Aeronave VTOL autónoma / Plataforma aérea VTOL / Dron autónomo de patrullaje** *(Jamás usar "célula" para referirse a la aeronave)* |
| Disuasión física | "Sirena" / "sirena acústica" / "luz estroboscópica" | **Iluminación táctica de alta potencia / Proyector de luz disuasivo** *(Sin sirenas policiales ni términos como "estroboscópico")* |
| Computación local | "IA en la nube rápida" / "algoritmos mágicos" | **Inferencia local Edge AI a bordo (NVIDIA Jetson) con arquitectura Zero-Cloud** |
| Enlace de datos | "Radio satelital potente" / "Starlink" | **Telemetría táctica y C2 en banda UHF / FHSS 900 MHz anti-interferencia** |
| Doctrina operativa | "Ataque autónomo" / "disuasión automática" | **Disuasión física disuasiva con doctrina HITL (Human-in-the-Loop: activación autorizada por el operador humano)** |
| Cobertura de terreno | "100% de cobertura" / "Cero riesgo absoluto" | **Vigilancia complementaria para reducción de la brecha ciega nocturna y mitigación de exposición humana en quebradas** |
| Confidencialidad en web | Citas intimidantes a "Ley 19.039" / "Divulgación controlada" | **Invitación técnica sobria y directa a reunión u onboarding de predio piloto (NDA disponible a solicitud)** |

### 2.5. Doctrina Narrativa DeepTech de Élite y Adquisición B2B Anti-Fluff
1. **Tono de Pares de Ingeniería:** La comunicación no busca "vender humo" ni impresionar con adjetivos vacíos. Se habla de igual a igual con gerentes de operaciones forestales, brigadistas experimentados y evaluadores técnicos.
2. **Reserva Técnica con Elegancia y Naturalidad:** En la interfaz pública no se proyecta paranoia legal ni se colocan advertencias punitivas sobre leyes de propiedad industrial. La confidencialidad y el resguardo de propiedad intelectual se manejan como una práctica estándar de la industria aeroespacial: una invitación cordial a revisar especificaciones detalladas en una reunión técnica directa o bajo NDA si corresponde.
3. **Cero "Fluff" en Formularios y Calificaciones:** Se prohíbe implementar quizzes o pseudo-calculadoras de descarte ("¿Tiene 4G tu predio?", "¿Cuántas hectáreas tienes?"). La tecnología Athene está diseñada justamente para operar donde no hay conectividad y en topografía compleja. Los puntos de contacto deben ser formularios ejecutivos, limpios y respetuosos del tiempo del usuario, con respuesta personalizada por parte de los fundadores.
4. **Estrategia de Doble Rama (`main` vs `dev`):**
   * **Rama `main` (Portal de Recepción & Holding Institucional):** Tarjeta de presentación sobria y blindada. Comunica la misión, los 3 pilares tecnológicos, credenciales institucionales (CORFO, UdeC) y un canal directo de contacto para el Programa de Validación Piloto 2026-27.
   * **Rama `dev` (Plataforma Completa & Centro de Misión):** Alberga la experiencia interactiva extendida (telemetría en vivo, matriz comparativa densa, simulador de vuelo y dossier privado), desplegándose progresivamente hacia `main` a medida que se alcancen y validen los hitos experimentales de vuelo.

---

## 3. Nivel 3: Sistema de Diseño y Tokens Estéticos (Aerospace HUD UI)

### 3.1. Paleta de Colores Semántica ([`styles.css`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/styles.css))
```css
--bg-primary: #07090e;              /* Negro profundo táctico espacial */
--bg-secondary: #0c1017;            /* Superficie de paneles secundarios */
--bg-card: rgba(14, 19, 29, 0.78);  /* Glassmorphism de tarjetas HUD */
--bg-card-hover: rgba(20, 28, 42, 0.92);

--accent-cyan: #00e5ff;             /* Cian de telemetría activa HUD */
--accent-blue: #0284c7;             /* Azul institucional aeroespacial */
--accent-amber: #f59e0b;            /* Ámbar de advertencia / TRL 3 */
--accent-emerald: #10b981;          /* Verde de enlace seguro / éxito */
--accent-rose: #ef4444;             /* Rojo de alerta térmica / intrusión */
--accent-glow-cyan: rgba(0, 229, 255, 0.16);

--text-primary: #f8fafc;            /* Blanco de alto contraste */
--text-secondary: #cbd5e1;          /* Gris claro de lectura técnica */
--text-muted: #94a3b8;              /* Gris secundario para metadatos */

--border-glass: rgba(255, 255, 255, 0.08);
--border-glass-hover: rgba(0, 229, 255, 0.38);
```

### 3.2. Tipografía y Jerarquía
* **Titulares y Headings:** `'Space Grotesk'`, sans-serif (700, 800) — Carácter técnico, limpio y vanguardista.
* **Cuerpo de Texto:** `'Outfit'`, sans-serif (400, 500, 600) — Alta legibilidad y contraste.
* **Cifras, Telemetría y Código:** `'JetBrains Mono'`, monospace — Precisión técnica en números, coordenadas y etiquetas.

### 3.3. Retículas Militares de Precisión (Crosshair Reticles)
Todos los paneles `.glass-panel` cuentan con retículas discretas en las esquinas generadas vía pseudo-elementos CSS (`::before` y `::after`), emulando la interfaz de aviónica militar y espacial.

### 3.4. Blindaje del Sistema de Diseño (Design Token & Anti-AI Aesthetic Lockdown)
Para evitar que agentes o desarrolladores degraden la identidad visual de Strig Systems hacia una estética genérica de "IA de plantilla":
* **Prohibición de Paletas Genéricas SaaS:** Prohibido el uso de violetas, índigos saturados o gradientes púrpura tipo Tailwind UI por defecto. Todo tono de acento debe derivar estrictamente de los tokens semánticos aprobados (`--accent-cyan`, `--accent-blue`, `--accent-amber`, `--accent-emerald`, `--accent-rose`).
* **Geometría Angular HUD:** Prohibido el uso de redondeos orgánicos excesivos (`border-radius > 16px`), salvo en píldoras completas (chips de contacto o badges). Los paneles `.glass-panel` deben mantener su estructura angular con retículas milimétricas de mira militar (`::before` y `::after`).
* **Micro-contrastes de Lectura:** El texto secundario debe mantener siempre contraste WCAG AA mínimo (`--text-secondary: #cbd5e1` sobre fondo táctico `#07090e`).

---

## 4. Nivel 4: Componentes Críticos y Geometría de Maquetación

### 4.1. Barra de Navegación y Menús Desplegables (Dropdowns)
* **Altura del Header:** `4.6rem` (~73.6px). `z-index: 1000`.
* **Regla Geométrica Inviolable:**
  1. `.header-inner`, `.nav-links` y `.nav-dropdown-wrap` DEBEN tener `height: 100%`.
  2. `.nav-dropdown-menu` se posiciona con `position: absolute; top: calc(100% + 8px);`.
  3. Esto sitúa la parte superior del menú en `Y = 81.6px`, garantizando **8 píxeles de separación limpia** por debajo del borde de la barra.
  4. **Puente de Hover Indestructible:**
     ```css
     .nav-dropdown-wrap .nav-dropdown-menu::before {
       content: '' !important;
       position: absolute !important;
       top: -14px !important;
       left: 0 !important;
       right: 0 !important;
       height: 14px !important;
       width: 100% !important;
       border: none !important;
       background: transparent !important;
       pointer-events: auto !important;
       border-radius: 0 !important;
     }
     ```
     La especificidad `(0, 2, 1)` con `!important` previene que la retícula de `.glass-panel::before` sobreescriba el puente.
  5. **Cinemática de Apertura:** Micro-asentamiento descendente: inicia en `transform: translateY(-6px)` con `opacity: 0` y concluye en `translateY(0)` con `opacity: 1`.
  6. **Desplazamiento de Anclas:** `html { scroll-padding-top: 5.2rem; }` y `section[id] { scroll-margin-top: 5.2rem; }` para que los títulos nunca queden tapados por la barra fija.

### 4.2. Barra de Credenciales del Hero (`.hero-credential-bar`)
* Cápsula unificada que combina:
  * Segmento de validación: `• TRL 3 · Prototipo en desarrollo · Demo técnica ene 2027`.
  * Segmento de respaldo: `◈ Semilla Inicia CORFO • Lab Aeroespacial UdeC`.
* Resuelve la saturación de cajas apiladas en el primer pliegue de pantalla.

### 4.3. Showcase Multimedia y Telemetría HUD en Vivo (`.tech-media-showcase`)
* Marco de aviónica táctica con retículas HUD militares y telemetría en tiempo real (`#hud-val-alt`, `#hud-val-gs`, `#hud-val-hdg`).
* Modela micro-fluctuaciones de vuelo simuladas respetando el ahorro de energía mediante `IntersectionObserver` y cancelándose bajo `prefers-reduced-motion`.

### 4.4. Matriz Comparativa Táctica Progresiva (`#comparativa`)
* Comparativa multidimensional conmutador de visualización (`#btnMatrixCompact` vs `#btnMatrixDetailed`) que permite pasar de un resumen ejecutivo a un análisis denso de 6 dimensiones operativas (cobertura nocturna, latencia, precursores, meteorología, CAPEX/OPEX).

### 4.5. Modal Multicriterio de Validación & Executive Brief (`#contact-modal`, `#brief-modal`)
* Formulario estructurado para empresas forestales e industriales interesadas en sumarse a la validación temprana 2026-27, agendar briefing de 15 min o proponer alianzas.
* Acceso directo al *Executive Briefing One-Pager* tanto en el hero como en el cierre de la página, con soporte nativo de impresión y exportación limpia a PDF.

### 4.6. Disciplina de Recursos, Animaciones y Batería (Resource & Battery Discipline)
Los clientes y evaluadores de Strig Systems a menudo revisan la plataforma en terreno desde laptops o tablets:
1. **Eficiencia Energética en Animaciones:** Cualquier bucle interactivo (como el tracking de iluminación del mouse o telemetría en vivo) debe ejecutarse bajo `requestAnimationFrame` o temporizadores controlados por `IntersectionObserver`. Si el elemento no es visible en el viewport, el procesamiento debe pausarse al 100%.
2. **Ciclo de Vida de Pestaña (`visibilitychange`):** Los temporizadores deben detenerse cuando el documento pasa a estado `document.hidden`.
3. **Respeto a Preferencias de Accesibilidad:** Toda animación o micro-fluctuación debe verificar `window.matchMedia('(prefers-reduced-motion: reduce)')` y cancelarse de inmediato si el usuario prefiere movimiento reducido.

### 4.7. Resiliencia de Formularios y Fricción Cero en Adquisición B2B
El contacto con gerencias forestales, fondos de inversión y contrapartes industriales es de altísimo valor:
1. **Contrato de Fallback `mailto:`:** Si la llamada AJAX a `formsubmit.co` falla por restricciones de red corporativa, políticas CORS o bloqueadores de anuncios, el formulario DEBE exponer inmediatamente un enlace directo `mailto:contacto@strigsystems.tech?cc=tmedina@strigsystems.tech&subject=...&body=...` con todos los campos ya rellenados, garantizando que ninguna oportunidad se pierda.
2. **Acceso Inmediato al Executive Brief:** El botón de descarga/visualización del *Executive Briefing One-Pager* debe estar disponible tanto en el primer pliegue (Hero Actions) como en la llamada a la acción final, permitiendo a los directores técnicos imprimir o guardar el documento en PDF de inmediato.

---

## 5. Nivel 5: Protocolos Formales de Documentación

Cualquier cambio estructural, decisión tecnológica o modificación de comportamiento en el sitio web DEBE documentarse formalmente siguiendo estos protocolos:

### 5.1. Protocolo de Decisiones de Arquitectura (ADRs)
Los ADRs residen en el directorio `docs/adr/`.

#### ¿Cuándo es obligatorio redactar un ADR?
1. Se modifica o introduce un patrón arquitectónico (ej. cambios en el motor i18n, enrutamiento, almacenamiento local).
2. Se altera la geometría crítica de un componente global (ej. navbar, header, z-index stack, modales).
3. Se agrega o descarta una herramienta, script de automatización o dependencia de compilación.
4. Se modifica la política de marca, claims de madurez TRL o nomenclatura técnica de hardware.
5. Se adopta una decisión técnica que sería costosa o compleja de revertir.

#### Convención de Nombrado e Inmutabilidad
* Formato: `docs/adr/NNNN-nombre-en-kebab-case.md` (cuatro dígitos correlativos).
* Los ADRs aceptados **nunca se borran ni se sobreescriben**. Si una decisión cambia, se redacta un nuevo ADR que referencia y reemplaza al anterior (ej. `Reemplazado por ADR-0005`).

#### Plantilla Oficial de ADR
Consultar la plantilla detallada y el ciclo de vida en [`docs/adr/0000-adr-protocol-and-template.md`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/adr/0000-adr-protocol-and-template.md).

#### Registro Actual de ADRs en el Repositorio
* [`ADR-0000`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/adr/0000-adr-protocol-and-template.md): Protocolo de Decisiones de Arquitectura y Plantilla Oficial.
* [`ADR-0001`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/adr/0001-pure-vanilla-stack-architecture.md): Arquitectura Web Pura Vanilla (Zero Runtime Dependencies).
* [`ADR-0002`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/adr/0002-strict-bilingual-parity-system.md): Sistema de Paridad Bilingüe Estricta (Strict i18n Parity).
* [`ADR-0003`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/adr/0003-aerospace-zero-emoji-design-language.md): Lenguaje Visual DeepTech y Política Estricta de Cero Emojis.
* [`ADR-0004`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/adr/0004-navigation-dropdown-geometry-and-hover-bridge.md): Geometría de Navegación, Posicionamiento de Menús Desplegables y Puente de Hover.

---

### 5.2. Protocolo de Registro de Cambios (`docs/CHANGELOG.md`)
Cada sesión de trabajo que introduzca características, mejoras estéticas o correcciones de bugs debe registrar una entrada en [`docs/CHANGELOG.md`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/docs/CHANGELOG.md) bajo la versión activa o una nueva versión semántica, clasificando los cambios en:
* **`Añadido`**: Nuevas secciones, modales, calculadoras o documentación.
* **`Modificado`**: Cambios en comportamiento existente, textos o jerarquías visuales.
* **`Corregido`**: Solución de bugs de layout, geometría CSS o scripts.
* **`Seguridad / Consistencia`**: Purga de emojis, verificación i18n, auditorías de accesibilidad.

---

### 5.3. Protocolo de Actualización de Textos e Internacionalización (i18n)
Cuando se agrega o modifica texto en la interfaz:
1. **Paso 1 (HTML):** Agregar o verificar el atributo en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html):
   ```html
   <span data-i18n="clave_descriptiva">Texto en Español</span>
   ```
2. **Paso 2 (JavaScript - Español):** Agregar la clave a `translations.es` en [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js):
   ```javascript
   clave_descriptiva: "Texto formal y técnico en español",
   ```
3. **Paso 3 (JavaScript - Inglés):** Agregar inmediatamente la misma clave a `translations.en` en [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js):
   ```javascript
   clave_descriptiva: "Precise technical English translation",
   ```
4. **Paso 4 (Auditoría Automatizada):** Ejecutar obligatoriamente:
   ```bash
   node scratch/verify_i18n.js
   ```
   No se permite concluir el turno si el script reporta claves faltantes.

---

### 5.4. Protocolo de Modificación de Estilos CSS
1. **Uso de Tokens:** Emplear exclusivamente las variables de `:root` (`--accent-cyan`, `--bg-card`, `--font-heading`, etc.). No inventar códigos hexadecimales ad-hoc en selectores secundarios.
2. **Accesibilidad y Foco:** Respetar `:focus-visible` con borde cian y el bloque de `@media (prefers-reduced-motion: reduce)`.
3. **Z-Index Registry:**
   * `z-index: 1` a `10`: Elementos de fondo y retículas secundarias.
   * `z-index: 100`: Contenido de secciones y tarjetas interactivas.
   * `z-index: 1000`: Header fijo (`.site-header`).
   * `z-index: 1001`: Menús desplegables (`.nav-dropdown-menu`).
   * `z-index: 1050`: Overlay y caja de modales (`.modal-backdrop`, `.modal-container`).
   * `z-index: 2000`: Toasts y alertas críticas de telemetría.

---

## 6. Nivel 6: Checklist de Verificación Final

Antes de reportar a Tomás que una tarea está finalizada o proponer un commit en Git, verificar cada uno de los siguientes puntos:

- [ ] **Preflight Pipeline Unificado:** Ejecutar obligatoriamente:
  ```bash
  node scratch/preflight_check.js
  ```
  *(Debe arrojar `PASSED: All DeepTech architectural invariants satisfied`, confirmando: 0 emojis, 0 discrepancias ES/EN y 100% de atributos `data-i18n` cubiertos).*
- [ ] **Geometría de Dropdowns:** Los menús de navegación abren 8px por debajo del header sin montarse ni solaparse.
- [ ] **Integridad TRL 3:** Toda afirmación sobre madurez tecnológica respeta el estado de validación en laboratorio y los hitos 2026-2027 de CORFO / Gearbox UdeC.
- [ ] **Glosario Operacional:** No se introdujo jerga de marketing ("marketing fluff") prohibida en la Sección 2.4.
- [ ] **Salud del Servidor Local:** El servidor en `http://127.0.0.1:8888` responde código 200 y no hay errores en la consola del navegador.
- [ ] **Documentación:** Si el cambio implicó una decisión de arquitectura o una nueva funcionalidad, se redactó su respectivo ADR en `docs/adr/` y se actualizó `docs/CHANGELOG.md`.
