import { BackButton } from "@vkruglikov/react-telegram-web-app";
import { useAppContext } from "../context/AppContext";

export default function NotFoundPage(){
    const { setPage } = useAppContext();
    return <>
    <BackButton onClick={()=>{
        setPage("home")
    }}/>
    <div className="h-screen flex flex-col justify-center items-center">
        <span>Where are you trying to go</span>
    </div>
    </>
}