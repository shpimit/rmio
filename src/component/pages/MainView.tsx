import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0; //
  display: flex; //
  min-width: 320px; //
  min-height: 100vh; //
  place-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  & a:last-child > button {
    border-bottom: 3px solid #b61a84;
  }
  & a:first-child > button {
    border-bottom: 3px solid #00a5ba;
  }
`;

export const Button = styled.button`
  border: 1px solid #aaa;
  width: 200px;
  padding: 36px;
  border-radius: 16px 16px 0 0;
  font-size: 24px;
  font-weight: bold;
`;

const MainView = () => {
  return (
    <Wrapper>
      <Link to={"/login"}>
        <Button>로그인</Button>
      </Link>
      <Link to={"/support"}>
        <Button>마이페이지</Button>
      </Link>
    </Wrapper>
  );
};

export default MainView;
