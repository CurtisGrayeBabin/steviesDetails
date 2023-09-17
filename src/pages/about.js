import * as React from "react";
import PageLayout from "../components/PageLayout";
import ComingSoon from "../components/ComingSoon";

const AboutPage = () => {

  const pageTitle = "About";
  const contentDescription = "About Us";
  const canonicalLink = "https://steviesdetails.com/about";

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

export default AboutPage;
