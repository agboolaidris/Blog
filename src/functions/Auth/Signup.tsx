import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";

import SignUpComponent from "../../components/Auth/SignupForm";
import { useAuthDispatch, useAuthState } from "../../States/Context/Auth";
import { register } from "../../States/Api/Auth";

function Signup() {
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [info, setinfo] = useState({});

  const router = useRouter();
  const { error, type } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (type == "REGISTER") {
      setinfo(error);
    }
  }, [error, type]);

  const handleChange = (e: any) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    register(state, router, dispatch);
  };

  return (
    <SignUpComponent
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={info}
    />
  );
}

export default Signup;
