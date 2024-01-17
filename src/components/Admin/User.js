import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import { setAdUser } from '../../Redux/action';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const User = ({ user, notify }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // let history = useHistory();
  const EditUser = () => {
    dispatch(setAdUser(user));
    navigate('/admin/editUser', { replace: true });
  };

  const onDel = async () => {
    const { email } = user;
    const isNotThere = await fetch(
      'https://sheltered-bastion-98583.herokuapp.com/deleteuser',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }
    );
    let resp = await isNotThere.json();
    notify('deleted');
  };

  return (
    
    <div className="lg:p-5 p-3 bg-accent border rounded-md text-white shadow-xl border-white  flex-1 flex justify-between lg:items-center lg:flex-row flex-col gap-3">
      <div className="text-base font-semibold gap-5">
        <p>{`Name: ${user.name}`}</p>
        <p>{`Email: ${user.email}`}</p>
      </div>
      <div className="text-gray-600 flex lg:justify-between self-end gap-2">
        <FiEdit className="text-blue-300 cursor-pointer" size={34} onClick={EditUser} />
        <RiDeleteBinLine
          className="text-red-400 cursor-pointer"
          size={34}
          onClick={onDel}
        />
      </div>
    </div>
  );
};

export default User;
