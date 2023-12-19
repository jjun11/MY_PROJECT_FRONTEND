import axios from 'axios';
import { CHORD8_DOMAIN } from '../utils/Common';

const AxiosApi = {
    // 공연 목록 조회
    getPerformanceList: async () => {
      console.log("공연목록조회 AxiosApi 작동")
        return await axios.get(CHORD8_DOMAIN + `/performance/list`);
    },

     // 공연 페이지 수 조회
  getPerformancePage: async (page, size) => {
    console.log("공연페이지수조회 AxiosApi 작동")
    return await axios.get(
      CHORD8_DOMAIN + `/performance/list/count?page=${page}&size=${size}`
    );
  },

    // 공연 페이지네이션 조회
    getPerformancePageList: async (page, size) => {
      console.log("공연페이지네이션조회 AxiosApi 작동")
      return await axios.get(
        CHORD8_DOMAIN + `/performance/list/page?page=${page}&size=${size}`
      );
    },

    //공연 등록
    setPerformance: async (performance) => {
        return axios.post(CHORD8_DOMAIN + `/performance/new`, performance);
    },

    // 전체유저조회
    getUserList: async () => {
      console.log("전체유저조회 AxiosApi 작동")
      return await axios.get(
        CHORD8_DOMAIN + `/auth/userList`
      );
    },

    // 전체공연자조회
    getPerformerList: async () => {
      console.log("전체공연자조회 AxiosApi 작동")
      return await axios.get(
        CHORD8_DOMAIN + `/performer/list`);
    },

    // //공연등록닉네임 조회
    // getPerformerNick: async () => {
    //   console.log("공연등록닉네임조회 AxiosApi 작동")
    //   return await axios.get(
    //     CHORD8_DOMAIN + `/auth/`
    //   );
    // },
  };

export default AxiosApi;