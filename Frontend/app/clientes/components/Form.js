import React from 'react'
///
const Form = ({student, setStudent}) => {

    const handleChange = e => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    let {id_card, name, last_name, group} = student != undefined ? student:{}

    const handleSubmit = () => {
        
        //consulta
        console.log(JSON.stringify(student))
        //return
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(student)
        }
        fetch('http://localhost:3001/api/students/new', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setStudent({
            id_card: '',
            name: '',
            last_name: '',
            group: ''
        })

    }

    console.log(student)

    return (
    
        <div className='px-4 bg-white'>
            <p className="text-blue-700 font-bold text-center text-3xl py-5">Matricula nuevos alumnos</p>

            <form onSubmit={handleSubmit} className="text-center">
                <div className='mb-3'>
                    <label htmlFor='id_card' className='block text-gray-700 font-bold mb-2'>Cedula</label>
                    <input value={id_card} name="id_card" onChange={handleChange} type="number" id='id_card' className='border border-black text-black' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Nombre</label>
                    <input value={name} name="name" onChange={handleChange} type="text" id='name' className='border border-black text-black' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='last_name' className='block text-gray-700 font-bold mb-2'>Apellido</label>
                    <input value={last_name} name="last_name" onChange={handleChange} type="text" id='last_name' className='border border-black text-black' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='group' className='block text-gray-700 font-bold mb-2'>Grupo</label>
                    <input value={group} name="group" onChange={handleChange} type="text" id='group' className='border border-black text-black' />
                </div>
                
                <button type="submit" className='bg-blue-500 rounded-md text-white font-bold px-2 py-1 mt-3'>Agregar</button>
            </form>
        </div>


    )
}

export default Form