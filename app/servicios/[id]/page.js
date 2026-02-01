import ServicioDetalleClient from './ServicioDetalleClient';

export async function generateStaticParams() {
  return [
    { id: 'web' },
    { id: 'ecommerce' },
    { id: 'apis' },
    { id: 'apps' },
  ];
}

export default function Page() {
  return <ServicioDetalleClient />;
}