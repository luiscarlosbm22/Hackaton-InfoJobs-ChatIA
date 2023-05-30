import imgPerfil from '../assets/perfil.jpg';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const CreaCvIa = () => {
  return (
    <>

      <div className=' flex justify-center items-center bg-slate-500' style={{ minHeight: '100vh' }}>




        <div className='p-4 mt-2 mb-2 relative border bg-white' style={{ width: '210mm', height: '297mm' }}>
          <div className='w-full flex justify-center items-center'>
            <div className=' mr-20'>
              <img src={imgPerfil} alt="" className="w-40 h-40 rounded-full mr-4" />
            </div>
            <div>
              <h1 className=' text-blue-900 font-bold text-5xl'>Juan Gutierrez</h1>
              <h3 className=' text-blue-900 font-thin text-2xl'>Desarrollador de Software</h3>
            </div>
          </div>

          <div className=' p-6 w-full flex justify-center '>
            <div className='w-1/3 flex-shrink-0 mr-10' >

              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="hidden sm:flex flex-grow w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>

                    </div>

                  </div>
                  <div className="mt-3 mb-3 sm:pr-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sobre mí</h3>

                    <p className="text-base font-normal text-gray-800 dark:text-gray-400">Apasionado de la programación y desarrollo de software, me defino por ser una persona con ganas de aprender y habilidades en liderazgo de equipos multidisciplinares. </p>
                  </div>
                </li>

              </ol>

              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>

                    </div>

                  </div>
                  <div className="mt-3 mb-3 sm:pr-2">
                    <h3 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white">Contacto</h3>

                    <div className='flex mb-4'>
                      <div className="z-10 flex mr-4 items-center justify-center w-8 h-8 bg-blue-800 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white dark:text-blue-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                      </div>
                      <div>
                        <p className="text-base font-normal text-gray-800 dark:text-gray-400">+34-91-1234-567</p>
                      </div>
                    </div>
                    <div className='flex mb-4'>
                      <div className="z-10 flex mr-4 items-center justify-center w-8 h-8 bg-blue-800 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white dark:text-blue-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>


                      </div>
                      <div>
                        <p className="text-base font-normal text-gray-800 dark:text-gray-400">juan@gmail.es</p>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className="z-10 flex mr-4 items-center justify-center w-8 h-8 bg-blue-800 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white dark:text-blue-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>


                      </div>
                      <div>
                        <p className="text-base font-normal text-gray-800 dark:text-gray-400">Calle Cualquiera 123, Cualquier Lugar</p>
                      </div>
                    </div>

                  </div>
                </li>
              </ol>

              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="hidden sm:flex flex-grow w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>

                    </div>

                  </div>
                  <div className="mt-3 mb-3 sm:pr-2">
                    <h3 className="text-lg mb-4 font-semibold text-gray-900 dark:text-white">Más Información</h3>

                    <ul className=' ml-8 list-disc text-base  font-normal text-gray-700'>
                      <li>Carné de conducir activo siempre.</li>
                      <li>Vehículo propio.</li>
                      <li>Disponibilidad total.</li>
                    </ul>
                  </div>
                </li>

              </ol>
            </div>

            <div className='w-2/3'>
              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="hidden sm:flex w-80 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                      </svg>

                    </div>

                  </div>
                  <div className="mt-3 mb-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experiencia laboral</h3>
                    <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Desarrollador de Software</h2>
                    <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">Empresa de Tecnología, S.L. | Enero 2020 - Actualidad</time>

                    <ul className=' ml-8 list-disc text-sm  font-normal text-gray-700'>
                      <li>Colaboración en la definición de requisitos y estrategias de desarrollo.</li>
                      <li>Definición de estrategias a seguir.</li>
                      <li>Participación en el control de calidad y pruebas de los productos.</li>
                      <li>Trabajo en equipo con profesionales de diferentes disciplinas.</li>
                    </ul>

                    <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Desarrollador de Software</h2>
                    <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">Startup de Tecnología, S.L. | Mayo 2018 - Diciembre 2019/time</time>

                    <ul className=' ml-8 list-disc text-sm  font-normal text-gray-700'>
                      <li>Programación y desarrollo de aplicaciones web y móviles.</li>
                      <li>Análisis de requerimientos y diseño de soluciones técnicas.</li>
                      <li>Implementación de funcionalidades y mejoras.</li>
                    </ul>
                  </div>
                </li>
              </ol>

              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="hidden sm:flex w-80 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>

                    </div>

                  </div>
                  <div className="mt-3 mb-3 sm:pr-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Datos académicos</h3>
                    <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Universidad del mar</h2>
                    <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">Estudios en Ingeniería del Software | Actual</time>
                    <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Centro de estudios San Juan </h2>
                    <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">Estudios en Desarrollo de Software | Septiembre 2018 - Julio 2021</time>
                    <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Escuela de negocios </h2>
                    <time className="block mb-3 text-sm font-normal leading-none text-gray-700 dark:text-gray-500">Estudios en Informática | Septiembre 2015 - Julio 2017</time>
                  </div>
                </li>

              </ol>

              <div className=' flex justify-center'>
                <ol className="flex items-center mt-8">
                  <li className="relative mb-6 sm:mb-0 h-32">
                    <div className="flex w-48  items-center">
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>

                      </div>

                    </div>
                    <div className="mt-3 w-52 sm:pr-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Habilidades</h3>

                      <p className="text-sm font-normal text-gray-800 dark:text-gray-400">
                        Programación en varios lenguajes (Java, Python, JavaScript, etc.).
                        Desarrollo de aplicaciones web y móviles.
                        
                        Trabajo en equipo y comunicación efectiva.
                        Dominio del paquete Office. </p>
                    </div>
                  </li>
                  <li className="relative mb-6 sm:mb-0 h-32">
                    <div className="flex w-40 items-center">
                      <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                      <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-blue-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                        </svg>

                      </div>

                    </div>
                    <div className="mt-3 w-52 sm:pr-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Idiomas</h3>

                      <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Castellano y catalán:</h2>
                      <time className="block mb-3 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">Nativo.</time>
                      <h2 className="block mt-4 mb-0.5 text-sm font-bold leading-none text-blue-900 ">Inglés:  </h2>
                      <time className="block mb-3 text-sm font-normal leading-none text-gray-800 dark:text-gray-500">Nivel alto.</time>
                    </div>
                  </li>

                </ol>
              </div>

            </div>
          </div>

          <div data-dial-init className="fixed right-6 bottom-6 group">
            <div id="speed-dial-menu-default" className="flex flex-col items-center  mb-4 space-y-2">
              <Tooltip title="Compartir" position="left" arrow={true} arrowSize="big">
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                  <svg aria-hidden="true" className="w-6 h-6 -ml-px " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                  <span className="sr-only">Share</span>
                </button>
              </Tooltip>

              <Tooltip title="Imprimir" position="left" arrow={true} arrowSize="big">
                <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Print</span>
                </button>
              </Tooltip>

              <Tooltip title="Descargar" position="left" arrow={true} arrowSize="big">
                <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fillRule="evenodd"></path></svg>
                  <span className="sr-only">Download</span>
                </button>
              </Tooltip>

              <Tooltip title="Copiar URL" position="left" arrow={true} arrowSize="big">
                <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                  <span className="sr-only">Copy</span>
                </button>
              </Tooltip>

            </div>
            <Tooltip title="Plantillas" position="left" arrow={true} arrowSize="big">
            <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" className="flex items-center border justify-center text-gray-500 bg-white rounded-full w-14 h-14  hover:text-gray-900 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
              <svg aria-hidden="true" className="w-8 h-8 transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              
            </button>
            <span className=" relative left-4 bottom-4 text-sm bg-red-500 rounded text-white m-1">Pro</span>
            </Tooltip>
          </div>

        </div>
      </div>
    </>
  )
}

export default CreaCvIa