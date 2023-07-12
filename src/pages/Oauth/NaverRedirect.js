import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { naverLogin } from "../../api/Oauth";

const NaverRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //인가 코드 추출
  const params = new URL(window.location.href).searchParams.get("code");
  console.log(params);

  const handleNaver = async () => {
    const response = await naverLogin(params);
    if (response?.data.token) {
      localStorage.setItem("accessToken", response.data.token);
      dispatch(loginSuccess());
      navigate("/home");
    }
  };

  useEffect(() => {
    handleNaver();
  }, []);

  return <div>NaverRedirect</div>;
};

export default NaverRedirect;
