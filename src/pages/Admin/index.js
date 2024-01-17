import React, { useEffect } from 'react';
import { Switch, Route, Redirect, Link, Routes } from 'react-router-dom';

// components

// views
import Header from '../../components/Admin/Header';
import AllUsers from '../../components/Admin/Allusers';
// import Deposited from "../../components/Admin/Deposited";
import EditUser from '../../components/Admin/EditUser';
import Withdrawal from '../../components/Admin/Withdrawal';

const Admin = () => {
  //   let { url } = useRouteMatch();
  let url = 'admin';
  return (
    <>
      <div className="md:px-8 px-2 h-full w-[95%] mx-auto">
        {/* Header */}
        <Header />
        <div className="px-5 mx-auto w-full">
          <Routes>
            <Route path="/users" element={<AllUsers />} />
            <Route path="/editUser" element={<EditUser />} />
            <Route path="/withdrawals" element={<Withdrawal />} />
            {/* <Route path="/admin/" element={</>}   />
            <Route path="/admin/" element={</>}   />
            <Route path="/admin/" element={</>}   />
            <Route path="/admin/" element={</>}   />
            <Route path="/admin/" element={</>}   /> */}
            {/* <Redirect from="/user" to="/user/dashboard" /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;

{
  /* <div className="flex justify-between mb-6 uppercase font-semibold text-sm pt-32">
<Link
  className="p-2 bg-secondary text-white"
  to={`${url}/withdrawal`}
>
  Withdrawal
</Link>
<Link
  className="p-2 bg-green-400 text-white"
  to={`${url}/deposited`}
>
  deposited
</Link>
<Link
  className="p-2 bg-green-400 text-white"
  to={`${url}/allusers`}
>
  All Users
</Link>
</div> */
}
