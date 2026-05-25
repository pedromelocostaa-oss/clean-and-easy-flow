import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import vacueiLogo from "@/assets/vacuei-logo.png";

const paymentMethods = ['VISA', 'MASTER', 'ELO', 'AMEX', 'PIX', 'BOLETO', 'MERCADO PAGO'];

const Footer = () => {
  return (
    <footer className="bg-vacuei-ink text-vacuei-paper">
      <div className="max-w-[1240px] mx-auto px-[22px] lg:px-[60px] py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand col */}
          <div className="space-y-5">
            <img src={vacueiLogo} alt="Vacuei" className="h-6 brightness-0 invert" />
            <p className="font-body text-sm leading-relaxed opacity-70 max-w-xs">
              Higiene com água. Mais conforto, mais autonomia. O bidê de acoplar que instala em 8 minutos.
            </p>
            {/* Newsletter (desktop only) */}
            <div className="hidden lg:block space-y-2">
              <p className="font-body font-bold text-xs tracking-[0.1em] uppercase text-vacuei-mint">
                Receba novidades
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 bg-white/10 border border-vacuei-mint/40 rounded-full px-4 py-2.5 text-sm font-body text-vacuei-paper placeholder:text-vacuei-paper/40 outline-none focus:border-vacuei-mint/80"
                />
                <button
                  className="bg-vacuei-pop text-vacuei-pop-text rounded-full p-2.5 flex-shrink-0"
                  aria-label="Assinar newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Produto col */}
          <div>
            <h4 className="font-body font-extrabold text-xs tracking-[0.1em] uppercase text-vacuei-mint mb-4">
              Produto
            </h4>
            <ul className="space-y-3 font-body text-sm opacity-70">
              <li><Link to="/produto/jet-clean" className="hover:opacity-100 transition-opacity">Jet Clean</Link></li>
              <li><Link to="/como-instalar" className="hover:opacity-100 transition-opacity">Como instalar</Link></li>
              <li><Link to="/como-usar" className="hover:opacity-100 transition-opacity">Como usar</Link></li>
              <li><a href="#comparativo" className="hover:opacity-100 transition-opacity">Comparativo</a></li>
            </ul>
          </div>

          {/* Atendimento col */}
          <div>
            <h4 className="font-body font-extrabold text-xs tracking-[0.1em] uppercase text-vacuei-mint mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 font-body text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">WhatsApp</a></li>
              <li><a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Políticas de Troca</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Vacuei col */}
          <div>
            <h4 className="font-body font-extrabold text-xs tracking-[0.1em] uppercase text-vacuei-mint mb-4">
              Vacuei
            </h4>
            <ul className="space-y-3 font-body text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Sobre nós</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">B2B / Revendas</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Imprensa</a></li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-10 pt-8 border-t border-vacuei-paper/15">
          <div className="flex flex-wrap gap-2 mb-6">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="font-body font-extrabold text-[10.5px] tracking-[0.08em] text-vacuei-ink bg-vacuei-paper px-3 py-1.5 rounded"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="font-body text-xs opacity-40 text-center">
            © {new Date().getFullYear()} VACUEI. Todos os direitos reservados. · CNPJ XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
