# Ilustración de funcionamiento de Athene

Estado: 2026-10-15. Ilustración aprobada: imagen Gemini de Tomás en WebP con capa SVG en HTML; publicación autorizada el 2026-10-15 (ADR-0020). SVG anterior [athene-architecture.svg](../assets/img/tech/athene-architecture.svg) preservado como referencia. Pieza conceptual, no plano de Noctua ni evidencia de operación. [Plan](PLAN_ESTRATEGICO_MARCA_Y_ASSETS_VISUALES.md) para narrativa; [registro](ASSET_REGISTER.json) para procedencia.

## Dos escenarios aprobados — 2026-10-16

Tomás autorizó probar en la web las dos nuevas imágenes Gemini. Tras la prueba local, Tomás autorizó publicar en main el 2026-10-16: `athene-thermal-20261016.webp` (55.116 bytes) y `athene-person-20261016.webp` (53.426 bytes), 1200 × 896 px. Originales preservados en `docs/visual/originals/` y hashes en el registro; exportación reproducible con `tools/prepare_concept_scenarios.cjs`. No se altera creativamente el raster.

Por indicación posterior de Tomás, sin botones visibles. Alternancia cada 7 segundos y fundido de 700 ms. Hover por mitades: izquierda térmica, derecha personas, con zona neutral central; pausa durante hover y reanudación al salir. Toque cambia escena y deja selección manual. Teclado: flechas eligen, Enter cambia, Espacio pausa/reanuda; foco visible e instrucciones accesibles al enfocar. Pausa fuera del viewport, al ocultar pestaña y mientras se usa teclado. Con movimiento reducido sólo hay selección manual, sin fundido ni alternancia. Sin JS o si falla la segunda imagen, queda visible la primera. La capa SVG común conserva referencias y conexión hacia operador. Sin visor de ampliación.

Persisten pequeñas diferencias entre escenas, flechas de rotor incrustadas y giro aparente de la hélice posterior. Tomás acepta usarlas para esta prueba; no se interpretan como validación de geometría, perfil de vuelo o prestaciones. Leyenda IA/sintética preservada. La firma naranja es una anomalía ilustrativa, sin clasificación de objeto confirmada. La revisión publicada anterior del ADR-0020 permanece preservada.

Verificación local: 130 claves ES/EN, build de 21 archivos, originales y documentación excluidos. Navegador a 1440/390 px en ambos idiomas: imágenes, alternancia, hover izquierda/derecha con pausa, toque, teclado, movimiento reducido, pausa fuera de vista y fallback sin JS aprobados; sin desbordamiento ni errores JS. Paneles inspeccionados visualmente en móvil ES y escritorio EN.

## Versión previa: integración híbrida

Estado vigente tras indicación posterior de Tomás del 2026-10-15: botón y visor de ampliación retirados, incluida su lógica y estilos. La ilustración permanece en el panel. El derivado de 2400 px se conserva para reutilización y queda fuera del build al no referenciarse desde la página. Las verificaciones de zoom descritas debajo son antecedentes de la versión previa.

Original de 2400 × 1792 px conservado en `docs/visual/originals/athene-concept-gemini-20261015.jpg`. Derivados: `athene-concept-1200.webp` (47.590 bytes) para el panel y `athene-concept-2400.webp` (158.886 bytes) para ampliación. `tools/prepare_concept_illustration.cjs` reproduce las exportaciones y registra procedencia/hashes; no altera creativamente el contenido. El original no se referencia desde la página ni entra al build público.

La capa SVG en `index.html` añade el intercambio de información análisis→consola y referencias 01–03. Raster y capa usan el mismo encuadre 2400 × 1792 y escalan juntos, también al hacer zoom. Nombres de funciones y leyenda son HTML con traducción ES/EN. El raster mantiene la escena, la ampliación gris y los indicadores de rotor; no son un diagrama de protocolos o de despliegue físico. Los diagramas de arquitectura internos tienen otro propósito y no se reemplazan con esta ilustración.

La imagen térmica generada tiene morfología ambigua: no asignar persona, especie o incendio. La leyenda visible identifica aeronave genérica y térmica sintética. No hay capturas propias, equipo integrado ni configuración Noctua acreditados. La revisión contempla composición, ampliación accesible, carga, lectura móvil y alineación de capas; no es validación de ingeniería ni de derechos.

Comprobación de la candidata integrada: ES/EN a 1920/1440/390/320 px; foco, Escape, cierre por fondo, zoom/paneo/reinicio y retorno al botón, modal de resumen existente y fallback sin JS. Raster y SVG mantienen dimensiones y proporción comunes al acercar. Paneles revisados visualmente a 1440/390; ampliación de escritorio revisada. Preflight, i18n y build pasan (21 archivos); build incluye dos WebP y excluye el original y el SVG histórico. Registro de assets con origen/hashes actualizado. Esta comprobación corresponde a la prueba previa; Tomás autorizó publicar posteriormente la versión sin ampliación.

