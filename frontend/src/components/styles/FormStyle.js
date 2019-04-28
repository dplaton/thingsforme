import styled from "styled-components";

const FormStyle = styled.form`
    background: rgb(0, 0, 0, 0.02);
    padding: 20px;
    width: 40rem;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    label {
        display: block;
        margin-bottom: 1rem;
    }
    input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid lightgrey;
        &:focus {
            outline: 0;
            border-color: green;
        }
    }
    button,
    input[type="submit"] {
        width: auto;
        padding: 0.5rem 1.2rem;
        border: 0;
        background: green;
        color: white;
        font-weight: 600;
    }
    fieldset {
        border: 0;
        padding: 0;
    }
`;

export default FormStyle;
