import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Navx";
import bultpay from "../../images/whitebulllogo.png";


function Activate() {
  return (
    <div className="px-0 lg:px-0 w-full">
      <div className="flex flex-col bg-[#1f2b3a] shadow-md rounded  text-slate-700 items-center h-screen px-3 justify-center bg-reed pt-3  w-full">
        <Nav />
        <div className="lg:mx-auto  w-full lg:w-10/12  px-3 lg:px-12">
          <div className="flex items-center bg-white_ justify-center">
            <span className="flex items-center w-32 lg:w-36 rounded-md justify-center mb-6">
              <img
                src={bultpay}
                alt="logo"
                className="w-32 lg:w-36 self-center text-xl font-semibold whitespace-nowrap text-white"
              />
            </span>
          </div>
          <div class="mx-16 md:mx-auto pt-2 md:pt-0 font-medium max-h-screen md:h-auto flex flex-col self-center items-center md:mt-6 mb-12">
            <div class="bg-white sm:w-56 text-base text-center pt-8 w-full lg:w-96 px-6 pb-4 md:pb-0 ">
              Please go to your email, and follow the instructions to activate
              your account. Click{" "}
              <Link
                className="underline underline-offset-2 text-red-600 focus:text-blue-500 hover:text-red-400"
                to="/public/login"
              >
                here
              </Link>{" "}
              to Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activate;