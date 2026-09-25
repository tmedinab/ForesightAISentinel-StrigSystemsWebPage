---
document_id: FAI-MVP-01-GESTION-BRIEFING-WEB-001
title: "Briefing para el agente de programación: correcciones de strigsystems.tech"
scope: mvp
fecha: 2026-09-24
estado: listo para entregar; decidido por Tomás en DEC-01-Z
confidencialidad: INTERNO.
---

# Briefing: correcciones de `strigsystems.tech`

> Documento autocontenido para pasar al agente que mantiene la web. Fuente: [`REVISION_WEB_2026-09-24.md`](REVISION_WEB_2026-09-24.md).

## 1. Contexto y decisiones (ya tomadas por el dueño)

- **Marca:** Athene = plataforma; **Noctua** = primer dron que se diseñe o integre; **Nest** = estación en tierra (no está decidido si será automatizada algún día). Se mantienen estos nombres en la web.
- **La web es un pitch de visión de producto y de proyecto.** Debe dejar **clara la hoja de ruta y en qué punto estamos hoy**. Todo lo que aún no está respaldado por el diseño se **rotula** como visión u objetivo, no como capacidad actual.
- **Se retiran los precios públicos** (no hay referencia de costos ni de la oferta todavía).
- Hoy el proyecto es un **prototipo en TRL 3** (concepto validado en análisis y laboratorio), con campañas **experimentales en predio privado**, operación **VLOS**, célula comercial modificada. No hay servicio operativo.

## 2. Tarea A: retirar (obligatorio)

1. **Precios y ahorros:** US$7.500/mes por base, US$64.000 vs US$37.500, "−40 %/−41 %", "> US$44.000 evitados", y la meta `og`/`description` que dice "ahorro de hasta el 40 %".
2. **Calculadora de retorno** completa (sección y JS). Se puede reemplazar por un bloque cualitativo "cómo pensamos el costo" sin cifras.
3. **Starlink** en el diagrama de enlace (paso 03) y en la simulación de alerta (`script.js`, mensaje "Uplink Satelital Starlink"). No está en la arquitectura.
4. **Cifras de rendimiento sin medición:** "< 40 ms" de inferencia, "modelos multimodales ligeros", "100 % de visión / cobertura", "sin sombra topográfica", "Cero exposición humana directa" como absoluto.
5. **"Gestión de cumplimiento DGAC", "BVLOS segregado", "operación conducida"** como servicio actual.

## 3. Tarea B: rotular o corregir (cada valor, con la fuente)

| Dónde dice | Cambiar a | Estado del dato |
| --- | --- | --- |
| Radio 15 km, 50.000 ha por estación | "Objetivo de producto". Hoy: radio de **1 km** en predio piloto, VLOS | Supuesto |
| Autonomía "hasta 90 min" | "**45–60 min** de diseño (meta 45)" | Diseño; se confirma con banco de empuje |
| "Despegue y aterrizaje 100 % autónomos desde estación de acople"; "1 operador supervisa 5 cuadrículas" | Visión de Nest y de producto, rotulada "**visión**". Hoy: despegue desde claro, operador en VLOS, **autorización humana** de la disuasión | Visión |
| Alerta "< 5 s" (métrica y tabla) | "Detección en segundos; alerta total en **minutos** (objetivo ≤ 3 min)" | Meta blanda |
| "< 5 % falsas alarmas" | "**Meta** < 5 %; aceptación del MVP < 10 %" | Meta |
| Alerta llega a la "cabina de la camioneta", FHSS "> 20 km, margen > 6 dB" | "La alerta llega a la **estación de operador**; el despacho a brigadas se define con un partner de pilotaje". Sacar 20 km y el margen | En definición |
| Viento 45 km/h, −5 a +45 °C | Viento hasta ~**10 m/s (36 km/h)**; quitar el rango térmico hasta confirmarlo | Envolvente de la célula |
| "Antes de que nazca el incendio" | "Detecta **actividad humana** visible desde 100 m de altura; el fuego incipiente es objetivo secundario" | Diseño |
| Ventana "10 h (20:00–06:00)" como métrica | "Noche" sin cifra, o citar la fuente. CONAF prepara vuelos nocturnos 2026-27 | Sin respaldo |
| Paracaídas "pirotécnico autónomo", "tolerancia a pérdida de motor" | "Paracaídas balístico de recuperación (en diseño)"; quitar la tolerancia a pérdida de motor | En diseño |
| "US$130M/año (CORMA)" | Quitar o reemplazar por una cifra con fuente primaria. Sirve: "**99,7 %** de los incendios son de origen humano (CONAF, 2003-2023)" | Cifra en verificación |
| "Noctua-01 célula propietaria" | "**Noctua**: primer dron de la plataforma. Hoy se valida sobre una plataforma comercial adaptada" | Marca decidida |

