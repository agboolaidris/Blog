import React from "react";
import InputText from "../shared/InputText";
import Button from "../shared/Button";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
function Login({ state, handleChange, handleSubmit, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <InputText
        icon={faEnvelope}
        placeholder="Enter email address"
        type="email"
        required={true}
        onChange={handleChange}
        value={state.email}
        name="email"
        info={error?.email}
      />
      <InputText
        icon={faLock}
        placeholder="Enter password"
        type="password"
        required={true}
        onChange={handleChange}
        value={state.password}
        name="password"
        info={error.password}
      />
      <Button name="Login" />
    </form>
  );
}

export default Login;
