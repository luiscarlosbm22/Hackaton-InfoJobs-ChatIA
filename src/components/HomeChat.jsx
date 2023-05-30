import { useEffect, useState } from "react"
import cvP1 from "../assets/cv-p1.png"
import iconContratado from "../assets/iconContratado.png"
import ModalCreaCv from "./ModalCreaCv"
import iconJobsLupa from "../assets/iconJobsLupa.png"
import styled from "@emotion/styled"
import ModalContent1 from "./ModalContent1"
import ModalContent2 from "./ModalContent2"
import ModalContent3 from "./ModalContent3"

const HomeChat = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleOpenModal = (content, route) => {
        setIsModalOpen(true);
        setModalContent(content);

        setTimeout(() => {
            setIsModalOpen(false);
            setModalContent(null);

            const newWindow = window.open(route, '_blank');
            if (newWindow) {
             // Verificar si se abrió correctamente la nueva pestaña
             newWindow.focus();
           }
           
        }, 4000);

    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    }
    return (
        <>



            <div className=" m-4 rounded-xl pt-6 pb-4 bg-slate-400 flex-container" style={{ backgroundImage: 'linear-gradient(to bottom, #cbd5da, #fafafa)' }}>

                <div onClick={() => handleOpenModal(<ModalContent1 />, '/crea-cv-ia')}  id="toast-success" className="flex items-center mx-auto max-w-xs p-4 hover:cursor-pointer hover:shadow-lg mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <img src={cvP1} alt="" />
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Creame un CV Profesional</div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400  hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>

                    </button>
                </div>



                <div onClick={() => handleOpenModal(<ModalContent2 />, '/cv-corregido')} id="toast-success" className="flex items-center mx-auto max-w-xs p-4 hover:cursor-pointer hover:shadow-lg mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <img src={iconContratado} alt="" />
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Califica mi CV, si es necesario corrigelo</div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>

                    </button>
                </div>

                <div onClick={() => handleOpenModal(<ModalContent3 />, '/aplica-jobs')}  id="toast-success" className="flex items-center mx-auto max-w-xs p-4 hover:cursor-pointer hover:shadow-lg mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <img src={iconJobsLupa} alt="" />
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Te busco trabajo para ti con mayor probabilidades</div>
                    <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>

                    </button>
                </div>

                {isModalOpen && (
                    <ModalCreaCv isOpen={isModalOpen} onClose={handleCloseModal}>
                        {modalContent}
                    </ModalCreaCv>
                )}

            </div>

        </>

    )
}

export default HomeChat