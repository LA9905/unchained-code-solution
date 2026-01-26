import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56995334317"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-100 group md:bottom-10 md:right-10"
      aria-label="Contáctame por WhatsApp"
    >
      <div className="relative">
        {/* Pulso suave */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
        
        {/* Botón principal */}
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b858] transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative z-10">
          <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
        </div>
      </div>

      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
        ¡Chatea conmigo!
      </span>
    </a>
  );
}