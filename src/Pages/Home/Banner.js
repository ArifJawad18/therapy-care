import React from "react";
import img from "../Home/Home/img.png";

const Banner = () => {
  return (
    <div>
      <section className=" dark:text-dark">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
          >
            <img
              src={img}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl ">
                Dr: Jane Aitken Professional Physiotherapist
              </h3>
              <p>She is providing high quality Physiotherapy Services</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Banner;
