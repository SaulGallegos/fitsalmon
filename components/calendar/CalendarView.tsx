'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar, CalendarCheck } from 'lucide-react';

interface Session {
    id: string;
    clientName: string;
    time: string;
    duration: number;
    status: 'confirmed' | 'pending' | 'canceled';
    day: number;
}

export default function CalendarView() {
    const [currentWeek, setCurrentWeek] = useState(0);
    const [currentDay, setCurrentDay] = useState(0); // For mobile single-day view
    const [showAddModal, setShowAddModal] = useState(false);
    const [googleCalendarConnected, setGoogleCalendarConnected] = useState(false);
    const [calendlyConnected, setCalendlyConnected] = useState(false);

    const hours = Array.from({ length: 14 }, (_, i) => i + 6); // 6 AM to 8 PM
    const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const dates = ['13 Ene', '14 Ene', '15 Ene', '16 Ene', '17 Ene', '18 Ene', '19 Ene'];

    // Mock sessions
    const sessions: Session[] = [
        // Monday - Early morning rush
        {
            id: '1',
            clientName: 'Ana Martinez',
            time: '06:00',
            duration: 60,
            status: 'confirmed',
            day: 0
        },
        {
            id: '2',
            clientName: 'Carlos Rodriguez',
            time: '07:00',
            duration: 60,
            status: 'confirmed',
            day: 0
        },
        {
            id: '3',
            clientName: 'Pedro Ramirez',
            time: '08:30',
            duration: 60,
            status: 'confirmed',
            day: 0
        },
        {
            id: '4',
            clientName: 'Luis Hernandez',
            time: '17:00',
            duration: 60,
            status: 'pending',
            day: 0
        },
        {
            id: '5',
            clientName: 'Sofia Torres',
            time: '18:30',
            duration: 60,
            status: 'confirmed',
            day: 0
        },
        // Tuesday - Lighter day
        {
            id: '6',
            clientName: 'Maria Lopez',
            time: '09:00',
            duration: 60,
            status: 'confirmed',
            day: 1
        },
        {
            id: '7',
            clientName: 'Juan Garcia',
            time: '14:00',
            duration: 60,
            status: 'canceled',
            day: 1
        },
        {
            id: '8',
            clientName: 'Ana Martinez',
            time: '19:00',
            duration: 60,
            status: 'confirmed',
            day: 1
        },
        // Wednesday - Busy all day
        {
            id: '9',
            clientName: 'Carlos Rodriguez',
            time: '07:30',
            duration: 60,
            status: 'confirmed',
            day: 2
        },
        {
            id: '10',
            clientName: 'Sofia Torres',
            time: '10:00',
            duration: 60,
            status: 'confirmed',
            day: 2
        },
        {
            id: '11',
            clientName: 'Pedro Ramirez',
            time: '12:00',
            duration: 60,
            status: 'confirmed',
            day: 2
        },
        {
            id: '12',
            clientName: 'Luis Hernandez',
            time: '15:30',
            duration: 60,
            status: 'pending',
            day: 2
        },
        {
            id: '13',
            clientName: 'Maria Lopez',
            time: '17:00',
            duration: 60,
            status: 'confirmed',
            day: 2
        },
        {
            id: '14',
            clientName: 'Juan Garcia',
            time: '18:00',
            duration: 60,
            status: 'confirmed',
            day: 2
        },
        // Thursday - Mid-day focused
        {
            id: '15',
            clientName: 'Ana Martinez',
            time: '11:00',
            duration: 60,
            status: 'confirmed',
            day: 3
        },
        {
            id: '16',
            clientName: 'Carlos Rodriguez',
            time: '12:30',
            duration: 60,
            status: 'confirmed',
            day: 3
        },
        {
            id: '17',
            clientName: 'Sofia Torres',
            time: '13:30',
            duration: 60,
            status: 'confirmed',
            day: 3
        },
        {
            id: '18',
            clientName: 'Pedro Ramirez',
            time: '16:00',
            duration: 60,
            status: 'pending',
            day: 3
        },
        // Friday - Evening heavy
        {
            id: '19',
            clientName: 'Maria Lopez',
            time: '08:00',
            duration: 60,
            status: 'confirmed',
            day: 4
        },
        {
            id: '20',
            clientName: 'Juan Garcia',
            time: '16:30',
            duration: 60,
            status: 'confirmed',
            day: 4
        },
        {
            id: '21',
            clientName: 'Luis Hernandez',
            time: '17:30',
            duration: 60,
            status: 'confirmed',
            day: 4
        },
        {
            id: '22',
            clientName: 'Ana Martinez',
            time: '18:30',
            duration: 60,
            status: 'confirmed',
            day: 4
        },
        {
            id: '23',
            clientName: 'Carlos Rodriguez',
            time: '19:30',
            duration: 60,
            status: 'confirmed',
            day: 4
        },
        // Saturday - Mid-morning cluster
        {
            id: '24',
            clientName: 'Sofia Torres',
            time: '08:00',
            duration: 60,
            status: 'confirmed',
            day: 5
        },
        {
            id: '25',
            clientName: 'Pedro Ramirez',
            time: '09:00',
            duration: 60,
            status: 'confirmed',
            day: 5
        },
        {
            id: '26',
            clientName: 'Maria Lopez',
            time: '10:30',
            duration: 60,
            status: 'confirmed',
            day: 5
        },
        {
            id: '27',
            clientName: 'Juan Garcia',
            time: '11:30',
            duration: 60,
            status: 'pending',
            day: 5
        },
        // Sunday - Light day
        {
            id: '28',
            clientName: 'Luis Hernandez',
            time: '09:00',
            duration: 60,
            status: 'confirmed',
            day: 6
        },
        {
            id: '29',
            clientName: 'Ana Martinez',
            time: '10:30',
            duration: 60,
            status: 'confirmed',
            day: 6
        }
    ];

    const getTimePosition = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number);
        const startHour = 6;
        return ((hours - startHour) * 60 + minutes) / 60;
    };

    return (
        <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] px-4 md:px-6 py-3 md:py-4 border-b border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h1 className="text-xl md:text-2xl font-black mb-1 text-[var(--text-primary)] bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text">Calendario</h1>
                        <p className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:block">Gestiona tus sesiones de entrenamiento</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Integration Buttons */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    setGoogleCalendarConnected(!googleCalendarConnected);
                                    if (!googleCalendarConnected) {
                                        // Simulate integration
                                        setTimeout(() => {
                                            alert('Google Calendar conectado exitosamente');
                                        }, 300);
                                    }
                                }}
                                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full font-black text-xs md:text-sm transition-all duration-400 hover:scale-105 active:scale-95 ${googleCalendarConnected
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-[var(--shadow-glow)]'
                                        : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-[var(--shadow-glow)]'
                                    }`}
                            >
                                <Calendar size={14} strokeWidth={2.5} className="md:w-[16px] md:h-[16px]" />
                                <span className="hidden sm:inline">Google</span>
                            </button>
                            <button
                                onClick={() => {
                                    setCalendlyConnected(!calendlyConnected);
                                    if (!calendlyConnected) {
                                        // Simulate integration
                                        setTimeout(() => {
                                            alert('Calendly conectado exitosamente');
                                        }, 300);
                                    }
                                }}
                                className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full font-black text-xs md:text-sm transition-all duration-400 hover:scale-105 active:scale-95 ${calendlyConnected
                                        ? 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-[var(--shadow-glow)]'
                                        : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-[var(--shadow-glow)]'
                                    }`}
                            >
                                <CalendarCheck size={14} strokeWidth={2.5} className="md:w-[16px] md:h-[16px]" />
                                <span className="hidden sm:inline">Calendly</span>
                            </button>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-95 text-xs md:text-sm"
                        >
                            <Plus size={16} strokeWidth={3} className="md:w-[18px] md:h-[18px]" />
                            <span className="hidden sm:inline">Agregar Sesión</span>
                            <span className="sm:hidden">Agregar</span>
                        </button>
                    </div>
                </div>

                {/* Week Navigation - Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setCurrentWeek(currentWeek - 1)}
                            className="p-2 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]"
                        >
                            <ChevronLeft size={18} strokeWidth={2.5} className="text-[var(--icon-neutral)]" />
                        </button>
                        <span className="text-base font-black min-w-[240px] text-center text-[var(--text-primary)]">Semana del 13 de Enero, 2025</span>
                        <button
                            onClick={() => setCurrentWeek(currentWeek + 1)}
                            className="p-2 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]"
                        >
                            <ChevronRight size={18} strokeWidth={2.5} className="text-[var(--icon-neutral)]" />
                        </button>
                    </div>
                    <button className="ml-auto px-5 py-2 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-gradient-to-r hover:from-[var(--accent-dark)] hover:to-[var(--accent)] hover:text-[var(--text-dark)] rounded-full font-black transition-all duration-400 hover:scale-105 hover:shadow-[var(--shadow-accent-glow)] text-sm">
                        Hoy
                    </button>
                </div>

                {/* Day Navigation - Mobile */}
                <div className="flex md:hidden items-center justify-between gap-3">
                    <button
                        onClick={() => setCurrentDay(currentDay > 0 ? currentDay - 1 : 6)}
                        className="p-2 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 active:scale-95"
                    >
                        <ChevronLeft size={20} strokeWidth={2.5} className="text-[var(--icon-neutral)]" />
                    </button>
                    <div className="text-center flex-1">
                        <div className="text-base font-black text-[var(--text-primary)]">{days[currentDay]}</div>
                        <div className="text-xs text-[var(--text-tertiary)] font-bold">{dates[currentDay]}</div>
                    </div>
                    <button
                        onClick={() => setCurrentDay(currentDay < 6 ? currentDay + 1 : 0)}
                        className="p-2 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 active:scale-95"
                    >
                        <ChevronRight size={20} strokeWidth={2.5} className="text-[var(--icon-neutral)]" />
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 overflow-auto p-3 md:p-8">
                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] shadow-[var(--shadow-luxury)] overflow-hidden border border-[var(--border-medium)]">
                    {/* Desktop Week View */}
                    <div className="hidden md:block">
                        {/* Days Header */}
                        <div className="grid grid-cols-8 border-b-2 border-[var(--border-medium)]">
                            <div className="p-5 bg-gradient-to-br from-[var(--background-light)] to-[var(--surface-cards)]"></div>
                            {days.map((day, i) => (
                                <div key={day} className="p-5 text-center bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)] border-l border-[var(--border-soft)]">
                                    <div className="font-black text-[var(--text-primary)] text-base">{day}</div>
                                    <div className="text-xs text-[var(--text-tertiary)] mt-1.5 font-bold">{dates[i]}</div>
                                </div>
                            ))}
                        </div>

                        {/* Time Grid */}
                        <div className="relative">
                            {hours.map(hour => (
                                <div key={hour} className="grid grid-cols-8 border-b border-[var(--border-soft)] min-h-[80px]">
                                    <div className="p-5 text-sm font-black text-[var(--text-tertiary)] bg-gradient-to-r from-[var(--background-light)] to-transparent flex items-start">
                                        {hour.toString().padStart(2, '0')}:00
                                    </div>
                                    {days.map((_, dayIndex) => (
                                        <div
                                            key={`${hour}-${dayIndex}`}
                                            className="border-l border-[var(--border-soft)] relative hover:bg-[var(--surface-light)] transition-all duration-400 cursor-pointer group"
                                        >
                                            {/* Render sessions in this time slot */}
                                            {sessions
                                                .filter(s => s.day === dayIndex)
                                                .filter(s => {
                                                    const sessionHour = parseInt(s.time.split(':')[0]);
                                                    return sessionHour === hour;
                                                })
                                                .map(session => (
                                                    <div
                                                        key={session.id}
                                                        className={`absolute left-2 right-2 p-4 rounded-[var(--radius-md)] hover:shadow-[var(--shadow-strong)] transition-all duration-400 cursor-pointer border-l-4 ${session.status === 'confirmed' ? 'bg-gradient-to-br from-emerald-600/30 to-emerald-500/20 border-emerald-400 backdrop-blur-sm' :
                                                            session.status === 'pending' ? 'bg-gradient-to-br from-amber-600/30 to-amber-500/20 border-amber-400 backdrop-blur-sm' :
                                                                'bg-gradient-to-br from-red-600/30 to-red-500/20 border-red-400 backdrop-blur-sm'
                                                            } hover:scale-[1.02]`}
                                                        style={{
                                                            top: `${(getTimePosition(session.time) % 1) * 80}px`,
                                                            height: `${(session.duration / 60) * 80}px`
                                                        }}
                                                    >
                                                        <p className="font-black text-sm text-[var(--text-primary)] truncate mb-1">
                                                            {session.clientName}
                                                        </p>
                                                        <p className="text-xs text-[var(--text-secondary)] font-bold">
                                                            {session.time} • {session.duration}min
                                                        </p>
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Single Day View */}
                    <div className="md:hidden">
                        <div className="relative">
                            {hours.map(hour => (
                                <div key={hour} className="grid grid-cols-2 border-b border-[var(--border-soft)] min-h-[70px]">
                                    <div className="p-3 text-sm font-black text-[var(--text-tertiary)] bg-gradient-to-r from-[var(--background-light)] to-transparent flex items-start">
                                        {hour.toString().padStart(2, '0')}:00
                                    </div>
                                    <div className="border-l border-[var(--border-soft)] relative hover:bg-[var(--surface-light)] transition-all duration-400">
                                        {/* Render sessions for current day in this time slot */}
                                        {sessions
                                            .filter(s => s.day === currentDay)
                                            .filter(s => {
                                                const sessionHour = parseInt(s.time.split(':')[0]);
                                                return sessionHour === hour;
                                            })
                                            .map(session => (
                                                <div
                                                    key={session.id}
                                                    className={`absolute left-2 right-2 p-3 rounded-[var(--radius-md)] shadow-md transition-all duration-400 cursor-pointer border-l-4 ${session.status === 'confirmed' ? 'bg-gradient-to-br from-emerald-600/30 to-emerald-500/20 border-emerald-400 backdrop-blur-sm' :
                                                        session.status === 'pending' ? 'bg-gradient-to-br from-amber-600/30 to-amber-500/20 border-amber-400 backdrop-blur-sm' :
                                                            'bg-gradient-to-br from-red-600/30 to-red-500/20 border-red-400 backdrop-blur-sm'
                                                        } active:scale-95`}
                                                    style={{
                                                        top: `${(getTimePosition(session.time) % 1) * 70}px`,
                                                        height: `${(session.duration / 60) * 70}px`
                                                    }}
                                                >
                                                    <p className="font-black text-sm text-[var(--text-primary)] truncate mb-0.5">
                                                        {session.clientName}
                                                    </p>
                                                    <p className="text-xs text-[var(--text-secondary)] font-bold">
                                                        {session.time} • {session.duration}min
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-4 md:mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-[var(--radius-sm)] bg-emerald-500 shadow-[var(--shadow-soft)] border-2 border-emerald-400"></div>
                        <span className="text-xs md:text-sm font-bold text-[var(--text-primary)]">Confirmada</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-[var(--radius-sm)] bg-amber-500 shadow-[var(--shadow-soft)] border-2 border-amber-400"></div>
                        <span className="text-xs md:text-sm font-bold text-[var(--text-primary)]">Pendiente</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-4 h-4 md:w-5 md:h-5 rounded-[var(--radius-sm)] bg-red-500 shadow-[var(--shadow-soft)] border-2 border-red-400"></div>
                        <span className="text-xs md:text-sm font-bold text-[var(--text-primary)]">Cancelada</span>
                    </div>
                </div>
            </div>

            {/* Add Session Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in px-4" onClick={() => setShowAddModal(false)}>
                    <div className="bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)] rounded-[var(--radius-xl)] p-5 md:p-8 max-w-md w-full shadow-[var(--shadow-luxury)] border border-[var(--border-medium)] animate-slide-up" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-2xl md:text-3xl font-black mb-5 md:mb-8 text-[var(--text-primary)]">Agregar Sesión</h2>
                        <div className="space-y-4 md:space-y-5">
                            <div>
                                <label className="block text-xs md:text-sm font-black text-[var(--text-primary)] mb-2 md:mb-3 uppercase tracking-wide">Cliente</label>
                                <input
                                    type="text"
                                    placeholder="Seleccionar cliente..."
                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] focus:bg-[var(--surface-cards)] transition-all duration-400 text-[var(--text-primary)] placeholder:text-[var(--placeholder)] font-medium text-sm md:text-base"
                                />
                            </div>
                            <div>
                                <label className="block text-xs md:text-sm font-black text-[var(--text-primary)] mb-2 md:mb-3 uppercase tracking-wide">Fecha y Hora</label>
                                <input
                                    type="datetime-local"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] focus:bg-[var(--surface-cards)] transition-all duration-400 text-[var(--text-primary)] font-medium text-sm md:text-base"
                                />
                            </div>
                            <div>
                                <label className="block text-xs md:text-sm font-black text-[var(--text-primary)] mb-2 md:mb-3 uppercase tracking-wide">Duración (minutos)</label>
                                <input
                                    type="number"
                                    placeholder="60"
                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] focus:bg-[var(--surface-cards)] transition-all duration-400 text-[var(--text-primary)] placeholder:text-[var(--placeholder)] font-medium text-sm md:text-base"
                                />
                            </div>
                            <div className="flex gap-3 md:gap-4 pt-4 md:pt-6">
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 py-3 md:py-4 border-2 border-[var(--border-medium)] text-[var(--text-primary)] hover:bg-[var(--surface-light)] hover:border-[var(--border-strong)] rounded-full font-black transition-all duration-400 hover:scale-105 text-sm md:text-base"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 py-3 md:py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 text-sm md:text-base"
                                >
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
