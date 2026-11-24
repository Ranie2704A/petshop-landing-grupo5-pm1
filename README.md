# 🐾 PetCare HN — Landing Page & Portal de Cumplimiento Legal

Sitio web oficial y portal regulatorio de **PetCare HN**, el ecosistema móvil de gestión veterinaria y cuidado de mascotas para Honduras desarrollado para la asignatura de **Programación Móvil 1 (Grupo 5)**.

Este sitio web cumple dos funciones principales:
1. **Landing Page oficial:** Presenta las características, roles y beneficios de la plataforma para propietarios de mascotas y clínicas veterinarias.
2. **Centro de Cumplimiento Regulatorio para Google Play Console:** Proporciona las páginas públicas obligatorias requeridas para la publicación y aprobación en Google Play Store:
   - Política de Privacidad detallada y conforme a las directrices de datos del usuario.
   - Mecanismo público, directo y accesible de Solicitud de Eliminación de Cuenta y Datos (sin obligar al usuario a iniciar sesión en la web).
   - Términos y Condiciones de uso del servicio.

---

## 📄 Contenido del Sitio Web

La página está estructurada en páginas estáticas de alto rendimiento:

### 1. Página Principal (`/` — `src/pages/index.astro`)
- **Barra de Navegación (`Navbar.astro`):** Logo institucional, enlaces con navegación fluida a secciones clave, menú desplegable hacia los documentos legales y botón de acceso a Google Play Store. Dispone de menú móvil accesible.
- **Hero Section (`Hero.astro`):**
  - Titular principal y propuesta de valor enfocada en Honduras.
  - Insignia de estado para Google Play Store.
  - Enlace rápido a las Políticas de Privacidad.
  - Mockup interactivo en CSS puro simulando un smartphone Android con la interfaz gráfica de la aplicación (expediente de la mascota "Max", tarjeta de próxima cita con veterinario, cuadrícula de acciones rápidas para citas, vacunas, historial y recetas, y barra de navegación).
- **Características Principales (`Features.astro`):**
  - 6 módulos principales: Citas médicas en tiempo real, Historial clínico digital, Carnet de vacunación inteligente, Roles y accesos seguros (RBAC), Gestión multimascota y Cero venta de datos con confidencialidad médica.
  - Sección comparativa de doble rol: Beneficios específicos para **Dueños de Mascotas** vs. **Clínicas y Veterinarios**.
- **Preguntas Frecuentes (FAQ):** Acordeones desplegables nativos HTML5 (`<details>/<summary>`) que responden dudas sobre comercialización de datos, mecanismos de baja, público objetivo de la plataforma y permisos requeridos en el dispositivo.
- **Llamado a la Acción de Eliminación (`AccountDeletionCta.astro`):** Bloque destacado que explica la política de borrado de datos y provee un botón directo de correo electrónico `mailto:` preconfigurado.
- **Pie de Página (`Footer.astro`):** Enlaces rápidos, créditos al equipo de desarrollo Grupo 5, derechos reservados y contacto de soporte oficial (`soporte@petcarehn.com`). Ubicación: San Pedro Sula, Honduras.

### 2. Política de Privacidad (`/privacidad` — `src/pages/privacidad.astro`)
- Basada en Markdown tipografiado (`src/content/legal/privacidad.md`).
- Identificación formal del responsable, canales de contacto y ubicación (San Pedro Sula, Honduras).
- Detalle de datos recopilados: datos personales, perfiles de mascotas, expedientes clínicos y control sanitario.
- Tabla explicativa de permisos Android (`CAMERA`, `READ_MEDIA_IMAGES`, `POST_NOTIFICATIONS`, `INTERNET`).
- Compromiso de no comercialización ni cesión de datos a aseguradoras o redes publicitarias.

### 3. Eliminación de Cuenta y Datos (`/eliminar-cuenta` — `src/pages/eliminar-cuenta.astro`)
- Basada en Markdown tipografiado (`src/content/legal/eliminar-cuenta.md`).
- **Botón de Acción Rápida:** Genera un correo estructurado a `soporte@petcarehn.com` sin requerir inicio de sesión web forzado (requisito de Google Play Console).
- **Guía paso a paso desde la app Android:** Explicación para eliminar la cuenta desde el perfil del usuario.
- **Especificación de datos eliminados:** Purga total de credenciales, tokens, perfiles y datos personales.
- **Excepciones sanitarias legales:** Conservación disociada y anonimizada de expedientes médicos veterinarios según normativas de salud pública y bienestar animal.
- Tiempos de procesamiento garantizados: inmediato en app (purga en base de datos en máx. 72 horas) y máx. 30 días hábiles vía web.

### 4. Términos y Condiciones (`/terminos` — `src/pages/terminos.astro`)
- Basada en Markdown tipografiado (`src/content/legal/terminos.md`).
- Condiciones generales de uso de la plataforma.
- Delimitación de responsabilidades entre dueños y médicos veterinarios.
- **Aviso crítico de salud animal:** PetCare HN es una herramienta de soporte administrativo y expedientes; no reemplaza la atención médica de urgencias presenciales.
- Propiedad intelectual y sometimiento a la jurisdicción de San Pedro Sula, Cortés, Honduras.

