'use client'

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [student, setRegistred, teacher, setRegistredNew] = useState("");

  
  useEffect(() => {
    // Realizar llamada a la API para obtener la cantidad de alumnos
    const getRegistred = ()  => {
      fetch('http://localhost:3001/api/students/count')
      .then(res => res.json())
      .then(res => {console.log(res);setRegistred(res.body)})
      .catch(error => console.error('Error fetching user count:', error));
    }
    getRegistred();

  }, []);


  ///////////////
  useEffect (() => {
    const getRegistredNew = ()  => {
      fetch('http://localhost:3001/api/teachers/count')
      .then(res => res.json())
      .then(res => {console.log(res);setRegistredNew(res.body)})
      .catch(error => console.error('Error fetching user count:', error));
    }
    getRegistredNew();
  }, [] );

  
  return (
    <div className='bg-white h-full'>
      <h2 className='text-4xl px-4 py-4 text-black'>Bienvenido!</h2>
      <h2 className='text-3xl px-4 py-4 text-black text-center'>Datos actualizados a la fecha</h2>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        <div className='border-2 border-sky-400 border-collapse py-4'>
          <p className='text-center text-blue-700'>Cantidad alumnos inscritos: </p>
          <p className='text-3xl text-center text-blue-700 font-bold'>{student}</p>
          
        </div>
        <div className='border-2 border-sky-400 border-collapse py-4'>
          <p className='text-center text-blue-700'>Cantidad profesores registrados: </p>
          <p className='text-3xl text-center text-blue-700 font-bold'>{teacher}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
