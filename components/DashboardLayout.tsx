'use client';

import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <main className="pt-14 md:pt-0 md:pl-[90px]">
                {children}
            </main>
        </div>
    );
}
