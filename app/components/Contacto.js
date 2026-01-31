'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function Contacto() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      // --- CÓDIGO DE CONVERSIÓN DE GOOGLE ADS ---
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17919239597/YvvnCP2M9u8bEK3Lx-BC', // ID
          'value': 1.0, // Valor simbólico para el algoritmo
          'currency': 'CLP' // Moneda
        });
      }
      // ------------------------------------------------------
      
      setIsSent(true);
      setIsSubmitting(false);
      form.current.reset();
    }, (error) => {
      alert('Hubo un error al enviar el mensaje: ' + error.text);
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[#092f58] font-black tracking-widest uppercase text-sm mb-4">
            Contacto
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">
            ¿Tienes un proyecto? <span className="text-[#092f58]">Hablemos.</span>
          </h3>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 min-h-100 flex flex-col justify-center">
          {!isSent ? (
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Nombre</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Tu nombre" 
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#0070f3] focus:bg-white outline-none text-gray-900 transition-all font-medium" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="tu@email.com" 
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#0070f3] focus:bg-white outline-none text-gray-900 transition-all font-medium" 
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Mensaje</label>
                <textarea 
                  name="message" 
                  placeholder="¿En qué podemos ayudarte?" 
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-[#0070f3] focus:bg-white outline-none text-gray-900 h-32 transition-all resize-none font-medium" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 font-black text-white uppercase tracking-widest rounded-xl shadow-lg transition-all duration-300 ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-[1.01] active:scale-95'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                {!isSubmitting && <FaRocket className="text-lg" />}
              </button>
            </form>
          ) : (
            <div className="text-center transition-all duration-500 transform animate-in fade-in zoom-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
                <FaCheckCircle className="text-4xl" />
              </div>
              <h4 className="text-2xl font-black text-black mb-2">¡Mensaje enviado con éxito!</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Gracias por confiar en <strong>Unchained Code Solution</strong>. <br />
                Hemos enviado una confirmación a tu correo. Te contactaremos pronto.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="text-[#0070f3] font-bold hover:underline transition-all"
              >
                Enviar otro mensaje
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}