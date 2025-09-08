import React from 'react'
import Button from './Button';

const Hero = () => {
  return (
    <main className="h-[88vh] bg-black flex items-center justify-center">
      <div className="layout text-center">
        <h3 className="text-green-400 font-bold text-xl my-7">
          GROWING WITH DATA ANALYTICS
        </h3>
        <h1 className="text-white font-bold text-7xl mb-10">GROW WITH DATA.</h1>
        <h1 className="text-white font-bold text-4xl mb-6">
          Fast, Flexible Financing for{" "}
          <span className="text-gray-400">BTC</span>
        </h1>
        <p className="text-gray-400 font-bold text-3xl mb-6">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS <br />
          platforms
        </p>
        <Button content={"Get Started"} className={"bg-green-400"} />
      </div>
    </main>
  );
}

export default Hero