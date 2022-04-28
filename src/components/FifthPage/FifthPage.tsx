import React from 'react';
import './FifthPage.css';


const FifthPage = () => {
  return (
    <div className={"form"} id={"contacts"}>
      <h1 className={"sectionTitle"}>Contacts</h1>
      <div className={"style"}>
        <div className={"supportForm"}>
          <h3 style={{color: "#543024"}}>Fill out the form to join our team</h3>
          <div>
            <input className={"input"} type="text" name="Name" value={""} placeholder={"Name"}/>
            <input className={"input"} type="text" name="Email" value={""} placeholder={"Email"}/>
            <input className={"input"} type="text" name="Telefon" value={""} placeholder={"Telefon"}/>
            <button className={"need"}>I need it</button>
          </div>
          <div>
          </div>
        </div>
        <div className={"phoneWrapper"}>
          <img className={"telephoneLogo"} src={"/img/communications1.svg"} alt="img"/>
          <p className={"telephone"}>+7 (495) 234-43-65</p>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;