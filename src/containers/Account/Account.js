import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from "../../shared/utility";
import styled from "styled-components";
import Modal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/Input";
import { WrappedButton } from "../../components/UI/Button/Button";

const FormContainer = styled.form`
  height: 300px;
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

const Account = props => {
  const [showModal, setShowModal] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [controls, setControls] = useState({
    name: {
      elementType: "input",
      label: "display name",
      elementConfig: {
        type: "text"
      },
      value: props.displayName || "gareth",
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
      value: "",
      validation: {
        includes: ["@", "."],
        required: true
      },
      changed: false
    }
  });
  const history = useHistory();

  const inputChangedHandler = (e, input) => {
    e.preventDefault();
    // if (props.error) props.confirmNotice();
    const updatedControls = updateObject(controls, {
      [input]: updateObject(controls[input], {
        value: e.target.value,
        valid: checkValidity(e.target.value, controls[input].validation),
        changed: true
      })
    });
    let validity = true;
    for (let key in updatedControls) {
      validity = updatedControls[key].valid && validity;
    }
    setFormIsValid(validity);
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

  const form = formElementsArray.map(input => {
    return (
      <InputEditContainer key={input.id}>
        <Input
          label={input.config.label}
          labelColor="var(--dark)"
          name={input.config.elementConfig.type}
          type={input.config.elementConfig.type}
          value={input.config.value}
          onChange={e => inputChangedHandler(e, input.id)}
          // isValid={checkValidity(input.config.value, input.config.validation)}
          shouldValidate={input.config.validation.required}
          touched={input.config.changed}
        />
        <div>
          <button>Save Changes</button>aaa
        </div>
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

        <WrappedButton secondary>Delete Account</WrappedButton>
        <WrappedButton>Log Out</WrappedButton>
      </FormContainer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    displayName: state.auth.displayName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPasswordReset: email => dispatch(actions.sendPasswordReset(email)),
    confirmNotice: () => dispatch(actions.clearAuthNotice())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
