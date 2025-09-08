import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black md:h-[40vh] md:p-15">
      <div className="text-[#d1d5db] max-w-[1240px] mx-auto p-2 md:p-5 my- flex-col flex md:flex-row md:justify-between">
        <div className="mb-10">
          <h1 className="text-green-400 text-3xl font-bold mb-2 p-2">DATALY.</h1>
          <p className="p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Id
            odit ullam iste repellat consequatur libero reiciendis,
            blanditiis accusantium.
          </p>
        </div>
        <div className="flex p-3 flex-row w-full md:gap-6 md:w-[700px] justify-between">
          <div>
            <p className="text-gray-400 mb-3">Solutions</p>
            <div className="flex flex-col gap-3">
              <a href="">Analytics</a>
              <a href="">Commerse</a>
              <a href="">Marketing</a>
              <a href="">Insight</a>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Support</p>
            <div className="flex flex-col gap-3">
              <a href="">Pricing</a>
              <a href="">Documentation</a>
              <a href="">Guides</a>
              <a href="">Api Status</a>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Company</p>
            <div className="flex flex-col gap-3">
              <a href="">About</a>
              <a href="">Jobs</a>
              <a href="">Blogs</a>
              <a href="">Press</a>
              <a href="">Careers</a>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Legal</p>
            <div className="flex flex-col gap-3">
              <a href="">Claim</a>
              <a href="">Policy</a>
              <a href="" className="">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer