import React from 'react';
import { GiAngelWings } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { setToken, setUserDetails } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const DashboardHeader = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const user = useSelector((state) => state.auth.user_details);

  const objectLength = Object.keys(user).length;

  const validUser = objectLength > 0;

  return (
    <div className="sticky top-0 left-0 w-full z-10">
      <div class="navbar bg-primary">
        <div class="flex-1">
          <Link
            className="text-4xl lg:hidden text-secondary"
            to="/user/dashboard"
          >
            <GiAngelWings />
          </Link>
        </div>
        <div class="flex-none gap-3">
          <Link
            to="/user/wallet"
            class="ml-6 px-3 py-2 rounded font-semibold bg-green-300 active::bg-red-300 text-black text-sm lg:text-base"
          >
            connect wallet
          </Link>

          {validUser && (
            <>
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
                  </div>
                </label>
                <ul
                  tabindex="0"
                  class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
                >
                  <li>
                    <Link to="/user/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/user/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        dispatch(setToken(''));
                        dispatch(setUserDetails({}));
                        navigate('/', { replace: true });
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
