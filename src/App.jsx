import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Quiz from "./components/Quiz";
import Countdown from "./components/Countdown";
import CardGenerator from "./components/CardGenerator";

export default function App() {
  useEffect(() => {
    gsap.to(".bg-heart", {
      y: "-110vh",
      x: "random(-50, 50)",
      duration: "random(6, 12)",
      repeat: -1,
      ease: "power1.out",
      stagger: { each: 0.8, from: "random" },
    });
  }, []);

  return (
    <div className="min-h-screen bg-rose-50 overflow-x-hidden relative font-sans text-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-heart absolute bottom-[-50px] opacity-20 text-2xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-3xl mx-auto px-6 py-12"
      >
        <header className="text-center mb-16">
          <h1 className="text-6xl max-md:text-5xl max-sm:text-4xl font-black italic tracking-tighter text-rose-600 mb-2">
            VALENTINE<span className="text-slate-800">.JS</span>
          </h1>
          <p className="font-medium text-slate-500 uppercase tracking-widest text-[10px]">
            Frontend Excellence • Available for Hire
          </p>
        </header>

        <div className="space-y-12">
          <Quiz />
          <Countdown />
          <CardGenerator />
        </div>

        <footer className="mt-20 border-t border-rose-200 pt-10 text-center">
          <h2 className="text-3xl max-md:text-2xl font-bold mb-4 italic">
            Ready to scale your next project?
          </h2>
          <a
            href="mailto:efemeroyal247@gmail.com"
            className="inline-block px-12 py-5 bg-rose-600 text-white rounded-full font-black text-lg hover:shadow-2xl transition-all hover:-translate-y-1 max-md:py-4"
          >
            LET'S TALK DEALS 🤝
          </a>
        </footer>
      </motion.div>
    </div>
  );
}
