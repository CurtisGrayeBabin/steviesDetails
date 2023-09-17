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
        <title>Stevie's Details (LLC) | {pageTitle}</title>
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

      <div id="content-container">

        
        <Navbar />

        <main id="content" className="lr-padding">
          {children}
        </main>

        <footer>
          <div>
            Stevie's Details (LLC) | {new Date().getFullYear()}
          </div>
          <div>
            Site Developed by&nbsp;<a href="https://www.curtisbabin.com" target="_blank" rel="noreferrer" id="developer" className="transition" aria-label="Curtis Babin's website - opens in a new tab">Curtis Babin</a>
          </div>
        </footer>

      </div>

    </>
  );
};

export default Layout;
