import * as React from "react";
import "../styles/global.css";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Stevie's Details | Home</title>
        <link rel="canonical" href="steviesdetails.com" />
      </Helmet>

      <main>
        <div className="center">
          <h1>Stevie's Details</h1>
          <StaticImage src="../images/smallLogo.png" alt="Stevie's Details logo" width={500} height={400} />
          <h2>Located in Orange County, California</h2>

          <h3>This site is under construction until ~ June, 2022</h3>


          <a href="https://www.instagram.com/stevies_details/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@stevies_details" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.yelp.com/biz/stevie-s-details-santa-ana-2" target="_blank" rel="noreferrer">Yelp</a>
          <a href="mailto: steviesdetailsllc@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>

      </main>
    </>
  )
}

export default IndexPage
