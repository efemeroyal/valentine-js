import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import html2canvas from "html2canvas";
import toast, { Toaster } from "react-hot-toast";

export default function CardGenerator() {
  const [msg, setMsg] = useState("");
  const cardRef = useRef(null);

  const handleAction = async (type) => {
    if (!msg) {
      toast.error("Please enter a message first!");
      return;
    }

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#e11d48", "#fb7185"],
    });

    if (type === "download") {
      const originalElement = cardRef.current;

      // 1. Create a hidden iframe to act as a "clean room"
      const iframe = document.createElement("iframe");
      iframe.style.visibility = "hidden";
      iframe.style.position = "fixed";
      iframe.style.left = "-10000px";
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // 2. Clone the card and strip ALL classes to avoid oklch scanning
      const clone = originalElement.cloneNode(true);
      clone.removeAttribute("class");
      // Ensure all children also have no classes that might trigger oklch
      const allDescendants = clone.getElementsByTagName("*");
      for (let el of allDescendants) el.removeAttribute("class");

      iframeDoc.body.appendChild(clone);

      // 3. Add just the basic fonts needed for the capture
      const style = iframeDoc.createElement("style");
      style.textContent = `
        body { margin: 0; padding: 20px; background: white; }
        .card-font { font-family: serif; }
      `;
      iframeDoc.head.appendChild(style);

      setTimeout(async () => {
        try {
          const canvas = await html2canvas(clone, {
            backgroundColor: "#fff1f2",
            scale: 2,
            logging: false,
            useCORS: true,
          });

          const data = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = data;
          link.download = `Valentine-Card.png`;
          link.click();
        } catch (err) {
          console.error("Capture failed:", err);
          toast.error(
            "Screenshot failed. Please try a different browser or simpler text.",
          );
        } finally {
          // 4. Cleanup the iframe
          document.body.removeChild(iframe);
        }
      }, 100);
    }
  };

  return (
    <div className="bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold text-rose-600 mb-6 italic font-serif text-center uppercase tracking-tighter">
        Create Your Love Note
      </h2>

      <textarea
        className="w-full p-5 rounded-2xl bg-white border border-rose-100 focus:ring-2 focus:ring-rose-400 outline-none h-32 mb-6 shadow-inner"
        placeholder="Type something romantic..."
        onChange={(e) => setMsg(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <button
          onClick={() => handleAction("celebrate")}
          className="flex-1 py-4 bg-[#e11d48] text-white rounded-2xl font-bold active:scale-95 transition-all hover:bg-[#be123c]"
        >
          CELEBRATE 🎉
        </button>
        <button
          onClick={() => handleAction("download")}
          className="flex-1 py-4 bg-[#0f172a] text-white rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-black"
        >
          💾 SAVE IMAGE
        </button>
      </div>

      <div
        ref={cardRef}
        style={{
          backgroundColor: "#fff1f2",
          padding: "40px",
          borderRadius: "24px",
          border: "8px double #fecdd3",
          textAlign: "center",
          position: "relative",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          className="card-font"
          style={{
            minHeight: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#be123c",
            fontStyle: "italic",
            lineHeight: "1.4",
            padding: "0 16px",
            wordBreak: "break-word",
          }}
        >
          {msg || "Your message will appear here..."}
        </div>

        <div
          style={{
            marginTop: "32px",
            paddingTop: "16px",
            borderTop: "1px solid #fecdd3",
            fontSize: "10px",
            letterSpacing: "0.1em",
            color: "#fb7185",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Generated via Valentine.js
        </div>
      </div>
    </div>
  );
}
