import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import weddingLogo from "../Images/wedding_logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <img src={weddingLogo} />
        <h1>We can't wait to see you!</h1>
        <p>Please let us know if you'll be able to make it.</p>
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--outline"
          onClick="/rsvp"
        >
          RSVP
        </Button>
      </div>
    </div>
  );
}

export default Footer;
