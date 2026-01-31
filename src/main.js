/*
VERTEX PHONE X1 - 3D concept Device 
//Final Code
Start
Jan 13, 2026 -
*/

// === SCROLLTRIGGER IMPORT + REGISTER (TOP PE) ===
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/* ================= UI SETUP ================= */
/* Premium dark UI using TailwindCSS */
document.getElementById('app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black p-8">

    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center py-20 hero-pin">
      <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-8">
        VERTEX PHONE X1
      </h1>

      <!-- Tagline -->
      <div class="relative h-12 overflow-hidden mb-20 hero-lines">
        <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto hero-line">
          Engineered with precision. Designed by logic.
        </p>
        <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto hero-line">
          Performance that stays calm under pressure.
        </p>
        <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto hero-line">
          Power that feels effortless.
        </p>
      </div>

      <!-- Price badge -->
      <div class="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full text-2xl font-bold mb-16 shadow-2xl price-badge">
        <span class="text-3xl mr-2">₹</span>
        <span class="text-4xl">50,000</span>
        <span class="ml-2 text-emerald-200 text-lg">/ Starting</span>
      </div>
    </div>

    <!-- 3D Phone Canvas -->
    <div class="flex justify-center mb-28">
      <canvas id="phone-canvas" class="phone-canvas"></canvas>
    </div>

    <!-- Features Grid Section -->
    <div class="max-w-6xl mx-auto px-6 pb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" id="features-grid">
        <div class="p-8 rounded-2xl bg-white/5 border border-white/10 feature-card">
          <h3 class="text-xl font-bold text-blue-400 mb-2">Display</h3>
          <p class="text-gray-300">6.7" OLED 120Hz</p>
        </div>
        <div class="p-8 rounded-2xl bg-white/5 border border-white/10 feature-card">
          <h3 class="text-xl font-bold text-emerald-400 mb-2">Chip</h3>
          <p class="text-gray-300">ION A18 Pro</p>
        </div>
        <div class="p-8 rounded-2xl bg-white/5 border border-white/10 feature-card">
          <h3 class="text-xl font-bold text-purple-400 mb-2">RAM</h3>
          <p class="text-gray-300">16GB LPDDR5X</p>
        </div>
        <div class="p-8 rounded-2xl bg-white/5 border border-white/10 feature-card">
          <h3 class="text-xl font-bold text-orange-400 mb-2">Storage</h3>
          <p class="text-gray-300">1TB UFS 4.0</p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        <button class="cta-button buy-btn reveal group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl">
          <span class="flex items-center">
            Buy Now 
            <!-- Arrow icon with hover slide animation -->
            <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </button>

        <button class="cta-button booking-btn reveal group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl">
          <span class="flex items-center">
             Book Now 
             <!-- Calendar SVG icon with hover animation -->
             <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
             </svg>
           </span>
         </button>

        <button class="cta-button learn-btn reveal group bg-white/10 border border-white/20 text-white font-bold py-6 px-12 rounded-2xl text-xl backdrop-blur-sm shadow-2xl">
          Learn More
        </button>
      </div>

      <!-- Technical Specifications Section -->
      <div class="mt-24">
        <!-- Gradient heading text with proper typography hierarchy -->
        <h2 class="text-3xl font-bold text-white text-center mb-12 bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
          Technical Specifications
        </h2>
        <!-- Responsive 3-column specs grid with gap-6 spacing -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- Camera specs card - Consistent glassmorphism styling -->
          <div class="p-6 rounded-xl bg-white/5 border border-white/10 spec-card reveal">
            <h4 class="text-lg font-bold text-emerald-400 mb-2">Camera</h4>
            <!-- Clean bullet list with space-y-1 perfect line spacing -->
            <ul class="text-gray-300 space-y-1">
              <li>200MP Main (OIS)</li>
              <li>50MP Ultra-wide</li>
              <li>12MP Telephoto 5x</li>
              <li>4K 120fps Video</li>
            </ul>
          </div>
          <div class="p-6 rounded-xl bg-white/5 border border-white/10 spec-card reveal">
            <h4 class="text-lg font-bold text-orange-400 mb-2">Battery</h4>
            <ul class="text-gray-300 space-y-1">
              <li>6500mAh</li>
              <li>80W Fast Charge</li>
              <li>50W Wireless</li>
              <li>12hr Video Playback</li>
            </ul>
          </div>
          <div class="p-6 rounded-xl bg-white/5 border border-white/10 spec-card reveal">
            <h4 class="text-lg font-bold text-purple-400 mb-2">Connectivity</h4>
            <ul class="text-gray-300 space-y-1">
              <li>5G All Bands</li>
              <li>WiFi 7</li>
              <li>Bluetooth 5.4</li>
              <li>UWB Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

/* ================= THREE.JS ================= */
const canvas = document.getElementById("phone-canvas");
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 6.5);

/* Renderer */
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;

/* PHONE BODY */
const phoneGeometry = new RoundedBoxGeometry(2.3, 4.6, 0.3, 12, 0.32);
const phoneMaterial = new THREE.MeshStandardMaterial({
  color: 0x1e40af,
  metalness: 0.85,
  roughness: 0.25
});
const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
scene.add(phone);

