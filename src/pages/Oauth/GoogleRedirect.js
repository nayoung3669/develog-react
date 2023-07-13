import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../api/Oauth";
import { loginSuccess } from "../../redux/modules/user";
import { googleSuccess } from "../../redux/modules/tokens";

const GoogleRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = new URL(window.location.href).searchParams.get("code");

  const handleGoogle = async () => {
    const response = await googleLogin(params);
    console.log(response);
    if (response) {
      //redux에 저장
      dispatch(googleSuccess(response.data.token));
      localStorage.setItem("accessToken", response.data.token);
      dispatch(loginSuccess());
      navigate("/home");
    }
  };

  useEffect(() => {
    handleGoogle();
  }, []);

  return (
    <div>
      <div>google redirect</div>
    </div>
  );
};

export default GoogleRedirect;
