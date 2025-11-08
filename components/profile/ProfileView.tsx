'use client';

import { LogOut } from 'lucide-react';

export default function ProfileView() {
    return (
        <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] overflow-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] px-4 md:px-6 py-3 md:py-4 border-b border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                <h1 className="text-xl md:text-2xl font-black mb-1 bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text">Perfil y Configuración</h1>
                <p className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:block">Gestiona tu cuenta y preferencias</p>
            </div>

            <div className="p-8 max-w-5xl mx-auto">
                {/* Profile Section */}
                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-luxury)] mb-8 border border-[var(--border-soft)]">
                    <h2 className="text-2xl font-black mb-8 text-[var(--text-primary)]">Información de Perfil</h2>
                    <div className="flex items-start gap-8 mb-8">
                        <div className="w-28 h-28 bg-gradient-to-br from-[var(--primary-alpha-30)] to-[var(--accent-alpha-20)] rounded-full flex items-center justify-center text-5xl ring-4 ring-[var(--border-soft)] ring-offset-4 ring-offset-[var(--surface-cards)]">
                            👤
                        </div>
                        <div className="flex-1">
                            <button className="px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-gradient-to-r hover:from-[var(--accent-dark)] hover:to-[var(--accent)] hover:text-[var(--text-dark)] rounded-full font-black mb-3 transition-all duration-400 hover:scale-105 hover:shadow-[var(--shadow-accent-glow)]">
                                Cambiar Foto
                            </button>
                            <p className="text-sm text-[var(--text-tertiary)] font-semibold">JPG, PNG o GIF. Tamaño máx. 2MB.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Nombre Completo</label>
                            <input
                                type="text"
                                defaultValue="John Trainer"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Email</label>
                            <input
                                type="email"
                                defaultValue="john@trainer.com"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Teléfono</label>
                            <input
                                type="tel"
                                defaultValue="+1 234 567 8900"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Ubicación</label>
                            <input
                                type="text"
                                defaultValue="Los Angeles, CA"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Bio</label>
                        <textarea
                            rows={4}
                            defaultValue="Certified personal trainer with 5+ years of experience. Specializing in strength training and weight loss."
                            className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium resize-none"
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <button className="px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-95 text-sm sm:text-base">
                            Guardar Cambios
                        </button>
                        <button className="px-4 sm:px-8 py-3 sm:py-4 border-2 border-[var(--border-medium)] hover:bg-[var(--surface-light)] hover:border-[var(--border-strong)] rounded-full font-black transition-all duration-400 hover:scale-105 text-[var(--text-primary)] text-sm sm:text-base">
                            Cancelar
                        </button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-luxury)] mb-8 border border-[var(--border-soft)]">
                    <h2 className="text-2xl font-black mb-8 text-[var(--text-primary)]">Notificaciones por Email</h2>
                    <div className="space-y-5">
                        {[
                            { label: 'Nuevos mensajes', description: 'Recibe notificaciones cuando los clientes envían mensajes' },
                            { label: 'Recordatorios de sesión', description: 'Recordatorios para sesiones próximas' },
                            { label: 'Acciones del bot', description: 'Notificaciones cuando el bot gestiona tareas' },
                            { label: 'Actualizaciones de pagos', description: 'Alertas para confirmaciones de pago' }
                        ].map((item) => (
                            <div key={item.label} className="flex items-center justify-between py-4 border-b border-[var(--border-soft)] last:border-0">
                                <div>
                                    <p className="font-black text-[var(--text-primary)] mb-1">{item.label}</p>
                                    <p className="text-sm text-[var(--text-tertiary)] font-semibold">{item.description}</p>
                                </div>
                                <label className="relative inline-block w-14 h-7">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-14 h-7 bg-[var(--background-light)] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--accent-alpha-20)] rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[var(--accent-dark)] peer-checked:to-[var(--accent)] shadow-[var(--shadow-soft)]"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Business Settings */}
                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-luxury)] mb-8 border border-[var(--border-soft)]">
                    <h2 className="text-2xl font-black mb-8 text-[var(--text-primary)]">Configuración del Negocio</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Nombre del Negocio</label>
                            <input
                                type="text"
                                defaultValue="Elite Fitness Training"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Duración Predeterminada (minutos)</label>
                            <input
                                type="number"
                                defaultValue="60"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Precio Predeterminado</label>
                            <input
                                type="text"
                                defaultValue="$75"
                                className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium"
                            />
                        </div>
                    </div>
                </div>

                {/* Connected Accounts */}
                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-luxury)] mb-8 border border-[var(--border-soft)]">
                    <h2 className="text-2xl font-black mb-8 text-[var(--text-primary)]">Cuentas Conectadas</h2>
                    <div className="space-y-5">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 bg-[var(--background-light)] rounded-[var(--radius-lg)] border border-[var(--border-soft)]">
                            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-[var(--shadow-soft)] flex-shrink-0">
                                    🟢
                                </div>
                                <div className="min-w-0">
                                    <p className="font-black text-[var(--text-primary)] text-sm sm:text-base">WhatsApp</p>
                                    <p className="text-xs sm:text-sm text-[var(--success)] font-bold">Conectado</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 sm:px-5 sm:py-2.5 border-2 border-[var(--border-medium)] hover:bg-[var(--surface-light)] hover:border-[var(--border-strong)] rounded-[var(--radius-md)] font-bold text-xs sm:text-sm transition-all duration-400 text-[var(--text-primary)] whitespace-nowrap flex-shrink-0">
                                Gestionar
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 bg-[var(--background-light)] rounded-[var(--radius-lg)] border border-[var(--border-soft)]">
                            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-[var(--shadow-soft)] flex-shrink-0">
                                    🟣
                                </div>
                                <div className="min-w-0">
                                    <p className="font-black text-[var(--text-primary)] text-sm sm:text-base">Instagram</p>
                                    <p className="text-xs sm:text-sm text-[var(--success)] font-bold">Conectado</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 sm:px-5 sm:py-2.5 border-2 border-[var(--border-medium)] hover:bg-[var(--surface-light)] hover:border-[var(--border-strong)] rounded-[var(--radius-md)] font-bold text-xs sm:text-sm transition-all duration-400 text-[var(--text-primary)] whitespace-nowrap flex-shrink-0">
                                Gestionar
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 bg-[var(--background-light)] rounded-[var(--radius-lg)] border border-[var(--border-soft)]">
                            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--text-tertiary)] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl shadow-[var(--shadow-soft)] flex-shrink-0">
                                    ✉️
                                </div>
                                <div className="min-w-0">
                                    <p className="font-black text-[var(--text-primary)] text-sm sm:text-base">Email</p>
                                    <p className="text-xs sm:text-sm text-[var(--text-tertiary)] font-bold">No conectado</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-[var(--radius-md)] font-bold text-xs sm:text-sm shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 whitespace-nowrap flex-shrink-0">
                                Conectar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-[var(--radius-xl)] p-8 shadow-[var(--shadow-luxury)] mb-8 border border-red-500/30">
                    <h2 className="text-2xl font-black mb-8 text-[var(--error)]">Zona Peligrosa</h2>
                    <div className="space-y-4">
                        <button className="w-full py-4 border-2 border-[var(--error)] text-[var(--error)] hover:bg-red-900/20 rounded-[var(--radius-md)] font-black flex items-center justify-center gap-3 transition-all duration-400 hover:scale-105">
                            <LogOut size={22} strokeWidth={2.5} />
                            Cerrar Sesión
                        </button>
                        <button className="w-full py-4 bg-gradient-to-r from-[var(--error)] to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-[var(--radius-md)] font-black transition-all duration-400 hover:scale-105 shadow-[var(--shadow-medium)]">
                            Eliminar Cuenta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
