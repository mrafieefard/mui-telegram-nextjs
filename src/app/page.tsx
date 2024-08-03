"use client"

import { useEffect, useState } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import LandingPage from './pages/landing';
import NotFoundPage from './pages/not-found';
import HomePage from './pages/home';
import WalletPage from './pages/wallet';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { FaHeart } from 'react-icons/fa';
import BottomNav from './components/BottomNav';
import SettingsPage from './pages/settings';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';

const renderPage = (page: string) => {
    switch (page) {
        case 'landing':
            return <LandingPage />;
        case 'home':
            return <HomePage />;
        case 'wallet':
            return <WalletPage />;
        case 'settings':
            return <SettingsPage />;
        default:
            return <NotFoundPage />;
    }
};

const AppContent = () => {
    const { page } = useAppContext();
    const webapp = useWebApp()
    const [padding, setPadding] = useState(0)
    useEffect(() => {
        if (["home", "wallet", "settings"].includes(page)) {
            if (webapp.platform == "ios") {
                setPadding(24)
            } else {
                setPadding(14)
            }
        }else{
            setPadding(0)
        }

    }, [page,webapp])
    return <>
        <div className={`pb-${padding} overflow-scroll no-scrollbar h-screen`}>
            {renderPage(page)}
        </div>
        {["home", "wallet", "settings"].includes(page) ? <BottomNav /> : <></>}
    </>;
};

export default function Page() {

    return (

        <AppProvider>

            <AppContent />

        </AppProvider>
    );
}
