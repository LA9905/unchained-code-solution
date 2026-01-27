'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-white/95 backdrop-blur-md shadow-xl text-gray-900' // Fondo blanco + texto oscuro
            : 'bg-primary/90 shadow-md text-white' // Fondo primario + texto blanco
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center py-2">
              <Image
                src="/logo_unchained.svg"
                alt="Unchained Code Solution Logo"
                width={300}
                height={90}
                priority
                quality={100}
                className="h-14 md:h-18 lg:h-20 w-auto object-contain"
              />
            </Link>

            {/* Menú desktop */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="#servicios"
                className="hover:text-secondary transition-colors font-medium text-lg"
              >
                Servicios
              </Link>
              <Link
                href="#proyectos"
                className="hover:text-secondary transition-colors font-medium text-lg"
              >
                Proyectos
              </Link>
              <Link
                href="#contacto"
                className="hover:text-secondary transition-colors font-medium text-lg"
              >
                Contacto
              </Link>
            </div>

            {/* Hamburguesa móvil - color dinámico según sticky */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <XMarkIcon 
                  className={`h-9 w-9 transition-colors ${
                    isSticky ? 'text-gray-900' : 'text-white'
                  }`} 
                />
              ) : (
                <Bars3Icon 
                  className={`h-9 w-9 transition-colors ${
                    isSticky ? 'text-gray-900' : 'text-white'
                  }`} 
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-primary/95 shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header del menú móvil */}
          <div className="flex justify-between items-center p-6 border-b border-primary-700">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo_unchained.svg"
                alt="Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col p-6 space-y-8 text-white text-xl font-medium">
            <Link
              href="#servicios"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#proyectos"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}