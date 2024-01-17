import React, { useEffect, useState } from "react";
import User from "./User";
import Userwdl from "./Userwdl";
import { setUserDetails } from "../../Redux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Withdrawal = () => {
  const notify = () => {
    toast("Deleted");
    setReload(reload => !reload)}
  const [reload, setReload] = useState(false)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{
    fetch("https://sheltered-bastion-98583.herokuapp.com/deposited", {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log("usersssssssssss", res.users);
        setUsers(res.users)
      })
      .catch((err) => console.log("errrrrrrr", err));
  },[reload]
  )

    return (
      <div className="mt-24">
        <div className="">
        <div className="text-xl font-semibold mb-4 text-center text-ylw">
          All Users on the site
        </div>
        <ToastContainer />
        <input
          type="text"
          placeholder="search here..."
          className="mx-auto block py-2 rounded px-1 my-2"
          onChange={(event) => {
            setSearch(event.target.value)
            console.log('ssssss',search)
          }}
        />
        <div className="px-3 grid grid-cols-1 md:grid-cols-2">
          {users
            .filter((user) => {
              if (search == "") {
                return user;
              } else if (
                user.email
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                user.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user, i) => {
              return <Userwdl key={i} user={user} notify={notify} />;
            })}
        </div>
      </div>
      </div>
    );
} 


export default Withdrawal

