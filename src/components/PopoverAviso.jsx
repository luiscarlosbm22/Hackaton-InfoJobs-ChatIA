import { useState } from "react"


const PopoverAviso = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }

  return (

    isOpen &&(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-4 rounded shadow">
          <p className="font-bold text-sky-800">¡Atencion!</p>
          <span className="flex font-semibold text-gray-600 ">Esta data solo es estática, si quieres añadirle más funcionalidad</span>
          <span className="flex font-semibold text-gray-600">te dejo el repositorio aqui</span>
          <a className="flex text-sky-800 " target="_blank" href="https://github.com/luiscarlosbm22/Hackaton-InfoJobs-ChatIA">github.com/luiscarlosbm22/Hackaton-InfoJobs-ChatIA</a>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleClose}
          >
            ok
          </button>
        </div>
      </div>
    )
    
  )
}

export default PopoverAviso