import react from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';

function App() {

  return (

    <>
      <BrowserRouter>
      <Navbar />
      {/* <Home/> */}
        <Routes>
      

        <Route path='/' element={<HomePage/>}>  </Route>
        <Route path="/login" element={<Login />}> </Route>
          <Route path="/signup" element={<Signup/>} > </Route>
       
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
