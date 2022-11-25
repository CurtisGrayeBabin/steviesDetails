import * as React from "react";
import PageLayout from "../components/PageLayout";


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
    

    </PageLayout>
  );
};

export default IndexPage;
