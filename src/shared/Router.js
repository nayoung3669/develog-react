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
import {
  loginFailure,
  verifyFailure,
  verifySuccess,
} from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../api/api";
import KakaoRedirect from "../pages/Oauth/KakaoRedirect";
import NaverRedirect from "../pages/Oauth/NaverRedirect";

const Router = () => {
  const isAuth = useSelector(({ user }) => user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // const verify = async () => {
    //   if (localStorage.getItem("accessToken")) {
    //     // BE : refresh token 검증
    //     try {
    //       await verifyUser();
    //       dispatch(verifySuccess());
    //     } catch (e) {
    //       dispatch(verifyFailure());
    //       console.log(e);
    //     }
    //   } else {
    //     dispatch(loginFailure());
    //   }
    // };
    // verify();
  }, [dispatch]);

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
  return isAuth === false ? <Outlet /> : <Navigate to={"/home"} />;
};

const ProtectedRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};
