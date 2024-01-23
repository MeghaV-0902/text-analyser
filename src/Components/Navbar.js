import React, { useState } from "react";
import ThemeModes from "./ThemeModes";
import { Link } from "react-router-dom";
export default function Navbar(props) {

  const[color, setColor] = useState('');
  console.log(color);

  const handleColorChange=(newColor)=>
  {
    setColor(newColor)
    document.body.style.backgroundColor=newColor
    

  }
    
    return (

    <div style={{color:props.mode}}>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
        {/* gitcomment */}
        {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <ThemeModes setColor={handleColorChange}/>
        
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        </div>
        
      </nav>
    </div>
  );
}
