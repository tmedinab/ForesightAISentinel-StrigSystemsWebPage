# ADR-0001: Arquitectura Web Pura Vanilla (Zero Runtime Dependencies)

## Estado
**Aceptado**

## Fecha
2026-09-28

## Contexto
La plataforma web de Strig Systems representa a una startup deeptech de ingeniería aeroespacial y defensa. Los clientes objetivo son empresas industriales de alta exigencia (forestales, celulosas, operadoras de infraestructura crítica) y organismos gubernamentales (CONAF, CORFO). 

El sitio requiere:
1. Rendimiento extremo: Carga instantánea (<100ms) sin bloqueos por hidratación ni descarga masiva de paquetes JavaScript.
2. Soberanía técnica y seguridad: Cero vulnerabilidades provenientes de la cadena de suministro de npm (`node_modules`), garantizando un despliegue estático ultra-seguro y resiliente.
3. Control total del diseño: Estética aeroespacial personalizada con micro-interacciones, simulación de radar HUD, telemetría táctica y cálculo de ROI sin ataduras a librerías de componentes prediseñados de consumo.

## Decisión
Se adopta una **arquitectura 100% Vanilla Web estándar**:
* **Estructura:** HTML5 semántico nativo.
* **Estilos:** CSS3 moderno utilizando Custom Properties (variables CSS), Flexbox, CSS Grid, `backdrop-filter` para glassmorphism y animaciones aceleradas por hardware vía GPU (`transform`, `opacity`).
* **Comportamiento:** JavaScript ES6+ modular en un único motor de orquestación (`script.js`), estructurado en controladores desacoplados e inicializados en `DOMContentLoaded`.
* **Zero Runtime Dependencies:** Ningún framework en tiempo de ejecución (ni React, Vue, Svelte, Tailwind, Bootstrap, ni jQuery).

## Alternativas Evaluadas y Descartadas

### Next.js / React (SSR / SSG)
* **Ventajas:** Ecosistema rico de componentes, SSR nativo.
* **Desventajas:** Peso inicial elevado (>150KB de runtime JS), complejidad de despliegue, dependencias pesadas, riesgo de rotura con actualizaciones de Node/React.
* **Razón de descarte:** Innecesario para una plataforma institucional e interactiva de una sola página; degrada la velocidad de carga en dispositivos móviles en terreno.

### TailwindCSS
* **Ventajas:** Clases utilitarias rápidas.
* **Desventajas:** Polución del marcado HTML con decenas de clases crípticas, dificultad para definir temas militares/aeroespaciales profundos, dependencia de un paso de compilación (`build/watch`).
* **Razón de descarte:** Impide la limpieza semántica de `index.html` y complica la legibilidad directa del código por parte de desarrolladores y agentes de IA.

## Consecuencias y Compromisos

### Positivas
* Tiempo de carga de primer render (LCP) inferior a 200ms en redes 4G estándar.
* Despliegue directo en GitHub Pages / CDN sin pipelines de transpilación obligatorios.
* Mantenimiento directo: cualquier archivo se puede inspeccionar y editar inmediatamente con herramientas estándar.

### Restricciones Derivadas
* La interactividad reactiva (como el cambio de idioma o el filtrado de simuladores) se gestiona de forma imperativa y limpia mediante selectores DOM estándar (`document.querySelectorAll`, `data-i18n`, etc.).
