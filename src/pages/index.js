import * as React from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "gatsby";

const IndexPage = () => {

  const pageTitle = "Home";
  const contentDescription = "The homepage of Stevie's Details";
  const canonicalLink = "https://steviesdetails.com";

  /*
  https://www.instagram.com/stevies_details/
  https://www.yelp.com/biz/stevie-s-details-santa-ana-2
  https://www.tiktok.com/@stevies_details
  steviesdetailsllc [at] gmail [dot] com
  */

  return (
    <PageLayout 
      pageTitle={pageTitle} 
      contentDescription={contentDescription} 
      canonicalLink={canonicalLink}>

      <div className="center-container">
        <img 
          src="/static-logo.png" 
          id="homepage-logo-img" 
          alt="Stevie's Details logo" 
          className="logo"  
        />
      </div>

      <h1 className="block center-text no-margin-top">
        Stevie’s Details (LLC)
      </h1>


      <h2 className="block center-text">
        <abbr title="Established">Est.</abbr> 2019
      </h2>

        <Link 
          to="/pricing" 
          id="homepage-pricing-button" 
          className="button-appearance transition" 
          >Our Pricing</Link>
    
    </PageLayout>
  );
};

export default IndexPage;
