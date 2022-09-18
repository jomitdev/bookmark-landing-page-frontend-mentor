import React from "react";
import arrow from "../../assets/icon-arrow.svg";
import arrowRed from "../../assets/icon-arrow-opened.svg";

const Question = ({ question, toggleQuestion, opened }) => {
  return (
    <div
      className={`py-4 border-t border-[#e5e7eb] ${
        question.id === 4 ? "border-b" : ""
      }`}
    >
      <button className="w-full" onClick={toggleQuestion}>
        <div className="flex items-center w-full">
          <h3 className="text-veryDarkBlue sm:text-xl hover:text-softRed transition-all w-full text-left">
            {question.question}
          </h3>

          {!opened ? (
            <img src={arrow} alt="Reveal Answer" />
          ) : (
            <img src={arrowRed} alt="Close Answer" className="rotate-180" />
          )}
        </div>
      </button>
      {opened && <p className="text-grayishBlue mt-4">{question.answer}</p>}
    </div>
  );
};

export default Question;
