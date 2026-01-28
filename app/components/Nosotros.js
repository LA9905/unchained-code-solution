import Image from 'next/image';
import { RocketLaunchIcon, CodeBracketSquareIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-[#092f58] font-black tracking-[0.3em] uppercase text-sm mb-6 md:mb-8">
            Sobre Nosotros
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-black max-w-4xl leading-[1.1]">
            Transformamos ideas complejas en soluciones digitales <span className="text-[#092f58]">sin cadenas.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Columna de Texto */}
          <div className="space-y-12 order-2 lg:order-1">
            <p className="text-xl text-gray-900 leading-relaxed font-semibold">
              En <strong className="text-black font-black border-b-4 border-[#092f58]/20">Unchained Code Solution</strong>, somos un grupo de expertos apasionados por el desarrollo de software, dedicados a liberar el potencial tecnológico de las empresas.
            </p>

            <div className="space-y-10">
              {/* Item 1 */}
              <div className="flex gap-6 group cursor-default">
                <div className="shrink-0 w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl 
                                group-hover:bg-[#0070f3] group-active:bg-[#0070f3] transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
                  <CodeBracketSquareIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-black mb-2 transition-colors group-hover:text-[#0070f3]">Experiencia Full-Stack</h4>
                  <p className="text-gray-700 text-lg leading-snug font-medium">
                    Dominamos tecnologías como React, Next.js, Node.js y Python para construir sistemas robustos y escalables.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6 group cursor-default">
                <div className="shrink-0 w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl 
                                group-hover:bg-[#0070f3] group-active:bg-[#0070f3] transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
                  <RocketLaunchIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-black mb-2 transition-colors group-hover:text-[#0070f3]">Innovación Constante</h4>
                  <p className="text-gray-700 text-lg leading-snug font-medium">
                    Optimizamos procesos mediante motores de inventario y automatizaciones inteligentes que impulsan tu negocio.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6 group cursor-default">
                <div className="shrink-0 w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl 
                                group-hover:bg-[#0070f3] group-active:bg-[#0070f3] transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-black mb-2 transition-colors group-hover:text-[#0070f3]">Compromiso Profesional</h4>
                  <p className="text-gray-700 text-lg leading-snug font-medium">
                    Nuestra trayectoria asegura que cada línea de código esté diseñada para la mantenibilidad y el éxito a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 h-112.5 sm:h-137.5 md:h-175 w-full mt-4 lg:mt-0 px-4 md:px-0">
            
            {/* Imagen de Fondo */}
            <div className="absolute top-0 left-0 w-[65%] h-[45%] rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-2 border-gray-100 transition-all duration-500 hover:z-40 hover:scale-105 active:scale-95">
              <Image 
                src="/programador.avif" 
                alt="Enfoque en código" 
                fill 
                className="object-cover hover:brightness-110 transition-all"
                sizes="(max-w-768px) 60vw, 40vw"
              />
            </div>
            
            {/* Imagen Principal */}
            <div className="absolute top-[15%] right-0 w-[65%] h-[45%] rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-[6px] md:border-[10 border-white transition-all duration-500 hover:z-40 hover:scale-105 active:scale-95">
              <Image 
                src="/software-developer.jpg" 
                alt="Desarrollador trabajando" 
                fill 
                className="object-cover hover:brightness-110 transition-all"
                sizes="(max-w-768px) 60vw, 40vw"
              />
            </div>

            {/* Tercera imagen */}
            <div className="absolute bottom-[10%] left-0 w-[50%] h-[35%] rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl z-30 border-4 border-white bg-slate-50 transition-all duration-500 hover:z-40 hover:scale-105 active:scale-95">
              <Image 
                src="/illustration.png" 
                alt="Ilustración tecnológica" 
                fill 
                className="object-contain p-4 md:p-6 hover:rotate-3 transition-transform" 
                sizes="(max-w-768px) 50vw, 30vw"
              />
            </div>

            <div className="absolute bottom-[5%] right-[2%] bg-black text-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-40 transform -rotate-12 border-2 border-[#6ea4da] transition-transform hover:rotate-0 duration-300 scale-75 md:scale-100">
              <p className="text-2xl md:text-4xl font-black leading-none text-[#6ea4da]">10/10</p>
              <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1 md:mt-2">Excelencia<br/>Técnica</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}