import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './globals.css';



export default function RootLayout({ children }) {

  return (

    <html lang="es">

      <body>

        <Navbar />

        <WhatsAppButton />

        {children}

        <Footer />

      </body>

    </html>

  );

}