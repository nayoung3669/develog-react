import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { useMutation, useQuery } from "react-query";
import { signup } from "../../api/api";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  //   const { isLoading, isError, data } = useQuery("user", signup(formData));
  const [checkPW, setCheckPW] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.id)
      //mutate
      setFormData({ ...formData, id: "", password: "" });
  };

  return (
    <div>
      <AuthForm
        type="login"
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default RegisterForm;
