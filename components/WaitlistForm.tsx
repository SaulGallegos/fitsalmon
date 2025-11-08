'use client';

import { useState, FormEvent } from 'react';

interface WaitlistFormProps {
    variant?: 'hero' | 'cta' | 'nav' | 'pricing';
}

export default function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPresellPopup, setShowPresellPopup] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, presell: false }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setRegisteredEmail(email);
                setEmail('');
                // Show presell popup after successful registration
                setShowPresellPopup(true);
            } else {
                setSuccess(false);
                setMessage(data.error || 'Algo salió mal. Por favor intenta de nuevo.');
            }
        } catch (error) {
            setSuccess(false);
            setMessage('Error de conexión. Por favor intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const handlePresellYes = async () => {
        try {
            // Send presell registration
            await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: registeredEmail, presell: true }),
            });
            setMessage('¡Perfecto! Te contactaremos pronto con los detalles de la pre-venta.');
        } catch (error) {
            setMessage('¡Gracias! Te contactaremos pronto.');
        }
        setShowPresellPopup(false);
    };

    const handlePresellNo = () => {
        setMessage('¡Gracias por unirte a la lista de espera!');
        setShowPresellPopup(false);
    };

    // Presell Popup Component
    const PresellPopup = () => (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-gradient-to-br from-[#1a3b2f] to-[#0f231c] border-2 border-[#ed6531]/40 rounded-3xl p-8 max-w-md w-full shadow-[0_24px_60px_rgba(0,0,0,0.8)] animate-in zoom-in-95 duration-300">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ed6531] to-[#ff7e4d] flex items-center justify-center shadow-[0_12px_40px_rgba(237,101,49,0.5)]">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">¿Interesado en la Pre-Venta?</h3>
                    <p className="text-[#e9e5dc] leading-relaxed mb-4">
                        Asegura <span className="text-[#d4ff00] font-bold">50% de descuento todo tu primer año</span> y acceso prioritario al lanzamiento.
                    </p>
                    <p className="text-[#a89f8f] text-sm">
                        💳 Solo pagas tu primer mes por adelantado (350 o 700 MXN) y disfrutas 12 meses al 50%
                    </p>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={handlePresellYes}
                        className="w-full px-6 py-4 bg-gradient-to-r from-[#ed6531] to-[#ff7e4d] text-white font-bold rounded-xl shadow-[0_8px_24px_rgba(237,101,49,0.4)] hover:shadow-[0_12px_32px_rgba(237,101,49,0.5)] hover:scale-[1.02] transition-all duration-300"
                    >
                        Sí, quiero la Pre-Venta
                    </button>
                    <button
                        onClick={handlePresellNo}
                        className="w-full px-6 py-4 bg-[#2a5a4a]/50 border-2 border-[#e9e5dc]/20 text-[#e9e5dc] font-semibold rounded-xl hover:bg-[#2a5a4a]/70 hover:border-[#e9e5dc]/30 transition-all duration-300"
                    >
                        Solo Lista de Espera
                    </button>
                </div>
            </div>
        </div>
    );

    // Nav variant - compact horizontal form
    if (variant === 'nav') {
        return (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    disabled={loading || success}
                    className="px-4 py-2 bg-[#2a5a4a]/50 border border-[#e9e5dc]/30 rounded-xl text-white placeholder-[#a89f8f] focus:outline-none focus:border-[#ed6531] transition-all duration-300 text-sm w-48"
                />
                <button
                    type="submit"
                    disabled={loading || success}
                    className="px-6 py-3 bg-gradient-to-r from-[#ed6531] to-[#ff7e4d] text-white text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(237,101,49,0.3)] hover:shadow-[0_0_30px_rgba(237,101,49,0.5)] hover:scale-105 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                    {loading ? 'Enviando...' : success ? '✓ Listo' : 'Únete'}
                </button>
            </form>
        );
    }

    // CTA variant - white text on colored background
    if (variant === 'cta') {
        return (
            <>
                <div className="w-full max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                            disabled={loading || success}
                            className="flex-1 px-6 py-4 bg-white/95 text-[#0f231c] placeholder-[#0f231c]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 text-lg font-medium disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={loading || success}
                            className="px-10 py-4 bg-white text-[#ed6531] text-lg font-extrabold rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                        >
                            {loading ? 'Enviando...' : success ? '✓ ¡Registrado!' : 'Asegurar Mi Lugar'}
                        </button>
                    </form>
                    {message && (
                        <div
                            className={`mt-4 p-4 rounded-xl backdrop-blur-md text-center font-semibold ${success
                                ? 'bg-white/20 text-white border border-white/30'
                                : 'bg-white/20 text-white border border-white/30'
                                }`}
                        >
                            {message}
                        </div>
                    )}
                </div>
                {showPresellPopup && <PresellPopup />}
            </>
        );
    }

    // Pricing variant - styled for pricing section
    if (variant === 'pricing') {
        return (
            <>
                <div className="w-full max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                            disabled={loading || success}
                            className="flex-1 px-6 py-4 bg-[#2a5a4a]/50 border-2 border-[#e9e5dc]/30 rounded-xl text-white text-base placeholder-[#a89f8f] focus:outline-none focus:border-[#ed6531] focus:bg-[#2a5a4a]/70 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={loading || success}
                            className="px-8 py-4 bg-gradient-to-r from-[#ed6531] to-[#ff7e4d] text-white text-base font-extrabold rounded-xl shadow-[0_8px_24px_rgba(237,101,49,0.4)] hover:shadow-[0_12px_32px_rgba(237,101,49,0.5)] hover:scale-105 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                        >
                            {loading ? 'Enviando...' : success ? '✓ ¡Registrado!' : 'Únete Ahora'}
                        </button>
                    </form>
                    {message && (
                        <div
                            className={`mt-4 p-4 rounded-xl backdrop-blur-sm text-center text-sm font-semibold ${success
                                ? 'bg-[#4caf50]/20 text-[#d4ff00] border border-[#4caf50]/30'
                                : 'bg-[#ed6531]/20 text-[#ff7e4d] border border-[#ed6531]/30'
                                }`}
                        >
                            {message}
                        </div>
                    )}
                </div>
                {showPresellPopup && <PresellPopup />}
            </>
        );
    }

    // Hero variant - default, colorful form
    return (
        <>
            <div className="w-full max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        disabled={loading || success}
                        className="flex-1 px-6 py-5 bg-[#2a5a4a]/50 border-2 border-[#e9e5dc]/30 rounded-2xl text-white text-lg placeholder-[#a89f8f] focus:outline-none focus:border-[#ed6531] focus:bg-[#2a5a4a]/70 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        disabled={loading || success}
                        className="px-10 py-5 bg-gradient-to-r from-[#ed6531] to-[#ff7e4d] text-white text-lg font-bold rounded-2xl shadow-[0_0_30px_rgba(237,101,49,0.3)] hover:shadow-[0_16px_40px_rgba(237,101,49,0.35)] hover:scale-105 transition-all duration-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
                    >
                        {loading ? 'Enviando...' : success ? '✓ ¡Registrado!' : 'Únete a la Lista'}
                    </button>
                </form>
                {message && (
                    <div
                        className={`mt-6 p-5 rounded-2xl backdrop-blur-sm text-center text-lg font-semibold ${success
                            ? 'bg-[#4caf50]/20 text-[#d4ff00] border-2 border-[#4caf50]/30'
                            : 'bg-[#ed6531]/20 text-[#ff7e4d] border-2 border-[#ed6531]/30'
                            }`}
                    >
                        {message}
                    </div>
                )}
            </div>
            {showPresellPopup && <PresellPopup />}
        </>
    );
}
