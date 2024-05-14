// import logo from './logo.svg';
// import { useState } from 'react';

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFomr from './components/TextForm';
import React, {useState } from 'react'
import { Route, Routes } from 'react-router-dom';


function App() {
  const[mode, setmode] = useState('light');
  const[alert, setalert] = useState(null);

  const showalert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#0a3e70';
      showalert("Dark mode has been enabled","warning");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Dark mode has been disabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        {/* <Route path="/" element={<Navbar/>}> */}
          <Route exact path="/home" element={<TextFomr showalert={showalert} heading="Enter the text to analyze " mode={mode}/>} />
          {/* <TextFomr showalert={showalert} heading="Enter the text to analyze " mode={mode}/> */}
          {/* <About/> */}
          <Route path="/about" element={<About/>} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
