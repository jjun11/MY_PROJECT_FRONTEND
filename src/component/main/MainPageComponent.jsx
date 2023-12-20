import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 400vh;
  @media (max-width: 768px) {
    min-width: 380px;
  }
`;

export const Main = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 5.75949px 28.7975px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    width: 380px;
  }
`;

// 평범 했던 우리 모두가 가수가 되는 순간
// 당신의 음악을 등록하세요
export const TopText = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 380px;
    height: 20%;
  }
`;
export const P1 = styled.p`
  font-size: 4rem;
  width: 80%;
  text-align: center;
  color: #82ccff;
  font-weight: 900;
  text-shadow: 0px 8px 4px rgba(97, 230, 202, 0.25);
`;
export const P2 = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1;
  }
`;

// 최상단 추천 알고리즘
export const Artist = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
`;
export const P3 = styled.p`
  font-size: 2rem;
  line-height: 0;
  font-weight: 900;
`;

export const Advertisement = styled.div`
  border: 3px solid red;
  width: 100%;
  height: 16%;
  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;
// 44
export const MusicRankTitle = styled.div`
  width: 100%;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  color: #82ccff;
  text-shadow: 0px 8px 4px rgba(97, 230, 202, 0.25);
`;
// 50
export const MusicRank = styled.div`
  border: 3px solid red;
  width: 100%;
  height: 20%;
`;
// 70

export const NewMusicList = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 3px solid rgba(100, 100, 100, 0.2);
  @media (max-width: 768px) {
    height: 15%;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
// 80

export const News = styled.div`
  width: 100%;
  height: 16%;
`;
