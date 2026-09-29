# ADR-0002: Sistema de Paridad Bilingüe Estricta (Strict i18n Parity)

## Estado
**Aceptado**

## Fecha
2026-09-28

## Contexto
Strig Systems opera localmente en Chile (con fondos de CORFO y validación con actores como Arauco, CMPC y CONAF), pero proyecta su tecnología deeptech de defensa y aeroespacial hacia mercados internacionales, inversores globales de Silicon Valley / Europa y fondos de dual-use technology.

Por ende, la plataforma debe ser **100% bilingüe (Español e Inglés)** sin tolerar desincronizaciones donde una versión tenga textos desactualizados o faltantes.

## Decisión
Se implementa un motor i18n nativo en [`script.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/script.js) gobernado por el siguiente contrato arquitectónico:
1. **Atributo de Marcado:** Todo nodo textual interactivo o de contenido en [`index.html`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/index.html) lleva `data-i18n="clave_identificadora"`.
2. **Tablas Espejadas:** En `script.js`, el objeto `translations` contiene dos ramas hermanas: `translations.es` y `translations.en`.
3. **Paridad Total:** Cada clave que exista en `translations.es` DEBE existir obligatoriamente en `translations.en`, y viceversa.
4. **Verificación Automatizada:** Se implementa el script [`scratch/verify_i18n.js`](file:///c:/Users/Tomas/PycharmProjects/ForesightAISentinel-StrigSystemsWebPage/scratch/verify_i18n.js) que lee `index.html` y `script.js` con Node.js, validando que:
   * `Missing in EN` sea `[]`.
   * `Missing in ES` sea `[]`.
   * `HTML keys missing in translations` sea `[]`.

## Alternativas Evaluadas y Descartadas

### Archivos de Traducción Separados en JSON (`es.json`, `en.json`) vía Fetch
* **Ventajas:** Desacoplamiento del código fuente.
* **Desventajas:** Requiere peticiones asíncronas (`fetch`) que causan FOUC (Flash of Unstyled/Untranslated Content) o parpadeo al cambiar de idioma en conexiones lentas; no funciona al abrir `index.html` directamente por protocolo `file:///`.
* **Razón de descarte:** Prioridad de conmutación instantánea de idioma (0ms) en memoria y compatibilidad offline.

## Consecuencias y Compromisos

### Positivas
* Conmutación de idioma en tiempo real sin recarga de página.
* Persistencia del idioma seleccionado en `localStorage` con fallback al idioma preferido del navegador (`navigator.language`).
* Imposibilidad de que queden cadenas sin traducir gracias al script de auditoría.

### Restricciones Derivadas
* Todo desarrollador o agente de IA que agregue o modifique un texto en la web DEBE actualizar ambos diccionarios (`es` y `en`) y ejecutar:
  ```bash
  node scratch/verify_i18n.js
  ```
