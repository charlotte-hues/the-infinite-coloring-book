import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import styled from "styled-components";
import DeleteConfirm from "./DeleteConfirm/DeleteConfirm";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import { WrappedButton } from "../../components/UI/Button/Button";
import CancelIcon from "../../components/UI/Icons/Actions/Close/Close";
import ErrorMessage from "../../components/Auth/errorMessage";

const FormContainer = styled.form`
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.2s ease;
`;

const DeleteAccountLink = styled.p`
  font-size: 0.8rem;
  color: var(--dark);
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    color: var(--orange);
    cursor: pointer;
  }
}
`;

const InputEditContainer = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

const CancelContainer = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 0 5px;
`;

const InputContainer = styled.div`
  width: 280px;
`;

const Account = props => {
  const [showModal, setShowModal] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [controls, setControls] = useState({
    displayName: {
      elementType: "input",
      label: "display name",
      elementConfig: {
        type: "text"
      },
      value: props.currentUser ? props.currentUser.displayName : "",
      validation: {
        minLength: 0,
        required: true
      },
      valid: true,
      changed: false
    },
    email: {
      elementType: "input",
      label: "email address",
      elementConfig: {
        type: "email"
      },
      value: props.currentUser ? props.currentUser.email : "",
      validation: {
        includes: ["@", "."],
        required: true
      },
      valid: true,
      changed: false
    },
    password: {
      elementType: "input",
      label: "re-enter password to update email",
      elementConfig: {
        type: "password"
      },
      value: "",
      validation: {
        minLength: 6,
        required: true
      },
      valid: true,
      changed: false
    }
  });
  const history = useHistory();

  useEffect(() => {
    if (!showDeleteModal && !props.currentUser) setShowModal(false);
    setControls(prevState => {
      if (!props.currentUser) return prevState;

      const updatedControls = updateObject(prevState, {
        displayName: updateObject(prevState.displayName, {
          value: props.currentUser.displayName,
          changed: prevState.displayName.value !== props.currentUser.displayName
        }),
        email: updateObject(prevState.email, {
          value: props.currentUser.email,
          changed: prevState.email.value !== props.currentUser.email
        }),
        password: updateObject(prevState.password, {
          value: "",
          changed: false
        })
      });
      return updatedControls;
    });
  }, [props.currentUser, props.updatedUser, showDeleteModal]);

  let formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    });
  }

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
    if (props.error || props.updatedUser) props.confirmNotice();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: e.target.value,
        changed: e.target.value !== props.currentUser[input],
        valid: checkValidity(e.target.value, controls[input].validation)
      })
    });
    if (input === "email") {
      updatedControls.password.valid =
        e.target.value !== props.currentUser.email
          ? checkValidity(controls.password.value, controls.password.validation)
          : true;
    }
    let validity =
      updatedControls.email.changed || updatedControls.displayName.changed;
    for (let key in updatedControls) {
      validity = updatedControls[key].valid && validity;
    }
    setFormIsValid(validity);
    setControls(updatedControls);
  };

  const cancelChangesHandler = (e, input) => {
    e.preventDefault();
    if (props.error) props.confirmNotice();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: props.currentUser[input],
        changed: false
      })
    });
    if (input === "email") {
      updatedControls.password.valid = true;
    }
    let validity =
      updatedControls.email.changed || updatedControls.displayName.changed;
    for (let key in updatedControls) {
      validity = updatedControls[key].valid && validity;
    }
    setFormIsValid(validity);
    setControls(updatedControls);
  };

  const closeModalHandler = mounted => {
    if (mounted) {
      setShowModal(false);
      props.confirmNotice();
    } else
      props.currentUser && showDeleteModal
        ? history.replace("./create")
        : history.goBack();
  };

  const resetPasswordHandler = e => {
    e.preventDefault();
    props.sendPasswordReset(props.currentUser.email);
  };

  const logOutHandler = e => {
    e.preventDefault();
    props.logout();
    setShowModal(false);
  };

  const updateUserDetailsHandler = e => {
    e.preventDefault();
    const details = {
      displayName: controls.displayName.value
    };
    if (controls.email.changed) {
      props.updateUserDetails(
        details,
        controls.email.value,
        controls.password.value
      );
    } else {
      props.updateUserDetails(details, null, null);
    }
  };

  const cancelDeleteAccountHandler = e => {
    e.preventDefault();
    setShowDeleteModal(false);
  };

  const deleteConfirmHandler = e => {
    e.preventDefault();
    setShowDeleteModal(true);
  };

  const form = formElementsArray.map(input => {
    const valid = checkValidity(input.config.value, input.config.validation);
    return (
      <InputEditContainer key={input.id}>
        <InputContainer>
          <Input
            label={input.config.label}
            labelColor="var(--dark)"
            name={input.config.elementConfig.type}
            type={input.config.elementConfig.type}
            value={input.config.value}
            onChange={e => inputChangedHandler(e, input.id)}
            isValid={valid}
            shouldValidate={input.config.validation.required}
            touched={input.config.changed}
          />
        </InputContainer>
        <CancelContainer>
          <CancelIcon
            onClick={e => cancelChangesHandler(e, input.id)}
            disabled={
              !input.config.changed || !valid || input.id === "password"
            }
            disabledColor="rgba(255,255,255,0)"
          />
        </CancelContainer>
      </InputEditContainer>
    );
  });

  const buttons = (
    <div>
      <WrappedButton disabled={!formIsValid} onClick={updateUserDetailsHandler}>
        Save Changes
      </WrappedButton>
      <WrappedButton
        disabled={props.passwordReset}
        onClick={resetPasswordHandler}
      >
        {props.passwordReset
          ? "Reset password link sent to your inbox"
          : "Reset Password"}
      </WrappedButton>
      <WrappedButton onClick={logOutHandler}>Log Out</WrappedButton>
      <DeleteAccountLink onClick={deleteConfirmHandler}>
        Delete My Account
      </DeleteAccountLink>
    </div>
  );

  return (
    <React.Fragment>
      <Modal
        show={showModal}
        modalClosed={closeModalHandler}
        title={showDeleteModal ? "Delete Account" : "Account Settings"}
      >
        {showDeleteModal ? (
          <DeleteConfirm
            cancel={cancelDeleteAccountHandler}
            deleteUser={props.deleteUser}
            error={props.error}
            confirmNotice={props.confirmNotice}
            currentUser={props.currentUser}
            FormContainer={FormContainer}
          />
        ) : (
          <FormContainer>
            {" "}
            {form}
            <ErrorMessage>{props.error}</ErrorMessage>
          </FormContainer>
        )}

        {!showDeleteModal && buttons}
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    error: state.auth.error,
    passwordReset: state.auth.passwordReset,
    updatedUser: state.auth.updated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPasswordReset: email => dispatch(actions.sendPasswordReset(email)),
    logout: () => dispatch(actions.logout()),
    deleteUser: password => dispatch(actions.deleteCurrentUser(password)),
    confirmNotice: () => dispatch(actions.clearAuthNotice()),
    updateUserDetails: (details, emailUpdate, password) =>
      dispatch(actions.updateUserDetails(details, emailUpdate, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
