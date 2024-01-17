import React from 'react';
import Nav from "../Navx";
import { Link } from 'react-router-dom';
import bultpay from "../../../images/bultpay3.png";

const TC = () => {
  return (
    <div className="">
      <Nav />
      <div className="flex bg-[#1f2b3a]  justify-center text-black px-4 lg:pb-12 lg:px-28">
        <div className="my-44 bg-white mx-5 rounded-lg p-4">
          <div className="font-semibold text-lg text-center">
            Terms and Conditions
          </div>
          <div className="py-10 px-5 font-semibold">
            Our Terms of service are as follows:
            <br />
            <br />
            • Only one account is allowed per user over all time. If your
            account gets blocked, you cannot use Bultpay services anymore.
            Incase of account suspension you can contact support
            <br />
            <br />
            • Accounts must be synonymously verified with adequate documents.
            Each document bearing name, address and a passport photograph of
            user not more than three months old • Users can only invest within
            the limits of their accounts, otherwise maiden upgrade to a higher
            plan at a merchant fee, subsequent upgrades/downgrades are free
            <br />
            <br />
            • Upgrades and downgrades can be done on user accounts. Maiden
            upgrades are necessary to maintain merchant policies
         
            • Internal funds transfer are applicable between users
            
            •Internally transferred funds are instant payments and are
            non-reversible
            <br />
            <br />
            • All bank codes are necessary for verification of user’s bank
            account and other payment gateways available in your country
            <br />
            <br />
            • In the case of wrong deposit information, contact support for
            immediate reversal within three days with original proof of deposit
            <br />
            <br />• Withdrawals pending more than three working days are
            automatically rolled over to a new period • User protection covers
            clients accounts and investments. Bult technologies does not have
            access to users funds 
            <br /><br />
            • Your local bank has COT rights on wired
            transfers For all user related issues, contact our social media
            support systems available to you or mail{" "}
            <span className="text-blue-600">support@bultpay.com</span>
          </div>
          <div className="md:space-x-40 md:flex space-y-5 px-5 md:space-y-0 block">
            {/* <Link to="/user/dashboard">
            <button className="btn btn-success px-10 text-gray-300">
              Agree
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-error px-10 text-gray-300">
              Disagree
            </button>
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TC;