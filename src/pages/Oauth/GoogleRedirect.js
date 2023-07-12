import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../../api/Oauth";
import { loginSuccess } from "../../redux/modules/user";

const GoogleRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <GoogleLogin
        onSuccess={async (res) => {
          if (res.credential) {
            await googleLogin(res.credential);
            localStorage.setItem("accessToken", res.credential);
            dispatch(loginSuccess());
            navigate("/home");
          }
        }}
        onFailure={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
};

export default GoogleRedirect;
