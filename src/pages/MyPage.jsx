import { useEffect, useState } from "react";
import MypageComponent from "../conponent/Mypage/MypageComponenet";
import { ReactComponent as Heart } from "../images/HeartBox.svg";
import { ReactComponent as Subs } from "../images/SubscriberBox.svg";

import {
  Artist,
  ArtistContainer,
  InterBox,
  InterBoxText,
  MainHead,
  MainHeadBox,
  MainHeadDateText,
  MainHeadText,
  MainProfile,
  MoveButton,
  MoveButtonBox,
  MyPageContainer,
  PointBox,
} from "../style/MyPageStyle";
import MemberInfoAxiosApi from "../axios/MemberInfoAxios";

const MyPage = () => {
  const [email, setEmail] = useState("asd123@naver.com");
  const [userInfo, setUserInfo] = useState(null);
  const [userMusic, setUserMusic] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  useEffect(() => {
    const fetchUserInfoAndMusic = async () => {
      try {
        const userInfoResponse = await MemberInfoAxiosApi.getUserInfo(email);
        setUserInfo(userInfoResponse.data);

        if (userInfoResponse.data) {
          const musicResponse = await MemberInfoAxiosApi.getUserMusic(
            userInfoResponse.data.id
          );
          setUserMusic(musicResponse.data);
          console.log(musicResponse.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchData = async () => {
      const response = await MemberInfoAxiosApi.getUserInfoByPerformanceEmail(
        email
      );
      console.log(response.data);
      setUserPerformance(response.data);
    };
    fetchData();
    fetchUserInfoAndMusic();
  }, [email]);
  return (
    <>
      <MyPageContainer>
        <MainHead>
          <MainProfile></MainProfile>
          <ArtistContainer>
            <MainHeadBox>
              <MainHeadText>
                공연 횟수 :{" "}
                {userPerformance && userPerformance.performances.length}
              </MainHeadText>
              <MainHeadText>
                등록된 음원 : {userMusic && userMusic.length}
              </MainHeadText>
              <InterBox>
                <InterBoxText>
                  <Heart />
                  1000
                </InterBoxText>
              </InterBox>
              <InterBox>
                <InterBoxText>
                  <Subs />
                  1000
                </InterBoxText>
              </InterBox>
            </MainHeadBox>

            <Artist>
              {/* <MainHeadDateText></MainHeadDateText> */}
              ARTIST
            </Artist>
          </ArtistContainer>
          <PointBox>
            <MainHeadText>MY 포인트</MainHeadText>
            {userInfo && userInfo.userPoint}

            <MoveButtonBox>
              <MoveButton>충전하기</MoveButton>
              <MoveButton>환전하기</MoveButton>
            </MoveButtonBox>
          </PointBox>
        </MainHead>
        <MypageComponent
          userMusic={userMusic}
          userPerformance={userPerformance}
        />
      </MyPageContainer>
    </>
  );
};
export default MyPage;
