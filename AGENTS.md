# AGENTS.md — Web Strig Systems / Athene

Reglas operativas vigentes, 2026-10-08. Leer el [índice documental](docs/README.md), el documento dueño del cambio y los ADRs aplicables. Las rondas históricas son antecedentes, no instrucciones actuales. Las instrucciones explícitas de Tomás prevalecen.

## Alcance, marca y evidencia

- Portada institucional compacta; no restaurar automáticamente componentes de la experiencia ampliada/dev. Posicionamiento aprobado: «Empresa chilena de ingeniería aeroespacial y sistemas autónomos» (ADR-0011). Colaboración exploratoria con Armada de Chile sin formalizar: no anunciar.
- Familia A autorizada para web local (ADR-0008): Strig H1 / Campo y Athene frontal abierto con retornos R11/R12. Usar `assets/img/brand/web/`. Strig es empresa; Athene primer producto. Mantener contornos y roles; B/C son alternativas sin adopción. No hay master final cerrado. Decisiones y fundamentos en [estudio](docs/ESTUDIO_MARCA_STRIG_ATHENE.md).
- Narrativa aprobada, equipo y contactos en [plan](docs/PLAN_ESTRATEGICO_MARCA_Y_ASSETS_VISUALES.md). Tomás también es cofundador. No inventar LinkedIn: Carlos/Richard/Tomás tienen URLs suministradas; Ananda/Pablo sin confirmar.
- Estado declarado TRL 3: no afirmar operación comercial ni prestaciones medidas sin fuente. Autonomía histórica contradictoria y otros números son objetivos hasta evidencia aprobada. No usar objetivos como especificación garantizada.
- Consultar `docs/ASSET_REGISTER.json`: assets anteriores de origen no verificado no prueban ensayos. Ilustraciones/renders con rótulo cercano y en exports. Sin CAD aprobado no dibujar planos acotados; no afirmar visión térmica a través de suelo/vegetación opaca.
- SVG de arquitectura activo `assets/img/tech/athene-architecture.svg`: representación conceptual, no diseño de Noctua ni interfaz real. Consultar [método](docs/METODOLOGIA_ILUSTRACION_ARQUITECTURA.md).
- Para Corfo/IncubaUdeC/Red IU leer [biblioteca institucional](docs/brand/institutional/README.md) y manuales. Conservar originales/hashes, sin deformar, recolorear, filtrar, aislar escudo ni inventar Gearbox. Relaciones confirmadas por Tomás; aplicación gráfica local con validación IU p.18 pendiente. La biblioteca mantiene las reglas estrictas; no duplicarlas aquí.
- Correos actuales: `contacto@strigsystems.tech` y `tmedina@strigsystems.tech`, sin aclaraciones personales en UI. Sede: Concepción, Chile; no coordenadas geográficas crudas. .cl/Cloudflare en migración pendiente, no cambiar correo/hosting por inferencia.

## Contratos de implementación

- HTML semántico, CSS con variables y Grid/Flex, JavaScript ES6+ vanilla. Sin React/Vue/Tailwind ni dependencias de runtime nuevas. Herramientas de desarrollo separadas del frontend. Fuentes/servicios existentes son dependencias de red; no prometer rendimiento o seguridad universales.
- Cero emojis en archivos propios. Usar micro-iconos SVG `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, ancho 1.8 y terminaciones redondas, o glifos técnicos sobrios. No añadir etiquetas de hardware sin fuente para decorar.
- Todo texto visible traducible debe usar `data-i18n`; espejo completo `translations.es` / `translations.en` en script.js. Mantener nombres/arte institucional original y etiquetas traducidas externas.
- Space Grotesk: titulares, peso 700 máximo cargado. Outfit: texto 400/500/600. JetBrains Mono: cifras/metadatos breves. No convertir párrafos en telemetría ni simular pesos no disponibles.
- Usar tokens de `:root`. Fondos oscuros, cian/ámbar funcionales y secundarios legibles. Sin paletas púrpura SaaS añadidas. Paneles angulares, retículas discretas y radios <=16px salvo píldoras/retratos. Medir contraste AA, foco visible y lectura real.
- Respetar cabecera flexible actual, jerarquía corporativa/producto y contenedor 1200px. No reinstalar altura fija antigua de 4.6rem. Revisar escritorio/móvil al tocar geometría.
- Dropdowns: separación 8px; puente invisible de hover 14px con selector específico `.nav-dropdown-wrap .nav-dropdown-menu::before` y precedencia suficiente frente a `.glass-panel::before`. Apertura -6px a 0; comprobar continuidad al mover cursor. Anclas con margen/scroll-padding actual 5.2rem: verificar que header no tape títulos.
- Capas: fondos 1–10, contenido 100, header 1000, dropdowns 1001, modales 1050, toasts 2000. Evitar cambios globales sin inspeccionar efectos.
- Animaciones bajo control de visibilidad: pausar fuera del viewport, al ocultar documento y con motion reducido. No mostrar telemetría simulada como datos reales.
- Formulario: preservar fallback mailto con campos completos si AJAX falla. Contacto y briefing accesibles sin fricción artificial; no inventar entrega de correo comprobada. Permitir impresión del briefing.
- Lenguaje técnico claro de Chile/LATAM, sin promesas absolutas, jerga bélica forzada o advertencias legales intimidantes. Usar aeronave/plataforma aérea, no «célula». No restaurar funciones de disuasión sólo por aparecer en briefs antiguos.

## Documentación y decisiones

Actualizar un documento dueño por tema según [docs/README.md](docs/README.md). Sin documentos por cada sesión o ronda ni copies del mismo brief. Changelog breve de resultados; decisiones duraderas en ADR.

ADR obligatorio al cambiar arquitectura, geometría global crítica, herramientas/dependencias, política de marca/madurez/nomenclatura o decisiones costosas de revertir. Seguir [ADR-0000](docs/adr/0000-adr-protocol-and-template.md), numeración correlativa. No borrar ni reescribir ADRs aceptados: registrar la nueva decisión y relación con anteriores. Los snapshots de entrega profesional y originales/manuales se conservan.

## Verificación antes de cerrar

```sh
node scratch/preflight_check.js
node scratch/verify_i18n.js
git diff --check
```

Exigir cero emojis y cero claves ES/EN/HTML faltantes. Para cambios visuales revisar ES/EN, escritorio/móvil, foco, menús/modales, assets y consola en el servidor realmente activo; no asumir puerto fijo. Para docs comprobar referencias y JSON. Para institucional, `python tools/institutional_assets.py --verify` con Pillow. Validación automatizada no equivale a aceptación visual, evidencia del producto o aprobación institucional. No publicar, enviar mensajes externos ni instalar herramientas por una mención histórica.
