import Footer from "./Footerx";
import Nav from "./Navx";
import Widget from "./Widget";

const Market = () => {
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
        <div className="z-10 w-full">
          <Widget />
        </div>

        <section className=" text-black px-3 md:px-24 lg:px-24">
          <div className="flex flex-col items-center text-centerw-full">
            <h1 className="text-lg text-center lg:text-3xl mb-3 mt-16 font-bold">
              A <span className="text-[#FC5C40]">Relationship</span> on your
              terms.
            </h1>
            <p className="pb-6 text-sm lg:text-lg text-center text-slate-400 tracking-normal lg:tracking-wider lg:w-7/12 font-normal">
              Some believe you must choose between an online broker and a wealth
              management firm. At Bultpay, you don’t need to compromise.
              Whether you invest on your own, with an advisor, or a little of
              both — we can support you.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-around px-3">
          <div className="rounded-md shadow-md bg-[#35495D] w-full md:w-96 text-white px-6 py-6 mt-3">
            <p
              className="rounded-full w-14 h-14 flex justify-center items-center bg-secondary mr-4"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className=" text-white bg-clip-text rounded-full"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.563 19.28c10.093 10.734 16.743 23.678 20.562 37.657 6.202 22.707 5.806 48.148 3.72 74.094-4.176 51.894-14.58 106.512-2.44 140.407 11.396 31.814 29.668 50.71 49.94 60 8.72 3.998 17.9 6.21 27.186 6.782 22.195-65.084 17.46-148.144-19.06-204.283 48.352 48.234 71.19 121.068 56.436 197.407l-8.78 3.53c2.723-.808 5.42-1.763 8.093-2.843 41.783-16.87 75.975-66.253 61.75-138.655-6.536-33.265-28.966-80.165-66.5-116.5-32.472-31.432-75.827-55.212-130.908-57.594zM445.53 202.813c-.84 12.1-4.638 23.528-10.56 33.907-10.353 18.14-26.448 33.757-43.876 48.593-34.856 29.67-75.057 57.156-88.313 85.218-12.555 26.583-12.884 49.252-6.186 67.283 2.92 7.86 7.21 14.894 12.625 20.968 53.708-26.787 101.73-80.91 113.81-138.03.076 59.646-30.63 118.687-86.624 156.906 35.802 14.545 86.282 5.034 121.72-47.75 16.418-24.456 31.558-67.3 30.812-112.875-.634-38.688-12.264-79.23-43.407-114.217zm-424.874 73.47c-9.483 45.878.708 86.832 19.5 120.656 22.136 39.84 56.682 69.376 83.125 82.343 57.07 27.988 105.514 10.968 129.25-19.53-67.59-5.1-123.692-40.873-153.436-92.563 39.02 43.428 107.658 66.29 167.562 62.625 1.654-7.963 1.87-16.204.47-24.468-3.214-18.965-14.87-38.447-39.032-55.188-25.505-17.67-74.045-21.36-119.063-29.625-22.508-4.13-44.247-9.59-62.28-20.124-10.323-6.03-19.314-14.06-26.094-24.125z"></path>
              </svg>
            </p>
            <p className="flex justify-between border-gray-200 border-b-2 ">
              <span className="font-semibold text-lg md:text-xl mt-6 tracking-wide mb-4">
                Investing
              </span>
            </p>
            <p className="mt-4 text-gray-50 tracking-wide">
              A wide selection of investment product to help build diversified
              portfolio
            </p>
          </div>
          <div className="rounded-md shadow-md bg-[#95A5A6] w-full md:w-96 text-white px-6 py-6 mt-3">
            <p
              className="rounded-full w-14 h-14 flex justify-center items-center bg-secondary mr-4"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className=" text-white bg-clip-text rounded-full"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.563 19.28c10.093 10.734 16.743 23.678 20.562 37.657 6.202 22.707 5.806 48.148 3.72 74.094-4.176 51.894-14.58 106.512-2.44 140.407 11.396 31.814 29.668 50.71 49.94 60 8.72 3.998 17.9 6.21 27.186 6.782 22.195-65.084 17.46-148.144-19.06-204.283 48.352 48.234 71.19 121.068 56.436 197.407l-8.78 3.53c2.723-.808 5.42-1.763 8.093-2.843 41.783-16.87 75.975-66.253 61.75-138.655-6.536-33.265-28.966-80.165-66.5-116.5-32.472-31.432-75.827-55.212-130.908-57.594zM445.53 202.813c-.84 12.1-4.638 23.528-10.56 33.907-10.353 18.14-26.448 33.757-43.876 48.593-34.856 29.67-75.057 57.156-88.313 85.218-12.555 26.583-12.884 49.252-6.186 67.283 2.92 7.86 7.21 14.894 12.625 20.968 53.708-26.787 101.73-80.91 113.81-138.03.076 59.646-30.63 118.687-86.624 156.906 35.802 14.545 86.282 5.034 121.72-47.75 16.418-24.456 31.558-67.3 30.812-112.875-.634-38.688-12.264-79.23-43.407-114.217zm-424.874 73.47c-9.483 45.878.708 86.832 19.5 120.656 22.136 39.84 56.682 69.376 83.125 82.343 57.07 27.988 105.514 10.968 129.25-19.53-67.59-5.1-123.692-40.873-153.436-92.563 39.02 43.428 107.658 66.29 167.562 62.625 1.654-7.963 1.87-16.204.47-24.468-3.214-18.965-14.87-38.447-39.032-55.188-25.505-17.67-74.045-21.36-119.063-29.625-22.508-4.13-44.247-9.59-62.28-20.124-10.323-6.03-19.314-14.06-26.094-24.125z"></path>
              </svg>
            </p>
            <p className="flex justify-between border-gray-200 border-b-2 ">
              <span className="font-semibold text-lg md:text-xl mt-6 tracking-wide mb-4">
                Trading
              </span>
            </p>
            <p className="mt-4 text-gray-50 tracking-wide">
              Powerful trading tools, resources, insight and support
            </p>
          </div>
          <div className="rounded-md shadow-md bg-[#fd6a4f] w-full md:w-96 text-white px-6 py-6 mt-3">
            <p
              className="rounded-full w-14 h-14 flex justify-center items-center bg-secondary mr-4"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className=" text-white bg-clip-text rounded-full"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.563 19.28c10.093 10.734 16.743 23.678 20.562 37.657 6.202 22.707 5.806 48.148 3.72 74.094-4.176 51.894-14.58 106.512-2.44 140.407 11.396 31.814 29.668 50.71 49.94 60 8.72 3.998 17.9 6.21 27.186 6.782 22.195-65.084 17.46-148.144-19.06-204.283 48.352 48.234 71.19 121.068 56.436 197.407l-8.78 3.53c2.723-.808 5.42-1.763 8.093-2.843 41.783-16.87 75.975-66.253 61.75-138.655-6.536-33.265-28.966-80.165-66.5-116.5-32.472-31.432-75.827-55.212-130.908-57.594zM445.53 202.813c-.84 12.1-4.638 23.528-10.56 33.907-10.353 18.14-26.448 33.757-43.876 48.593-34.856 29.67-75.057 57.156-88.313 85.218-12.555 26.583-12.884 49.252-6.186 67.283 2.92 7.86 7.21 14.894 12.625 20.968 53.708-26.787 101.73-80.91 113.81-138.03.076 59.646-30.63 118.687-86.624 156.906 35.802 14.545 86.282 5.034 121.72-47.75 16.418-24.456 31.558-67.3 30.812-112.875-.634-38.688-12.264-79.23-43.407-114.217zm-424.874 73.47c-9.483 45.878.708 86.832 19.5 120.656 22.136 39.84 56.682 69.376 83.125 82.343 57.07 27.988 105.514 10.968 129.25-19.53-67.59-5.1-123.692-40.873-153.436-92.563 39.02 43.428 107.658 66.29 167.562 62.625 1.654-7.963 1.87-16.204.47-24.468-3.214-18.965-14.87-38.447-39.032-55.188-25.505-17.67-74.045-21.36-119.063-29.625-22.508-4.13-44.247-9.59-62.28-20.124-10.323-6.03-19.314-14.06-26.094-24.125z"></path>
              </svg>
            </p>
            <p className="flex justify-between border-gray-200 border-b-2 ">
              <span className="font-semibold text-lg md:text-xl mt-6 tracking-wide mb-4">
                Wealth management
              </span>
            </p>
            <p className="mt-4 text-gray-50 tracking-wide">
              Dedicated financial consultant to help reach your own specific
              goals
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-around md:mt-6 px-3 mb-12 md:mb-24">
          <div className="rounded-md shadow-md bg-[#27BC9C] w-full md:w-96 text-white px-6 py-6 mt-3">
            <p
              className="rounded-full w-14 h-14 flex justify-center items-center bg-secondary mr-4"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className=" text-white bg-clip-text rounded-full"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.563 19.28c10.093 10.734 16.743 23.678 20.562 37.657 6.202 22.707 5.806 48.148 3.72 74.094-4.176 51.894-14.58 106.512-2.44 140.407 11.396 31.814 29.668 50.71 49.94 60 8.72 3.998 17.9 6.21 27.186 6.782 22.195-65.084 17.46-148.144-19.06-204.283 48.352 48.234 71.19 121.068 56.436 197.407l-8.78 3.53c2.723-.808 5.42-1.763 8.093-2.843 41.783-16.87 75.975-66.253 61.75-138.655-6.536-33.265-28.966-80.165-66.5-116.5-32.472-31.432-75.827-55.212-130.908-57.594zM445.53 202.813c-.84 12.1-4.638 23.528-10.56 33.907-10.353 18.14-26.448 33.757-43.876 48.593-34.856 29.67-75.057 57.156-88.313 85.218-12.555 26.583-12.884 49.252-6.186 67.283 2.92 7.86 7.21 14.894 12.625 20.968 53.708-26.787 101.73-80.91 113.81-138.03.076 59.646-30.63 118.687-86.624 156.906 35.802 14.545 86.282 5.034 121.72-47.75 16.418-24.456 31.558-67.3 30.812-112.875-.634-38.688-12.264-79.23-43.407-114.217zm-424.874 73.47c-9.483 45.878.708 86.832 19.5 120.656 22.136 39.84 56.682 69.376 83.125 82.343 57.07 27.988 105.514 10.968 129.25-19.53-67.59-5.1-123.692-40.873-153.436-92.563 39.02 43.428 107.658 66.29 167.562 62.625 1.654-7.963 1.87-16.204.47-24.468-3.214-18.965-14.87-38.447-39.032-55.188-25.505-17.67-74.045-21.36-119.063-29.625-22.508-4.13-44.247-9.59-62.28-20.124-10.323-6.03-19.314-14.06-26.094-24.125z"></path>
              </svg>
            </p>
            <p className="flex justify-between border-gray-200 border-b-2 ">
              <span className="font-semibold text-lg md:text-xl mt-6 tracking-wide mb-4">
                Investment advisory
              </span>
            </p>
            <p className="mt-4 text-gray-50 tracking-wide">
              A wide selection of investing strategies from seasoned portfolio
              managers
            </p>
          </div>
          <div className="rounded-md shadow-md bg-[#4284DD] w-full md:w-96 text-white px-6 py-6 mt-3">
            <p
              className="rounded-full w-14 h-14 flex justify-center items-center bg-secondary mr-4"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className=" text-white bg-clip-text rounded-full"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.563 19.28c10.093 10.734 16.743 23.678 20.562 37.657 6.202 22.707 5.806 48.148 3.72 74.094-4.176 51.894-14.58 106.512-2.44 140.407 11.396 31.814 29.668 50.71 49.94 60 8.72 3.998 17.9 6.21 27.186 6.782 22.195-65.084 17.46-148.144-19.06-204.283 48.352 48.234 71.19 121.068 56.436 197.407l-8.78 3.53c2.723-.808 5.42-1.763 8.093-2.843 41.783-16.87 75.975-66.253 61.75-138.655-6.536-33.265-28.966-80.165-66.5-116.5-32.472-31.432-75.827-55.212-130.908-57.594zM445.53 202.813c-.84 12.1-4.638 23.528-10.56 33.907-10.353 18.14-26.448 33.757-43.876 48.593-34.856 29.67-75.057 57.156-88.313 85.218-12.555 26.583-12.884 49.252-6.186 67.283 2.92 7.86 7.21 14.894 12.625 20.968 53.708-26.787 101.73-80.91 113.81-138.03.076 59.646-30.63 118.687-86.624 156.906 35.802 14.545 86.282 5.034 121.72-47.75 16.418-24.456 31.558-67.3 30.812-112.875-.634-38.688-12.264-79.23-43.407-114.217zm-424.874 73.47c-9.483 45.878.708 86.832 19.5 120.656 22.136 39.84 56.682 69.376 83.125 82.343 57.07 27.988 105.514 10.968 129.25-19.53-67.59-5.1-123.692-40.873-153.436-92.563 39.02 43.428 107.658 66.29 167.562 62.625 1.654-7.963 1.87-16.204.47-24.468-3.214-18.965-14.87-38.447-39.032-55.188-25.505-17.67-74.045-21.36-119.063-29.625-22.508-4.13-44.247-9.59-62.28-20.124-10.323-6.03-19.314-14.06-26.094-24.125z"></path>
              </svg>
            </p>
            <p className="flex justify-between border-gray-200 border-b-2 ">
              <span className="font-semibold text-lg md:text-xl mt-6 tracking-wide mb-4">
                Smart portfolio
              </span>
            </p>
            <p className="mt-4 text-gray-50 tracking-wide">
              A revolutionary, fully-automated investment advisory services
            </p>
          </div>
          <div className="rounded-md shadow-md bg-[#9A5BB4] w-full md:w-96 text-white px-6 py-6 mt-3">
            <p
              className="rounded-full w-14 h-14 flex justify-center items-center bg-secondary mr-4"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className=" text-white bg-clip-text rounded-full"
                height="22"
                width="22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.563 19.28c10.093 10.734 16.743 23.678 20.562 37.657 6.202 22.707 5.806 48.148 3.72 74.094-4.176 51.894-14.58 106.512-2.44 140.407 11.396 31.814 29.668 50.71 49.94 60 8.72 3.998 17.9 6.21 27.186 6.782 22.195-65.084 17.46-148.144-19.06-204.283 48.352 48.234 71.19 121.068 56.436 197.407l-8.78 3.53c2.723-.808 5.42-1.763 8.093-2.843 41.783-16.87 75.975-66.253 61.75-138.655-6.536-33.265-28.966-80.165-66.5-116.5-32.472-31.432-75.827-55.212-130.908-57.594zM445.53 202.813c-.84 12.1-4.638 23.528-10.56 33.907-10.353 18.14-26.448 33.757-43.876 48.593-34.856 29.67-75.057 57.156-88.313 85.218-12.555 26.583-12.884 49.252-6.186 67.283 2.92 7.86 7.21 14.894 12.625 20.968 53.708-26.787 101.73-80.91 113.81-138.03.076 59.646-30.63 118.687-86.624 156.906 35.802 14.545 86.282 5.034 121.72-47.75 16.418-24.456 31.558-67.3 30.812-112.875-.634-38.688-12.264-79.23-43.407-114.217zm-424.874 73.47c-9.483 45.878.708 86.832 19.5 120.656 22.136 39.84 56.682 69.376 83.125 82.343 57.07 27.988 105.514 10.968 129.25-19.53-67.59-5.1-123.692-40.873-153.436-92.563 39.02 43.428 107.658 66.29 167.562 62.625 1.654-7.963 1.87-16.204.47-24.468-3.214-18.965-14.87-38.447-39.032-55.188-25.505-17.67-74.045-21.36-119.063-29.625-22.508-4.13-44.247-9.59-62.28-20.124-10.323-6.03-19.314-14.06-26.094-24.125z"></path>
              </svg>
            </p>
            <p className="flex justify-between border-gray-200 border-b-2 ">
              <span className="font-semibold text-lg md:text-xl mt-6 tracking-wide mb-4">
                NFTs Investment
              </span>
            </p>
            <p className="mt-4 text-gray-50 tracking-wide">
              Specialized guidance from independent advisor also Discover,
              collect, and sell extraordinary NFTs.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Market;