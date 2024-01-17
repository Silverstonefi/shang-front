import { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiCopyAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader';
import useRedirect from '../../hooks/useRedirect';
import { toast } from 'react-toastify';

const Profile = () => {
  useRedirect('profile');
  setTimeout(() => {}, 600);

  let navigate = useNavigate();

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

  const user = useSelector((state) => state.auth.user_details);
  console.log({ user_details: user });

  const [newUser, setNewUser] = useState({
    email: user.email,
    name: user.name,
    btc: user.btc,
    phone: user.phone,
  });

  let { email, name } = user;
  if (name) {
    name = name.split(' ');
  } else {
    name = ['', ''];
  }

  const first = name[0];
  const last = name[1];

  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
    console.log('user', newUser);
  };

  const onEdit = async (event) => {
    const { email, name, btc, phone } = user;

    const iseditUser = await fetch(
      'https://sheltered-bastion-98583.herokuapp.com/users/:id',
      {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
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

    notify('Saved!');
  };

  const cancel = () => {
    setNewUser({
      email: user.email,
      name: user.name,
      btc: user.btc,
      phone: user.phone,
    });

    notify('Cancelled!');
  };

  return (
    // <div className="lg:px-16 md:px-8 w-full pt-0 flex flex-col lg:w-9/12 justify-center lg:py-0 lg:ml-16 px-4">
    <div className="lg:px-24 md:px-8 px-2 h-full lg:pb-10 w-[90%] mx-auto">
      <DashboardHeader />

      <div className="my-8 flex justify-between ">
        <h1 className="text-2xl font-bold pb-3">Profile</h1>
        <div class="text-sm breadcrumbs">
          <ul>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                User
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="pb-20">
        {/* <!-- component --> */}
        <div class="w-full lg:w-10/12 space-y-8 p-10 rounded-xl shadow-lg z-10 bg-accent">
          <div class="grid  gap-8 grid-cols-1">
            <div class="flex flex-col ">
              <div class="flex flex-col sm:flex-row items-center">
                <h2 class="font-semibold text-lg mr-auto lg:text-xl text-white">
                  Edit your details here
                </h2>
                <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div class="mt-5">
                <div class="form">
                  <div class="mb-3 space-y-2 w-full text-base">
                    <label class="  text-sm text-gray-100 py-2  lg:text-md">
                      Email
                    </label>
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                      <input
                        class="bg-primary appearance-none block w-full bg-grey-lighter text-grey-darker  rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        className="bg-primary flex-shrink flex-grow flex-auto leading-normal w-px  border   h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder={email}
                        disabled
                      />
                      <p class="text-red text-base hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    {/* <div class="mb-3 space-y-2 w-full text-base">
                      <label class="font-semibold text-gray-100 py-2 lg:text-lg">
                        Last Name <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder={''}
                        class="bg-primary appearance-none block w-full bg-grey-lighter text-grey-darker  rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="integration[shop_name]"
                        id="integration_shop_name"
                      />
                      <p class="text-red text-base hidden">
                        Please fill out this field.
                      </p>
                    </div> */}
                  </div>
                </div>

                <div class="mb-3 space-y-2 w-full text-base">
                  <label class="text-sm text-gray-100 py-2  lg:text-md">
                    Full Name
                  </label>
                  <input
                    name="name"
                    onChange={onChange}
                    value={newUser.name}
                    type="text"
                    class="bg-primary border border-grey-light  appearance-none block w-full bg-grey-lighter text-grey-darker  rounded-lg h-10 px-4"
                  />
                  <p class="text-red text-base hidden">
                    Please fill out this field.
                  </p>
                </div>
                <div class="mb-3 space-y-2 w-full text-base">
                  <label class=" text-sm text-gray-100 py-2  lg:text-md">
                    Phone number
                  </label>
                  <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                    <input
                      name="phone"
                      onChange={onChange}
                      value={newUser.phone}
                      type="phone"
                      class="bg-primary flex-shrink flex-grow leading-normal w-px flex-1 border   h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder=""
                    />
                  </div>

                  <div class="mb-3 space-y-2 w-full text-base">
                    <label class=" text-sm text-gray-100 py-2  lg:text-md">
                      Btc address
                    </label>
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                      <input
                        type="text"
                        name="btc"
                        onChange={onChange}
                        value={newUser.btc}
                        class="bg-primary flex-shrink flex-grow flex-auto leading-normal w-px  border   h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div class="mt-8 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button
                      onClick={cancel}
                      class="mb-4 md:mb-0 bg-primary px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-100 rounded-full hover:shadow-lg hover:bg-accent"
                    >
                      {' '}
                      Cancel{' '}
                    </button>
                    <button
                      onClick={onEdit}
                      class="mb-2 md:mb-0 mt-4 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    >
                      Save
                    </button>
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

export default Profile;
