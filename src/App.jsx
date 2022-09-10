import React from "react";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import { useState } from "react";
import Menu from "./Menu";

function App() {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed((prevState) => !prevState);
  };
  return (
    <div className="w-sreen h-screen">
      <Menu menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <div className="flex flex-col w-screen h-screen pt-10 px-8 sm:px-14 md:px-16 lg:px-24 xl:px-48 overflow-hidden">
        <Navbar menuClosed={menuClosed} toggleMenu={toggleMenu} />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
