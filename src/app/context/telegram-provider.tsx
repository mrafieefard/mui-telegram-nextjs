"use client"

import { WebAppProvider, useWebApp } from "@vkruglikov/react-telegram-web-app";
import Script from "next/script";
import { ReactNode, useEffect, useRef } from "react";
import { env } from "process";

interface props {
    children: ReactNode
}


export function TelegramProvider(props: props) {
    return (
        <>
            <Script id="telegram-script" src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />

            <WebAppProvider options={{ smoothButtonsTransition: true }}>
                {props.children}
            </WebAppProvider>
        </>
    );
}