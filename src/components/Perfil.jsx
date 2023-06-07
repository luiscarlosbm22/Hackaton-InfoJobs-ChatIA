
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg"
import styled from "@emotion/styled";
import userData from "../helpers/userdata.json"
import FloatingChatButton from "./FloatingChatButton";
import perfil from "../assets/perfil.jpg"
import EditModalPerfil from "./EditModalPerfil";
import PopoverAviso from "./PopoverAviso";

const Perfil = () => {


    const nombreUsuario = userData.nombre;



    const StyledLink = styled.a`
        text-decoration: none;
        color: var(--text);
        font-weight: 400;
        vertical-align: top;


        position: relative;
        transition: color .3s ease-in-out;
        
        &::before {
            content: '';
            position: absolute;
            top: 100%;
            width: 100%;
            height: 3px;
            background-color: var(--link-1);
            transform: scaleX(0);
            transition: transform .3s ease-in-out;
            
        }
        
        &:hover {
            color: var(--link-1);
        }
        
        &:hover::before {
            transform: scaleX(1);
        }
`;

    const [showModal, setShowModal] = useState(false);
    const [editedData, setEditedData] = useState(null);

    return (
        <>

        <PopoverAviso/>

            <div className="flex p-4  justify-center ">

                <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-start">
                        <img className="w-20 h-23 rounded-full mr-4" src={perfil} alt="Foto de perfil" />
                        <div>
                            <h2 className="text-sm font-bold  text-slate-600  mb-2">{nombreUsuario} - <span className=" text-cyan-600 "> {userData.titulo}</span></h2>
                            <p className="text-gray-700 mb-1 text-sm">{userData.resumen}..</p>
                            <ul className="text-left">
                                <li className="text-sm mb-2">
                                    <strong className="font-bold text-slate-600">Email: </strong> {userData.contacto.email}
                                </li>

                                <li className="text-sm mb-2">
                                    <strong className="font-bold text-slate-600">Ubicación:</strong> Lima, Peru
                                </li>
                            </ul>
                        </div>
                        <button className="text-sm  px-4 flex text-blue-500 ml-auto" onClick={() => setShowModal(true)}>
                            <StyledLink className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>Editar

                            </StyledLink>
                        </button>


                        {showModal && (
                            <EditModalPerfil
                                initialData={userData}
                                onClose={() => setShowModal(false)}
                                onSave={(data) => {
                                    // Aquí puedes manejar la lógica para guardar los datos editados,
                                    // como enviar una solicitud al servidor o actualizar el archivo JSON.
                                    setEditedData(data);
                                    setShowModal(false);
                                }}
                            />
                            )}
                    </div>

                </div>

            </div>

            <div className="flex justify-center">
                <div className=" w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-700 dark:text-white">Experiencia Laboral</h5>
                        <StyledLink className="flex cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>Editar

                        </StyledLink>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {userData.experienciaLaboral.map((experiencia, index) => (

                                <li className="py-3 sm:py-4" key={index}>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                            </svg>

                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {experiencia.puesto}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {experiencia.empresa}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {experiencia.descripcion}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                            {experiencia.periodo}
                                        </div>
                                    </div>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>
            </div>

            {/*Educacion  */}
            <div className="flex justify-center p-2">
                <div className=" w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-700 dark:text-white">Educación</h5>
                        <StyledLink className="flex cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>Editar

                        </StyledLink>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {userData.educacion.map((educacion, index) => (

                                <li className="py-3 sm:py-4" key={index}>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                            </svg>


                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {educacion.titulo}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {educacion.institucion}
                                            </p>

                                        </div>
                                        <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                            {educacion.periodo}
                                        </div>
                                    </div>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>
            </div>
            {/* Habilidades */}
            <div className="flex justify-center p-2">
                <div className="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-700 dark:text-white">Habilidades</h5>
                        <StyledLink className="flex cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Añadir
                        </StyledLink>
                    </div>
                    <div className="flex flex-wrap">
                        {userData.habilidades.map((habilidad, index) => (
                            <kbd key={index} className="px-2 mr-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 mb-2" style={{ flexShrink: 0 }}>{habilidad}</kbd>
                        ))}
                    </div>
                </div>
            </div>

            {/* Idiomas y contacto */}
            <div className="flex justify-center p-2">
                <div className=" w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-700 dark:text-white">Educación</h5>
                        <StyledLink className="flex cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>Editar

                        </StyledLink>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {userData.idiomas.map((idiomas, index) => (

                                <li className="py-3 sm:py-4" key={index}>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                            </svg>



                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {idiomas.idioma}
                                            </p>


                                        </div>
                                        <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                                            <span
                                                className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${idiomas.nivel === 'Intermedio' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                    }`}
                                            >
                                                {idiomas.nivel}
                                            </span>


                                        </div>
                                    </div>
                                </li>
                            ))}


                        </ul>
                    </div>
                </div>
            </div>
            <FloatingChatButton />

        </>

    )
}

export default Perfil