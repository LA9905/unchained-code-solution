import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary py-12 text-white border-t border-primary-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Texto centrado */}
          <p className="text-base opacity-90">
            © {new Date().getFullYear()} Unchained Code Solution  
            <span className="block mt-1 text-sm opacity-80">
              Creado por Alejandro Arraga
            </span>
          </p>

          {/* Iconos centrados */}
          <div className="flex items-center gap-10">
            <a
              href="https://www.instagram.com/" // ← cambia por tu real si tienes
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-125"
              aria-label="Instagram"
            >
              <FaInstagram className="h-8 w-8" />
            </a>

            <a
              href="https://linkedin.com/in/alejandro-arraga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>

            <a
              href="https://github.com/LA9905"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}