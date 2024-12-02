import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm'
import React ,{useState} from 'react'
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

   const showAlert= (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
 
   }

  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","sucess");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-5' >
          {/* <Routes>
          */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} head="Enter the text to analyze here" mode={mode} />} /> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} head="Enter the text to analyze here" mode={mode} />
    
    </div>
        {/* </Router> */}
    </>
  );
}

export default App;

