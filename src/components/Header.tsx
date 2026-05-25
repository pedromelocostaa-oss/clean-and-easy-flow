import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import vacueiLogo from "@/assets/vacuei-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Promo strip */}
      <div className="bg-vacuei-ink text-vacuei-paper flex items-center justify-center gap-4 px-4 py-2.5 text-[11px] font-body font-bold tracking-[0.06em]">
        <span>FRETE GRÁTIS NO BR ACIMA DE R$199</span>
        <span className="opacity-40">·</span>
        <span className="text-vacuei-mint">12× SEM JUROS NO CARTÃO</span>
        <span className="opacity-40 hidden sm:inline">·</span>
        <span className="text-vacuei-mint hidden sm:inline">30 DIAS PRA TESTAR</span>
      </div>

      {/* Main header */}
      <header className="bg-vacuei-bg border-b-[1.5px] border-vacuei-ink">
        <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] flex items-center justify-between py-4 lg:py-[18px]">
          <Link to="/" className="flex items-center">
            <img src={vacueiLogo} alt="Vacuei" className="h-6 lg:h-7" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {['Loja', 'Como funciona', 'Como instalar', 'Sobre', 'B2B'].map((n) => (
              <Link
                key={n}
                to={n === 'Como funciona' ? '#como-funciona' : n === 'Como instalar' ? '/como-instalar' : '#'}
                className="font-body font-bold text-[14px] text-vacuei-ink hover:text-vacuei-pop transition-colors"
              >
                {n}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button aria-label="Buscar" className="text-vacuei-ink hover:text-vacuei-pop transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.8} />
            </button>
            <button aria-label="Carrinho" className="text-vacuei-ink hover:text-vacuei-pop transition-colors">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.8} />
            </button>
            <Link to="/produto/jet-clean">
              <button
                className="bg-vacuei-ink text-vacuei-paper font-body font-extrabold text-[13px] px-5 py-[11px] rounded-full cursor-pointer border-none"
                style={{ boxShadow: '2px 2px 0 hsl(var(--vacuei-pop))' }}
              >
                Comprar · R$179
              </button>
            </Link>
          </div>

          {/* Mobile: logo + buy btn + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link to="/produto/jet-clean">
              <button
                className="bg-vacuei-ink text-vacuei-paper font-body font-extrabold text-[12px] px-4 py-2.5 rounded-full cursor-pointer border-none"
                style={{ boxShadow: '2px 2px 0 hsl(var(--vacuei-pop))' }}
              >
                Comprar
              </button>
            </Link>
            <button
              className="p-1 text-vacuei-ink"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-vacuei-ink bg-vacuei-paper p-5 space-y-4">
            {['Loja', 'Como funciona', 'Como instalar', 'Sobre', 'B2B'].map((n) => (
              <Link
                key={n}
                to={n === 'Como instalar' ? '/como-instalar' : '#'}
                className="block font-body font-bold text-sm text-vacuei-ink"
                onClick={() => setMobileOpen(false)}
              >
                {n}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
