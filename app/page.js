import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div>
      <Navbar />
      <WhatsAppButton />
        <header className="relative bg-linear-to-br from-gray-800 via-primary-900 to-gray-800 text-white pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden shadow-2xl">
        {/* Overlay más suave */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-2xl">
            Unchained Code Solution
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed opacity-95">
            Soluciones digitales profesionales, rápidas y personalizadas para tu negocio
            </p>
            
            <div className="mt-12">
            <a 
                href="#contacto" 
                className="inline-block bg-secondary text-white font-bold px-12 py-6 rounded-full shadow-2xl hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105 text-lg"
            >
                Cotiza tu proyecto ahora →
            </a>
            </div>
        </div>
        </header>
      <main>
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}