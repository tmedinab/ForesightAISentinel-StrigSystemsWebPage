# ADR-0005: Procedencia y representaciones conceptuales

## Estado
Aceptado para la primera implementación local autorizada por Tomás.

## Fecha
2026-10-05

## Autor / Participantes
Tomás (tratar assets previos como origen no verificado) / Codex.

## Contexto
La estrategia prescribía planos y telemetría con geometría/cifras sin evidencia registrada. La portada utilizaba hardware no verificado como imagen social y logo estructurado, y prometía microsegundos de inferencia.

## Decisión
Mantener identidad y stack vanilla. SVG de nodos abstractos en figura de arquitectura conceptual rotulada ES/EN. Mostrar hoy/próximo/visión y capacidades en desarrollo/validación. No dibujar Noctua como diseño terminado sin CAD aprobado. Imagen social de marca con TRL 3; retirar `Organization.logo` hasta contar con asset confirmado.

Registro de assets en `docs/ASSET_REGISTER.json`; toda distribución autónoma conserva rótulo visible. El plan distingue representación y evidencia.

## Alternativas evaluadas y descartadas
- Blueprint acotado: aparenta geometría aprobada que no consta.
- Aeronave fotorrealista generada: menor trazabilidad y coherencia entre vistas.
- Fotos previas como evidencia de laboratorio: procedencia no confirmada.

## Consecuencias y compromisos
El sitio explica el sistema sin inventar hardware/mediciones. Producción de planos y fotos depende de originales. Geometría estática, sin dependencias nuevas de runtime.

El dossier conserva revisión técnica y traducción pendientes. Su gate cliente no protege información confidencial; se corrige el aviso de alcance. Este ADR no valida todas sus cifras ni metodología.

## Verificación
i18n/preflight, inspección de ES/EN y desktop/móvil, contacto/brief, PNG social 1200 × 630 y 200 local. Registrar que el preflight no audita todo el dossier ni mide rendimiento.
