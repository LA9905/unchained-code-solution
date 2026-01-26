'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky 
          ? 'bg-primary shadow-xl backdrop-blur-sm' 
          : 'bg-primary/90 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-white text-2xl md:text-3xl font-bold tracking-tight">
            Unchained Code Solution
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="#servicios" className="text-white hover:text-secondary transition-colors font-medium">
              Servicios
            </Link>
            <Link href="#proyectos" className="text-white hover:text-secondary transition-colors font-medium">
              Proyectos
            </Link>
            <Link href="#contacto" className="text-white hover:text-secondary transition-colors font-medium">
              Contacto
            </Link>
          </div>
          {/* Botón móvil - puedes expandirlo después */}
          <div className="md:hidden text-white font-medium">Menú</div>
        </div>
      </div>
    </nav>
  );
}