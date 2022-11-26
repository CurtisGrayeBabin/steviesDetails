import * as React from "react";
import PageLayout from "../components/PageLayout";

const IndexPage = () => {

  const pageTitle = "Book";
  const contentDescription = "Book a Detail";
  const canonicalLink = "https://steviesdetails.com/Book";

  /*
  https://www.instagram.com/stevies_details/
  https://www.yelp.com/biz/stevie-s-details-santa-ana-2
  https://www.tiktok.com/@stevies_details
  steviesdetailsllc [at] gmail [dot] com
  */

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
      
    
        <h1>Book a Detail</h1>

    </PageLayout>
  );
};

export default IndexPage;
