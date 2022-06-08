import "./style.css";
import Gallery from "../Gallery";
import ReferenceBase from "src/Module/ReferenceInterface";

const OurStory: React.FC<ReferenceBase> = ({ reference }) => {
  return (
    <div className="our-story" id="our-story" ref={reference}>
      <div className="our-story-container-bg">
        <div className="our-story-container">
          <h1>Welcome to Our Wedding</h1>
          <q>I have found the one whom my soul loves. - Song of Solomon 3:4</q>

          <p>
            Our love story started 2 years ago in a simple <b>swipe right</b>.
            It was way back in 2019 when we both discovered the “Facebook
            Dating” app. That time alam namin sa isa't isa na we use that app,
            just to have fun, to make friends, but katulad nga ng ilang real
            love story, that dating app became our bridge to our{" "}
            <b>love story</b>. After we matched, we continued to chat to get to
            know each other at kung bakit kami parehas nasa dating app, until we
            found out na parehas pala kaming heartbroken because of our past
            relationships. Eventually, after exchanging messages and calls, for
            the first time nagkita kami sa Coffee shop sa isang Mall sa Malolos.
            Our first met went well hanggang sa we saw each other a couple more
            times.
          </p>

          <p>
            <b>May 19, 2019. We`re officially in a relationship</b>. We share it
            with our families and we`re glad they are happy for us. Kaming
            dalawa ay nanggaling sa isang long-term relationship even though,
            mayroon pa din ups and downs and syempre hindi maiiwasan na sa una,
            we both have fears and doubts sa heartbreaks.
          </p>

          <p>
            <b>August 2019. Moving together</b>, We decided to live together as
            we both have work in Manila, syempre with the blessings and trust of
            our families. Pero bakit nga ba namin pinili ang live in
            relationship? We both know others may not agree especially sa
            culture that we had as Filipinos, but since Tristan and I are not
            getting any younger, we wanted to know more about each other in a
            short period of time. Madami kaming natutunan sa pagsasama namin sa
            Manila, like natuto si Tristan sa household chores{" "}
            <i>(haha kidding aside)</i>, we learn how to be patient,
            understanding, respect and more importantly trust each other, as a
            matter of fact, kasal na lang talaga ang kulang.
          </p>

          <p>
            <b>March 2020. Pandemic strike</b>, We both know na lahat tayo ay
            naapektuhan ng pandemic, at kasama na kami doon. In fact napilitan
            kaming umuwi ng Bulacan for our safety. May plano na din kami
            magpakasal that year pero we decided na ipagpaliban na lang muna.
          </p>

          <p>
            <b>February 2021. The engagement</b>, Aiza and I decided to pursue
            our wedding this 2021 without her knowing that I already prepared
            the plan to propose to her. The d-day comes February 14th valentines
            day, it was a mixed plan and miracle for us. But all I can say it
            was a lovely evening. Here is the{" "}
            <a
              href="https://www.facebook.com/swiftySane/videos/4536439713039699"
              target="_blank"
            >
              video
            </a>{" "}
            of our engagement.
          </p>

          <p>
            <b>May 2021. We got an outbreak</b>, you heard it right, almost all
            of us included our parents got infected by COVID-19. We nearly delay
            the wedding again, but with the help of God, our relatives and
            friends we stayed strong and overcome this crisis to our family.
          </p>

          <p>
            <b>June 2021. The deciding factor</b>, after all that happened to
            us, Tristan and I need to decide whether it will be a civil or a
            church wedding, given that we already used up all of our savings
            when we got infected.
            <i>
              {" "}
              In <b>God's</b> plan, he provided Tristan an opportunity to save
              up and to pursue our church wedding within a 6 months plan. This
              was a truly miracle for us, knowing that{" "}
              <b>God has always been the center of our relationship.</b>
            </i>
          </p>

          <p>
            <b>
              This upcoming February 25, 2022, we invite you to be a part of our
              special day as Tristan and I begin our new life together.
            </b>
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default OurStory;
