// import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { URL } from "../../constants/Routes";

const HeaderView = ({ isLogin }: any) => {
  return (
    <div className="header">
      <div className="inner">
        <Link to={URL.MAIN} className="ico lnk_go_template" target="_blank">
          홈페이지 템플릿 소개 페이지로 이동
        </Link>

        <h1 className="logo">
          <Link to={URL.MAIN} className="w">
            <img src="/assets/images/React.png" alt="React Template 홈페이지" />
          </Link>
          <Link to={URL.MAIN} className="m">
            <img src="/assets/images/React.png" alt="React Template 홈페이지" />
          </Link>
        </h1>
        <div className="gnb">
          <h2 className="blind">주메뉴</h2>
          <ul>
            {/* <li>
              <NavLink
                to={URL.SUPPORT}
                className={({ isActive }) => (isActive ? "cur" : undefined)}
              >
                사이트소개
              </NavLink>
            </li>
            <li>
              <NavLink
                to={URL.SUPPORT}
                className={({ isActive }) => (isActive ? "cur" : undefined)}
              >
                정보마당
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={URL.BATCH}
                className={({ isActive }) => (isActive ? "cur" : undefined)}
              >
                배치관리
              </NavLink>
            </li>
            <li>
              <NavLink
                to={URL.SUPPORT}
                className={({ isActive }) => (isActive ? "cur" : undefined)}
              >
                고객지원
              </NavLink>
            </li>
            {isLogin?.id && (
              <li>
                <NavLink
                  to={URL.ADMIN}
                  className={({ isActive }) => (isActive ? "cur" : undefined)}
                >
                  사이트관리
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* <!-- PC web에서 보여지는 영역 --> */}
        <div className="user_info">
          {/* 로그아웃 : 로그인 정보 있을때 */}
          {isLogin?.id && (
            <>
              <span className="person">{isLogin?.id} </span> 님이, 관리자로
              {/* 로그인하셨습니다.
              <button onClick={logOutHandler} className="btn">
                로그아웃
              </button> */}
            </>
          )}
          {/* 로그인 : 로그인 정보 없을 때 */}
          {!isLogin?.id && (
            // <button onClick={logInHandler} className="btn login">
            <button className="btn login">로그인</button>
          )}
        </div>
        {/* <!--// PC web에서 보여지는 영역 --> */}

        {/* <!-- right area --> */}
        <div className="right_a">
          <button
            type="button"
            className="btn btnAllMenu"
            title="전체메뉴 닫힘"
          >
            전체메뉴
          </button>
          <button
            type="button"
            className="btn mobile btnAllMenuM"
            title="전체메뉴 닫힘"
          >
            전체메뉴
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
