# ADR-0005: Arquitectura Multi-Página Segmentada por Audiencia y Embudo de Conversión

## Estado
Aceptado

## Fecha
2026-09-30

## Autor / Participantes
Tomas Medina (Founder) / Antigravity AI

## Contexto
El sitio web institucional de Strig Systems (`strigsystems.tech`) operaba históricamente como una SPA (*Single Page Application*) monolítica sobre `index.html` con más de 14 secciones y aproximadamente 14.000 píxeles de longitud vertical. 

La auditoría multidimensional *First-Reader* (realizada por 6 perfiles de evaluación: Inversor DeepTech, Gerente de Operaciones Forestales, Diseñador UI/UX, Profesor de Aeronáutica, Periodista y Mentor de Aceleradora) reveló una fricción crítica: **la fatiga de lectura y la mezcla de intenciones**. Un evaluador de aceleradora (ej. Chris Klaus en Fusen World / Demo Day Gearbox) busca tesis de inversión, foso defensivo y mercado en 60 segundos; un gerente forestal busca detalles operativos, protocolo de despacho nocturno y condiciones de pilotaje; mientras que el público general y la comunidad académica de la Universidad de Concepción buscan la historia humana, el propósito y formas de colaboración.

Mantener todo el contenido en una única página monolítica diluía la propuesta de valor para cada perfil y transmitía una impresión desproporcionada de madurez para una startup en TRL 3.

## Decisión
Se adopta una **arquitectura multi-página estática pura (Vanilla)** compuesta por una página principal concisa y 3 subpáginas especializadas por audiencia:

1. **`index.html` (Landing de Embudo Rápido):** Reducción de 14 a 7 secciones de alto impacto (~60 segundos de lectura). Contiene: Hero con frase llana, Dashboard de métricas, Diagnóstico territorial (3 tarjetas de problema), Solución resumida en 30 segundos, Validación industrial & equipo, Tarjetas de 3 caminos (embudo) y Contacto.
2. **`venture.html` (Inversores y Aceleradoras):** Diseñada específicamente para Chris Klaus (Fusen World), jurados de Gearbox, fondos Seed/Pre-Seed y evaluadores de subsidios CORFO. Contiene: Tesis de inversión, Dimensionamiento de mercado (TAM/SAM/SOM), Foso tecnológico (4 pilares defensivos), Timeline de tracción, Equipo con foco operacional, Modelo IaaS y acceso directo al Executive Brief One-Pager. **Esta página no figura en el menú de navegación general**; se distribuye mediante enlaces directos en cold emails y a través de la tarjeta de embudo en la landing.
3. **`programa.html` (Clientes Industriales y Forestales):** Diseñada para gerentes de protección patrimonial y jefes de despacho (Arauco, CMPC, CONAF). Contiene: Diagnóstico territorial completo, Benchmark táctico honesto (con badges ámbar), Protocolo de despacho nocturno 02:00 AM, Modalidad de pilotaje por negociar (cero CAPEX para el cliente) y FAQ operacional técnica.
4. **`nosotros.html` (Público General, Prensa y Comunidad UdeC):** Historia de los 5 ingenieros aeroespaciales de la Universidad de Concepción, propósito de impacto territorial, glosario técnico en lenguaje cotidiano y llamado a talento joven.

### Principios de Implementación
* **Cero dependencias de framework:** Cada página es un archivo HTML5 semántico puro independiente que comparte `styles.css` y el motor modular `script.js`.
* **Paridad i18n total:** Cada página utiliza el motor bilingüe nativo con `data-i18n`. `script.js` respeta los títulos de página específicos para evitar sobreescritura ciega de `document.title`.
* **Preservación estética:** Misma identidad visual Aerospace HUD, tokens semánticos, retículas militares y estricta política de cero emojis.

## Alternativas Evaluadas y Descartadas

### Opción A: Mantener la landing monolítica con navegación por anclas (`#anchor`)
* **Ventajas:** Menor cantidad de archivos en el repositorio.
* **Desventajas:** Longitud excesiva (~14.000px), dispersión cognitiva, sobrecarga de información y dificultad para compartir enlaces personalizados con fondos de inversión.
* **Razón de descarte:** Rechazada unánimemente por los 6 perfiles de evaluación *First-Reader*.

### Opción B: Migrar a un framework Jamstack (Next.js, Astro o Vite)
* **Ventajas:** Enrutamiento automatizado y componentes reutilizables precompilados.
* **Desventajas:** Ruptura de la política de Cero Dependencias de Ejecución (ADR-0001), introducción de dependencias de compilación complejas, potencial deuda técnica y riesgo de supply-chain.
* **Razón de descarte:** Incompatible con el mandato de arquitectura Vanilla pura.

## Consecuencias y Compromisos

### Positivas
* **Conversión y retención optimizada:** Cada audiencia encuentra exactamente lo que necesita en menos de 1 minuto sin perderse en contenido ajeno a su perfil.
* **Enlace directo de pitch:** Permite enviar `strigsystems.tech/venture` directamente a inversionistas internacionales con un mensaje 100% calibrado para capital y tracción.
* **Carga instantánea:** Cada archivo HTML pesa menos de 35 KB, asegurando First Contentful Paint (FCP) inferior a 80ms.

### Restricciones Derivadas
* **Mantenimiento de Header y Footer:** Los cambios globales en la barra de navegación o pie de página deben replicarse en las páginas secundarias o modularizarse con cuidado.
* **Auditoría i18n multicriterio:** El script `verify_i18n.js` debe auditar todas las páginas HTML del repositorio para garantizar paridad bilingüe 100%.

## Criterios de Verificación
* `node scratch/verify_i18n.js` debe validar `index.html`, `venture.html`, `programa.html`, `nosotros.html`, `privacy.html`, `terms.html` y `404.html`.
* Verificación regex de cero emojis en todos los archivos.
* Navegación y cambio de idioma funcional en todas las subpáginas.
