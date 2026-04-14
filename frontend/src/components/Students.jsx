
import StudentForm from './Studentform';
import StudentTable from './StudentTable';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Students = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);


  const fetchStudents = async () => {
    const res = await axios('http://localhost:3010/record');
    setStudents(res.data)
  };

  useEffect(() => {
    fetchStudents()
  }, []);
  return (
    <div>
      <h1>Students</h1>
      <StudentForm  fetchStudents={fetchStudents} editingStudent={editingStudent} setEditingStudent={setEditingStudent}/>
      <StudentTable students={students} fetchStudents={fetchStudents} setEditingStudent={setEditingStudent}/>
    </div>
  )
}

export default Students