import { useNavigate } from "react-router";

const Error = (props: any) => {
  const navigate = useNavigate();
  console.log({ navigate });

  const errormessage = props.errormessage || "알 수 없는 에러가 발생했습니다.";

  return (
    <div className="ERROR">
      <h1>Error</h1>
      <div className="box">
        <p>{errormessage}</p>
        <div className="btn_area">
          <button
            className="btn btn_blue_h46 w_130"
            onClick={() => navigate(-1)} // 전 화면으로 돌아감
          >
            이전페이지
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
