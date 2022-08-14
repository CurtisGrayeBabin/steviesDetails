import React, { useState } from "react";
import SideMenu from "../components/SideMenu";


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
                1
                  /* 
                  <IconContext.Provider value={{ title: "Side-menu close button", className: "sideMenu" }}>
                    <VscChromeClose />
                  </IconContext.Provider>
                  */
                  :
                  2

                  /* 
                  <IconContext.Provider value={{ title: "Side-menu open button", className: "sideMenu" }}>
                    <GiHamburgerMenu />
                  </IconContext.Provider>
                  */ 
              }
          </button>

      </nav>

      {menuOpen && <SideMenu /> }

    </>
  );
}

export default Navbar;
