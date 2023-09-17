import * as React from "react";
import { Link } from "gatsby";

function ComingSoon() {

  return (
    <div className="center-container">
        <div className="column-container">
            <div>Content Coming Soon</div>
            <div className="block center-text"><Link to="/">Home</Link></div>
        </div>
    </div>
  )
}

export default ComingSoon;