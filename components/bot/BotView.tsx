'use client';

import { Bot, MessageSquare, Calendar, Users, Settings, Zap } from 'lucide-react';

interface BotAction {
    id: string;
    type: 'check-in' | 'reschedule' | 'testimonial' | 'payment' | 'booking';
    client: string;
    description: string;
    timestamp: string;
    status: 'completed' | 'pending' | 'failed';
}

export default function BotView() {
    const recentActions: BotAction[] = [
        {
            id: '1',
            type: 'check-in',
            client: 'Ana Martinez',
            description: 'Envió mensaje de check-in después de 10 días de inactividad',
            timestamp: 'hace 2 horas',
            status: 'completed'
        },
        {
            id: '2',
            type: 'reschedule',
            client: 'Carlos Rodriguez',
            description: 'Ayudó al cliente a reagendar sesión cancelada',
            timestamp: 'hace 5 horas',
            status: 'completed'
        },
        {
            id: '3',
            type: 'testimonial',
            client: 'Maria Lopez',
            description: 'Solicitó testimonio después de 5 sesiones exitosas',
            timestamp: 'hace 1 día',
            status: 'pending'
        }
    ];

    const botCapabilities = [
        {
            icon: Calendar,
            title: 'Gestión de Sesiones',
            description: 'Maneja automáticamente cancelaciones, reagendamiento y confirmaciones de reserva',
            active: true
        },
        {
            icon: MessageSquare,
            title: 'Respuestas Inteligentes',
            description: 'Redacta y envía respuestas contextuales a mensajes de clientes',
            active: true
        },
        {
            icon: Users,
            title: 'Check-ins de Clientes',
            description: 'Contacta automáticamente a clientes inactivos después de X días',
            active: true
        },
        {
            icon: Zap,
            title: 'Recopilación de Testimonios',
            description: 'Solicita reseñas de clientes después de logros exitosos',
            active: false
        }
    ];

    return (
        <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--surface-cards)] via-[var(--surface-light)] to-[var(--surface-cards)] px-4 md:px-6 py-3 md:py-4 border-b border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary-light)] rounded-lg flex items-center justify-center shadow-[var(--shadow-glow-strong)] relative">
                            <Bot size={20} className="text-white md:hidden" strokeWidth={2} />
                            <Bot size={28} className="text-white hidden md:block" strokeWidth={2} />
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-transparent opacity-20 rounded-lg"></div>
                        </div>
                        <div>
                            <h1 className="text-xl md:text-2xl font-black mb-1 bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text text-transparent">Asistente IA</h1>
                            <p className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:block">Automatizando tu negocio de entrenamiento 24/7</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--accent-hover)] text-[var(--text-dark)] rounded-full font-black shadow-[var(--shadow-accent-glow)] hover:shadow-[var(--shadow-accent-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-95 text-xs md:text-sm">
                        <Settings size={16} strokeWidth={3} className="md:w-[18px] md:h-[18px]" />
                        <span className="hidden sm:inline">Configurar</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-auto p-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-xl p-6 border border-purple-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <p className="text-xs font-black text-purple-300 uppercase tracking-widest mb-3">Mensajes Gestionados</p>
                        <p className="text-5xl font-black text-purple-400 mb-3">247</p>
                        <p className="text-xs text-purple-300 font-bold">↑ 23% esta semana</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl p-6 border border-blue-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <p className="text-xs font-black text-blue-300 uppercase tracking-widest mb-3">Sesiones Agendadas</p>
                        <p className="text-5xl font-black text-blue-400 mb-3">42</p>
                        <p className="text-xs text-blue-300 font-bold">↑ 15% esta semana</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <p className="text-xs font-black text-emerald-300 uppercase tracking-widest mb-3">Check-ins Enviados</p>
                        <p className="text-5xl font-black text-emerald-400 mb-3">18</p>
                        <p className="text-xs text-[var(--text-tertiary)] font-bold">Últimos 7 días</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-xl p-6 border border-amber-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <p className="text-xs font-black text-amber-300 uppercase tracking-widest mb-3">Tiempo Ahorrado</p>
                        <p className="text-5xl font-black text-amber-400 mb-3">12h</p>
                        <p className="text-xs text-[var(--text-tertiary)] font-bold">Esta semana</p>
                    </div>
                </div>

                {/* Bot Capabilities */}
                <div className="mb-16">
                    <h2 className="text-3xl font-black mb-8 text-[var(--text-primary)]">Capacidades del Bot</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {botCapabilities.map((capability) => {
                            const Icon = capability.icon;
                            return (
                                <div
                                    key={capability.title}
                                    className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-xl p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)] hover:border-[var(--accent)] hover:shadow-[var(--shadow-accent-glow)] transition-all duration-400"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-alpha-20)] to-[var(--accent-alpha-10)] rounded-md flex items-center justify-center">
                                            <Icon size={28} className="text-[var(--primary)]" />
                                        </div>
                                        <div className={`px-4 py-2 rounded-full text-sm font-black ${capability.active
                                            ? 'bg-gradient-to-r from-[var(--success)] to-[var(--success-light)] text-white shadow-[var(--shadow-soft)]'
                                            : 'bg-[var(--background-light)] text-[var(--text-tertiary)] border border-[var(--border-soft)]'
                                            }`}>
                                            {capability.active ? 'Activo' : 'Inactivo'}
                                        </div>
                                    </div>
                                    <h3 className="font-black text-xl mb-3 text-[var(--text-primary)]">{capability.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm font-medium leading-relaxed">{capability.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Actions */}
                <div className="mb-16">
                    <h2 className="text-3xl font-black mb-8 text-[var(--text-primary)]">Acciones Recientes</h2>
                    <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-xl shadow-[var(--shadow-medium)] overflow-hidden border border-[var(--border-soft)]">
                        {recentActions.map((action, index) => (
                            <div
                                key={action.id}
                                className={`p-6 flex items-start gap-5 ${index !== recentActions.length - 1 ? 'border-b border-[var(--border-soft)]' : ''
                                    } hover:bg-[var(--surface-light)] transition-all duration-400`}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] rounded-md flex items-center justify-center shrink-0 shadow-[var(--shadow-glow)]">
                                    <Zap size={24} className="text-white" strokeWidth={2.5} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-black text-[var(--text-primary)] text-lg">{action.client}</h4>
                                        <span className="text-sm text-[var(--text-tertiary)] font-semibold">{action.timestamp}</span>
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm mb-4 font-medium">{action.description}</p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-black text-[var(--text-tertiary)] uppercase tracking-widest">
                                            {action.type}
                                        </span>
                                        <span className={`text-xs px-4 py-2 rounded-full font-black ${action.status === 'completed'
                                            ? 'bg-gradient-to-r from-[var(--success)] to-[var(--success-light)] text-white shadow-[var(--shadow-soft)]'
                                            : action.status === 'pending'
                                                ? 'bg-gradient-to-r from-[var(--warning)] to-amber-400 text-white shadow-[var(--shadow-soft)]'
                                                : 'bg-gradient-to-r from-[var(--error)] to-red-400 text-white shadow-[var(--shadow-soft)]'
                                            }`}>
                                            {action.status === 'completed' ? 'completado' : action.status === 'pending' ? 'pendiente' : 'fallido'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
