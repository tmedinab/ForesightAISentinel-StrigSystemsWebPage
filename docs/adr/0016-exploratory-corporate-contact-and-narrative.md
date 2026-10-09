# ADR-0016: Contacto corporativo exploratorio y narrativa coherente

## Estado
Aceptado por Tomás. Refina el contacto del ADR-0013; conserva su publicación compacta y los logos según ADR-0014.

## Fecha
2026-10-09

## Autor / Participantes
Tomás / Codex

## Contexto
La revisión simulada encontró utilidad forestal concreta tardía, invitación exploratoria seguida de inscripción formal y aclaraciones de madurez repetidas. Tomás aprobó los ajustes y el formulario general de Strig con contexto Athene, precisando «terreno» en lugar de «predio». Informó distintas etapas académicas del equipo y eventual salida de Pablo sin confirmar.

## Decisión
Adelantar detección de presencia de personas e indicios de incendio, con revisión humana del contexto y sin reconocimiento de identidad ni determinación de intención. Conservar titular y familia A. Concentrar madurez en estado visible y nota conceptual; describir formación del equipo sin atribuir titulación a todos, manteniendo a Pablo por ahora. Ubicación Concepción, Chile.

Contacto general con selector nativo de motivo: Athene/vigilancia y posibles pruebas, colaboración o consulta general. Nombre, correo y mensaje obligatorios; organización y teléfono opcionales. Consentimiento breve vinculado a privacidad; términos siguen disponibles en footer. Retirar campos de horarios, región, clasificación territorial e inversión/NDA. Cabecera abre consulta general; invitaciones de Athene seleccionan su contexto. Sin promesa de reunión ni plazo.

Mantener FormSubmit y correo directo existentes. Validar campos, conservar payload en fallback mailto y mostrar éxito sólo ante aceptación explícita del proveedor; controlar envío duplicado y timeout. Mantener foco, Escape, navegación de teclado y traducción de motivos/estados. Pruebas con respuestas simuladas, sin correo externo.

## Alternativas Evaluadas y Descartadas
- Mantener tres pestañas con formularios de inscripción/reunión/NDA: sobrecarga y expectativas que no corresponden al contacto inicial.
- Contacto exclusivo de Athene: limita el canal corporativo; contexto preseleccionado permite cubrir ambos roles.
- Retirar a Pablo por su posible salida: descartado mientras su participación no se confirme con él.

## Consecuencias y Compromisos
Recorrido más breve y coherente con desarrollo experimental. Las condiciones técnicas de pruebas se definen en conversación, sin inventarlas en la web. Los roles y composición del equipo deberán actualizarse cuando se confirmen cambios.

## Criterios de Verificación
Preflight e i18n, JavaScript válido, cuatro anchos ES/EN sin desbordamiento, logos y modales, contexto de apertura, selector e idioma, mensaje/consentimiento obligatorios, foco, fallo de red con mailto completo, rechazo y aceptación simulados, y recursos internos excluidos del paquete.
