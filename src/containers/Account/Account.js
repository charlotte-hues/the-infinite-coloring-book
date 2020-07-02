import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import styled from "styled-components";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import Button, { WrappedButton } from "../../components/UI/Button/Button";
import { Spacer } from "../../components/UI/Divider/Divider";

const FormContainer = styled.form`
  height: 320px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

const InputEditContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0;
`;

const Account = props => {
  const [showModal, setShowModal] = useState(true);
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
    // if (props.error) props.confirmNotice();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: e.target.value,
        changed: e.target.value !== props.currentUser.displayName
      })
    });
    setControls(updatedControls);
  };

  const cancelChangesHandler = (e, input) => {
    e.preventDefault();
    // if (props.error) props.confirmNotice();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: props.currentUser[input],
        changed: false
      })
    });
    setControls(updatedControls);
  };

  const closeModalHandler = (mounted = true) => {
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

  const form = formElementsArray.map(input => {
    const valid = checkValidity(input.config.value, input.config.validation);
    return (
      <InputEditContainer key={input.id}>
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
        <ButtonContainer>
          <Button
            onClick={e => cancelChangesHandler(e, input.id)}
            disabled={!input.config.changed || !valid}
            secondary
          >
            Cancel
          </Button>
          <Spacer />
          <Button disabled={!input.config.changed || !valid}>
            Update {input.config.label}
          </Button>
        </ButtonContainer>
      </InputEditContainer>
    );
  });

  return (
    <Modal
      show={showModal}
      modalClosed={closeModalHandler}
      title="Account Settings"
    >
      <FormContainer>
        {form}
        <div>
          <WrappedButton secondary>Delete Account</WrappedButton>
          <WrappedButton onClick={logOutHandler}>Log Out</WrappedButton>
        </div>
      </FormContainer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPasswordReset: email => dispatch(actions.sendPasswordReset(email)),
    logout: () => dispatch(actions.logout()),
    confirmNotice: () => dispatch(actions.clearAuthNotice())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
