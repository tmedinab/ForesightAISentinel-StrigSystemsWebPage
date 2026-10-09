# ADR-0008 — Identidad de familia A en la web local

Fecha: 2026-10-07. Estado: aceptado para integración local por Tomás.

## Contexto y decisión

Tomás solicita actualizar la web con los logos y selecciona «familia A, esa me gusta más hasta el momento». Se utiliza H1/Campo continuidad facetada para Strig Systems y Athene frontal abierto con retornos prolongados R11, composición equilibrada R12. La empresa mantiene identidad propia y el producto su firma derivada.

Los SVG proceden de `exports/brand-review/2026-10-07_AB/vectors/A`. No se alteran contornos o transformaciones. Los viewBox de firmas se ajustan a la tinta con margen4u para evitar espacios de estudio al incorporarlas en HTML. Se generan tinta clara, oscura y favicon corporativo con adaptación al esquema de color del navegador.

## Aplicación

Cabeceras y pies corporativos de las cinco páginas, identidad de Athene en portada/cabeceras, acceso al dossier y404. El briefing usa firma oscura al imprimir. La tarjeta social1200×630 conserva madurez experimental y recibe ambas firmas. CSS dimensiona los SVG y oculta el distintivo secundario de cabecera en móvil; el logo principal de Athene sigue en la portada.

Los diamantes que actúan como indicadores de estado/telemetría no se convierten en logotipos. B/C, sus críticas y el paquete para revisión externa permanecen preservados como antecedentes. Esta decisión no cierra un master inmutable. No se publica el sitio en este encargo.

La revisión corrige además dos desbordamientos: controles de cabecera del dossier en tablet y enlaces de correo de privacidad a320px. En impresión se elimina el espacio reservado por la portada oculta, restableciendo el briefing al inicio del documento.

## Verificación

PASS: portada en cinco anchos320–1440, español/inglés, modales/foco, imágenes y movimiento reducido. PASS: veinte combinaciones de las cinco páginas en cuatro anchos, favicon, logos y briefing impreso sin espacio previo. Resultados locales en `scratch/visual-review-results.json` y `scratch/web-identity-results.json`. Preflight PASS: cero emojis,126 claves por idioma y107 atributos traducidos. `git diff --check` sin errores.

Reconstrucción y comprobación documentadas en `tools/brand/README.md`. Procedencia y alcance en `docs/ASSET_REGISTER.json`; decisión M25 en el estudio central.
