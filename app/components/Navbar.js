'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

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

  const getLinkHref = (anchor) => {
    return pathname === '/' ? anchor : `/${anchor}`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-white/95 backdrop-blur-md shadow-xl text-gray-900'
            : 'bg-primary/90 shadow-md text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <Link href="/" className="flex items-center py-2">
              <Image
                src="/logo_unchained.svg"
                alt="Unchained Code Solution Logo"
                width={300}
                height={90}
                priority
                className="h-14 md:h-18 lg:h-20 w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              <Link
                href={getLinkHref('#nosotros')}
                className="hover:text-secondary transition-colors font-semibold text-lg"
              >
                Quiénes Somos
              </Link>
              <Link
                href={getLinkHref('#servicios')}
                className="hover:text-secondary transition-colors font-semibold text-lg"
              >
                Servicios
              </Link>
              <Link
                href={getLinkHref('#proyectos')}
                className="hover:text-secondary transition-colors font-semibold text-lg"
              >
                Proyectos
              </Link>
              <Link
                href={getLinkHref('#contacto')}
                className="hover:text-secondary transition-colors font-semibold text-lg"
              >
                Contacto
              </Link>
            </div>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <XMarkIcon className={`h-9 w-9 ${isSticky ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Bars3Icon className={`h-9 w-9 ${isSticky ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil */}
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
          <div className="flex justify-between items-center p-6 border-b border-primary-700">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image src="/logo_unchained.svg" alt="Logo" width={180} height={50} className="h-12 w-auto" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)}><XMarkIcon className="h-8 w-8 text-white" /></button>
          </div>

          <div className="flex flex-col p-6 space-y-8 text-white text-xl font-medium">
            <Link href={getLinkHref('#nosotros')} onClick={() => setIsMenuOpen(false)}>Quiénes Somos</Link>
            <Link href={getLinkHref('#servicios')} onClick={() => setIsMenuOpen(false)}>Servicios</Link>
            <Link href={getLinkHref('#proyectos')} onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
            <Link href={getLinkHref('#contacto')} onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </div>
      </div>
    </>
  );
}