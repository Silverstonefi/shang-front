import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import bultpay from "../../../images/whitebulllogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

const UsdcWld = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.auth.user_details);

  const { email } = user;

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

  // useRedirect("withdrawal");
  const [withdrawal, setWithdrawal] = useState({
    amount: "",
    address: "",
    addressType: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    // console.log({ name, value });
    setWithdrawal({
      ...withdrawal,
      [name]: value,
    });
  };

  const handleWithdrawal = async () => {
    // console.log('first click')
    // if (!withdrawal.amount || !withdrawal.address || !withdrawal.addressType) {
    //   return notify("Please provide all information");
    // }

    // if (withdrawal.amount > balance) {
    //   return notify('Insufficient balance');
    // }

    const response = await fetch(
      "https://calm-rose-frog-kilt.cyclic.app/withdraw",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          withdrawal: withdrawal.amount,
        }),
      }
    );

    let result = await response.json();

    notify(`${result.msg}`);

    setWithdrawal({
      amount: "",
      address: "",
      addressType: "",
    });
  };
  return (
    <div className="bg-[#f5f6fa] h-screen">
      <div className="flex">
        <AiOutlineRollback
          className="text-blue-300"
          size={34}
          onClick={() => {
            navigate("/user/withdraw");
          }}
        />
        <p className="pt-2 font-bold">back</p>
      </div>
      <Link className="flex justify-center" to="/">
        <img src={bultpay} className="w-28 tp-3 lg:w-36" />
      </Link>

      <ToastContainer />
      <section class=" md:flex flex-col justify-center font-normal">
        <div class="flex flex-col items-center font-semibold text-2xl px-0 md:px-6 pt-8 h-full">
          <p class="text-lg md:text-3xl text-slate-600 text-center mt-6">
            Withdraw Funds With Bank
          </p>
          <p class="text-center font-normal text-sm px-2 md:w-1/3 text-slate-600">
            Secure and safely deposit money into your account
          </p>
          <section class=" w-full md:w-auto">
            <div class="h-full w-full flex font-normal flex-col items-center">
              <div class=" flex flex-col justify-center w-11/12 md:w-full mt-10">
                <p class="flex flex-col w-72 md:w-80 lg:w-96 text-base">
                  <span class="text-sm pb-2 font-semibold">Enter Address:</span>
                  <input
                    type="text/number"
                    onChange={handleChange}
                    // value={withdrawal.address}
                    placeholder="Enter Address"
                    class="py-1 px-2 text-base rounded border mt-1 mb-4 border-gray-200 md:w-96"
                  />
                </p>
                <p class="flex flex-col w-72 md:w-80 lg:w-96 text-base">
                  <span class="text-sm pb-2 font-semibold">Enter Amount:</span>
                  <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    placeholder="0"
                    // value={withdrawal.amount}
                    class="py-1 px-2 text-base rounded border mt-1 mb-4 border-gray-200 md:w-96"
                  />
                </p>
                <button
                  onClick={handleWithdrawal}
                  class="px-3 py-1.5 md:w-72_ md:w-80 lg:w-full md:py-2.5 text-sm bg-red-500 text-white font-medium rounded uppercase mt-3 md:mt-0"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
export default UsdcWld;
