# ADR-0012: Consolidación y propiedad de documentación

## Estado
Aceptado

## Fecha
2026-10-08

## Autor / Participantes
Tomás (solicitud de condensar y eliminar documentación redundante) / Codex (ejecución).

## Contexto
La exploración de marca, SVG y web generó 26 documentos temáticos y briefs de raíz, con conclusiones repetidas e instrucciones antiguas contradictorias. Parte del trabajo todavía no está en Git: eliminar sin recuperación perdería antecedentes. Los ADRs aceptados y originales institucionales deben conservarse según ADR-0000 y ADR-0009.

## Decisión
Mantener un índice y tres documentos dueños: estudio de marca, plan de web/assets y metodología de arquitectura. AGENTS contiene reglas operativas, README acceso/setup y changelog resultados breves. Biblioteca institucional y registro conservan procedencia y reglas estrictas. Retirar 22 documentos exploratorios de docs y tres briefs/borradores de raíz más un plan histórico de primera lectura después de guardar copia local con SHA-256 e integridad ZIP verificados. No borrar geometrías, fuentes, herramientas, exports de revisión, manuales o ADRs aceptados.

Actualizar el documento dueño; no generar un archivo por cada sesión/ronda. Conservar decisiones aprobadas, propuestas y pendientes separados. La copia local en scratch es recuperación, no documentación activa ni respaldo remoto/publicable.

## Alternativas Evaluadas y Descartadas

- Mantener todo y añadir índice: facilita recuperación, pero perpetúa contradicciones y coste de lectura.
- Borrar sin respaldo: menor volumen inmediato, pero pierde trabajo no registrado en Git.
- Un único documento gigante: centraliza, pero mezcla instrucciones, estrategia, manuales y resultados, dificultando mantenimiento.

## Consecuencias y Compromisos
Menos documentos activos y fuentes claras por tema. El historial narrativo completo requiere el ZIP local; los ADRs y snapshots conservan su función histórica. El artefacto de publicación debe revisarse aparte para no distribuir material interno: este cambio no altera el workflow.

## Criterios de Verificación
Integridad ZIP/SHA-256; hashes de archivos protegidos sin cambios; referencias activas y JSON válidos; preflight/i18n y diff check. Registrar el resumen de la limpieza en CHANGELOG.
