import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    console.log("Aletr Set")
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'rgb(0, 8, 55)';
      document.body.style.color = 'white';
      setBtnText("Enable Light Mode");
      showAlert("Dark Mode is enabled.", 'Success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#091e99';
      setBtnText("Enable Dark Mode");
      showAlert("Light Mode is enabled.", 'Success')
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggleMode} btnText={btnText} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextArea heading="Enter Text Below To Analyze" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
      {/* <About/> */}
    </>
  );
}



export default App;
