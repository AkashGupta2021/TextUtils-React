
import React, { useState } from 'react'

import Nav from './components/Nav'
import TextForm from './components/TextForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter, 
  Routes,
  Route,
  
} from "react-router-dom";



export default function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);//alert is object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", 'success')
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (

    <>



      {/* <Nav title="Text-Utils" mode={mode} toggleMode={toggleMode} aboutText="About-TextUtils" />
      <Alert alert={alert} />
      
      <div className="container my-3">
 
   
      
 
    <TextForm showAlert={showAlert} header="Enter the text to analyze" mode={mode} />
    
        </div>
        {/* <About/>    */}
       <BrowserRouter>
       <Nav title="Text-Utils" mode={mode} toggleMode={toggleMode} aboutText="About-TextUtils" />
       <Alert alert={alert} />
      
      <div className="container my-3">

       <Routes>
        <Route exact path="/" element={ <TextForm showAlert={showAlert} header="Enter the text to analyze" mode={mode} />
    }></Route>
    
        <Route exact path="about" element={ <About />}></Route>
       </Routes>
       </div>
       </BrowserRouter>
     
    </>
    

  )
}






