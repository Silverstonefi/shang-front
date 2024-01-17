import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardHeader from '../../components/DashboardHeader';
import useProtectedUser from '../../hooks/useProtectedUser';
import { suspend } from 'suspend-react';
import { useNavigate } from 'react-router-dom';
import useRedirect from '../../hooks/useRedirect';

const DashboardHome = () => {
  useRedirect('dash');

  const user = useSelector((state) => state.auth.user_details);

  // console.log(user);

  const { balance, deposit, profits, withdrawal } = user;

  return (
    <div className="lg:px-16 md:px-8 px-2 h-full w-[90%] mx-auto">
      <DashboardHeader />
      <div className="my-8 flex justify-between">
        <div>
          <h1 className="text-4xl font-bold pb-3 text-white">Wallet</h1>
          <p className="text-sm text-white">Welcome to your Dashboard</p>
        </div>
      </div>

      <section className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-16">
        <div className="w-full">
          <h2 className="text-2xl font-semibold pb-6 text-white">
            Balance details
          </h2>
          <div class="card shadow-xl bg-accent">
            <div class="card-body">
              {/* <h2 class="card-title text-base text-white">Total Balance</h2>
              <p className="text-3xl font-bold text-white">$221,567</p> */}

              <div className="grid md:grid-cols-2 mt-5 gap-5">
                <div class="card bg-primary hover:bg-secondary">
                  <div className="card-body justify-between">
                    <p>Deposit</p>
                    <h3 className="font-bold text-xl text-white">${deposit}</h3>
                  </div>
                </div>
                <div class="card bg-primary hover:bg-secondary">
                  <div className="card-body justify-between">
                    <p>Withdrawal</p>
                    <h3 className="font-bold text-xl text-white">
                      ${withdrawal}
                    </h3>
                  </div>
                </div>
                <div class="card bg-primary hover:bg-secondary">
                  <div className="card-body justify-between">
                    <p>Balance</p>
                    <h3 className="font-bold text-xl text-white">${balance}</h3>
                  </div>
                </div>
                <div class="card bg-primary hover:bg-secondary">
                  <div className="card-body justify-between">
                    <p>Profits</p>
                    <h3 className="font-bold text-xl text-white">${profits}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <h2 className="text-2xl font-semibold pb-6 text-white">
            Latest transactions
          </h2>

          <div className="flex flex-col gap-10">
            <div class="card bg-accent">
              <div className="card-body flex flex-row justify-between">
                <p className="text-white">Withdrawal</p>
                <h3 className="text-secondary">${withdrawal}</h3>
              </div>
            </div>
            <div class="card bg-accent">
              <div className="card-body flex flex-row justify-between">
                <p className="text-white">Deposit</p>
                <h3 className="text-secondary">${deposit}</h3>
              </div>
            </div>
            <div class="card bg-accent">
              <div className="card-body flex flex-row justify-between">
                <p className="text-white">Deposit</p>
                <h3 className="text-secondary">${deposit}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-6 gap-10 py-24">
        <div className="w-full xl:col-span-4 col-span-3">
          <h2 className="text-2xl font-semibold pb-6">Investments</h2>
          <div class="card shadow-xl bg-accent">
            <div class="card-body">
              <h2 class="card-title text-base">chart here</h2>
            </div>
          </div>
        </div>

        <div class="w-full col-span-3 xl:col-span-2">
          <div className="flex flex-col gap-10">
            <div class="card xl:w-96 w-full bg-accent shadow-xl">
              <div class="card-body">
                <h2 class="card-title">New!</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="card xl:w-96 w-full bg-secondary shadow-xl">
              <div class="card-body">
                <h2 class="card-title">New!</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
