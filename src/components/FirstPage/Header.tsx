import React from 'react';
import {Context} from "./Context";
// @ts-ignore
import { HashLink } from 'react-router-hash-link';
import {Logo} from "./Logo";
import Support from "./Support";

export const Header = () => {
  const {selectedHashLink, setSelectedHasLink} = React.useContext(Context)
  return (
    <div className={"header"}>
      <Logo/>
      <nav className={"navigation"}>
        <HashLink to="#home" className={"nav-element" } onClick={() => setSelectedHasLink('home')}>Home</HashLink>
        <HashLink to="#where are we going"  className={"nav-element"} onClick={() => setSelectedHasLink('where are we going')}>Where are we going</HashLink>
        <HashLink to="#about"  className={"nav-element"} onClick={() => setSelectedHasLink('about')}>About</HashLink>
        <HashLink to="#next country" className={"nav-element"} onClick={() => setSelectedHasLink('next country')} >Next country</HashLink>
        <HashLink to="#contacts" className={"nav-element"} onClick={() => setSelectedHasLink('contacts')} >Contacts</HashLink>
      </nav>
      <div>
      <Support/>
      </div>
    </div>
  );
};

