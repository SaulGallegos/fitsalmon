import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fitsalmon.com'),
  title: {
    default: 'FitSalmon - Bot WhatsApp IA para Entrenadores Personales México | 350 MXN/mes',
    template: '%s | FitSalmon',
  },
  description: 'Software premium con IA que usan trainers élite hispanos. Automatiza WhatsApp, agenda, cobros y clientes. 84 trainers aseguraron su 50% OFF. Solo 16 plazas fundadoras restantes. Desde 350 MXN/mes.',
  keywords: ['bot whatsapp para entrenadores personales', 'automatizar agenda entrenadores personales', 'asistente virtual fitness méxico', 'software gestión clientes trainer cdmx', 'plataforma élite entrenadores personales', 'micro sitio web para entrenadores personales', 'CRM entrenadores personales méxico', 'automatización fitness méxico'],
  authors: [{ name: 'FitSalmon', url: 'https://fitsalmon.com' }],
  creator: 'FitSalmon',
  publisher: 'FitSalmon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://fitsalmon.com',
    siteName: 'FitSalmon',
    title: 'FitSalmon - Bot WhatsApp IA para Trainers México | 50% OFF Fundadores',
    description: 'Software premium con IA para entrenadores personales en México. Automatiza WhatsApp, agenda, cobros y clientes. 50% OFF primer año para fundadores. Solo plazas limitadas.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FitSalmon - Software Premium con IA para Entrenadores Personales México',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fitsalmon',
    creator: '@fitsalmon',
    title: 'FitSalmon - Bot WhatsApp IA para Trainers desde 350 MXN/mes',
    description: 'Software premium que usan trainers élite hispanos. 50% OFF primer año para fundadores. Solo plazas limitadas.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://fitsalmon.com',
    languages: {
      'es-MX': 'https://fitsalmon.com',
      'es': 'https://fitsalmon.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'fitness technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Analytics />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0f231c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/images/profile.png" />
      </head>
      <body className={`${lato.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
