import React from 'react';
import {Header} from "./Header";

const FirstPage = () => {
  return (
    <div className={'photo'} id={"Home"}>
      <Header/>
      <div className={'textWrapperFirstContainer'}>
          <p className={"travel"}>
            Travel across the land
          </p>
          <p className={"explore"}>
            Travel and explore the secret places of our planet Together with us you will get:positive emotions,
            unforgettable impressions, new people and photos.
            Everything you love so much! We are already waiting for you.
          </p>
          <button className={"go"}>
            Go
          </button>
      </div>
    </div>
  );
};

export default FirstPage;