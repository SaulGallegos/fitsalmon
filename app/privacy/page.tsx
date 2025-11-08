import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Política de Privacidad - FitSalmon',
    description: 'Política de privacidad de FitSalmon. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Política de Privacidad - FitSalmon',
        description: 'Información sobre cómo FitSalmon recopila, usa y protege tus datos personales.',
        url: 'https://fitsalmon.com/privacy',
        siteName: 'FitSalmon',
        locale: 'es_MX',
        type: 'website',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'FitSalmon - Política de Privacidad',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Política de Privacidad - FitSalmon',
        description: 'Información sobre cómo FitSalmon recopila, usa y protege tus datos personales.',
        images: ['/images/og-image.png'],
    },
    alternates: {
        canonical: 'https://fitsalmon.com/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="border-b border-zinc-800">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <Link href="/" className="inline-flex items-center text-[#d4ff00] hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al inicio
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#d4ff00]">Política de Privacidad</h1>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <p className="text-sm text-zinc-400 mb-6">
                            <strong>Última actualización:</strong> 8 de noviembre de 2025
                        </p>
                        <p>
                            En FitSalmon, nos comprometemos a proteger tu privacidad y garantizar la seguridad de tu información personal.
                            Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos tu información cuando
                            utilizas nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.1 Información que Proporcionas</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Información de cuenta:</strong> nombre, correo electrónico, número de teléfono, y contraseña.</li>
                            <li><strong>Información de perfil:</strong> fotografía, información profesional, especialidades de entrenamiento.</li>
                            <li><strong>Información de clientes:</strong> datos que ingreses sobre tus clientes para gestionar tu negocio.</li>
                            <li><strong>Información de pago:</strong> datos de facturación y métodos de pago (procesados de forma segura por terceros).</li>
                            <li><strong>Comunicaciones:</strong> mensajes que envíes a través de nuestra plataforma, incluyendo WhatsApp.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">1.2 Información Recopilada Automáticamente</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Datos de uso:</strong> cómo interactúas con nuestros servicios, páginas visitadas, y funciones utilizadas.</li>
                            <li><strong>Datos del dispositivo:</strong> tipo de dispositivo, sistema operativo, navegador, dirección IP.</li>
                            <li><strong>Cookies y tecnologías similares:</strong> para mejorar tu experiencia y analizar el uso de nuestros servicios.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Cómo Usamos tu Información</h2>
                        <p className="mb-3">Utilizamos tu información para:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                            <li>Procesar transacciones y gestionar tu cuenta.</li>
                            <li>Enviar notificaciones importantes, actualizaciones del servicio y comunicaciones de marketing (con tu consentimiento).</li>
                            <li>Personalizar tu experiencia y proporcionar recomendaciones.</li>
                            <li>Detectar, prevenir y resolver problemas técnicos o de seguridad.</li>
                            <li>Cumplir con obligaciones legales y hacer cumplir nuestros términos.</li>
                            <li>Realizar análisis y mejorar nuestro producto mediante inteligencia artificial.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Compartir tu Información</h2>
                        <p className="mb-3">No vendemos tu información personal. Podemos compartir tu información con:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar nuestro negocio (hosting, procesamiento de pagos, análisis).</li>
                            <li><strong>Integración con WhatsApp:</strong> para facilitar la comunicación con tus clientes.</li>
                            <li><strong>Cumplimiento legal:</strong> cuando sea requerido por ley o para proteger nuestros derechos.</li>
                            <li><strong>Transferencias empresariales:</strong> en caso de fusión, adquisición o venta de activos.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Seguridad de los Datos</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información contra
                            acceso no autorizado, alteración, divulgación o destrucción. Esto incluye:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                            <li>Cifrado de datos en tránsito y en reposo.</li>
                            <li>Autenticación de dos factores (cuando esté disponible).</li>
                            <li>Auditorías de seguridad regulares.</li>
                            <li>Acceso restringido a información personal solo a empleados autorizados.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Tus Derechos</h2>
                        <p className="mb-3">Tienes derecho a:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Acceso:</strong> solicitar una copia de tu información personal.</li>
                            <li><strong>Rectificación:</strong> corregir información inexacta o incompleta.</li>
                            <li><strong>Eliminación:</strong> solicitar la eliminación de tu información (sujeto a obligaciones legales).</li>
                            <li><strong>Portabilidad:</strong> recibir tu información en un formato estructurado.</li>
                            <li><strong>Oposición:</strong> oponerte al procesamiento de tu información para ciertos fines.</li>
                            <li><strong>Revocar consentimiento:</strong> retirar tu consentimiento para el procesamiento de datos.</li>
                        </ul>
                        <p className="mt-4">
                            Para ejercer estos derechos, contáctanos en <a href="mailto:privacy@fitsalmon.com" className="text-[#d4ff00] hover:underline">privacy@fitsalmon.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Retención de Datos</h2>
                        <p>
                            Conservamos tu información personal durante el tiempo necesario para cumplir con los fines descritos en esta
                            política, a menos que la ley requiera o permita un período de retención más largo. Cuando elimines tu cuenta,
                            eliminaremos o anonimizaremos tu información personal dentro de un plazo razonable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Cookies y Tecnologías de Rastreo</h2>
                        <p>
                            Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso de nuestros servicios
                            y proporcionar publicidad personalizada. Puedes controlar el uso de cookies a través de la configuración de tu
                            navegador. Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Transferencias Internacionales</h2>
                        <p>
                            Tu información puede ser transferida y procesada en países fuera de tu país de residencia, donde las leyes de
                            protección de datos pueden ser diferentes. Tomamos medidas para garantizar que tu información reciba un nivel
                            adecuado de protección en todas las jurisdicciones.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Privacidad de Menores</h2>
                        <p>
                            Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal
                            de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Cambios a esta Política</h2>
                        <p>
                            Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos
                            publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Te recomendamos
                            revisar esta política regularmente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Contacto</h2>
                        <p>
                            Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad, contáctanos:
                        </p>
                        <ul className="list-none space-y-2 ml-4 mt-3">
                            <li><strong>Email:</strong> <a href="mailto:privacy@fitsalmon.com" className="text-[#d4ff00] hover:underline">privacy@fitsalmon.com</a></li>
                            <li><strong>Soporte:</strong> <a href="mailto:support@fitsalmon.com" className="text-[#d4ff00] hover:underline">support@fitsalmon.com</a></li>
                        </ul>
                    </section>

                    <section className="pt-8 border-t border-zinc-800">
                        <p className="text-sm text-zinc-400">
                            Al utilizar FitSalmon, aceptas esta Política de Privacidad y nuestros Términos de Servicio.
                            Si no estás de acuerdo con esta política, por favor no uses nuestros servicios.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-zinc-800 mt-16">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-zinc-400">© 2025 FitSalmon. Todos los derechos reservados.</p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-[#d4ff00] hover:opacity-80 transition-opacity">
                                Política de Privacidad
                            </Link>
                            <Link href="/terms" className="text-zinc-400 hover:text-[#d4ff00] transition-colors">
                                Términos de Servicio
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

