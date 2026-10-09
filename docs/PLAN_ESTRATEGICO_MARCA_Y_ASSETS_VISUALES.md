# Plan vigente de web, narrativa y assets

Actualizado: 2026-10-09. Resume decisiones aprobadas y prioridades; fundamentos de identidad en el [estudio de marca](ESTUDIO_MARCA_STRIG_ATHENE.md). La implementación y publicación de la web no equivalen a validación operacional del sistema.

## Narrativa aprobada

**Empresa:** «Empresa chilena de ingeniería aeroespacial y sistemas autónomos. Desarrollamos Athene™, un sistema centinela aéreo para vigilancia forestal nocturna.» (ADR-0011). No declarar defensa como actividad principal ni anunciar la colaboración exploratoria con Armada de Chile, aún no formalizada.

**Hero:** «Los riesgos se mueven rápido. Nosotros los vemos venir.» Conservar su jerarquía y gradiente metálico en la segunda línea.

**Definición vigente:** «Athene es una plataforma centinela aérea autónoma diseñada para apoyar la vigilancia forestal nocturna. Busca detectar presencia de personas e indicios de incendio mediante análisis térmico a bordo y revisión humana de las alertas.» Es una intención de diseño, sin garantía de anticipación a toda ignición o prevención de incendios.

La portada pública es compacta: empresa, propósito de Athene, arquitectura conceptual, estado experimental, equipo, contacto y apoyos. Las páginas/componentes ampliados anteriores son referencia; no restaurarlos por defecto ni difundir detalles técnicos antes de tiempo. El gate de dossier del lado cliente no protege información confidencial.

## Evidencia y reserva técnica

TRL 3 es el estado declarado por el proyecto; distinguir prueba de concepto de disponibilidad comercial. No publicar alcance, autonomía, viento, latencia o tasas de detección sin fuente y validación aprobadas. La discrepancia histórica 45–60 frente a 90+ minutos permanece sin resolver; no elegir una cifra para rellenar diseño.

Assets técnicos anteriores, incluido `vtol_payload.png`, se tratan como origen no verificado. Ilustraciones/renders deben llevar rótulo próximo, también en exports autónomos. Sin CAD aprobado no dibujar planos acotados de Noctua. No atribuir visión a través de suelo o vegetación opaca a un sensor térmico. No incorporar disuasión, sirenas o estrobos sólo porque figuran en documentos históricos. Tomás precisó durante la revisión final: detectar **presencia de personas** e indicios de incendio, sin reconocer identidad. La actividad humana se evalúa en contexto como posible riesgo; no toda presencia implica intención o causalidad. Se recupera esa intención preventiva de `dev`, sin sus cifras o promesas no verificadas.

Invitar a conversación técnica/piloto sin barrera legal intimidante ni cuestionarios artificiales. Los objetivos de integración con centrales y automatización futura no son capacidades entregadas. Consultar [registro de assets](ASSET_REGISTER.json) y [método de arquitectura](METODOLOGIA_ILUSTRACION_ARQUITECTURA.md) antes de ampliar la representación.

## Estado local confirmado

| Área | Decisión vigente |
| --- | --- |
| Identidad | Familia A, empresa y producto diferenciados; derivados en `assets/img/brand/web/`. Sin master final cerrado. |
| Tipografía | Space Grotesk para titulares (700 máximo cargado), Outfit 400/500/600 para cuerpo y secundarios legibles; JetBrains Mono sólo para metadatos breves. |
| Maquetación | Contenedor general 1200px con padding 24px; ampliar a 1400px fue propuesta, no decisión. Header flexible; proporción óptica Strig principal / Athene secundario. |
| Arquitectura | `assets/img/tech/athene-architecture.svg`, paso 5 sobre candidata Astra. VTOL, cámara, inferencia, indicio y operador; representación conceptual. |
| Credenciales | «Finalistas 7th Gear Challenge - Gearbox UdeC». No generar logo Gearbox. |
| Apoyos | Logos completos de IncubaUdeC y Corfo publicados por autorización de Tomás, con incubación, mentorías y financiamiento explícitos. Validación gráfica IU p.18 pendiente; no declara aprobación institucional (ADR-0014). |
| Equipo | Tomás Medina (Cofundador · Responsable técnico), Carlos Gutiérrez (Cofundador · Operaciones), Ananda Glaria, Richard Solís y Pablo Alarcón (Cofundadores). Cinco retratos locales. |

