import * as React from "react";
import PageLayout from "../components/PageLayout";
import ComingSoon from "../components/ComingSoon";

const PricingPage = () => {

  const pageTitle = "Pricing";
  const contentDescription = "Our Prices";
  const canonicalLink = "https://steviesdetails.com/pricing";

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
      
        <h1>{contentDescription}</h1>

        <ComingSoon />

    </PageLayout>
  );
};

export default PricingPage;
