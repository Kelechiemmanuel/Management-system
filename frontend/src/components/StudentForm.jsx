import React, {useState, useEffect } from 'react'
import axios from 'axios'

const StudentForm = ({ fetchStudents, editingStudent, setEditingStudent}) => {
     const [form, setForm] = useState({
        name: "",
        age: "",
        level: "",
        gender: ""
     })
     useEffect(() => {
        if (editingStudent){
            setForm(editingStudent);
        }
     }, [editingStudent]);

     const handleSubmit = async() => {
        if (editingStudent){
            await axios.put(`http://localhost:3010/record/${editingStudent.id}`, form);
            setEditingStudent(null);
        } else {
            await axios.post('http://localhost:3010/record', form);
        }
        setForm({name: "", age: "", level: "", gender: ""})
        fetchStudents()
     }
  return (
    <div>
        <input placeholder='Name' value={form.name} onChange={(e) => setForm({...form, name:e.target.value})}/>
        <input placeholder='Age' value={form.age} onChange={(e) => setForm({...form, age:e.target.value})}/>
        <input placeholder='Level' value={form.level} onChange={(e) => setForm({...form, level:e.target.value})}/>

        <select value={form.gender} onChange={(e) => setForm({...form, gender:e.target.value})}>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
        </select>

        <button onClick={handleSubmit}>
            {editingStudent ? 'Update' : 'Add'}
        </button>
    </div>
  )
}

export default StudentForm