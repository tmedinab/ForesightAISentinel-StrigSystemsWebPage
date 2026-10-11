# ADR-0018: Referencias del diseñador y reconstrucción vectorial para la web

## Estado
Aceptado para integración local por encargo de Tomás, 2026-10-11. Masters vectoriales y fuente tipográfica pendientes. Evoluciona los derivados web del ADR-0008; conserva sus originales y el paquete A/B histórico.

## Contexto
Tomás aporta tres JPEG de versiones revisadas por un diseñador mediante iteración con IA. Prefiere la tipografía y los cambios de forma y solicita evaluación, registro e integración. No se aportó un informe, nombre de fuente ni vector maestro.

## Decisión
Conservar los tres originales con SHA-256 y la identidad web anterior. Reconstruir contornos vectoriales a partir de las siluetas de las referencias, con simplificación limitada a 0,65 píxeles de origen; no sustituir la tipografía por una fuente supuestamente equivalente ni atribuirle un nombre por apariencia.

Aplicar firmas claras/oscuras, símbolos y favicon a los puntos existentes de la web. Mantener la tipografía del contenido, narrativa y jerarquía empresa/producto. Conservar azul/cian corporativo y Athene monocromo. Los vectores son derivados web de referencias raster, no originales entregados por el diseñador ni masters definitivos. No regenerar el paquete A/B enviado ni modificar identidad del prototipo UI en otro repositorio.

## Fundamento visual
Strig aumenta anchura y masa del nombre, hace SYSTEMS más regular y separa el símbolo en dos piezas con acento cian. Gana claridad industrial y lectura de S; pierde parte de la bilateralidad de Campo/H1 y puede sugerir flecha/intercambio. Athene conserva el frente abierto y vuelve el nombre más clásico/monumental, con cortes en H/N y A abierta. La diferenciación producto/empresa es deliberada; los cortes y serifas deben verificarse en reducción, sin convertir esta tipografía en fuente de párrafos.

## Consecuencias
Portabilidad sin fuentes de runtime, fondo transparente y originales recuperables. La precisión depende de JPEG/umbral; recibir SVG/AI y fuente identificada permitiría sustituir la reconstrucción manteniendo composición. No declarar identidad legal exclusiva, geometría exacta de master o evaluación humana adicional a la procedencia informada por Tomás.

## Verificación
SVG sin imágenes incrustadas, texto dependiente de fuentes ni filtros; revisión de contornos y espacios negativos. Navegador en escritorio/móvil e impresión; preflight/i18n y build público con exclusión de biblioteca, estudio y material de ingeniería. La verificación técnica no cierra el master de marca.
