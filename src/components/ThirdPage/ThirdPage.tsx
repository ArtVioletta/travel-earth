import React from 'react';
import './ThirdPage.css';

const ThirdPage = () => {
  return (
    <div className={"page"}  id={'about'}>
      <h1 className={"sectionTitle"}>About</h1>
      <h2 className={"sectionSubtitle"}>Only one dream</h2>
      <div className={"content"}>
        <div className={"textWrapper"}>
          <p className={'textAbout'}>
            The problem with many amateur travel photographs is lack of concept.
            Shooting, when the camera scribbles like a machine gun, is called motor shooting by professionals.
            On the flash drive there is a ton of the same type of pictures, from which, sometimes, you can’t make out what kind of country or city it is.
          </p>
          <p className={'textAbout'}>
            Take your time to shoot everything around, look around and find the plot.
            Below, for example, is a shot by Nikon Ambassador Daniil Korzhonov, who owes his appearance to the attentiveness of the photographer.
          </p>
        </div>
        <div>
          <img className={"Photo"} src={"https://www.pendaphototours.com/wp-content/uploads/2018/01/camera-1769414_1920.jpg"} alt={""}/>
        </div>
    </div>
    </div>
  );
};

export default ThirdPage;