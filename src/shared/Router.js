import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import PostListPage from "../pages/PostListPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import WritePage from "../pages/WritePage";
import PostPage from "../pages/PostPage";
import { useEffect, useState } from "react";
import { verifyFailure, verifySuccess } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../api/Oauth";
import KakaoRedirect from "../pages/Oauth/KakaoRedirect";
import NaverRedirect from "../pages/Oauth/NaverRedirect";

const Router = () => {
  const isAuth = useSelector(({ user }) => user.isLoggedIn);
  const [isLoggedin, setIsLoggedIn] = useState(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    const verify = async () => {
      const res = await verifyUser();
      if (res?.status === 200) {
        dispatch(verifySuccess());
        setIsLoggedIn(isAuth);
      } else {
        dispatch(verifyFailure());
        setIsLoggedIn(isAuth);
        console.log(isAuth);
      }
    };
    verify();
  }, [isLoggedin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakao" element={<KakaoRedirect />} />
        <Route path="/naver" element={<NaverRedirect />} />

        <Route element={<AuthRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/home" element={<PostListPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const AuthRoutes = ({ isAuth }) => {
  return !isAuth ? <Outlet /> : <Navigate to={"/home"} />;
};

const ProtectedRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};
