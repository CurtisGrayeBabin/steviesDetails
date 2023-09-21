import * as React from "react";
import PageLayout from "../../components/PageLayout";
import PriceContent from "../../components/PriceContent";
import "../../styles/pricing.css";
import JSONData from "../../../static/prices_data/one_step_paint_correction.json";

const PricingPage = () => {

  const pageTitle = "1-Step Paint Correction Prices";
  const contentDescription = "Our 1-Step Paint Correction Prices";
  const canonicalLink = "https://steviesdetails.com/pricing/one-step-paint-correction";

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
