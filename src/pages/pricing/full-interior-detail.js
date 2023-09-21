import * as React from "react";
import PageLayout from "../../components/PageLayout";
import PriceContent from "../../components/PriceContent";
import "../../styles/pricing.css";
import JSONData from "../../../static/prices_data/full_interior_detail.json";

const PricingPage = () => {

  const pageTitle = "Full Interior Detail Prices";
  const contentDescription = "Our Full Interior Detail Prices";
  const canonicalLink = "https://steviesdetails.com/pricing/full-interior-detail";

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
