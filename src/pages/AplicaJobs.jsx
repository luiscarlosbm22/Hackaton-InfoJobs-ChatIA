import "../assets/estilosJobs.css"
import jobsData from "../helpers/listjobs.json"

const AplicaJobs = () => {
    return (
        <body className="antialiased bg-gray-200 text-gray-900 font-sans p-6">

            <div className="ml-3">
                <h2 className="text-xl font-semibold text-cyan-800">Lo que encontre para ti! Las mejores Ofertas de trabajo</h2>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">


                    {jobsData.empleos.map((empleo, index) => (
                        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" id={index}>
                            <a href={empleo.aplicar} target="_blank" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div className="relative pb-40 overflow-hidden">
                                    <img className="mt-1 absolute inset-0 h-40 w-40 ml-16 object-cover" src={empleo.imagen_empresa} alt="" />
                                </div>
                                <div className="p-4">
                                    <span className="inline-block px-2 py-1 leading-none bg-green-700 text-white rounded-full font-semibold  tracking-wide text-xs">{empleo.estado}</span>
                                    <span className=" text-xs text-green-700"> Hace: {empleo.hace}</span>
                                    <h2 className="mt-2   font-bold">{empleo.puesto}</h2>
                                    <div className=" flex items-center">
                                        <span className="text-sm text-sky-700 ">{empleo.empresa}</span>
                                    </div>
                                    <div className=" flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span className="ml-2">Calificación</span></div>
                                    <p className="text-sm">{empleo.descripcion}</p>

                                </div>
                                <div className="p-2 border-t border-b text-xs text-gray-700">
                                    <span className="flex items-center mb-1">
                                        <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> {empleo.ubicacion} | {empleo.modalidad}
                                    </span>
                                    <span className="flex items-center">
                                        <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> {empleo.contrato} | {empleo.jornada} | {empleo.salario}
                                    </span>
                                </div>

                                <div className="mb-1 pl-4 text-sm font-medium dark:text-white">Coincide con tu CV {empleo.porcentaje}</div>
                                <div className=" bg-gray-200   rounded-full h-1.5 mb-4 mr-2 ml-4 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-1.5  rounded-full dark:bg-blue-500" style={{width: empleo.porcentaje}}></div>
                                </div>


                            </a>
                        </div>
                    ))}




                </div>
            </div>
        </body>
    )
}

export default AplicaJobs