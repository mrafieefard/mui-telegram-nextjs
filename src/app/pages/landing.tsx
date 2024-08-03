"use client";

import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useExpand, useWebApp } from '@vkruglikov/react-telegram-web-app';
import { useAppContext } from '../context/AppContext';

export default function LandingPage() {
    const { setPage } = useAppContext();
    const webapp = useWebApp();
    const [isExpanded, expand] = useExpand()
    useEffect(() => {
        if (webapp) {
            expand()
            webapp.disableVerticalSwipes()
            webapp.setHeaderColor("#000")
            setPage('home');
        }
    }, [webapp, setPage]);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <CircularProgress />
        </div>
    );
}
