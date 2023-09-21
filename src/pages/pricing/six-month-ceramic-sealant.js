import * as React from "react";
import PageLayout from "../../components/PageLayout";
import PriceContent from "../../components/PriceContent";
import "../../styles/pricing.css";
import JSONData from "../../../static/prices_data/six_month_ceramic_sealant.json";

const PricingPage = () => {

  const pageTitle = "6-Month Ceramic Sealant Prices";
  const contentDescription = "Our 6-Month Ceramic Sealant Prices";
  const canonicalLink = "https://steviesdetails.com/pricing/six-month-ceramic-sealant";

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
