import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function SocialBanner() {
  return (
    <section className="bg-linear-to-t from-gray-900 via-gray-800 to-gray-900 py-16 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¡Síguenos en nuestras redes!
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          Mantente al tanto de nuestras últimas soluciones digitales, proyectos y tips de tecnología.
        </p>
        
        <div className="flex justify-center gap-10 md:gap-16">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/unchained_code/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-all duration-300"
          >
            
            <div className="p-4 rounded-2xl bg-[#E4405F]/5 border border-[#E4405F]/20 group-hover:border-[#E4405F]/60 group-hover:bg-[#E4405F]/15 transition-all duration-300 transform group-hover:-translate-y-2 shadow-[0_0_15px_rgba(228,64,95,0.1)] group-hover:shadow-[0_0_20px_rgba(228,64,95,0.3)]">
              <FaInstagram 
                className="h-10 w-10 text-[#E4405F] filter drop-shadow-[0_0_5px_rgba(228,64,95,0.5)]" 
              />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61587132366963"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-all duration-300"
          >

            <div className="p-4 rounded-2xl bg-[#1877F2]/5 border border-[#1877F2]/20 group-hover:border-[#1877F2]/60 group-hover:bg-[#1877F2]/15 transition-all duration-300 transform group-hover:-translate-y-2 shadow-[0_0_15px_rgba(24,119,242,0.1)] group-hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]">
              <FaFacebook 
                className="h-10 w-10 text-[#1877F2] filter drop-shadow-[0_0_5px_rgba(24,119,242,0.5)]" 
              />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}