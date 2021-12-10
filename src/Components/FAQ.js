import React from "react";
import "./FAQ.css";
import weddingTimeline from "../Images/wedding_timeline.svg";

/* Bridesmaid */
import Entourage from "./Entourage";
import liezel from "../Images/liezel.jpg";
import mumay from "../Images/mumay.jpg";
import sheng from "../Images/sheng.jpg";
import darlene from "../Images/darlene.jpg";
import mae from "../Images/mae.jpg";
import princess from "../Images/princess.jpg";
import luz from "../Images/luz.jpg";

/* Groomsmen */
import alvin from "../Images/alvin.jpg";
import bigbog from "../Images/bigbog.jpg";
import kim from "../Images/kim.jpg";
import jay from "../Images/jay.jpg";
import jun from "../Images/jun.jpg";
import jepoy from "../Images/jepoy.jpg";
import jp from "../Images/jp.jpg";

/*Bearers & Flower Girls */
import yza from "../Images/yzabella.jpg";
import Kriszia from "../Images/kriszia.jpg";
import yzay from "../Images/ysay.jpg";
import mac from "../Images/mac.jpg";
import brando from "../Images/brando.jpg";
import omba from "../Images/omba.jpg";

function FAQ({ reference }) {
  return (
    <div className="faq container" id="faq" ref={reference}>
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
          your invitation for the allotted number of seat/s, and or please refer
          to the{" "}
          <a
            href="https://www.theknot.com/us/aiza-teodoro-and-tristan-galang-jan-2022-7c74913b-ec40-4889-8de0-ea1b353935b0/rsvp"
            target="_blank"
          >
            E-vite sent to you.
          </a>
        </p>
      </div>
      <div>
        <h1>Meet our bridal entourage</h1>
        <h2>Team Bridesmaids</h2>
        <div className="entourage-list">
          <Entourage
            imgSrc={liezel}
            name="Liezel Bicua"
            title="Maid of Honor"
          />
        </div>
        <div className="entourage-list">
          <Entourage imgSrc={mumay} name="Priscilla Teodoro" title="Cord" />
          <Entourage imgSrc={darlene} name="Darlene Galang" title="Veil" />
          <Entourage
            imgSrc={princess}
            name="Princess Lobarbio"
            title="Candle"
          />
        </div>
        <div className="entourage-list">
          <Entourage
            imgSrc={sheng}
            name="Cyrille Dela Rosa"
            title="Bridesmaid"
          />
          <Entourage imgSrc={mae} name="Rozen Mae Galang" title="Bridesmaid" />
          <Entourage imgSrc={luz} name="Ma. Luz Lustica" title="Bridesmaid" />
        </div>
        <hr />
        <h2>Team Groomsmen</h2>
        <div className="entourage-list">
          <Entourage imgSrc={alvin} name="Alvin Aquino" title="Best Man" />
        </div>
        <div className="entourage-list">
          <Entourage imgSrc={bigbog} name="Christian Salazar" title="Cord" />
          <Entourage imgSrc={kim} name="Kim Delos Santos" title="Veil" />
          <Entourage imgSrc={jay} name="Jay Anthony Lumba" title="Candle" />
        </div>
        <div className="entourage-list">
          <Entourage
            imgSrc={jun}
            name="Emmanuel Carcosia Jr."
            title="Groomsmen"
          />
          <Entourage
            imgSrc={jepoy}
            name="John Paul Dela Rosa"
            title="Groomsmen"
          />
          <Entourage
            imgSrc={jp}
            name="John Patrick Navarro"
            title="Groomsmen"
          />
        </div>
        <hr />
        <h2>Bearers & Flower Girls</h2>
        <div className="entourage-list">
          <Entourage imgSrc={omba} name="Calix Crespo" title="Coin" />
          <Entourage imgSrc={mac} name="Mark Teodoro" title="Ring" />
          <Entourage imgSrc={brando} name="Brenard Teodoro" title="Bible" />
        </div>
        <div className="entourage-list">
          <Entourage
            imgSrc={yzay}
            name="Ma. Luisa Teodoro"
            title="Flower Girl"
          />
          <Entourage
            imgSrc={Kriszia}
            name="Kriszia Nicodemus"
            title="Flower Girl"
          />
          <Entourage imgSrc={yza} name="Ysabella Roque" title="Flower Girl" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
