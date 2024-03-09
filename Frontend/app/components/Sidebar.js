import React from 'react';


const Sidebar = () => {
  return (
    <div className="bg-white text-black w-64 flex flex-col h-screen border border-spacing-4">
      
      <ul className="mt-4">
        <div className='py-5 space-y-10 text-center'>
          <li>
            <a href='/' className=' text-3xl hover:bg-sky-300 border border-spacing-4 '>Inicio</a>
          </li>
          <li>
            <a href='/clientes'  className=' text-3xl hover:bg-sky-300 border border-spacing-4'>Alumnos</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
