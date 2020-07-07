import React, { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { WrappedButton } from "../../../components/UI/Button/Button";
import ErrorMessage from "../../../components/Auth/errorMessage";

const DeleteConfirm = props => {
  const { FormContainer } = props;
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const inputChangedHandler = e => {
    e.preventDefault();
    if (props.error) props.confirmNotice();
    setPassword(e.target.value);
    setTouched(true);
  };

  const confirmDeleteHandler = e => {
    e.preventDefault();
    props.deleteUser(password);
  };

  const deleteSuccess = <h5>Your account has been deleted.</h5>;

  const deleteConfirm = (
    <React.Fragment>
      <FormContainer>
        <div>
          <h5>Warning! This action can't be undone.</h5>
          <h5>Enter your password to delete account:</h5>
        </div>

        <Input
          name="password"
          type="password"
          value={password}
          onChange={inputChangedHandler}
          placeholder="******"
          touched={touched}
        />
        <ErrorMessage>{props.error}</ErrorMessage>
      </FormContainer>
      <WrappedButton onClick={props.cancel}>I've changed my mind</WrappedButton>
      <WrappedButton
        disabled={!(touched && password.length >= 6)}
        onClick={confirmDeleteHandler}
      >
        Delete Account
      </WrappedButton>
    </React.Fragment>
  );

  return props.currentUser ? deleteConfirm : deleteSuccess;
};
export default DeleteConfirm;
