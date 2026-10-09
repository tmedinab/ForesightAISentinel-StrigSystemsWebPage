# Ilustración de arquitectura Athene

Estado: 2026-10-08. SVG activo: [athene-architecture.svg](../assets/img/tech/athene-architecture.svg). Pieza conceptual de la web, no plano de Noctua ni evidencia de operación. [Plan](PLAN_ESTRATEGICO_MARCA_Y_ASSETS_VISUALES.md) para narrativa; [registro](ASSET_REGISTER.json) para procedencia.

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

## Fuentes y fidelidad

Se consultó `foresight-ai-mvp-2026/docs/01_CONOPS.md`, v0.5.46, §§1.2, 2.3, 4.1, 7.4 y 7.5; decisiones BB/BQ (autoridad humana), BS/BT/BW (evidencia y organización de central/enlace). Es arquitectura pre-MCR y objetivos, no prueba de implementación. No trasladar parámetros internos a la landing ni representar toda la estación robotizada futura como producto construido.

Cuatro imágenes VTOL aportadas por Tomás ayudaron a comprender ala, fuselaje, booms, motores y cámara. Origen/licencia no verificados: no se incrustan, calcan ni atribuyen al proyecto. Mejorar relaciones mecánicas sin copiar una aeronave comercial ni inventar precisión de CAD.

## Base y evolución conservadas

La candidata `athene-architecture-astra-candidate-v1.svg` fue generada en una prueba de subagente solicitada por Tomás y elegida como base editable. Se edita incrementalmente, sin regenerar el conjunto cada vez.

1. Paso 1: limpieza de tres rótulos duplicados; geometría conservada.
2. Paso 2: soportes/rotores con relaciones mecánicas más comprensibles.
3. Paso 3: separar flechas de silueta; lupa de inferencia y pantalla con contexto.
4. Paso 4: iluminación compartida, gimbal esférico, relieve y volumen de central.
5. Paso 5 vigente: plano común de rotores, motores cilíndricos, continuidad del fuselaje, coníferas escalonadas y operador refinado. Indicio térmico compartido reemplaza la persona detectada; no incendio confirmado.

Hitos anteriores en `assets/img/tech/athene-architecture-step01.svg` a `step04.svg`; conceptos anteriores son historial. Conservados en esta limpieza, sin convertirlos en nuevas referencias públicas.

## Procedimiento de iteración

Definir el problema de lectura y el papel de cada objeto antes de dibujar. Conservar composición, proyección oblicua e iluminación; separar objeto, volumen, conexión y rótulo en grupos editables. Primero silueta y profundidad, después detalle que sobreviva al tamaño de uso. Variar un aspecto por ensayo, mostrar antes/después y evaluar en contexto.

SVG sigue siendo la herramienta actual: geometría explícita, paths, gradientes moderados, clipping y grupos; sin necesidad de nueva imagen raster, filtros costosos o render 3D. Inkscape 1.3.2/CLI puede exportar y editar; no hay MCP conectado confirmado. [CLI Inkscape](https://wiki.inkscape.org/wiki/Using_the_Command_Line). [Three.js SVGRenderer](https://threejs.org/docs/pages/SVGRenderer.html) permite proyección pero no equivale a shading/render 3D completo. Blender/CAD quedan para otra fase; no se instaló Blender.

Verificar XML, IDs únicos, referencias internas y ausencia de recursos externos inesperados; renderizar en Chromium y comparar escritorio 1440 y móvil 320, ES/EN. Verificar leyenda visible y ausencia de desbordamiento. El detalle de pantalla puede requerir ampliación en móvil; no afirmar legibilidad de microtexto por pasar un check geométrico. No llamar validación de ingeniería a un render.

## Encargo de revisión independiente reutilizable

Revisar SVG activo, AGENTS, este documento y plan; preservar familia A y narrativa aprobada. Evaluar silueta VTOL, profundidad coherente, cámara, inferencia a bordo, sentido del flujo, evidencia térmica y supervisión humana. Priorizar tres defectos observables, justificar cada corrección y proponer una candidata comparada con el control, cambiando una variable por vez. No añadir especificaciones, sensores o capacidades sin fuente. Señalar preguntas de decisión antes de cambiar significado. Entregar límites y pruebas, sin publicación ni instalación automática. Usar Astra sólo para encargos puntuales explícitamente solicitados; no es necesario para cada edición.

## Animación futura: brief y criterio

Tomás decidió continuar con SVG después de evaluar tres videos generados: mejoras de estilo, pero geometría y flujos variables, indicios que parecían fuego confirmado, checks verdes y encuadres recortados. No se adoptó video en la página. Para animación informativa, preferir animar el SVG controlado; MP4/WebM con poster para video, antes que GIF pesado.

Brief en inglés para una futura prueba:

> Create a restrained technical illustration based on the approved SVG composition. Preserve the fixed-wing VTOL silhouette, four lift rotors, spherical camera, onboard inference inset, forest terrain and seated human operator at the monitoring desk. Keep a fixed oblique camera and coherent lighting. Show a subtle observation area, then a small amber thermal indication, followed by image/evidence flowing toward the operator. Grey dashed leaders are magnification callouts, not data links. No weapons, scanning laser, flames, confirmed-fire labels, green approval marks or invented performance metrics. Preserve geometry and framing throughout. All screen content is illustrative. Leave labels for a separate editable overlay. Aim for a quiet seamless loop; duration is presentation pacing, not a claimed system response time.

Antes de incorporar: rótulo conceptual próximo, controles/static poster y `prefers-reduced-motion`; pausar procesamiento fuera del viewport y con documento oculto. Un generador no garantiza coherencia técnica por disponer de un buen prompt.
