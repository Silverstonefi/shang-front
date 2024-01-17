import Footer from "./Footerx";
import Nav from "./Navx";
import Widget from "./Widget";

const Contact = () => {
  return (
    <div className="px-0 lg:px-0 w-full">
      <div className="drawer-content bg-white py-0 overflow-hidden ">
        
        <section
          id="nav_and_hero"
          className="h-28 lg:px-24 flex items-center "
          style={{
            backgroundImage: "url(/bglanding.png)",
            backgroundColor: "rgb(33, 34, 36)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 0px",
          }}
        >
          <Nav />
        </section>
        <div class="z-10 w-full">
          <Widget />
        </div>

        <section class="text-black px-3 md:px-24 lg:px-24 default_cursor_cs">
          <div class="flex flex-col items-center text-center w-full default_cursor_cs">
            <h1 class="text-lg text-center lg:text-3xl mt-16 font-bold default_cursor_cs">
              Do not hesitate to<span class="text-[#FC5C40]"> reach out.</span>
            </h1>
            <p class="pb-6 text-sm lg:text-xl text-center text-slate-400 tracking-normal lg:tracking-wider lg:w-7/12 font-normal default_cursor_cs">
              Just fill in the contact form here and we’ll be sure to reply as
              fast as possible
            </p>
          </div>
        </section>

        <section class="flex flex-col md:flex-row justify-center px-3 md:justify-around lg:px-28 my-6 md:my-12 md:mt-1_ default_cursor_cs">
          <article>
            <form class="ant-form ant-form-horizontal flex flex-col">
              <input
                type="text"
                placeholder="Full name "
                class="px-3 py-2 border border-gray-400 shadow rounded w-66 md:w-96"
              />
              <input
                type="text"
                placeholder="Email address"
                class="px-3 py-2 border border-gray-400 shadow rounded  w-66 md:w-96 my-4"
              />
              <input
                type="text"
                placeholder="Subject"
                class="px-3 py-2 border border-gray-400 shadow rounded  w-66 md:w-96"
              />
              <textarea
                placeholder="message"
                class="px-3 py-2 border border-gray-400 shadow rounded  w-66 md:w-96 mt-4"
              ></textarea>
              <button class="bg-[#FC5C40] text-white font-medium py-2 my-6">
                SEND MESSAGE
              </button>
            </form>
          </article>
          <article class="md:w-1/2 flex flex-col default_cursor_cs">
            <div class="flex flex-col">
              <span class="font-semibold md:text-2xl default_cursor_cs">
                Business submissions{" "}
              </span>
              <span class="md:text-l default_cursor_cs">
                For business plan submissions.Please submit using this
              </span>
            </div>
            <div class="py-4 bg-bla_ck text-black font-medium flex flex-col P mt-3 px-3 default_cursor_cs">
              <div class="flex py-2 items-center default_cursor_cs">
                <p class="rounded-full w-10 h-10 flex justify-center items-center bg-[#FC5C40] mr-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class=" text-white bg-clip-text rounded-full"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>
                </p>
                <span class="text-sm mb-3">support@whitebullsafe.net</span>
              </div>
              <div class="flex py-2 items-center default_cursor_cs">
                <p class="rounded-full w-10 h-10 flex justify-center items-center bg-[#FC5C40] mr-4 default_cursor_cs">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="text-white bg-clip-text rounded-full default_cursor_cs"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
                  </svg>
                </p>
                <span class="text-sm mb-3">+1(888)WHITEBULLSAFE</span>
              </div>
              <div class="flex py-2 items-center">
                <p class="rounded-full w-10 h-10 flex justify-center items-center bg-[#FC5C40] mr-4 default_cursor_cs">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class=" text-white bg-clip-text rounded-full"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                    ></path>
                    <circle
                      cx="256"
                      cy="192"
                      r="48"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                  </svg>
                </p>
                <span class="text-sm mb-3">
                  11 Av/W 34 St, New York, NY 10001, United States
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Contact;