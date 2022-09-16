import React, { useState } from "react";
import Question from "./Question";
import faqData from "./faq-data";

const Faq = () => {
  const [data, setData] = useState(faqData);
  console.log("Fuckalsfasldfj", data);

  const toggleQuestion = (i) => {
    setData((prevData) => {
      return prevData.map((question) => {
        return question === data[i]
          ? { ...question, opened: !question.opened }
          : { ...question, opened: false };
      });
    });
  };

  const faqsEls = data.map((question, i) => (
    <Question
      key={i}
      question={question}
      opened={data[i].opened}
      toggleQuestion={() => toggleQuestion(i)}
    />
  ));

  return (
    <div className="flex flex-col justify-center items-center h-full font-rubik space-y-10">
      <div className="text-center space-y-6 mb-6">
        <h2 className="pt-16 text-2xl text-center sm:text-4xl font-medium text-veryDarkBlue">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg mx-auto text-grayishBlue max-w-[550px]">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="w-full sm:px-8 md:px-12 lg:px-24 xl:px-96 mx-auto">
        {faqsEls}
      </div>
      <button className="bg-softBlue border-2 border-softBlue px-5 py-3 rounded-md shadow-lg text-[15px] text-white font-medium hover:bg-transparent hover:text-softBlue">
        More Info
      </button>
    </div>
  );
};

export default Faq;
