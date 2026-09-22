# ◈ Strig Systems — Foresight AI Sentinel

Sitio web oficial y arquitectura de despliegue continuo en **GitHub Pages** para **Foresight AI Sentinel** con el dominio personalizado **[strigsystems.tech](https://strigsystems.tech)**.

---

## 🚀 Arquitectura del Proyecto

Este repositorio utiliza el estándar moderno de GitHub Pages impulsado por **GitHub Actions** (`.github/workflows/deploy.yml`):
- **Cero dependencias pesadas:** HTML5 semántico, Vanilla CSS con tokens HSL y JavaScript modular.
- **Despliegue Atómico:** Cada `push` a la rama `main` dispara automáticamente la acción oficial de GitHub Pages sin requerir ramas intermedias como `gh-pages`.
- **Dominio Canónico:** Configurado a través del archivo `CNAME` apuntando a `strigsystems.tech`.

```
ForesightAISentinel-StrigSystemsWebPage/
├── .agents/skills/              # Skills locales instaladas (first-reader, scope-creep, etc.)
├── .github/workflows/deploy.yml # Pipeline oficial de despliegue automático en GitHub Pages
├── .gitignore                   # Exclusiones de IDEs, SO y temporales
├── CNAME                        # Dominio canónico strigsystems.tech
├── README.md                    # Documentación y guía DNS
├── index.html                   # Landing page moderna con telemetría y diseño Cyber/Dark
├── styles.css                   # Sistema de diseño con Glassmorphism y paleta HSL
└── script.js                    # Interactividad y efectos visuales
```

---

## 📡 Guía Paso a Paso: Configuración de DNS en Get.Tech

> [!IMPORTANT]
> **Aviso sobre Mailbux:** Ya tienes configurado tu correo en Mailbux. **NO modifiques ni elimines tus registros `MX` ni los registros `TXT` existentes de SPF o DKIM**. Solo vamos a **añadir** los nuevos registros para la web y la verificación de GitHub.

### 1. Registros para el Dominio Apex (`strigsystems.tech`)
En el panel de DNS de **Get.Tech**, añade **4 registros tipo `A`**:

| Tipo | Host / Nombre | Valor / Destino IP | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (o en blanco) | `185.199.108.153` | 3600 (o Auto) |
| **A** | `@` (o en blanco) | `185.199.109.153` | 3600 (o Auto) |
| **A** | `@` (o en blanco) | `185.199.110.153` | 3600 (o Auto) |
| **A** | `@` (o en blanco) | `185.199.111.153` | 3600 (o Auto) |

*(Opcional recomendado) 4 registros IPv6 tipo `AAAA`:*
- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

---

### 2. Registro para el Subdominio `www` (`www.strigsystems.tech`)
Añade **1 registro tipo `CNAME`**:

| Tipo | Host / Nombre | Valor / Destino | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `tmedinab.github.io.` | 3600 (o Auto) |

*(Si Get.Tech no acepta el punto final `.`, escribe simplemente `tmedinab.github.io`).*

---

### 3. Verificación de Dominio en GitHub (Seguridad Anti-Takeover)
Para garantizar que nadie más en GitHub pueda vincular tu dominio a otro repositorio:
1. En GitHub, ve a tu perfil: **Settings > Pages > Add a domain**.
2. Escribe `strigsystems.tech`.
3. GitHub te dará un registro TXT parecido a este:
   - **Tipo:** `TXT`
   - **Host:** `_github-pages-challenge-tmedinab`
   - **Valor:** `github-site-verification=...`
4. Añade ese registro TXT en tu panel de **Get.Tech**.
5. Vuelve a GitHub y presiona **Verify**.

---

### 4. Configurar GitHub Pages en el Repositorio
Una vez que subas este repositorio a GitHub (`tmedinab/ForesightAISentinel-StrigSystemsWebPage`):
1. Ve a **Settings > Pages** en tu repositorio.
2. En **Build and deployment > Source**, selecciona: **`GitHub Actions`**.
3. En **Custom domain**, confirma que figure `strigsystems.tech`.
4. Una vez que el DNS propague y GitHub emita el certificado SSL (Let's Encrypt), activa la casilla **"Enforce HTTPS"**.

---

## 🛠️ Comandos de Verificación en Terminal (PowerShell)

Para comprobar que los registros DNS ya se están resolviendo en tu máquina:

```powershell
# Verificar registros A hacia GitHub
Resolve-DnsName -Name strigsystems.tech -Type A

# Verificar registro CNAME de www
Resolve-DnsName -Name www.strigsystems.tech -Type CNAME

# Verificar registro TXT de validación
Resolve-DnsName -Name _github-pages-challenge-tmedinab.strigsystems.tech -Type TXT
```

También puedes comprobar la propagación mundial en:
👉 [https://dnschecker.org/#A/strigsystems.tech](https://dnschecker.org/#A/strigsystems.tech)

---

## 📤 Comandos Git para el Primer Push a GitHub

Si creas el repositorio en GitHub con el nombre `ForesightAISentinel-StrigSystemsWebPage`:

```bash
git remote add origin https://github.com/tmedinab/ForesightAISentinel-StrigSystemsWebPage.git
git branch -M main
git push -u origin main
```
