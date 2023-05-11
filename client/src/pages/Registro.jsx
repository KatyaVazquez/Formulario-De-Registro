import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const Registro = () => {
  const [dataPerson, setDataPerson] = useState({
    name: '',
    lastname: '',
    email: '',
    documento: '',
    phone: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataPerson((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/user', dataPerson);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Genial! datos registrados',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos no registrados! vuelve a intentarlo :(',
      })
    }
  };
  
  return (
<div className='flex justify-center'>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-72 ">
      <div className="mb-4">
       <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
         <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" value={dataPerson.name} onChange={handleChange} required />
    </div>
  <div className="mb-4">
    <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">Apellido:</label>
     <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" name="lastname" value={dataPerson.lastname} onChange={handleChange} required />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
      <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" value={dataPerson.email} onChange={handleChange} required />
  </div>
  <div className="mb-4">
    <label htmlFor="documento" className="block text-gray-700 font-bold mb-2">Documento:</label>
      <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="documento" name="documento" value={dataPerson.documento} onChange={handleChange} required />
  </div>
  <div className="mb-4">
    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Teléfono:</label>
      <input type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" value={dataPerson.phone} onChange={handleChange} />
  </div>
      <button type="submit" className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-pink-500 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-md shadow-md focus:outline-none focus:shadow-outline">Registrar</button>
    </form>
</div>
  );
};

export default Registro;
