import axios from "axios";
import Common from "../utils/Common";

const MemberInfoAxiosApi = {
  getUserInfo: async (email) => {
    return await axios.get(Common.DOMAIN + `/auth/infoByEmail?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getUserMusic: async (userId) => {
    return await axios.get(Common.DOMAIN + `/music/user/${userId}/music`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getUserInfoByPerformanceEmail: async (email) => {
    return await axios.get(
      Common.DOMAIN + `/performance/infoByEmail?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default MemberInfoAxiosApi;
