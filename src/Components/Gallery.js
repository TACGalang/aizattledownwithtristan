import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery({ reference }) {
  let data = [
    {
      id: 1,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272253585_5640897105927282_7855545018235442301_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=XaJXhpOiuEcAX9QSjwx&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT_GAqRCNw6Vc5-4G2pevJI1iYn536T8sAPk3yUb-KzOMA&oe=61F118C6",
    },
    {
      id: 2,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272352257_5640896162594043_8507557215647674318_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=yDDse6xN-RoAX_xvOEg&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT-dUsnrzv-9lEI24B1j8Fm4sti6yN-cX88pTT5iTA_7_A&oe=61F27929",
    },
    {
      id: 3,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272402750_5640895312594128_1073339143999829744_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=UTaax54lMtwAX8xgiMR&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8HORHuMFoe-HdskaJnxct87ocGxTiGc8yIdfimJROzsQ&oe=61F1A968",
    },
    {
      id: 4,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272130145_5640895205927472_6532006859328037519_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=_7_oGWDKgt4AX9zZG5M&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT9SXPXqcmSAIoLNvtR3T6FGKH1wXcT_qhGvWbWCFbZMjQ&oe=61F13B02",
    },
    {
      id: 5,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272251348_5640895055927487_7985810596977852607_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=p1nt7LdfmEwAX8uQymK&_nc_oc=AQnnus-kFYuUOpwFN9rRLoqpPRZG4yV3k9CiAWq96RTA0uoHfA92tmeUaGdEvK4w-1Y&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT9xAZYd-kFHyEY4dTk4YWilb68HJt0xutphfRgJ3xrU2g&oe=61F27FA4",
    },
    {
      id: 6,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272158885_5640895032594156_4853457318960926018_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=mbQ5RIzmmVoAX_jFK6o&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT998-S4Dd7AK47AW0yyNrhpXw2zXVJW8n5Soh0YnkKuDQ&oe=61F0FB63",
    },
    {
      id: 7,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272410736_5640894975927495_3066168268146679538_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=aMyrdQxqp3EAX-m3UbS&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT9zcniil7KrQJYAdP74tskK0vFQ43iWdWn5Aeq7qjHXLQ&oe=61F52868",
    },
    {
      id: 8,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272421066_5640894899260836_9036308002414213470_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=cFx2Ufi1of0AX_jMKcb&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8lLkO5mmKLS0IufuG0G2ocbCam-INgVZu78P5rWakIjw&oe=61F4ADA9",
    },
    {
      id: 28,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272578341_5640895445927448_4983551094147855438_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=DsDlhoXfhuAAX_ER9js&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT9_ihLoTHHztjpd73Z1pkZ92I_XyAwQM9tS_6td50Uw4g&oe=61F4F6F5",
    },
    {
      id: 29,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272232322_5640894835927509_6467000590190449340_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=XEgfjIrzDOMAX9zUtTW&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT--T6XdOwjTmcfWjGcegBG9vXQWMDjTvBFePERNKi3rmQ&oe=61F591CD",
    },
    {
      id: 30,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272402750_5640895235927469_6630964768979457269_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=Z6lmATw0Pk8AX_c7MGf&_nc_oc=AQnlaQheXXiw_7V3gjBbhNL2IhX7Dugo-Q2I_MRzrW2B_uFXO1TiKyoRlWUfiit0Hvc&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8cnw_UQZS_LAjLD8jAFrZaqw7n7JinftrADcViIF3rhw&oe=61F476FC",
    },
    {
      id: 9,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272135002_5640894872594172_917483940681268423_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=7REneuIj0UsAX-j0JMP&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT9FeHfQ07jQerdmjDZE-WGTNUSl-EvwUMrIrQoE4TXnRA&oe=61F4D350",
    },
    {
      id: 10,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272211513_5640896945927298_8068261098299236918_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=8D6RUTZhCGEAX9JTmCx&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT9gbt4dDcsRfQlNsiTh4yfak-maRO8_qo68P-0hmW3npQ&oe=61F5341C",
    },
    {
      id: 11,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272334944_5640896885927304_4741970693308129741_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=EBoF2gjtGMEAX_K3lNo&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT8gdCq-pDaQA6uUNFXtv-AoNPTpsivQ6Jfu11L4YyZ7Zg&oe=61F50AEE",
    },
    {
      id: 12,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272402210_5640896802593979_5421224992778974811_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=ycmrhhMqWGAAX_PnZn2&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-ALZdfA1mHmvxkS0VBelmB3Uo9d4WnFF55i3gVF0Colw&oe=61F48B59",
    },
    {
      id: 13,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272120311_5640896652593994_2509281239850493793_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=s7OK1RGvBfcAX8qAKAl&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT-EPa87mDxfcfLw7uXdV6IsjfZd5jpT57vxJI6qY0qdZQ&oe=61F4205F",
    },
    {
      id: 14,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272396358_5640896625927330_3270649226687562895_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=oyrZmPGB-KIAX83rIiw&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT8SK9F59HqX6RkvAmofBO-qpKm_bSfBh-E6Br6XBMvGyw&oe=61F57192",
    },
    {
      id: 15,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272331274_5640896512594008_1047438154284252961_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=ixGPdNOi-dMAX8eSryg&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-aLIrcaW-NV6mGcqFZBCFrbbAehR9EzqSp5QH1AO0vSQ&oe=61F4552C",
    },
    {
      id: 16,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272423569_5640896415927351_1666057512057048423_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=nRKoLMOVryYAX9JF-kI&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT_Bn6X3cp0BVhkOW2_WSpy65oc5PrnS3bgDBTGuCNIafQ&oe=61F4416A",
    },
    {
      id: 17,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272336362_5640896345927358_5506309326001195539_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=q1faW1n3dLkAX9_YK8Z&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT_cDBrBetB8pTRxAnkbRk12X58sVUHU-CYcDLEwR-4Dgg&oe=61F3F443",
    },
    {
      id: 18,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272211747_5640896315927361_583997780089031827_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=-p-ZwNORuNAAX9xbNsp&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT93h87lKZrcbpRMJutrN-71IoywuuT7JnzQUwh_tSf6WQ&oe=61F4BDD9",
    },
    {
      id: 19,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272251206_5640896189260707_7439027067207091663_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=Jr0iLCunnmcAX-e4mbl&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT_9olwfokVoaCXqg8rmTmSwLA8mcxwsi72UhNfGzvMVFw&oe=61F49269",
    },
    {
      id: 20,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272331274_5640896075927385_7453160349395201982_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=DfDmu80bUjsAX-nJ2-Q&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-k_wsZXnbHGRt4zCuDHHcnrvCmKiZm7Ub7R2Ra5faZGw&oe=61F4F486",
    },
    {
      id: 21,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272366610_5640896019260724_3244080606325827841_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=R56lWL0EB5EAX-fLnxH&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-cpo6jna0aDZxfvUXYwyYxu81wvhw_UCXh98gQwVc_YQ&oe=61F47748",
    },
    {
      id: 22,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272172054_5640895895927403_5785607978749246621_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=b-NnitIl1IUAX-GWHBI&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-A_-MJCxOZqWBhGDrge56Xz07XsFYVRVUkUf9hJrB5TQ&oe=61F509DB",
    },
    {
      id: 23,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272478862_5640895842594075_3355734265500744035_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=zaKfK5Ktf7UAX_vsBds&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT9VjIKAkBLQ2S0Q0rqzsyVplm99MXGwDqMyqo6abP1EqQ&oe=61F42FA3",
    },
    {
      id: 24,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272189732_5640895759260750_5046001826642888984_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=-xyt3DJ-xQoAX_z2WUg&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT_U8VSHkeszdIzHzmsYIF48uNYkcalaxrYcAFZup7TZ-A&oe=61F4CBD7",
    },
    {
      id: 25,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272320846_5640895689260757_4251432666199814137_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=SN7AhFoDIgIAX_GBt70&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT_xO0VN5E61n8IScHJifoCPcRE7KS7e8SBcSrUJjz11HA&oe=61F5090C",
    },
    {
      id: 26,
      imgSrc:
        "https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/272336991_5640895582594101_3166967833795156100_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=Ghf0qt8MX_0AX9HUePw&tn=mwe0VoCs_SI9sUly&_nc_ht=scontent.fmnl30-2.fna&oh=00_AT_KEWhMDzZCFuBzx_8t6gd3MWKGgdvoPl__xw-D_WvFBQ&oe=61F54018",
    },
    {
      id: 27,
      imgSrc:
        "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/272447853_5640895535927439_6060150143090640122_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=Rvj2IqM7G6YAX9ossSW&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-8aG8uzaTlPH4IsqA4LloOq3kK3MQy-DSieSnMHk0vsw&oe=61F583C0",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="gallery-container" ref={reference}>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <i className="fa fa-times" onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImage(item.imgSrc)}
            >
              <img src={item.imgSrc} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
