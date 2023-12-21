import axios from "axios";
import { CHORD8_DOMAIN } from "../utils/Common";

const MusicAxiosApi = {
  //음악 목록 조회
  getAllMusic: async () => {
    console.log("음악 리스트 조회 AxiosApi 작동");
    return await axios.get(CHORD8_DOMAIN + `/music/musiclist`);
  },

  //음악 상세 정보 조회
  getMusicById: async (id) => {
    console.log("음악 상세 조회 AxiosApi 작동");
    return await axios.get(CHORD8_DOMAIN + `/music/detail/${id}`);
  },

  //음악 등록 엔드포인트(메모: post등록 방식 axios 까먹지말것..)
  addMusic: async (
    inputSingName,
    inputSinger,
    inputComposer,
    inputLyricist,
    selectedGenre,
    inputSingInfo,
    inputLyrics,
    url
  ) => {
    console.log("음악 등록 AxiosApi 작동");
    const musicDTO = {
      musicDTO: {
        composer: inputComposer,
        genre: selectedGenre,
        lyricist: inputLyricist,
        lyrics: inputLyrics,
        musicInfo: inputSingInfo,
        musicTitle: inputSingName,
        promoImage: url,
        purchaseCount: 100,
        releaseDate: "2023-12-19",
        thumbnailImage: url,
      },
      userReqDto: {
        userNickname: inputSinger,
      },
      userResDto: {
        userNickname: inputSinger,
      },
    };

    return await axios.post(CHORD8_DOMAIN + `/music/new`, musicDTO);
  },

  //음악 좋아요 추가
  musicHeart: async (musicId, heartChecker) => {
    console.log("음악 좋아요 추가 AxiosApi 작동");
    const musicHeartDto = {
      musicId: musicId,
      userEmail: heartChecker,
    };
    return await axios.post(CHORD8_DOMAIN + `/musiclike/like`, musicHeartDto);
  },

  //음악 페이지 수 조회

  getMusicPage: async (page, size) => {
    console.log("음악페이지수조회 AxiosApi 작동");
    return await axios.get(
      CHORD8_DOMAIN + `/music/musiclist/count?page=${page}&size=${size}`
    );
  },

  //음악 페이지네이션 조회
  getMusicList: async (page, size) => {
    console.log("음악페이지네이션조회 AxiosApi 작동");
    return await axios.get(
      CHORD8_DOMAIN + `/music/musiclist/page?page=${page}&size=${size}`
    );
  },

  //음악 댓글 입력
};

export default MusicAxiosApi;
