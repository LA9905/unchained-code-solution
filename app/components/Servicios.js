'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Servicios() {
  const services = [
    { 
      id: 'web', 
      title: 'Desarrollo de Páginas Web', 
      desc: 'Sitios modernos, responsivos y optimizados para conversiones.',
      image: '/desarrolloweb.jpg'
    },
    { 
      id: 'ecommerce',
      title: 'E-commerce', 
      desc: 'Tiendas online seguras, rápidas y fáciles de gestionar.',
      image: '/ecommerce.jpg'
    },
    { 
      id: 'apis',
      title: 'APIs', 
      desc: 'Integraciones robustas y escalables para conectar sistemas.',
      image: '/API.png.webp'
    },
    { 
      id: 'apps',
      title: 'Desarrollo de Apps', 
      desc: 'Aplicaciones móviles nativas o híbridas a medida.',
      image: '/APPS.webp'
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Haz clic en cualquier servicio para ver los detalles técnicos y metodología.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 4000 }}
          className="pb-14"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link href={`/servicios/${service.id}`}>
                <div className="relative h-112.5 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border border-white/5">

                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-blue-600/90 text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm border border-white/20 transform transition-all duration-300 group-hover:bg-cyan-500 group-hover:scale-110">
                      Ver Detalles
                      <FaPlus className="text-[8px]" />
                    </div>
                  </div>

                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                      {service.title}
                    </h3>
                  
                    <p className="text-gray-300 text-sm leading-relaxed transition-all duration-500 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                      {service.desc}
                    </p>
                    
                    <div className="mt-4 flex items-center text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] md:hidden">
                      Tocar para ver más →
                    </div>

                    {/* Línea decorativa */}
                    <div className="h-1 bg-linear-to-r from-blue-600 to-cyan-400 mt-4 transition-all duration-500 w-full md:w-12 md:group-hover:w-full"></div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}