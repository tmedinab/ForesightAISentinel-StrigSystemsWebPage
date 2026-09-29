# ADR-0004: Geometría de Navegación, Posicionamiento de Menús Desplegables y Puente de Hover

## Estado
**Aceptado**

## Fecha
2026-09-28

## Contexto
Los menús desplegables del header institucional (`#tecnologia`, `#piloto`, `#equipo`) presentaban un problema crítico de montaje visual:
1. El contenedor `.nav-dropdown-wrap` tenía altura automática determinada por el botón (`~32px`), estando centrado verticalmente dentro de la barra de navegación de `4.6rem` (`73.6px`).
2. Al configurarse con `top: calc(100% + 0.5rem)`, el `100%` calculaba respecto a la altura del botón, ubicando la parte superior del menú a `Y = 60.8px` desde el borde superior de la pantalla.
3. Dado que la barra termina en `Y = 73.6px`, el menú comenzaba **`12.8px` por dentro de la barra**, solapándose sobre el borde inferior y el texto del menú.
4. Adicionalmente, el pseudo-elemento del puente de hover (`.nav-dropdown-menu::before`) era sobreescrito por la regla `.glass-panel::before` situada al final del archivo CSS, destruyendo el puente y provocando desconexiones de hover al mover el puntero.

## Decisión
Se establece la siguiente regla geométrica obligatoria para el header y la navegación:
1. **Contenedores de Altura Completa:**
   * `.header-inner`, `.nav-links` y `.nav-dropdown-wrap` DEBEN tener `height: 100%`.
   * Esto fija la base de `.nav-dropdown-wrap` exactamente en la coordenada `Y = 73.6px` (borde inferior de `.site-header`).
2. **Separación Limpia de Panel Flotante:**
   * `.nav-dropdown-menu` se posiciona con `position: absolute; top: calc(100% + 8px);`.
   * El menú inicia en `Y = 81.6px`, garantizando una separación limpia de 8 píxeles entre la barra y el panel flotante.
3. **Puente de Hover de Alta Especificidad:**
   * El selector `.nav-dropdown-wrap .nav-dropdown-menu::before` se declara con:
     ```css
     .nav-dropdown-wrap .nav-dropdown-menu::before {
       content: '' !important;
       position: absolute !important;
       top: -14px !important;
       left: 0 !important;
       right: 0 !important;
       height: 14px !important;
       width: 100% !important;
       border: none !important;
       background: transparent !important;
       pointer-events: auto !important;
       border-radius: 0 !important;
     }
     ```
   * Esto cubre los 8px de separación más 6px de solape interno en la barra con especificidad (0, 2, 1), impidiendo que cualquier regla general de `.glass-panel::before` interfiera con el puntero.
4. **Cinemática de Apertura:**
   * Animación con micro-desplazamiento descendente: inicia en `transform: translateY(-6px)` con `opacity: 0` y se asienta en `translateY(0)` con `opacity: 1`.

## Consecuencias y Compromisos

### Positivas
* El menú nunca se solapa sobre la barra de navegación ni interfiere con los botones adyacentes.
* El desplazamiento del mouse entre el botón y el panel es 100% fluido y libre de parpadeos.
* Compatible con cualquier nivel de zoom del navegador o factor de escala rem.
