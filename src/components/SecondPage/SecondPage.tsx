import React from 'react';
import './SecondPage.css'
import {CardTravels} from "./CardTravels";
import {data} from "../../data/Data";
import {cardSee} from "../../data/CardSee";

const SecondPage = () => {
  const [showMore, setShowMore] = React.useState(false)

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
