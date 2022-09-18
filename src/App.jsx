import React from "react";
import Navbar from "./pages/Navbar";
import MainSection from "./pages/MainSection";
import { useState } from "react";
import Menu from "./pages/Menu";
import Features from "./pages/Features";
import Extensions from "./pages/Extensions";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed((prevState) => !prevState);
  };

  const scrollToSection = (event, section) => {
    event.preventDefault();

    section.scrollIntoView({ behavior: "smooth" });
    setMenuClosed(true);
  };

  return (
    <div className="w-sreen h-screen overflow-x-hidden">
      <Menu
        menuClosed={menuClosed}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />
      <div
        className={`flex flex-col w-screen nav:h-full pt-10 px-8 sm:px-14 md:px-16 lg:px-24 xl:px-48`}
      >
        <Navbar
          menuClosed={menuClosed}
          toggleMenu={toggleMenu}
          scrollToSection={scrollToSection}
        />
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
      <div className={`w-screen`}>
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;
