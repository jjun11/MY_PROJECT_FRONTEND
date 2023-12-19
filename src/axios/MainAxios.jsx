import axios from "axios";
import Common from "../utils/Common";
import { CHORD8_DOMAIN, Interceptor } from "../utils/Common";

const MainAxios = {
  // 로그인 안되어 있을 때
  notLoginList: async () => {
    return await axios.get(CHORD8_DOMAIN + "/music/musiclist");
  },
  LoginList: async () => {
    return await axios.get(CHORD8_DOMAIN + "/main/mainTop");
  },
};

export default MainAxios;
