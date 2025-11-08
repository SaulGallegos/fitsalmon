'use client';

import { useState, useEffect } from 'react';
import { Search, Phone, Video, MoreVertical, Send, Mic, Paperclip, Smile, Info, MessageCircle, Instagram, Mail, ArrowLeft, Menu } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'client' | 'trainer';
    timestamp: string;
}

interface Conversation {
    id: string;
    clientName: string;
    lastMessage: string;
    timestamp: string;
    channel: 'whatsapp' | 'instagram' | 'email';
    unread: number;
    avatar: string;
}

type MobileView = 'conversations' | 'chat' | 'clientInfo';

export default function InboxView() {
    const [selectedConversation, setSelectedConversation] = useState<string>('1');
    const [messageInput, setMessageInput] = useState('');
    const [showClientSnapshot, setShowClientSnapshot] = useState(false);
    const [mobileView, setMobileView] = useState<MobileView>('conversations');
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size after mounting to avoid hydration mismatch
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mock data
    const conversations: Conversation[] = [
        {
            id: '1',
            clientName: 'Ana Martinez',
            lastMessage: '¡Gracias por la sesión de hoy!',
            timestamp: 'Hace 2m',
            channel: 'whatsapp',
            unread: 0,
            avatar: '👤'
        },
        {
            id: '2',
            clientName: 'Carlos Rodriguez',
            lastMessage: '¿Podemos reagendar para mañana?',
            timestamp: 'Hace 1h',
            channel: 'instagram',
            unread: 2,
            avatar: '👤'
        },
        {
            id: '3',
            clientName: 'Maria Lopez',
            lastMessage: 'Necesito el plan de comidas por favor',
            timestamp: 'Hace 3h',
            channel: 'email',
            unread: 1,
            avatar: '👤'
        },
        {
            id: '4',
            clientName: 'Juan Garcia',
            lastMessage: '¿Podemos reagendar para mañana?',
            timestamp: 'Hace 1h',
            channel: 'instagram',
            unread: 2,
            avatar: '👤'
        },
        {
            id: '5',
            clientName: 'Laura Martinez',
            lastMessage: 'Necesito el plan de comidas por favor',
            timestamp: 'Hace 3h',
            channel: 'email',
            unread: 1,
            avatar: '👤'
        },
        {
            id: '6',
            clientName: 'Sofia Torres',
            lastMessage: '¿Podemos reagendar para mañana?',
            timestamp: 'Hace 1h',
            channel: 'instagram',
            unread: 2,
            avatar: '👤'
        },
        {
            id: '7',
            clientName: 'Luis Hernandez',
            lastMessage: 'Necesito el plan de comidas por favor',
            timestamp: 'Hace 3h',
            channel: 'email',
            unread: 1,
            avatar: '👤'
        },
        {
            id: '8',
            clientName: 'Sofia Torres',
            lastMessage: '¿Podemos reagendar para mañana?',
            timestamp: 'Hace 1h',
            channel: 'instagram',
            unread: 2,
            avatar: '👤'
        },
        {
            id: '9',
            clientName: 'Luis Hernandez',
            lastMessage: 'Necesito el plan de comidas por favor',
            timestamp: 'Hace 3h',
            channel: 'email',
            unread: 1,
            avatar: '👤'
        },
        {
            id: '10',
            clientName: 'Sofia Torres',
            lastMessage: '¿Podemos reagendar para mañana?',
            timestamp: 'Hace 1h',
            channel: 'instagram',
            unread: 2,
            avatar: '👤'
        }
    ];

    const messages: Message[] = [
        {
            id: '1',
            text: '¡Hola! ¿Seguimos para mañana a las 8am?',
            sender: 'client',
            timestamp: '10:30 AM'
        },
        {
            id: '2',
            text: '¡Sí! Nos vemos mañana. No olvides tu botella de agua.',
            sender: 'trainer',
            timestamp: '10:32 AM'
        },
        {
            id: '3',
            text: '¡Gracias por la sesión de hoy!',
            sender: 'client',
            timestamp: '2:15 PM'
        }
    ];

    const getChannelBadge = (channel: string) => {
        switch (channel) {
            case 'whatsapp':
                return (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#25D366]/10 rounded-full border border-[#25D366]/30">
                        <MessageCircle size={12} className="text-[#25D366]" />
                        <span className="text-[10px] font-bold text-[#25D366]">WhatsApp</span>
                    </div>
                );
            case 'instagram':
                return (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#E4405F]/10 rounded-full border border-[#E4405F]/30">
                        <Instagram size={12} className="text-[#E4405F]" />
                        <span className="text-[10px] font-bold text-[#E4405F]">Instagram</span>
                    </div>
                );
            case 'email':
                return (
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#EA4335]/10 rounded-full border border-[#EA4335]/30">
                        <Mail size={12} className="text-[#EA4335]" />
                        <span className="text-[10px] font-bold text-[#EA4335]">Email</span>
                    </div>
                );
            default:
                return null;
        }
    };

    const currentClient = conversations.find(c => c.id === selectedConversation);

    const handleSelectConversation = (id: string) => {
        setSelectedConversation(id);
        setMobileView('chat');
    };

    const handleBackToConversations = () => {
        setMobileView('conversations');
        setShowClientSnapshot(false);
    };

    const handleToggleClientInfo = () => {
        if (isMobile) {
            setMobileView(mobileView === 'clientInfo' ? 'chat' : 'clientInfo');
        } else {
            setShowClientSnapshot(!showClientSnapshot);
        }
    };

    return (
        <div className="flex h-[calc(100vh-3.5rem)] md:h-screen bg-[var(--background)] overflow-hidden">
            {/* Conversations List - Left Sidebar */}
            <div className={`
                ${mobileView === 'conversations' ? 'flex' : 'hidden'}
                md:flex
                w-full md:w-72 lg:w-80
                bg-gradient-to-b from-[var(--surface-cards)] to-[var(--background-light)] 
                border-r border-[var(--border-soft)] 
                flex-col shadow-[var(--shadow-luxury)]
            `}>
                <div className="p-3 md:p-4 border-b border-[var(--border-soft)] bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)]">
                    <div className="relative">
                        <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-[var(--icon-neutral)]" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar conversaciones..."
                            className="w-full pl-9 md:pl-10 pr-3 md:pr-3.5 py-2 md:py-2.5 rounded-[var(--radius-md)] border border-[var(--border-medium)] bg-[var(--background-light)] text-[var(--text-primary)] text-sm placeholder:text-[var(--placeholder)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] transition-all duration-400"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {conversations.map(conv => (
                        <button
                            key={conv.id}
                            onClick={() => handleSelectConversation(conv.id)}
                            className={`group w-full p-3 md:p-3.5 flex items-start gap-2.5 md:gap-3 transition-all duration-400 border-b border-[var(--border-soft)] last:border-b-0 active:scale-[0.98] ${selectedConversation === conv.id
                                ? 'bg-gradient-to-r from-[var(--primary-alpha-20)] to-transparent border-l-4 border-l-[var(--primary)] shadow-[var(--shadow-glow)]'
                                : 'hover:bg-[var(--surface-light)] border-l-4 border-l-transparent hover:border-l-[var(--accent)]'
                                }`}
                        >
                            <div className="relative shrink-0">
                                <div className="text-2xl md:text-3xl">{conv.avatar}</div>
                                <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 md:w-3 h-2.5 md:h-3 border-2 border-[var(--surface-cards)] rounded-full shadow-[var(--shadow-soft)] ${conv.unread > 0 ? 'bg-[var(--success)] shadow-[var(--shadow-accent-glow)]' : 'bg-[var(--text-tertiary)]'}`}></div>
                            </div>
                            <div className="flex-1 text-left min-w-0">
                                <div className="flex items-center justify-between mb-1 md:mb-1.5 gap-2">
                                    <div className="flex items-center gap-1.5 md:gap-2 flex-wrap">
                                        <span className="font-bold text-[var(--text-primary)] text-sm">{conv.clientName}</span>
                                        {getChannelBadge(conv.channel)}
                                    </div>
                                    <span className="text-[10px] text-[var(--text-tertiary)] font-medium shrink-0">{conv.timestamp}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className={`text-xs truncate flex-1 ${conv.unread > 0 ? 'text-[var(--text-primary)] font-semibold' : 'text-[var(--text-tertiary)]'}`}>
                                        {conv.lastMessage}
                                    </p>
                                    {conv.unread > 0 && (
                                        <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] text-white text-[10px] font-black rounded-full min-w-[18px] h-5 flex items-center justify-center px-1.5 shadow-[var(--shadow-glow)]">
                                            {conv.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Area - Main */}
            <div className={`
                ${mobileView === 'chat' ? 'flex' : 'hidden'}
                md:flex
                flex-1 flex-col bg-gradient-to-b from-[var(--background-light)] to-[var(--background)]
                w-full
            `}>
                {/* Chat Header */}
                <div className="p-3 md:p-4 border-b border-[var(--border-soft)] flex items-center justify-between bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] shadow-[var(--shadow-strong)] backdrop-blur-xl">
                    <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                        {/* Back button for mobile */}
                        <button
                            onClick={handleBackToConversations}
                            className="md:hidden p-2 hover:bg-[var(--surface-cards)] rounded-[var(--radius-md)] transition-all duration-400 active:scale-95"
                        >
                            <ArrowLeft size={20} className="text-[var(--icon-neutral)]" />
                        </button>
                        <div className="relative shrink-0">
                            <div className="text-3xl md:text-4xl">{currentClient?.avatar}</div>
                            <div className="absolute bottom-0 right-0 w-3 md:w-3.5 h-3 md:h-3.5 bg-[var(--success)] border-2 border-[var(--surface-cards)] rounded-full shadow-[var(--shadow-accent-glow)]"></div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1 flex-wrap">
                                <h3 className="font-black text-base md:text-lg text-[var(--text-primary)] truncate">{currentClient?.clientName}</h3>
                                <div className="hidden sm:block">
                                    {currentClient && getChannelBadge(currentClient.channel)}
                                </div>
                            </div>
                            <p className="text-[10px] md:text-xs text-[var(--success)] flex items-center gap-1 md:gap-1.5 font-semibold">
                                <span className="w-1.5 h-1.5 bg-[var(--success)] rounded-full animate-pulse shadow-[var(--shadow-accent-glow)]"></span>
                                Activo ahora
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-0.5 md:gap-1.5">
                        <button className="p-2 md:p-2.5 hover:bg-[var(--surface-cards)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]">
                            <Phone size={16} className="text-[var(--icon-neutral)] md:w-[18px] md:h-[18px]" />
                        </button>
                        <button className="p-2 md:p-2.5 hover:bg-[var(--surface-cards)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]">
                            <Video size={16} className="text-[var(--icon-neutral)] md:w-[18px] md:h-[18px]" />
                        </button>
                        <button className="hidden sm:block p-2 md:p-2.5 hover:bg-[var(--surface-cards)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]">
                            <MoreVertical size={16} className="text-[var(--icon-neutral)] md:w-[18px] md:h-[18px]" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-[var(--background-dark)]">
                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'trainer' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                        >
                            <div className={`
                                max-w-[85%] md:max-w-md shadow-[var(--shadow-medium)]
                                ${msg.sender === 'trainer'
                                    ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-[var(--radius-lg)] rounded-br-md shadow-[var(--shadow-glow)]'
                                    : 'bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)] text-[var(--text-primary)] rounded-[var(--radius-lg)] rounded-bl-md border border-[var(--border-soft)]'
                                }
                                px-3 md:px-4 py-2.5 md:py-3
                            `}>
                                <p className="leading-relaxed font-medium text-sm">{msg.text}</p>
                                <p className={`text-[10px] mt-1 md:mt-1.5 font-semibold ${msg.sender === 'trainer' ? 'text-white/70' : 'text-[var(--text-tertiary)]'}`}>
                                    {msg.timestamp}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-2.5 md:p-4 border-t border-[var(--border-soft)] bg-gradient-to-r from-[var(--surface-cards)] to-[var(--surface-light)] shadow-[var(--shadow-luxury)]">
                    <div className="flex items-center gap-1 md:gap-2">
                        <button className="p-2 md:p-2.5 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]">
                            <Paperclip size={18} className="text-[var(--icon-neutral)]" />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                placeholder="Escribe un mensaje..."
                                className="w-full px-4 md:px-5 py-2.5 md:py-3 pr-10 md:pr-11 rounded-full border border-[var(--border-medium)] bg-[var(--background-light)] text-[var(--text-primary)] text-sm placeholder:text-[var(--placeholder)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-alpha-20)] focus:shadow-[var(--shadow-accent-glow)] focus:bg-[var(--surface-cards)] transition-all duration-400 font-medium"
                            />
                            <button className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-[var(--surface-light)] rounded-[var(--radius-sm)] transition-all duration-400 hover:scale-110">
                                <Smile size={16} className="text-[var(--icon-neutral)] md:w-[18px] md:h-[18px]" />
                            </button>
                        </div>
                        <button className="hidden sm:block p-2 md:p-2.5 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 hover:shadow-[var(--shadow-soft)]">
                            <Mic size={18} className="text-[var(--icon-neutral)]" />
                        </button>
                        <button
                            onClick={handleToggleClientInfo}
                            className={`p-2 md:p-2.5 rounded-[var(--radius-md)] transition-all duration-400 hover:scale-110 active:scale-95 ${(showClientSnapshot || mobileView === 'clientInfo')
                                ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] shadow-[var(--shadow-accent-glow)]'
                                : 'hover:bg-[var(--surface-light)] hover:shadow-[var(--shadow-soft)]'
                                }`}
                            title="Toggle client info"
                        >
                            <Info size={16} className={`${(showClientSnapshot || mobileView === 'clientInfo') ? 'text-white' : 'text-[var(--icon-neutral)]'} md:w-[18px] md:h-[18px]`} />
                        </button>
                        <button className="p-2.5 md:p-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] rounded-full shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-110 active:scale-95">
                            <Send size={16} className="text-white md:w-[18px] md:h-[18px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Client Snapshot - Right Sidebar */}
            <div className={`
                ${mobileView === 'clientInfo' ? 'flex' : 'hidden'}
                ${showClientSnapshot ? 'md:flex' : 'md:hidden'}
                w-full md:w-80 lg:w-96
                bg-gradient-to-b from-[var(--surface-cards)] to-[var(--background-light)] 
                border-l border-[var(--border-soft)] 
                p-4 md:p-5
                shadow-[var(--shadow-luxury)] 
                overflow-y-auto 
                animate-fade-in
                flex-col
            `}>
                {/* Mobile back button */}
                <button
                    onClick={() => setMobileView('chat')}
                    className="md:hidden flex items-center gap-2 mb-4 p-2 hover:bg-[var(--surface-light)] rounded-[var(--radius-md)] transition-all duration-400 active:scale-95 -ml-2"
                >
                    <ArrowLeft size={20} className="text-[var(--icon-neutral)]" />
                    <span className="font-bold text-sm text-[var(--text-secondary)]">Volver al chat</span>
                </button>

                <div className="text-center mb-4 pb-4 border-b border-[var(--border-soft)]">
                    <div className="relative inline-block mb-3">
                        <div className="text-5xl md:text-6xl">{currentClient?.avatar}</div>
                        <div className="absolute bottom-0 right-0 w-4 md:w-5 h-4 md:h-5 bg-[var(--success)] border-3 border-[var(--surface-cards)] rounded-full shadow-[var(--shadow-accent-glow)]"></div>
                    </div>
                    <h3 className="font-black text-xl md:text-2xl mb-1.5 text-[var(--text-primary)]">{currentClient?.clientName}</h3>
                    <p className="text-xs md:text-sm text-[var(--text-tertiary)] font-semibold">Miembro desde Ene 2024</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                    <div className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary-light)] rounded-[var(--radius-lg)] p-4 md:p-5 border border-[var(--primary-light)] shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-100">
                        <p className="text-[10px] md:text-xs font-black text-white/80 uppercase tracking-widest mb-2">Próxima Sesión</p>
                        <p className="font-black text-white text-base md:text-lg">Mañana a las 8:00 AM</p>
                    </div>

                    <div className="bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)] rounded-[var(--radius-lg)] p-4 md:p-5 shadow-[var(--shadow-medium)] border border-[var(--border-soft)] hover:border-[var(--accent)] hover:shadow-[var(--shadow-accent-glow)] transition-all duration-400">
                        <p className="text-[10px] md:text-xs font-black text-[var(--text-tertiary)] uppercase tracking-widest mb-2">Último Check-in</p>
                        <p className="font-bold text-[var(--text-primary)] text-sm md:text-base">hace 3 días</p>
                    </div>

                    <div className="bg-gradient-to-br from-[var(--surface-light)] to-[var(--surface-cards)] rounded-[var(--radius-lg)] p-4 md:p-5 shadow-[var(--shadow-medium)] border border-[var(--border-soft)]">
                        <p className="text-[10px] md:text-xs font-black text-[var(--text-tertiary)] uppercase tracking-widest mb-3">Progreso</p>
                        <div className="bg-[var(--background-dark)] rounded-[var(--radius-md)] p-3 md:p-4 border border-[var(--border-soft)]">
                            <div className="h-20 md:h-24 flex items-end justify-between gap-1.5 md:gap-2 mb-2">
                                {[65, 78, 82, 88, 92, 85, 95].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 min-w-[8px] bg-gradient-to-t from-[var(--primary)] to-[var(--accent)] rounded-t-sm hover:from-[var(--primary-hover)] hover:to-[var(--accent-light)] transition-all duration-400 hover:scale-105 shadow-[var(--shadow-glow)] cursor-pointer"
                                        style={{ height: `${height}%` }}
                                    ></div>
                                ))}
                            </div>
                            <div className="flex justify-between px-0.5">
                                {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                                    <span key={i} className="flex-1 text-center text-[8px] md:text-[9px] text-[var(--text-tertiary)] font-bold">
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="w-full py-3 md:py-3.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)] hover:from-[var(--primary-hover)] hover:to-[var(--primary-light)] text-white rounded-full font-black shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)] transition-all duration-400 hover:scale-105 active:scale-100 text-sm md:text-base">
                        Ver Perfil Completo
                    </button>

                    <button className="w-full py-3 md:py-3.5 border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-gradient-to-r hover:from-[var(--accent-dark)] hover:to-[var(--accent)] hover:text-[var(--text-dark)] rounded-full font-black transition-all duration-400 hover:scale-105 active:scale-100 hover:shadow-[var(--shadow-accent-glow)] text-sm md:text-base">
                        Gestionar con Bot
                    </button>
                </div>
            </div>
        </div>
    );
}
