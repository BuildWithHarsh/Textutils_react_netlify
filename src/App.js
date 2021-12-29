
import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm"; 
import React, { useState } from 'react';
import Alert from './Components/Alert';



function App() {
  const[mode , setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = '#e2e2e2';
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils - light Mode";
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#17093f';
      showAlert("Dark Mode Enabled","success");
      document.title="TextUtils - Dark Mode";
    }
  }


  return (
    <>
    <Navbar title = "TextUtils" home = "Home" about="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
    </>
  );
  
}

export default App;
