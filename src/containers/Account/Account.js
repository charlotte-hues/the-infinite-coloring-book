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
import useWhyDidYouUpdate from "../../hooks/whyDidYouUpdate";

const FormContainer = styled.form`
  height: 280px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;

  & p {
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
  const [confirmDelete, setConfirmDelete] = useState(false);
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
    }
  });
  const history = useHistory();

  useEffect(() => {
    setControls(prevState => {
      if (!props.currentUser) return prevState;
      const updatedControls = updateObject(prevState, {
        displayName: updateObject(prevState.displayName, {
          value: props.currentUser.displayName,
          changed: false
        }),
        email: updateObject(prevState.email, {
          value: props.currentUser.email,
          changed: false
        })
      });
      return updatedControls;
    });
  }, [props.currentUser]);

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
    if (props.error) props.confirmNotice();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: e.target.value,
        changed: e.target.value !== props.currentUser[input],
        valid: checkValidity(e.target.value, controls[input].validation)
      })
    });
    let validity =
      updatedControls.email.changed || updatedControls.displayName.changed;
    for (let key in updatedControls) {
      validity = updatedControls[key].valid && validity;
    }
    console.log(validity);
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
    setControls(updatedControls);
  };

  const closeModalHandler = mounted => {
    if (mounted) {
      setShowModal(false);
      props.confirmNotice();
    } else history.goBack();
  };

  let formElementsArray = [];
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key]
    });
  }

  const logOutHandler = e => {
    e.preventDefault();
    props.logout();
    setShowModal(false);
  };

  const cancelDeleteAccountHandler = e => {
    e.preventDefault();
    setShowDeleteModal(false);
  };

  const deleteConfirmHandler = e => {
    e.preventDefault();
    setConfirmDelete(true);
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
            disabled={!input.config.changed || !valid}
            disabledColor="rgba(255,255,255,0)"
          />
        </CancelContainer>
      </InputEditContainer>
    );
  });

  const buttons = (
    <div>
      <WrappedButton disabled={!formIsValid} onClick={() => {}}>
        Save Changes
      </WrappedButton>
      <WrappedButton onClick={() => {}}>Reset Password</WrappedButton>
      <WrappedButton onClick={logOutHandler}>Log Out</WrappedButton>
      <p color="var(--dark)" onClick={deleteConfirmHandler}>
        Delete My Account
      </p>
    </div>
  );
  const allProps = { ...props, controls, showModal, history, confirmDelete };
  useWhyDidYouUpdate("Account", allProps);
  return (
    <React.Fragment>
      <Modal
        show={showModal}
        modalClosed={closeModalHandler}
        title={showDeleteModal ? "Delete Account" : "Account Settings"}
      >
        <FormContainer>
          {showDeleteModal ? (
            <DeleteConfirm cancel={cancelDeleteAccountHandler} />
          ) : (
            form
          )}
          {!showDeleteModal && buttons}
        </FormContainer>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPasswordReset: email => dispatch(actions.sendPasswordReset(email)),
    logout: () => dispatch(actions.logout()),
    deleteUser: () => dispatch(actions.deleteCurrentUser()),
    confirmNotice: () => dispatch(actions.clearAuthNotice())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