## Qué debe entenderse

Un VTOL de ala fija observa el territorio con cámara; el computador a bordo analiza la imagen y transmite evidencia/indicio a una central con operador que supervisa. La inferencia local no depende necesariamente de nube. La escena representa funciones y autoridad humana, no una secuencia de misión cronometrada o instalación real.

| Recurso | Significado |
| --- | --- |
| Aeronave con cuatro rotores, ala y gimbal | Categoría VTOL genérica y observación; no configuración de hardware aprobada. |
| Ampliación del computador | Entrada de imagen, análisis y resultado ilustrativos; no ubicación física ni modelo de placa. |
| Recorridos cian con dirección | Flujo lógico de información/evidencia hacia la central. |
| Localizadores grises discontinuos | Relaciones de ampliación, sin lectura como comunicaciones. |
| Indicio ámbar en terreno/pantalla | Observación térmica pendiente de evaluación; no fuego confirmado. |
| Central con escritorio, monitor y operador | Supervisión humana; interfaz y datos sintéticos, sin instalación verificable. |

No confundir el campo de observación con un láser, ni un vínculo con control autónomo de actuación. Evitar check verde, precisión/confianza inventadas o imágenes falsamente reales. Mantener leyenda conceptual visible en la página ES/EN; metadata SVG no sustituye esa leyenda en una exportación independiente.

## Fuentes y fidelidad del SVG anterior

Se consultó `foresight-ai-mvp-2026/docs/01_CONOPS.md`, v0.5.46, §§1.2, 2.3, 4.1, 7.4 y 7.5; decisiones BB/BQ (autoridad humana), BS/BT/BW (evidencia y organización de central/enlace). Es arquitectura pre-MCR y objetivos, no prueba de implementación. No trasladar parámetros internos a la landing ni representar toda la estación robotizada futura como producto construido.

Cuatro imágenes VTOL aportadas por Tomás ayudaron a comprender ala, fuselaje, booms, motores y cámara. Origen/licencia no verificados: no se incrustan, calcan ni atribuyen al proyecto. Mejorar relaciones mecánicas sin copiar una aeronave comercial ni inventar precisión de CAD.

## Base y evolución conservadas del SVG anterior

La candidata `athene-architecture-astra-candidate-v1.svg` fue generada en una prueba de subagente solicitada por Tomás y elegida como base editable del SVG anterior. Su evolución incremental permanece disponible como antecedente.

1. Paso 1: limpieza de tres rótulos duplicados; geometría conservada.
2. Paso 2: soportes/rotores con relaciones mecánicas más comprensibles.
3. Paso 3: separar flechas de silueta; lupa de inferencia y pantalla con contexto.
4. Paso 4: iluminación compartida, gimbal esférico, relieve y volumen de central.
5. Paso 5: plano común de rotores, motores cilíndricos, continuidad del fuselaje, coníferas escalonadas y operador refinado. Indicio térmico compartido reemplaza la persona detectada; no incendio confirmado.

6. Paso 6 vigente: entrada visual y procesador diferenciados en la ampliación; el mismo motivo térmico aparece en el análisis, la evidencia transmitida y la pantalla del operador. Flechas entran y salen de la tarjeta de evidencia sin atravesarla. Siluetas y composición conservadas.

Hitos anteriores en `assets/img/tech/athene-architecture-step01.svg` a `step04.svg`; conceptos anteriores son historial. Conservados en esta limpieza, sin convertirlos en nuevas referencias públicas.

## Procedimiento de iteración

Definir el problema de lectura y el papel de cada objeto antes de dibujar. Conservar composición, proyección oblicua e iluminación; separar objeto, volumen, conexión y rótulo en grupos editables. Primero silueta y profundidad, después detalle que sobreviva al tamaño de uso. Variar un aspecto por ensayo, mostrar antes/después y evaluar en contexto.

