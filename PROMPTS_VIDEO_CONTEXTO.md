# Catálogo de Prompts Cinematográficos de Grado Aeroespacial / Defensa
## Generación de Video para Strig Systems & Athene (Sora, Runway Gen-3, Luma Dream Machine, Kling AI)

Este documento contiene los prompts optimizados con terminología técnica de dirección de fotografía aeronáutica y militar para generar videos de contexto hiperrealistas que justifiquen y acompañen la narrativa comercial de Strig Systems.

---

### Prompt 1: Vuelo Nocturno del VTOL en el Bosque (Hero / Fondo Principal)
* **Objetivo:** Mostrar la silueta sigilosa del vector VTOL con alas y rotores basculantes volando a baja cota sobre los bosques templados de la Macrozona Centro-Sur de Chile durante la noche.
* **Aspect Ratio:** 16:9
* **Prompt para IA (Inglés Técnico):**
```text
Cinematic aerial drone footage, sleek matte-black carbon-fiber hybrid VTOL unmanned aircraft with forward-swept wings and dual tilt-rotors flying low altitude over misty temperate pine forest and rugged mountain valleys in South-Central Chile at midnight. Soft cold moonlight illuminating dense forest canopy with creeping volumetric fog. High-tech bi-spectral optical-thermal gimbal actively stabilizing and swiveling underneath the nose with faint infrared indicator. 4k resolution, hyper-realistic, defense contractor aerospace promotional film aesthetic, shot on 35mm anamorphic lens, moody dark teal and amber tones, photorealistic motion blur, 24fps.
```

---

### Prompt 2: Feed Térmico Aéreo FLIR en Visión Ironbow (Simulador C2 / Tecnología)
* **Objetivo:** Reproducir la perspectiva aérea auténtica del sensor térmico bi-espectral discriminando un precursor térmico (fogata o vehículo) en la oscuridad.
* **Aspect Ratio:** 16:9
* **Prompt para IA (Inglés Técnico):**
```text
Military-grade FLIR aerial thermal surveillance perspective looking down at a forest road intersection in pitch black darkness. Authentic Ironbow thermal palette: deep cold indigo and violet foliage with vivid glowing neon orange and white hot thermal signatures of a small early campfire and two human heat figures moving near tree cover. High-tech tactical HUD overlay with coordinate numbers scrolling, crosshair targeting reticle pulsing red on heat anomaly, digital optical zoom tracking smoothly. Photorealistic FLIR reconnaissance camera feed, 4k.
```

---

### Prompt 3: Despegue Vertical Autónomo desde Estación de Acople (Nest) al Amanecer
* **Objetivo:** Demostrar la independencia de pista y la autonomía operacional total del sistema Athene.
* **Aspect Ratio:** 16:9
* **Prompt para IA (Inglés Técnico):**
```text
Medium shot, ruggedized weatherproof military drone docking station with solar panels and satellite link on a remote clearing high on a forested mountain ridge at blue hour dawn. The motorized mechanical roof opens smoothly, releasing faint cooling vapor. A sleek carbon-fiber hybrid VTOL drone autonomously ascends vertically into the air with powerful quad-rotor thrust, tilting forward to transition into fixed-wing forward flight toward misty mountain valleys. Industrial engineering precision, rim lighting, cinematic realism, 8k.
```

---

### Prompt 4: Vista A Bordo con Retícula de Puntería y Viento Lateral
* **Objetivo:** Clip corto para el fondo del visor táctico o tarjetas de envolvente de vuelo (45 km/h).
* **Aspect Ratio:** 16:9
* **Prompt para IA (Inglés Técnico):**
```text
Point-of-view camera mounted beneath the wing of an autonomous VTOL aircraft cutting through turbulent night air and low scud clouds above mountain ridges. Wingtip LED navigation strobes pulsing. Downward gimbal camera tracking a distant infrared light source in a dark canyon below. Highly stable gyro motion with subtle aerodynamic vibrations, intense tactical atmosphere, high dynamic range, hyper-detailed carbon fiber wing texture, 4k 60fps.
```

---

### Instrucciones de Integración Web:
Una vez generados los clips (en formato `.mp4` o `.webm`):
1. Guardar en `assets/video/` (ej. `assets/video/vtol_night_flight.mp4`).
2. Optimizar con FFmpeg para web:
   ```bash
   ffmpeg -i input.mp4 -vcodec libx264 -crf 24 -an -movflags +faststart assets/video/hero_bg.mp4
   ```
3. El reproductor ya cuenta con fallback automático a imagen poster si el navegador ahorra batería.
