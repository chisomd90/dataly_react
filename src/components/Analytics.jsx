import React from "react";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-2">
      <div className="layout grid md:grid-cols-2 gap-5">
        <img
          src="https://dataly-nine.vercel.app/assets/laptop-BkUviYdN.jpg"
          alt="analytics image"
          className="h-full w-full my-4 mx-auto"
        />
        <div className="flex flex-col justify-center">
          <p className="text-green-400">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">Manange Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in a,
            officiis voluptatibus totam sit excepturi amet fugit molestias
            placeat sequi necessitatibus tenetur expedita laboriosam eveniet
            unde nesciunt ad nulla, voluptas reprehenderit maiores? Labore
            aliquam debitis tempora ipsum est, non et voluptatibus quibusdam
            enim dolorum, cum iste voluptate id doloribus!
          </p>
          <button className="bg-black text-green-400 mx-0 w-[200px] py-3 rounded-md font-medium my-6 hover:bg-green-600 hover:text-white cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