Tomás suministró perfiles de [Carlos](https://www.linkedin.com/in/cgutierrezsoto/), [Richard](https://www.linkedin.com/in/richard-solis-580ba0324/) y [Tomás](https://www.linkedin.com/in/tomasmedinab/). Ananda/Pablo sin URL confirmada: recuadros deshabilitados, sin enlaces inventados. No es verificación independiente de sus perfiles.

Las relaciones Semilla Inicia/IncubaUdeC/Red IU fueron confirmadas por Tomás. Las reglas y pendientes estrictos se mantienen únicamente en la [biblioteca institucional](brand/institutional/README.md): validación gráfica IU p.18 pendiente; manual Corfo recibido de identidad antigua; no aislar el escudo ni reconstruir marcas. Los apoyos no certifican técnicamente el producto.

## Prioridades siguientes

1. **SVG:** una mejora focalizada por comparación; jerarquía, coherencia de conexiones y legibilidad de escena a tamaño real. La pantalla detallada requiere ampliación en móvil. No añadir datos aparentando evidencia.
2. **Marca A:** cerrar escala óptica y SYSTEMS, revisar similitudes y producir manual breve una vez aprobado el master. B/C siguen alternativas, sin nueva selección automática.
3. **Institucional:** obtener manuales/assets oficiales UdeC y Gearbox, cotas y vectores faltantes; preparar validación de la aplicación final según IU. No se han enviado mensajes.
4. **Assets técnicos:** priorizar fotografías verificadas de ensayos; CAD/renders sólo con diseño aprobado. Feed térmico sintético puede explicar análisis, siempre rotulado y sin estadísticas inventadas. Nest no necesita un falso render de producto construido.
5. **Publicación y dominio:** resolver la migración con verificación DNS, correo y deploy antes de cambiar URLs públicas; detalle debajo.

El backlog de primera lectura de septiembre quedó sustituido por estas prioridades. Sus preguntas sobre coherencia de radio/imagen, autonomía y responsabilidades comercial/regulatoria siguen sujetas a evidencia y definición interna. La detección indirecta bajo dosel, un banco propietario de firmas, prestaciones del radioenlace y cumplimiento SORA no se incorporan como capacidades demostradas por aparecer en aquel plan.

Pulido previo a publicación: briefing sin disuasión/campaña de cuatro fases/titularidad exclusiva; banner breve, descriptor corporativo en hero, estado «arquitectura y preparación de integración», finalistas sin franja duplicada y equipo móvil compacto. Contacto directo visible, organización/contexto opcionales, selector de botones con aria-pressed y enlaces legales preservados al traducir. Revisiones simuladas first-reader guardadas localmente en `.first-reader/runs/2026-10-08-web-publication/`; no son validación humana.

Cada paso exige comparación visual, decisión explícita si cambia identidad/mensaje y registro breve del resultado. No abrir nuevas familias de assets por cantidad.

## Dominio y hosting: actual frente a pendiente

Estado del repositorio: `CNAME` apunta a `strigsystems.tech`; GitHub Pages tiene workflow al push a main. Tomás compró **strigsystems.cl** en NIC Chile y reporta DNS en configuración/propagación en Cloudflare. No se ha comprobado aquí su activación ni desplegado el sitio allí.

Dirección recomendada: .cl principal, .tech conservado con redirección y correo independiente; Cloudflare Workers Static Assets con Workers Builds conectado a GitHub para desplegar los commits de main. Es una migración pendiente: las ediciones locales no publican hasta push y deploy. Preservar MX/TXT de correo antes de cualquier cambio. Contactos actuales `contacto@strigsystems.tech` y `tmedina@strigsystems.tech` no se cambian por comprar .cl.

Referencias de configuración: [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/), [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [DNS full setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/) y [custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/). La limpieza documental anterior no modificó hosting. La publicación actual conserva DNS/CNAME .tech y cambia el workflow para empaquetar sólo `build/public`, generado por `tools/build_public_site.py`: portada/legal/404 y assets referenciados. Docs, scratch, exports, dossier y fuentes de exploración quedan fuera del sitio. El builder conserva los logos institucionales referenciados en la portada, conforme a la autorización de Tomás (ADR-0014); la validación externa sigue pendiente.

## Verificación

Preflight e i18n, carga de assets, revisión ES/EN escritorio/móvil, teclado/foco, contraste, motion reducido, enlaces y contacto. Separar pruebas técnicas de aceptación visual e institucional. Los cambios recientes pasaron preflight/i18n con 144 claves; volver a ejecutar tras editar código. No presentar estos checks como certificación funcional del sistema.


## Refinamiento aprobado e implementado — 2026-10-09

Primera lectura simulada y crítica visual: ambos lectores terminaron; la utilidad se concretó en personas e indicios de incendio y aceptarían conversación exploratoria. Ronda local en `.first-reader/runs/2026-10-09-narrative-polish/`; no equivale a investigación con clientes.

Tomás aprobó adelantar el propósito preventivo y mantener detección de presencia sin atribuir identidad/intención; alinear CTA y formulario con conversación exploratoria; concentrar el estado experimental y simplificar caption/rótulos; unificar sistema/plataforma aérea y terminología ES/EN; dejar Concepción, Chile como ubicación y explicar UdeC mediante formación/incubación. Familia A y titular se conservan como base. No divulgar condiciones de ensayo aún no definidas.

Información de equipo precisada por Tomás: Ananda egresada; Richard y Tomás en penúltimo semestre; Carlos en memoria/último semestre. No describir al conjunto como cinco profesionales titulados: redacción pública «Equipo con formación en Ingeniería Civil Aeroespacial en la Universidad de Concepción». Pablo podría dejar el equipo fundador; aún no confirmado. La ficha permanece por ahora, pendiente de conversación y definición, sin cambiar su rol ni retirarla por inferencia.


Contacto implementado (ADR-0016): formulario general de Strig, con Athene preseleccionado desde hero/invitación y consulta general desde cabecera. Motivos: Athene/vigilancia y pruebas, colaboración, consulta general. Nombre/correo/mensaje obligatorios; organización/teléfono opcionales y consentimiento para responder según privacidad. Sin región, clasificación del terreno, horarios, NDA ni promesa de reunión/plazo. Usar «terreno», no «predio». Correo directo y fallback con datos completos; éxito únicamente tras aceptación explícita del proveedor. La revisión automática simula respuestas y no acredita recepción real de correo.
