import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Students from './components/Students'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 bg-gray-100 min-h-screen'>
          <Routes>
            <Route path='/' element={<Students />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App