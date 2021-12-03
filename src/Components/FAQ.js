import React from "react";
import "./FAQ.css";
import weddingTimeline from "../Images/wedding_timeline.svg";

function FAQ() {
  return (
    <div className="faq container" id="faq">
      <div>
        <h1>What is the wedding timeline?</h1>
        <img src={weddingTimeline} className="timeline" />
      </div>
      <div>
        <h1>Can I bring a date or plus one?</h1>
        <p>
          As much as we would love to have everyone celebrate with us,
          unfortunately, we can only accommodate a limited numbers of guest due
          to venue restriction.
        </p>
        <p>
          <b>Our Coordinator will be strict. Not on the list, No Entry.</b>
        </p>
        <p>
          We request that only those who are invited to come. Please refer to
          your invitation for the allotted number of Seat/s, and or please refer
          to the E-vite sent to you.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
