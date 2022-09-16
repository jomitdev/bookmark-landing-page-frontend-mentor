import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import { useState } from "react";
import Menu from "./Menu";
import Features from "./Features";
import Extensions from "./Extensions";
import Faq from "./Faq";

function App() {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed((prevState) => !prevState);
  };
  return (
    <div className="w-sreen h-screen overflow-x-hidden">
      <Menu menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <div
        className={`flex flex-col w-screen nav:h-full pt-10 px-8 sm:px-14 md:px-16 lg:px-24 xl:px-48`}
      >
        <Navbar menuClosed={menuClosed} toggleMenu={toggleMenu} />
        <div className="flex-auto flex flex-col justify-center">
          <MainSection />
        </div>
      </div>
      <div
        className={`w-screen nav:h-full px-8 sm:px-14 md:px-16 lg:px-24 xl:px-48 mb-24 nav:mb-0`}
      >
        <Features />
      </div>
      <div
        className={`w-screen nav:h-full px-8 sm:px-14 md:px-16 lg:px-24 xl:px-48 pb-8 nav:pb-0`}
      >
        <Extensions />
      </div>
      <div
        className={`w-screen nav:h-full px-8 sm:px-14 md:px-16 lg:px-24 xl:px-48 pb-8 nav:pb-0`}
      >
        <Faq />
      </div>
    </div>
  );
}

export default App;
