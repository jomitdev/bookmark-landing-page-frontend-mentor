import React from "react";
import screenImage from "./assets/illustration-hero.svg";

const MainSection = () => {
  return (
    <section className="flex nav:items-center flex-col nav:flex-row-reverse justify-between text-center sm:text-left text-veryDarkBlue font-rubik nav:flex-auto">
      <div className="nav:w-1/2">
        <img src={screenImage} alt="" />
        {/* <div className="w-full h-full absolute top-0 translate-x-12">
          <div className="bg-white w-full h-1/4 absolute top-0 right-0 z-[1]"></div>
          <div className="bg-softBlue w-screen h-3/4 absolute bottom-0 left-64 z-0"></div>
          <div className="bg-softBlue rounded-full w-[80%] h-full absolute bottom-0 left-0 z-0"></div>
        </div> */}
      </div>

      <div className="space-y-4 nav:max-w-[50%]">
        <h1 className="text-3xl font-medium sm:text-4xl lg:text-5xl nav:max-w-[450px]">
          A Simple Bookmark Manager
        </h1>
        <p className="text-grayishBlue sm:text-lg nav:max-w-[550px]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center nav:justify-start pb-7 space-x-4">
          <button className="bg-softBlue border-2 border-softBlue p-3 rounded-md shadow-lg text-[15px] text-white font-medium hover:bg-transparent hover:text-softBlue">
            Get it on Chrome
          </button>
          <button className="bg-gray-100 border-2 border-gray-100 p-3 rounded-md shadow-lg text-[15px] font-medium text-veryDarkBlue hover:bg-transparent hover:border-gray-600">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
