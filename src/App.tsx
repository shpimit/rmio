import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./component/pages/Main";
import Login from "./component/pages/login/Login";
// import Mypage from "./component/pages/Mypage";

import "./css/layout.css";
import "./css/component.css";
import "./css/page.css";
import "./css/response.css";
import "./css/base.css";

import ProtectedRoute from "./component/layout/ProtectedRoute";
import Batch from "./component/pages/batch/Batch";
import debug from "debug";

//COMMON
import Error from "./component/layout/Error";

//SUPPORT
// import Support from "./component/pages/support/Support";
import SupportDownloadList from "./component/pages/support/download/DownloadList";
import SupportDownloadDetail from "./component/pages/support/download/DownloadDetail";
import SupportDownloadCreate from "./component/pages/support/download/DownloadCreate";
import SupportQnaList from "./component/pages/support/qna/QnaList";
import SupportQnaDetail from "./component/pages/support/qna/QnaDetai";
import SupportApply from "./component/pages/support/apply/SupportApply";

import { URL } from "./constants/Routes";

if (process.env.NODE_ENV === "development") {
  debug.enable("rmio:*");
} else {
  debug.disable();
}

const { REACT_APP_HOST } = process.env;

const log = debug("rmio:App");
log("process.env.NODE_ENV", process.env.NODE_ENV);
log("process.env.REACT_APP_HOST", process.env.REACT_APP_HOST);

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.REACT_APP_HOST", process.env.REACT_APP_HOST);
console.log("process.env.REACT_APP_HOST=", REACT_APP_HOST);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={URL.ERROR}  element={<Error />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />} />
          {/* 유저전용 */}
          <Route element={<ProtectedRoute />}>
            <Route path="/batch" element={<Batch />} />
            {/* <Route path="/support" element={<Support />} /> */}

            {/* <Routes> */}
            {/* MAIN */}
            {/* <Route exact path={URL.MAIN} component={EgovMain} /> */}

            {/* ERROR */}
            {/* <Route path={URL.ERROR} component={EgovError} /> */}

            {/* SUPPORT */}
            <Route
              path={URL.SUPPORT}
              element={<Navigate replace to={URL.SUPPORT_DOWNLOAD} />}
            />

            <Route
              path={URL.SUPPORT_DOWNLOAD}
              element={<SupportDownloadList />}
            />
            <Route
              path={URL.SUPPORT_DOWNLOAD_DETAIL}
              element={<SupportDownloadDetail />}
            />
            <Route
              path={URL.SUPPORT_DOWNLOAD_CREATE}
              element={<SupportDownloadCreate />}
            />

            <Route path={URL.SUPPORT_QNA} element={<SupportQnaList />} />
            <Route
              path={URL.SUPPORT_QNA_DETAIL}
              element={<SupportQnaDetail />}
            />

            <Route path={URL.SUPPORT_APPLY} element={<SupportApply />} />
            {/* </Routes> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
