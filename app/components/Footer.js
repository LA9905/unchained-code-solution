import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-gray-900 via-gray-800 to-gray-900 py-16 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo */}
          <div className="mb-8">
            <Image 
              src="/logo_unchained.svg"
              alt="Unchained Code Solution Logo"
              width={280}
              height={80}
              priority
              quality={100}
              className="h-20 md:h-24 lg:h-28 w-auto mx-auto drop-shadow-xl"
            />
          </div>

          {/* Copyright */}
          <p className="text-base md:text-lg opacity-90">
            © {new Date().getFullYear()} Unchained Code Solution
            <span className="block mt-2 text-sm md:text-base opacity-80">
              Creado por Alejandro Arraga
            </span>
          </p>

          {/* Iconos de redes */}
          <div className="flex items-center gap-12 md:gap-16">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-secondary transition-all duration-300 transform hover:scale-125"
              aria-label="Instagram"
            >
              <FaInstagram className="h-9 w-9 md:h-10 md:w-10" />
            </a>

            <a
              href="https://linkedin.com/in/alejandro-arraga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-secondary transition-all duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-9 w-9 md:h-10 md:w-10" />
            </a>

            <a
              href="https://github.com/LA9905"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-secondary transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <FaGithub className="h-9 w-9 md:h-10 md:w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}