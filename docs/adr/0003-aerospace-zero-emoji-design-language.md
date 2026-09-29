# ADR-0003: Lenguaje Visual DeepTech y Política Estricta de Cero Emojis

## Estado
**Aceptado**

## Fecha
2026-09-28

## Contexto
En iteraciones tempranas de la web se utilizaron emojis de consumo comunes (🚀, 🛡️, 🌲, ⚠️, ❌, etc.) como iconografía de apoyo en tarjetas, dropdowns y modales. 

Sin embargo, el perfil de Strig Systems como startup de ingeniería aeroespacial y sistemas autónomos de defensa para clientes institucionales exigió elevar radicalmente el rigor estético. Los emojis de consumo degradan la percepción de seriedad técnica, lucen infantiles en contextos corporativos de defensa y se renderizan de manera inconsistente según el sistema operativo (Windows, macOS, Linux, Android).

## Decisión
Se declara la **Prohibición Total de Emojis de Consumo** en todo el proyecto y se adopta un sistema visual táctico aeroespacial compuesto por:
1. **Micro-Iconografía SVG en Línea:**
   * Iconos SVG lineales optimizados: `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.8"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
   * Adaptación automática al color del tema (`currentColor`) con transiciones en hover.
2. **Glifos Tipográficos Tácticos:**
   * `◈` (diamante militar/aeroespacial) como viñeta de producto e identificación de hardware.
   * `•` (bullet de telemetría HUD) como indicador de pulso o estado de subsistema.
   * `│` (separador vertical fino) para segmentación en cápsulas de telemetría.
   * `▾` / `▲` (indicadores discretos) para controles de acordeón y dropdowns.
3. **Tags Tácticos Monospace:**
   * Etiquetas tipográficas con formato `[TRL 3]`, `[FHSS 900MHz]`, `[EO/IR LWIR]`, `[NV-JETSON]` utilizando la fuente `JetBrains Mono`.

## Consecuencias y Compromisos

### Positivas
* Aspecto visual vanguardista, sobrio y de grado industrial militar.
* Consistencia tipográfica e iconográfica 100% idéntica en cualquier pantalla y sistema operativo.
* Mayor compresión y rendimiento al eliminar glifos dependientes de fuentes del sistema de emojis.

### Verificación
Auditoría con regex unicode de emojis sobre todos los archivos del repositorio:
```bash
node -e "const fs = require('fs'); const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1FA00}-\u{1FAFF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F1FF}]/u; ['index.html', 'styles.css', 'script.js', 'terms.html', 'privacy.html'].forEach(f => { const m = fs.readFileSync(f, 'utf8').match(new RegExp(emojiRegex, 'gu')) || []; console.log(f, 'Emojis:', m.length); });"
```
El resultado debe ser estrictamente `0` en todos los archivos.
