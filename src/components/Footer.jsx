import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black  md:p-15">
      <div className="text-[#d1d5db] max-w-[1240px] container mx-auto px-6 py-20 my- flex-col flex md:flex-row md:justify-between">
        <div className="mb-10">
          <h1 className="text-green-400 text-3xl font-bold mb-2 p-2">
            DATALY.
          </h1>
          <p className="p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Id
            odit ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
        </div>
        <div className="flex p-3 flex-row w-full md:gap-6 md:w-[700px] justify-between">
          <div>
            <p className="text-gray-400 mb-3">Solutions</p>
            <div className="flex flex-col gap-3">
              <a href="" className="hover:text-white">
                Analytics
              </a>
              <a href="" className="hover:text-white">
                Commerse
              </a>
              <a href="" className="hover:text-white">
                Marketing
              </a>
              <a href="" className="hover:text-white">
                Insight
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Support</p>
            <div className="flex flex-col gap-3">
              <a href="" className="hover:text-white">
                Pricing
              </a>
              <a href="" className="hover:text-white">
                Documentation
              </a>
              <a href="" className="hover:text-white">
                Guides
              </a>
              <a href="" className="hover:text-white">
                Api Status
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Company</p>
            <div className="flex flex-col gap-3">
              <a href="" className="hover:text-white">
                About
              </a>
              <a href="" className="hover:text-white">
                Jobs
              </a>
              <a href="" className="hover:text-white">
                Blogs
              </a>
              <a href="" className="hover:text-white">
                Press
              </a>
              <a href="" className="hover:text-white">
                Careers
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-400 mb-3">Legal</p>
            <div className="flex flex-col gap-3">
              <a href="" className="hover:text-white">
                Claim
              </a>
              <a href="" className="hover:text-white">
                Policy
              </a>
              <a href="" className="hover:text-white">
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