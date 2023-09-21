import * as React from "react";
import PageLayout from "../../components/PageLayout";
import PriceContent from "../../components/PriceContent";
import "../../styles/pricing.css";
import JSONData from "../../../static/prices_data/mid_interior_detail.json";

const PricingPage = () => {

  const pageTitle = "Mid Interior Detail Prices";
  const contentDescription = "Our Mid Interior Detail Prices";
  const canonicalLink = "https://steviesdetails.com/pricing/mid-interior-detail";

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
