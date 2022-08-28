import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import "../styles/global.css";

import { IconContext } from 'react-icons';
import { VscChromeClose } from 'react-icons/vsc';
import { HiMenu } from 'react-icons/hi';


function Navbar() {

  // determines if side menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>


        {/* Side Menu */}

          <button onClick={() => setMenuOpen(!menuOpen)}>
              {
                menuOpen ? 
                  
                  <IconContext.Provider value={{ title: "Side-menu close button", className: "sideMenu" }}>
                    <VscChromeClose />
                  </IconContext.Provider>
                  
                  :
                  
                  <IconContext.Provider value={{ title: "Side-menu open button", className: "sideMenu" }}>
                    <HiMenu />
                  </IconContext.Provider>
                  
              }
          </button>

      </nav>

      {menuOpen && <SideMenu /> }

    </>
  );
}

export default Navbar;
