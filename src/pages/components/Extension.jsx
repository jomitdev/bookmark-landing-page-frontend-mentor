import React from "react";
import { useMediaQuery } from "react-responsive";

const Extension = ({ data, mg }) => {
  const isNotPhone = useMediaQuery({ query: "(min-width: 860px)" });
  const customMargin = isNotPhone
    ? {
        transform: `translateY(${mg})`,
      }
    : {};
  return (
    <div
      style={customMargin}
      className={`rounded-lg shadow-xl h-auto pt-12 pb-10 w-[300px] mx-auto nav:mx-0`}
    >
      <img className="mx-auto mb-8" src={data.image} alt="Image of Chrome" />
      <h3 className="text-xl font-medium text-veryDarkBlue mb-1">
        Add to {data.browser}
      </h3>
      <p className="text-sm text-grayishBlue bg-gradient-to-r">
        Minimum version {data.minVersion}
      </p>
      <div className="py-12 bg-[url(./assets/bg-dots.svg)] w-full h-1 bg-repeat-x bg-center"></div>
      <button className="bg-softBlue border-2 border-softBlue p-3 rounded-md shadow-lg text-[15px] text-white font-medium hover:bg-transparent hover:text-softBlue ">
        Add &#38; Install Extension
      </button>
    </div>
  );
};

export default Extension;
