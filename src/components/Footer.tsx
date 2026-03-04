import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-lg">Evacuei</span>
            </div>
            <p className="text-sm opacity-70">
              Higiene com água. Mais conforto, mais autonomia.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Início</Link></li>
              <li><Link to="/produto/jet-clean" className="hover:opacity-100 transition-opacity">Jet Clean</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Suporte</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {/* Placeholder links — substituir por URLs reais */}
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contato</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Políticas de Troca</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Evacuei. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
