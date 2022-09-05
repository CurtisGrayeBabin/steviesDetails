import React from "react";
import "../styles/global.css";

import { SiInstagram } from "react-icons/si";
import { SiYelp } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function DropMenu(props) {

  return (
    <nav aria-label="Side Menu Navigation" className={`drop-menu-content-hidden ${props.switch ? 'drop-menu-content-shown' : ''}`}>
        <ul className="links">

            <li>
              <a href="https://www.instagram.com/stevies_details/" target="_">
                <span>Instagram</span>
                <span className="icon-helper"><SiInstagram /></span>
              </a>
            </li>

            <li>
              <a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-2" target="_">
                <span>Yelp</span>
                <span className="icon-helper"><SiYelp /></span>
              </a>
            </li>

            <li>
              <a href="https://www.tiktok.com/@stevies_details" target="_">
                <span>TikTok</span>
                <span className="icon-helper"><SiTiktok /></span>
              </a>
            </li>

            <li style={{"borderBottom": "1px solid white"}}>
              <a href="mailto: steviesdetailsllc@gmail.com" target="_">
                <span>Email</span>
                <span className="icon-helper"><MdOutlineEmail /></span>
              </a>
            </li>


        </ul>
    </nav>
  );
}

export default DropMenu;


