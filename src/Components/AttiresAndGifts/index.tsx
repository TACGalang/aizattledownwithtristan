import "./style.css";
import ReferenceBase from "src/Module/ReferenceInterface";

import gentle1 from "../../Images/gentleman_1.jpeg";
import gentle2 from "../../Images/gentleman_2.jpeg";
import gentle3 from "../../Images/gentleman_3.jpeg";
import ladies1 from "../../Images/ladies_1.jpeg";
import ladies2 from "../../Images/ladies_2.jpeg";
import ladies3 from "../../Images/ladies_3.jpeg";

const AttiresAndGifts: React.FC<ReferenceBase> = ({ reference }) => {
  return (
    <div className="attires and gifts" id="attires-and-gift" ref={reference}>
      <div className="attires-container">
        <h1>Gift Ideas</h1>
        <p>
          With all that we have , we've been truly blessed. Your presence and
          prayers are all that we request. But if you desire to give,
          nonetheless, a <i>monetary gift</i> is one we suggest.
        </p>
      </div>
      <div className="attires-container">
        <h1>Guest's Attire</h1>
        <h2>Gentleman</h2>
        <h3>- Semi formal pants with coat or button down shirt</h3>
        <ul className="gentlemans-list">
          <li>
            <img src={gentle1} alt="" />
          </li>
          <li>
            <img src={gentle2} alt="" />
          </li>
          <li>
            <img src={gentle3} alt="" />
          </li>
        </ul>
      </div>
      <div className="attires-container">
        <h2>Ladies</h2>
        <h3>- Semi formal long or below the knee dress</h3>
        <ul className="gentlemans-list">
          <li>
            <img src={ladies1} alt="" />
          </li>
          <li>
            <img src={ladies2} alt="" />
          </li>
          <li>
            <img src={ladies3} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AttiresAndGifts;
