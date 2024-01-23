import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alerts from "./Components/Alerts";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [theme,setTheme]=useState('');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      alertMsg: msg,
      alertType: type,
    });
    setTimeout(() => {
      setAlert(null);
      console.log("2");
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#17232f";
      console.log("1");
      // console.log(alert.alertMsg)
      showAlert("Light Mode Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#17232f";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    }
  };
  // const toggleTheme=()=>
  // {
  //   console.log(theme)
  //     if(theme==='')
  //     {
  //       // setTheme('pink');
  //       document.body.style.backgroundColor = 'pink';
  //     }
  // }toggleTheme={toggleTheme}
  return (
    <>
      <Router>
        <Navbar title="Text Analyser" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert}/>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
