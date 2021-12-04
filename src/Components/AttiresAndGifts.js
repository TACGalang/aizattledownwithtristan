import React from "react";
import "./AttiresAndGifts.css";
import gentle1 from "../Images/gentleman_1.jpeg";
import gentle2 from "../Images/gentleman_2.jpeg";
import gentle3 from "../Images/gentleman_3.jpeg";
import ladies1 from "../Images/ladies_1.jpeg";
import ladies2 from "../Images/ladies_2.jpeg";
import ladies3 from "../Images/ladies_3.jpeg";

function AttiresAndGifts({ reference }) {
  return (
    <div className="attires and gifts" id="attires-and-gift" ref={reference}>
      <div className="attires-container">
        <h1>Gentleman’s Attire</h1>
        <h3>- Dress pants with coat or button down shirt</h3>
        <ul className="gentlemans-list">
          <li>
            <img src={gentle1} />
          </li>
          <li>
            <img src={gentle2} />
          </li>
          <li>
            <img src={gentle3} />
          </li>
        </ul>
      </div>
      <div className="attires-container">
        <h1>Ladies Attire</h1>
        <h3>- Long or Cocktail Dress</h3>
        <ul className="gentlemans-list">
          <li>
            <img src={ladies1} />
          </li>
          <li>
            <img src={ladies2} />
          </li>
          <li>
            <img src={ladies3} />
          </li>
        </ul>
      </div>
      <div className="attires-container">
        <h1>Gift Ideas</h1>
        <p>
          With all that we have , we've been truly blessed. Your presence and
          prayers are all that we request. But if you desire give, nonetheless,
          a monetary gift is one we request.
        </p>
      </div>
    </div>
  );
}

export default AttiresAndGifts;
