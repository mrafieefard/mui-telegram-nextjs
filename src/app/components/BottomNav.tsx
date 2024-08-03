import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaHeart, FaHome, FaWallet } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { FaGear } from "react-icons/fa6";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";

export default function BottomNav() {
    const { page, setPage } = useAppContext()
    const webapp = useWebApp()
    console.log(webapp?.platform)
    return <div className="flex flex-col">
        <BottomNavigation className='w-full fixed bottom-0 ' value={page} sx={{
            paddingBottom: webapp?.platform == "ios" ? 4 : 0,
            height: webapp?.platform == "ios" ? 96 : 56,
        }} onChange={(_, value) => setPage(value)}>
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<FaHome size={20} />}
            />
            <BottomNavigationAction
                label="Wallet"
                value="wallet"
                icon={<FaWallet size={20} />}
            />
            <BottomNavigationAction
                label="Settings"
                value="settings"
                icon={<FaGear size={20} />}
            />
        </BottomNavigation>
    </div>
}