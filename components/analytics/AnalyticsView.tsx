'use client';

import { TrendingUp, TrendingDown, Users, DollarSign, Calendar, MessageSquare } from 'lucide-react';

export default function AnalyticsView() {
    return (
        <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] overflow-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] px-4 md:px-6 py-3 md:py-4 border-b border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                <h1 className="text-xl md:text-2xl font-black mb-1 bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text">Analíticas</h1>
                <p className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:block">Rastrea el desempeño de tu negocio</p>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-medium)] border border-blue-500/30 backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <div className="flex items-center justify-between mb-5">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-[var(--radius-md)] flex items-center justify-center">
                                <Users size={28} className="text-blue-400" strokeWidth={2} />
                            </div>
                            <span className="flex items-center gap-2 text-[var(--success)] text-sm font-black">
                                <TrendingUp size={18} strokeWidth={3} />
                                12%
                            </span>
                        </div>
                        <p className="text-sm text-blue-300 mb-3 font-black uppercase tracking-wider">Clientes Totales</p>
                        <p className="text-5xl font-black text-blue-400">47</p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-500/10 rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-medium)] border border-emerald-500/30 backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <div className="flex items-center justify-between mb-5">
                            <div className="w-14 h-14 bg-emerald-500/20 rounded-[var(--radius-md)] flex items-center justify-center">
                                <DollarSign size={28} className="text-emerald-400" strokeWidth={2} />
                            </div>
                            <span className="flex items-center gap-2 text-[var(--success)] text-sm font-black">
                                <TrendingUp size={18} strokeWidth={3} />
                                23%
                            </span>
                        </div>
                        <p className="text-sm text-emerald-300 mb-3 font-black uppercase tracking-wider">Ingresos Mensuales</p>
                        <p className="text-5xl font-black text-emerald-400">$8,425</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-medium)] border border-purple-500/30 backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <div className="flex items-center justify-between mb-5">
                            <div className="w-14 h-14 bg-purple-500/20 rounded-[var(--radius-md)] flex items-center justify-center">
                                <Calendar size={28} className="text-purple-400" strokeWidth={2} />
                            </div>
                            <span className="flex items-center gap-2 text-[var(--success)] text-sm font-black">
                                <TrendingUp size={18} strokeWidth={3} />
                                8%
                            </span>
                        </div>
                        <p className="text-sm text-purple-300 mb-3 font-black uppercase tracking-wider">Sesiones Este Mes</p>
                        <p className="text-5xl font-black text-purple-400">156</p>
                    </div>

                    <div className="bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-medium)] border border-amber-500/30 backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                        <div className="flex items-center justify-between mb-5">
                            <div className="w-14 h-14 bg-amber-500/20 rounded-[var(--radius-md)] flex items-center justify-center">
                                <TrendingUp size={28} className="text-amber-400" strokeWidth={2} />
                            </div>
                            <span className="flex items-center gap-2 text-[var(--error)] text-sm font-black">
                                <TrendingDown size={18} strokeWidth={3} />
                                5%
                            </span>
                        </div>
                        <p className="text-sm text-amber-300 mb-3 font-black uppercase tracking-wider">Tasa de Asistencia</p>
                        <p className="text-5xl font-black text-amber-400">92%</p>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    {/* Session Attendance Trends */}
                    <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-[var(--text-primary)]">Tendencias de Asistencia</h3>
                        <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] p-6 border border-[var(--border-soft)] relative">
                            {/* Line Chart Placeholder */}
                            <div className="h-full flex items-end justify-between gap-2 relative">
                                {/* Y-axis labels */}
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-[var(--text-tertiary)] font-semibold">
                                    <span>30</span>
                                    <span>20</span>
                                    <span>10</span>
                                    <span>0</span>
                                </div>

                                {/* Chart area with line */}
                                <div className="flex-1 h-full ml-8 relative">
                                    <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        <line x1="0" y1="50" x2="300" y2="50" stroke="var(--border-soft)" strokeWidth="1" opacity="0.3" />
                                        <line x1="0" y1="100" x2="300" y2="100" stroke="var(--border-soft)" strokeWidth="1" opacity="0.3" />
                                        <line x1="0" y1="150" x2="300" y2="150" stroke="var(--border-soft)" strokeWidth="1" opacity="0.3" />

                                        {/* Line chart */}
                                        <polyline
                                            points="0,120 50,80 100,90 150,60 200,70 250,40 300,45"
                                            fill="none"
                                            stroke="rgb(96, 165, 250)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        {/* Gradient fill under line */}
                                        <defs>
                                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: 'rgb(96, 165, 250)', stopOpacity: 0.3 }} />
                                                <stop offset="100%" style={{ stopColor: 'rgb(96, 165, 250)', stopOpacity: 0 }} />
                                            </linearGradient>
                                        </defs>
                                        <polygon
                                            points="0,120 50,80 100,90 150,60 200,70 250,40 300,45 300,200 0,200"
                                            fill="url(#lineGradient)"
                                        />

                                        {/* Dots on line */}
                                        <circle cx="0" cy="120" r="4" fill="rgb(96, 165, 250)" />
                                        <circle cx="50" cy="80" r="4" fill="rgb(96, 165, 250)" />
                                        <circle cx="100" cy="90" r="4" fill="rgb(96, 165, 250)" />
                                        <circle cx="150" cy="60" r="4" fill="rgb(96, 165, 250)" />
                                        <circle cx="200" cy="70" r="4" fill="rgb(96, 165, 250)" />
                                        <circle cx="250" cy="40" r="4" fill="rgb(96, 165, 250)" />
                                        <circle cx="300" cy="45" r="4" fill="rgb(96, 165, 250)" />
                                    </svg>

                                    {/* X-axis labels */}
                                    <div className="flex justify-between text-xs text-[var(--text-tertiary)] font-semibold mt-2">
                                        <span>Lun</span>
                                        <span>Mar</span>
                                        <span>Mié</span>
                                        <span>Jue</span>
                                        <span>Vie</span>
                                        <span>Sáb</span>
                                        <span>Dom</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-around text-sm">
                            <div>
                                <p className="text-[var(--text-tertiary)] font-semibold mb-2">Completadas</p>
                                <p className="font-black text-[var(--success)] text-2xl">142</p>
                            </div>
                            <div>
                                <p className="text-[var(--text-tertiary)] font-semibold mb-2">Canceladas</p>
                                <p className="font-black text-[var(--error)] text-2xl">14</p>
                            </div>
                        </div>
                    </div>

                    {/* Revenue Overview */}
                    <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-[var(--text-primary)]">Vista General de Ingresos</h3>
                        <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] p-6 border border-[var(--border-soft)]">
                            {/* Bar Chart Placeholder */}
                            <div className="h-full flex items-end justify-between gap-3 relative">
                                {/* Y-axis labels */}
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-[var(--text-tertiary)] font-semibold">
                                    <span>$10k</span>
                                    <span>$7.5k</span>
                                    <span>$5k</span>
                                    <span>$2.5k</span>
                                    <span>$0</span>
                                </div>

                                {/* Bars */}
                                <div className="flex-1 h-full ml-12 flex items-end justify-around gap-2">
                                    {[
                                        { height: '45%', label: 'Jan', color: 'from-emerald-600 to-emerald-400' },
                                        { height: '52%', label: 'Feb', color: 'from-emerald-600 to-emerald-400' },
                                        { height: '48%', label: 'Mar', color: 'from-emerald-600 to-emerald-400' },
                                        { height: '60%', label: 'Apr', color: 'from-emerald-600 to-emerald-400' },
                                        { height: '55%', label: 'May', color: 'from-emerald-600 to-emerald-400' },
                                        { height: '70%', label: 'Jun', color: 'from-emerald-600 to-emerald-400' },
                                        { height: '85%', label: 'Jul', color: 'from-emerald-500 to-emerald-300' }
                                    ].map((bar, index) => (
                                        <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                                            <div
                                                className={`w-full bg-gradient-to-t ${bar.color} rounded-t-md transition-all duration-500 hover:scale-105 shadow-lg`}
                                                style={{ height: bar.height }}
                                            ></div>
                                            <span className="text-xs text-[var(--text-tertiary)] font-semibold mt-2">{bar.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-around text-sm">
                            <div>
                                <p className="text-[var(--text-tertiary)] font-semibold mb-2">Este Mes</p>
                                <p className="font-black text-[var(--primary)] text-2xl">$8,425</p>
                            </div>
                            <div>
                                <p className="text-[var(--text-tertiary)] font-semibold mb-2">Mes Pasado</p>
                                <p className="font-black text-[var(--text-primary)] text-2xl">$6,890</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Retention & Bot Performance */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-[var(--text-primary)]">Retención de Clientes</h3>
                        <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] flex items-center justify-center border border-[var(--border-soft)] p-6">
                            {/* Pie Chart Placeholder */}
                            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke="rgb(239, 68, 68)"
                                    strokeWidth="40"
                                    strokeDasharray="452"
                                    strokeDashoffset="0"
                                    opacity="0.8"
                                />
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="80"
                                    fill="none"
                                    stroke="rgb(52, 211, 153)"
                                    strokeWidth="40"
                                    strokeDasharray="411 41"
                                    strokeDashoffset="0"
                                    className="transition-all duration-500"
                                />
                                {/* Center circle for donut effect */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="50"
                                    fill="var(--background-dark)"
                                />
                                {/* Center text */}
                                <text
                                    x="100"
                                    y="95"
                                    textAnchor="middle"
                                    className="fill-[var(--text-primary)] font-black text-2xl"
                                    transform="rotate(90 100 100)"
                                >
                                    91%
                                </text>
                                <text
                                    x="100"
                                    y="115"
                                    textAnchor="middle"
                                    className="fill-[var(--text-tertiary)] font-semibold text-xs"
                                    transform="rotate(90 100 100)"
                                >
                                    Activos
                                </text>
                            </svg>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-[var(--success)] shadow-[var(--shadow-soft)]"></div>
                                    <span className="text-sm font-bold text-[var(--text-primary)]">Clientes Activos</span>
                                </div>
                                <span className="font-black text-[var(--text-primary)] text-lg">43 (91%)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-[var(--error)] shadow-[var(--shadow-soft)]"></div>
                                    <span className="text-sm font-bold text-[var(--text-primary)]">Bajas Este Mes</span>
                                </div>
                                <span className="font-black text-[var(--text-primary)] text-lg">4 (9%)</span>
                            </div>
                        </div>
                    </div>

                    {/* Bot Performance */}
                    <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                        <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 text-[var(--text-primary)]">Rendimiento del Bot</h3>
                        <div className="space-y-5">
                            <div className="p-5 bg-[var(--background-light)] rounded-[var(--radius-md)] border border-[var(--border-soft)]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-[var(--text-tertiary)] font-black uppercase tracking-wide">Mensajes Gestionados</span>
                                    <span className="font-black text-[var(--text-primary)] text-lg">247</span>
                                </div>
                                <div className="w-full bg-[var(--background-dark)] rounded-full h-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] h-3 rounded-full shadow-[var(--shadow-glow)]" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="p-5 bg-[var(--background-light)] rounded-[var(--radius-md)] border border-[var(--border-soft)]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-[var(--text-tertiary)] font-black uppercase tracking-wide">Sesiones Agendadas</span>
                                    <span className="font-black text-[var(--text-primary)] text-lg">42</span>
                                </div>
                                <div className="w-full bg-[var(--background-dark)] rounded-full h-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] h-3 rounded-full shadow-[var(--shadow-glow)]" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div className="p-5 bg-[var(--background-light)] rounded-[var(--radius-md)] border border-[var(--border-soft)]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-[var(--text-tertiary)] font-black uppercase tracking-wide">Check-ins Enviados</span>
                                    <span className="font-black text-[var(--text-primary)] text-lg">18</span>
                                </div>
                                <div className="w-full bg-[var(--background-dark)] rounded-full h-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] h-3 rounded-full shadow-[var(--shadow-glow)]" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div className="p-6 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] rounded-[var(--radius-md)] text-white shadow-[var(--shadow-glow)]">
                                <p className="text-sm opacity-90 font-bold mb-3">Tiempo Ahorrado Esta Semana</p>
                                <p className="text-4xl font-black">12 horas</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Inactive Clients */}
                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-4 sm:p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">Clientes Inactivos</h3>
                        <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black text-xs sm:text-sm shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 whitespace-nowrap">
                            Enviar Mensaje a Todos
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'Juan Garcia', lastSeen: '15 days ago', sessions: 8 },
                            { name: 'Laura Martinez', lastSeen: '12 days ago', sessions: 12 },
                            { name: 'Pedro Sanchez', lastSeen: '10 days ago', sessions: 5 }
                        ].map((client) => (
                            <div
                                key={client.name}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 sm:p-5 bg-[var(--background-light)] rounded-[var(--radius-md)] hover:bg-[var(--surface-light)] transition-all duration-400 border border-[var(--border-soft)]"
                            >
                                <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                    <div className="text-3xl sm:text-4xl flex-shrink-0">👤</div>
                                    <div className="min-w-0">
                                        <p className="font-black text-[var(--text-primary)] text-base sm:text-lg">{client.name}</p>
                                        <p className="text-xs sm:text-sm text-[var(--text-tertiary)] font-semibold">
                                            Última actividad: {client.lastSeen} • {client.sessions} sesiones en total
                                        </p>
                                    </div>
                                </div>
                                <button className="px-4 sm:px-5 py-2 sm:py-3 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-gradient-to-r hover:from-[var(--accent-dark)] hover:to-[var(--accent)] hover:text-[var(--text-dark)] rounded-full font-bold text-xs sm:text-sm transition-all duration-400 hover:scale-105 hover:shadow-[var(--shadow-accent-glow)] flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                                    <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
                                    <span className="hidden xs:inline">Enviar Mensaje</span>
                                    <span className="xs:hidden">Mensaje</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
