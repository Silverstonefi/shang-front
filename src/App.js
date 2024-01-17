// import react, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Landing/Home";
import Homex from "./pages/landingx/Homex";
// import Menu from "./components/Nav/Menu";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Deposit from "./pages/Dashboard/Deposit";
// import Profile from "./pages/Dashboard/Profile";
// import Withdrawal from "./pages/Dashboard/Withdrawal";
// import Wallet from "./pages/Dashboard/Wallet";
// import Signup from "./pages/Landing/Signup";
// import SignIn from "./pages/Landing/SignIn";
// import Collections from "./pages/Landing/Collections";
// import Admin from "./pages/Admin/";
// import { Suspense } from "react";
// import { Code, Instagram } from "react-content-loader";
// import MyLoader from "./loader";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/landingx/Aboutx";
import Contact from "./pages/landingx/Contactx";
import Market from "./pages/landingx/Marketsx";
import Loginx from "./pages/landingx/Loginx";
import Registerx from "./pages/landingx/Registerx";
import Activate from "./pages/landingx/Activate";
import Dashboardx from "./pages/landingx/Dashboard/Dashboardx";
import Deposit from "./pages/landingx/Dashboard/Deposit";
import Withdraw from "./pages/landingx/Dashboard/Withdraw";
import Profile from "./pages/landingx/Dashboard/Profile";
import Withdrawal from "./pages/landingx/Adminx/Withdrawal";
import EditUsers from "./pages/landingx/Adminx/EditUsers";
import AllUsers from "./pages/landingx/Adminx/AllUsers";
import UserDep from "./pages/landingx/Adminx/UserDep";
import SetActivate from "./pages/landingx/SetActivate";
import ResetPassword from "./pages/landingx/ResetPassword";
import TC from "./pages/landingx/Dashboard/T&C";
import BtcWld from "./pages/landingx/Dashboard/BtcWld";
import { useSelector } from "react-redux";
import UsdcWld from "./pages/landingx/Dashboard/UsdcWld";
import PaypalWld from "./pages/landingx/Dashboard/PaypalWld";

const App = () => {
  const { email } = useSelector((state) => state.auth.user_details);
  const props = { email };

  return (
    <div className="">
      
      <Routes>
        <Route path="/" element={<Homex />} />
        <Route path="public/about" element={<About />} />
        <Route path="public/contact" element={<Contact />} />
        <Route path="public/markets" element={<Market />} />
        <Route path="/public/login" element={<Loginx />} />
        <Route path="/public/register" element={<Registerx />} />
        <Route path="/public/activate" element={<Activate />} />
        <Route path="/on-activate/:email" element={<SetActivate />} />
        {/* <Route
          path="user/dashboard"
          render={(props) => <Dashboardx {...props} />}
        /> */}
        <Route path="/user/dashboard" element={<Dashboardx />} />
        <Route path="/user/deposit" element={<Deposit />} />
        <Route path="/user/withdraw" element={<Withdraw />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/admin/users" element={<AllUsers />} />
        <Route path="/admin/withdrawals" element={<Withdrawal />} />
        <Route path="/admin/edituser" element={<EditUsers />} />
        <Route path="/admin/deposits" element={<UserDep />} />
        <Route path="/public/forgot-password" element={<ResetPassword />} />
        <Route path="/user/T&C" element={<TC />} />
        <Route path="/user/btc/withdrawal" element={<BtcWld />} />
        <Route path="/user/usdc/withdrawal" element={<UsdcWld />} />
        <Route path="/user/paypal/withdrawal" element={<PaypalWld />} />

        {/* <Route path="/collections" element={<Collections />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/deposit" element={<Deposit />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="user/withdrawal" element={<Withdrawal />} />
            <Route path="/user/wallet" element={<Wallet />} />
            <Route path="/admin/*" element={<Admin />} /> */}
      </Routes>
    </div>
  );
};

export default App;
