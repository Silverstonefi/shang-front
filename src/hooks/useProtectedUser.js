import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const useProtectedUser = async () => {
  const token = useSelector((state) => state.auth.token);
  console.log(
    "redux toks......................................................",
    token
  );
  let res = await fetch("https://calm-rose-frog-kilt.cyclic.app/protected", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  return await res.json();
};

export default useProtectedUser;
