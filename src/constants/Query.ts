export const API_URL = {
  getTokenByPassword: "/api/getTokenByPassword",
  getProfile: "/api/getProfile",
  getUserList: "/api/getUserList",
  appointment: "/api/appointment/:id",
  getServices: "/api/getServices",
  getCarDetail: "/api/getCarDetail/:id",
  getInsurance: "/api/getInsurance/:id",
  job: "/api/job/:id?",
};

// QueryKey : [{도메인 그룹}_{query 함수 이름}, …(API 응답에 영향을 주는 값)]
export const QUERY_KEY = {
  LOGIN_KEY: "[{LOGIN}_{LOGIN}, {id: id, pw: password }]",
};

// axios.post("/user/login", { id: id, pw: password }).then((res) => {
//   console.log(res.data);
//   setAccessToken(res.data.accessToken);
//   navigate(from);
// });
