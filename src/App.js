import React from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import About from './pages/About'
import Comments from './pages/Comments'
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from './pages/Error'
import Logout from './pages/Logout'
import { useGlobalContext } from './context'






const App = () => {
  const data=useGlobalContext()
  console.log(data);
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'element={<Home/>}/>
          
          <Route path='/about'element={<About/>}/>
          
          <Route path='/comments'element={<Comments/>}/>
          
          <Route path='/login'element={<Login/>}/>
          
          <Route path='/Signin'element={<Signin/>}/>

          <Route path='/logout'element={<Logout/>}/>
          
          <Route path='*'element={<Error/>}/>

        </Routes>

      </Router>



     
    </>
  )
}

export default App
