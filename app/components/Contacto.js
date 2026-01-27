'use client';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(() => alert('¡Mensaje enviado!'), (error) => alert('Error: ' + error.text));
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Contacto
        </h2>
        
        <div className="max-w-xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
              <input 
                type="text" 
                name="user_name" 
                placeholder="Ej. Juan Pérez" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-0 outline-none text-gray-900 placeholder-gray-400 transition-all" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
              <input 
                type="email" 
                name="user_email" 
                placeholder="correo@ejemplo.com" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-0 outline-none text-gray-900 placeholder-gray-400 transition-all" 
                required 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tu mensaje</label>
              <textarea 
                name="message" 
                placeholder="Cuéntanos sobre el servicio que deseas cotizar..." 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-0 outline-none text-gray-900 placeholder-gray-400 h-40 transition-all resize-none" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}