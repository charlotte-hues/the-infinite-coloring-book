import React from "react";
import Modal from "../../../components/UI/Modal/Modal";
import Input from "../../../components/UI/Input/Input";
import { WrappedButton } from "../../../components/UI/Button/Button";

const deleteConfirm = props => {
  const inputChangedHandler = e => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <p>
        This action can't be undone.
        <br />
        <br /> Enter your password to confirm.
      </p>
      <Input
        name="password"
        type="password"
        value=""
        onChange={inputChangedHandler}
        placeholder="******"
        // isValid={valid}
        // shouldValidate={input.config.validation.required}
        // touched={input.config.changed}
      />
      <WrappedButton onClick={props.cancel}>I've changed my mind</WrappedButton>
      <WrappedButton>Delete Account</WrappedButton>
    </React.Fragment>
  );
};
export default deleteConfirm;
