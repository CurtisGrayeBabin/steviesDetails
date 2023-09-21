import * as React from "react";
import PageLayout from "../../components/PageLayout";
import PriceContent from "../../components/PriceContent";
import "../../styles/pricing.css";
import JSONData from "../../../static/prices_data/three_year_ceramic_coating.json";

const PricingPage = () => {

  const pageTitle = "3-Year Ceramic Coating Prices";
  const contentDescription = "Our 3-Year Ceramic Coating Prices";
  const canonicalLink = "https://steviesdetails.com/pricing/three-year-ceramic-coating";

  return (
    <PageLayout 
      pageTitle={pageTitle} 
      contentDescription={contentDescription} 
      canonicalLink={canonicalLink}>
      
      {/* Passing JSON data over to price content to display pricing content */}
      <PriceContent jsonData={JSONData} />

    </PageLayout>
  );
};

export default PricingPage;
