import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
    border: 1px solid red;
    font-size: 1.2rem;
    padding: 2rem;
    p {
        font-weight: 100;
    }
`;

const DisplayError = ({ error }) => {
    const errDisplay = error => (
        <p data-test="graphql-errors">
            <span role="img" aria-label="error">
                🔴
            </span>
            {error.message}
        </p>
    );

    if (!error || !error.message) {
        return null;
    }

    if (
        error.networkError &&
        error.networkError.result &&
        error.networkError.result.errors.length > 0
    ) {
        return error.networkError.result.errors.map((err, i) => (
            <ErrorMessage key={i}> {errDisplay(err)}</ErrorMessage>
        ));
    }

    return <ErrorMessage>{errDisplay(error.mesage)}</ErrorMessage>;
};

export default DisplayError;
