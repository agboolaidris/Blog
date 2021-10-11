import React from "react";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

import InputText from "../shared/InputText";
import Button from "../shared/Button";

function Register({ state, handleChange, handleSubmit, error }) {
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <InputText
        placeholder="Username"
        info={error?.username}
        icon={faUser}
        type="text"
        required={true}
        onChange={handleChange}
        value={state.username}
        name="username"
      />
      <InputText
        placeholder="email address"
        icon={faEnvelope}
        type="email"
        info={error?.email}
        required={true}
        onChange={handleChange}
        value={state.email}
        name="email"
      />
      <InputText
        placeholder="password"
        icon={faLock}
        required={true}
        type="password"
        info={error?.password}
        onChange={handleChange}
        value={state.password}
        name="password"
      />
      <InputText
        placeholder="confirm password"
        info={error?.password2}
        icon={faLock}
        type="password"
        required={true}
        onChange={handleChange}
        value={state.password2}
        name="password2"
      />
      <Button name="Sign Up" />
    </form>
  );
}

export default Register;
