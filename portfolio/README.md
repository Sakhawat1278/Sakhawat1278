# Sakhawat Hossain · Interactive Portfolio

Immersive, motion-led portfolio that showcases interactive case studies, systems thinking, and creative engineering for Sakhawat Hossain. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion to deliver cinematic UI, magnetic interactions, and responsive storytelling.

## ✨ Experience Highlights

- Floating aurora background, kinetic marquee, and magnetic buttons for a premium first impression
- Signature project grid with 3D tilt, reactive lighting, and impact callouts
- Expertise, workflow, and experience timelines articulated through animated glassmorphism
- Testimonials and contact hub wrapped in gradient-rich, accessible UI
- Dark, noise-infused aesthetic with custom fonts, gradients, and scroll spy navigation

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the development server
npm run dev

# run lint checks
npm run lint

# create a production build
npm run build
```

Visit http://localhost:5173/ after running `npm run dev`.

## 📁 Project Structure

```
src/
  components/
    background/        # animated aurora and atmospheric layers
    layout/            # navigation and footer scaffolding
    sections/          # hero, projects, expertise, experience, contact
    ui/                # reusable animated primitives (buttons, section headers)
  data/                # copy deck + structured content data
  hooks/               # intersection observer scroll spy
  main.tsx             # app bootstrap
  App.tsx              # layout orchestration
```

## 🎨 Styling & Motion Stack

- **Tailwind CSS** for utility-first styling, custom color tokens, and fluid spacing
- **Framer Motion** for staggered reveals, tilt effects, and perpetual ambience
- **Lucide Icons** for crisp line-based iconography
- **Google Fonts** (`Space Grotesk`, `Inter`) to align with modern typographic trends

## 🛠 Customization Tips

- Update copy, metrics, and project data inside `src/data/content.ts`
- Tailor color palettes, shadows, and animations through `tailwind.config.js`
- Replace placeholder links (resume, project URLs) with production-ready destinations
- Adjust interactive behaviors (marquee speed, tilt intensity) inside each section component

---

Crafted to help brands and teams explore how design intent meets polished, performant frontend engineering.🚀
