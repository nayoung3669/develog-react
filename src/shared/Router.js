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
  const [isAuth, setIsAuth] = useState(false);

  const checkIsAuth = async () => {
    try {
      const v = await verifyUser();
      if (v.status === 200) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
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
