import { useState } from 'react';

const EditModalPerfil = ({ initialData, onClose, onSave }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    // Aquí puedes utilizar la estructura del modal con Tailwind CSS
    <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50">
      <div className="modal-content p-4">
        <h2 className="text-lg font-bold mb-4">Editar datos</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded-md border text-gray-600 font-medium p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={formData.contacto.email}
                onChange={handleChange}
                className="form-input mt-1 block w-full rounded-md border text-gray-600 font-medium p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sobre mi:
              <textarea
                type="text"
                name="sobremi"
                value={formData.resumen}
                onChange={handleChange}
                className="form-input mt-1 block w-full h-20 rounded-md border text-gray-600 font-medium p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>
          </div>
          {/* Añade los demás campos que desees editar */}
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Guardar
            </button>
            <button type="button" onClick={onClose} className="px-4 py-2 ml-4 text-blue-500 rounded hover:bg-gray-200">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default EditModalPerfil;
