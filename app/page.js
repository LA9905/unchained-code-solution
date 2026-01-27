import Navbar from './components/Navbar';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-black">
      <Navbar />
      <WhatsAppButton />

      {/* Hero: Pantalla completa */}
      <header className="relative h-screen min-h-175 flex flex-col justify-end overflow-hidden">
        
        {/* 1. VIDEO DE RELLENO (Cover + Blur) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-md opacity-40 sm:opacity-100 sm:blur-none"
        >
          <source src="/promo-video.mp4" type="video/mp4" />
        </video>

        {/* 2. VIDEO NÍTIDO (Contain - Solo para móviles) */}
        <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <source src="/promo-video.mp4" type="video/mp4" />
            </video>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40"></div>

        {/* Contenido adaptable */}
        <div className="relative z-10 text-center w-full px-4 sm:px-6 pb-10 sm:pb-16 lg:pb-20 max-w-5xl mx-auto flex flex-col items-center gap-5">
          
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-light max-w-3xl mx-auto leading-relaxed opacity-90 drop-shadow-2xl">
            Soluciones digitales profesionales, rápidas y personalizadas para tu negocio
          </p>

          <a
            href="#contacto"
            className="inline-block bg-secondary text-white font-semibold 
                       px-8 py-3.5 sm:px-10 sm:py-4 md:px-12 md:py-5 
                       rounded-full shadow-2xl hover:bg-secondary/90 
                       transition-all duration-300 transform hover:scale-105 
                       text-base sm:text-lg md:text-xl 
                       border-2 border-white/20 hover:border-white/50 
                       whitespace-nowrap"
          >
            Cotiza tu proyecto ahora →
          </a>
          
        </div>
      </header>

      <main className="grow w-full bg-white">
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>

      <Footer />
    </div>
  );
}