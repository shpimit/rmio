import { Navigate, Outlet, useLocation } from "react-router";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../../recoil/TokenAtom";
import Header from "./Header";
import Footer from "./Footer";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();

  return isLogin ? (
    <div className="wrap">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  ) : (
    <Navigate
      to={"/login"}
      replace                                        // 무한루프에 빠지기 않도록 브라우저 stack에 쌓지않음
      state={{ redirecredFrom: currentLocation }}    // 
    />
  );
};

export default ProtectedRoute;
