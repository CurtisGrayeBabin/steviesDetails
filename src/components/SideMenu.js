import React from "react";
import { Link } from "gatsby";

function SideMenu() {
  return (
    <nav aria-label="Side Menu Navigation">
        <ul>
            <li><Link to="/">Home&nbsp;</Link></li>
            <li><Link to="/about">About&nbsp;</Link></li>
            <li><Link to="/works">Works&nbsp;</Link></li>
        </ul>
    </nav>
  );
}

export default SideMenu;


