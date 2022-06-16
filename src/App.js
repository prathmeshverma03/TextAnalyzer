import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [arr, setArray] = useState(["dark", "light"]);
  const [alertText,setAlertText]=useState('');
  const toggleColor = () => {
    if (arr[0] === "light") setArray(["dark", "light"]);
    else setArray(["light", "dark"]);
  };
  const showAlert= (message)=>{
      setAlertText(message);
      setTimeout(() => {
        setAlertText(null);
      },1000);
  }
  return (
    <>
      <Navbar title="Home" arr={arr} toggleColor={toggleColor} />
      <Alert alertText={alertText} />
      <Routes>
        <Route path="/" element={<TextForm heading="Text Analyzer" arr={arr} showAlert={showAlert}/>} />
        <Route path="about" element={<About arr={arr}/>} />
      </Routes>
    </>
  );
}

export default App;
