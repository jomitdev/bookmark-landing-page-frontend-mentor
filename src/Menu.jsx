import React from "react";
import logoBookmarkDark from "./assets/logo-bookmark-dark.svg";
import closeIcon from "./assets/icon-close.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import facebookIcon from "./assets/icon-facebook.svg";

const Menu = ({ menuClosed, toggleMenu }) => {
  return (
    !menuClosed && (
      <div>
        <div className="bg-veryDarkBlue w-screen h-screen absolute opacity-95"></div>
        <div className="fixed w-screen h-screen px-8 py-10">
          <div className="flex justify-between mb-8">
            <img src={logoBookmarkDark} alt="" />
            <button onClick={toggleMenu}>
              <img src={closeIcon} alt="" />
            </button>
          </div>
          <div className="flex flex-col text-center space-y-4 text-white text-xl tracking-widest">
            <a href="#" className="py-3 border-t border-t-gray-500">
              FEATURES
            </a>
            <a href="#" className="py-3 border-t border-t-gray-500">
              PRICING
            </a>
            <a href="#" className="py-3 border-t border-t-gray-500">
              CONTACT
            </a>
            <div className="py-3 border-t border-t-gray-500">
              <button className="border-2 border-white rounded w-full py-2">
                LOGIN
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 w-full flex justify-center items-center space-x-10">
            <a href="">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="">
              <img src={twitterIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Menu;
