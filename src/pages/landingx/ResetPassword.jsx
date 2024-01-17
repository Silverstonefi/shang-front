import React from 'react';
import bultpay from "../../images/whitebulllogo.png";

const ResetPassword = () => {
  return (
    <div class="px-0 lg:px-0 w-full">
      <div class="flex flex-col bg-[#26313f3a] shadow-md rounded text-slate-700 items-center h-screen px-3 justify-center bg-reed pt-3 w-full default_cursor_cs">
        <div class="lg:mx-auto w-full lg:w-10/12 px-3 lg:px-12 default_cursor_cs">
          <div class="flex items-center text-secondary justify-center ">
            <img
              src={bultpay}
              alt="bultpay"
              class="w-28 lg:w-48 mb-6 self-center text-xl font-semibold whitespace-nowrap text-white mr-12"
            />
          </div>
          <div class=" w-full mx-auto pt-2 mt-12 md:pt-0 max-h-screen md:h-auto flex flex-col self-center items-center md:mt-6 mb-12">
            <div class="bg-white pt-8 sm:max-w-sm w-full pb-4 md:pb-0 default_cursor_cs">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0">
                <div class="flex-auto px-4 lg:mx-10_ py-10 pt-0 default_cursor_cs">
                  <div class="container mx-auto px-4 h-full relative">
                    <div class="flex flex-col content-center justify-center h-full default_cursor_cs">
                      <div class="text-black text-lg text-center mb-4 uppercase font-bold default_cursor_cs">
                        Forgot Password
                      </div>
                      <div class="w-full px-4 default_cursor_cs">
                        <div class="flex flex-col min-w-0 break-words _w-96 mb-6 g border-0 default_cursor_cs">
                          <div class="pb-3 default_cursor_cs">
                            <div class="text-left font-semibold pb-1 text-xs lg:text-sm default_cursor_cs">
                              Email Address <span class="text-red-600">*</span>
                            </div>
                            <input
                              placeholder="Enter your email"
                              class=" pl-4+ mt-1 md:w-66 lg:_w-72 block bg-white w-full border border-slate-300 rounded shadow text-black  placeholder-white text-sm h-10 py-.5 focus:ring-0 focus:bg-slate-600"
                              value=""
                            />
                          </div>
                          <div class="mt-7">
                            <button class="font-semibold bg-blue-600 rounded text-white capitalize text-sm w-full btn-sm h-9 default_pointer_cs">
                              submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;