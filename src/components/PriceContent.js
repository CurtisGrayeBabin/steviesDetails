import * as React from "react";
import "../styles/pricing.css";

function PriceContent({ jsonData }) {

  return (
      <main>
        <div className="center-text">
            <h1>{jsonData.title}</h1>
            <p>{jsonData.notes}</p>
        </div>

            <table className="pricing-table">
                <caption>Prices</caption>
                <thead>
                    <tr>
                        <th scope="col">Vehicle</th>
                        <th scope="col">Starting Price</th>
                    </tr>
                </thead>
                <tbody>
                    {jsonData.prices.map((priceObj, index) => {
                        return (
                            <tr key={index}>
                                <td>{priceObj.text}</td>
                                <td className="second-col">${priceObj.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        {
            jsonData.details.map((detail, index) => {
                return (
                    <div key={`div_${index}`}>
                        <h2 key={`detail_${index}`}>{detail.header}</h2>
                        <ul key={`ul_${index}`}>
                            {
                                detail.bullets.map((bullet, index) => {
                                    return <li key={`bullet_${index}`}>{bullet}</li>
                                })
                            }
                        </ul>
                    </div>
                );
            })
        }
      </main>
  );
}

export default PriceContent;
