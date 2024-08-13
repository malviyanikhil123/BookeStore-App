import React from 'react'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Contacts from './Contacts/Contacts'
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../src/context/AuthProvider.jsx'

function App() {
  // Use the authentication context to get the current user
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          {/* Route for the Home page */}
          <Route path='/' element={<Home />} />
          
          {/* Route for the Courses page; redirects to Signup if not authenticated */}
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to= "/signup"/>} />
          
          {/* Route for the Contacts page */}
          <Route path='/contact' element={<Contacts />} />
          
          {/* Route for the Signup page */}
          <Route path='/signup' element={<Signup />} />
        </Routes>
        
        {/* Toast notifications for the application */}
        <Toaster />
      </div>
    </>
  )
}

export default App
