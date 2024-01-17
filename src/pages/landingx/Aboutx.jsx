import person1 from "../../images/person1.png";
import person2 from "../../images/person2.png";
import brax from "../../images/brax.jpg";
import Footer from "./Footerx";
import Nav from "./Navx";
import Widget from "./Widget";

const About = () => {
  return (
    <div className="px-0 lg:px-0 w-full">
      <div className="drawer-content bg-white py-0 overflow-hidden">
        <section
          id="nav_and_hero"
          className="h-28 lg:px-24 flex items-center "
          style={{
            backgroundImage: "url(/bglanding.png)",
            backgroundColor: "rgb(33, 34, 36)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 0px"
          }}
        >
          <Nav />
        </section>
        <div class="z-10 w-full">
            <Widget />
        </div>

        <section class="text-black px-3 md:px-24 lg:px-24 default_cursor_cs">
          <div class="flex flex-col items-center text-centerw-full default_cursor_cs">
            <h1 class="text-lg text-center lg:text-3xl mt-16 font-bold default_cursor_cs">
              Putting our clients first{" "}
              <span class="text-[#FC5C40] default_cursor_cs">since 2014</span>
            </h1>
            <p class="pb-6 text-sm lg:text-xl text-center text-slate-400 tracking-normal lg:tracking-wider lg:w-7/12 font-normal default_cursor_cs">
              For more than 8 years, we've been empowering clients by helping them
              take control of their financial lives.
            </p>
          </div>
        </section>

        <section class="flex flex-col md:flex-row justify-center px-3 md:justify-around lg:px-28 default_cursor_cs">
          <div class="flex flex-row">
            <p class="rounded-full w-10 h-10 flex justify-center items-center bg-rose-600 flex1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" text-gray-300 bg-clip-text rounded-full"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </g>
              </svg>
            </p>
            <p class="flex flex-col ml-4 w-64 leading-10">
              <span class="capitalize font-bold text-xl lg:text-2xl pb-1 md:pb-4 default_cursor_cs">
                legal company
              </span>
              <span class="text-sm lg:text-base">
                Our company conducts absolutely legal activities in the legal
                field. We are certified to operate investment business, we are
                legal and safe.
              </span>
            </p>
          </div>
          <div class="flex flex-row default_cursor_cs">
            <p class="rounded-full w-10 h-10 flex justify-center items-center bg-rose-600 flex1 default_cursor_cs">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" text-gray-300 bg-clip-text rounded-full"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </g>
              </svg>
            </p>
            <p class="flex flex-col ml-4 w-64 leading-10 default_cursor_cs">
              <span class="capitalize font-bold text-xl lg:text-2xl pb-1 md:pb-4 default_cursor_cs">
                High reliability
              </span>
              <span class="text-sm lg:text-base default_cursor_cs">
                Anonymity and using cryptocurrency as a payment instrument. In the
                era of electronic money – this is one of the most convenient ways
                of cooperation.
              </span>
            </p>
          </div>
          <div class="flex flex-row default_cursor_cs">
            <p class="rounded-full w-10 h-10 flex justify-center items-center bg-rose-600 flex1 default_cursor_cs">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" text-gray-300 bg-clip-text rounded-full"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </g>
              </svg>
            </p>
            <p class="flex flex-col ml-4 w-72">
              <span class="capitalize font-bold text-xl lg:text-2xl pb-1 md:pb-4">
                Simplicity
              </span>
              <span class="text-sm lg:text-base default_cursor_cs">
                We focus on user experience and the ease of use. We continue to
                optimise our services so our users–novice or experienced
                investors–will be able to grasp trading opportunities through our
                platform.
              </span>
            </p>
          </div>
        </section>

        <section class="text-black px-3 md:px-24 lg:px-24 default_cursor_cs">
          <div class="flex flex-col items-center text-centerw-full default_cursor_cs">
            <h1 class="text-lg text-center lg:text-3xl mt-16 font-bold">
              Trust the Professionals
            </h1>
            <p class="pb-6 text-sm lg:text-xl text-center text-slate-400 tracking-normal lg:tracking-wider lg:w-7/12 font-normal default_cursor_cs">
              Trust the Professionals We are a group of passionate, independent
              thinkers who never stop exploring new ways to improve trading for
              the self-directed investor. take control of their financial lives.
            </p>
          </div>
          <article class="flex flex-col md:flex-row justify-around pt-8 default_cursor_cs">
            <div class="flex flex-row text-black default_cursor_cs">
              <p class="rounded-full w-32 h-32 md:w-48 md:h-48 flex justify-center items-centerflex1">
                <img
                  src={person1}
                  class="bg-clip-text rounded-full default_cursor_cs"
                />
              </p>
              <p class="flex flex-col ml-4 w-64 leading-10 default_cursor_cs">
                <span class="text-xs text-slate-400 font-semibold pl-2">
                  {" "}
                  ACTIVE{" "}
                </span>
                <span class="capitalize font-bold text-lg md:text-2xl pb-4 default_cursor_cs">
                  James Freeman
                </span>
              </p>
            </div>
            <div class="flex flex-row text-black mt-12 default_cursor_cs">
              <p class="rounded-full w-32 h-32 md:w-48 md:h-48 flex justify-center items-centerflex1">
                <img
                  src={person2}
                  class="bg-clip-text rounded-full default_cursor_cs"
                />
              </p>
              <p class="flex flex-col ml-4 w-64 leading-10 default_cursor_cs">
                <span class="text-xs text-slate-400 font-semibold pl-2">
                  {" "}
                  ACTIVE{" "}
                </span>
                <span class="capitalize font-bold text-lg md:text-2xl pb-4">
                  Evelyn Mason
                </span>
              </p>
            </div>
          </article>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
    
  );
};

export default About;
