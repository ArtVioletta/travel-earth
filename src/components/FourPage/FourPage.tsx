import React from 'react';
import './FourPage.css'

const FourPage = () => {
  return (
    <div className={"strona"} id={"next country"}>
      <h1 className={"sectionTitle"}>Next country</h1>
      <h2 className={"sectionSubtitle"}>India</h2>
      <div className={"contentF"}>
        <div className={"textWrapper"}>
          <p className={"textFour"}>
            The history of the country has five millennia.
            The city of Varanasi is known as a place of pilgrimage
            for Hindus who bathe in the Ganges, while Rishikesh
            is known as a yoga center and starting point for hiking in the Himalayas.
          </p>
          <p className={"textFour"}>
            The Taj Mahal is a mausoleum-mosque located in Agra, India,
            on the banks of the Jumna River. The Taj Mahal is considered
            the best example of Mughal style architecture, which combines elements of Indian,
            Persian and Arabic architectural styles.
          </p>
        </div>
        <div style={{width: "100%"}}>
          <img className={"Photo"} src={"https://ychef.files.bbci.co.uk/976x549/p06jpjlp.jpg"} alt={'photo'}/>
        </div>
      </div>
    </div>
  );
};

export default FourPage;