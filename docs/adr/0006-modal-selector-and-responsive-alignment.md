# ADR-0006: Alineación de selectores y geometría de modales

## Estado
Aceptado.

## Fecha
2026-10-05

## Contexto
La inspección móvil encontró que HTML utiliza `.modal-dialog`, `.modal-close` e `.intent-selector-pills`, mientras CSS conservaba `.modal-window`, `.modal-close-btn` e `.intent-selector-wrap`. El panel sin restricción de altura dejaba el cierre fuera del viewport.

## Decisión
Los selectores actuales reciben los estilos compartidos conservando los alias anteriores. Limitar altura al viewport dinámico, permitir scroll interno y adaptar padding en móvil. Mantener cierre del brief dentro de su barra. Usar radio de token y z-index 1050 de AGENTS. Declarar diálogos modales y excluir controles ocultos de la trampa de foco.

## Alternativas
Cambiar HTML al nombre histórico: innecesario; los actuales describen el componente y permiten conservar compatibilidad. Forzar clic en las pruebas: descartado porque ocultaría el fallo real.

## Consecuencias
El cierre resulta alcanzable en móvil y el panel mantiene límites de viewport. La trampa de foco ya no selecciona campos de intención ocultos. El foco inicial se sincroniza con frames, reintenta de forma acotada mientras permanece fuera del diálogo y se cancela al cerrar; respeta el foco que el usuario haya colocado dentro. Sin dependencias nuevas.

## Verificación
Abrir/cerrar con clic real en 320/390/768/1024/1440 px, ES/EN. Escape, ciclo Tab/Shift+Tab y restauración de foco, más i18n/preflight. No probar envío externo de formularios.
