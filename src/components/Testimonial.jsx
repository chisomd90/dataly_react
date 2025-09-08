import React from "react";
import { testimonials } from "./data";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  //LOGIC
  const [index, setIndex] = useState(0);
  const { name, image, comments } = testimonials[index];
  //0,1,2,3,4 (testimonials.length -1)

  const checkNumber = (number) => {
    if (number > testimonials.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimonials.length - 1;
    }
    return number;
  };

  //INCREMENT LOGIC FOR THE BUTTON
  const handleIncrease = () => {
    setIndex(checkNumber(index + 1));
  };
  const handleDecrease = () => {
    setIndex(checkNumber(index - 1));
  };

  return (
    <div className="w-full bg-green-200">
      <div className="py-16 px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold py-9 text-green-900">
            Clients Testimonials
          </h1>
          <div>
            <img
              src={image}
              alt={name}
              className="rounded-full h-20 w-20 border-2 border-green-700 my-5 block mx-auto"
            />
            <p>{comments}</p>
            <div className="flex items-center justify-between gap-11">
              <button onClick={handleDecrease}>
                <FaArrowLeft size={30} />
              </button>
              <button onClick={handleIncrease}>
                <FaArrowRight size={30} />
              </button>
            </div>
            <h2 className="text-2xl font-bold py-2 text-green-900">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
