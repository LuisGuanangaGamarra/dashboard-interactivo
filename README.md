# 🧩 Dashboard Interactivo — Vue 3.4.21 + Vite 5.4.7

[![Vue 3](https://img.shields.io/badge/Vue-3.4.21-42b883?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-0ea5e9?logo=tailwindcss)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.x-f53737?logo=chart.js)](https://www.chartjs.org/)
[![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?logo=vitest)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-1.x-45ba4b?logo=playwright)](https://playwright.dev/)

Dashboard de métricas con **arquitectura limpia**, componentes reutilizables y **visualización de datos** (Chart.js + vue-chartjs).

> **Stack**: Vue 3 (Composition API, `<script setup>`), Vite, TypeScript, Tailwind CSS, Chart.js, Vitest, Playwright, Docker.

---

## ✨ Características

- 📊 **Tarjetas de métricas** (componentes reutilizables)
- 📈 **Gráfico de ventas** con Chart.js (línea, responsive)
- 🧱 **Arquitectura limpia** por capas (`domain`, `infrastructure`, `presentation`)
- 🧪 **Testing**: unit (Vitest + Vue Test Utils) y **E2E** (Playwright)
- 🐳 **Producción** servida con Nginx (Docker multi-stage)

---

## 📁 Estructura del proyecto

```txt
src/
├─ assets/
├─ components/
│  ├─ MetricCard.vue
│  └─ SalesChart.vue
├─ domain/
│  └─ entities/
│     └─ Metric.ts
├─ infrastructure/
│  └─ repositories/
│     └─ MetricRepository.ts
├─ presentation/
│  └─ views/
│     └─ DashboardView.vue
├─ router.ts
├─ App.vue
└─ main.ts
```

> **Alias**: `@` → `./src` (configurado en `vite.config.ts` y `vitest.config.ts`).

---

## 🚀 Inicio rápido

### Requisitos
- Node.js **22**
- npm

### Instalación
```bash
# Clonar
git clone https://github.com/LuisGuanangaGamarra/dashboard-interactivo.git
cd dashboard-interactivo

# Dependencias
npm install

# Desarrollo
npm run dev
```

La app corre por defecto en `http://localhost:5173`.

---

## 🧪 Pruebas

### Unit (Vitest + Vue Test Utils)
**Ejecutar**
```bash
npm run test            # vitest
```

### E2E (Playwright)
**Ejecutar**
```bash
npm run test:e2e            # Playwright
```
---

## 🐳 Docker (Producción con Nginx)
**Build & Run**
```bash
docker build -t dashboard-interactivo .
docker run -p 8080:80 dashboard-interactivo
# => http://localhost:8080
```

---

## 🧱 Arquitectura limpia (resumen)

- **domain/**: entidades
- **infrastructure/**: adaptadores/repositorios (APIs, storage, mocks)
- **presentation/**: Vue components, views, stores (UI/UX)

---

## 🌐 Demo en producción

👉 _Opcional: puedes desplegar en [Render](https://render.com/)
👉 _Demo: [App](https://app-de-clima-ztuc.onrender.com)

---

## 📄 Licencia

MIT – Libre uso y modificación para fines personales y profesionales.

---

## 👨‍💻 Autor

**Luis Guananga**  
Frontend & Full-Stack Developer  
[LinkedIn](https://www.linkedin.com/in/luis-virgilio-guananga-gamarra) | [GitHub](https://github.com/LuisGuanangaGamarra)

