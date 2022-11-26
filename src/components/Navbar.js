import * as React from "react";
import { Link } from "gatsby";

function Navbar() {

  return (
      <nav className="tb-padding">

        <div id="navbar-container" className="lr-padding">
          <Link to="/" className="no-underline">Stevie’s Details (LLC)</Link>
          <ul>
            <li>About</li>
            <li><Link to="/Book">Book</Link></li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Socials</li>
          </ul>
        </div>

      </nav>

  );
}

export default Navbar;
