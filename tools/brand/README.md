# Herramientas de identidad

Herramientas de desarrollo; no añaden dependencias de runtime al sitio. Estado de decisiones en [estudio central](../../docs/ESTUDIO_MARCA_STRIG_ATHENE.md). La web local utiliza familia A; rondas anteriores son historial reproducible, no identidad automáticamente adoptada.

## Requisitos y verificación

Python estándar para builders salvo scripts que usan fontTools (contornos GPOS 700/400; versión usada 4.60.1). Usar entorno de desarrollo o `scratch/font-runtime`; conservar TTF/OFL de `assets/img/brand/round-04/source/`. No modificar la fuente original.

Verificadores `.cjs`: Playwright y Sharp en runtime local; `BRAND_NODE_MODULES` permite indicar otro directorio de módulos. PNG de láminas desde Chromium, símbolos/firmas como paths de una tinta. Alpha/bounds verifican geometría entre renderizadores, no calidad estética. `currentColor` funciona inline, no hereda en un `<img>` externo; usar derivados claros/oscuros para producción, no filtros sobre logos institucionales.

## Reconstrucción de estudios

```sh
python tools/brand/outline_wordmarks.py
python tools/brand/build_round04.py
node tools/brand/verify_round04.cjs
python tools/brand/build_round05.py
node tools/brand/verify_round05.cjs
```

R06–R19 siguen el patrón, cambiando número/directorio:

```sh
python tools/brand/build_round19.py
node tools/brand/verify_round05.cjs assets/img/brand/round-19
```

Fuentes, parámetros y revisiones particulares en `assets/img/brand/round-*/source/`; helper `study_support.py` sin generar al importar. Los generadores no necesitan los documentos narrativos retirados. No ejecutar en bloque para regenerar assets aprobados sin necesidad.

## Comparación y entrega profesional A/B

```sh
python tools/brand/build_current_comparison.py
node tools/brand/render_current_comparison.cjs
python tools/brand/build_designer_review_AB.py
node tools/brand/verify_designer_review_AB.cjs
python tools/brand/package_designer_review_AB.py
```

Comparación en `assets/img/brand/current-comparison/`: A/H1-R11/R12, B3R18/AtheneR15 y C original R17. Handoff en `exports/brand-review/2026-10-07_AB/` y ZIP: contornos, cinco láminas, briefing/plantilla en inglés, font/OFL, geometría y hashes. Verificador de cinco láminas/48 casos; packager comprueba geometría y archivo. Preservar el snapshot existente para revisión, sin sobrescribirlo automáticamente.

## Derivados web de familia A

```sh
python tools/brand/build_web_identity_A.py
node tools/brand/prepare_web_identity_A.cjs
node tools/brand/verify_web_identity.cjs
```

Ejecutar builder y prepare en ese orden: deriva nueve SVG del paquete A, ajusta viewBox sin cambiar contornos y genera tarjeta social. Verificador comprueba cinco páginas/cuatro anchos, logos, favicon, overflow y briefing; bloquea solicitudes externas. Requiere servidor/configuración de preview del script. Selección local registrada en ADR-0008.
