import React from "react";
import "./OurStory.css";

function OurStory({ reference }) {
  return (
    <div className="our-story" id="our-story" ref={reference}>
      <div>
        <h1>Welcome to Our Wedding</h1>
        <q>
          Who would have thought that love will find us in the most unexpected
          time?
        </q>

        <p>
          Our love story started 2 years ago in a simple swipe left and right.
          It was way back in 2019 when we both discovered “Facebook Dating”.
          After we matched, we continued to chat to get to know each other at
          kung bakit kami parehas nasa dating site. Until we found out na
          parehas pala kaming broken because of our past relationships.
          Eventually, after getting to know, exchanging messages and calls, for
          the first time nagkita kami sa isang Coffee Shop sa isang Mall sa
          Malolos. Our first met went well hanggang sa we saw each other a
          couple more times. Until May 19, 2019, we’re officially in a
          relationship. We share it with our families and we’re glad they’re
          happy for us. To be in a new relationship from a long-term
          relationship is not that easy for us, we both have fears and doubts of
          heartbreaks. August 2019, We decided to live together as we both have
          work in Manila, and with the blessings and trust of our families
          they've allowed us and as to figure out to ourselves if we are
          compatible and to test the strength of our relationship.
        </p>

        <p>
          People say “Love comes at the right time; the time you never thought
          it would have.”.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
