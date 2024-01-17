import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import fig1 from "../../images/fig1.svg";
import fig2 from "../../images/fig2.svg";
import fig3 from "../../images/fig3.svg";
import leaves from "../../images/leaves.svg";
import cb from "../../images/coinbase.jfif";
import btc from "../../images/bitcoin.jfif";
import crypto from "../../images/crypto.jpeg";
import btc1 from "../../images/fig4.svg";
import mscard from "../../images/fig5.svg";
import visa from "../../images/fig6.svg";
import skrill from "../../images/fig7.svg";
import paypal from "../../images/fig8.svg";
import neteller from "../../images/fig9.svg";
import Footer from "./Footerx";
import landing from "../../images/landing.svg";
import alphabet from "../../images/alphabet.svg";
import facebook from "../../images/facebook.svg";
import ms from "../../images/microsoft.svg";
import tesla from "../../images/tesla.svg";
import amazon from "../../images/amazon.svg";
import Nav from "./Navx";
import Widget from "./Widget";

const Homex = () => {


  useEffect(() => {
    // Function to initialize Google Translate
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        'google_translate_element'
      );
    };

    // Load the Google Translate script dynamically
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate once the script is loaded
    script.onload = () => {
      googleTranslateElementInit();
    };

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="App">
      <section
        id="nav_and_hero"
        className="h-screen relative lg:px-24 overflow-x-hidden overflow-y-hidden bg-black bg-no-repeat bg-cover bg-left-[50%] bg-right-[50%] bg-top-[0] bg-bottom[0]"
        style={{
          backgroundImage: "url(/bglanding.png)",
        }}
      >
        <Nav />

        <div className="px-4 py-12 sm:px-6 md:px-6 lg:py-24">
          <div className="flex flex-col md:flex-row md:flex-wrap overflow-y justify-between items-center mx-auto lg:pl-12 lg:pr-8">
            <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-6/12 md:mb-0 xl:mt-0">
              <span className="hidden md:flex mb-8 text-xs font">{""}</span>
              <h1 className="mb-8 mt-16 md:mt-2 tracking-wide text-2xl w-9/12 md:w-full md:leading-10 lg:tracking-wide lg:pr-40 font-semibold text-white lg:text-5xl">
                Multi-regulated <br className="md:hidden" />
                global financial institution
              </h1>
              <p className="text-sm  mb-8 md:text-base leading-relaxed text-left text-gray-500">
                Generating Tomorrow's Diversifying Return Streams by Challenging
                Today's Investment Norms. A trusted destination for investors
                Worldwide; Authorized by FCA, ASIC & FSCA
              </p>
              <div className="flex pl-4 flex-wrap w-7/12 md:w-5/12 mt-2 mx-4 text-left justify-between">
                <Link className="" to="/public/login">
                  <button className="border-2 border-[#FC5C40] px-3 md:px-6 uppercase text-xs font-medium py-2 text-white rounded-md">
                    Login
                  </button>
                </Link>
                <Link to="/public/register">
                  <button className="border-2 border-[#FC5C40] bg-slate400 hover:bg-slate-200 focus:bg-slate-400 px-3 md:px-6 uppercase text-xs font-medium py-2 text-white rounded-md">
                    SignUp
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-14 w-full lg:max-w-lg lg:w-6/12 rounded-xl">
              <div>
                <div className="relatie w-full max-w-lg">
                  <div className="relatve">
                    <img
                      className="object-cover object-center mx-auto rounded-lg"
                      src={landing}
                      alt="hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-around lg:mx-14">
          <div className="w-66 flex items-center">
            <div>
              <img src={alphabet} alt="/alphabet" />
            </div>
          </div>
          <div className="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7 14l5-5 5 5H7z"></path>
            </svg>
            <span className="ml-1 default_cursor_cs">12.443</span>
          </div>
          <div className="w-66 flex items-center default_cursor_cs">
            <div>
              <img
                src={facebook}
                alt="facebook"
                className="default_cursor_cs"
              />
            </div>
            <div class="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="default_cursor_cs"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 14l5-5 5 5H7z" className="default_cursor_cs"></path>
              </svg>
              <span className="ml-1 default_cursor_cs">12.443</span>
            </div>
          </div>
          <div className="w-66 flex items-center default_cursor_cs">
            <div>
              <img src={ms} alt="ms" className="default_cursor_cs" />
            </div>
            <div className="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="default_cursor_cs"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 14l5-5 5 5H7z"></path>
              </svg>
              <span className="ml-1 default_cursor_cs">12.443</span>
            </div>
          </div>
          <div className="w-66 flex items-center default_cursor_cs">
            <div>
              <img src={tesla} alt="tesla" className="default_cursor_cs" />
            </div>
            <div className="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4 default_cursor_cs">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 14l5-5 5 5H7z"></path>
              </svg>
              <span className="ml-1">12.443</span>
            </div>
          </div>
          <div className="w-66 flex items-center">
            <div>
              <img src={amazon} alt="amazon" />
            </div>
            <div className="flex bg-green-500 text-xs text-slate-800 px-4 py-1 rounded ml-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 14l5-5 5 5H7z"></path>
              </svg>
              <span className="ml-1">12.443</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full">
          <Widget />
        </div>
      </section>

      <section className="bg-[#101112] text-white md:px-24 lg:px-36 default_cursor_cs">
        <div className="flex flex-col md:flex-row px-4 justify-between pt-12 default_cursor_cs">
          <div className="text-4xl font-bold tracking-wide default_cursor_cs">
            Save time. Get{" "}
            <span className="font-semibold text-[#FC5C40]">higher return.</span>{" "}
            <br /> Multiply wealth.
          </div>
          <Link className="" to="/public/register">
            <button className="border-2 mt-8 text-white md:mt-0 tracking-wide border-[#FC5C40] h-12 px-4 rounded">
              Join now
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between mt-12 md:mt-24 pb-12 default_cursor_cs">
          <div className="w-11/12 overflow-x-hidden relative mb-6 md:mb-0 md:w-80 shadow-xl bg-[#1e1d1d] p-6 pt-0 rounded overflow-y-hidden h-[300px] default_cursor_cs">
            <figure className="w-11/12 absolute -top-20 -right-20 justify-self-end">
              <img
                src={fig1}
                className="w-full default_cursor_cs"
                alt="Shoes"
              />
            </figure>
            <div className="mb-6 h-36 default_cursor_cs"></div>
            <div className="relative -top-6">
              <h2 className="font-semibold text-xl md:text-2xl text-white default_cursor_cs">
                Various assets
              </h2>
              <p className="mt-6 default_cursor_cs">
                We provide one-click access to all major exchanges and more to
                take advantage of a wider range of opportunities.
              </p>
            </div>
          </div>
          <div className="w-11/12 overflow-x-hidden relative mb-6 md:mb-0 md:w-80 shadow-xl bg-[#1e1d1d] p-6 pt-0 rounded overflow-y-hidden h-[300px] default_cursor_cs">
            <figure className="w-11/12 absolute -top-20 -right-20 justify-self-end">
              <img
                src={fig2}
                className="w-full default_cursor_cs"
                alt="Shoes"
              />
            </figure>
            <div className="mb-6 h-36"></div>
            <div className="relative -top-6 default_cursor_cs">
              <h2 className="font-semibold text-xl md:text-2xl text-white">
                Market analysis
              </h2>
              <p className=" mt-6">
                We provide top analysis for all investments done using our
                platform.
              </p>
            </div>
          </div>
          <div className="w-11/12 overflow-x-hidden relative mb-6 md:mb-0 md:w-80 shadow-xl bg-[#1e1d1d] p-6 pt-0 rounded overflow-y-hidden h-[300px] default_cursor_cs">
            <figure className="w-11/12 absolute -top-20 -right-20 justify-self-end">
              <img src={fig3} alt="fig3" className="w-full" />
            </figure>
            <div className="mb-6 h-36 default_cursor_cs"></div>
            <div className="relative -top-6">
              <h2 className="font-semibold text-xl md:text-2xl text-white">
                NFTs
              </h2>
              <p className=" mt-6">
                Discover, collect, and sell extraordinary NFTs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="default_cursor_cs px-2">
        <div className="font-bold pt-8 pb-4 text-lg leading-4 tracking-wide lg:text-3xl mb-6 pl-6 lg:px-28 default_cursor_cs">
          Trade your favourite instruments from around the world
        </div>
        <div className="flex flex-col lg:flex-row lg:px-28 my-6 px-3">
          <div className="flex justify-start lg:pl-[30px] leading-4 mb-12 lg:mb-0">
            <div className="w-[30px] lg:w-[59px] relative before:w-[1px] before:h-full before:bg-secondary before:content-[''] before:absolute before:top-0 before:left-[7px]">
              <p className="w-[150px] text-right transform -rotate-90 text-[#fc5b3f] mt-[64px] ml-[-67px]">
                <span className="bg-white text-sm pr-[5px] pl-[14px] uppercase font-semibold">
                  Info
                </span>
              </p>
            </div>
            <div>
              <article>
                <div className="font-semibold text-lg leading-6 tracking-wide lg:text-xl mb-6 default_cursor_cs">
                  Fx Pairs
                </div>
                <div className="text-gray-600 leading-6">
                  Trade on the strength of one currency versus another. The FX
                  market is the largest and most liquid market in the world
                </div>
              </article>
            </div>
          </div>
          <div className="flex justify-start lg:pl-[30px] leading-4 mb-12 lg:mb-0">
            <div className="w-[30px] lg:w-[59px] relative before:w-[1px] before:h-full before:bg-secondary before:content-[''] before:absolute before:top-0 before:left-[7px]">
              <p className="w-[150px] text-right transform -rotate-90 text-[#fc5b3f] mt-[64px] ml-[-67px]">
                <span className="bg-white text-sm pr-[5px] pl-[14px] uppercase font-semibold">
                  Info
                </span>
              </p>
            </div>
            <div>
              <article className="default_cursor_cs">
                <div className="font-semibold text-lg leading-6 tracking-wide lg:text-xl mb-6 default_cursor_cs">
                  Commodities
                </div>
                <div className="text-gray-600 leading-6 default_cursor_cs">
                  Speculate on the price of some of the most popular
                  cryptocurrencies
                </div>
              </article>
            </div>
          </div>
          <div className="flex justify-start lg:pl-[30px] leading-4 mb-12 lg:mb-0">
            <div className="w-[30px] lg:w-[59px] relative before:w-[1px] before:h-full before:bg-secondary before:content-[''] before:absolute before:top-0 before:left-[7px]">
              <p className="w-[150px] text-right transform -rotate-90 text-[#fc5b3f] mt-[64px] ml-[-67px]">
                <span className="bg-white text-sm pr-[5px] pl-[14px] uppercase font-semibold">
                  Info
                </span>
              </p>
            </div>
            <div>
              <article>
                <div className="font-semibold text-lg leading-6 tracking-wide lg:text-xl mb-6">
                  Shares &amp; ETFs
                </div>
                <div className="text-gray-600 leading-6">
                  Take a position on the performance of the worlds largest
                  companies, from Apple to Amazon and Rio Tinto to RBS
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-28 pt-6 md:pt-24 md:pb-16 bg-red-5 default_cursor_cs">
        <div className="flex flex-col md:flex-row justify-between default_cursor_cs">
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} alt="leaves" className="w-16" />
            <div className="font-bold mt-3">Best CFD Broker</div>
            <div className=" text-sm">TradeON Summit 2020</div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} alt="leaves" className="w-16" />
            <div className="font-bold mt-3">Best Execution Broker</div>
            <div className=" text-sm">Forex EXPO Dubai 2020</div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} alt="leaves" className="w-16" />
            <div className="font-bold mt-3">Best Trading Platform</div>
            <div className=" text-sm">London Summit 2020</div>
          </div>
          <div className="flex flex-col items-center mb-8 lg:mb-0 first-line:">
            <img src={leaves} alt="leaves" className="w-16" />
            <div className="font-bold mt-3">Best Broker Asia</div>
            <div className=" text-sm">iFX EXPO 2020</div>
          </div>
        </div>
      </section>

      <div className="mt-24 flex flex-col justify-center default_cursor_cs">
        <div className="text-center text-xl text-gray-800 pb-4 font-bold default_cursor_cs">
          Where to buy Cryptocurrencies
        </div>
        <div className="flex flex-col mx-auto md:flex-row md:w-8/12 justify-around items-center default_cursor_cs">
          <div className="mt-4 w-3/">
            <img src={cb} alt="cb" className="mx-auto default_cursor_cs" />
            <div className="text-center font-bold py-2">Coinbase</div>
          </div>
          <div className="mt-4">
            <img src={btc} alt="btc" className="mx-auto default_cursor_cs" />
            <div className="text-center font-bold py-2 default_cursor_cs" />
            bitcoin.com
          </div>
          <div className="mt-4">
            <img src={crypto} alt="cry" className="mx-auto default_cursor_cs" />
            <div className="text-center font-bold py-2">Crypto.com</div>
          </div>
        </div>
      </div>

      <section className="md:px-28 pb-12">
        <div class="font-semibold md:font-bold pt-8 pb- text-2xl mt-10 leading-4 tracking-wide lg:text-xl text-center mb-6 pl-6 default_cursor_cs">
          Payment methods
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-4">
          <img src={btc1} alt="btc1" className="w-28 md:48" />
          <img src={mscard} alt="mscard" className="w-28 md:48 my-4" />
          <img src={visa} alt="visa" className="w-28 md:48" />
          <img src={skrill} alt="skrill" className="w-28 md:48 my-4" />
          <img src={paypal} alt="paypal" className="w-28 md:48" />
          <img src={neteller} alt="neteller" className="w-28 md:48 my-4" />
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homex;
