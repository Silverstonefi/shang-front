import React from 'react';
// import { FiSun } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import { GiAngelWings } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const grad = 'bg-gradient-to-r from-pink-300 via-secondary to-secondary';
const gradText = `${grad} text-black bg-clip-text stroke-transparent fill-black stroke-2 `;

export default function LandingNav() {
  return (
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact  dropdown-content mt-3 p-3 shadow bg-accent rounded-lg w-52"
          >
            <li>
              <Link className="mb-3" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          class="btn btn-ghost lg:hidden font-semibold text-base uppercase"
        >
          Moonverse
        </Link>
      </div>
      <div class="hidden lg:flex lg:navbar-center ml-0">
        <Link
          to="/"
          class="btn btn-ghost font-semibold text-sm lg:text-xl uppercase"
        >
          Moonverse
        </Link>
      </div>
      <div class="navbar-end">
        <Link
          to="/user/wallet"
          class="ml-6 px-3 py-2 rounded font-semibold bg-green-300 active::bg-red-300 text-black text-sm lg:text-base"
        >
          connect wallet
        </Link>
      </div>
    </div>
  );
}
