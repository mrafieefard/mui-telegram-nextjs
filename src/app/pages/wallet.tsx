import { BackButton, useInitData, useWebApp } from "@vkruglikov/react-telegram-web-app"
import { useAppContext } from "../context/AppContext"

export default function WalletPage(){
    const [initData] = useInitData()
    const {setPage} = useAppContext()
    return <div className="h-full flex flex-col justify-center items-center">
        <p>Wallet</p>
    </div>
}