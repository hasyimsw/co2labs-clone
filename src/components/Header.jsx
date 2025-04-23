import React from "react";
import backdrop from "../assets/backdrop.png";
import { Link } from "react-router";

export default function Header({
  heroimg,
  title,
  description,
  isHome,
  isService,
}) {
  return (
    <header className="h-screen flex justify-between items-center lg:mb-0 mb-20">
      <div className="lg:ml-28 ml-10 w-full">
        <div className="lg:flex items-center justify-between box-border lg:w-2/3">
          <div className="lg:order-2 flex justify-end items-center ">
            <img
              src={heroimg}
              className="z-1 lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md"
            />
            <img
              src={backdrop}
              className="lg:w-[400px] sm:w-1/2 w-2/3 lg:absolute right-0"
            />
          </div>

          <div className="lg:w-2/3 lg:mr-0 mr-10 lg:order-1">
            {isService && <div class="com -mb-11 -ml-11"></div>}
            <h1 className="sm:text-5xl text-3xl sm:flex flex-col items-start">
              <div className="mb-4 text-5xl font-bold">{title}</div>
              {isHome && (
                <span className="font-orbitron font-bold sm:text-5xl text-3xl bg-secondary text-primary px-5">
                  Creativity
                </span>
              )}
            </h1>
            <h6 className="text-xl font-semibold my-3">{description}</h6>
            <div className="flex gap-8 items-center">
              {isHome ? (
                <div className="flex justify-start w-full">
                  <button className="bg-secondary cursor-pointer rounded-md py-2 px-4 font-medium shadow-custom-drop text-primary hover:scale-110 transition-all hover:shadow-secondary hover:shadow-md">
                    <Link to="https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0">
                      Get a free consult
                    </Link>
                  </button>
                </div>
              ) : (
                <div class="bg-black h-1 w-40"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