**Regla general:** cada número lleva una etiqueta visible (`hoy`, `objetivo`, `visión`) y, si hay fuente, un enlace o nota.

## 4. Tarea C: agregar

1. **Sección "Hoja de ruta y estado"** (tras el hero o antes de Programa Piloto). Línea de tiempo con estados *hecho / en curso / próximo*. Contenido inicial (fechas a confirmar con Tomás antes de publicar):
   - **Hoy:** diseño de sistema completo y prototipo en análisis (TRL 3). Requisitos, arquitectura y pruebas definidos.
   - **Oct–dic 2026:** plataforma hexarrotor de pruebas y demo en Gearbox (enero 2027).
   - **Feb 2027:** validación HITL en simulación.
   - **Jun 2027:** validación técnica y comercial (CORFO Semilla Inicia).
   - **Después:** Noctua (VTOL propio o integrado) y Nest.
2. **Disuasión con autorización humana** (estrobo + sirena; el operador siempre autoriza). Es el diferenciador principal; hoy no aparece.
3. **Georreferenciación:** coordenadas para el despacho con precisión objetivo de metros, y la condición: exige modelo de terreno cargado del área.
4. **Evidencia auditable** de cada patrullaje (útil para aseguradoras y para la central).
5. **Página o bloque de privacidad de imágenes de personas:** qué se graba, retención y base legal. Cambiar la referencia a la Ley 19.628 por "normativa de protección de datos vigente (Ley 21.719 desde 2026-12-01)" y **pedir la revisión de Tomás y Richard**.
6. **FAQ corto:** humo y niebla, viento, falsas alarmas, quién responde por el vuelo, qué no hace el sistema hoy.
7. **Bloque "Cómo trabajamos con socios"**: piloto de validación conjunta (ver §5).

## 5. Sugerencias de estrategia

1. **Contar la historia en escalera de credibilidad**: problema (99,7 % humano, brecha nocturna) → qué hace Athene → **qué tenemos hoy** → hito verificable siguiente. Un gerente de protección confía más en un roadmap honesto con fechas que en cifras absolutas que puede desmentir.
2. **Cambiar el CTA principal.** "Postular a piloto operativo" promete un servicio que no existe. Proponer: **"Sumarse al programa de validación 2026-27"** (co-diseño con un predio piloto). El resto del embudo (formulario, briefing de 15 min) se queda.
3. **Segmentar la entrada por audiencia**, con un enlace por cada una: *forestales* (protección), *Bomberos/CONAF/SENAPRED* (respuesta), *aseguradoras* (evidencia), *inversionistas y academia*. El diseño ya identifica estos actores.
4. **Liderar con "actividad humana + disuasión", no con "fuego".** Es lo que el sistema hace primero y lo que lo distingue de satélites y torres.
5. **Prueba visual honesta:** cuando exista, un video de 60–90 s de la demo de Gearbox o de la simulación, rotulado como tal, vale más que todas las tablas. Mientras tanto, usar renders rotulados "concepto".
6. **Un solo archivo de datos** (`content.json` o similar) con todas las cifras y sus etiquetas, del que salen el HTML, el ES/EN y el brief imprimible. Hoy las cifras están duplicadas en tres sitios.
7. **Consistencia de identidad:** un solo correo por persona (`tomas@` y `tmedina@` conviven), y solo los roles que el equipo confirme. Confirmar con cada persona su aparición y con la UdeC y CORFO el uso de sus nombres y logos.
8. **Higiene técnica:** `robots.txt`, `sitemap.xml`, `og:image` de marca, probar los dos formularios, declarar en la política de privacidad que se envían por `formsubmit.co`, y mover el segundo formulario a un buzón de equipo.
9. **Regla de proceso:** antes de publicar cualquier cifra nueva, consultarla con Tomás; se registra en un `CLAIMS` con estado `hoy/objetivo/visión`.

## 6. Criterio de terminado

- Ningún precio, ahorro en % ni cifra en US$ visible en ES, EN, brief ni meta tags.
- Ninguna afirmación de la Tarea B queda sin etiqueta o sin corregir.
- Existe la sección de hoja de ruta con estados.
- Los términos "Starlink", "BVLOS" y "cumplimiento DGAC" no aparecen como capacidad actual.
- Los formularios envían y llegan correo de prueba.
