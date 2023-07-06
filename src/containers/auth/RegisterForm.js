import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { useMutation, useQueryClient } from "react-query";
import { signup } from "../../api/api";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const mutation = useMutation(signup, {
    onSuccess: () => {
      queryClient.invalidateQueries("signup");
      navigate("/");
    },
    onError: (e) => console.log(e),
  });
  //   const [checkPW, setCheckPW] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
    setFormData({ ...formData, id: "", password: "" });
  };

  return (
    <div>
      <AuthForm
        type="register"
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default RegisterForm;
