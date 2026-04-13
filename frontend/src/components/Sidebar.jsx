import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-60 bg-blue-600 text-white min-h-screen p-4'>
        <h2 className="text-xl font-bold mb-6">School System</h2>
        <ul className='flex flex-col gap-4'>
            <Link to='/'>🎓 Students</Link>
            <Link to='/dashboard'>📊 Dashboard</Link>
        </ul>
    </div>
  )
}

export default Sidebar