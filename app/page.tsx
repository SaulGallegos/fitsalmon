import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'FitSalmon - Bot WhatsApp IA para Entrenadores Personales México | Desde 350 MXN/mes',
  description: 'Software premium con IA exclusivo para entrenadores personales. Automatiza agenda, WhatsApp, cobros y clientes. Tus clientes NO necesitan apps ni cuentas - siguen usando WhatsApp normalmente. 84 trainers aseguraron su 50% OFF. Solo 16 plazas fundadoras restantes. Desde 350 MXN/mes.',
  keywords: 'bot whatsapp para entrenadores personales, automatizar agenda entrenadores personales, asistente virtual fitness méxico, software gestión clientes trainer cdmx, plataforma élite entrenadores personales, cómo facturar más de 10k usd como trainer, micro sitio web para entrenadores personales, CRM entrenadores personales méxico, automatización fitness méxico, software trainers guadalajara',
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
    locale: 'es_MX',
    url: 'https://fitsalmon.com',
    siteName: 'FitSalmon',
    title: 'FitSalmon - Bot WhatsApp IA para Trainers México | 50% OFF Fundadores',
    description: 'Lujo accesible desde 350 MXN/mes. Automatiza WhatsApp, agenda y cobros. 84 trainers ya aseguraron su plaza fundadora. Solo 16 restantes.',
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
    title: 'FitSalmon - Bot WhatsApp IA para Trainers desde 350 MXN/mes',
    description: 'Software premium que usan trainers élite hispanos. 50% OFF primer año para fundadores. Solo 16 plazas restantes.',
    images: ['/images/og-image.png'],
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
          price: '350.00',
          priceCurrency: 'MXN',
          priceValidUntil: '2025-12-31',
          availability: 'https://schema.org/PreOrder',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '84',
        },
        description:
          'Software premium con IA para entrenadores personales en México. Bot WhatsApp automatizado, gestión de clientes, calendario inteligente y mensajería unificada. Automatiza agenda, cobros y seguimiento 24/7.',
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
          'El software premium con IA que usan trainers élite hispanos para automatizar su negocio. Desde 350 MXN/mes.',
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
        areaServed: {
          '@type': 'Country',
          name: 'Mexico',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servicios FitSalmon',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Bot WhatsApp con IA 24/7',
                description:
                  'Automatización completa de WhatsApp con IA que califica leads, agenda sesiones, cobra automático y recupera clientes inactivos',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mensajería Unificada WhatsApp + Instagram + Email',
                description:
                  'Bandeja única con priorización inteligente de leads calientes y plantillas en español que convierten',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Perfiles de Clientes de Lujo',
                description:
                  'Gráficos automáticos de peso, grasa corporal, fotos antes/después y programas PDF con branding automático',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Micro-sitio Profesional',
                description:
                  'Link-in-bio élite con testimonios, paquetes y bot 24/7. Dominio gratis en fitsalmon.com',
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
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#e9e5dc] bg-clip-text text-transparent">FitSalmon</span>
              <span className="hidden sm:inline-block px-2 py-1 text-[10px] font-bold tracking-wider text-[#d4ff00] bg-[#d4ff00]/10 border border-[#d4ff00]/30 rounded-md uppercase">En Desarrollo</span>
            </div>
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
              <span className="text-sm font-bold tracking-wider text-[#d4ff00]">11 TRAINERS ASEGURARON SU PLAZA • SOLO 89 RESTANTES</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                El Software Premium con IA
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ed6531] via-[#ff7e4d] to-[#ff9570] bg-clip-text text-transparent">
                Que Usan los Trainers Élite Hispanos
              </span>
            </h1>

            <p className="text-2xl lg:text-3xl text-[#e9e5dc]/90 mb-6 leading-relaxed font-light max-w-3xl mx-auto">
              Desde solo <span className="text-white font-bold">350 MXN/mes</span> • menos que una mensualidad de gym
            </p>

            <p className="text-xl text-[#a89f8f] mb-10 leading-relaxed max-w-3xl mx-auto">
              Deja de perder 20 horas/semana en WhatsApp caos, agendas rotas y cobros manuales. FitSalmon es la <span className="text-[#e9e5dc] font-semibold">automatización élite a precio inigualable.</span>
            </p>

            {/* Client Clarification Banner */}
            <div className="mb-10 inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 bg-gradient-to-r from-[#4caf50]/15 via-[#d4ff00]/10 to-[#4caf50]/15 border-2 border-[#4caf50]/40 rounded-2xl backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#4caf50] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">
                    Cero Fricción para Tus Clientes
                  </p>
                  <p className="text-[#e9e5dc] text-sm mt-1">
                    Ellos siguen usando <span className="text-[#d4ff00] font-semibold">WhatsApp como siempre</span> - sin apps, sin cuentas, sin complicaciones
                  </p>
                </div>
              </div>
            </div>

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

            <div className="mt-12 flex items-center justify-center gap-3 text-[#a89f8f]">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] border-3 border-[#0f231c] shadow-lg" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4ff00] to-[#b8db00] border-3 border-[#0f231c] shadow-lg" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4caf50] to-[#45a049] border-3 border-[#0f231c] shadow-lg" />
              </div>
              <p className="text-sm font-semibold">
                <span className="text-white">11+ trainers élite</span> ya aseguraron su 50% OFF
              </p>
            </div>

            {/* Guarantee */}
            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-[#4caf50]/10 border border-[#4caf50]/30 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-[#4caf50]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                <span className="text-[#4caf50] font-bold">Únete a la lista de espera para aprovechar el 50% OFF por tu primer año</span>
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
              <span className="text-xs font-bold tracking-widest text-[#d4ff00] uppercase">El Software Premium para Trainers Hispanos</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                Automatización a Precio Inigualable
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] max-w-3xl mx-auto leading-relaxed">
              Centraliza comunicación, automatiza agenda y administra tus bookings con tu asistente virtual
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

      {/* Client Experience Section */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#0f231c] via-[#1a3b2f] to-[#0f231c] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-[#4caf50]/10 to-[#d4ff00]/10 border border-[#4caf50]/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-bold tracking-widest text-[#4caf50] uppercase">Experiencia Sin Fricción para Tus Clientes</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                La Ventaja de Cero Fricción
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4caf50] to-[#d4ff00] bg-clip-text text-transparent">
                Tus Clientes Ya Tienen Todo Lo Que Necesitan
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] max-w-3xl mx-auto leading-relaxed">
              Mientras otros piden descargas complicadas, tus clientes usan WhatsApp que ya tienen. Adopción instantánea, experiencia premium.
            </p>
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
              <span className="text-xs font-bold tracking-widest text-[#ed6531] uppercase">El Infierno Diario de los Trainers</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              El Infierno Que Viven{' '}
              <span className="bg-gradient-to-r from-[#ed6531] via-[#ff7e4d] to-[#ed6531] bg-clip-text text-transparent">
                9 de Cada 10 Trainers
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] max-w-3xl mx-auto leading-relaxed">
              Menos tiempo administrando <span className="text-white font-bold">WhatsApp</span> y <span className="text-white font-bold">Calendario</span> más tiempo <span className="text-white font-bold">Entrenando</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                problem: "WhatsApp Te Come Vivo",
                solution: "Bot IA que califica leads, agenda automático y recupera clientes. Bandeja unificada con priorización inteligente.",
                icon: "💬",
                detail: "Por falta de seguimiento, clientes que se pierden"
              },
              {
                problem: "Agenda en Caos Total",
                solution: "Calendario que agenda, reagenda y cancela sin tocar el teléfono. Recordatorios automáticos que eliminan no-shows.",
                icon: "📅",
                detail: "Cancelaciones, dobles bookings, recordatorios manuales"
              },
              {
                problem: "Clientes Que Ghostean",
                solution: "Check-ins inteligentes automáticos que recuperan clientes.",
                icon: "😤",
                detail: "Por falta de seguimiento automático, clientes que se pierden"
              },
              {
                problem: "Cobros Que Duelen",
                solution: "Cobra automático con Stripe. Links de pago, recordatorios y gestión de morosos.",
                icon: "💸",
                detail: "No más cobros manuales, no más clientes que se pierden"
              },
              {
                problem: "Presencia de Principiante",
                solution: "Micro-sitio profesional en 5 minutos, testimonios automáticos y bot 24/7 integrado.",
                icon: "🌐",
                detail: "Sin presencia online, no más clientes que se pierden"
              },
              {
                problem: "Perfiles y Datos Perdidos",
                solution: "Gráficos automáticos de peso, % grasa, fotos antes/después.",
                icon: "📊",
                detail: "Perfiles y datos perdidos, no más clientes que se pierden"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/70 via-[#234a3d]/80 to-[#1a3b2f]/70 border border-[#e9e5dc]/15 shadow-[0_12px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_20px_48px_rgba(237,101,49,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:border-[#e9e5dc]/25 transition-all duration-500 backdrop-blur-sm">
                <div className="text-5xl mb-5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#e9e5dc] line-through decoration-[#ed6531] decoration-2 group-hover:decoration-[#ff7e4d] transition-colors duration-300">
                  {item.problem}
                </h3>
                <p className="text-sm text-[#ed6531] mb-4 italic">{item.detail}</p>
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
              <span className="text-xs font-bold tracking-widest text-[#d4ff00] uppercase">Hecha en México para Trainers Hispanos</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                Software Premium con IA
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ed6531] via-[#ff7e4d] to-[#d4ff00] bg-clip-text text-transparent">
                Que Usan los Trainers Élite Hispanos
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] max-w-3xl mx-auto leading-relaxed mb-4">
              Software premium en español que trainers élite usan para automatizar su negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/80 via-[#234a3d]/90 to-[#1a3b2f]/80 border border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_32px_72px_rgba(237,101,49,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] flex items-center justify-center mb-8 shadow-[0_12px_40px_rgba(237,101,49,0.4)] group-hover:shadow-[0_16px_50px_rgba(237,101,49,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#e9e5dc] group-hover:text-white transition-colors duration-300">Asistente Personal con IA 24/7</h3>
              <ul className="space-y-4 text-[#a89f8f]">
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Agenda y cancela sesiones automáticamente</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Gestiona waitlist y actualiza bookings al instante</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Check-ins automáticos para clientes inactivos</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Recolecta testimonios para tu micro-sitio</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Integración completa con tu calendario</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/80 via-[#234a3d]/90 to-[#1a3b2f]/80 border border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_32px_72px_rgba(76,175,80,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4caf50] to-[#45a049] flex items-center justify-center mb-8 shadow-[0_12px_40px_rgba(76,175,80,0.4)] group-hover:shadow-[0_16px_50px_rgba(76,175,80,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#e9e5dc] group-hover:text-white transition-colors duration-300">Gestión de Clientes Completa</h3>
              <ul className="space-y-4 text-[#a89f8f]">
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Perfiles completos con notas e imágenes</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Gráficos personalizables de progreso (peso, % grasa, etc.)</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Sube programas PDF y compártelos con link</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Analíticos básicos de asistencia y tendencias</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Ahorra horas de tracking manual cada semana</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/80 via-[#234a3d]/90 to-[#1a3b2f]/80 border border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] hover:shadow-[0_32px_72px_rgba(212,255,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4ff00] to-[#b8db00] flex items-center justify-center mb-8 shadow-[0_12px_40px_rgba(212,255,0,0.4)] group-hover:shadow-[0_16px_50px_rgba(212,255,0,0.5)] transition-all duration-500">
                <svg className="w-10 h-10 text-[#0f231c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#e9e5dc] group-hover:text-white transition-colors duration-300">Comunicación & Presencia Digital</h3>
              <ul className="space-y-4 text-[#a89f8f]">
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">WhatsApp, Instagram y Email en una sola bandeja</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Micro-sitio profesional tipo link-in-bio</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Testimonios que se publican automáticamente</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Pagos integrados con Mercado Pago y Stripe MX</span>
                </li>
                <li className="flex items-start gap-3 group-hover:text-[#c4bbaa] transition-colors duration-300">
                  <span className="text-[#d4ff00] font-bold text-lg mt-0.5">•</span>
                  <span className="leading-relaxed">Respuestas automáticas en español neutro</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="max-w-6xl mx-auto mt-32">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white">
                Planes para Trainers Élite Hispanos
              </h3>
              <p className="text-xl text-[#a89f8f]">
                Elige el plan perfecto para tu negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Starter Plan */}
              <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/90 via-[#234a3d]/95 to-[#1a3b2f]/90 border-2 border-[#e9e5dc]/20 shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_32px_72px_rgba(237,101,49,0.3)] hover:scale-[1.02] hover:border-[#ed6531]/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#d4ff00] text-[#0f231c] text-xs font-bold rounded-bl-2xl">
                  50% OFF
                </div>
                <div className="mb-6">
                  <h4 className="text-3xl font-extrabold text-white mb-2">Starter</h4>
                  <p className="text-[#a89f8f] text-sm">Para empezar tu negocio</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">350</span>
                    <span className="text-xl text-[#e9e5dc]">MXN/mes</span>
                  </div>
                  <p className="text-[#ed6531] text-sm line-through">Precio normal: 700 MXN/mes</p>
                  <p className="text-[#d4ff00] text-sm font-bold mt-1">Fundadores: 50% OFF primer año</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#ed6531] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc] font-bold text-lg">1-15 clientes activos</span>
                  </div>
                  <div className="h-px bg-[#e9e5dc]/10 my-4"></div>
                  <p className="text-[#a89f8f] text-sm font-semibold mb-3">Todas las funciones incluidas:</p>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Asistente IA: agenda, cancela, check-ins</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">WhatsApp + Instagram + Email unificado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Calendario + gestión de waitlist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Perfiles: notas, fotos, gráficos custom</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Programas PDF compartibles por link</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Micro-sitio + testimonios automáticos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Pagos Mercado Pago + Stripe MX</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Analíticos básicos de asistencia</span>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#2a5a4a]/90 via-[#234a3d]/95 to-[#1a3b2f]/90 border-2 border-[#ed6531]/50 shadow-[0_24px_60px_rgba(237,101,49,0.3)] hover:shadow-[0_32px_72px_rgba(237,101,49,0.4)] hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-[#ed6531] to-[#ff7e4d] text-white text-xs font-bold rounded-bl-2xl">
                  RECOMENDADO
                </div>
                <div className="mb-6">
                  <h4 className="text-3xl font-extrabold text-white mb-2">Pro</h4>
                  <p className="text-[#a89f8f] text-sm">Para escalar tu negocio</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">700</span>
                    <span className="text-xl text-[#e9e5dc]">MXN/mes</span>
                  </div>
                  <p className="text-[#ed6531] text-sm line-through">Precio normal: 1,399 MXN/mes</p>
                  <p className="text-[#d4ff00] text-sm font-bold mt-1">Fundadores: 50% OFF primer año</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#ed6531] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc] font-bold text-lg">16-50 clientes activos</span>
                  </div>
                  <div className="h-px bg-[#e9e5dc]/10 my-4"></div>
                  <p className="text-[#a89f8f] text-sm font-semibold mb-3">Todas las funciones incluidas:</p>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Asistente IA: agenda, cancela, check-ins</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">WhatsApp + Instagram + Email unificado</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Calendario + gestión de waitlist</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Perfiles: notas, fotos, gráficos custom</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Programas PDF compartibles por link</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Micro-sitio + testimonios automáticos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Pagos Mercado Pago + Stripe MX</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#e9e5dc]">Analíticos básicos de asistencia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="max-w-3xl mx-auto mb-8">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#ed6531]/10 via-[#ff7e4d]/5 to-[#d4ff00]/10 border-2 border-[#ed6531]/30 backdrop-blur-sm">
                  <h4 className="text-2xl font-extrabold text-white mb-4">🎯 Pre-Venta de Acceso Anticipado</h4>
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
                    <div className="w-2 h-2 bg-[#d4ff00] rounded-full animate-pulse"></div>
                    <span className="text-[#e9e5dc] text-xs font-semibold">Producto en desarrollo • Acceso temprano garantizado</span>
                  </div>
                  <p className="text-[#e9e5dc] text-lg mb-6 leading-relaxed">
                    <span className="text-[#d4ff00] font-bold">Paga solo tu primer mes por adelantado</span> (350 o 700 MXN) y asegura tu <span className="text-white font-bold">50% OFF durante todo tu primer año</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-left">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Starter: 350 MXN hoy</p>
                        <p className="text-[#a89f8f] text-sm">12 meses a mitad de precio</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#4caf50] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-white font-semibold">Pro: 700 MXN hoy</p>
                        <p className="text-[#a89f8f] text-sm">12 meses a mitad de precio</p>
                      </div>
                    </div>
                  </div>

                  <WaitlistForm variant="pricing" />

                  <p className="text-[#a89f8f] text-sm mt-4">
                    💳 Después del primer año, pagas el precio regular mensual
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#4caf50]/10 border border-[#4caf50]/30 rounded-full">
                <svg className="w-5 h-5 text-[#4caf50]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm font-semibold">Funciona 100% en México: Mercado Pago, Stripe MX, WhatsApp Business API local</span>
              </div>
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
              <span className="text-xs font-bold tracking-widest text-[#d4ff00] uppercase">Lo Que Los Trainers Piensan</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#e9e5dc] via-white to-[#e9e5dc] bg-clip-text text-transparent">
                Por Qué Los Trainers
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#ed6531] to-[#d4ff00] bg-clip-text text-transparent">
                Están Emocionados
              </span>
            </h2>
            <p className="text-xl text-[#a89f8f] leading-relaxed max-w-2xl mx-auto">
              Trainers mexicanos validando por qué esta solución es exactamente lo que necesitan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Esto es exactamente lo que necesito. Pierdo clientes porque no tengo un sistema profesional. Que sea todo-en-uno y a precio accesible es perfecto.",
                author: "Toño Mendoza",
                role: "Running Coach, CDMX"
              },
              {
                quote: "He probado Trainerize y TrueCoach, pero son caros y en dólares. Una herramienta así, con whatsapp tiene mucho sentido.",
                author: "Ale Fuentes",
                role: "Crossfit Coach, CDMX"
              },
              {
                quote: "El problema real es que pierdo tiempo administrando whatsapp y calendario, quiero que el sistema se encargue de eso.",
                author: "Miguel Torres",
                role: "Entrenador en Gimnasio, CDMX"
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
            <span className="text-sm font-bold tracking-wider text-white uppercase">🚀 Pre-Lanzamiento • Solo 89 Plazas Fundadoras • Cierra 31 Dic</span>
          </div>

          <h2 className="text-6xl lg:text-7xl font-extrabold mb-10 text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            El Momento de Decidir:
            <br />
            Estancarme o Empezar a Crecer
          </h2>

          <p className="text-2xl lg:text-3xl text-white/95 mb-6 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
            <span className="font-bold text-white">11 trainers élite</span> ya aseguraron su 50% OFF.
          </p>

          <div className="mb-10 text-white/90 max-w-2xl mx-auto">
            <p className="text-xl mb-4">
              <span className="font-bold text-white">Precio normal:</span> Starter 700 MXN • Pro 1,399 MXN (IVA incl.)
            </p>
            <p className="text-2xl font-bold text-[#d4ff00]">
              Fundadores: 350 MXN / 700 MXN primer año (paga solo 1er mes)
            </p>
          </div>

          <WaitlistForm variant="cta" />

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <svg className="w-5 h-5 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                50% OFF primer año
              </p>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <svg className="w-5 h-5 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                Grupo de fundadores
              </p>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              <svg className="w-5 h-5 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-white font-medium text-sm">
                Migración en 15 min
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
                <li><Link href="/privacy" className="hover:text-[#d4ff00] transition-colors">Política de Privacidad</Link></li>
                <li><Link href="/terms" className="hover:text-[#d4ff00] transition-colors">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#e9e5dc]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <p className="text-[#a89f8f] text-sm">
                © 2025 FitSalmon. Todos los derechos reservados.
              </p>
              <div className="hidden md:block w-1 h-1 rounded-full bg-[#a89f8f]/50"></div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff00]/5 border border-[#d4ff00]/20 rounded-md">
                <div className="w-1.5 h-1.5 bg-[#d4ff00] rounded-full animate-pulse"></div>
                <span className="text-[#a89f8f] text-xs font-medium">Producto en desarrollo</span>
              </div>
            </div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
