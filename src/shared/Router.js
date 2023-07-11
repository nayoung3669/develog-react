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
import { verifySucess } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

const Router = () => {
  const isAuth = useSelector(({ user }) => user.isLoggedIn);
  console.log(isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    const verify = async () => {
      if (localStorage.getItem("accessToken")) {
        //백엔드 요청  (토큰 검증)
        // if : refresh token 검증
        dispatch(verifySucess());
      }
    };
    verify();
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
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
