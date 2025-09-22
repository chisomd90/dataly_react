import React from "react";
import Button from "./Button";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <main className=" bg-black flex items-center justify-center p-1">
      <div className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-green-400 font-bold md:text-xl md:my-7">
          GROWING WITH DATA ANALYTICS
        </h3>
        <h1 className="text-white font-bold text-3xl my-4 md:text-7xl md:mb-10">
          GROW WITH DATA.
        </h1>
        <h1 className="text-white font-bold  text-xl md:text-4xl mb-5 md:mb-6 text-center">
          Fast, Flexible Financing for{" "}
          <span className="text-gray-400">
            <ReactTyped
              strings={["BTC", "B2B", "SAAS"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></ReactTyped>
          </span>
        </h1>
        <p className="text-gray-400 font-bold text-xl md:text-3xl mb-4 md:mb-6">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS{" "}
          <br className="hidden md:block" />
          platforms
        </p>
        <Button content={"Get Started"} className={"bg-green-400"} />
      </div>
    </main>
  );
};

export default Hero;
