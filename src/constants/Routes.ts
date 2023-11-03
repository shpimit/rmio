export const URL = {
  // SERVER_URL
  SERVER_URL: "http://" + process.env.REACT_APP_HOST, // REST API 서버 Domain URL

  //COMMON
  MAIN: "/", //메인페이지

  LOGIN: "/login", //로그인
  ERROR: "/error", //로그인

  //BATCH
  BATCH: "/batch", // 배치종합관리
  BATCH_LIST: "/batch/list", // 배치관리/리스트
  BATCH_LIST_DETAIL: "/batch/list/detail", // 배치관리/리스트상세
  BATCH_LIST_CREATE: "/batch/list/create", // 배치관리/리스트등록
  BATCH_LIST_MODIFY: "/batch/list/modify", // 배치관리/리스트수정
  BATCH_LIST_REPLY: "/batch/list/reply", // 배치관리/리스트답글

  //SUPPORT
  SUPPORT: "/support", // 고객지원
  SUPPORT_DOWNLOAD: "/support/download", // 고객지원/자료실
  SUPPORT_DOWNLOAD_DETAIL: "/support/download/detail", // 고객지원/자료실/상세
  SUPPORT_DOWNLOAD_CREATE: "/support/download/create", // 고객지원/자료실/등록
  SUPPORT_QNA: "/support/qna", // 고객지원/묻고답하기
  SUPPORT_QNA_DETAIL: "/support/qna/detail", // 고객지원/묻고답하기/상세
  SUPPORT_APPLY: "/support/apply", // 고객지원/서비스신청

  //ADMIN
  ADMIN: "/admin", // 사이트관리
};
