'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const getLinkHref = (anchor) => {
    return pathname === '/' ? anchor : `/${anchor}`;
  };

  const SocialIcons = ({ className = "", animated = false }) => (
    <div className={`flex items-center gap-5 ${className} ${animated && isMenuOpen ? 'opacity-100 translate-y-0' : animated ? 'opacity-0 translate-y-10' : ''} transition-all duration-700 delay-[500ms]`}>
      <a
        href="https://www.instagram.com/unchained_code/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7 text-[#E4405F]" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61587132366963"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="Facebook"
      >
        <FaFacebook className="h-7 w-7 text-[#1877F2]" />
      </a>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-white/95 backdrop-blur-md shadow-xl text-gray-900'
            : 'bg-primary/90 shadow-md text-white'
        } ${isMenuOpen ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'}`} 
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 md:h-28 lg:h-32">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_transparent.svg"
                alt="Unchained Code Solution Logo"
                width={400}
                height={120} 
                priority
                className="h-20 w-auto md:h-24 lg:h-28 object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8 border-r border-gray-300/30 pr-8">
                <Link href={getLinkHref('#nosotros')} className="hover:text-secondary transition-colors font-semibold text-lg">
                  Quiénes Somos
                </Link>
                <Link href={getLinkHref('#servicios')} className="hover:text-secondary transition-colors font-semibold text-lg">
                  Servicios
                </Link>
                <Link href={getLinkHref('#proyectos')} className="hover:text-secondary transition-colors font-semibold text-lg">
                  Proyectos
                </Link>
                <Link href={getLinkHref('#contacto')} className="hover:text-secondary transition-colors font-semibold text-lg">
                  Contacto
                </Link>
              </div>
              <SocialIcons />
            </div>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Bars3Icon className={`h-9 w-9 ${isSticky ? 'text-gray-900' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-[60] transition-all duration-500 md:hidden ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-8 border-b border-white/10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo_transparent.svg" alt="Logo" width={200} height={60} className="h-16 w-auto object-contain" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <XMarkIcon className="h-10 w-10 text-white" />
            </button>
          </div>

          {/* Enlaces con animación Staggered */}
          <div className="flex flex-col p-10 space-y-10 text-white text-2xl font-semibold grow">
            {[
              { name: 'Quiénes Somos', href: '#nosotros', delay: 'delay-100' },
              { name: 'Servicios', href: '#servicios', delay: 'delay-200' },
              { name: 'Proyectos', href: '#proyectos', delay: 'delay-300' },
              { name: 'Contacto', href: '#contacto', delay: 'delay-[400ms]' },
            ].map((link, index) => (
              <Link
                key={index}
                href={getLinkHref(link.href)}
                onClick={() => setIsMenuOpen(false)}
                className={`hover:text-cyan-400 transition-all duration-500 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                } ${link.delay}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-10 border-t border-white/10 bg-black/40">
            <p className={`text-white/50 text-xs mb-6 font-bold uppercase tracking-[0.2em] transition-all duration-700 delay-[450ms] ${isMenuOpen ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
              Conecta con nosotros
            </p>
            <SocialIcons className="justify-start gap-10" animated={true} />
          </div>
        </div>
      </div>
    </>
  );
}