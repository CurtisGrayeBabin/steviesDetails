import * as React from "react";
import "../styles/global.css";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <title>Stevie's Details | Home</title>

      <main>
        <div className="center">
          <h1>Stevie's Details</h1>
          <StaticImage src="../images/smallLogo.png" alt="Stevie's Details logo" width={500} height={400} />
          <h2>Located in Orange County, California</h2>

          <h3>This site is under construction until ~ April, 2022</h3>

          <a href="https://www.instagram.com/stevies_details/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@stevies_details" target="_blank" rel="noreferrer">TikTok</a>
          <a href="mailto: steviesdetailsllc@gmail.com" target="_blank" rel="noreferrer">Email</a>
        </div>

      </main>
    </>
  )
}

export default IndexPage
