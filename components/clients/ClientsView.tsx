'use client';

import { useState } from 'react';
import { Search, Plus, MessageSquare, Mail, Phone, FileText, Award } from 'lucide-react';

interface Client {
    id: string;
    name: string;
    avatar: string;
    nextSession: string;
    engagement: 'high' | 'medium' | 'low';
    lastCheckIn: string;
}

export default function ClientsView() {
    const [selectedClient, setSelectedClient] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'programs' | 'testimonials'>('overview');

    // Mock data
    const clients: Client[] = [
        {
            id: '1',
            name: 'Ana Martinez',
            avatar: '👤',
            nextSession: 'Mañana, 8:00 AM',
            engagement: 'high',
            lastCheckIn: 'hace 1 día'
        },
        {
            id: '2',
            name: 'Carlos Rodriguez',
            avatar: '👤',
            nextSession: 'Viernes, 10:00 AM',
            engagement: 'medium',
            lastCheckIn: 'hace 3 días'
        },
        {
            id: '3',
            name: 'Maria Lopez',
            avatar: '👤',
            nextSession: 'Sábado, 9:00 AM',
            engagement: 'high',
            lastCheckIn: 'hace 2 días'
        },
        {
            id: '4',
            name: 'Juan Garcia',
            avatar: '👤',
            nextSession: 'Próxima semana',
            engagement: 'low',
            lastCheckIn: 'hace 10 días'
        },
        {
            id: '5',
            name: 'Sofia Torres',
            avatar: '👤',
            nextSession: 'Jueves, 4:00 PM',
            engagement: 'high',
            lastCheckIn: 'hace 1 día'
        },
        {
            id: '6',
            name: 'Luis Hernandez',
            avatar: '👤',
            nextSession: 'Viernes, 2:00 PM',
            engagement: 'medium',
            lastCheckIn: 'hace 5 días'
        }
    ];

    const getEngagementColor = (engagement: string) => {
        switch (engagement) {
            case 'high': return 'bg-[var(--success)]';
            case 'medium': return 'bg-[var(--warning)]';
            case 'low': return 'bg-[var(--error)]';
            default: return 'bg-gray-400';
        }
    };

    const currentClient = clients.find(c => c.id === selectedClient);

    if (selectedClient && currentClient) {
        return (
            <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] px-6 py-4 border-b border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                    <button
                        onClick={() => setSelectedClient(null)}
                        className="text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline mb-3 font-black text-sm transition-all duration-400 flex items-center gap-2"
                    >
                        ← Volver a Clientes
                    </button>

                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="text-5xl">{currentClient.avatar}</div>
                            <div>
                                <h1 className="text-2xl font-black mb-1 text-[var(--text-primary)]">{currentClient.name}</h1>
                                <p className="text-xs text-[var(--text-secondary)] font-semibold">Miembro desde Enero 2024</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="p-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white transition-all duration-400 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:scale-110 active:scale-95">
                                <MessageSquare size={18} />
                            </button>
                            <button className="p-2.5 bg-purple-500 hover:bg-purple-600 rounded-full text-white transition-all duration-400 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] hover:scale-110 active:scale-95">
                                <Phone size={18} />
                            </button>
                            <button className="p-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] rounded-full text-white transition-all duration-400 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] hover:scale-110 active:scale-95">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-3 mt-4">
                        {(['overview', 'progress', 'programs', 'testimonials'] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 font-black rounded-[var(--radius-md)] transition-all duration-400 text-sm ${activeTab === tab
                                    ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] text-white shadow-[var(--shadow-glow)]'
                                    : 'text-[var(--text-tertiary)] hover:bg-[var(--surface-light)] hover:text-[var(--text-primary)]'
                                    }`}
                            >
                                {tab === 'overview' ? 'Resumen' : tab === 'progress' ? 'Progreso' : tab === 'programs' ? 'Programas' : 'Testimonios'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-auto p-8">
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)] hover:border-[var(--accent)] hover:shadow-[var(--shadow-accent-glow)] transition-all duration-400">
                                <h3 className="font-black mb-4 text-[var(--text-primary)] text-lg">Próxima Sesión</h3>
                                <p className="text-3xl font-black text-[var(--primary)] mb-5">{currentClient.nextSession}</p>
                                <button className="w-full py-3.5 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-gradient-to-r hover:from-[var(--accent-dark)] hover:to-[var(--accent)] hover:text-[var(--text-dark)] rounded-full font-black transition-all duration-400 hover:scale-105 hover:shadow-[var(--shadow-accent-glow)]">
                                    Reagendar
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                <h3 className="font-black mb-4 text-[var(--text-primary)] text-lg">Estado</h3>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-4 h-4 rounded-full ${getEngagementColor(currentClient.engagement)} shadow-[var(--shadow-soft)]`}></div>
                                    <span className="capitalize font-bold text-[var(--text-primary)]">{currentClient.engagement === 'high' ? 'Alto' : currentClient.engagement === 'medium' ? 'Medio' : 'Bajo'} Compromiso</span>
                                </div>
                                <p className="text-sm text-[var(--text-tertiary)] font-semibold">Último check-in: {currentClient.lastCheckIn}</p>
                            </div>

                            <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                <h3 className="font-black mb-4 text-[var(--text-primary)] text-lg">Acciones Rápidas</h3>
                                <div className="space-y-3">
                                    <button className="w-full py-3.5 bg-[var(--surface-light)] hover:bg-[var(--primary-alpha-20)] hover:border hover:border-[var(--primary)] rounded-[var(--radius-md)] font-bold text-left px-5 transition-all duration-400 text-[var(--text-primary)] hover:text-[var(--primary)]">
                                        Enviar Mensaje
                                    </button>
                                    <button className="w-full py-3.5 bg-[var(--surface-light)] hover:bg-[var(--primary-alpha-20)] hover:border hover:border-[var(--primary)] rounded-[var(--radius-md)] font-bold text-left px-5 transition-all duration-400 text-[var(--text-primary)] hover:text-[var(--primary)]">
                                        Agregar Nota
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)] md:col-span-2 lg:col-span-3">
                                <h3 className="font-black mb-6 text-[var(--text-primary)] text-xl">Notas Recientes</h3>
                                <div className="space-y-4">
                                    <div className="p-5 bg-[var(--background-light)] rounded-[var(--radius-md)] border border-[var(--border-soft)]">
                                        <p className="text-xs text-[var(--text-tertiary)] font-bold uppercase tracking-wide">10 Ene, 2025</p>
                                        <p className="mt-3 text-[var(--text-primary)] font-medium">Gran progreso en sentadillas. Peso aumentado a 80kg.</p>
                                    </div>
                                    <div className="p-5 bg-[var(--background-light)] rounded-[var(--radius-md)] border border-[var(--border-soft)]">
                                        <p className="text-xs text-[var(--text-tertiary)] font-bold uppercase tracking-wide">5 Ene, 2025</p>
                                        <p className="mt-3 text-[var(--text-primary)] font-medium">Cliente mencionó molestia en la rodilla. Plan de entrenamiento ajustado.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'progress' && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-black text-[var(--text-primary)]">Seguimiento de Progreso</h3>
                                <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105">
                                    <Plus size={22} strokeWidth={3} />
                                    Agregar Gráfica
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Weight Progress */}
                                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-black text-[var(--text-primary)] text-lg">Progreso de Peso</h3>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-[var(--primary)]">72.5 kg</p>
                                            <p className="text-sm text-[var(--success)] font-bold">-7.5 kg</p>
                                        </div>
                                    </div>
                                    <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] p-4 relative border border-[var(--border-soft)] overflow-hidden">
                                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                            {/* Grid lines */}
                                            <line x1="0" y1="0" x2="400" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />

                                            {/* Chart line - downward trend for weight loss */}
                                            <defs>
                                                <linearGradient id="weightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="var(--primary)" />
                                                    <stop offset="100%" stopColor="var(--accent)" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M 0 40 L 50 45 L 100 50 L 150 60 L 200 75 L 250 95 L 300 120 L 350 145 L 400 160"
                                                fill="none"
                                                stroke="url(#weightGradient)"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* Data points */}
                                            <circle cx="0" cy="40" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="50" cy="45" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="100" cy="50" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="150" cy="60" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="200" cy="75" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="250" cy="95" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="300" cy="120" r="4" fill="var(--accent)" className="drop-shadow-lg" />
                                            <circle cx="350" cy="145" r="4" fill="var(--accent)" className="drop-shadow-lg" />
                                            <circle cx="400" cy="160" r="5" fill="var(--accent)" className="drop-shadow-lg" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Body Fat % */}
                                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-black text-[var(--text-primary)] text-lg">% Grasa Corporal</h3>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-[var(--primary)]">18.2%</p>
                                            <p className="text-sm text-[var(--success)] font-bold">-6.8%</p>
                                        </div>
                                    </div>
                                    <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] p-4 relative border border-[var(--border-soft)] overflow-hidden">
                                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                            {/* Grid lines */}
                                            <line x1="0" y1="0" x2="400" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />

                                            {/* Chart line - downward trend for body fat */}
                                            <defs>
                                                <linearGradient id="bodyFatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="var(--success)" />
                                                    <stop offset="100%" stopColor="var(--primary)" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M 0 30 L 50 38 L 100 48 L 150 62 L 200 80 L 250 100 L 300 125 L 350 148 L 400 165"
                                                fill="none"
                                                stroke="url(#bodyFatGradient)"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* Data points */}
                                            <circle cx="0" cy="30" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="50" cy="38" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="100" cy="48" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="150" cy="62" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="200" cy="80" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="250" cy="100" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="300" cy="125" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="350" cy="148" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="400" cy="165" r="5" fill="var(--primary)" className="drop-shadow-lg" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Muscle Mass */}
                                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-black text-[var(--text-primary)] text-lg">Masa Muscular</h3>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-[var(--primary)]">58.3 kg</p>
                                            <p className="text-sm text-[var(--success)] font-bold">+3.8 kg</p>
                                        </div>
                                    </div>
                                    <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] p-4 relative border border-[var(--border-soft)] overflow-hidden">
                                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                            {/* Grid lines */}
                                            <line x1="0" y1="0" x2="400" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />

                                            {/* Chart line - upward trend for muscle mass */}
                                            <defs>
                                                <linearGradient id="muscleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="var(--accent)" />
                                                    <stop offset="100%" stopColor="var(--success)" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M 0 165 L 50 155 L 100 145 L 150 130 L 200 110 L 250 85 L 300 65 L 350 50 L 400 40"
                                                fill="none"
                                                stroke="url(#muscleGradient)"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* Data points */}
                                            <circle cx="0" cy="165" r="4" fill="var(--accent)" className="drop-shadow-lg" />
                                            <circle cx="50" cy="155" r="4" fill="var(--accent)" className="drop-shadow-lg" />
                                            <circle cx="100" cy="145" r="4" fill="var(--accent)" className="drop-shadow-lg" />
                                            <circle cx="150" cy="130" r="4" fill="var(--accent)" className="drop-shadow-lg" />
                                            <circle cx="200" cy="110" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="250" cy="85" r="4" fill="var(--primary)" className="drop-shadow-lg" />
                                            <circle cx="300" cy="65" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="350" cy="50" r="4" fill="var(--success)" className="drop-shadow-lg" />
                                            <circle cx="400" cy="40" r="5" fill="var(--success)" className="drop-shadow-lg" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Workout Frequency */}
                                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="font-black text-[var(--text-primary)] text-lg">Frecuencia de Entrenamiento</h3>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-[var(--primary)]">4.8/week</p>
                                            <p className="text-sm text-[var(--success)] font-bold">+1.3/week</p>
                                        </div>
                                    </div>
                                    <div className="h-64 bg-[var(--background-dark)] rounded-[var(--radius-md)] p-4 relative border border-[var(--border-soft)] overflow-hidden">
                                        <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                                            {/* Grid lines */}
                                            <line x1="0" y1="0" x2="400" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="150" x2="400" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />
                                            <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-[var(--border-soft)]" />

                                            {/* Bar chart for frequency */}
                                            <defs>
                                                <linearGradient id="freqGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor="var(--primary)" />
                                                    <stop offset="100%" stopColor="var(--primary-hover)" />
                                                </linearGradient>
                                            </defs>

                                            {/* Bars */}
                                            <rect x="10" y="110" width="35" height="90" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="55" y="90" width="35" height="110" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="100" y="75" width="35" height="125" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="145" y="100" width="35" height="100" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="190" y="85" width="35" height="115" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="235" y="65" width="35" height="135" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="280" y="55" width="35" height="145" fill="url(#freqGradient)" rx="3" className="opacity-80" />
                                            <rect x="325" y="45" width="35" height="155" fill="url(#freqGradient)" rx="3" />
                                            <rect x="370" y="35" width="35" height="165" fill="url(#freqGradient)" rx="3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Before & After Photos */}
                            <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                <h3 className="font-black mb-6 text-[var(--text-primary)] text-xl">Fotos Antes y Después</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="aspect-square bg-[var(--background-dark)] rounded-[var(--radius-md)] flex items-center justify-center border border-[var(--border-soft)]">
                                        <p className="text-[var(--text-tertiary)] font-semibold">Antes</p>
                                    </div>
                                    <div className="aspect-square bg-[var(--background-dark)] rounded-[var(--radius-md)] flex items-center justify-center border border-[var(--border-soft)]">
                                        <p className="text-[var(--text-tertiary)] font-semibold">Después</p>
                                    </div>
                                </div>
                                <button className="mt-6 w-full py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105">
                                    Subir Fotos
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'programs' && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-black text-[var(--text-primary)]">Programas de Entrenamiento</h3>
                                <button className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105">
                                    Subir Programa
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {['Construcción de Fuerza - Semana 1-4', 'Cardio y Acondicionamiento', 'Guía Nutricional'].map((program, i) => (
                                    <div key={i} className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)] hover:border-[var(--accent)] hover:shadow-[var(--shadow-accent-glow)] transition-all duration-400 hover:scale-105">
                                        <FileText size={44} className="text-[var(--primary)] mb-5" strokeWidth={1.5} />
                                        <h4 className="font-black mb-3 text-[var(--text-primary)] text-lg">{program}</h4>
                                        <p className="text-sm text-[var(--text-tertiary)] mb-5 font-semibold">Compartido el {10 - i} Ene, 2025</p>
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-3 bg-[var(--surface-light)] hover:bg-[var(--primary-alpha-20)] hover:border hover:border-[var(--primary)] rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400 text-[var(--text-primary)] hover:text-[var(--primary)]">
                                                Ver
                                            </button>
                                            <button className="flex-1 py-3 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-alpha-20)] rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400">
                                                Compartir de Nuevo
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'testimonials' && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-black text-[var(--text-primary)]">Testimonios</h3>
                                <button className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105">
                                    Solicitar Testimonio
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                                    <div className="flex items-start gap-5">
                                        <Award size={28} className="text-[var(--accent)] flex-shrink-0" strokeWidth={2} />
                                        <div className="flex-1">
                                            <p className="mb-4 text-[var(--text-primary)] font-medium leading-relaxed">"¡Entrenador increíble! He perdido 15kg en 3 meses y me siento más fuerte que nunca."</p>
                                            <p className="text-sm text-[var(--text-tertiary)] font-semibold">Recibido el 8 Ene, 2025</p>
                                            <div className="mt-5 flex gap-3">
                                                <button className="px-5 py-2.5 bg-gradient-to-r from-[var(--success)] to-[var(--success-light)] text-white rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400 hover:scale-105">
                                                    ✓ Visible en Sitio Web
                                                </button>
                                                <button className="px-5 py-2.5 bg-[var(--surface-light)] hover:bg-[var(--background-light)] rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400 text-[var(--text-primary)]">
                                                    Ocultar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] px-4 md:px-6 py-3 md:py-4 border-b border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h1 className="text-xl md:text-2xl font-black mb-1 text-[var(--text-primary)] bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text">Clientes</h1>
                        <p className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:block">Gestiona los perfiles de tus clientes</p>
                    </div>
                    <button className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-95 text-xs md:text-sm">
                        <Plus size={16} strokeWidth={3} className="md:w-[18px] md:h-[18px]" />
                        <span className="hidden sm:inline">Agregar Cliente</span>
                        <span className="sm:hidden">Agregar</span>
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--icon-neutral)]" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar clientes..."
                        className="w-full max-w-md pl-11 pr-4 py-2.5 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] text-[var(--text-primary)] placeholder:text-[var(--placeholder)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 font-medium text-sm"
                    />
                </div>
            </div>

            {/* Client Grid */}
            <div className="flex-1 overflow-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clients.map(client => (
                        <div
                            key={client.id}
                            onClick={() => setSelectedClient(client.id)}
                            className="group bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-luxury)] border border-[var(--border-soft)] hover:border-[var(--accent)] transition-all duration-400 cursor-pointer hover:scale-105"
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="text-5xl">{client.avatar}</div>
                                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[var(--surface-cards)] shadow-[var(--shadow-soft)] ${getEngagementColor(client.engagement)}`}></div>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-400">{client.name}</h3>
                                        <p className="text-xs text-[var(--text-tertiary)] mt-1.5 font-semibold">Última vez: {client.lastCheckIn}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-[var(--background-light)] to-[var(--surface-cards)] rounded-[var(--radius-md)] p-5 mb-5 border border-[var(--border-soft)]">
                                <p className="text-xs font-black text-[var(--text-tertiary)] uppercase tracking-widest mb-2">Próxima Sesión</p>
                                <p className="font-black text-[var(--primary)] text-lg">{client.nextSession}</p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex-1 py-3 bg-[var(--surface-light)] hover:bg-[var(--primary-alpha-20)] hover:text-[var(--primary)] hover:border hover:border-[var(--primary)] rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400 text-[var(--text-primary)]"
                                >
                                    Enviar Mensaje
                                </button>
                                <button className="flex-1 py-3 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-gradient-to-r hover:from-[var(--accent-dark)] hover:to-[var(--accent)] hover:text-[var(--text-dark)] rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400 hover:shadow-[var(--shadow-accent-glow)]">
                                    Ver Perfil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
