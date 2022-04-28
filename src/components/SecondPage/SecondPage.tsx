import React from 'react';
import './SecondPage.css'
import {CardTravels} from "./CardTravels";


export interface CardItem{
  id?:number
  date:string,
  people:string,
  nameCountry:string,
  img:string
  days:string
  content: string
}



const SecondPage = () => {
  const [showMore, setShowMore] = React.useState(false)

  const data:CardItem[] = [
    {id:1, days: "7 days", people: "13 people", nameCountry:"India", date: "31 april",
      content:"India is a huge country in South Asia with a diverse relief: " +
        "on its territory are located both the mountain peaks of the Himalayas and the coast of the Indian Ocean.",
    img:"https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg",
    },
    {id:2, days: "15 days", people: "3 people", nameCountry:"United Kingdom", date: "24 september",
      content:"United Kingdom an island nation in the northwest of Europe, consisting of England, Scotland, Wales and Northern Ireland.",
    img:"https://lestatus.ru/wp-content/uploads/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F-%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD.jpg",
    },
    {id:3, days: "3 days", people: "8 people", nameCountry:"Tanzania", date: "17 april",
      content:"Tanzania is a country in East Africa, famous for vast areas of virgin nature. " +
        "The Serengeti National Park is very popular with safari lovers.",
      img:"https://youimg1.tripcdn.com/target/100q0y000000m6ih3DFC1_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip",
    },
    {id:4, days: "20 days", people: "19 people", nameCountry:"Israel", date: "15 august",
      content:"Israel is a country in the Middle East off the eastern coast " +
        "of the Mediterranean Sea that Jews, Christians and Muslims consider the biblical Holy Land.",
      img:"https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/ierusalim-4.jpg",
    },
  ]

  const cardSee:CardItem[] = [
    {id:5, days: "3 days", people: "2 people", nameCountry:"Maldives", date: "7 july",
      content:"The Maldives is a nation of islands in the Indian Ocean, that spans across the equator.",
      img:"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4ab6ffd4-d6e6-11e8-9c20-5eb2e7b96a26.jpg?crop=2572%2C1715%2C0%2C0",
    },
    {id:6, days: "6 days", people: "4 people", nameCountry:"China", date: "8 december",
      content:"Here you can find meadows, deserts.To the east is the world financial center of Shanghai, whose silhouette is shaped by countless skyscrapers.",
      img:"https://joinup.by/media/2019/07/Kitaj-700x420.jpg",
    },
    {id:7, days: "12 days", people: "3 people", nameCountry:"Poland", date: "23 may",
      content:"Poland known for its medieval architecture and Jewish quarters.",
      img:"https://thetrustedtraveller.com/wp-content/uploads/2018/01/krakow-1665093_1280.jpg",
    },
    {id:8, days: "10 days", people: "8 people", nameCountry:"Italy", date: "26 june",
      content:"On the territory of the country's capital, Rome, is the state of the Vatican, as well as world-famous museums and ancient ruins.",
      img:"https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg",
    },

  ]
  return (
    <div>
        <div className={"secondSectionWrapper"}>
          <h1 className={'secondSectionTitle'} id={'where are we going'}>Where are we going?</h1>

        </div>
        <div className={"cardWrapper"} >
          {data.map(el=>
          <CardTravels
            date={el.date}
            key={el.id}
            img={el.img}
            days={el.days}
            people={el.people}
            nameCountry={el.nameCountry}
            content={el.content}
          />
          )}
          xs={'auto'} md={4}
          {showMore && cardSee.map(el=>
            <CardTravels
              date={el.date}
              key={el.id}
              img={el.img}
              days={el.days}
              people={el.people}
              nameCountry={el.nameCountry}
              content={el.content}
            />
          )}

       <button className={"buttonSee"} onClick={() => setShowMore(!showMore)}>See more countries</button>
    </div>
    </div>
  );
};

export default SecondPage;