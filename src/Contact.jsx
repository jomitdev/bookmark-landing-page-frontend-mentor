import React from "react";
import * as EmailValidator from "email-validator";
import { useState } from "react";
import error from "./assets/icon-error.svg";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const checkEmail = (e) => {
    e.preventDefault();
    setEmailValid(EmailValidator.validate(email));
  };

  return (
    <div className="font-rubik bg-softBlue text-white text-center py-12 px-6">
      <p className="tracking-[0.3rem] text-sm mb-4">35,000+ ALREADY JOINED</p>
      <h1 className="text-2xl font-medium tracking-wide mb-6">
        Stay up-to-date with what we’re doing
      </h1>
      <form
        onSubmit={checkEmail}
        className="flex flex-col sm:flex-row justify-center space-y-4 space-x-0 sm:space-y-0 sm:space-x-4"
      >
        <div className="relative">
          <input
            type="text"
            className={`p-3 rounded-md outline-none border-2 border-white h-auto text-black w-full sm:w-80 ${
              !emailValid
                ? "border-softRed bg-[url('./assets/icon-error.svg')] bg-no-repeat bg-[center_right_1rem] rounded-b-none"
                : ""
            }`}
            value={email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {!emailValid && (
            <p className="w-full absolute bg-softRed rounded-b-md text-left text-sm pl-4 py-1">
              Whoops, make sure it’s an email
            </p>
          )}
        </div>
        <button className="bg-softRed border-2 border-softRed p-3 rounded-md shadow-lg text-[15px] text-white font-medium hover:bg-white sm:px-5 hover:text-softRed">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default Contact;
