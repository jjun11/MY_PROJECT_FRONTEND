import axios from 'axios';
// import { CHORD8_DOMAIN } from "../utils/Common.jsx";

const CHORD8_DOMAIN = "http://localhost:8111";


const AxiosApi = {
    // 공연 목록 조회
    getPerformanceList: async () => {
      console.log("공연목록조회 AxiosApi 작동")
        return axios.get(CHORD8_DOMAIN + `/performance/list`);
    },

     // 공연 페이지 수 조회
  getPerformancePage: async (page, size) => {
    return await axios.get(
      CHORD8_DOMAIN + `/performance/list/count?page=${page}&size=${size}`
    );
  },

    // 공연 페이지네이션 조회
    getPerformancePageList: async (page, size) => {
      return await axios.get(
        CHORD8_DOMAIN + `/performance/list/page?page=${page}&size=${size}`
      );
    },

    // 공연 등록
    // setPerformance: async (performance) => {
    //     return axios.post(CHORD8_DOMAIN + `/performance/create`, performance);
    // },
}

export default AxiosApi;