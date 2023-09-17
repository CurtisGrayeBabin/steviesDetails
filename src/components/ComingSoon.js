import * as React from "react";
import { Link } from "gatsby";

function ComingSoon() {

  return (
    <div className="center-container">
        <div className="column-container">
            <h2>Content Coming Soon</h2>
            <h3 className="block center-text"><Link to="/" id="coming-soon-home-link">Home</Link></h3>
        </div>
    </div>
  )
}

export default ComingSoon;