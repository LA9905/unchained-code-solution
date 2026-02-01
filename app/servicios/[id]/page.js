'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  FaCode, FaShoppingCart, FaPlug, FaMobileAlt, 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaSwift, FaShieldAlt, FaRocket, FaSearchDollar
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFirebase } from 'react-icons/si';

const contentData = {
  'web': {
    title: 'Desarrollo de Páginas Web',
    importance: 'En el ecosistema digital actual, tu sitio web es la infraestructura central de tu marca. No es solo diseño; es ingeniería orientada a resultados. Un sitio lento o visualmente obsoleto no solo pierde tráfico, sino que destruye la confianza de tus clientes potenciales antes de que interactúen contigo.',
    techs: [
      { name: 'Next.js 14+', icon: <SiNextdotjs />, desc: 'Renderizado híbrido que garantiza que tu página cargue en milisegundos, fundamental para posicionar en Google.' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, desc: 'Estética moderna con sistemas de diseño ultra-personalizados y una adaptabilidad perfecta en móviles.' },
      { name: 'TypeScript', icon: <SiTypescript />, desc: 'Garantiza una arquitectura de software impecable, minimizando errores y facilitando futuras actualizaciones.' }
    ],
    metodologia: 'Fusionamos psicología del consumidor con desarrollo técnico. Estudiamos el comportamiento de tu audiencia para estructurar un sitio que no solo informe, sino que guíe al usuario hacia la acción de compra de manera orgánica y fluida.',
    img: '/desarrolloweb.jpg'
  },
  'ecommerce': {
    title: 'E-commerce de Alto Nivel',
    importance: 'Tu tienda online debe ser una máquina de ventas automatizada que nunca duerme. La escalabilidad es la clave: tu plataforma debe ser capaz de procesar miles de transacciones simultáneas sin pestañear, manteniendo los datos de tus clientes bajo máxima seguridad.',
    techs: [
      { name: 'Arquitectura Escalable', icon: <FaNodeJs />, desc: 'Sistemas preparados para picos de tráfico intensos como Black Friday o lanzamientos especiales.' },
      { name: 'Gestión Inteligente', icon: <FaDatabase />, desc: 'Control total de inventario, envíos y perfiles de cliente con bases de datos de alto rendimiento.' },
      { name: 'Experiencia Fluida', icon: <FaReact />, desc: 'Checkouts rápidos y sin recargas de página que reducen drásticamente la tasa de abandono de carritos.' }
    ],
    metodologia: 'Implementamos pasarelas de pago blindadas y paneles de administración intuitivos. Diseñamos cada paso del túnel de venta para eliminar cualquier fricción que impida que el dinero llegue a tu cuenta.',
    img: '/ecommerce.jpg'
  },
  'apis': {
    title: 'Integración de APIs y Sistemas',
    importance: 'La fragmentación de datos es el enemigo de la eficiencia. Si tu CRM, tu inventario y tu contabilidad no se hablan entre sí, estás perdiendo tiempo y dinero. Creamos el sistema nervioso digital que conecta todas tus herramientas en una sola fuente de verdad.',
    techs: [
      { name: 'Automatización Pro', icon: <FaPython />, desc: 'Scripts inteligentes que ejecutan tareas repetitivas por ti, eliminando el error humano al 100%.' },
      { name: 'Conectividad Universal', icon: <FaPlug />, desc: 'Conectamos herramientas como SAP, Salesforce, Shopify o sistemas propios mediante protocolos REST o GraphQL.' },
      { name: 'Seguridad de Grado Bancario', icon: <FaShieldAlt />, desc: 'Protocolos de encriptación avanzados para que el flujo de información sensible sea impenetrable.' }
    ],
    metodologia: 'Auditamos tu flujo de trabajo actual para identificar cuellos de botella. Desarrollamos puentes de información robustos que permiten que tu empresa crezca sin necesidad de aumentar la carga administrativa manual.',
    img: '/API.png.webp'
  },
  'apps': {
    title: 'Desarrollo de Apps Móviles',
    importance: 'Tener una app es tener un lugar privilegiado en el dispositivo personal de tu cliente. Es la herramienta de fidelización definitiva que permite comunicación directa vía notificaciones push y una experiencia de usuario que la web móvil no puede igualar.',
    techs: [
      { name: 'Cross-Platform Elite', icon: <FaReact />, desc: 'Desarrollamos una sola vez para iOS y Android, optimizando costos sin sacrificar la calidad nativa.' },
      { name: 'Cloud & Real-time', icon: <SiFirebase />, desc: 'Sincronización instantánea de datos y notificaciones que mantienen a tus usuarios comprometidos.' },
      { name: 'Performance Nativo', icon: <FaMobileAlt />, desc: 'Optimización de hardware (cámara, GPS, biometría) para que la app vuele en cualquier smartphone.' }
    ],
    metodologia: 'Diseñamos interfaces "Mobile-First" basadas en gestos naturales. Nos enfocamos en la retención del usuario, asegurando que tu aplicación sea tan útil e intuitiva que se convierta en parte de la rutina diaria de tu cliente.',
    img: '/APPS.webp'
  }
};

export async function generateStaticParams() {
  return [
    { id: 'web' },
    { id: 'ecommerce' },
    { id: 'apis' },
    { id: 'apps' },
  ];
}

export default function ServicioDetalle() {
  const { id } = useParams();
  const data = contentData[id];

  if (!data) return <div className="h-screen flex items-center justify-center text-white text-2xl font-bold bg-black">Servicio no encontrado</div>;

  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero Sección */}
      <section className="relative pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              {data.title}<span className="text-cyan-400">.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {data.importance}
            </p>
          </div>
          <div className="relative h-72 md:h-125 rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,212,255,0.3)] border border-white/10">
            <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-24 bg-white rounded-t-[60px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Tecnología de Vanguardia</h2>
            <p className="text-gray-500 text-lg">Utilizamos los estándares más exigentes del mercado global.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {data.techs.map((t, i) => (
              <div key={i} className="p-10 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="text-6xl text-blue-600 mb-6 group-hover:text-cyan-500 transition-colors duration-300 drop-shadow-sm">
                  {t.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{t.name}</h3>
                <p className="text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología Unchained */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 italic uppercase tracking-tighter">La Diferencia Unchained</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 leading-relaxed font-light">
            {data.metodologia} <span className="text-white font-semibold underline decoration-cyan-500 decoration-2 underline-offset-4">No somos una agencia de "plantillas";</span> somos tus socios tecnológicos. Cada línea de código es una pieza de ingeniería artesanal diseñada para que tu negocio no solo funcione, sino que domine su mercado.
          </p>
          
          <Link 
            href="/#contacto" 
            className="group relative inline-flex items-center justify-center px-10 py-6 font-black text-white uppercase tracking-widest transition-all duration-300 bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-full shadow-[0_10px_40px_rgba(0,112,255,0.4)] hover:shadow-[0_15px_50px_rgba(0,212,255,0.6)] hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              ¡QUIERO EMPEZAR MI PROYECTO AHORA!
              <FaRocket className="ml-4 text-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}