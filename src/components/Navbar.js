import * as React from "react";
import { Link } from "gatsby";

function Navbar() {

  return (
      <nav className="tb-padding">

        <div id="navbar-container" className="lr-padding">
          <Link to="/" id="navbar-logo-link" className="transition">Stevie’s Details (LLC)</Link>
          <ul>
            <li><Link to="/About" className="transition">About</Link></li>
            <li><Link to="/Book" className="transition">Book</Link></li>
            <li><Link to="/Pricing" className="transition">Pricing</Link></li>
            <li><Link to="/Gallery" className="transition">Gallery</Link></li>
            <li><Link to="/Socials" className="transition">Socials</Link></li>
          </ul>
        </div>

      </nav>

  );
}

export default Navbar;
