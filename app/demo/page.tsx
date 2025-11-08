'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DashboardLayout from '@/components/DashboardLayout';
import InboxView from '@/components/inbox/InboxView';
import CalendarView from '@/components/calendar/CalendarView';
import ClientsView from '@/components/clients/ClientsView';
import BotView from '@/components/bot/BotView';
import ProfileView from '@/components/profile/ProfileView';
import AnalyticsView from '@/components/analytics/AnalyticsView';
import PaymentsView from '@/components/payments/PaymentsView';
import WebsiteBuilderView from '@/components/website/WebsiteBuilderView';

type Tab = 'inbox' | 'calendar' | 'clients' | 'bot' | 'profile' | 'analytics' | 'payments' | 'website';

export default function Home() {
    const [currentTab, setCurrentTab] = useState<Tab>('inbox');

    const renderView = () => {
        switch (currentTab) {
            case 'inbox':
                return <InboxView />;
            case 'calendar':
                return <CalendarView />;
            case 'clients':
                return <ClientsView />;
            case 'bot':
                return <BotView />;
            case 'profile':
                return <ProfileView />;
            case 'analytics':
                return <AnalyticsView />;
            case 'payments':
                return <PaymentsView />;
            case 'website':
                return <WebsiteBuilderView />;
            default:
                return <InboxView />;
        }
    };

    return (
        <>
            <Navigation currentTab={currentTab} onTabChange={setCurrentTab} />
            <DashboardLayout>
                {renderView()}
            </DashboardLayout>
        </>
    );
}

