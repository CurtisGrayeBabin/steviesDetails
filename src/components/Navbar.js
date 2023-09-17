import * as React from "react";
import { Link } from "gatsby";

function Navbar() {

  return (
      <nav className="tb-padding">

        <div id="navbar-container" className="lr-padding">
          <Link to="/" id="navbar-logo-link" className="transition center-text letter-spacing">Stevie’s Details (LLC)</Link>
          <ul>
            <li><Link to="/about" className="transition">About</Link></li>
            <li><Link to="/book" className="transition">Book</Link></li>
            <li><Link to="/pricing" className="transition">Pricing</Link></li>
            <li><Link to="/gallery" className="transition">Gallery</Link></li>
            <li><Link to="/socials" className="transition">Socials</Link></li>
          </ul>
        </div>

      </nav>

  );
}

export default Navbar;
