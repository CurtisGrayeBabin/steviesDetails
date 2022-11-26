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
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
      
    
        <img src="/static-logo.png" id="homepage-logo" alt="Stevie's Details logo" className="center" />

        <h1 className="div center">
          Stevie’s Details (LLC)
        </h1>

        <h2 className="div center">
          <abbr title="Established">Est.</abbr> 2019
        </h2>

        <Link to="/Book" className="div center button-appearance" style={{"marginTop": "2rem"}}>Book a Detail</Link>
    
    </PageLayout>
  );
};

export default IndexPage;
