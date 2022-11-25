import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import "../styles/global.css";

// format of each page (not just Home page)
const Layout = ({ pageTitle, contentDescription, canonicalLink, children }) => {
  return (
    <>
      <title>{pageTitle}</title>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Stevie's Details | {pageTitle}</title>
        <meta
          name="description"
          content={contentDescription}
        />
        <link rel="canonical" href={canonicalLink} />
        <meta name="author" content="Stevie"></meta>
        <link
          rel="manifest"
          crossorigin="use-credentials"
          href="/manifest.webmanifest"
        />
      </Helmet>

      <div className="content-container">

        <Navbar />

        <main className="content">
          {children}
        </main>

        <footer>
          Site developed by <a href="https://curtisbabin.com" target="_blank">Curtis Babin</a>
        </footer>

      </div>

    </>
  );
};

export default Layout;
