# Strig Systems — Web institucional

Sitio estático de Strig Systems y Athene, sistema centinela aéreo en desarrollo para vigilancia forestal nocturna. HTML, CSS y JavaScript vanilla, con interfaz ES/EN. La portada es compacta; dossier/componentes anteriores no implican disponibilidad comercial ni confidencialidad efectiva.

## Trabajar en el proyecto

Leer [AGENTS.md](AGENTS.md) y el [índice documental](docs/README.md). Para preview desde la raíz:

```sh
python -m http.server 8081 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8081/?brand=A`. Si el puerto está ocupado, usar otro libre. El servidor sólo sirve archivos; no requiere build del frontend. No publicar scratch ni respaldos de documentación como parte del sitio.

```sh
node scratch/preflight_check.js
node scratch/verify_i18n.js
```

Node se usa para checks de desarrollo. [Herramientas de marca](tools/brand/README.md) tienen requisitos separados para generación/render; no son dependencias de ejecución de la web.

## Assets y documentación

- [Estudio de marca](docs/ESTUDIO_MARCA_STRIG_ATHENE.md): familia A seleccionada para integración local, alternativas y pendientes.
- [Plan](docs/PLAN_ESTRATEGICO_MARCA_Y_ASSETS_VISUALES.md): textos aprobados, equipo, prioridades y estado de dominio.
- [Arquitectura ilustrada](docs/METODOLOGIA_ILUSTRACION_ARQUITECTURA.md): SVG editable y significado conceptual.
- [Biblioteca institucional](docs/brand/institutional/README.md): originales/manuales y reglas estrictas.
- [Registro de assets](docs/ASSET_REGISTER.json), [ADRs](docs/adr/) y [changelog](docs/CHANGELOG.md).

## Hosting

El repo conserva `CNAME` para `strigsystems.tech` y workflow GitHub Pages al push a main. Tomás compró `strigsystems.cl` y configura DNS en Cloudflare. La migración propuesta a Workers Static Assets + Workers Builds está pendiente; no inferir que el sitio ya está desplegado allí. Los cambios locales requieren commit/push y despliegue para actualizar la web. Mantener correo .tech y sus registros hasta planificar cualquier migración independiente.

El workflow genera `build/public` mediante `python tools/build_public_site.py` y publica sólo portada, páginas legales/404 y assets referenciados. Docs, scratch, exports, dossier y rondas quedan fuera del sitio. La fuente del repo tiene preview institucional; el paquete público conserva menciones textuales mientras la validación gráfica sigue pendiente. No confundir esta exclusión del hosting con privacidad del repositorio Git.

Verificación del paquete: `node tools/verify_public_site.cjs` con Playwright. El builder usa sólo Python estándar, sin frameworks de frontend.
