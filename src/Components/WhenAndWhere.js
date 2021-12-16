import React from "react";
import "./WhenAndWhere.css";
import cathedralImg from "../Images/cathedral.png";
import oneGrandImg from "../Images/one_grand.jpeg";
import agathaImg from "../Images/agatha.jpeg";

function WhenAndWhere({ reference }) {
  return (
    <div className="when and where" id="when-and-where" ref={reference}>
      <div>
        <h1>The Wedding Ceremony</h1>
        <div className="article-info">
          <div className="img-container">
            <a href="https://goo.gl/maps/swd7uRzr8MHMd3Js9" target="_blank">
              <img src={cathedralImg} alt="Image of the church" />
            </a>
          </div>
          <div>
            <h2>
              <a href="https://goo.gl/maps/swd7uRzr8MHMd3Js9" target="_blank">
                Minor Basilica of Our Lady of Immaculate Conception City of
                Malolos
              </a>
            </h2>
            <h3>3:30 - 4:30 PM</h3>
            <p>
              The Malolos Cathedral, also known as the Minor Basilica of Our
              Lady of Immaculate Conception (Spanish: Basilica Menor de Nuestra
              Señora de la Inmaculada Concepción), is a historical church in the
              Philippines located in city of Malolos, the capital of the
              province of Bulacan.
            </p>
          </div>
        </div>
        <hr />
        <h1>The Wedding Reception</h1>
        <div className="article-info">
          <div className="img-container">
            <a href="https://goo.gl/maps/tS9oT6KbtT5dtmes8" target="_blank">
              <img
                src={oneGrandImg}
                alt="Image of the wedding reception location"
              />
            </a>
          </div>
          <div>
            <h2>
              <a href="https://goo.gl/maps/tS9oT6KbtT5dtmes8" target="_blank">
                The Catalina Banquet Hall of One Grand Pavilion Events Place
              </a>
            </h2>
            <h3>5:00 - 8:00 PM</h3>
            <p>
              The Catalina Banquet Hall is the newest and the biggest hall of
              One Grand Pavilion Events Place that can accommodate up to 450 pax
              or maximum of 120 pax of 30% venue capacity.
            </p>
            <p>
              One Grand Pavilion is located at Blas Ople Diversion Road,
              Barangay Bulihan, City of Malolos, Bulacan
            </p>
          </div>
        </div>
        <hr />
        <h1>The Wedding Preparation</h1>
        <div className="article-info">
          <div className="img-container">
            <a href="https://goo.gl/maps/zEMYsRKjCju9zaVG6" target="_blank">
              <img
                src={agathaImg}
                alt="Image of the wedding preparation location"
              />
            </a>
          </div>
          <div>
            <h2>
              <a href="https://goo.gl/maps/zEMYsRKjCju9zaVG6" target="_blank">
                St. Agatha Resort & Country Club
              </a>
            </h2>
            <h3>6:00 AM - 2:00 PM</h3>
            <p>
              The ambiance of St. Agatha Resort is reflected in every guestroom.
              air conditioning, desk, balcony/terrace, telephone, television are
              just some of the facilities that can be found throughout the
              property. Besides, the hotel's host of recreational offerings
              ensures you have plenty to do during your stay. Superb facilities
              and an excellent location make the St. Agatha Resort the perfect
              base from which to enjoy your stay in Bulacan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhenAndWhere;
