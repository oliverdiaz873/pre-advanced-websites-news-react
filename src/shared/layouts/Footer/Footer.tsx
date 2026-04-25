import './Footer.css';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../../components/icons';

/**
 * Footer
 * 
 * Componente de pie de página global.
 * Contiene derechos reservados, redes sociales y enlaces legales.
 */
export const Footer = () => {
  return (
    <footer className="w-full bg-[rgba(0,0,0,0.85)] text-white py-5 md:pt-4 md:pb-6 lg:pt-5 lg:px-7 lg:pb-7 text-center">
      <div className="flex flex-col items-center gap-4 md:gap-[15px] lg:gap-5 max-w-[1200px] mx-auto">
        
        {/* Derechos reservados */}
        <div className="text-[18px]">
          <small>&copy; {new Date().getFullYear()} NewsHub. Todos los derechos reservados.</small>
        </div>

        {/* Íconos de redes sociales */}
        <div className="flex gap-[25px]">
          <a href="https://facebook.com/newshub" target="_blank" rel="nofollow noopener noreferrer" aria-label="Visítanos en Facebook" className="text-white hover:text-[#fd3030ec] hover:scale-120 transition-all duration-300">
            <FacebookIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </a>
          <a href="https://twitter.com/newshub" target="_blank" rel="nofollow noopener noreferrer" aria-label="Visítanos en X (antes Twitter)" className="text-white hover:text-[#fd3030ec] hover:scale-120 transition-all duration-300">
            <TwitterIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </a>
          <a href="https://instagram.com/newshub" target="_blank" rel="nofollow noopener noreferrer" aria-label="Visítanos en Instagram" className="text-white hover:text-[#fd3030ec] hover:scale-120 transition-all duration-300">
            <InstagramIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
          </a>
        </div>

        {/* Enlaces legales */}
        <div className="footer-links">
          <Link to="/legal/privacy" title="Política de Privacidad">Política de Privacidad</Link>
          <span className="text-[#ccc] mx-1">|</span>
          <Link to="/legal/terms" title="Términos de Uso">Términos de Uso</Link>
        </div>
      </div>
    </footer>
  );
};
