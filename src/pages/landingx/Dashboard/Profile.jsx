import React, { useEffect, useRef, useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import bultpay from "../../../images/whitebull.jpg";
import { setToken, setUserDetails } from "../../../Redux/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import White from "../../../components/Nav/Whiteicon";

const Profile = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const notify = (word) => {
    toast.info(`${word}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const user = useSelector((state) => state.auth.user_details);
  // console.log({ user_details: user });

  const [newUser, setNewUser] = useState({
    email: user.email,
    name: user.name,
    btc: user.btc,
    phone: user.phone,
  });

  let { email, name } = user;
  if (name) {
    name = name.split(" ");
  } else {
    name = ["", ""];
  }

  const first = name[0];
  const last = name[1];

  const onChanges = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
    // console.log("user", newUser);
  };

  const onEdit = async (event) => {
    const { email, name, btc, phone } = user;

    const iseditUser = await fetch(
      "https://calm-rose-frog-kilt.cyclic.app/users/:id",
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          btc,
          phone,
        }),
      }
    );

    let resp = await iseditUser.json();
    //console.log("edit resp", resp);

    notify("Saved!");
  };

  const cancel = () => {
    setNewUser({
      email: user.email,
      name: user.name,
      btc: user.btc,
      phone: user.phone,
    });

    notify("Cancelled!");
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const tabsData = [
    {
      label: "Profile",
      content: (
        <div>
          {/* <div class="text-slate-700">
            <p class="text-xl lg:text-4xl font-medium pt-8">Preferences</p>
            <p>You have full control to manage your own account setting.</p>
          </div> */}
          <div className="ant-tabs ant-tabs-top ant-tabs-mobile">
            <div></div>
            <div>
              <div className="ant-tabs-content ant-tabs-content-top">
                <div
                  role="tabpanel"
                  tabindex="0"
                  aria-hidden="false"
                  className="ant-tabs-tabpane ant-tabs-tabpane-active"
                  id="rc-tabs-1-panel-1"
                  aria-labelledby="rc-tabs-1-tab-1"
                >
                  <section className="flex flex-col pt-5">
                    <article className="flex flex-col md:flex-row">
                      <p className="flex flex-col w-64 mr-10">
                        <span className="text-sm pb-2 font-medium">
                          Full Name
                          <span className="text-red-500">*</span>
                        </span>
                        <input
                          name="name"
                          onChange={onChanges}
                          value={newUser.name}
                          type="text"
                          className="border text-gray-400 border-gray-300 p-2 rounded shadow-sm"
                        />
                      </p>
                      <p className="flex flex-col w-64">
                        <span className="text-sm pb-2 font-medium">
                          Email
                          <span className="text-red-500">*</span>
                        </span>
                        <input
                          onChange={onChanges}
                          disabled
                          value={newUser.email}
                          placeholder="s@s.com"
                          className="border text-gray-400 border-gray-300 p-2 rounded shadow-sm"
                        />
                      </p>
                    </article>
                    <article className="flex flex-col md:flex-row mt-3">
                      <p className="flex flex-col w-64">
                        <span className="text-sm pb-2 font-medium">
                          Phone
                          <span className="text-red-500">*</span>
                        </span>
                        <input
                          name="phone"
                          onChange={onChanges}
                          value={newUser.phone}
                          type="phone"
                          className="border border-gray-300 p-2 rounded shadow-sm"
                        />
                      </p>
                    </article>
                    <section className="flex pt-5">
                      <button
                        onClick={onEdit}
                        class="flex items-center pl-4 pr-2 py-2 font-semibold text-sm bg-red-500 text-white rounded"
                      >
                        Update Profile
                      </button>
                      <button
                        onChange={cancel}
                        className="flex items-center ml-3 pl-4 pr-2 py-2 font-semibold text-sm bg-red-5000 bg-gray-50 text-slate-800 rounded"
                      >
                        {" "}
                        Cancel{" "}
                      </button>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      ),
    },
    {
      label: "Account",
      content: (
        <div
          id="rc-tabs-0-panel-2"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="rc-tabs-0-tab-2"
          aria-hidden="false"
          className="ant-tabs-tabpane ant-tabs-tabpane-active"
        >
          <div className="text-sm default_cursor_cs">
            {" "}
            <span className="mr-2 font-semibold text-xs uppercase text-slate-600 mb-0 default_cursor_cs">
              Address:
            </span>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between border border-yellow-400 mx-5 px-5 py-5 shadow-lg mt-6 default_cursor_cs">
              <span class="flex default_cursor_cs">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="text-yellow-400 mr-3 md:hidden"
                  height="38"
                  width="38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="text-yellow-400 mr-3 hidden md:flex"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                </svg>
                <p className="text-sm default_cursor_cs">
                  Add an account that you’d like to receive payment or withdraw
                  fund.
                </p>
              </span>
              <button className="px-3 py-1.5 md:py-2.5 text-xs bg-yellow-500 text-white font-medium  rounded uppercase mt-6 md:mt-0">
                {" "}
                Add account
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <Drawer
        placement={placement}
        closable={false}
        open={open}
        key={placement}
      >
        <div className="w-[93%] pt-6 pl-2.5 default_cursor_cs">
          <p className="flex justify-between py-2">
          <Link to="/" className="flex items-center">
            <White/>
          </Link>
            <svg
              onClick={onClose}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="default_cursor_cs"
            >
              <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            </svg>
          </p>
        </div>
        <div className="flex items-center justify-between border-y-2 my-2 py-6 px-4">
          <p className="rounded-full w-8 h-8 flex justify-center items-center bg-sky-600 mr-6">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className=" text-gray-300 bg-clip-text rounded-full"
              height="13"
              width="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              </g>
            </svg>
          </p>
          <p class="flex flex-col flex-1 text-sm">
            <span class="font-semibold"></span>
            <span class="text-slate-600 text-xs"></span>
          </p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M7 10l5 5 5-5H7z"></path>
          </svg>
        </div>
        <div className="w-11/12 font-medium text-slate-700 text-sm">
          <div className="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
            Menu
          </div>
          <ul>
            <Link
              className="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12  active"
              to="/user/dashboard"
              style={{ color: "rgb(225, 29, 72)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                className="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              className="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/user/deposit"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                </g>
              </svg>
              <span>Deposit</span>
            </Link>
            <Link
              className="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/user/withdraw"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                </g>
              </svg>
              <span>Withdraw</span>
            </Link>
            <Link
              className="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/user/profile"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
              <span>Account Setting</span>
            </Link>
            <p
              onClick={() => {
                dispatch(setToken(""));
                dispatch(setUserDetails({}));
                navigate("/public/login", { replace: true });
                // setTimeout(()=>{
                // window.location.assign('enefti-six.vercel.app/')
                // },2000)
              }}
              class="flex text-[#526484] hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
              </svg>
              <span>Sign Out</span>
            </p>
          </ul>
        </div>
      </Drawer>

      <div className="px-0 lg:px-0 w-full">
        <div className="md:flex relative">
          <section
            className="hidden md:relative z-10 top-0 left-0 bottom-0 w-full bg-white md:flex md:flex-col md:items-center md:w-4/12 lg:w-1/5 bg-red-5 shadow-lg"
            style={{
              animation: "0.4 ease 0s 1 normal none running overlay-fade-in",
            }}
          >
            <div className="w-[93%] pt-3 pl-2.5">
            <Link to="/" className="flex items-center">
            <White/>
          </Link>
              <div className="flex items-center justify-between border-y-2 my-2 py-6 px-4 md:hidden">
                <p class="rounded-full w-8 h-8 flex justify-center items-center bg-blue-600 mr-6">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-gray-300 bg-clip-text rounded-full"
                    height="13"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    </g>
                  </svg>
                </p>
                <p className="flex flex-col flex-1 text-sm">
                  <span className="font-semibold">$</span>
                  <span className="text-gray-600 text-xs">$</span>
                </p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </div>
              <div className="py-6 px-1 mb-5 w-11/12 hidden md:block">
                <div className="uppercase mt-3  text-xs tracking-wide text-gray-700 font-semibold tra">
                  Main account Balance
                </div>
                <p className="text-2xl font-semibold text-red-600">
                  $0 <span className="text-lg">USD</span>
                </p>
                <p className="flex justify-between text-gray-800 mt-3 font-medium text-sm">
                  <span>Deposit</span>
                  <span>$0.00 usd</span>
                </p>
                <p className="flex justify-between text-gray-800 mt-3 font-medium text-sm">
                  <span>Withdraw</span>
                  <span>$0.00 usd</span>
                </p>
                <p className="flex justify-between items-center font-semibold pt-5">
                  <Link
                    className="flex items-center pl-4 pr-2 py-1.5 hover:text-white text-sm bg-red-500 text-white rounded"
                    to="/user/deposit"
                  >
                    <span>Deposit</span>
                  </Link>
                  <Link
                    className="px-4 py-1.5 text-sm bg-yellow-500 hover:text-white text-white rounded"
                    to="/user/withdraw"
                  >
                    Withdraw
                  </Link>
                </p>
              </div>
              <div className="w-11/12 font-medium text-slate-700 text-sm">
                <div className="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
                  Menu
                </div>
                <ul>
                  <Link
                    className="flex hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12  active"
                    to="/user/dashboard"
                    style={{ color: "rgb(82, 100, 132)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      className="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    className="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/user/deposit"
                    style={{ color: "rgb(82, 100, 132)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                      </g>
                    </svg>
                    <span>Deposit</span>
                  </Link>
                  <Link
                    className="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/user/withdraw"
                    style={{ color: "rgb(82, 100, 132)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm8 7V9l4 4-4 4v-3H8v-2h4z"></path>
                      </g>
                    </svg>
                    <span>Withdraw</span>
                  </Link>
                  <Link
                    className="flex text-red-500 focus:text-red-500 hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/user/profile"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <polyline points="17 11 19 13 23 9"></polyline>
                    </svg>
                    <span>Account Setting</span>
                  </Link>
                  <p
                    onClick={() => {
                      dispatch(setToken(""));
                      dispatch(setUserDetails({}));
                      navigate("/public/login", { replace: true });
                      // setTimeout(()=>{
                      // window.location.assign('enefti-six.vercel.app/')
                      // },2000)
                    }}
                    class="flex text-[#526484] hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                    </svg>
                    <span>Sign Out</span>
                  </p>
                </ul>
              </div>
            </div>
          </section>

          <div className="flex-1 h-screen bg-[#f5f6fa]">
            <div className="pt-2 px-3 flex items-center justify-between border-b border-gray-200 bg-white">
              <div class="bg-green200 p-0 relative -top-1" onClick={showDrawer}>
                <span tabindex="0" class="btn btn-ghost btn-circle  md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 e text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="justify-self-center pb-2">
              <Link to="/" className="flex items-center">
            <White/>
          </Link>
              </div>
              <div class="py-1">
                <p class="rounded-full w-8 h-8 flex justify-center items-center bg-rose-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class=" text-gray-300 bg-clip-text rounded-full"
                    height="13"
                    width="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    </g>
                  </svg>
                </p>
              </div>
            </div>

            <div class="px-6 md:px-12 lg:px-12">
              <div class="text-slate-700">
                <p class="text-xl lg:text-4xl font-medium pt-8 mb-10">
                  Preferences
                </p>
                <p className="mb-5">
                  You have full control to manage your own account setting.
                </p>
              </div>
              <div className="relative">
                <div className="flex space-x-7 border-b">
                  {tabsData.map((tab, idx) => {
                    return (
                      <button
                        key={idx}
                        ref={(el) => (tabsRef.current[idx] = el)}
                        className="pt-2 pb-3 text-sm focus:text-blue-500"
                        onClick={() => setActiveTabIndex(idx)}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
                <span
                  className="absolute bottom-0 block h-0.5 bg-blue-400 transition-all duration-300"
                  style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                />
              </div>
              <div className="py-4">
                <p>{tabsData[activeTabIndex].content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
