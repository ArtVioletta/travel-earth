import React from 'react';
import './App.css';
import FirstPage from "./components/FirstPage/FirstPage";
import {ContextProvider} from "./components/FirstPage/Context";
import './components/FirstPage/FirstPage.css'
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FifthPage from "./components/FifthPage/FifthPage";
import FourPage from "./components/FourPage/FourPage";


function App() {
  return (
   <ContextProvider>
     <FirstPage/>
     <SecondPage/>
     <ThirdPage/>
     <FourPage/>
     <FifthPage/>
   </ContextProvider>
  );
}

export default App;
