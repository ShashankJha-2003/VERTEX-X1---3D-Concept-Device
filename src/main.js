/*
VERTEX PHONE X1 - 3D concept Device 
//Final Code
Start
Jan 13, 2026 -
*/

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { gsap } from 'gsap';

/* ================= UI SETUP ================= */
/* Premium dark UI using TailwindCSS */
document.getElementById('app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">

    <!-- Hero Section -->

    <div class="max-w-4xl mx-auto text-center py-20">
      <!-- Main title with multi-color gradient - responsive text sizing -->
      <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-8">
        VERTEX PHONE X1

      </h1>
      <!-- Subtitle with responsive text and proper max-width wrapping -->
      <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-20">
        Engineered for precision. Minimal design.
      </p>
      
      <!-- Price badge -->
      <div class="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full text-2xl font-bold mb-16 shadow-2xl price-badge">
        <span class="text-3xl mr-2">₹</span>
        <span class="text-4xl">50,000</span>
        <span class="ml-2 text-emerald-200 text-lg">/ Starting</span>
      </div>
    </div>

    <!-- 3D Phone Canvas -->
    <div class="flex justify-center mb-28">
      <canvas id="phone-canvas" class="w-[450px] h-[850px]"></canvas>
    </div>

    <!-- Features Grid Section -->
    <div class="max-w-6xl mx-auto px-6 pb-16">
      <!-- Tailwind CSS Grid - Responsive breakpoints md/lg with proper gap-8 spacing -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" id="features-grid">
        <!-- Glassmorphism feature cards - bg-white/5 with subtle border -->
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

      <!-- CTA Buttons Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        <!-- Primary Buy Button - Blue gradient with SVG arrow icon animation -->
        <button class="cta-button buy-btn group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl">
          <span class="flex items-center">
            Buy Now 
            <!-- Arrow icon with hover slide animation -->
            <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </span>
        </button>
        
        <!-- Secondary Booking Button - Green gradient with calendar icon -->
        <button class="cta-button booking-btn group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl">
          <span class="flex items-center">
            Book Now 
            <!-- Calendar SVG icon with hover animation -->
            <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
            </svg>
          </span>
        </button>
        
        <!-- Glass morphism Learn More button with backdrop blur -->
        <button class="cta-button learn-btn group bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-6 px-12 rounded-2xl text-xl backdrop-blur-sm shadow-2xl">
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
          <div class="p-6 rounded-xl bg-white/5 border border-white/10 spec-card">
            <h4 class="text-lg font-bold text-emerald-400 mb-2">Camera</h4>
            <!-- Clean bullet list with space-y-1 perfect line spacing -->
            <ul class="text-gray-300 space-y-1">
              <li>200MP Main (OIS)</li>
              <li>50MP Ultra-wide</li>
              <li>12MP Telephoto 5x</li>
              <li>4K 120fps Video</li>
            </ul>
          </div>
          <div class="p-6 rounded-xl bg-white/5 border border-white/10 spec-card">
            <h4 class="text-lg font-bold text-orange-400 mb-2">Battery</h4>
            <ul class="text-gray-300 space-y-1">
              <li>5000mAh</li>
              <li>80W Fast Charge</li>
              <li>50W Wireless</li>
              <li>12hr Video Playback</li>
            </ul>
          </div>
          <div class="p-6 rounded-xl bg-white/5 border border-white/10 spec-card">
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

// === THREE.JS SCENE INITIALIZATION ===
// Create main scene object for 3D world container
const scene = new THREE.Scene();
const canvas = document.getElementById('phone-canvas');
// Setup perspective camera - 45° FOV gives natural smartphone viewing angle
const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
// Position camera 6.5 units away for perfect phone framing
camera.position.set(0, 0, 6.5);


const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping; 

// === SMARTPHONE BODY MODEL ===
// Phone geometry matches real Phone proportions (width: 2.3, height: 4.6, depth: 0.3)
const phoneGeometry = new RoundedBoxGeometry(2.3, 4.6, 0.3, 12, 0.32);
// Premium metallic blue glass backplate material with realistic metalness/roughness
const phoneMaterial = new THREE.MeshStandardMaterial({ color: 0x1e40af, metalness: 0.8, roughness: 0.2 });
const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
scene.add(phone);

// === ALUMINUM FRAME MODEL ===
// Slightly larger frame wraps around phone body (2.38 x 4.68 x 0.34)
const frameGeometry = new RoundedBoxGeometry(2.38, 4.68, 0.34, 12, 0.36);
// High-polish aluminum frame with maximum metalness minimum roughness
const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.95, roughness: 0.1 });
const frame = new THREE.Mesh(frameGeometry, frameMaterial);
scene.add(frame);

