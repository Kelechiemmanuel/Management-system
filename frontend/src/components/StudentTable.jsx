import React, { useState } from 'react'
import axios from 'axios'

const StudentTable = ({ students, fetchStudents, setEditingStudent }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3010/record/${id}`);
        fetchStudents();
    };
    return (
        <table className='flex flex-col'>
            <thead>
                <tr className='flex justify-between items-center gap-10 p-5 w-full border border-amber-400'>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Level</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {students.map((s) => (
                    <tr key={s.id} className='flex justify-between items-center p-5 w-full border border-amber-400'>

                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.level}</td>
                        <td>{s.gender}</td>

                        <td>
                            <button onClick={() => setEditingStudent(s)}>
                                Edit
                            </button>

                            <button onClick={() => handleDelete(s.id)}>
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