/* FRAME */
const frameGeometry = new RoundedBoxGeometry(2.38, 4.68, 0.34, 12, 0.36);
const frameMaterial = new THREE.MeshStandardMaterial({
  color: 0x94a3b8,
  metalness: 0.95,
  roughness: 0.15
});
const frame = new THREE.Mesh(frameGeometry, frameMaterial);
scene.add(frame);

/*  LIGHTING  */

/* Key light */
const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
keyLight.position.set(5, 8, 6);
scene.add(keyLight);

/* Rim light */
const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.2);
rimLight.position.set(-6, 2, -5);
scene.add(rimLight);

/* Hemisphere = metallic realism */
const hemiLight = new THREE.HemisphereLight(
  0xffffff,
  0x111827,
  0.6
);
scene.add(hemiLight);

/* Ambient fill */
scene.add(new THREE.AmbientLight(0xffffff, 0.35));

/* CONTROLS */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;

function onResize() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  ScrollTrigger.refresh();
}

window.addEventListener("resize", onResize);

/* GSAP PART */

/* HERO SECTION */
gsap.from("h1", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

/* ONLY NEW ADDITION */

const heroLines = gsap.utils.toArray(".hero-line");
gsap.set(heroLines, { opacity: 0, y: 60 });
gsap.set(heroLines[0], { opacity: 1, y: 0 });

const heroTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-pin",
    start: "top top",
    end: "+=200%",
    scrub: 1,
    pin: true,
  }
});

heroLines.forEach((line, i) => {
  if (i === 0) return;
  heroTL
    .to(heroLines[i - 1], { y: -60, opacity: 0, duration: 0.4 })
    .fromTo(line, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "<");
});

heroTL.eventCallback("onReverseComplete", () => {
  gsap.set(heroLines, { opacity: 0, y: 60 });
  gsap.set(heroLines[0], { opacity: 1, y: 0 });
});

/* PRICE BADGE */
const priceBadge = document.querySelector(".price-badge");
gsap.from(priceBadge, {
  scale: 0.85,
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.8)"
});

/* PRICE HOVER */
priceBadge.addEventListener("mouseenter", () => {
  gsap.to(priceBadge, {
    scale: 1.08,
    y: -10,
    boxShadow: "0 30px 60px rgba(0,255,0,0.4)",
    duration: 0.3
  });
});
priceBadge.addEventListener("mouseleave", () => {
  gsap.to(priceBadge, {
    scale: 1,
    y: 0,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    duration: 0.3
  });
});

/* FEATURE CARDS – SCROLL + HOVER */
gsap.from(".feature-card", {
  y: 50,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#features-grid",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

/* FEATURE CARDS PARALLAX (DEPTH EFFECT) */
gsap.to(".feature-card", {
  y: -30,
  scrollTrigger: {
    trigger: "#features-grid",
    start: "top bottom",
    end: "top top",
    scrub: 1
  }
});

gsap.utils.toArray(".feature-card").forEach(card => {
  card.addEventListener("mouseenter", () =>
    gsap.to(card, {
      y: -10,
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
      duration: 0.3
    })
  );

  card.addEventListener("mouseleave", () =>
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3
    })
  );
});

/* CTA BUTTON HOVER POP-UP */
gsap.utils.toArray(".cta-button").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {
      duration: 0.3,
      y: -12,
      scale: 1.08,
      rotationY: 6,
      boxShadow: "0 30px 60px -15px rgba(0,0,0,0.6)",
      ease: "power2.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      duration: 0.4,
      y: 0,
      scale: 1,
      rotationY: 0,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      ease: "power2.out"
    });
  });
});

/* TECH SPECS POP-UP HOVER */
gsap.utils.toArray(".spec-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.3,
      y: -8,
      scale: 1.04,
      rotationX: 4,
      boxShadow: "0 25px 45px -10px rgba(0,0,0,0.45)",
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.35,
      y: 0,
      scale: 1,
      rotationX: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      ease: "power2.out"
    });
  });
});

/* PHONE ENTRANCE */
gsap.fromTo(
  phone.scale,
  { x: 0, y: 0, z: 0 },
  {
    x: 1,
    y: 1,
    z: 1,
    duration: 1.2,
    ease: "back.out(1.7)"
  }
);

/* PHONE PARALLAX */
gsap.to(phone.position, {
  y: -0.4,
  scrollTrigger: {
    trigger: "#features-grid",
    start: "top bottom",
    end: "top top",
    scrub: 1
  }
});

/* CAMERA PARALLAX */
gsap.to(camera.position, {
  y: 0.15,
  scrollTrigger: {
    trigger: "#features-grid",
    start: "top bottom",
    end: "top top",
    scrub: 1
  }
});

gsap.to(keyLight.position, {
  x: 2,
  scrollTrigger: {
    trigger: "#features-grid",
    start: "top bottom",
    end: "top top",
    scrub: 1
  }
});

// REVEAL ON SCROLL //
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});

/* LOOP */
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
