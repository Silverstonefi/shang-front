import React, { useEffect, useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import bultpay from "../../../images/whitebull.jpg";
import { useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { setToken, setUserDetails } from "../../../Redux/action";
import { useDispatch } from "react-redux";
import Widget2 from "./Widget2";
import useRedirect from "../../../hooks/useRedirect";
import White from "../../../components/Nav/Whiteicon";

const Dashboardx = ({login}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userx = useSelector((state) => state.auth.user_details);
  // console.log("userdets",user);

  const [user, setUserx] = useState(userx);

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  useEffect(() => {
    if (login) {
      login = false;
      return;
    }
    fetch("https://calm-rose-frog-kilt.cyclic.app/sign-up", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("ttt", res);
        const { user } = res;

        if (!user) return;
        setUserx(user);
      })
      .catch((err) => console.log("error", err));
  }, [email]);

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

  return (
    <div>
      {/* DRAWER */}
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
              class="default_cursor_cs"
            >
              <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
            </svg>
          </p>
        </div>
        <div class="flex items-center justify-between border-y-2 my-2 py-6 px-4">
          <p class="rounded-full w-8 h-8 flex justify-center items-center bg-sky-600 mr-6">
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
          <div class="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
            Menu
          </div>
          <ul>
            <Link
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12  active"
              to="/user/dashboard"
              style={{ color: "rgb(225, 29, 72)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                class="mr-4"
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/user/deposit"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="mr-4"
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
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
              to="/user/withdraw"
              style={{ color: "rgb(82, 100, 132)" }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="mr-4"
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
              class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
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
                class="mr-4"
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

      {/* Content */}
      <div className="px-0 lg:px-0 w-full">
        <div className="md:flex relative">
          {/* left Section */}
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
                <p class="flex flex-col flex-1 text-sm">
                  <span class="font-semibold">¥</span>
                  <span class="text-gray-600 text-xs">¥</span>
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
                <div class="uppercase mt-3  text-xs tracking-wide text-gray-700 font-semibold tra">
                  Main account Balance
                </div>
                <p class="text-2xl font-semibold text-red-600">
                  ¥{user.balance} <span class="text-lg">Yuan</span>
                </p>
                <p class="flex justify-between text-gray-800 mt-3 font-medium text-sm">
                  <span>Deposit</span>
                  <span>¥{user.deposit} Yuan</span>
                </p>
                <p class="flex justify-between text-gray-800 mt-3 font-medium text-sm">
                  <span>Withdraw</span>
                  <span>¥{user.withdrawal} Yuan</span>
                </p>
                <p class="flex justify-between items-center font-semibold pt-5">
                  <Link
                    class="flex items-center pl-4 pr-2 py-1.5 hover:text-white text-sm bg-red-500 text-white rounded"
                    to="/user/deposit"
                  >
                    <span>Deposit</span>
                  </Link>
                  <Link
                    class="px-4 py-1.5 text-sm bg-yellow-500 hover:text-white text-white rounded"
                    to="/user/withdraw"
                  >
                    Withdraw
                  </Link>
                </p>
              </div>
              <div className="w-11/12 font-medium text-slate-700 text-sm">
                <div class="tracking mt-10 uppercase text-xs font-bold pl-3 tracking-wider">
                  Menu
                </div>
                <ul>
                  <Link
                    class="flex text-red-500 hover:bg-slate-200 focus:text-red-500 items-center py-3 px-3 rounded w-10/12"
                    to="/user/dashboard"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      class="mr-4"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/user/deposit"
                    style={{ color: "rgb(82, 100, 132)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="mr-4"
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
                    class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
                    to="/user/withdraw"
                    style={{ color: "rgb(82, 100, 132)" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      class="mr-4"
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
                    class="flex text-black hover:bg-slate-200 items-center py-3 px-3 rounded w-10/12"
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
                      class="mr-4"
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

          {/* Dashboard content */}
          <div className="flex-1 bg-[#f5f6fa]">
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
            <section className="lg:bg-gray-50">
              <div class="px-6 pt-6">
                <p class="text-gray-500">Welcome!</p>
                <p class="text-xl lg:text-3xl mt-3 font-medium pb-0 mb-0 capitalize">
                  {user.name}
                </p>
                <p class="text-xs lg:text-sm text-slate-700 pb-3 font-medium">
                  {user.email}
                </p>
                <p class="text-gray-700 text-sm lg:text-sm">
                  Here's a summary of your account. Have fun!
                </p>
              </div>

              {/* <div className="mx-6 my-3 md:w-1/2 bg-gray-600f">
                <div className="flex justify-center p-3">
                  <p className="text-lg font-bold">Our Plan</p>
                </div>
                <div className="mx-1 bg-slate-200 py-2">
                  <p className="mx-4 font-medium mb-2">5% in 7 Days</p>
                  <div className="flex px-6 font-semibold bg-blue-500 text-white">
                    <p className="border-r border-white md:pr-16 pr-10 mr-8">
                      Plan
                    </p>
                    <p className="border-r border-white md:pr-16 pr-10 mr-8">
                      Min(¥)
                    </p>
                    <p>Profit(%)</p>
                  </div>
                  <div className="flex px-3 font-medium">
                    <p className="md:pr-16 pr-10">Basic Plan</p>
                    <p className="md:pr-28 pr-20">¥500</p>
                    <p>5%</p>
                  </div>
                </div>
                <div className="mx-1 bg-slate-200 py-2 mt-3">
                  <p className="mx-4 font-medium mb-2">25% in 30 Days</p>
                  <div className="flex px-6 font-semibold bg-blue-500 text-white">
                    <p className="border-r border-white md:pr-16 pr-10 mr-8">
                      Plan
                    </p>
                    <p className="border-r border-white md:pr-16 pr-10 mr-8">
                      Min(¥)
                    </p>
                    <p>Profit(%)</p>
                  </div>
                  <div className="flex px-3 font-medium">
                    <p className="md:pr-16 pr-10">Pro Plan</p>
                    <p className="md:pr-28 pr-20">¥15000</p>
                    <p>25%</p>
                  </div>
                </div>
              </div> */}

              <div className="md:flex md:flex-wrap md:mt-12">
                <div class="py-6 px-3  md:w-[300px] shadow-lg my-5 mx-5 border border-gray-300 border-b-4 border-b-red-400 ">
                  <p class="flex justify-between items-center">
                    <div class="tooltip text-black" data-tip="hello">
                      <span>Available Balance</span>
                    </div>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </p>
                  <p class="text-2xl font-semibold pt-6">¥{user.balance} Yuan</p>
                  <p class="flex justify-between items-center font-semibold pt-16 md:inline lg:flex">
                    <Link
                      class="flex items-center pl-4 pr-2 py-1.5 text-sm bg-red-500 text-white rounded-md md:my-3"
                      to="/user/deposit"
                    >
                      <span>Deposit</span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        class="text-white"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </Link>
                    <Link
                      class="px-4 py-1.5 text-sm bg-sky-800 text-white rounded-md md:px-2 lg:px-4"
                      to="/user/withdraw"
                    >
                      Access funds
                    </Link>
                  </p>
                </div>
                <div class="py-6 px-3 md:w-[300px] shadow-lg my-5 mx-5 border border-gray-300 border-b-4 border-b-sky-800 ">
                  <p class="flex justify-between items-center">
                    <span>Earnings</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </p>
                  <div class="uppercase text-xs pt-6">This month</div>
                  <p class="text-2xl font-semibold">¥{user.profits} Yuan</p>
                </div>
                {/* <div class="py-6 px-3 shadow-lg my-5 mx-5 border border-gray-300 border-b-4 border-b-sky-800 md:w-[300px]">
                  <p class="flex justify-between items-center">
                    <span>Network Fee</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </p>
                  <div class="uppercase text-xs pt-6">This month</div>
                  <p class="text-2xl font-semibold">¥{user.fee} Yuan</p>
                </div> */}
                <div class="py-6 px-3 shadow-lg my-5 mx-5 border border-gray-300 border-b-4 border-b-sky-800 md:w-[300px]">
                  <p class="flex justify-between items-center">
                    <span>Total Deposit</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </p>
                  <div class="uppercase text-xs pt-6">This month</div>
                  <p class="text-2xl font-semibold">¥{user.deposit} Yuan</p>
                </div>
                <div class="py-6 px-3 shadow-lg my-5 mx-5 border border-gray-300 border-b-4 border-b-yellow-400 md:w-[300px]">
                  <p class="flex justify-between items-center">
                    <span>Total Withdrawal</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                    </svg>
                  </p>
                  <div class="uppercase text-xs pt-6">This month</div>
                  <p class="text-2xl font-semibold">¥{user.withdrawal} Yuan</p>
                </div>
              </div>
              <div className="z-10 w-full">
                <Widget2 />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardx;
