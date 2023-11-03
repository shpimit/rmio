import MainView from "./MainView";
import { useNavigate } from "react-router-dom";

import debug from "debug";
const log = debug("rmio:Main");

const Main = (props: any) => {
  log("props:", props);

  const history = useNavigate();
  log("history:", history);

  return <MainView />;
};

export default Main;
