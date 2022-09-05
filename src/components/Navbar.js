import React, { useState } from "react";
import DropMenu from "./DropMenu";
import "../styles/global.css";

import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';

function Navbar() {

  // determines if side menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <nav className="padding">


        {/* Side Menu */}

          <button onClick={() => setMenuOpen(!menuOpen)}>
              {
                menuOpen ? 
                  
                  <IconContext.Provider value={{ title: "Side-menu close button" }}>
                    <CgClose />
                  </IconContext.Provider>
                  
                  :
                  
                  <IconContext.Provider value={{ title: "Side-menu open button" }}>
                    <HiMenu />
                  </IconContext.Provider>
                  
              }
          </button>

      </nav>

      <DropMenu switch={menuOpen} />

    </>
  );
}

export default Navbar;