---

## 🛠️ Stack Tecnológico

| Herramienta / Tecnología | Propósito |
| :--- | :--- |
| **[Astro 4](https://astro.build/)** | Framework web moderno para generación de sitios estáticos (SSG) ultrarrápidos con arquitectura de islas. |
| **[Tailwind CSS](https://tailwindcss.com/)** | Framework utilitario para diseño responsivo, estilización de tarjetas y maquetación visual. |
| **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** | Estilizado automático y profesional de las páginas legales escritas en Markdown. |
| **[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)** | Gestión de contenido tipado con esquemas validados mediante **Zod** para la documentación legal. |
| **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** | Generación automática de `sitemap-index.xml` y `sitemap-0.xml` para indexación en motores de búsqueda. |

---

## 🚀 Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para clonar, instalar dependencias y ejecutar la página localmente en tu equipo:

### 1. Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema operativo:
- **Node.js:** Versión 18.17.1 o superior (recomendado Node.js 20 LTS o superior). Puedes verificarlo con:
  ```bash
  node --version
  ```
- **Gestor de paquetes:** Se recomienda **pnpm** (o en su defecto **npm**).
  ```bash
  npm install -g pnpm
  ```

---

### 2. Clonar el Repositorio

Si aún no has clonado el repositorio, descárgalo mediante Git:

```bash
git clone https://github.com/tu-organizacion/petshop-landing-grupo5-pm1.git
cd petshop-landing-grupo5-pm1
```

---

### 3. Instalar Dependencias

Instala los paquetes necesarios del proyecto ejecutando:

**Con pnpm (Recomendado):**
```bash
pnpm install
```

**Con npm:**
```bash
npm install
```

---

### 4. Iniciar el Servidor de Desarrollo

Inicia el entorno de desarrollo local con recarga en caliente (Hot Reload):

**Con pnpm:**
```bash
pnpm dev
```

**Con npm:**
```bash
npm run dev
```

Una vez iniciado, abre tu navegador web e ingresa a:
👉 `http://localhost:4321`

Cualquier cambio que realices en los componentes `.astro` o archivos `.md` se reflejará automáticamente en la pantalla.

---

### 5. Compilar para Producción (Build)

Para validar que todo compila correctamente y generar los archivos HTML estáticos en la carpeta `dist/`:

**Con pnpm:**
```bash
pnpm build
```

**Con npm:**
```bash
npm run build
```

---

### 6. Previsualizar la Compilación de Producción

Para probar localmente el sitio compilado tal como se visualizaría en el servidor web de producción:

**Con pnpm:**
```bash
pnpm preview
```

**Con npm:**
```bash
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
petshop-landing-grupo5-pm1/
├── public/
│   ├── favicon.svg                   # Ícono de la pestaña del navegador (huella + cruz veterinaria)
│   ├── robots.txt                    # Directivas para rastreadores de motores de búsqueda
│   └── images/
│       └── google-play-badge.svg     # Badge vectorial SVG de Google Play Store
├── src/
│   ├── components/
│   │   ├── Navbar.astro              # Barra de navegación principal y menú móvil
│   │   ├── Hero.astro                # Encabezado principal, CTAs y mockup interactivo Android
│   │   ├── Features.astro            # 6 módulos principales y sección de roles
│   │   ├── AccountDeletionCta.astro  # Banner de solicitud rápida de eliminación de cuenta
│   │   └── Footer.astro              # Pie de página y contacto de soporte
│   ├── content/
│   │   ├── config.ts                 # Esquema de validación Zod para colecciones de contenido
│   │   └── legal/                    # Documentos legales en formato Markdown
│   │       ├── privacidad.md         # Texto de la Política de Privacidad
│   │       ├── eliminar-cuenta.md    # Procedimiento y directivas de eliminación de datos
│   │       └── terminos.md           # Términos y Condiciones de Uso
│   ├── layouts/
│   │   ├── BaseLayout.astro          # Plantilla HTML base con etiquetas Open Graph y SEO
│   │   └── LegalLayout.astro         # Plantilla especializada para lectura de documentos legales
│   ├── pages/
│   │   ├── index.astro               # Página de inicio (`/`)
│   │   ├── privacidad.astro          # Ruta de Privacidad (`/privacidad`)
│   │   ├── eliminar-cuenta.astro     # Ruta de Eliminación de Cuenta (`/eliminar-cuenta`)
│   │   └── terminos.astro            # Ruta de Términos y Condiciones (`/terminos`)
│   └── env.d.ts                      # Tipado de entorno de Astro
├── astro.config.mjs                  # Configuración de Astro, sitemap y dominio
├── tailwind.config.mjs               # Paleta de colores institucional y configuración de Tailwind
├── tsconfig.json                     # Configuración de TypeScript
└── package.json                      # Scripts y dependencias del proyecto
```

---

## 👥 Equipo de Desarrollo

Proyecto desarrollado para la asignatura de **Programación Móvil 1**:
- **Equipo:** Grupo 5
- **Año:** 2026
- **Ubicación:** San Pedro Sula, Honduras
- **Contacto de Soporte:** [soporte@petcarehn.com](mailto:soporte@petcarehn.com)
