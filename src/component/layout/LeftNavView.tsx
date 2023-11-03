import React from "react";

import { NavLink } from "react-router-dom";
import { URL } from "../../constants/Routes";

const LeftNavView = () => {
  return (
    <div className="nav">
      <div className="inner">
        <h2>고객지원</h2>
        <ul className="menu4">
          <li>
            <NavLink
              to={URL.SUPPORT_DOWNLOAD}
              className={({ isActive }) => (isActive ? "cur" : undefined)}
            >
              자료실
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.SUPPORT_QNA}
              className={({ isActive }) => (isActive ? "cur" : undefined)}
            >
              묻고답하기
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.SUPPORT_APPLY}
              className={({ isActive }) => (isActive ? "cur" : undefined)}
            >
              서비스신청
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavView;
