import "./style.css";
import ReferenceBase from "src/Module/ReferenceInterface";
import weddingLogo from "../../Images/wedding_logo.png";
import Button, { ButtonSizes as Size, ButtonStyles as Style } from "../Button";

const Footer: React.FC<ReferenceBase> = ({ reference }) => {
  return (
    <div className="footer-container" ref={reference}>
      <div>
        <img src={weddingLogo} alt="" />
        <h1>We can't wait to see you!</h1>
        <p>Please let us know if you'll be able to make it.</p>
        <Button
          buttonSize={Size.btnLarge}
          buttonStyle={Style.btnOutline}
          onClick={() => "/rsvp"}
        >
          RSVP
        </Button>
      </div>
    </div>
  );
};

export default Footer;
