# 🌹 Valentine.js | Interactive Love Experience

An elegant, high-performance web application designed for Valentine's Day. This project demonstrates advanced frontend capabilities including real-time logic, complex animations, and client-side image generation.

**Live Link:** [Insert Your Hosted Link Here]

---

## 🚀 The Tech Stack

- **Framework:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Modern Glassmorphism Design)
- **Animations:** [GSAP](https://gsap.com/) (Background Physics) & [Framer Motion](https://www.framer.com/motion/) (UI Transitions)
- **Logic:** Custom React Hooks for Countdown & State Management
- **Features:** `html2canvas` for Image Generation & `canvas-confetti` for UX "pop"

---

## ✨ Key Features

### 🕰️ Real-time Countdown

A precision timer counting down to February 14th. Built with a custom React hook to manage interval clearing and performance optimization.

### 💖 Romantic Quiz

An interactive, 5-stage swipeable quiz. Uses **Framer Motion's AnimatePresence** to handle smooth entrance and exit animations between questions.

### 💌 Love Card Generator

A dynamic text-to-image tool.

- **The Problem:** Modern CSS (Tailwind v4 `oklch`) crashes standard image capture libraries.
- **The Solution:** Implemented a **hidden iframe sandbox** to isolate the card component, strip conflicting global styles, and render a clean PNG download using strictly sanitized Hex-based CSS.

### 🔔 Integrated Notifications

Uses `react-hot-toast` for real-time feedback during card generation and validation.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/yourusername/valentine-js.git](https://github.com/yourusername/valentine-js.git)
   ```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

## Developed with ❤️ by Royal Tk
