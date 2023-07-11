import AuthForm from "../../components/auth/AuthForm";
import { useMutation, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { signin } from "../../api/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  useEffect(() => {}, []);

  const mutation = useMutation(signin, {
    onSuccess: () => {
      queryClient.invalidateQueries("signin");
      navigate("/home");
    },
    onError: (e) => {
      alert("ID 또는 PW가 올바르지 않습니다.");
    },
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <AuthForm
      typeName={"login"}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
