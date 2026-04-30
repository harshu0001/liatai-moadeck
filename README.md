# Mall of America | Immersive Sales Experience

A premium, high-fidelity interactive sales deck built for Mall of America. This application provides a cinematic, data-driven journey through the property's core offerings, featuring immersive video transitions, interactive data modules, and expandable architecture for deep-dive exploration. It serves as a self-contained web application that acts as a modern, high-impact sales tool.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules (Luxury dark theme aesthetic, adhering to strict design guidelines)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting & Formatting**: ESLint, Prettier

## Setup Instructions

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

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
npm run start
```

## Design Decisions

- **Video-First Storytelling**: Video is utilized as the primary storytelling medium rather than mere decoration. Features such as autoplay and background videos are implemented to create an immediate emotional connection and showcase the scale of the property within the first few seconds.
- **Luxury-Inspired UI**: The interface draws inspiration from premium luxury brands. It employs a minimalist "dark theme" Chrome, maximizing the impact of visuals and data-driven content while reducing cognitive load.
- **Non-Linear Interactive Navigation**: Moving away from traditional slide decks, the architecture allows users to control their own journey. A custom slideshow-style navigation system with intuitive progress tracking encourages exploration of the core offerings (Retail, Dining, Entertainment).
- **Expandable Architecture**: The system is designed with modularity in mind. "Phase 2" components, such as the Leasing and Events deep-dive modals, dynamically expand to provide specific analytics, highlights, and clear calls-to-action without requiring a full page reload or breaking the immersive experience.
- **Performance Optimization**: Emphasizing a 90+ Lighthouse score, the project leverages Next.js static and dynamic imports, lazy loading for large components, and optimized asset handling. Videos and heavy imagery are strategically loaded to protect critical paint times (LCP).

## AI Tools Used

- **Asset Generation & Enhancement**: Generative AI tools were utilized to conceptualize and generate high-quality architectural blueprints, abstract background textures, and placeholder imagery where real media assets were unavailable, ensuring visual consistency and quality.
- **Code Generation & Architecture Support**: AI coding assistants were leveraged to accelerate development, specifically in structuring the Next.js App Router, configuring complex Framer Motion animations, and fine-tuning responsive CSS layouts across different device breakpoints.
- **Performance Analysis**: AI-driven analysis was used to identify performance bottlenecks and suggest optimizations for video preloading strategies, dynamic module loading, and ensuring high Lighthouse scores.

## License
This project is for demonstration and sales deck purposes. All rights to Mall of America assets belong to their respective owners.<br/>
Designed and Developed with ❤️ by **HARSH PRATAP SINGH**
