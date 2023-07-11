import AuthForm from "../../components/auth/AuthForm";
import { useState } from "react";
import { signin } from "../../api/api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/modules/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      await signin(formData);
      console.log("로그인 성공");
      dispatch(loginSuccess());
    } catch (e) {
      console.log(e);
    }
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
