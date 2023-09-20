import * as React from "react";
import PageLayout from "../../components/PageLayout";
import { Link } from "gatsby";
import "../../styles/pricing.css";
//import JSONData from "../../../static/prices_data/maintenance_detail.json";

const PricingPage = () => {

  const pageTitle = "Pricing";
  const contentDescription = "Our Prices";
  const canonicalLink = "https://steviesdetails.com/pricing";

  return (
    <PageLayout 
      pageTitle={pageTitle} 
      contentDescription={contentDescription} 
      canonicalLink={canonicalLink}>
      
      <div className="center-text">
        <h1>Select a link to view Prices:</h1>

        <Link 
          to="./maintenance-detail" 
          className="link" 
          >Maintenance Detail</Link>
      </div>

    </PageLayout>
  );
};

export default PricingPage;
