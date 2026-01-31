# VERTEX X1 – 3D Concept Device (Three.js + GSAP)

This is a single-page product concept showcasing a 3D smartphone model using Three.js, with UI and interaction animations handled using GSAP.

The goal of this project was to understand how real-world frontend animation pipelines work when combining:
- WebGL (Three.js)
- UI animation libraries (GSAP)
- Modern build tools (Vite)

---

## Why I built this

I wanted to go beyond static webpages and explore how 3D rendering and motion design are integrated into modern product websites.

The focus was **not on visual flash**, but on:
- Scene setup
- Camera and lighting decisions
- Clean separation between UI and 3D logic
- Understanding how animation timelines affect user perception

---

## What I implemented myself

- Project setup using Vite
- Three.js scene, camera, lighting and geometry
- Phone body and frame using `RoundedBoxGeometry`
- OrbitControls configuration for controlled interaction
- GSAP-based entrance and hover animations
- Responsive behavior on resize

---

## Learning sources & assistance

- Three.js fundamentals were learned from official docs and tutorials
- GSAP animation patterns were explored with guidance and experimentation
- Some implementation ideas were refined using AI tools for learning purposes

All code was reviewed and modified to ensure I understand each part.

---

## Tech Stack

- Three.js
- GSAP
- Vite
- TailwindCSS

---

## How to run locally

```bash
npm install
npm run dev
