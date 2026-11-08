# kirber27.github.io

Portafolio personal bilingüe (ES/EN) orientado a posiciones **Senior Full Stack / Frontend Developer**, hecho con **Vue 3 + Vite** y publicado en **GitHub Pages**.

🔗 https://kirber27.github.io

## Características

- Vue 3 (Composition API, `<script setup>`) + Vite 7, sin librerías de UI
- i18n propio ES/EN (detecta el idioma del navegador y lo recuerda)
- Tema oscuro/claro sin parpadeo al cargar
- Repositorios de GitHub **en vivo** (API pública) con caché de 1 h, búsqueda, filtro por lenguaje y orden
- Accesible: HTML semántico, skip link, foco visible, `aria-*`, respeta `prefers-reduced-motion`
- SEO: meta tags, Open Graph, JSON-LD, sitemap y robots
- Tests con Vitest + Vue Test Utils
- CI/CD: GitHub Actions ejecuta tests, build y despliegue en cada push a `main`

## Editar el contenido

Todo el contenido está en **`src/data/profile.js`** :
nombre, enlaces, estadísticas, experiencia, proyectos destacados y habilidades.
Los textos de la interfaz están en `src/i18n/messages.js`.

Para agregar tu CV: copia el PDF a `public/cv.pdf` y pon `cv: '/cv.pdf'` en `profile.links`.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:5173
npm test          # tests
npm run build     # genera dist/
npm run preview   # sirve dist/
```

Requiere Node.js 20.19 o superior.

## Publicar en GitHub Pages

1. En GitHub crea un repositorio público llamado exactamente **`kirber27.github.io`** (sin README).
2. En esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio Vue 3 + Vite"
   git branch -M main
   git remote add origin https://github.com/Kirber27/kirber27.github.io.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Revisa la pestaña **Actions**; al terminar (1–2 min) el sitio queda en https://kirber27.github.io

---

## English

Bilingual personal portfolio built with Vue 3 + Vite, deployed to GitHub Pages through GitHub Actions.
Edit your content in `src/data/profile.js`, run `npm run dev` locally, and push to `main` to deploy
(set **Settings → Pages → Source** to **GitHub Actions** once).
