# ADR-0013: Publicación compacta y contacto exploratorio

## Estado
Aceptado para ejecución solicitada por Tomás.

## Fecha
2026-10-08

## Contexto
Tomás solicita primera lectura con perfiles expertos, limpieza/pulido y publicación en main. La lectura simulada y revisión UX encuentran disuasión prematura, fricción de contacto, repetición móvil y un selector tabs incompleto. Tomás precisa detección de presencia humana y señales de incendio, sin identificación de identidad, tomando dev como referencia de intención. La validación gráfica IU p.18 sigue pendiente, según respuesta explícita de Tomás. El despliegue previo empaqueta toda la raíz, exponiendo documentos y exploraciones aunque no estén enlazados.

## Decisión
Conservar familia A, titular, fonts y portada compacta. Recuperar la intención preventiva de vigilancia de presencia humana e indicios de incendio con evaluación contextual del operador; no inferir intención ni convertir objetivos en capacidades verificadas. Retirar disuasión, cuatro fases operativas y titularidad exclusiva del resumen público. Simplificar contacto: organización y contexto de predio opcionales, correo visible, botones de elección aria-pressed y enlaces legales persistentes en traducción.

Generar el sitio con `tools/build_public_site.py` en `build/public`: index, legal, 404, CSS/JS/CNAME y assets efectivamente referenciados. Excluir dossier, docs, exports, scratch, skills, herramientas y rondas. Mantener estos materiales en el repo para desarrollo, sin afirmar privacidad del repositorio. Conservar aplicación gráfica institucional local para revisión; el paquete usa menciones textuales mientras la validación sigue pendiente. No se declara cumplimiento de obligaciones de difusión mediante este tratamiento provisional; incorporar la composición validada cuando esté disponible. Builder permite habilitar artwork explícitamente tras validación. No cambiar DNS ni correo en esta publicación.

## Alternativas Evaluadas y Descartadas
- Publicar la raíz: simple, pero distribuye material interno y páginas ocultas.
- Eliminar dossier/rondas/originales del repo: pierde trabajo necesario para desarrollo y trazabilidad.
- Publicar nueva aplicación institucional como aprobada: contradice el estado confirmado por Tomás.
- Cambiar el isotipo o inventar pruebas para retener lectores: rompe las decisiones y honestidad del proyecto.

## Consecuencias
Publicación reproducible sin dependencias de frontend nuevas; contactos adecuados a conversaciones de desarrollo. La primera lectura es simulada, no investigación con clientes. Las menciones institucionales son provisionales y existe trabajo de validación pendiente. Si cambia el origen del hosting, revisar empaquetado y URLs antes de migrar.

## Verificación
Preflight/i18n, Chromium de paquete en cuatro anchos ES/EN, modales/foco/links, fallback sin envío externo, imágenes cargadas y recursos internos 404. Verificar workflow y respuesta pública tras push, sin force push.
