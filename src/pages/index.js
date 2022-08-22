import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/global.css";

const IndexPage = () => {

  const pageTitle = "Stevie's Details | Home";
  const contentDescription = "The homepage of Stevie's Details";
  const canonicalLink = "https://steviesdetails.com";

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    

      {/* main content */}

      <div className="center">
        <StaticImage src="../images/smallLogo.png" alt="Stevie's Details logo" width={600} height={500} />
      </div>

      <h1 className="headline">
      Offering <span className="gold">quality details</span> at your convenience across <span className="gold">Orange County, California</span> ☀️😎🌴
      </h1>

        {/* 
        
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
        
        */}

      

    </PageLayout>
  );
};

export default IndexPage;
