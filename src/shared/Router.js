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
import { verifyUser } from "../api/api";
import { useEffect, useState } from "react";

const Router = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [isAuth, setIsAuth] = useState(accessToken);

  useEffect(() => {
    const checkIsAuth = async () => {
      try {
        await verifyUser();
        setIsAuth(true);
      } catch (e) {
        setIsAuth(false);
      }
    };
    checkIsAuth();
  }, []);

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
