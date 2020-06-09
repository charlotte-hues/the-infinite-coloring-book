import React from "react";
import styled from "styled-components";
import DeleteIcon from "../../UI/Icons/Actions/Delete/Delete";
import EditIcon from "../../UI/Icons/Actions/Edit/Edit";

const Container = styled.div`
  position: absolute;
  display: flex;

  height: 40px;
  padding: 10px;
  bottom: 0;
  right: 0;
`;

const Actions = props => {
  return (
    <Container>
      <EditIcon onClick={props.edit}>edit</EditIcon>
      <DeleteIcon onClick={props.delete}>delete</DeleteIcon>
    </Container>
  );
};

export default Actions;
