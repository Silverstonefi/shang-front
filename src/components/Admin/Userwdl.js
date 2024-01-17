import React from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { setAdUser } from "../../Redux/action"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate  } from "react-router-dom";

const Userwdl = ({ user }) => {
  console.log("who is", user);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // let history = useHistory();
  const EditUser = () => {
    dispatch(setAdUser(user));
    // localStorage.setItem("user", JSON.stringify(user));
    navigate("/admin/editUser", { replace: true });
  };

  const approve = async () => {
    console.log("appprv na");
    const notify = () =>
      toast.info("DONE", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    notify();
    const { email } = user;
    const isNotThere = await (
      await fetch("https://sheltered-bastion-98583.herokuapp.com/wapprove", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pdgwdl: user.pdgwdl }),
      })
    ).json();
    console.log("approve", isNotThere);
  };
  const decline = async () => {
    // console.log("appprv na");
    const notify = () =>
      toast.info("DONE", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    notify();
    const { email } = user;
    const isNotThere = await (
      await fetch("https://sheltered-bastion-98583.herokuapp.com/wdecline", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pdgwdl: user.pdgwdl }),
      })
    ).json();
    // console.log("approve", isNotThere);
  };

  return (
    <div className="px-2 py-1 border shadow-xl mb-2 bg-white mr-2 flex-1 flex justify-between">
      {/* <div className="text-white px-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
        <i className="fas fa-user"></i>
      </div> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h6 className="text-base font-semibold">
        <div>{`Name: ${user.name}`}</div>
        <div>{`Email: ${user.email}`}</div>
        {/* <div>{`Joined: ${user.joined.slice(0,10)}`}</div> */}
        {/* <div>{`Deposit: ${user.deposit}`}</div>
        <div>{`Profits: ${user.profits}`}</div>
        <div>{`Withdrawal: ${user.withdrwal}`}</div>
        <div>{`Referral: ${user.referral}`}</div> */}
      </h6>
      <div className="mt-1 text-gray-600 flex justify-between ml-6">
        <button
          //   onClick={EditUser}
          className="bg-green-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-2 py-0.5 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={approve}
        >
          Approve
        </button>
        <button
          //   onClick={EditUser}
          className="bg-red-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-2 py-0.5 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={decline}
        >
          Declined
        </button>

        {/* <button
          onClick={onDel}
          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default Userwdl;
