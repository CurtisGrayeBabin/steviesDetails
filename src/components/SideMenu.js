import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

function SideMenu() {

  // window.onscroll = function () { window.scrollTo(0, 0); }

  return (
    <nav aria-label="Side Menu Navigation" className="side-menu-content">
        <ul>
            <li><Link to="/">Home&nbsp;</Link></li>
            <li><Link to="/about">About&nbsp;</Link></li>
            <li><Link to="/works">Works&nbsp;</Link></li>
        </ul>
    </nav>
  );
}

export default SideMenu;


