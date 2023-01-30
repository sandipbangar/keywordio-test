import "../styles/NavbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Paper } from "@mui/material";

export default function Navbar () {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <Paper className={color ? "header header-bg" : "header"}>
      <Link to={"/"} >
        <h1 color={"black"}>APP LOGO</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to={"/dashboard"}>DASHBOARD</Link>
        </li>
        <li>
          <Link to={"/createads"}>CREATE ADS</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000" }} />
        )}
      </div>
      </Paper>
    </>
  );
};
