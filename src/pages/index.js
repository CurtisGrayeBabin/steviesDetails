import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";


import { useState, useEffect } from "react";

const IndexPage = () => {

  const pageTitle = "Stevie's Details | Home";
  const contentDescription = "The homepage of Stevie's Details";
  const canonicalLink = "https://steviesdetails.com";

  // cycle through car images in /images
  var [imageNumber, setImageNumber] = useState(6);
  const imageNumberMax = 24;

  var randomImageNumber = () => {
    let value = Math.floor(Math.random() * imageNumberMax);
    setImageNumber(value ? value : 1);
  }

  useEffect(() => {
    setInterval(randomImageNumber, 5000);
  }, []);
  


  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    

      {/* main content */}

      <div className="center">
        <StaticImage src="../images/smallLogo.png" alt="Stevie's Details logo" width={600} height={500} />
      </div>

      <h1 className="headline spacing">
      Offering <span className="gold">quality details</span> at your convenience across <span className="gold">Orange County, California</span> <span style={{"whiteSpace":"nowrap"}}>☀️😎🌴</span>
      </h1>

      {/* cycle through car images */}
      <div className="index-image-container">
          {/*<StaticImage src={`../images/image-${imageNumber}.jpeg`} alt="Car" width={900} />*/}
          <img src={`image-${imageNumber}.jpeg`} alt="Clean car" width={900} />
      </div>

      

      {/* todo
      <h2 className="center spacing">More <span className="gold">details</span> below👇</h2>
      */}


    </PageLayout>
  );
};

export default IndexPage;
