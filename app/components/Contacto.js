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
    <section id="contacto" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark mb-10">Contacto</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
          <input type="text" name="user_name" placeholder="Nombre" className="w-full p-2 border border-gray-300 rounded" required />
          <input type="email" name="user_email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" required />
          <textarea name="message" placeholder="Mensaje" className="w-full p-2 border border-gray-300 rounded h-32" required />
          <button type="submit" className="bg-secondary text-white px-6 py-2 rounded hover:bg-primary transition">Enviar</button>
        </form>
      </div>
    </section>
  );
}