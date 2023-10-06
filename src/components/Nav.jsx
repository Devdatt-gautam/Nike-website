import { headerLogo } from "../assets/images";
import { brightness, hamburger } from "../assets/icons";
import { HashLink as Link } from "react-router-hash-link";
import { navLinks } from "../constants";
import { useState } from "react";

import "./nav.css";
const Nav = ({ themeSwitch }) => {
  const [visibility, setVisibility] = useState("Off");
  const handleVisibility = () => {
    if (visibility === "Off") {
      setVisibility("On");
    } else setVisibility("Off");
  };
  return (
    <header className="padding-x py-8 absolute max-lg:fixed max-lg:bg-white  z-20 w-full dark:bg-black">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className={`${visibility} flex-1 lg:flex justify-center items-center gap-16 max-lg:bg-white max-lg:flex-col max-lg:absolute max-lg:inset-0 max-lg:w-full max-lg:h-[100vh] max-lg:uppercase max-lg:justify-center max-lg:dark:bg-black `}
        >
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="font-montserrat leading-normal text-lg 
           
            max-lg:bg-coral-red
            max-lg:text-3xl max-lg:font-palanquin text-slate-gray max-lg:text-white max-lg:shadow-slate-gray  max-lg:shadow-lg max-lg:px-0 max-lg:py-0  max-lg:w-[200px] max-lg:text-center max-lg:rounded max-lg:dark:shadow-white-400 max-lg:dark:shadow-md max-lg:dark:text-black"
            >
              <Link to={item.href} onClick={handleVisibility}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <button onClick={themeSwitch}>
            <img src={brightness} alt="theme mode" />
          </button>
          <div
            key={1}
            className="max-lg:block hidden dark:hidden dark:bg-coral-red dark:w-[35px] max-lg:dark:flex dark:items-center dark:justify-center dark:h-[35px] max-lg:bg-transparent"
          >
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={handleVisibility}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
