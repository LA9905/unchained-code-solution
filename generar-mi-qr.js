const QRCode = require('qrcode');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const url = 'https://unchainedcodesolution.com/';

const logoPath = path.join(__dirname, 'public', 'icon_transparent.png'); 

async function crearQRConLogo() {
  const size = 1000; // Alta resolución para impresión
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  try {
    
    await QRCode.toCanvas(canvas, url, {
      errorCorrectionLevel: 'H', 
      margin: 1,
      width: size,
      color: { dark: '#000000', light: '#ffffff' }
    });

    
    const logo = await loadImage(logoPath);
    const logoSize = size * 0.22; //
    const x = (size - logoSize) / 2;
    const y = (size - logoSize) / 2;

    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x - 5, y - 5, logoSize + 10, logoSize + 10);

    
    ctx.drawImage(logo, x, y, logoSize, logoSize);

    // PNG final
    const out = fs.createWriteStream('qr_unchained_CON_LOGO.png');
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    
    // SVG Vectorial (estándar)
    await QRCode.toFile('qr_unchained_vector.svg', url, {
        errorCorrectionLevel: 'H',
        type: 'svg',
        color: { dark: '#000000', light: '#ffffff' }
    });

    out.on('finish', () => {
      console.log('✅ ¡PROCESO COMPLETADO!');
      console.log('📂 PNG con logo: qr_unchained_CON_LOGO.png');
      console.log('📂 SVG vectorial: qr_unchained_vector.svg');
    });

  } catch (err) {
    console.error('❌ Error generando el QR:', err);
  }
}

crearQRConLogo();