import React from 'react'

const data_students = ({ student, setStudent, students, setListUpdated }) => {
const handleDelete = id_student => {
////

        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:3001/api/students/' + id_student, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true)
    }

    const handleUpdate = id_student => {
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        }
        fetch('http://localhost:3001/api/students/' + id_student, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        //reiniciando state de libro
        setStudent({
            id_card: '',
            name: '',
            last_name: '',
            group: '',
        })

        setListUpdated(false)
        setListUpdated(true)
    }

    return (
       
        <div className='px-4 bg-white h-full py-4'>
            <p className="text-blue-700 font-bold text-center text-3xl mb-3">Lista de Alumnos</p>
            <table className='table-auto border-collapse w-full'>
                <thead>
                    <tr className='bg-blue-300 border border-black'>
                        
                        <th>Cedula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Grupo</th>
                    </tr>

                </thead>

                <tbody>
                
                    {Array.isArray(students) && students.map(student => (
                        <tr className='bg-gray-100 border border-black' key={student.id_student}>
                            <td className='text-black'>{student.id_card}</td>
                            <td className='text-black'>{student.name}</td>
                            <td className='text-black'>{student.last_name}</td>
                            <td className='text-black'>{student.group}</td>
                            <td className='text-black'>
                                <div className='mb-3'>
                                    <button onClick={() => handleDelete(student.id_student)} className='text-white font-bold rounded-md px-3 bg-red-600'>Delete</button>
                                </div>
                                <div className='mb-3'>
                                    <button onClick={() => handleUpdate(student.id_student)} className='text-white font-bold rounded-md px-3 bg-blue-600'>Update</button>
                                </div>
                            </td>
                        </tr>
                    ))}



                </tbody>
            </table>
        </div>


    )
}


export default data_students