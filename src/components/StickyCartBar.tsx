import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";

const StickyCartBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-vacuei-paper border-t-[1.5px] border-vacuei-ink px-4 py-3"
      style={{ boxShadow: '0 -4px 20px hsl(218 84% 23% / 0.12)' }}
    >
      <div className="flex items-center gap-3">
        <img
          src={productHero}
          alt="Jet Clean"
          className="w-11 h-11 rounded-xl object-cover flex-shrink-0 border border-vacuei-ink"
        />
        <div className="flex-1 min-w-0">
          <div className="font-body font-extrabold text-sm text-vacuei-ink leading-none">Jet Clean</div>
          <div className="font-body text-xs text-vacuei-ink-soft mt-0.5">R$179 · 12× R$15</div>
        </div>
        <Link to="/produto/jet-clean">
          <button
            className="bg-vacuei-pop text-vacuei-pop-text font-body font-extrabold text-sm px-5 py-2.5 rounded-full flex items-center gap-1.5 flex-shrink-0"
            style={{ boxShadow: '3px 3px 0 hsl(var(--vacuei-ink))' }}
          >
            Comprar <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StickyCartBar;
