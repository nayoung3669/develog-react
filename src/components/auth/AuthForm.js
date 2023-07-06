import { styled } from "styled-components";

const AuthForm = ({ type }) => {
  return <AuthFormBlock>{type}</AuthFormBlock>;
};

export default AuthForm;

const AuthFormBlock = styled.div``;
