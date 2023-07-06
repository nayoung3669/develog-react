import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { useMutation, useQuery } from "react-query";

const LoginForm = () => {
  return <AuthForm type="register" />;
};

export default LoginForm;
