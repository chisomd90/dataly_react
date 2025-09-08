import React from 'react';
import Button from "./Button";
import { cardContents } from './data';

const Products = () => {
  return (
    <div className='w-full py-[10rem] px-2 bg-white'>
      <div className='layout grid md:grid-cols-3 gap-8'>
        {
          cardContents.map((card)=> {
            return (
              <div
                key={card.id}
                className={`${card.cardBg} shadow-lg w-full p-13 rounded-lg hover:scale-105 duration-300`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 mx-auto mt-[-3rem]"
                />
                <h1 className="text-center text-3xl my-4 font-bold">
                  {card.title}
                </h1>
                <p className="text-center text-4xl my-6 font-bold">
                  {card.price}
                </p>
                <p className="text-center my-4 font-semibold">
                  {card.Storage} GB Storage
                </p>
                <hr className="text-gray-400" />
                <p className="text-center my-4 font-semibold">
                  {card.user} Granted user
                </p>
                <hr className="text-gray-400" />
                <p className="text-center my-4 font-semibold">
                  Send up to {card.gig} GB
                </p>
                <Button
                  content={"Start Trial"}
                  type={"button"}
                  className={"bg-green-400 hover:bg-green-600 block mx-auto"}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Products