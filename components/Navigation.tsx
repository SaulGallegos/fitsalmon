'use client';

import { useState } from 'react';
import {
    MessageSquare,
    Calendar,
    Users,
    Bot,
    User,
    BarChart3,
    CreditCard,
    Globe,
    Menu,
    X
} from 'lucide-react';

type Tab = 'inbox' | 'calendar' | 'clients' | 'bot' | 'profile' | 'analytics' | 'payments' | 'website';

interface NavigationProps {
    currentTab: Tab;
    onTabChange: (tab: Tab) => void;
}

export default function Navigation({ currentTab, onTabChange }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mainTabs = [
        { id: 'inbox' as Tab, label: 'Mensajes', icon: MessageSquare },
        { id: 'calendar' as Tab, label: 'Calendario', icon: Calendar },
        { id: 'clients' as Tab, label: 'Clientes', icon: Users },
        { id: 'bot' as Tab, label: 'Bot', icon: Bot },
        { id: 'profile' as Tab, label: 'Perfil', icon: User },
    ];

    const secondaryTabs = [
        { id: 'analytics' as Tab, label: 'Analíticas', icon: BarChart3 },
        { id: 'payments' as Tab, label: 'Pagos', icon: CreditCard },
        { id: 'website' as Tab, label: 'Sitio Web', icon: Globe },
    ];

    const NavButton = ({ tab, onClick }: { tab: typeof mainTabs[0]; onClick?: () => void }) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;

        return (
            <button
                onClick={() => {
                    onTabChange(tab.id);
                    onClick?.();
                }}
                className={`
                    group relative flex flex-col items-center justify-center
                    gap-1 py-3 px-2 rounded-lg
                    transition-all duration-200 w-full
                    ${isActive
                        ? 'bg-[var(--surface-cards)] text-[var(--primary)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-cards)]'
                    }
                `}
            >
                <Icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    className="transition-all duration-200"
                />
                <span className={`text-[10px] font-medium text-center leading-tight ${isActive ? 'font-semibold' : ''}`}>
                    {tab.label}
                </span>
            </button>
        );
    };

    const SidebarContent = ({ onItemClick }: { onItemClick?: () => void }) => (
        <>
            {/* Logo & Branding */}
            <div className="px-2 py-6 border-b border-[var(--border-soft)]">
                <div className="flex items-center justify-center">
                    <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-lg">FS</span>
                    </div>
                </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto px-2 py-4">
                <div className="space-y-1">
                    {mainTabs.map(tab => (
                        <NavButton key={tab.id} tab={tab} onClick={onItemClick} />
                    ))}
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-soft)]">
                    <div className="space-y-1">
                        {secondaryTabs.map(tab => (
                            <NavButton key={tab.id} tab={tab} onClick={onItemClick} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile Header with Hamburger */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[var(--background-dark)] border-b border-[var(--border-soft)] z-30 flex items-center px-4 gap-3">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-lg bg-[var(--surface-cards)] text-[var(--text-primary)] hover:bg-[var(--surface-light)] transition-all"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
                <div className="flex items-center gap-2">
                    <span className="text-[var(--text-primary)] font-black text-lg">FitSalmon</span>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <nav className={`
                md:hidden fixed left-0 top-0 bottom-0 w-[90px] 
                bg-[var(--background-dark)]
                flex flex-col border-r border-[var(--border-soft)] z-50 
                shadow-xl transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <SidebarContent onItemClick={() => setIsMobileMenuOpen(false)} />
            </nav>

            {/* Desktop Sidebar */}
            <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-[90px] bg-[var(--background-dark)] flex-col border-r border-[var(--border-soft)] z-40 shadow-lg">
                <SidebarContent />
            </nav>
        </>
    );
}
