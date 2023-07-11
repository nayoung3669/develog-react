import { useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { signup } from "../../api/api";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [checkPW, setCheckPW] = useState(""); //비밀번호 확인
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await signup(formData);
      alert("회원가입 되었습니다. 로그인 해주세요");
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };
  // id, pw 영문 숫자 조합 8자리 이상
  const validateCondition = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onConfirm = (e) => {
    setCheckPW(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //유효성검사
    if (checkPW !== formData.password) {
      alert("비밀번호가 다릅니다.");
      return;
    }
    if (formData.id === "" || formData.password === "") {
      alert("정보를 모두 입력해주세요.");
      return;
    }
    if (
      !validateCondition.test(formData.id) ||
      !validateCondition.test(formData.password)
    ) {
      alert("ID와 PW는 영문, 숫자 조합 8-20자리입니다.");
      return;
    }
    handleRegister();
    setFormData({ ...formData, id: "", password: "" });
  };

  return (
    <AuthForm
      typeName={"register"}
      formData={formData}
      checkPW={checkPW}
      onChange={onChange}
      onConfirm={onConfirm}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
