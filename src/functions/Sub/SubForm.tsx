import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CreateSubForm from "../../components/Sub/CreateSubForm";

function SubForm() {
  const [error, seterror] = useState({});
  const router = useRouter();
  const [state, setstate] = useState({
    name: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    seterror({});
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/sub", state);
      router.push(`/r/${data.name}`);
    } catch (error) {
      if (error.response?.data) seterror(error.response.data);
    }
  };
  return (
    <>
      <CreateSubForm
        state={state}
        error={error}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default SubForm;
