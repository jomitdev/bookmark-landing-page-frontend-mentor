import React from "react";

const Feature = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.selected && (
        <div className="flex flex-col nav:flex-row nav:items-center space-y-16 mt-12">
          <img
            className="mx-auto nav:w-1/2 nav:max-w-[478px]"
            src={data.image}
            alt={data.headline}
          />

          <div className="max-w-[550px] mx-auto space-y-4 text-center nav:text-left nav:pl-16">
            <h2 className="text-4xl font-medium text-veryDarkBlue">
              {data.title}
            </h2>
            <p className="text-lg text-grayishBlue">{data.content}</p>
            <button className="hidden nav:block bg-softBlue border-2 border-softBlue px-5 py-3 rounded-md shadow-lg text-[15px] text-white font-medium hover:bg-transparent hover:text-softBlue">
              More Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
