import * as React from "react";
import PageLayout from "../components/PageLayout";
import ComingSoon from "../components/ComingSoon";

const BookPage = () => {

  const pageTitle = "Book";
  const contentDescription = "Book Us";
  const canonicalLink = "https://steviesdetails.com/book";

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

export default BookPage;
