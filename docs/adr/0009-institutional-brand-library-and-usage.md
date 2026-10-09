# ADR-0009: Biblioteca y aplicación de marcas institucionales

## Estado
Aceptado para archivo e implementación local. Validación institucional de aplicación pendiente.

## Fecha
2026-10-08

## Autor / Participantes
Tomás / Codex

## Contexto
Tomás suministra originales y manuales Corfo, IncubaUdeC y Red de Mentores IU para conservarlos y actualizar la web. Confirma adjudicación Semilla Inicia, elección de IncubaUdeC como incubadora y mentorías de Red IU. El manual Corfo muestra identidad antigua; el manual IU prohíbe usar marcas antiguas y solicita validar las aplicaciones.

## Decisión
Archivar originales intactos, manifest SHA-256 y guía central en `docs/brand/institutional/`. Conservar PDF/ZIP mediante excepciones limitadas de gitignore. Usar composiciones actuales suministradas y versiones adecuadas al fondo, convertidas a WebP sin pérdida desde los PNG completos. Incorporar tres relaciones explícitas en el footer, Corfo inferior derecho, sin mezclar logos con credenciales del equipo. Registrar nomenclatura correcta y no separar elementos. `tools/institutional_assets.py` permite reconstrucción/verificación con Pillow, sin dependencia web nueva. Mantener el AI para producción vectorial posterior, sin calcar. Familia A no cambia.

## Alternativas Evaluadas y Descartadas
* Identidad del manual Corfo antiguo: contradice la prohibición de marcas antiguas de IU p.16; queda como antecedente.
* Recrear SVG o aplicar filtros para uniformar colores: puede alterar identidad ajena; se usan originales completos.
* Una banda genérica de «partners»: confunde financiamiento, incubación y mentorías; se explicitan sus roles.
* Dejar manuales ignorados por Git: impide la reutilización solicitada; se añaden excepciones específicas.

## Consecuencias y Compromisos
Biblioteca reutilizable con trazabilidad y masters para otros formatos. Mayor tamaño del repositorio por manuales originales; la web carga solo tres derivados livianos. Área de resguardo numérica/mínimos digitales no establecidos por el manual IU recibido: no se inventan normas. Nuevas aplicaciones requieren la validación indicada en IU p.18, que no se ha realizado ni se sustituye con la revisión local. Investigación UdeC/Gearbox y actualización de manuales queda pendiente.

## Criterios de Verificación
Hashes de originales, tamaños/alpha/píxeles visibles de WebP, carga de imágenes y layout responsive ES/EN; preflight e i18n del repo. Revisión de manuales con render de páginas relevantes, especialmente IU5,9,11–16,18 y Corfo2–4,7,16,19. Guía y manifest registran fuentes y discrepancias.