SVG se mantiene para diagramas e interconexiones editables. La candidata actual usa raster para la escena y SVG/HTML para relaciones y rótulos; no se vectoriza automáticamente el arte generado. Los pasos del SVG anterior permanecen como antecedentes. Inkscape 1.3.2/CLI puede exportar y editar; no hay MCP conectado confirmado. [CLI Inkscape](https://wiki.inkscape.org/wiki/Using_the_Command_Line). [Three.js SVGRenderer](https://threejs.org/docs/pages/SVGRenderer.html) permite proyección pero no equivale a shading/render 3D completo. Blender/CAD quedan para otra fase; no se instaló Blender.

Verificar XML, IDs únicos, referencias internas y ausencia de recursos externos inesperados; renderizar en Chromium y comparar escritorio 1440 y móvil 320, ES/EN. Verificar leyenda visible y ausencia de desbordamiento. El detalle de pantalla puede requerir ampliación en móvil; no afirmar legibilidad de microtexto por pasar un check geométrico. No llamar validación de ingeniería a un render.

## Prioridad propuesta tras revisión a tamaño real — 2026-10-15

La revisión inicial del SVG anterior midió 484 × 309 px en una ventana de 1440 px y 324 × 207 px en una ventana de 390 px. La silueta aérea y los tres momentos se reconocían, pero la tarjeta de evidencia y el contenido del monitor tenían poco tamaño. La candidata híbrida posterior ocupa 484 × 362 y 324 × 242 px, respectivamente; las capturas actuales de `scratch/spot-review-20261015/hero-panel-1440.png` y `hero-panel-390.png` corresponden a esa candidata, no a una prueba con usuarios.

La comparación conserva aeronave, terreno, proyección y motivo térmico. La candidata en `scratch/evidence-review/index.html` amplía la referencia recibida de 56 × 44 a 86 × 62 unidades del SVG, simplifica el monitor a una imagen principal con el mismo indicio y refina la figura humana: ropa mate, un brazo visible, piernas con volumen y silla simplificada. Es una propuesta local, sin sustituir el asset activo. Revisar las candidatas al ancho real de uso, no solo a 720 px. No añadir animación antes de resolver la lectura estática.

La ampliación accesible sí quedó implementada en la página local: botón «Ampliar ilustración», diálogo nativo con título y alcance traducidos, imagen ajustada y zoom al 180 % con desplazamiento nativo. Fondo inerte, bloqueo de scroll, recorrido de foco, Escape/cierre/backdrop, reinicio de zoom y retorno del foco al botón. Sin JavaScript se conserva la imagen de la página y se oculta el botón. No se requiere animación ni librería nueva. Verificado ES/EN en 1440/390 px, teclado, paneo, reapertura, modal de resumen existente y fallback sin JS; preflight, i18n y build público pasan. Capturas locales y prueba en `scratch/evidence-review/` y `scratch/verify-architecture-viewer.cjs`. Sin publicación en esta ronda.

Para nomenclatura, evaluar con Tomás «Concepto de funcionamiento» en el panel web: describe la escena ilustrativa y la distingue de los diagramas de contexto/arquitectura lógica usados para discutir ingeniería. No se cambió el título público ni su traducción. Como segunda prioridad de sección, revisar si «Estado del proyecto» distingue con suficiente claridad trabajo actual, siguiente demostración y evolución; conservarlos como objetivos, sin inventar fechas o añadir material técnico reservado.

Tomás aprobó separar «Hoy · Diseño y desarrollo», «Siguiente hito · Integración y pruebas» y «Evolución · Noctua y Nest» y retirar el código TRL de los textos públicos el 2026-10-15 (ADR-0019). La sección quedó actualizada en ES/EN, manteniendo «Desarrollo experimental» y la clasificación interna. La mención específica de demostración prevista en el resumen no se modificó; el bloque de estado utiliza el hito de integración sin fecha.

## Encargo de revisión independiente reutilizable

Revisar la candidata híbrida activa localmente, el SVG anterior, AGENTS, este documento y plan; preservar identidad vigente y narrativa aprobada. Evaluar silueta VTOL, profundidad coherente, cámara, inferencia a bordo, sentido del flujo, evidencia térmica y supervisión humana. Priorizar tres defectos observables, justificar cada corrección y proponer una candidata comparada con el control, cambiando una variable por vez. No añadir especificaciones, sensores o capacidades sin fuente. Señalar preguntas de decisión antes de cambiar significado. Entregar límites y pruebas, sin publicación ni instalación automática. Usar Astra sólo para encargos puntuales explícitamente solicitados; no es necesario para cada edición.

## Animación futura: brief y criterio

Tomás decidió continuar con SVG después de evaluar tres videos generados: mejoras de estilo, pero geometría y flujos variables, indicios que parecían fuego confirmado, checks verdes y encuadres recortados. No se adoptó video en la página. Para animación informativa, preferir animar el SVG controlado; MP4/WebM con poster para video, antes que GIF pesado.

Brief en inglés para una futura prueba:

> Create a restrained technical illustration based on the approved SVG composition. Preserve the fixed-wing VTOL silhouette, four lift rotors, spherical camera, onboard inference inset, forest terrain and seated human operator at the monitoring desk. Keep a fixed oblique camera and coherent lighting. Show a subtle observation area, then a small amber thermal indication, followed by image/evidence flowing toward the operator. Grey dashed leaders are magnification callouts, not data links. No weapons, scanning laser, flames, confirmed-fire labels, green approval marks or invented performance metrics. Preserve geometry and framing throughout. All screen content is illustrative. Leave labels for a separate editable overlay. Aim for a quiet seamless loop; duration is presentation pacing, not a claimed system response time.

Antes de incorporar: rótulo conceptual próximo, controles/static poster y `prefers-reduced-motion`; pausar procesamiento fuera del viewport y con documento oculto. Un generador no garantiza coherencia técnica por disponer de un buen prompt.
