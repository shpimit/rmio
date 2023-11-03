// import accessTokenAtom from "../recoil/accessToken.js";
// import { useSetRecoilState } from "recoil";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { TokenAtom, isLoginSelector } from "../../../recoil/TokenAtom";
import { useLocation, useNavigate } from "react-router";
import LoginView from "./LoginView";
import { useLoginQuery } from "../../../api/useLoginQuery";

const Login = () => {
  /////////////////////////////////////////////////////////
  // 하위 Conmponent의 input box의 이름을 관리해서 값을 변경
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    console.log("name=" + name);
    console.log("value=" + value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // 둘이상의 Component에 해당되는 상태는 Recoil로 관리
  const setAccessToken = useSetRecoilState(TokenAtom);
  // const isLogin = useRecoilValue(isLoginSelector);
  //
  //////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////
  // React-Router Dom의 객체를 사용해서 브라우저 location 객체값을 가져옴
  const location = useLocation();
  // 로그인 페이지로 직접 넘어 왔을때에는 Home으로 보내기 위해서...만약 마이페이지를 치고 넘어왔다면 마이페이지로
  const from = location?.state?.redirecredFrom?.pathname || "/";
  // React-Router Dom의 객체를 사용해서 화면 이동
  const navigate = useNavigate();
  //////////////////////////////////////////////////////////

  // const { isLoading, data, isError, error, refetch } = useLoginQuery({id,pw});
  // const { refetch } = useLoginQuery({ id: inputs.id, pw: inputs.pw });

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   refetch;
  //   // setId(e.target.value);
  //   // setPassword(e.target.value)}
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post("/user/login", { id: id, pw: inputs.pw }).then((res) => {
      console.log(res.data);
      setAccessToken(res.data.accessToken);
      navigate(from); // 로그인 페이지로 직접 넘어 왔을때에는 Home으로 보내기 위해서...만약 마이페이지를 치고 넘어왔다면 마이페이지로
    });
  };

  const props = {
    id,
    pw,
    // setId: () => setId(id),
    // setPassword: () => setPassword(password),
    onChange,
    handleSubmit,
  };

  console.log("Login id= " + id);
  console.log("Login password= " + pw);

  return <LoginView {...props} />;
};

export default Login;
