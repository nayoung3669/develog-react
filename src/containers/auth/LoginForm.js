import AuthForm from "../../components/auth/AuthForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/modules/user";

const LoginForm = () => {
  // const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const loginMutation = useLoginMutation();

  const handleLogin = async () => {
    await loginMutation.mutateAsync(formData);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
