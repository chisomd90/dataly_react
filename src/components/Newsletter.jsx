import React from 'react'
import Button from './Button';

const Newsletter = () => {
  return (
    <main className=" flex items-center bg-black text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col justify-between gap-5 md:gap-20 md:flex-row">
        <div>
          <h2 className="text-4xl">
            Want tips & tricks to{" "}
            <span className="text-green-400 font-bold">optimize</span> your
            flow?
          </h2>
          <p className="mt-3">
            Sign up to our newsletter and stay up to date..
          </p>
        </div>
        <div>
          <form action="" className="">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-white text-gray-400 rounded-md w-[200px] p-3 font-medium mr-3 mb-5"
            />
            <Button
              content={"Notify Me"}
              className="bg-green-400"
              type={"button"}
            />
            <p className="mt-3">
              We care bout the protection of your data. Read our <br />{" "}
              <span className="text-green-400">Privacy Policy.</span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Newsletter