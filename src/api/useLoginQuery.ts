import {
  QueryClient,
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import axios from "axios";
import { URL } from "../constants/Routes";
import { QUERY_KEY } from "../constants/Query";
import { SERVER_URL } from "../constants/Config";
import { useSetRecoilState } from "recoil";
import { TokenAtom, isLoginSelector } from "../recoil/TokenAtom";
import { useLocation, useNavigate } from "react-router";

interface PostLoginReqBody {
  id: any;
  pw: any;
}

// const login = async (user: PostLoginReqBody): Promise<PostLoginReqBody> => {
const login = async ({ id, pw }: any): Promise<PostLoginReqBody> => {
  console.log("axios id= " + id);
  console.log("axios password= " + pw);

  console.log("SERVER_URL=" + SERVER_URL);

  // const setAccessToken = useSetRecoilState(TokenAtom);
  // const setAccessToken = useSetRecoilState(TokenAtom);
  // const isLogin = useRecoilValue(isLoginSelector);

  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid user"))
    : await axios
        .post<PostLoginReqBody>(SERVER_URL + "/user/login", {
          id,
          pw,
        })
        .then((res) => {
          // console.log(res.data);
          // setAccessToken(res.data as unknown as undefined);
          // navigate(from);
          return res;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
};

const queryClient = new QueryClient();

// export const useLoginQuery = () => {
//   return useMutation(login, {
//     //  enabled: false,
//     onSuccess: () => {
//       //Data Transform
//       queryClient.invalidateQueries();
//     },
//   });
// };

export const useLoginQuery = ({ id, pw }: any) => {
  console.log("useLoginQuery id= " + id);
  console.log("useLoginQuery password= " + pw);

  const setAccessToken = useSetRecoilState(TokenAtom);

  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  // const from = location?.state?.redirectedFrom?.pathname || "/";
  const from = location?.state?.redirecredFrom?.pathname || "/";

  const { isLoading, data, isError, error, refetch } = useQuery(["login-key", { id, pw }], () => login({ id, pw })); // API 호출

  // 로딩 중일 경우
  if (isLoading) {
    return { id, pw };
  }

  // 결과값이 전달되었을 경우
  if (data) {
    console.log(data);
    setAccessToken(data as unknown as undefined);
    navigate(from);

    return { refetch };
  }

  return  {refetch} ;
};

// axios.post("/user/login", { id: id, pw: password }).then((res) => {
//   console.log(res.data);
//   setAccessToken(res.data.accessToken);
//   navigate(from);
// });
