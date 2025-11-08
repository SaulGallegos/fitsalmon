import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Demo Interactivo - FitSalmon',
  description: 'Explora el demo interactivo de FitSalmon. Descubre cómo automatizar tu negocio de entrenamiento personal con IA, WhatsApp, calendario inteligente y gestión de clientes.',
  keywords: ['demo fitsalmon', 'plataforma fitness demo', 'software entrenadores demo', 'bot whatsapp fitness'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Demo Interactivo - FitSalmon | Software Premium para Trainers',
    description: 'Explora el demo completo de FitSalmon. Ve cómo automatizar WhatsApp, calendario, clientes y cobros con IA.',
    url: 'https://fitsalmon.com/demo',
    siteName: 'FitSalmon',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FitSalmon Demo - Software Premium con IA para Entrenadores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo Interactivo - FitSalmon',
    description: 'Explora el demo completo. Ve cómo automatizar tu negocio de entrenamiento con IA.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://fitsalmon.com/demo',
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
