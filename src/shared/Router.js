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
import { useEffect } from "react";
import { verifyFailure, verifySuccess } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../api/Oauth";
import KakaoRedirect from "../pages/Oauth/KakaoRedirect";
import NaverRedirect from "../pages/Oauth/NaverRedirect";
import GoogleRedirect from "../pages/Oauth/GoogleRedirect";

const checkLoginStatus = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return false;

  return await verifyUser();
};

const Router = () => {
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyAuth = async () => {
      const result = await checkLoginStatus();
      if (result) {
        dispatch(verifySuccess());
      } else {
        dispatch(verifyFailure());
      }
    };

    verifyAuth();
  }, [dispatch, isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kakao" element={<KakaoRedirect />} />
        <Route path="/naver" element={<NaverRedirect />} />
        <Route path="/google" element={<GoogleRedirect />} />

        <Route element={<AuthRoutes isAuth={isLoggedIn} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRoutes isAuth={isLoggedIn} />}>
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
