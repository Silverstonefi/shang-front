import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiAngelWings } from "react-icons/gi";
import { setUserDetails, setToken } from "../../Redux/action";
import { useDispatch } from "react-redux";

const Signin = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [exists, setexists] = useState("");
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    exists: "",
  });
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    //console.log(`em ${email}   ${password}`);
    setMsg({});
    fetch("https://sheltered-bastion-98583.herokuapp.com/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        // console.log('res', res);
        if (res.msg) {
          setError("incorrect login credentials");
          setTimeout(() => {
            setError("");
          }, 2000);
          return;
        }

        if (res.error) {
          setError("incorrect login credentials");
          setTimeout(() => {
            setError("");
          }, 2000);
          return;
        }

        const { token } = res;
        const { user } = res;

        if (token != undefined) {
          if (user.role === "admin") {
            navigate("/admin/users", { replace: true });
            return;
          }
          dispatch(setToken(token));
          dispatch(setUserDetails(user));
          // window.location.assign('http://enefti-six.vercel.app/user/dashboard')
          // https://zany-gold-perch-sock.cyclic.app/login
        // https: navigate("/user/dashboard", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  const inputStyle =
    " pl-4 mt-1 block w-full border-none bg-primary placeholder-white text-sm h-11 focus:ring-0";

  return (
    <div className="flex flex-col items-center h-full justify-center text-white bg-reed pt-6 lg:pt-12 text-center w-full mb-6">
      <div className="lg:mx-auto  w-full lg:w-10/12  px-6 lg:px-12">
        <div class="flex items-center text-secondary justify-center ">
          <div className="">
            <GiAngelWings size={42} className="mx-3 " />
          </div>
          <span class="Capitalize text-lg font-bold">Moonverse</span>
        </div>
        <div className=" w-full mx-auto pt-6 md:pt-0 max-h-screen  md:h-auto flex flex-col self-center items-center md:mt-10 mb-12">
          <div className="sm:max-w-sm w-full">
            <div className="w-full rounded-lg py-0 lg:py-20 px-6 pt-4 lg:pt-12 md:pt-6 bg-accent text-white shadow-xl">
              <label
                for=""
                className="block mt-3 text-base lg:text-xl uppercase font-bold -900 text-center"
              >
                Sign in
              </label>
              <form method="#" action="#" className="mt-6">
                <div className="pb-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-base">
                    Email
                  </div>
                  <input
                    placeholder="Enter your email"
                    className={inputStyle}
                    onChange={onEmailChange}
                  />
                </div>
                <div className="text-center text-red-400 text-sm">{msg.id}</div>

                <div className="mt-3">
                  <div className="text-left font-semibold pb-1 text-xs lg:text-base">
                    Password
                  </div>

                  <input
                    type="password"
                    onChange={onPasswordChange}
                    placeholder="Enter your password"
                    className={inputStyle}
                  />
                </div>
                <div className="text-center text-red-600 text-sm">
                  {msg.password}
                </div>
                <div className="text-center text-red-600 text-sm">{error}</div>

                <div className="mt-7">
                  <button
                    onClick={login}
                    className="btn btn-secondary lg:btn-wide btn-sm h-9"
                  >
                    Sign in
                  </button>
                </div>
                {/* {error ? <div>{error}</div> : null} */}
                <div className="flex mt-4 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <label className="block  text-base lg:text-lg font-extrabold w-full uppercase">
                    or
                  </label>
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div className="flex mt-4 justify-center w-full">
                  <div className="font-semibold text-sm lg:text-base mb-6">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="ml-2 text-secondary font-bold"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* form starts here; */}
    </div>
  );
};

export default Signin;
