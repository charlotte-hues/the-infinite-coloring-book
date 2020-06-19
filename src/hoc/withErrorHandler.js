import React from "react";
import Modal from "../components/UI/Modal/Modal";
import useHttpError from "../hooks/httpError";

const withErrorHandler = (WrappedComponent, httpClient) => {
  return props => {
    const [error, errorConfirmedHandler] = useHttpError(httpClient);

    return (
      <React.Fragment>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? (
            <p>
              {error.response.status} {error.response.data}
            </p>
          ) : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