// === LIGHTING EFFECT ===
// Key light positioned top-right for main illumination 
const keyLight = new THREE.DirectionalLight(0xffffff, 1.8); 
keyLight.position.set(5, 8, 5); 
scene.add(keyLight);
// Blue rim light from left-back creates premium edge glow effect
const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.0); 
rimLight.position.set(-4, 2, -4); 
scene.add(rimLight);
// Soft ambient fill light prevents harsh shadows
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); 
scene.add(ambientLight);

// === ORBIT CONTROLS ===
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;   
controls.rotateSpeed = 0.55;   

// === WINDOW RESIZE HANDLER ===
// Maintain aspect ratio and canvas dimensions on browser resize
window.addEventListener('resize', () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
});

// === GSAP ANIMATIONS ===
gsap.from("h1", { duration: 1, scale: 0.9, opacity: 0 });

// Staggered feature cards entrance - each card appears sequentially
gsap.utils.toArray(".feature-card").forEach((card, i) => {
  gsap.from(card, { duration: 0.6, y: 40, scale: 0.9, opacity: 0, delay: i * 0.12 + 0.8, ease: "back.out(1.6)" });
});

// Price badge bouncy entrance animation with back.easeOut physics
const priceBadge = document.querySelector(".price-badge");
gsap.from(priceBadge, { duration: 1.2, scale: 0.8, y: 30, opacity: 0, delay: 1.2, ease: "back.out(2)" });

// === CTA BUTTON INTERACTIONS ===
// 3D lift hover effect on all call-to-action buttons
gsap.utils.toArray(".cta-button").forEach(button => {
  button.addEventListener('mouseenter', () => {
    // Complex 3D transform with lift, scale, rotation and dynamic shadow
    gsap.to(button, { 
      duration: 0.3, 
      y: -12, 
      scale: 1.08, 
      rotationY: 8,
      boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.6)", 
      ease: "power2.out"
    });
  });
  
  button.addEventListener('mouseleave', () => {
    // Smooth return to resting state with subtle shadow
    gsap.to(button, { 
      duration: 0.4, 
      y: 0, 
      scale: 1, 
      rotationY: 0,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)", 
      ease: "power2.out"
    });
  });
});

// CTA buttons slide-in entrance from left side
gsap.from(".cta-button", { duration: 0.8, x: -50, opacity: 0, stagger: 0.15, delay: 1.8, ease: "power3.out" });

// Technical specs cards staggered entrance animation
gsap.from(".spec-card", { duration: 0.8, y: 50, opacity: 0, stagger: 0.15, delay: 2.2, ease: "power2.out" });

// === PRICE BADGE SPECIAL EFFECTS ===
// Green glowing hover effect highlights affordability on interaction
priceBadge.addEventListener('mouseenter', () => {
  gsap.to(priceBadge, { 
    duration: 0.3, 
    y: -12, 
    scale: 1.08, 
    rotationY: 8, 
    boxShadow: "0 30px 60px -15px rgba(0, 255, 0, 0.4)", 
    ease: "power2.out" 
  });
});
priceBadge.addEventListener('mouseleave', () => {
  gsap.to(priceBadge, { 
    duration: 0.4, 
    y: 0, 
    scale: 1, 
    rotationY: 0, 
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)", 
    ease: "power2.out" 
  });
});

// === FEATURE CARDS MICRO-INTERACTIONS ===
gsap.utils.toArray(".feature-card").forEach(card => {
  card.addEventListener('mouseenter', () => gsap.to(card, { 
    duration: 0.3, 
    y: -10, 
    scale: 1.05, 
    rotationY: 5, 
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", 
    ease: "power2.out" 
  }));

  card.addEventListener('mouseleave', () => gsap.to(card, { 
    duration: 0.4, 
    y: 0, 
    scale: 1, 
    rotationY: 0, 
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)", 
    ease: "power2.out" 
  }));
});

// === TECHNICAL SPECS HOVER EFFECTS ===
gsap.utils.toArray(".spec-card").forEach(card => {
  // Unique X-axis rotation creates card flip effect for specs
  card.addEventListener('mouseenter', () => gsap.to(card, { 
    duration: 0.3, 
    y: -8, 
    scale: 1.03, 
    rotationX: 3, 
    boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)", 
    ease: "power2.out" 
  }));

  card.addEventListener('mouseleave', () => gsap.to(card, { 
    duration: 0.35, 
    y: 0, 
    scale: 1, 
    rotationX: 0, 
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)", 
    ease: "power2.out" 
  }));
});

// === 3D PHONE ENTRANCE ANIMATION ===
// Realistic physics-based scale animation from 0 to full size
gsap.fromTo(phone.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1.2, ease: "back.out(1.7)", delay: 0.5 });

// === MAIN RENDERING LOOP ===
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

/*
Final Notes:
Next features (future):
- Phone screen wallpaper animation
- Scroll-triggered section reveals
- Mobile hamburger menu
*/



