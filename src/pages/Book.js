import * as React from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "gatsby";

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

        <h2>Please book us directly through <Link to="../socials" className="">social media</Link> or on <a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-3" target="_">Yelp!</a></h2>
    </PageLayout>
  );
};

export default BookPage;
