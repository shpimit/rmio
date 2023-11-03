import React from "react";
import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../../recoil/TokenAtom";
import HeaderView from "./HeaderView";



const Header = () => {
  const isLogin = useRecoilValue(isLoginSelector);

  // const history = useHistory();

  // const logInHandler = () => {
  //   // 로그인 정보 없을 시
  //   history.push(URL.LOGIN);
  // };
  

  return <HeaderView isLogin={isLogin} />;
};

export default Header;
