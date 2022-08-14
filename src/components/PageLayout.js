import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

// format of each page (not just Home page)
const Layout = ({ pageTitle, contentDescription, canonicalLink, children }) => {
  return (
    <>
      <title>{pageTitle}</title>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={contentDescription}
        />
        <link rel="canonical" href={canonicalLink} />
        <meta name="author" content="Stevie "></meta>
        <link
          rel="manifest"
          crossorigin="use-credentials"
          href="/manifest.webmanifest"
        />
      </Helmet>

      <Navbar />

      <main className="content">
        {children}
      </main>

      <footer className="layoutFooter footer">
        footer section
      </footer>
    </>
  );
};

export default Layout;
