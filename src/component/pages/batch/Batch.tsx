import { useState } from "react";
import BatchView from "./BatchView";
import { useLocation, useNavigate } from "react-router-dom";
import { NOTICE_BBS_ID } from "../../../constants/Config";


const Batch = (props: any) => {
  console.log({ props });

  // const history = useNavigate();
  // console.log({ history });

  //////////////////////////////////////////////////////////
  // React-Router Dom의 객체를 사용해서 브라우저 location 객체값을 가져옴
  const location = useLocation();

  const bbsId = location.state?.bbsId || NOTICE_BBS_ID;
  let searchCnd = "0";
  let searchWrd = "";

  const [searchCondition, setSearchCondition] = useState(
    location.state?.searchCondition || {
      bbsId: bbsId,
      pageIndex: 1,
      searchCnd: "0",
      searchWrd: "",
    }
  ); // 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
  const [masterBoard, setMasterBoard] = useState({});
  const [user, setUser] = useState({});
  const [paginationInfo, setPaginationInfo] = useState({});

  const [listTag, setListTag] = useState([]);

  const batchViewProps = {
    masterBoard,
    searchCondition,
    setSearchCondition: () => setSearchCondition(searchCondition),    
    searchCnd,
    searchWrd,
    user,
    listTag,
    paginationInfo
  };  

  return <BatchView {...batchViewProps} />;
};

export default Batch;
