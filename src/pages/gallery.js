import * as React from "react";
import PageLayout from "../components/PageLayout";
import ComingSoon from "../components/ComingSoon";

const GalleryPage = () => {

  const pageTitle = "Gallery";
  const contentDescription = "Gallery";
  const canonicalLink = "https://steviesdetails.com/gallery";

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

export default GalleryPage;
