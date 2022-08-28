import React from "react";
import "../styles/global.css";

import { SiInstagram } from "react-icons/si";
import { SiYelp } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

function SideMenu() {

  // window.onscroll = function () { window.scrollTo(0, 0); }

          /* 
        
          <div className="center">
            <h1>Stevie's Details</h1>
            <StaticImage src="../images/smallLogo.png" alt="Stevie's Details logo" width={500} height={400} />
            <h2>Located in Orange County, California</h2>

            <h3>This site is under construction until ~ August, 2022</h3>


            <a href="https://www.instagram.com/stevies_details/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@stevies_details" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-2" target="_blank" rel="noreferrer">Yelp</a>
            <a href="mailto: steviesdetailsllc@gmail.com" target="_blank" rel="noreferrer">Email</a>
          </div>
        
        */

  return (
    <nav aria-label="Side Menu Navigation" className="side-menu-content">
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

export default SideMenu;


