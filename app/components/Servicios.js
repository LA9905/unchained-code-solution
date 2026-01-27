'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Servicios() {
  const services = [
    { 
      title: 'Desarrollo de Páginas Web', 
      desc: 'Sitios modernos, responsivos y optimizados para conversiones.',
      image: '/desarrolloweb.jpg'
    },
    { 
      title: 'E-commerce', 
      desc: 'Tiendas online seguras, rápidas y fáciles de gestionar.',
      image: '/ecommerce.jpg'
    },
    { 
      title: 'APIs', 
      desc: 'Integraciones robustas y escalables para conectar sistemas.',
      image: '/API.png.webp'
    },
    { 
      title: 'Desarrollo de Apps', 
      desc: 'Aplicaciones móviles nativas o híbridas a medida.',
      image: '/APPS.webp'
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Nuestros Servicios
        </h2>

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
              <div className="relative h-112.5 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">

                {/* Imagen de Fondo */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent"></div>

                {/* Contenido sobre la imagen */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* El título sube en hover solo en PC (md:), en móvil se queda fijo */}
                  <h3 className="text-2xl font-bold text-white mb-3 transform transition-transform md:group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                
                  <p className="text-gray-200 text-base transition-all duration-500 transform translate-y-0 opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                    {service.desc}
                  </p>
                  
                  {/* Línea decorativa: En móvil se ve completa, en PC se expande al hacer hover */}
                  <div className="h-1 bg-secondary mt-4 transition-all duration-500 w-full md:w-12 md:group-hover:w-full"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}