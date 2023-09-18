import * as React from "react";
import PageLayout from "../components/PageLayout";
import ComingSoon from "../components/ComingSoon";

const PricingPage = () => {

  const pageTitle = "Pricing";
  const contentDescription = "Our Prices";
  const canonicalLink = "https://steviesdetails.com/pricing";

  return (
    <PageLayout 
      pageTitle={pageTitle} 
      contentDescription={contentDescription} 
      canonicalLink={canonicalLink}>
      
        <h1>{contentDescription}</h1>

        <ComingSoon />

    </PageLayout>
  );
};

export default PricingPage;
