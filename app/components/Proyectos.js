export default function Proyectos() {
  const projects = [
    { name: 'Signo App', url: 'https://www.signo-app.com/', desc: 'Aplicación de gestión y firma digital' },
    { name: 'Construcciones La Mano de Dios', url: 'https://www.construccioneslamanodedios.com/', desc: 'Sitio corporativo de construcción' },
    { name: 'Compasit', url: 'https://compasit.cl/', desc: 'Plataforma de servicios integrales' },
  ];

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Nuestros Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-blue-500 overflow-hidden flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-800 mb-6 grow">{project.desc}</p>
              <span className="text-primary font-semibold group-hover:text-secondary transition-colors inline-flex items-center">
                Visitar sitio →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}