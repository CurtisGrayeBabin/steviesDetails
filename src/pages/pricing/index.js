import * as React from "react";
import PageLayout from "../../components/PageLayout";
import { Link } from "gatsby";
import "../../styles/pricing.css";

const PricingPage = () => {

  const pageTitle = "Pricing";
  const contentDescription = "Our Prices";
  const canonicalLink = "https://steviesdetails.com/pricing";

  return (
    <PageLayout 
      pageTitle={pageTitle} 
      contentDescription={contentDescription} 
      canonicalLink={canonicalLink}>
      
      <div className="center-text">
        <h1>Select an Option to View Prices:</h1>

        <Link to="./maintenance-detail" className="link transition">Maintenance Detail</Link>
        <Link to="./platinum-detail" className="link transition">Platinum Detail</Link>
        <Link to="./level-1-interior-detail" className="link transition">Level 1 Interior Detail</Link>
        <Link to="./level-2-interior-detail" className="link transition">Level 2 Interior Detail</Link>
        <Link to="./one-step-paint-correction" className="link transition">1-Step Paint Correction</Link>
        <Link to="./two-step-paint-correction" className="link transition">2-Step Paint Correction</Link>
        <Link to="./six-month-ceramic-sealant" className="link transition">6-Month Ceramic Sealant</Link>
        <Link to="./three-year-ceramic-coating" className="link transition">3-Year Ceramic Coating</Link>
        <Link to="./five-year-ceramic-coating" className="link transition">5-Year Ceramic Coating</Link>
        <Link to="./seven-year-ceramic-coating" className="link transition">7-Year Ceramic Coating</Link>


      </div>

    </PageLayout>
  );
};

export default PricingPage;
