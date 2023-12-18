import styled from "styled-components";
import profile from "../images/ProFileimage.png";

export const MyPageContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;

  background: #fff;
`;
export const MainHead = styled.div`
  position: relative;

  display: flex;
  width: 100%;
  height: 24em;
  flex-shrink: 0;
  background: linear-gradient(98deg, #008bff 3.66%, #61e6ca 97.99%);
  overflow: hidden;
`;
export const MainProfile = styled.div`
  position: relative;
  width: 20em;
  height: 20em;
  flex-shrink: 0;
  border-radius: 20em;
  border: 50px solid #fff;
  opacity: 1;
  background: url(${profile}) no-repeat center / contain, lightgray;
  margin-top: 1.5em;
  margin-left: 5em;
`;
export const MainHeadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6em;
  width: 35em;
  height: 10em;
  flex-shrink: 0;
  flex-direction: row;
`;
export const MainHeadText = styled.div`
  display: flex;
  position: relative;
  padding-left: 1em;
  width: 10em;
  height: 1em;
  flex-direction: row;
  flex-shrink: 0;
  opacity: 1;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ArtistContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`;
export const Artist = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 4em;
  flex-shrink: 0;
  color: #fff;

  font-family: Noto Sans KR;
  font-size: 10em;
  font-style: normal;
  font-weight: 100;
  line-height: 1;
`;

export const InterBox = styled.div`
  display: flex;
  position: relative;
  width: 6em;
  height: 3.3em;
  flex-shrink: 0;
  border-radius: 10em;
  opacity: 1;
  margin: 1.5em;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: #fff;
`;
export const InterBoxText = styled.div`
  display: flex;
  width: 3em;
  height: 1.5emx;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  flex-shrink: 0;
  color: #000;

  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const PointBox = styled.div`
  position: absolute;
  right: 0;
  width: 10em;
  height: 6em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  font-family: Noto Sans KR;
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: var(--, 1);
`;
export const MoveButton = styled.button`
  width: 124.85px;
  height: 57.174px;
  flex-shrink: 0;
  border-radius: 58.341px;
  border: 2.334px solid #fff;

  opacity: 1;

  background: rgba(255, 255, 255, 0);
  color: #fff;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 23.336px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;
export const NameText = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 15em;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.div`
  display: flex;
  width: 10em;
  height: 80px;
  margin-top: 2em;
  margin-bottom: 0.1em;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  color: #000;

  font-family: Noto Sans KR;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RegButton = styled.button`
  width: 96.759px;
  height: 41.468px;
  flex-shrink: 0;
  border-radius: 57.595px;
  opacity: 1;

  background: #008bff;
  flex-shrink: 0;
  color: #fff;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ItemList = styled.div`
  display: flex;
  width: 100%;
  height: 20em;
  flex-direction: row;
  flex: 1;
  gap: 2em;
`;
export const Picture = styled.div`
  width: 171px;
  height: 171px;
  flex-shrink: 0;
  border-radius: 37.316px;
  opacity: 1;

  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.28) 100%);
`;
export const ItemInfo = styled.div`
  display: flex;
  width: 159px;
  height: 64px;
  flex-shrink: 0;
  color: #000;
  justify-content: center;
  align-items: center;
`;
export const ItemTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.7em;
`;
export const ItemText1 = styled.p`
  color: #000;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const ItemText2 = styled.p`
  opacity: 1;
  color: #008bff;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const ItemText3 = styled.p`
  opacity: 1;
  color: #97b0aa;
  font-family: Noto Sans KR;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const MusicHeart = styled.div`
  width: 39.603px;
  height: 39.603px;
  flex-shrink: 0;
  opacity: 1;

  background: url(), lightgray 50% / cover no-repeat;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;
export const PerfomanceList = styled.div`
  display: flex;
  width: 100%;
  height: 20em;
  flex-direction: row;
  flex: 1;
  gap: 2em;
`;

export const PerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 406px;
  height: 678px;
  flex-shrink: 0;
  border-radius: 30px;
  opacity: 1;

  background: #fff;

  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.15);
`;
export const PerformancePictureBox = styled.div`
  width: 365.776px;
  height: 505.802px;
  flex-shrink: 0;
  opacity: 1;
`;
export const PerformancePicture = styled.div`
  width: 365.776px;
  height: 483px;
  flex-shrink: 0;
  border-radius: 20px;
  opacity: 1;

  background: linear-gradient(180deg, #2400ff 0%, #f00 100%);
`;
export const PerformanceTextBox = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  justify-content: flex-start;
  height: 150px;
  flex-shrink: 0;
`;
export const PerformanceText1 = styled.p`
  color: #000;

  font-family: Noto Sans KR;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const PerformanceText2 = styled.p`
  color: #354b45;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const PerformanceText3 = styled.p`
  color: #354b45;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;
export const PerformanceText4 = styled.p`
  color: #97b0aa;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;
export const PerformanceButton = styled.button`
  width: 96.759px;
  height: 41.468px;
  flex-shrink: 0;
  border-radius: 57.595px;
  /* border-top: 1px solid #fff;

  border-right: 1px solid #fff;

  border-bottom: 1px solid #fff;

  border-left: 1px solid #fff; */

  opacity: 1;

  background: #354b45;
  color: #fff;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
