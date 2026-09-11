# Motion Graphics Portfolio — Fluid UI (Light Theme)

A portfolio web application engineered with a **Fluid UI design system** and a luminous **Light Theme**, showcasing 12 curated motion graphics projects from Google Drive.

![Portfolio Preview](screenshot_overview.png) *(or open index.html directly in your browser)*

---

## 🌟 Key Features

- **Fluid UI Architecture**:
  - **Mathematical Fluid Scaling**: Responsive typography, margins, paddings, and card dimensions dynamically calculated with CSS `clamp()`. No rigid breakpoint jumps.
  - **Light Theme Visual Harmony**: Alabaster and crisp white surfaces, frosted glass cards (`backdrop-filter`), delicate iridescent gradients, and high-contrast slate typography.
  - **Organic Motion Dynamics**: Ambient floating liquid orbs, interactive fluid mouse aura, animated audio wave bars, and glowing active pill indicator.

- **12 Motion Graphics Projects Showcased**:
  - All 12 Google Drive video links from your collection are integrated with high-resolution thumbnail previews.
  - **Fluid Theater Modal**: Instant distraction-free 16:9 lightbox player streaming directly from Google Drive embed (`https://drive.google.com/file/d/{id}/preview`).
  - **Keyboard Navigation**: Press <kbd>&larr;</kbd> and <kbd>&rarr;</kbd> to switch videos in theater mode, and <kbd>ESC</kbd> to exit.
  - **Direct Drive Access**: Quick action button on every card and in the theater header to open the original source file on Google Drive.

- **Interactive Category Filtering**:
  - Filter across: `All Works (12)`, `Brand Motion (7)`, and `Visual FX & UI (5)`.
  - Animated magnetic pill indicator tracking active category.

- **Display Modes**:
  - Switch between standard Fluid Grid and Cinema Mode.

- **Production Tooling & Philosophy**:
  - Showcases core competencies in **Blender** (Cycles & Eevee, Geometry Nodes, 3D modeling, procedural shading, physics simulation) and **DaVinci Resolve** (Fusion motion graphics, advanced color grading, cinematic editorial, and audio mastery).
  - Contact section with one-click email copy to clipboard.

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Double click `index.html` in your file explorer to open it directly in Google Chrome, Edge, Safari, or Firefox.

### Option 2: Local HTTP Server (Recommended)
Using Node.js:
```bash
npm start
# Or
npx serve . -l 3000
```
Then open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
My_Motion_Graphics/
├── index.html       # Semantic HTML5 markup, SEO meta tags, accessible landmarks
├── style.css        # Vanilla CSS3 Fluid UI design system tokens & animations
├── app.js           # Project data array (13 videos), filtering, and modal controls
├── package.json     # Project scripts & metadata
└── README.md        # Documentation
```

---

## ⚙️ Customizing Your Projects

All project metadata is organized in [app.js](file:///c:/Users/mragh/Projects/My_Motion_Graphics/app.js) inside the `MOTION_PROJECTS` array. You can easily modify:

- `title`: The project name
- `category`: Category pill group
- `description`: Your custom art direction and storyline
- `tags`: Software and techniques used
- `driveId`: The Google Drive file ID
