import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fitsalmon.com'),
  title: {
    default: 'FitSalmon - Software Premium para Entrenadores de Élite',
    template: '%s | FitSalmon',
  },
  description: 'La plataforma más exclusiva para entrenadores personales que facturan +$10K/mes. Automatización con IA, gestión premium y herramientas de élite.',
  keywords: ['software entrenadores personales', 'CRM fitness', 'automatización IA fitness', 'gestión clientes entrenamiento', 'calendario sesiones', 'bot IA entrenadores'],
  authors: [{ name: 'FitSalmon', url: 'https://fitsalmon.com' }],
  creator: 'FitSalmon',
  publisher: 'FitSalmon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
