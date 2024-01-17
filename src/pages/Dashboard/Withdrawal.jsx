import { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import useRedirect from '../../hooks/useRedirect';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Withdrawal = () => {
  const user = useSelector((state) => state.auth.user_details);

  const { email, balance, withdrawal: pendingWithdrawal } = user;

  const notify = (word) => {
    toast.info(`${word}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useRedirect('withdrawal');
  const [withdrawal, setWithdrawal] = useState({
    amount: '',
    address: '',
    addressType: '',
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
    if (!withdrawal.amount || !withdrawal.address || !withdrawal.addressType) {
      return notify('Please provide all information');
    }

    // if (withdrawal.amount > balance) {
    //   return notify('Insufficient balance');
    // }

    const response = await fetch(
      'https://sheltered-bastion-98583.herokuapp.com/withdraw',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          withdrawal: withdrawal.amount,
        }),
      }
    );

    let result = await response.json();

    notify(`${result.msg}`);

    setWithdrawal({
      amount: '',
      address: '',
      addressType: '',
    });
  };

  return (
    <div className="lg:px-16 md:px-8 px-2 h-full w-5/6 mx-auto">
      <DashboardHeader />
      <div className="my-8 flex justify-between">
        <h1 className="text-2xl font-bold pb-3">Withdrawal</h1>
      </div>

      <section className="flex flex-col justify-between gap-x-10">
        <div class="stats bg-accent text-primary-content">
          <div class="stat">
            <div class="stat-title">Account balance</div>
            <div class="stat-value text-white">${balance}</div>
          </div>

          <div class="stat md:block hidden">
            <div class="stat-title">Pending withdrawal</div>
            <div class="stat-value text-white">${pendingWithdrawal}</div>
          </div>
        </div>

        <div className="my-10 py-10">
          <div className="lg:w-full mx-auto flex flex-col">
            <h2 className="text-lg font-semibold pb-3 w-full text-center">
              Withdraw from your wallet
            </h2>
            <div class="form-control w-full mt-2 bg-accent lg:p-10 p-5 rounded">
              <select
                class="select select-sm select-bordered select-ghost max-w-md"
                onChange={handleChange}
                name="addressType"
              >
                <option disabled selected>
                  Select address type
                </option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
                <option value="usdt">USDT</option>
              </select>
              <div className="my-2">
                <label class="label">
                  <span class="label-text">Enter address</span>
                </label>
                <label class="input-group w-full input-group-xs mt-1 text-white">
                  <span className="bg-gray-700 font-bold text-sm">Address</span>
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={withdrawal.address}
                    placeholder="Enter address"
                    class="input h-8 input-group-xs input-bordered text-primary w-full"
                  />
                </label>
              </div>
              <div className="my-2">
                <label class="label">
                  <span class="label-text">Enter amount</span>
                </label>
                <label class="input-group input-group-xs mt-1 text-white w-full">
                  <span className="bg-gray-700 font-bold text-sm">Price</span>
                  <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    placeholder="0"
                    value={withdrawal.amount}
                    class="input h-8 input-group-xs input-bordered text-primary w-full"
                  />
                  <span className="bg-gray-700 font-bold text-sm">USD</span>
                </label>
              </div>

              <button
                class="btn btn-primary btn-square mx-0 text-white flex btn-block bg-secondary mt-6"
                onClick={handleWithdrawal}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Withdrawal;
