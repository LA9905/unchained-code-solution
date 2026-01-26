export default function Servicios() {
  const services = [
    { title: 'Desarrollo de Páginas Web', desc: 'Sitios modernos, responsivos y optimizados para conversiones.' },
    { title: 'E-commerce', desc: 'Tiendas online seguras, rápidas y fáciles de gestionar.' },
    { title: 'APIs', desc: 'Integraciones robustas y escalables para conectar sistemas.' },
    { title: 'Desarrollo de Apps', desc: 'Aplicaciones móviles nativas o híbridas a medida.' },
  ];

  return (
    <section id="servicios" className="py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-500 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-800 leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}