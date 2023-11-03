import React from "react";

import { NavLink } from "react-router-dom";
import { URL } from "../../constants/Routes";

const LeftNavBatchView = () => {
  return (
    <div className="nav">
      <div className="inner">
        <h2>배치종합관리</h2>
        <ul className="menu4">
          <li>
            <NavLink
              to={URL.BATCH_LIST}
              className={({ isActive }) => (isActive ? "cur" : undefined)}
            >
              배치관리
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.BATCH_LIST}
              className={({ isActive }) => (isActive ? "cur" : undefined)}
            >
              배치로그관리
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavBatchView;
