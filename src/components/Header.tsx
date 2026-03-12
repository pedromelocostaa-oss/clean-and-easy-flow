import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import vacueiLogo from "@/assets/vacuei-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-elevated/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={vacueiLogo} alt="VACUEI" className="h-7" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Início
          </Link>
          <Link to="/como-instalar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como Instalar
          </Link>
          <Link to="/como-usar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Como Usar
          </Link>
          <Link to="/produto/jet-clean">
            <Button variant="cta" size="default">
              Quero o meu →
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface-elevated p-4 space-y-3">
          <Link
            to="/"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/como-instalar"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Como Instalar
          </Link>
          <Link
            to="/como-usar"
            className="block text-sm font-medium text-muted-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Como Usar
          </Link>
          <Link to="/produto/jet-clean" onClick={() => setMobileOpen(false)}>
            <Button variant="cta" className="w-full">
              Quero o meu →
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
