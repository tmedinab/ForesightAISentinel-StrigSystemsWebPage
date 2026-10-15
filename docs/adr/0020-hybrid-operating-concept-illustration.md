# ADR-0020: Ilustración de funcionamiento con base raster y capa vectorial

## Estado
Aceptado. Tomás autorizó la integración y, tras revisarla, su publicación en main el 2026-10-15, con texto cercano sobre detección de personas y anomalías térmicas y revisión humana.

## Fecha
2026-10-15

## Autor / Participantes
Tomás Medina y Codex.

## Contexto
Tomás aportó una nueva ilustración generada con Gemini, sin rótulos incrustados, con aeronave, terreno, ampliación de análisis y operador. Su volumen y figura humana aportan una base visual distinta al SVG anterior. Se necesita conservar edición de conexiones, traducción, lectura móvil y ampliación accesible.

## Decisión
Usar WebP de 1200 px en el panel. Por instrucción posterior de Tomás del 2026-10-15, retirar el botón y visor de ampliación; conservar el derivado de 2400 px para reutilización, sin cargarlo desde la página. Conservar el JPEG original con hash y procedencia; exportar sin alterar su contenido representado. Añadir una capa SVG en HTML con un recorrido de información análisis→consola y referencias 01–03, sin texto técnico incrustado en el raster. Los nombres de funciones y la leyenda son HTML traducible.

El panel se denomina «Concepto de funcionamiento». La escena es una ilustración generada con IA, con aeronave genérica e imágenes térmicas sintéticas. No acredita CAD de Noctua, hardware, capturas propias, clasificación o prestaciones. Los grises de la ampliación y las flechas de rotor forman parte del raster. La forma térmica generada no se interpreta como persona, animal confirmado o incendio.

Se conserva el SVG anterior como referencia. Los diagramas internos de contexto y arquitectura lógica mantienen su propósito de ingeniería; la ilustración no los reemplaza. No se añaden librerías de runtime, animación o especificaciones de enlace.

## Alternativas evaluadas
- Vectorizar automáticamente la imagen: aumenta complejidad sin recuperar geometría semántica o fidelidad de diseño.
- Dejar rótulos y flechas dentro del raster: dificulta corrección y traducción; descartado para esta prueba.
- Continuar solo con el SVG anterior: sigue disponible como antecedente, pero no incorpora la referencia visual que Tomás pidió probar.

## Consecuencias y compromisos
La base tiene resolución finita y sus formas generadas permanecen sujetas a revisión. Las dos capas deben escalar juntas. Conservar procedencia y leyenda visible; no publicar la fuente original por el empaquetador del sitio. No afirmar revisión independiente de derechos ni exclusividad de la ilustración.

## Criterios de verificación
Revisión visual en ES/EN y escritorio/móvil. Sin botón, diálogo ni controlador de ampliación. WebP cargado con tamaño esperado; SVG e imagen conservan encuadre común. Build público incluye solo derivados referenciados, sin JPEG original, derivado de 2400 px, documentos o pruebas. Preflight, i18n y diff-check.
