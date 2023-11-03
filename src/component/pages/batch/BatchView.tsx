import React from "react";
import { Link } from "react-router-dom";
import { default as LeftNav } from "../../../component/layout/LeftNavBatchView";
import { URL } from "../../../constants/Routes";
import Paging from "../../../component/layout/Paging";

// const batchViewProps = {
//     masterBoard,
//     searchCondition,
//     searchCnd,
//     searchWrd,
//     user,
//     listTag,
//     paginationInfo
//   };

const BatchView = ({
  masterBoard,
  searchCondition,
  setSearchCondition,
  searchCnd,
  searchWrd,
  user,
  listTag,
  paginationInfo,
}: any) => {
  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to={URL.MAIN} className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to={URL.BATCH}>배치종합관리</Link>
            </li>
            {/* <li>공지사항</li> */}
            <li>{masterBoard && masterBoard.bbsNm}</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <LeftNav></LeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents BATCH_IST" id="contents">
            {/* <!-- 본문 --> */}

            <div className="top_tit">
              <h1 className="tit_1">배치종합관리</h1>
            </div>

            <h2 className="tit_2">{masterBoard && masterBoard.bbsNm}</h2>

            {/* <!-- 검색조건 --> */}
            <div className="condition">
              <ul>
                <li className="third_1 L">
                  <label className="f_select" htmlFor="sel1">
                    <select
                      id="sel1"
                      title="조건"
                      defaultValue={searchCondition.searchCnd}
                      onChange={(e) => {
                        searchCnd = e.target.value;
                        // setSearchCondition({ ...searchCondition, searchCnd: e.target.value });
                      }}
                    >
                      <option value="0">제목</option>
                      <option value="1">내용</option>
                      <option value="2">작성자</option>
                    </select>
                  </label>
                </li>
                <li className="third_2 R">
                  <span className="f_search w_500">
                    <input
                      type="text"
                      name=""
                      defaultValue={searchCondition.searchWrd}
                      placeholder=""
                      onChange={(e) => {
                        searchWrd = e.target.value;
                        //setSearchCondition({ ...searchCondition, searchWrd: e.target.value });
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        setSearchCondition({
                          ...searchCondition,
                          pageIndex: 1,
                          searchCnd: searchCnd,
                          searchWrd: searchWrd,
                        });
                      }}
                    >
                      조회
                    </button>
                  </span>
                </li>
                {user.id && (
                  <li>
                    <Link
                      to={URL.BATCH_LIST_CREATE}
                      className="btn btn_blue_h46 pd35"
                    >
                      등록
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            {/* <!--// 검색조건 --> */}

            {/* <!-- 게시판목록 --> */}
            <div className="board_list BRD002">
              <div className="head">
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>작성일</span>
                <span>조회수</span>
              </div>
              <div className="result">{listTag}</div>
            </div>
            {/* <!--// 게시판목록 --> */}

            <div className="board_bot">
              {/* <!-- Paging --> */}
              <Paging
                pagination={paginationInfo}
                moveToPage={(passedPage: any) => {
                  setSearchCondition({
                    ...searchCondition,
                    pageIndex: passedPage,
                  });
                }}
              ></Paging>
              {/* <!--/ Paging --> */}
            </div>

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchView;
