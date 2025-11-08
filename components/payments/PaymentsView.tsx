'use client';

import { useState } from 'react';
import { Plus, Search, Download, Filter, CheckCircle, Clock, XCircle } from 'lucide-react';

interface Transaction {
    id: string;
    client: string;
    amount: number;
    status: 'paid' | 'pending' | 'overdue';
    date: string;
    description: string;
}

export default function PaymentsView() {
    const [showRequestModal, setShowRequestModal] = useState(false);

    const transactions: Transaction[] = [
        {
            id: '1',
            client: 'Ana Martinez',
            amount: 300,
            status: 'paid',
            date: 'Jan 10, 2025',
            description: '4 training sessions package'
        },
        {
            id: '2',
            client: 'Carlos Rodriguez',
            amount: 150,
            status: 'pending',
            date: 'Jan 12, 2025',
            description: '2 training sessions'
        },
        {
            id: '3',
            client: 'Maria Lopez',
            amount: 75,
            status: 'paid',
            date: 'Jan 8, 2025',
            description: '1 training session'
        },
        {
            id: '4',
            client: 'Juan Garcia',
            amount: 200,
            status: 'overdue',
            date: 'Dec 28, 2024',
            description: 'Monthly package'
        },
        {
            id: '5',
            client: 'Sofia Torres',
            amount: 75,
            status: 'paid',
            date: 'Jan 5, 2025',
            description: '1 training session'
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'paid':
                return <CheckCircle size={20} className="text-[var(--success)]" strokeWidth={2.5} />;
            case 'pending':
                return <Clock size={20} className="text-[var(--warning)]" strokeWidth={2.5} />;
            case 'overdue':
                return <XCircle size={20} className="text-[var(--error)]" strokeWidth={2.5} />;
            default:
                return null;
        }
    };

    const getStatusBadge = (status: string) => {
        const styles = {
            paid: 'bg-gradient-to-r from-[var(--success)] to-[var(--success-light)] text-white shadow-[var(--shadow-soft)]',
            pending: 'bg-gradient-to-r from-[var(--warning)] to-amber-400 text-white shadow-[var(--shadow-soft)]',
            overdue: 'bg-gradient-to-r from-[var(--error)] to-red-400 text-white shadow-[var(--shadow-soft)]'
        };
        return styles[status as keyof typeof styles] || '';
    };

    const totalRevenue = transactions
        .filter(t => t.status === 'paid')
        .reduce((sum, t) => sum + t.amount, 0);

    const pendingAmount = transactions
        .filter(t => t.status === 'pending' || t.status === 'overdue')
        .reduce((sum, t) => sum + t.amount, 0);

    return (
        <div className="min-h-[calc(100vh-3.5rem)] md:min-h-screen bg-[var(--background)] overflow-auto">
            <div className="p-3 md:p-8 space-y-4 md:space-y-6">
                {/* Header */}
                <div className="bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] px-4 md:px-6 py-3 md:py-4 rounded-[var(--radius-xl)] border border-[var(--border-soft)] shadow-[var(--shadow-luxury)]">
                    <div className="flex items-center justify-between mb-3">
                        <div>
                            <h1 className="text-xl md:text-2xl font-black mb-1 bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent)] bg-clip-text">Pagos</h1>
                            <p className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:block">Rastrea ingresos y transacciones</p>
                        </div>
                        <button
                            onClick={() => setShowRequestModal(true)}
                            className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-95 text-xs md:text-sm"
                        >
                            <Plus size={16} strokeWidth={3} className="md:w-[18px] md:h-[18px]" />
                            <span className="hidden sm:inline">Solicitar Pago</span>
                            <span className="sm:hidden">Pago</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                        <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-500/10 rounded-[var(--radius-xl)] p-3 md:p-6 border border-emerald-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                            <p className="text-[10px] md:text-xs font-black text-emerald-300 uppercase tracking-widest mb-1 md:mb-3">Ingresos Totales</p>
                            <p className="text-2xl md:text-5xl font-black text-emerald-400 mb-1 md:mb-3">${totalRevenue}</p>
                            <p className="text-[10px] md:text-xs text-emerald-300 font-bold">↑ +23% del mes pasado</p>
                        </div>
                        <div className="bg-gradient-to-br from-amber-600/20 to-amber-500/10 rounded-[var(--radius-xl)] p-3 md:p-6 border border-amber-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                            <p className="text-[10px] md:text-xs font-black text-amber-300 uppercase tracking-widest mb-1 md:mb-3">Pendientes</p>
                            <p className="text-2xl md:text-5xl font-black text-amber-400 mb-1 md:mb-3">${pendingAmount}</p>
                            <p className="text-[10px] md:text-xs text-[var(--text-tertiary)] font-bold">Esperando confirmación</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-[var(--radius-xl)] p-3 md:p-6 border border-blue-500/30 shadow-[var(--shadow-medium)] backdrop-blur-sm hover:shadow-[var(--shadow-luxury)] hover:scale-105 transition-all duration-400">
                            <p className="text-[10px] md:text-xs font-black text-blue-300 uppercase tracking-widest mb-1 md:mb-3">Transacciones</p>
                            <p className="text-2xl md:text-5xl font-black text-blue-400 mb-1 md:mb-3">{transactions.length}</p>
                            <p className="text-[10px] md:text-xs text-[var(--text-tertiary)] font-bold">Este mes</p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="flex gap-2 md:gap-3 mt-3 md:mt-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-[var(--icon-neutral)]" size={16} />
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="w-full pl-9 md:pl-11 pr-3 md:pr-4 py-2 md:py-2.5 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] text-[var(--text-primary)] placeholder:text-[var(--placeholder)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 font-medium text-xs md:text-sm"
                            />
                        </div>
                        <button className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 border-2 border-[var(--border-medium)] hover:border-[var(--accent)] hover:bg-[var(--accent-alpha-10)] hover:text-[var(--accent)] rounded-[var(--radius-md)] font-black transition-all duration-400 text-[var(--text-primary)] hover:scale-105 text-xs md:text-sm">
                            <Filter size={16} strokeWidth={2.5} />
                            <span className="hidden sm:inline">Filtrar</span>
                        </button>
                        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 border-2 border-[var(--border-medium)] hover:border-[var(--accent)] hover:bg-[var(--accent-alpha-10)] hover:text-[var(--accent)] rounded-[var(--radius-md)] font-black transition-all duration-400 text-[var(--text-primary)] hover:scale-105 text-sm">
                            <Download size={18} strokeWidth={2.5} />
                            Exportar
                        </button>
                    </div>
                </div>

                {/* Transactions List */}
                <div>
                    {/* Desktop Table View */}
                    <div className="hidden md:block bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] shadow-[var(--shadow-luxury)] overflow-hidden border border-[var(--border-soft)]">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-[var(--background-light)] to-[var(--surface-cards)] border-b-2 border-[var(--border-medium)]">
                                <tr>
                                    <th className="text-left p-6 font-black text-[var(--text-primary)] text-sm uppercase tracking-widest">Cliente</th>
                                    <th className="text-left p-6 font-black text-[var(--text-primary)] text-sm uppercase tracking-widest">Descripción</th>
                                    <th className="text-left p-6 font-black text-[var(--text-primary)] text-sm uppercase tracking-widest">Monto</th>
                                    <th className="text-left p-6 font-black text-[var(--text-primary)] text-sm uppercase tracking-widest">Fecha</th>
                                    <th className="text-left p-6 font-black text-[var(--text-primary)] text-sm uppercase tracking-widest">Estado</th>
                                    <th className="text-left p-6 font-black text-[var(--text-primary)] text-sm uppercase tracking-widest">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (
                                    <tr
                                        key={transaction.id}
                                        className={`${index !== transactions.length - 1 ? 'border-b border-[var(--border-soft)]' : ''} hover:bg-[var(--surface-light)] transition-all duration-400 group`}
                                    >
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-alpha-20)] to-[var(--accent-alpha-10)] rounded-full flex items-center justify-center text-2xl">
                                                    👤
                                                </div>
                                                <span className="font-black group-hover:text-[var(--accent)] transition-colors duration-400 text-[var(--text-primary)]">{transaction.client}</span>
                                            </div>
                                        </td>
                                        <td className="p-6 text-[var(--text-secondary)] font-medium">
                                            {transaction.description}
                                        </td>
                                        <td className="p-6 font-black text-xl text-[var(--text-primary)]">
                                            ${transaction.amount}
                                        </td>
                                        <td className="p-6 text-[var(--text-tertiary)] text-sm font-semibold">
                                            {transaction.date}
                                        </td>
                                        <td className="p-6">
                                            <span className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] text-xs font-black uppercase tracking-wide ${getStatusBadge(transaction.status)}`}>
                                                {getStatusIcon(transaction.status)}
                                                {transaction.status === 'paid' ? 'pagado' : transaction.status === 'pending' ? 'pendiente' : 'vencido'}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <button className="px-5 py-2.5 text-[var(--accent)] hover:bg-[var(--accent-alpha-20)] hover:border hover:border-[var(--accent)] rounded-[var(--radius-md)] font-bold text-sm transition-all duration-400 hover:scale-105">
                                                Ver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-3">
                        {transactions.map((transaction) => (
                            <div
                                key={transaction.id}
                                className="bg-gradient-to-br from-[var(--surface-cards)] to-[var(--surface-light)] rounded-[var(--radius-xl)] p-4 border border-[var(--border-soft)] shadow-[var(--shadow-medium)]"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-alpha-20)] to-[var(--accent-alpha-10)] rounded-full flex items-center justify-center text-xl">
                                            👤
                                        </div>
                                        <div>
                                            <p className="font-black text-[var(--text-primary)] text-sm">{transaction.client}</p>
                                            <p className="text-xs text-[var(--text-tertiary)] font-semibold">{transaction.date}</p>
                                        </div>
                                    </div>
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-md)] text-[10px] font-black uppercase tracking-wide ${getStatusBadge(transaction.status)}`}>
                                        {getStatusIcon(transaction.status)}
                                        {transaction.status === 'paid' ? 'pagado' : transaction.status === 'pending' ? 'pendiente' : 'vencido'}
                                    </span>
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-medium mb-3">{transaction.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-2xl font-black text-[var(--text-primary)]">${transaction.amount}</p>
                                    <button className="px-4 py-2 text-[var(--accent)] hover:bg-[var(--accent-alpha-20)] border border-[var(--accent)] rounded-[var(--radius-md)] font-bold text-xs transition-all duration-400">
                                        Ver
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Request Payment Modal */}
            {showRequestModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in" onClick={() => setShowRequestModal(false)}>
                    <div className="bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)] rounded-[var(--radius-xl)] p-8 max-w-md w-full mx-4 shadow-[var(--shadow-luxury)] border border-[var(--border-medium)] animate-slide-up" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-3xl font-black mb-8 text-[var(--text-primary)]">Solicitar Pago</h2>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Cliente</label>
                                <select className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] font-medium">
                                    <option>Seleccionar cliente...</option>
                                    <option>Ana Martinez</option>
                                    <option>Carlos Rodriguez</option>
                                    <option>Maria Lopez</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Monto ($)</label>
                                <input
                                    type="number"
                                    placeholder="75"
                                    className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] placeholder:text-[var(--placeholder)] font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Descripción</label>
                                <textarea
                                    rows={3}
                                    placeholder="¿Para qué es este pago?"
                                    className="w-full px-5 py-4 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:border-[var(--accent)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400 text-[var(--text-primary)] placeholder:text-[var(--placeholder)] font-medium resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-black mb-3 text-[var(--text-primary)] uppercase tracking-wide">Enviar vía</label>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[var(--radius-md)] font-black transition-all duration-400 hover:scale-105 shadow-[var(--shadow-soft)]">
                                        WhatsApp
                                    </button>
                                    <button className="flex-1 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-[var(--radius-md)] font-black transition-all duration-400 hover:scale-105 shadow-[var(--shadow-glow)]">
                                        Email
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-4 pt-6">
                                <button
                                    onClick={() => setShowRequestModal(false)}
                                    className="flex-1 py-4 border-2 border-[var(--border-medium)] text-[var(--text-primary)] hover:bg-[var(--surface-light)] hover:border-[var(--border-strong)] rounded-full font-black transition-all duration-400 hover:scale-105"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => setShowRequestModal(false)}
                                    className="flex-1 py-4 bg-gradient-to-r from-[var(--accent-dark)] to-[var(--accent)] hover:from-[var(--accent)] hover:to-[var(--accent-hover)] text-[var(--text-dark)] rounded-full font-black shadow-[var(--shadow-accent-glow)] hover:shadow-[var(--shadow-accent-glow-strong)] transition-all duration-400 hover:scale-105"
                                >
                                    Enviar Solicitud
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
