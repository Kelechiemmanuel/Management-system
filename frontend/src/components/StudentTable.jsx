import React, { useState } from 'react'
import axios from 'axios'

const StudentTable = ({ students, fetchStudents, setEditingStudent }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3010/record/${id}`);
        fetchStudents();
    };
    return (

        <table className="w-full">
            <thead >
                <tr className="bg-blue-500 text-white">
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Age</th>
                    <th className="py-2 px-4 border">Level</th>
                    <th className="py-2 px-4 border">Gender</th>
                    <th className="py-2 px-4 border">Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {students.map((s) => (
                    <tr key={s.id} className="text-center hover:text-white hover:bg-blue-400">
                        <td className="py-2 px-4 border">{s.name}</td>
                        <td className="py-2 px-4 border">{s.age}</td>
                        <td className="py-2 px-4 border">{s.level}</td>
                        <td className="py-2 px-4 border">{s.gender}</td>


                        <td className='py-2 px-4 flex justify-center gap-10 bg-blue-500 text-white'>
                            <button className='border-0 cursor-pointer' onClick={() => setEditingStudent(s)}>
                                Edit
                            </button>

                            <button className='border-0 cursor-pointer' onClick={() => handleDelete(s.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default StudentTable