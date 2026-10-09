# ADR-0015: Configuración de despliegue Workers Static Assets

## Estado
Aceptado para corregir el despliegue iniciado por Tomás.

## Fecha
2026-10-08

## Autor / Participantes
Tomás / Codex

## Contexto
Workers Builds generó correctamente el paquete público de 21 archivos, pero Wrangler rechazó el despliegue por falta de compatibility_date y advirtió que el nombre del Worker no estaba definido.

## Decisión
Mantener la configuración en wrangler.jsonc: nombre exacto del Worker comunicado por CI, compatibility_date 2026-10-06 sugerida por el error y assets en build/public con página 404. Build en la raíz: python tools/build_public_site.py; despliegue: npx wrangler deploy. No se requiere script Worker ni framework para este sitio estático. Se conserva el empaquetado del ADR-0013 con logos según ADR-0014.

## Alternativas Evaluadas y Descartadas
- Parámetros manuales de fecha y nombre en el dashboard: resuelven el error pero dejan la configuración fuera del repo.
- Publicar la raíz del repo: descartado porque incluye documentos y exploraciones.

## Consecuencias y Compromisos
Workers Builds puede leer una configuración reproducible. Confirmar el resultado remoto y dominio después del despliegue; la configuración no prueba que la migración haya concluido. GitHub Pages, DNS y correo se conservan durante esta transición.

## Criterios de Verificación
Validar JSON, generación del paquete y diff; comprobar despliegue remoto, portada, logos y página 404 antes de declarar la migración completada.
