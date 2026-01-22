import React from "react";
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut, useNavigate } from "react-router-dom";
import darkLogo from "../assets/darkLogo.png";
import whiteLogo from '../assets/whiteLogo.png'
import {useTheme} from '../components/context/theme-provider'

const Navbar = () => {
  const navigate = useNavigate();
  const {theme, setTheme} = useTheme(); 
  const isDark  = theme ===  "dark"; 


  return (
    <div className="flex justify-between p-5 items-center mx-8 sm:mx-20 xl:mx-32 sticky ">
      <img
        src={isDark ? whiteLogo: darkLogo0}
        alt=""
        className="w-10 sm:w-20 cursor-pointer"
        onClick={() => navigate("/")}
      />


      {/*  Theme toggge */}
      <div className={ `flex items-center cursor-pointer `}>

      </div>
      <button className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-red-500 text-white px-10 p.2.5 ">
          Login
      </button>
    </div>
  );
};

export default Navbar;
