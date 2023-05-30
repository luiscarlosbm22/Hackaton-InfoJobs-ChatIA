

const ModalCreaCv = ({isOpen, onClose, children}) => {

    if (!isOpen) {
        return null;
    }

  return (
    <div className=" absolute inset-0 z-50 flex items-center justify-center backdrop-filter  rounded-xl backdrop-blur-sm overflow-hidden h-auto">
      <div className="">
        <button className="absolute top-2 right-2 text-white hover:text-gray-700" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

export default ModalCreaCv