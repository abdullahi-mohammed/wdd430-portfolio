# WDD 430 - Web Frontend Development Portfolio

A modern, responsive portfolio application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## 🌐 Live Deployment

- **Vercel Production URL**: [https://wdd430-portfolio-eosin.vercel.app/](https://wdd430-portfolio-eosin.vercel.app/)

---

## 🚀 Features

- **Component Architecture**: Built entirely with React Server Components (`Header`, `ProjectCard`, `ProjectList`, `Footer`, `SkillsCard`) without client-side overhead.
- **Component Composition & TypeScript**: Strict type definitions (`interface`) for props with type safety and modular reusability.
- **Client-Side Navigation**: Seamless page transitions using Next.js `Link` for internal routing (`/` and `/about`).
- **File-Based Routing**: Next.js App Router structure with dedicated pages for Home and About, plus backend API endpoints.
- **API Route**: Backend GET endpoint at `/api/hello` returning JSON responses.
- **Accessible & Responsive Design**: Styled with Tailwind CSS, supporting mobile, tablet, and desktop viewports, with WCAG AA compliant color contrast ratios.

---

## 📁 Project Structure

```text
wdd430-portfolio/
├── app/
│   ├── about/
│   │   └── page.tsx           # About page with SkillsCard custom component
│   ├── api/
│   │   └── hello/
│   │       └── route.ts       # Backend API demonstration route
│   ├── favicon.ico
│   ├── globals.css            # Global styling and Tailwind imports
│   ├── layout.tsx             # Root layout with Header and Footer
│   └── page.tsx               # Home page showcasing featured projects
├── components/
│   ├── Footer.tsx             # Server Component with dynamic copyright year
│   ├── Header.tsx             # Server Component with navigation links
│   ├── ProjectCard.tsx        # Reusable card component for single project
│   ├── ProjectList.tsx        # Responsive grid mapping project cards
│   └── SkillsCard.tsx         # Custom reusable card component for skills
├── public/                    # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18.18.0 or later recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abdullahi-mohammed/wdd430-portfolio.git
   cd wdd430-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Test the API route at [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

---

## 🧪 Build and Linting

- **Type Check & Build**:
  ```bash
  npm run build
  ```

- **Lint Code**:
  ```bash
  npm run lint
  ```

---

## 👤 Author

- **Name**: Abdullahi Mohammed
- **Course**: WDD 430 - Web Frontend Development (BYU-Idaho)
- **GitHub**: [@abdullahi-mohammed](https://github.com/abdullahi-mohammed)
