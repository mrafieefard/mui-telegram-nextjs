"use client"

import { Button, CircularProgress } from "@mui/material";
import { useInitData, useWebApp } from "@vkruglikov/react-telegram-web-app";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";


export default function HomePage() {
    return <div className="flex flex-col p-8 gap-12 justify-center items-center h-full">
        <p>Home</p>
    </div>
}