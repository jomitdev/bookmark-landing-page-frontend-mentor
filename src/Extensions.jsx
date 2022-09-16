import React from "react";
import data from "./extensions-data";
import Extension from "./Extension";

const Extensions = () => {
  const cards = data.map((extensionData, i) => (
    <Extension key={i} data={extensionData} mg={`${i * 2}rem`} />
  ));
  return (
    <div className="h-full text-center font-rubik">
      <div className="space-y-6">
        <h2 className="pt-16 text-2xl sm:text-4xl font-medium text-veryDarkBlue">
          Download the extension
        </h2>
        <p className="text-base sm:text-lg mx-auto text-grayishBlue max-w-[550px]">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col h-auto nav:flex-row space-y-8 nav:space-y-0 nav:space-x-8 mt-12 nav:justify-center">
        {cards}
      </div>
    </div>
  );
};

export default Extensions;
