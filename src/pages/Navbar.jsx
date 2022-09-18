import React from "react";
import bookmarkLogo from "../assets/logo-bookmark.svg";
import hamburger from "../assets/icon-hamburger.svg";

const Navbar = ({ menuClosed, toggleMenu, scrollToSection }) => {
  return (
    <nav className="flex justify-between items-center font-rubik mb-14 flex-initial">
      <img src={bookmarkLogo} className="min-w-[148px]" alt="Bookmark Logo" />
      {menuClosed && (
        <button className="nav:hidden" onClick={toggleMenu}>
          <img src={hamburger} alt="Menu" />
        </button>
      )}
      <div className="hidden nav:flex space-x-16 text-veryDarkBlue text-[14px] tracking-[0.1rem] items-center">
        <a
          href="#"
          className="hover:text-softRed transition-all duration-200"
          onClick={() =>
            scrollToSection(event, document.body.querySelector(".features"))
          }
        >
          FEATURES
        </a>
        <a
          href="#"
          className="hover:text-softRed transition-all duration-200"
          onClick={() =>
            scrollToSection(event, document.body.querySelector(".pricing"))
          }
        >
          PRICING
        </a>
        <a
          href="#"
          className="hover:text-softRed transition-all duration-200"
          onClick={() =>
            scrollToSection(event, document.body.querySelector(".contact"))
          }
        >
          CONTACT
        </a>
        <button className="bg-softRed px-10 py-3 rounded-md text-white shadow-lg hover:bg-transparent border-2 font-medium border-softRed hover:text-softRed">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
