# VERTEX X1 – 3D Concept Device (Three.js + GSAP)

A single-page product concept showcasing a 3D smartphone model using Three.js, with immersive, interactive animations handled by GSAP, including scroll-based hero transitions, parallax effects, and micro-interactions.
Experience a dynamic product showcase where every scroll, hover, and interaction is intentional—designed to highlight features, specifications, and the elegance of motion design.
The goal of this project was to understand how real-world frontend animation pipelines work when combining:
- WebGL (Three.js)
- UI animation libraries (GSAP)
- Modern build tools (Vite)

---

## Why I built this

I wanted to move beyond static webpages and explore how modern product websites integrate 3D visuals and motion-driven storytelling.
This project focuses on:
- Scroll-triggered hero storytelling: Sequential tagline reveals that react to user scroll
- Parallax motion: Subtle 3D phone, camera, and lighting movements to enhance depth
- Interactive feature exploration: Feature cards, technical specs, and CTA buttons that respond to hover and scroll
- Clean separation of UI and 3D logic for maintainable and modular code
- The goal was not just to make something visually flashy, but to create an engaging, interactive user experience that communicates the product’s precision and style.

---

## What I implemented myself

- Project setup using Vite and TailwindCSS
- Three.js scene setup: Scene, camera, lights, and geometries
- 3D smartphone model: Phone body and frame using RoundedBoxGeometry
- OrbitControls for controlled camera interaction

GSAP animations including:

- Pinned hero section with sequential tagline transitions
- Feature cards and technical specs reveal on scroll
- Parallax motion for phone, camera, and lighting
- Interactive hover effects for buttons, feature cards, and price badge
- Smooth entrance animations for price badge and CTA buttons
- Responsive behavior on window resize
- ScrollTrigger integration for advanced scroll-based animations
---

## Learning sources & assistance

- Three.js: Official documentation and tutorials for geometry, lights, and controls
- GSAP & ScrollTrigger: Official docs, demos, and experimentation for scroll-based animations
- Implementation insights: Refined using personal experimentation and AI-assisted learning for optimization
- All code reviewed and customized to ensure full understanding of each interaction and animation

---

## Tech Stack

- Three.js
- GSAP
- Vite
- TailwindCSS

---

## How to run locally

npm install
npm run dev
