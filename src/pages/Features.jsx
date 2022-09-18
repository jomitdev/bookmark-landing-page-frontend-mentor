import React from "react";
import { useState } from "react";
import Feature from "./components/Feature";
import data from "./features-data";

const Features = () => {
  const [featuresData, setFeaturesData] = useState(data);

  const sections = featuresData.map((feature, i) => (
    <div className="w-full" key={i}>
      <hr className="nav:hidden" />
      <button
        className={`text-center text-veryDarkBlue font-medium nav:text-base  text-lg w-full `}
        onClick={() => handleClick(i)}
      >
        <p
          className={`w-fit text-center mx-auto py-3 ${
            feature.selected ? "border-b-4 border-b-softRed" : ""
          }`}
        >
          {feature.headline}
        </p>
      </button>
      <hr className="nav:hidden" />
    </div>
  ));

  const handleClick = (i) => {
    setFeaturesData((prevData) => {
      return prevData.map((feature) => {
        return feature === prevData[i]
          ? { ...feature, selected: true }
          : { ...feature, selected: false };
      });
    });
  };

  const carousel = featuresData.map((feature, i) => (
    <Feature key={i} data={feature} />
  ));
  return (
    <div className="features font-rubik py-4 space-y-10">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl text-veryDarkBlue">
          Features
        </h2>
        <p className="sm:text-lg text-grayishBlue max-w-[550px] mx-auto">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="md:px-16 lg:px-48">
        <div className="flex flex-col nav:flex-row">{sections}</div>
        <hr className="" />
      </div>
      <div className="">{carousel}</div>
    </div>
  );
};

export default Features;
