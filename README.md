# Mall of America | Immersive Sales Experience

A premium, high-fidelity interactive sales deck built for Mall of America. This application provides a cinematic, data-driven journey through the property's core offerings, featuring immersive video transitions, interactive data modules, and expandable architecture for deep-dive exploration.

## 🚀 Core Features

- **Cinematic Experience**: Immersive video-first landing page and intro sequences designed to capture the scale and energy of the property.
- **Interactive Deck Navigation**: A horizontal slideshow-style navigation system with custom progress tracking and quick-access menu.
- **Expandable Architecture (Phase 2)**: 
  - **Leasing Paths**: Clickable opportunity cards that launch deep-dive modals with category-specific analytics and strategic positioning.
  - **Events Module**: Dedicated sub-module for venue-specific hosting capabilities, AV specs, and past highlights.
- **Fully Responsive**: Optimized for Desktop, Tablet, and Mobile devices with smart layout stacking and vertical scrolling within interactive slides.
- **Data-Driven Visuals**: Premium AI-generated architectural blueprints and cinematic photography backgrounds.
- **Performant Animations**: Fluid, high-performance entrance and exit animations powered by Framer Motion.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: Vanilla CSS Modules (Luxury dark theme aesthetic)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Large Assets**: Git LFS (Large File Storage) for optimized video hosting.

## 💻 Local Setup

Follow these steps to get the project running on your local machine:

### 1. Prerequisites
Ensure you have **Node.js (v18.0 or higher)** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/harshu0001/liatai-moadeck.git
cd liatai-moadeck
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Git LFS (Important)
This project uses Git LFS to manage large video files. Ensure you have Git LFS installed on your system before pulling.
```bash
git lfs install
git lfs pull
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Build for Production

To create an optimized production build:
```bash
npm run build
npm run start
```

## 📄 License
This project is for demonstration and sales deck purposes. All rights to Mall of America assets belong to their respective owners.
