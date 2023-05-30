import { useState, useRef } from "react"
import logoinfogobs from "../assets/infogobs.svg"
import logo from "../assets/logo.svg"
import iconWorkActive from "../assets/iconWorkActive.png"
import iconWorkDisable from "../assets/iconWorkDisable.png"
import iconChatActive from "../assets/iconChatActive.png"
import iconChatDisable from "../assets/iconChatDisable.png"
import iconInfoActive from "../assets/iconInfoActive.png"
import iconInfoDisable from "../assets/iconInfoDisable.png"
import iconChatBot from "../assets/chat-bot.png"
import iconMinimiza from "../assets/iconMinimiza.svg"
import Tab from "./Tab"
import TabContent from "./TabContent"

const FloatingChatButton = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleChatButtonClick = () => {
        setIsChatOpen(!isChatOpen)
        setIsButtonClicked(true);

        setTimeout(() => {
            setIsButtonClicked(false);
        }, 400);

    };

    return (
        <div className="fixed bottom-4 right-4">
            <div className={`relative ${isButtonClicked ? 'scale-up-horizontal-center' : ''}`}>


                <style>
                    {`.scale-up-horizontal-center {
                        animation: scale-up-horizontal-center 0.4s;
                    }

                    @keyframes scale-up-horizontal-center {
                        0% {
                        transform: scaleX(.2);
                        }
                        100% {
                        transform: scaleX(1);
                        }
                    }`}
                </style>
                <button

                    className={`w-16 h-16 bg-white border-2 border-sky-700 text-white  rounded-full shadow-md flex items-center justify-center ${isChatOpen ? 'bg-white border-sky-700' : ''}`}
                    onClick={handleChatButtonClick}

                >

                    {isChatOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-cyan-700 w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg> : <img className="w-10" src={iconChatBot} alt="" /> 
                    }



                </button>

                {isChatOpen && (

                    <div className="absolute bottom-20  right-0 bg-white border border-gray-200 rounded-lg shadow-md overflow-auto" style={{ width: '400px', height: '500px', display: 'flex', flexDirection: 'column' }}>
                        <div className="p-4 bg-slate-500 flex justify-between">
                            <img src={logo} alt="" className="w-12" />
                            <div className="text-white">
                                <h2 className="text-xl font-semibold">Infojobs IA 2023</h2>
                            </div>
                        </div>

                        <div className="flex-grow  overflow-y-auto">
                            <TabContent activeTab={activeTab} />
                        </div>

                        <div className="bg-white border-t">
                            <div className="flex  justify-between p-4">
                                <Tab activeTab={activeTab} tabName="Home" tabIcon={activeTab === "Home" ? iconWorkActive : iconWorkDisable} onClick={handleTabClick} />
                                <Tab activeTab={activeTab} tabName="Mensaje" tabIcon={activeTab === "Mensaje" ? iconChatActive : iconChatDisable} onClick={handleTabClick} />
                                <Tab activeTab={activeTab} tabName="Ayuda" tabIcon={activeTab === "Ayuda" ? iconInfoActive : iconInfoDisable} onClick={handleTabClick} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FloatingChatButton