import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Términos de Servicio - FitSalmon',
    description: 'Términos y condiciones de uso de FitSalmon. Lee nuestros términos de servicio antes de usar la plataforma.',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Términos de Servicio - FitSalmon',
        description: 'Términos y condiciones de uso de FitSalmon. Lee nuestros términos antes de usar la plataforma.',
        url: 'https://fitsalmon.com/terms',
        siteName: 'FitSalmon',
        locale: 'es_MX',
        type: 'website',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'FitSalmon - Términos de Servicio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Términos de Servicio - FitSalmon',
        description: 'Términos y condiciones de uso de FitSalmon.',
        images: ['/images/og-image.png'],
    },
    alternates: {
        canonical: 'https://fitsalmon.com/terms',
    },
};

export default function TermsPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#d4ff00]">Términos de Servicio</h1>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <p className="text-sm text-zinc-400 mb-6">
                            <strong>Última actualización:</strong> 8 de noviembre de 2025
                        </p>
                        <p>
                            Bienvenido a FitSalmon. Estos Términos de Servicio ("Términos") rigen tu acceso y uso de nuestros servicios,
                            incluyendo nuestra plataforma web, aplicaciones móviles y servicios relacionados (colectivamente, los "Servicios").
                            Al acceder o usar FitSalmon, aceptas estar legalmente obligado por estos Términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                        <p>
                            Al crear una cuenta, acceder o usar FitSalmon, confirmas que:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                            <li>Has leído, comprendido y aceptado estos Términos.</li>
                            <li>Tienes al menos 18 años de edad.</li>
                            <li>Tienes la capacidad legal para celebrar un contrato vinculante.</li>
                            <li>Cumplirás con todas las leyes y regulaciones aplicables.</li>
                        </ul>
                        <p className="mt-3">
                            Si no estás de acuerdo con estos Términos, no debes usar nuestros Servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
                        <p className="mb-3">
                            FitSalmon es una plataforma de software diseñada para entrenadores personales y profesionales del fitness que proporciona:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Gestión de clientes y programación de entrenamientos.</li>
                            <li>Automatización de comunicaciones a través de WhatsApp con inteligencia artificial.</li>
                            <li>Herramientas de calendario y agendamiento.</li>
                            <li>Procesamiento de pagos y facturación.</li>
                            <li>Micro sitio web personalizado para entrenadores.</li>
                            <li>Análisis y reportes de negocio.</li>
                            <li>Otras funcionalidades relacionadas con la gestión de un negocio de fitness.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Cuentas de Usuario</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.1 Creación de Cuenta</h3>
                        <p>
                            Para usar FitSalmon, debes crear una cuenta proporcionando información precisa, actual y completa.
                            Eres responsable de mantener la confidencialidad de tus credenciales de inicio de sesión y de todas
                            las actividades que ocurran bajo tu cuenta.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.2 Seguridad de la Cuenta</h3>
                        <p>
                            Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta o cualquier otra
                            violación de seguridad. No seremos responsables de ninguna pérdida o daño derivado de tu incumplimiento
                            de mantener segura tu cuenta.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">3.3 Suspensión y Terminación</h3>
                        <p>
                            Nos reservamos el derecho de suspender o terminar tu cuenta si violas estos Términos, realizas actividades
                            fraudulentas, o por cualquier otra razón que consideremos apropiada a nuestro exclusivo criterio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Uso Aceptable</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.1 Uso Permitido</h3>
                        <p>
                            Puedes usar FitSalmon únicamente para fines legales y de acuerdo con estos Términos. Te comprometes a usar
                            los Servicios de manera profesional y ética.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">4.2 Uso Prohibido</h3>
                        <p className="mb-3">No puedes:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Violar cualquier ley o regulación aplicable.</li>
                            <li>Infringir los derechos de propiedad intelectual de otros.</li>
                            <li>Cargar o transmitir virus, malware o código malicioso.</li>
                            <li>Intentar obtener acceso no autorizado a nuestros sistemas.</li>
                            <li>Usar los Servicios para enviar spam, correos no solicitados o comunicaciones masivas no autorizadas.</li>
                            <li>Realizar ingeniería inversa, descompilar o desensamblar cualquier parte de los Servicios.</li>
                            <li>Revender, arrendar o sublicenciar los Servicios sin autorización.</li>
                            <li>Usar los Servicios para acosar, amenazar o dañar a otros.</li>
                            <li>Suplantar la identidad de otra persona o entidad.</li>
                            <li>Interferir con el funcionamiento normal de los Servicios.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Planes y Pagos</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Planes de Suscripción</h3>
                        <p>
                            FitSalmon ofrece diferentes planes de suscripción con características y precios variables. Los detalles
                            de cada plan se describen en nuestra página de precios. Al suscribirte, aceptas pagar las tarifas aplicables.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 Facturación</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Las suscripciones se facturan de forma recurrente (mensual o anual) según el plan seleccionado.</li>
                            <li>Los pagos se procesan automáticamente al inicio de cada período de facturación.</li>
                            <li>Aceptamos tarjetas de crédito/débito y otros métodos de pago especificados.</li>
                            <li>Todos los pagos son procesados de forma segura por procesadores de pago de terceros.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.3 Cambios de Precio</h3>
                        <p>
                            Nos reservamos el derecho de cambiar nuestros precios con previo aviso. Los cambios de precio no afectarán
                            tu suscripción actual hasta la renovación siguiente. Te notificaremos con anticipación sobre cualquier cambio de precio.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.4 Reembolsos</h3>
                        <p>
                            Las tarifas de suscripción generalmente no son reembolsables, excepto cuando lo requiera la ley aplicable.
                            Puedes cancelar tu suscripción en cualquier momento, pero no se emitirán reembolsos por períodos parciales.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.5 Oferta de Fundadores</h3>
                        <p>
                            Los primeros 100 clientes que se unan a FitSalmon recibirán un 50% de descuento de por vida en su suscripción.
                            Esta oferta está sujeta a disponibilidad y puede terminar en cualquier momento. Los términos específicos de
                            la oferta se aplicarán a los usuarios elegibles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Propiedad Intelectual</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.1 Derechos de FitSalmon</h3>
                        <p>
                            FitSalmon y todos sus contenidos, características y funcionalidades son propiedad exclusiva de FitSalmon y
                            están protegidos por leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.2 Tu Contenido</h3>
                        <p>
                            Conservas todos los derechos sobre el contenido que cargues o crees usando FitSalmon ("Tu Contenido").
                            Al usar nuestros Servicios, nos otorgas una licencia limitada, no exclusiva, mundial y libre de regalías
                            para usar, almacenar, mostrar y procesar Tu Contenido con el único propósito de proporcionar y mejorar los Servicios.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">6.3 Retroalimentación</h3>
                        <p>
                            Si nos proporcionas comentarios, sugerencias o ideas sobre FitSalmon, nos otorgas el derecho de usar esa
                            información sin restricciones o compensación hacia ti.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Privacidad y Datos</h2>
                        <p>
                            Tu privacidad es importante para nosotros. Nuestra <Link href="/privacy" className="text-[#d4ff00] hover:underline">Política de Privacidad</Link> explica
                            cómo recopilamos, usamos y protegemos tu información personal. Al usar FitSalmon, también aceptas nuestra
                            Política de Privacidad.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Integración con WhatsApp</h2>
                        <p>
                            FitSalmon se integra con WhatsApp para facilitar la comunicación con tus clientes. Al usar esta funcionalidad:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                            <li>Debes cumplir con los términos de servicio de WhatsApp y Meta.</li>
                            <li>Eres responsable de obtener el consentimiento apropiado de tus clientes para comunicarte con ellos.</li>
                            <li>No debes enviar spam o mensajes no solicitados.</li>
                            <li>FitSalmon no es responsable de cambios, interrupciones o terminación de los servicios de WhatsApp.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Garantías y Limitación de Responsabilidad</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.1 Renuncia de Garantías</h3>
                        <p>
                            LOS SERVICIOS SE PROPORCIONAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO,
                            YA SEAN EXPRESAS O IMPLÍCITAS. NO GARANTIZAMOS QUE LOS SERVICIOS SEAN ININTERRUMPIDOS, SEGUROS O LIBRES DE ERRORES.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.2 Limitación de Responsabilidad</h3>
                        <p>
                            EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, FITSALMON NO SERÁ RESPONSABLE DE DAÑOS INDIRECTOS, INCIDENTALES,
                            ESPECIALES, CONSECUENTES O PUNITIVOS, O PÉRDIDA DE BENEFICIOS O INGRESOS, YA SEA DIRECTA O INDIRECTAMENTE,
                            O PÉRDIDA DE DATOS, USO, GOODWILL U OTRAS PÉRDIDAS INTANGIBLES.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">9.3 Límite de Responsabilidad Total</h3>
                        <p>
                            Nuestra responsabilidad total hacia ti por cualquier reclamo relacionado con los Servicios está limitada
                            al monto que pagaste a FitSalmon en los 12 meses anteriores al evento que dio lugar al reclamo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Indemnización</h2>
                        <p>
                            Aceptas indemnizar, defender y eximir de responsabilidad a FitSalmon, sus afiliados, directores, empleados
                            y agentes de cualquier reclamo, pérdida, responsabilidad, daño, costo o gasto (incluyendo honorarios legales
                            razonables) que surjan de:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                            <li>Tu uso de los Servicios.</li>
                            <li>Tu violación de estos Términos.</li>
                            <li>Tu violación de los derechos de terceros.</li>
                            <li>Tu contenido o conducta en los Servicios.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Cancelación y Terminación</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">11.1 Cancelación por tu Parte</h3>
                        <p>
                            Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta. La cancelación
                            será efectiva al final del período de facturación actual. No se emitirán reembolsos por períodos no utilizados.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">11.2 Terminación por Nuestra Parte</h3>
                        <p>
                            Podemos suspender o terminar tu acceso a los Servicios inmediatamente, sin previo aviso, si:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                            <li>Violas estos Términos.</li>
                            <li>Tu cuenta está inactiva durante un período prolongado.</li>
                            <li>Participas en actividades fraudulentas o ilegales.</li>
                            <li>Tu pago no se procesa correctamente.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">11.3 Efectos de la Terminación</h3>
                        <p>
                            Tras la terminación, tu derecho a usar los Servicios cesará inmediatamente. Podemos eliminar o retener
                            Tu Contenido según nuestra política de retención de datos. Las disposiciones de estos Términos que por
                            su naturaleza deban sobrevivir, sobrevivirán a la terminación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. Cambios a los Términos</h2>
                        <p>
                            Nos reservamos el derecho de modificar estos Términos en cualquier momento. Si realizamos cambios materiales,
                            te notificaremos por correo electrónico o mediante un aviso en nuestros Servicios antes de que los cambios
                            entren en vigor. Tu uso continuado de los Servicios después de la fecha efectiva de los cambios constituye
                            tu aceptación de los Términos modificados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Ley Aplicable y Jurisdicción</h2>
                        <p>
                            Estos Términos se regirán e interpretarán de acuerdo con las leyes de México, sin dar efecto a ningún
                            principio de conflictos de leyes. Cualquier disputa relacionada con estos Términos estará sujeta a la
                            jurisdicción exclusiva de los tribunales ubicados en Ciudad de México, México.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. Resolución de Disputas</h2>
                        <p>
                            En caso de cualquier controversia o disputa, primero intentaremos resolverla de manera informal comunicándonos
                            contigo. Si no podemos resolver la disputa informalmente, acordamos participar en mediación antes de iniciar
                            cualquier procedimiento legal.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">15. Disposiciones Generales</h2>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">15.1 Acuerdo Completo</h3>
                        <p>
                            Estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre tú y
                            FitSalmon respecto al uso de los Servicios.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">15.2 Divisibilidad</h3>
                        <p>
                            Si alguna disposición de estos Términos se considera inválida o inaplicable, esa disposición se limitará
                            o eliminará en la medida mínima necesaria, y las disposiciones restantes permanecerán en pleno vigor y efecto.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">15.3 Renuncia</h3>
                        <p>
                            Ninguna renuncia de cualquier término de estos Términos será considerada una renuncia adicional o continua
                            de dicho término o de cualquier otro término.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">15.4 Cesión</h3>
                        <p>
                            No puedes ceder o transferir estos Términos o tus derechos y obligaciones bajo estos sin nuestro
                            consentimiento previo por escrito. Podemos ceder estos Términos sin restricción.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-3 mt-4">15.5 Relación de las Partes</h3>
                        <p>
                            Nada en estos Términos creará una sociedad, empresa conjunta, agencia o relación laboral entre tú y FitSalmon.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">16. Contacto</h2>
                        <p>
                            Si tienes preguntas o inquietudes sobre estos Términos de Servicio, contáctanos:
                        </p>
                        <ul className="list-none space-y-2 ml-4 mt-3">
                            <li><strong>Email:</strong> <a href="mailto:legal@fitsalmon.com" className="text-[#d4ff00] hover:underline">legal@fitsalmon.com</a></li>
                            <li><strong>Soporte:</strong> <a href="mailto:support@fitsalmon.com" className="text-[#d4ff00] hover:underline">support@fitsalmon.com</a></li>
                        </ul>
                    </section>

                    <section className="pt-8 border-t border-zinc-800">
                        <p className="text-sm text-zinc-400">
                            Al utilizar FitSalmon, reconoces que has leído, comprendido y aceptado estos Términos de Servicio.
                            Si no aceptas estos términos, no debes usar nuestros servicios.
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
                            <Link href="/privacy" className="text-zinc-400 hover:text-[#d4ff00] transition-colors">
                                Política de Privacidad
                            </Link>
                            <Link href="/terms" className="text-[#d4ff00] hover:opacity-80 transition-opacity">
                                Términos de Servicio
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

