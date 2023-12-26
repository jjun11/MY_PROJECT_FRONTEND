import axios from "axios";
import Common from "../utils/Common";

const MemberInfoAxiosApi = {
  // 유저 정보 가져오기
  getUserInfo: async (email) => {
    return await axios.get(Common.DOMAIN + `/auth/infoByEmail?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 유저 음원 가져오기
  getUserMusic: async (userId) => {
    return await axios.get(Common.DOMAIN + `/music/user/${userId}/music`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 유저 공연 가져오기
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
  // 포인트 충전
  increasePoints: async (email, points) => {
    return await axios.post(
      Common.DOMAIN + `/user/increasePoints`,
      {
        email: email,
        points: points.toString(), // points 값을 문자열로 변환
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 포인트 환전
  exchangePoints: async (email, points) => {
    return await axios.post(
      Common.DOMAIN + `/user/exchangePoints`,
      {
        email: email,
        points: points.toString(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 채팅방 목록 보기
  chatList: async () => {
    return await axios.get(Common.DOMAIN + "/chat/room", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // ownerId로 채팅방 목록 가져오기
  chatListByOwnerId: async (ownerId) => {
    return await axios.get(`${Common.DOMAIN}/chat/rooms/owner/${ownerId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 채팅방 정보 보기
  chatDetail: async (roomId) => {
    return await axios.get(Common.DOMAIN + `/chat/room/${roomId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 채팅방 생성
  chatCreate: async (email, name) => {
    const chat = {
      email: email,
      name: name,
    };
    return await axios.post(Common.DOMAIN + "/chat/new", chat, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 이전 채팅 가져오기
  recentChatLoad: async (roomId) => {
    return await axios.get(Common.DOMAIN + `/chat/message/${roomId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 채팅방 세션 수 가져오기
  chatSessionCount: async (roomId) => {
    return await axios.get(
      Common.DOMAIN + `/chat/room/${roomId}/sessioncount`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default MemberInfoAxiosApi;
