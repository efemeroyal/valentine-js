import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    text: "What's the perfect V-Day vibe?",
    options: [
      "Expensive Dinner",
      "Cozy Movie Night",
      "Adventurous Site-seeing",
    ],
  },
  {
    id: 2,
    text: "Which flower says 'I Love You' best?",
    options: ["Classic Red Roses", "Wild Sunflowers", "White Lilies"],
  },
  {
    id: 3,
    text: "What's your primary Love Language?",
    options: ["Quality Time", "Words of Affirmation", "Acts of Service"],
  },
  {
    id: 4,
    text: "Pick a dream romantic destination:",
    options: ["Paris, France", "Santorini, Greece", "Kyoto, Japan"],
  },
  {
    id: 5,
    text: "The best gift is something...",
    options: ["Handmade", "Luxury/Expensive", "A Total Surprise"],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 min-h-87.5 flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div
            key={questions[step].id}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="text-center"
          >
            <span className="text-rose-400 text-sm font-bold tracking-widest uppercase">
              Question {step + 1}/5
            </span>
            <h3 className="text-2xl max-md:text-xl font-bold text-slate-800 mt-2 mb-8">
              {questions[step].text}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setStep(step + 1)}
                  className="w-full py-4 bg-white/60 hover:bg-rose-500 hover:text-white transition-all rounded-2xl font-semibold shadow-sm active:scale-95"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">💖</div>
            <h3 className="text-3xl font-black text-rose-600">
              Pure Romantic!
            </h3>
            <p className="text-slate-600 mt-2">You've got a heart of gold.</p>
            <button
              onClick={() => setStep(0)}
              className="mt-6 text-rose-500 font-bold underline"
            >
              Start Over
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
