import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'FitSalmon - Software Premium para Entrenadores Personales de Élite | Automatización con IA',
  description: 'La plataforma más exclusiva para entrenadores personales que facturan +$10K/mes. Automatización con IA, gestión premium de clientes, calendario inteligente y bot 24/7. Únete a los 72+ profesionales de élite.',
  keywords: 'software entrenadores personales premium, plataforma fitness élite, automatización IA fitness, gestión clientes entrenamiento personal, CRM entrenadores personales, software coaching fitness, herramientas profesionales fitness, calendario sesiones automatizado, bot IA entrenamiento, software gestión gimnasio boutique',
  authors: [{ name: 'FitSalmon' }],
  creator: 'FitSalmon',
  publisher: 'FitSalmon',
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
    locale: 'es_ES',
    url: 'https://fitsalmon.com',
    siteName: 'FitSalmon',
    title: 'FitSalmon - La Plataforma Elite para Profesionales del Fitness',
    description: 'Software premium de automatización con IA para entrenadores personales de élite. Gestión completa, calendario inteligente, bot 24/7 y más.',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'FitSalmon - Plataforma Premium para Entrenadores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FitSalmon - Software Premium para Entrenadores de Élite',
    description: 'Automatización con IA para profesionales del fitness que facturan +$10K/mes. Únete a la élite.',
    images: ['/images/profile.png'],
    creator: '@fitsalmon',
  },
  alternates: {
    canonical: 'https://fitsalmon.com',
  },
  category: 'fitness technology',
};

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'FitSalmon',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '147.00',
          priceCurrency: 'USD',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/PreOrder',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '72',
        },
        description:
          'Software premium de automatización con IA para entrenadores personales de élite. Gestión completa de clientes, calendario inteligente, bot 24/7 y mensajería unificada.',
        screenshot: 'https://fitsalmon.com/images/profile.png',
        author: {
          '@type': 'Organization',
          name: 'FitSalmon',
        },
      },
      {
        '@type': 'Organization',
        name: 'FitSalmon',
        url: 'https://fitsalmon.com',
        logo: 'https://fitsalmon.com/images/profile.png',
        description:
          'La plataforma más exclusiva para entrenadores personales que facturan +$10K/mes.',
        sameAs: [
          'https://twitter.com/fitsalmon',
          'https://instagram.com/fitsalmon',
          'https://linkedin.com/company/fitsalmon',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'FitSalmon',
        url: 'https://fitsalmon.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://fitsalmon.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Service',
        serviceType: 'Fitness Business Management Software',
        provider: {
          '@type': 'Organization',
          name: 'FitSalmon',
        },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios FitSalmon',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Bot de IA para Entrenadores',
                description:
                  'Automatización 24/7 con inteligencia artificial para interacción con clientes',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Gestión de Clientes Premium',
                description:
                  'Sistema completo de CRM con seguimiento de progreso y métricas',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Calendario Inteligente',
                description:
                  'Programación automatizada de sesiones con recordatorios inteligentes',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f231c] via-[#1a3b2f] to-[#0f231c] text-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f231c]/95 backdrop-blur-2xl border-b border-[#e9e5dc]/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] flex items-center justify-center shadow-[0_0_20px_rgba(237,101,49,0.3)]">
              <span className="text-white font-extrabold text-xl">F</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#e9e5dc] bg-clip-text text-transparent">FitSalmon</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#e9e5dc]/30 text-[#e9e5dc] text-sm rounded-xl font-bold hover:bg-[#2a5a4a]/50 hover:border-[#e9e5dc]/50 transition-all duration-400 hover:scale-105"
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#ed6531]/20 to-[#d4ff00]/20 border border-[#ed6531]/30 rounded-full backdrop-blur-sm">
              <span className="text-sm font-bold tracking-wider text-[#d4ff00]">ACCESO EXCLUSIVO • LISTA DE ESPERA LIMITADA</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-extrabold mb-8 leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                La Plataforma Elite
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ed6531] via-[#ff7e4d] to-[#ff9570] bg-clip-text text-transparent">
                Que Mereces
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-[#e9e5dc]/90 mb-6 leading-relaxed font-light max-w-3xl mx-auto">
              Para entrenadores personales que facturan <span className="text-white font-semibold">+$10,000 al mes</span>
            </p>

            <p className="text-xl text-[#a89f8f] mb-14 leading-relaxed max-w-3xl mx-auto">
              Deja de usar herramientas diseñadas para aficionados. FitSalmon es la única plataforma construida exclusivamente para profesionales del fitness de élite que exigen excelencia.
            </p>

            <WaitlistForm variant="hero" />

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[#d4ff00] hover:text-white transition-colors duration-300"
              >
                <span className="text-base font-semibold">o explora el demo interactivo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="mt-16 flex items-center justify-center gap-3 text-[#a89f8f]">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] border-3 border-[#0f231c] shadow-lg" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4ff00] to-[#b8db00] border-3 border-[#0f231c] shadow-lg" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4caf50] to-[#45a049] border-3 border-[#0f231c] shadow-lg" />
              </div>
              <p className="text-sm font-semibold">
                <span className="text-white">72+ profesionales de élite</span> ya aseguraron su lugar
              </p>
            </div>

            {/* Exclusivity Message */}
            <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-[#2a5a4a]/30 border border-[#d4ff00]/20 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                Miembros fundadores obtienen <span className="text-[#d4ff00] font-bold">50% de descuento de por vida</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#1a3b2f] via-[#234a3d] to-[#1a3b2f] relative overflow-hidden">
        {/* Ambient light effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ed6531]/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#ed6531]/10 to-[#d4ff00]/10 border border-[#ed6531]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest text-[#d4ff00] uppercase">Ingeniería de Precisión</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                Artesanía Digital
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] max-w-3xl mx-auto leading-relaxed">
              Cada pixel, cada interacción, cada automatización—diseñada con la perfección de un maestro relojero suizo.
            </p>
          </div>

          <div className="space-y-12 md:space-y-24 max-w-6xl mx-auto">
            {/* Image 1 - Profile */}
            <Link href="/demo" target="_blank" rel="noopener noreferrer" className="relative group block cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ed6531]/40 to-[#ff7e4d]/40 rounded-[2rem] blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#e9e5dc]/50 bg-gradient-to-b from-[#0a1a14] to-[#050f0a] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_20px_60px_rgba(237,101,49,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(237,101,49,0.1)] group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.9),0_30px_80px_rgba(237,101,49,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(237,101,49,0.2)] group-hover:scale-[1.015] group-hover:border-[#ed6531]/70 transition-all duration-700 backdrop-blur-xl ring-1 ring-white/5">
                <div className="aspect-video relative bg-gradient-to-br from-[#0a1a14] to-[#050f0a] p-3 sm:p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/profile.png"
                      alt="Panel de gestión premium de clientes FitSalmon - Vista detallada del perfil con métricas, progreso y comunicación unificada para entrenadores personales de élite"
                      fill
                      className="object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"></div>
                </div>
                {/* Desktop overlay text */}
                <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-xl border-t border-white/5 translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#ed6531] via-[#ff7e4d] to-[#ed6531] flex items-center justify-center shadow-[0_12px_40px_rgba(237,101,49,0.6),0_0_20px_rgba(237,101,49,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] ring-2 ring-[#ed6531]/30">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-tight">Perfiles de Clientes Completos</h3>
                  </div>
                  <p className="text-[#e9e5dc] text-base leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">Gestiona toda la información de tus clientes, progreso, sesiones y seguimiento en un solo lugar</p>
                </div>
              </div>
              {/* Mobile text below image */}
              <div className="block md:hidden mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ed6531] via-[#ff7e4d] to-[#ed6531] flex items-center justify-center shadow-[0_8px_24px_rgba(237,101,49,0.5)]">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">Perfiles de Clientes Completos</h3>
                </div>
                <p className="text-[#e9e5dc] text-sm leading-relaxed">Gestiona toda la información de tus clientes, progreso, sesiones y seguimiento en un solo lugar</p>
              </div>
            </Link>

            {/* Image 2 - Chat Inbox */}
            <Link href="/demo" target="_blank" rel="noopener noreferrer" className="relative group block cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4ff00]/40 to-[#b8db00]/40 rounded-[2rem] blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#e9e5dc]/50 bg-gradient-to-b from-[#0a1a14] to-[#050f0a] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_20px_60px_rgba(212,255,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(212,255,0,0.1)] group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.9),0_30px_80px_rgba(212,255,0,0.2),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(212,255,0,0.2)] group-hover:scale-[1.015] group-hover:border-[#d4ff00]/70 transition-all duration-700 backdrop-blur-xl ring-1 ring-white/5">
                <div className="aspect-video relative bg-gradient-to-br from-[#0a1a14] to-[#050f0a] p-3 sm:p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/chat.png"
                      alt="Bandeja de entrada inteligente FitSalmon - Mensajería unificada con WhatsApp, Instagram y Gmail integrados con automatización IA para entrenadores"
                      fill
                      className="object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"></div>
                </div>
                {/* Desktop overlay text */}
                <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-xl border-t border-white/5 translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#d4ff00] via-[#b8db00] to-[#d4ff00] flex items-center justify-center shadow-[0_12px_40px_rgba(212,255,0,0.6),0_0_20px_rgba(212,255,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] ring-2 ring-[#d4ff00]/30">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-[#0f231c] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-tight">Bandeja de Entrada Unificada</h3>
                  </div>
                  <p className="text-[#e9e5dc] text-base leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium mb-4">Todas tus conversaciones en un solo lugar inteligente</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span className="text-sm font-semibold text-white">WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <svg className="w-5 h-5 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="text-sm font-semibold text-white">Instagram</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <svg className="w-5 h-5 text-[#EA4335]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                      </svg>
                      <span className="text-sm font-semibold text-white">Gmail</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile text below image */}
              <div className="block md:hidden mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4ff00] via-[#b8db00] to-[#d4ff00] flex items-center justify-center shadow-[0_8px_24px_rgba(212,255,0,0.5)]">
                    <svg className="w-5 h-5 text-[#0f231c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">Bandeja de Entrada Unificada</h3>
                </div>
                <p className="text-[#e9e5dc] text-sm leading-relaxed mb-3">Todas tus conversaciones en un solo lugar inteligente</p>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="text-xs font-semibold text-white">WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-xs font-semibold text-white">Instagram</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                    <svg className="w-4 h-4 text-[#EA4335]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                    <span className="text-xs font-semibold text-white">Gmail</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 3 - Calendar */}
            <Link href="/demo" target="_blank" rel="noopener noreferrer" className="relative group block cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4caf50]/40 to-[#45a049]/40 rounded-[2rem] blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#e9e5dc]/50 bg-gradient-to-b from-[#0a1a14] to-[#050f0a] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_20px_60px_rgba(76,175,80,0.15),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(76,175,80,0.1)] group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.9),0_30px_80px_rgba(76,175,80,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(76,175,80,0.2)] group-hover:scale-[1.015] group-hover:border-[#4caf50]/70 transition-all duration-700 backdrop-blur-xl ring-1 ring-white/5">
                <div className="aspect-video relative bg-gradient-to-br from-[#0a1a14] to-[#050f0a] p-3 sm:p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/calendar_big.png"
                      alt="Calendario automatizado FitSalmon - Sistema inteligente de programación de sesiones con recordatorios automáticos y sincronización para entrenadores personales"
                      fill
                      className="object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"></div>
                </div>
                {/* Desktop overlay text */}
                <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-xl border-t border-white/5 translate-y-3 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-[#4caf50] via-[#45a049] to-[#4caf50] flex items-center justify-center shadow-[0_12px_40px_rgba(76,175,80,0.6),0_0_20px_rgba(76,175,80,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] ring-2 ring-[#4caf50]/30">
                      <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] tracking-tight">Calendario Inteligente</h3>
                  </div>
                  <p className="text-[#e9e5dc] text-base leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">Automatiza la programación de sesiones con recordatorios inteligentes y sincronización perfecta</p>
                </div>
              </div>
              {/* Mobile text below image */}
              <div className="block md:hidden mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4caf50] via-[#45a049] to-[#4caf50] flex items-center justify-center shadow-[0_8px_24px_rgba(76,175,80,0.5)]">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">Calendario Inteligente</h3>
                </div>
                <p className="text-[#e9e5dc] text-sm leading-relaxed">Automatiza la programación de sesiones con recordatorios inteligentes y sincronización perfecta</p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#2a5a4a]/50 to-[#234a3d]/50 border border-[#d4ff00]/30 rounded-2xl text-[#d4ff00] font-bold hover:gap-5 hover:bg-gradient-to-r hover:from-[#2a5a4a]/70 hover:to-[#234a3d]/70 hover:border-[#d4ff00]/50 hover:shadow-[0_0_40px_rgba(212,255,0,0.2)] transition-all duration-400 backdrop-blur-sm group"
            >
              <span>Explorar Demo Completo</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ed6531]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4ff00]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#ed6531]/10 to-transparent border border-[#ed6531]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest text-[#ed6531] uppercase">Transforma Tu Negocio</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Los Problemas Que{' '}
              <span className="bg-gradient-to-r from-[#ed6531] via-[#ff7e4d] to-[#ed6531] bg-clip-text text-transparent">
                Eliminamos
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] max-w-2xl mx-auto leading-relaxed">
              Di adiós a los obstáculos que frenan tu negocio de fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                problem: "Ahogado en Mensajes",
                solution: "Bandeja de entrada unificada en todas las plataformas con respuestas impulsadas por IA",
                icon: "💬"
              },
              {
                problem: "Caos de Programación Manual",
                solution: "Calendario inteligente que se gestiona solo y envía recordatorios inteligentes",
                icon: "📅"
              },
              {
                problem: "Información de Clientes Perdida",
                solution: "Perfiles completos con seguimiento de progreso e historial completo",
                icon: "📊"
              },
              {
                problem: "Seguimientos Inconsistentes",
                solution: "Bot de IA que nutre relaciones 24/7 automáticamente",
                icon: "🤖"
              },
              {
                problem: "Problemas de Pago",
                solution: "Facturación y procesamiento de pagos sin esfuerzo integrados",
                icon: "💳"
              },
              {
                problem: "Sin Presencia Online",
                solution: "Constructor de micro-sitios web profesional listo en minutos",
                icon: "🌐"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/70 via-[#234a3d]/80 to-[#1a3b2f]/70 border border-[#e9e5dc]/15 shadow-[0_12px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_20px_48px_rgba(237,101,49,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:border-[#e9e5dc]/25 transition-all duration-500 backdrop-blur-sm">
                <div className="text-5xl mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#e9e5dc] line-through decoration-[#ed6531] decoration-2 group-hover:decoration-[#ff7e4d] transition-colors duration-300">
                  {item.problem}
                </h3>
                <p className="text-[#a89f8f] leading-relaxed group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold mr-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#d4ff00]/10">✓</span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-[#234a3d] via-[#1a3b2f] to-[#234a3d] relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4ff00]/3 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#d4ff00]/10 to-transparent border border-[#d4ff00]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest text-[#d4ff00] uppercase">Suite Premium Completa</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                Todo Lo Que Necesitas,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ed6531] via-[#ff7e4d] to-[#d4ff00] bg-clip-text text-transparent">
                Nada Que No Necesites
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/80 via-[#234a3d]/90 to-[#1a3b2f]/80 border border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_32px_72px_rgba(237,101,49,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] flex items-center justify-center mb-8 shadow-[0_12px_40px_rgba(237,101,49,0.4)] group-hover:shadow-[0_16px_50px_rgba(237,101,49,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#e9e5dc] group-hover:text-white transition-colors duration-300">Bot Impulsado por IA</h3>
              <ul className="space-y-4 text-[#a89f8f]">
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Interacción automática con clientes 24/7</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Calificación inteligente de prospectos</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Sugerencias de entrenamiento personalizadas</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Seguimientos y chequeos automatizados</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/80 via-[#234a3d]/90 to-[#1a3b2f]/80 border border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_32px_72px_rgba(212,255,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4ff00] to-[#b8db00] flex items-center justify-center mb-8 shadow-[0_12px_40px_rgba(212,255,0,0.4)] group-hover:shadow-[0_16px_50px_rgba(212,255,0,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-[#0f231c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#e9e5dc] group-hover:text-white transition-colors duration-300">Mensajería Unificada</h3>
              <ul className="space-y-4 text-[#a89f8f]">
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Todas las plataformas en una sola bandeja</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">WhatsApp, email, Instagram</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Priorización inteligente de mensajes</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Plantillas de respuesta rápida</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/80 via-[#234a3d]/90 to-[#1a3b2f]/80 border border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_32px_72px_rgba(76,175,80,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4caf50] to-[#45a049] flex items-center justify-center mb-8 shadow-[0_12px_40px_rgba(76,175,80,0.4)] group-hover:shadow-[0_16px_50px_rgba(76,175,80,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#e9e5dc] group-hover:text-white transition-colors duration-300">Perfiles de Clientes</h3>
              <ul className="space-y-4 text-[#a89f8f]">
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Datos completos de salud y fitness</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Seguimiento de progreso y visualizaciones</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Historial de sesiones y notas</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Establecimiento de metas y seguimiento de hitos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ed6531]/5 to-[#d4ff00]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#ed6531]/10 to-[#d4ff00]/10 border border-[#ed6531]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest text-[#d4ff00] uppercase">Círculo de Élite</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                Profesionales Que No
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ed6531] to-[#d4ff00] bg-clip-text text-transparent">
                Aceptan Mediocridad
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] leading-relaxed max-w-2xl mx-auto">
              Entrenadores que facturan +$15K/mes ya transformaron su negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Después de invertir en 7 herramientas diferentes, FitSalmon es la primera que realmente comprende cómo trabajan los profesionales serios. Vale cada centavo.",
                author: "Carlos Mendoza",
                role: "$18K/mes • Propietario de Estudio Boutique"
              },
              {
                quote: "Mi ROI se pagó en 3 semanas. El bot de IA convierte más prospectos que mi asistente humano anterior. Esto es ingeniería de verdad.",
                author: "Ana Rodríguez",
                role: "$22K/mes • Especialista en Alto Rendimiento"
              },
              {
                quote: "He usado todo—desde Trainerize hasta Mindbody. FitSalmon está en otra liga. Es la diferencia entre un Casio y un Rolex.",
                author: "Miguel Torres",
                role: "$35K/mes • Coach de Celebridades"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/70 via-[#234a3d]/80 to-[#1a3b2f]/70 border border-[#e9e5dc]/15 shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:border-[#e9e5dc]/25 transition-all duration-500 backdrop-blur-sm">
                <div className="text-[#d4ff00] text-5xl mb-6 opacity-40 group-hover:opacity-60 transition-opacity duration-300 font-serif leading-none">"</div>
                <p className="text-[#e9e5dc] text-lg leading-relaxed mb-8 italic font-light group-hover:text-white transition-colors duration-300">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#e9e5dc]/10">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] shadow-[0_8px_24px_rgba(237,101,49,0.3)] group-hover:shadow-[0_12px_32px_rgba(237,101,49,0.4)] transition-all duration-500" />
                    <div className="absolute inset-0 rounded-full border-2 border-[#e9e5dc]/10"></div>
                  </div>
                  <div>
                    <p className="font-bold text-[#e9e5dc] text-lg group-hover:text-white transition-colors duration-300">{testimonial.author}</p>
                    <p className="text-sm text-[#a89f8f] mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 px-6 lg:px-12 bg-gradient-to-br from-[#ed6531] via-[#ff7e4d] to-[#ed6531] relative overflow-hidden">
        {/* Enhanced grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#ff7e4d]/20 to-[#ed6531]/40"></div>

        {/* Animated glow orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#d4ff00]/10 rounded-full blur-[100px]"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-5 py-2 bg-white/15 border border-white/25 rounded-full backdrop-blur-md">
            <span className="text-sm font-bold tracking-wider text-white uppercase">Solo 28 Plazas Restantes • Cierra 31 Diciembre</span>
          </div>

          <h2 className="text-6xl lg:text-7xl font-extrabold mb-10 text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            El Momento Definitivo
            <br />
            Para Decidir
          </h2>

          <p className="text-2xl lg:text-3xl text-white/95 mb-6 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
            <span className="font-bold text-white">72 profesionales de élite</span> ya aseguraron su membresía fundadora.
          </p>

          <p className="text-xl text-white/80 mb-14 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
            Cuando cerramos la lista de espera, el precio base será <span className="line-through text-white/60">$297/mes</span>. Los miembros fundadores pagan solo <span className="text-[#d4ff00] font-bold">$147/mes de por vida</span>.
          </p>

          <WaitlistForm variant="cta" />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <svg className="w-5 h-5 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                50% OFF de por vida
              </p>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <svg className="w-5 h-5 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                Acceso prioritario al lanzamiento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[#0f231c] border-t border-[#e9e5dc]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] flex items-center justify-center shadow-[0_0_30px_rgba(237,101,49,0.3)]">
                  <span className="text-white font-extrabold text-xl">F</span>
                </div>
                <span className="text-2xl font-extrabold">FitSalmon</span>
              </div>
              <p className="text-[#a89f8f] leading-relaxed max-w-md">
                La plataforma elite para profesionales del fitness que se niegan a conformarse con lo promedio.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#e9e5dc] mb-4">Producto</h4>
              <ul className="space-y-2 text-[#a89f8f]">
                <li><Link href="/demo" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4ff00] transition-colors">Demo</Link></li>
                <li><a href="#features" className="hover:text-[#d4ff00] transition-colors">Características</a></li>
                <li><a href="#pricing" className="hover:text-[#d4ff00] transition-colors">Precios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#e9e5dc] mb-4">Legal</h4>
              <ul className="space-y-2 text-[#a89f8f]">
                <li><a href="#privacy" className="hover:text-[#d4ff00] transition-colors">Política de Privacidad</a></li>
                <li><a href="#terms" className="hover:text-[#d4ff00] transition-colors">Términos de Servicio</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#e9e5dc]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[#a89f8f] text-sm">
              © 2025 FitSalmon. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://twitter.com/fitsalmon" target="_blank" rel="noopener noreferrer" className="text-[#a89f8f] hover:text-[#d4ff00] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://instagram.com/fitsalmon" target="_blank" rel="noopener noreferrer" className="text-[#a89f8f] hover:text-[#d4ff00] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/fitsalmon" target="_blank" rel="noopener noreferrer" className="text-[#a89f8f] hover:text-[#d4ff00] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
