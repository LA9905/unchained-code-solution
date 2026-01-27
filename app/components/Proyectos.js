'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Estilos base
import 'swiper/css/navigation'; // Flechas
import 'swiper/css/pagination'; // Puntos indicadores
import Image from 'next/image';
import Link from 'next/link';

export default function Proyectos() {
  const projects = [
    {
      name: 'Signo App',
      url: 'https://www.signo-app.com/',
      desc: 'Aplicación de gestión de despachos y inventario digital',
      image: '/signoapp.png',
    },
    {
      name: 'Construcciones La Mano de Dios',
      url: 'https://www.construccioneslamanodedios.com/',
      desc: 'Sitio corporativo de construcción y remodelación',
      image: '/construcciones.png',
    },
    {
      name: 'Compasit',
      url: 'https://compasit.cl/',
      desc: 'Plataforma de servicios integrales',
      image: '/compasit.png',
    },
  ];

  return (
    <section id="proyectos" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          Nuestros Proyectos
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1} // Móvil: 1 slide
          breakpoints={{
            640: { slidesPerView: 1.5, centeredSlides: true }, // sm
            768: { slidesPerView: 2 }, // md
            1024: { slidesPerView: 3 }, // lg
          }}
          navigation // Flechas izquierda/derecha
          pagination={{ clickable: true }} // Puntos abajo
          loop // Repetir infinitamente
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-desliza cada 5s
          className="pb-12" // Espacio para los puntos de paginación
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 group">
                {/* Imagen del proyecto */}
                <div className="relative aspect-video md:aspect-4/3">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-6 text-base md:text-lg">
                    {project.desc}
                  </p>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-900 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300 text-base md:text-lg mt-4"
                  >
                    Visitar sitio →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}