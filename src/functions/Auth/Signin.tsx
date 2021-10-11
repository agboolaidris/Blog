import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect, FormEvent } from "react";

import { login } from "../../States/Api/Auth";
import SigninComponent from "../../components/Auth/SigninForm";
import { useAuthDispatch, useAuthState } from "../../States/Context/Auth";

function Signin() {
  const [state, setstate] = useState({ email: "", password: "" });
  const [info, setinfo] = useState({});

  const router = useRouter();
  const { error, type } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (type == "LOGIN") {
      setinfo(error);
    }
  }, [error, type]);

  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    setinfo({});
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login(state, router, dispatch);
  };

  return (
    <SigninComponent
      handleChange={handleChange}
      state={state}
      handleSubmit={handleSubmit}
      error={info}
    />
  );
}

export default Signin;
