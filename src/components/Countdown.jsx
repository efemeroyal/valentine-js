import { useCountdown } from "../hooks/useCountdown";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown("2026-02-14T00:00:00");

  return (
    <div className="bg-rose-600 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="relative z-10 text-center">
        <p className="uppercase tracking-[0.2em] text-sm opacity-80 mb-4 font-bold">
          Countdown to Valentine's
        </p>
        <div className="flex justify-center gap-6 font-mono text-4xl font-black">
          {[
            { label: "Days", val: days },
            { label: "Hrs", val: hours },
            { label: "Min", val: minutes },
            { label: "Sec", val: seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span>{String(item.val).padStart(2, "0")}</span>
              <span className="text-[10px] font-sans uppercase tracking-widest opacity-70">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-10 -right-10 text-[12rem] opacity-10 font-black pointer-events-none">
        ❤️
      </div>
    </div>
  );
}
