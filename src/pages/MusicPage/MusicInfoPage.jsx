import React, { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import albumimg from "../../images/albumcoverimg.jpg";
import likeheart from "../../images/Heart.png";
import buyimg from "../../images/Basket.png";
import postimg01 from "../../images/postimg01.jpg";
import postimg02 from "../../images/postimg03.jpg";
import artistImg from "../../images/Artist_2.png";
import heartImg from "../../images/Heart.png";
import subscriberImg from "../../images/Subscriber.png";
import ReactAudioPlayer from "react-audio-player";
import commentimg from "../../images/postimg05.jpg";
import commentimg01 from "../../images/postimg03.jpg";

const InfoContainer = styled.div`
  width: 100%;
  height: 250rem;
  display: flex;
  position: relative;
  flex-direction: column;
  // border: 1px solid red;
`;

const TopInfoBox = styled.div`
  width: 100%;
  height: 90rem;
  display: flex;
  position: relative;
  flex-direction: column;
  // border: 2px solid black;
  align-items: center;
`;

const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const MusicImgBox = styled.div`
  width: 35rem;
  height: 35rem;
  position: relative;
  // left: 78.4rem;
  top: 14rem;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  overflow: hidden;
  clip-path: circle(50% at 50% 50%);
  transition: transform 1s linear;
  ${(props) =>
    props.isPlaying &&
    css`
      animation: ${rotateAnimation} 15s linear infinite;
    `}
`;

const MusicImage = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  left: -10%; /* 이미지 위치 조정 */
  top: -10%; /* 이미지 위치 조정 */
  z-index: 2;
  clip-path: circle(50% at 50% 50%);
`;

const MusicInnerCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background: rgba(22, 19, 19, 0.1);
  border: 1px solid black;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  clip-path: circle(50% at 50% 50%);
`;

const MusicName = styled.div`
  position: relative;
  display: flex;
  width: 32rem;
  height: 4.3rem;
  // left: 904.9px;
  top: 15rem;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 43px;
  text-align: center;
  border: 1px solid red;
  color: #000000;
`;

const MusicDefInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32rem;
  height: 7rem;
  // left: 803px;
  top: 18rem;
`;

const SingerName = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 32px;
  text-align: center;

  color: #4296dc;
`;

const WriteInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const ComposerNamer = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  position: relative;
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const LyricistName = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  position: relative;
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const Genre = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 32px;
  text-align: center;

  color: black;
`;

const BoxCon = styled.div`
  width: 44.6rem;
  height: 9.2rem;

  // left: 74rem;
  top: 18rem;
  display: flex;
  flex-direction: row;
  gap: 3.8rem;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const LikeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: #ffffff;
  box-shadow: 0px 5.1px 19.18px -3.2px rgba(0, 0, 0, 0.3);
  width: 10rem;
  height: 5rem;
  font-size: 2rem;
  gap: 0.2rem;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }
`;

const LikeHeart = styled.img`
  width: 3rem;
  height: 3rem;
`;

const LikeCount = styled.div`
  font-size: 2rem;
`;

const BuyBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: #ffffff;
  box-shadow: 0px 5.1px 19.18px -3.2px rgba(0, 0, 0, 0.3);
  width: 10rem;
  height: 5rem;
  font-size: 2rem;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }
`;

const BuyImg = styled.img`
  height: 3rem;
  width: 3rem;
`;

const PlayBox = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  background: linear-gradient(180deg, #008bff, #61e6ca);
  box-shadow: 0px 5.1px 19.18px -3.2px rgba(0, 0, 0, 0.3);
  width: 10rem;
  border: none;
  height: 5rem;
  color: white;
  font-size: 3rem;
  cursor: pointer;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }

  &:active {
    border: none;
  }
`;

const VolumeInput = styled.div`
  display: flex;
  position: relative;
  // bottom: 20px; /* 바닥과의 거리를 조정 */

  justify-content: center;
  left: 0rem;
  top: 18rem;
`;

const BottomInfoBox = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  // border: 1px solid blue;
`;

const BottomTitle = styled.div`
  position: relative;
  display: flex;
  color: #97b0aa;
  font-size: 4rem;
  width: 100%;
  height: 6rem;
  align-items: center;
  justify-content: center;
`;

const DetailInfoBox = styled.div`
  width: 100%; /* 또는 %값으로 조정 */
  height: 128rem;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const CoperateInfo = styled.div`
  width: 60rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const CopoerateTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  top: 3rem;
  display: flex;
  position: relative;
`;

const CopoeraterBox = styled.div`
  position: relative;
  width: 38rem;
  height: 102.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 2.3rem;

  color: #000000;
`;

const CopertatorInfo = styled.div`
  position: relative;
  width: 40rem;
  height: 20rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 4.1rem;
`;

const ProfileImg = styled.img`
  position: relative;
  width: 20rem;
  height: 20rem;

  border-radius: 10rem;
  box-shadow: 0rem 0rem 0.4rem rgba(0, 0, 0, 0.25);
`;

const CoperDetail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 28.9rem;
  height: 10rem;
`;

const CoperDetail01 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 20rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const CoperName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  position: relative;
  // left: 3rem;
`;

const MusicianTag = styled.img`
  display: flex;
  position: relative;
  width: 2rem;
  height: 2rem;
`;

const CoperDetail02 = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 20rem;
  height: 5rem;
  top: 1rem;
  align-items: center;
  gap: 2rem;
`;

const CoLikeBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: light;
  font-size: 1.8rem;
  gap: 1rem;
  width: 13.5rem;
  height: 5.2rem;
  background: #ffffff;
  box-shadow: 0px 5.114px 19.1775px -3.19625px rgba(0, 0, 0, 0.3);
  border-radius: 31.9625px;
`;

const FollowerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 10rem;
  height: 5rem;

  background: #ffffff;
  box-shadow: 0px 0.6rem 2rem -0.4rem rgba(0, 0, 0, 0.3);
  border-radius: 3.2rem;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0rem 0.4rem 0.8rem white;
    transform: scale(1.1);
  }
`;

const Followimg = styled.img`
  width: 3rem;
  height: 3rem;
`;

const FollowerCount = styled.div`
  font-size: 1.9rem;
  font-weight: light;
`;

const LyricsInfo = styled.div`
  width: 35rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const LyricsTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  top: 3rem;
  display: flex;
  position: relative;
`;

const LyricsBox = styled.div`
  position: relative;
  width: 30rem;
  height: 102.5rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 2.3rem;

  color: #000000;
`;

const CommnetZone = styled.div`
  left: 5rem;
  width: 50rem;
  border: 1px solid green;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const CommentTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  top: 3rem;
  display: flex;
  position: relative;
`;

const CommentBOx = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 110rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 2.3rem;

  color: #000000;
`;

const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48rem;
  height: 8rem;

  background: #eeeeee;
  border-radius: 1.5rem;
  gap: 1.5rem;
`;

const CommenterInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 5.5rem;
  height: 9rem;
  top: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const CommenterName = styled.div`
  position: relative;
  display: flex;
  color: black;
  font-size: 1rem;
  font-weight: light;
`;

const CommentImg = styled.img`
  position: relative;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 20rem;
  background: blue;
`;

const TextInput = styled.input`
  box-sizing: border-box;

  position: relative;
  display: flex;
  width: 30rem;
  height: 7rem;
  background: #ffffff;
  border: 0.3px solid #000000;
  border-radius: 10px;
  box-shadow: inset 1px 1px rgba(0, 0, 0, 0.7);
  /* 호버 효과 스타일 */
  &:hover {
    transform: scale(1.005);
    cursor: pointer; /* 호버 시 마우스 커서 변경 */

    /* 클릭 시 테두리 없애기 */
    &:focus {
      outline: none;
    }
  }
`;
const CommentButton = styled.div`
  position: relative;
  display: flex;
  width: 8rem;
  height: 6rem;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);

  background: #4296dc;
  border-radius: 1rem;
  transition: transform 0.3s ease;

  /* 호버 효과 스타일 */
  &:hover {
    transform: scale(1.1); /* 호버 시 크기를 1.1배로 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */

    /* 클릭 효과 스타일 */
  &:active {
    transform: scale(0.9); /* 클릭 시 크기를 0.9배로 축소 */
  }
`;

const Distinctline = styled.div`
  position: relative;
  display: flex;
  width: 46rem;
  height: 0px;
  top: 3.2rem;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Comments = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  top: 3.2rem;
  gap: 5rem;
  width: 46rem;
  height: 9rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const CommenterInfo01 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 5.5rem;
  height: 9rem;

  align-items: center;
  justify-content: center;
  // left: 2rem;
`;

const CommentImg01 = styled.img`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 2.3rem;
  background: blue;
`;

const CommenterName01 = styled.div`
  position: relative;
  display: flex;
  color: black;
  font-size: 1rem;
  font-weight: light;
`;

const CommentText = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 46rem;
  height: 6.7rem;

  align-items: center;
`;

const UpdateDelete = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 1.4rem;
  right: 1rem;
  top: 2rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
`;

const DeleteText = styled.div`
  position: relative;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
`;

const UpdateText = styled.div`
position: relative
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 1.4rem;

color: #000000;`;

const MusicInfo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [audioSrc, setAudioSrc] = useState("music/testmusic06.mp3");
  const [volume, setVolume] = useState(1);
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    let rotateInterval;

    if (isPlaying) {
      rotateInterval = setInterval(() => {
        setRotationAngle((prevAngle) => prevAngle + 1);
      }, 10); // 회전 속도 조절을 위한 간격 설정 (단위: 밀리초)
    } else {
      clearInterval(rotateInterval); //회전 효과 중지
    }

    return () => {
      clearInterval(rotateInterval);
    };
  }, [isPlaying]);

  const handlePlayClick = () => {
    console.log("handlePlayClick 함수 실행됨");
    setIsPlaying(!isPlaying);
    if (audioPlayerRef.current) {
      if (!isPlaying) {
        audioPlayerRef.current.audioEl.current.play();
      } else {
        audioPlayerRef.current.audioEl.current.pause();
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const [writeValue, setWriteValue] = useState("");

  const handleInputChange = (e) => {
    setWriteValue(e.target.value);
  };

  const hadleWrite = () => {
    console.log("댓글작성:", writeValue);
  };

  const data = [
    {
      coperatorimg: postimg01,
      CoperName: "협업자1 이름",
      musiciantag: artistImg,
      likeheart: heartImg,
      LikeCount: "3.6K",
      follower: subscriberImg,
      FollowerCount: "1.6k",
    },
    {
      coperatorimg: postimg02,
      CoperName: "협업자2 이름",
      musiciantag: artistImg,
      likeheart: heartImg,
      LikeCount: "5.2K",
      follower: subscriberImg,
      FollowerCount: "2.3k",
    },
    // 추가 데이터가 있다면 계속해서 추가 가능
  ];

  return (
    <InfoContainer>
      <TopInfoBox>
        <MusicImgBox isPlaying={isPlaying}>
          <MusicImage
            alt="앨범커버"
            src={albumimg}
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          />
          <MusicInnerCircle />
        </MusicImgBox>
        <MusicName>노래제목</MusicName>
        <MusicDefInfo>
          <SingerName>가수이름</SingerName>

          <WriteInfo>
            <ComposerNamer>작곡 : 작곡가이름</ComposerNamer>|
            <LyricistName>작사 : 작사가이름</LyricistName>
          </WriteInfo>

          <Genre>장르</Genre>
        </MusicDefInfo>
        <BoxCon>
          <LikeBox>
            <LikeHeart alt="좋아요하트" src={likeheart} />
            <LikeCount>221</LikeCount>
          </LikeBox>
          <PlayBox onClick={handlePlayClick}>▶</PlayBox>
          <BuyBox>
            <BuyImg alt="장바구니아이콘" src={buyimg} />
          </BuyBox>
          <ReactAudioPlayer
            ref={audioPlayerRef}
            src={audioSrc}
            autoPlay={isPlaying}
            controls={false}
            volume={volume}
            onPlay={() => {}}
          />
        </BoxCon>
        <VolumeInput>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </VolumeInput>
      </TopInfoBox>
      <BottomTitle>곡정보</BottomTitle>
      <BottomInfoBox>
        <DetailInfoBox>
          <CoperateInfo>
            <CopoerateTitle>Producer</CopoerateTitle>

            <CopoeraterBox>
              {data.map((item, index) => (
                <CopertatorInfo key={index}>
                  <ProfileImg alt="프로필사진" src={item.coperatorimg} />

                  <CoperDetail>
                    <CoperDetail01>
                      <CoperName>{item.CoperName}</CoperName>
                      {/* <MusicianTag alt="음악등록자" src={musiciantag} /> */}
                      <MusicianTag src={item.musiciantag} alt="음악등록자" />
                    </CoperDetail01>

                    <CoperDetail02>
                      <LikeBox>
                        <LikeHeart alt="좋아요하트" src={item.likeheart} />
                        <span>{item.LikeCount}</span>
                      </LikeBox>

                      <FollowerBox>
                        <Followimg alt="팔로워" src={item.follower} />
                        <span>{item.FollowerCount}</span>
                      </FollowerBox>
                    </CoperDetail02>
                  </CoperDetail>
                </CopertatorInfo>
              ))}
            </CopoeraterBox>
          </CoperateInfo>

          <LyricsInfo>
            <LyricsTitle>가사</LyricsTitle>
            <LyricsBox>
              (Verse 1) 무지개 불빛이 피어나는 밤에 하늘은 우리의 무대, 별들은
              섬광 함께 모여 노래를 부를 때면 불꽃놀이가 시작돼 우리의 순간
              <br />
              <br />
              <br />
              (Pre-Chorus) 불꽃놀이는 우리의 꿈을 노래해 하나둘씩 피어나는 불빛
              속에 우리의 이야기가 펼쳐져가네 저 하늘에 반짝이는 우리의 기억
              <br />
              <br />
              <br />
              (Chorus) 불꽃놀이야, 우리 함께 놀자 하늘에 불꽃을 피워 우리의 사랑
              놀라운 순간, 눈부신 불꽃놀이 우리의 이야기를 쓰는 거야
              <br />
              <br />
              <br />
              (Verse 2) 작은 손을 잡고 걸어가면서 불빛이 춤추는 곳으로 향해봐
              우리의 발자국이 음악처럼 흔들려 불꽃놀이의 밤, 우리의 시간
              <br />
              <br />
              <br />
              (Pre-Chorus) 불꽃놀이는 우리의 얘기를 담아 하늘에 피어나는 불빛
              속에 우리의 소원이 담긴 노래가 흐르고 저 하늘에 우리의 꿈이 펼쳐져
              <br />
              <br />
              <br />
              (Chorus) 불꽃놀이야, 우리 함께 놀자 하늘에 불꽃을 피워 우리의 사랑
              놀라운 순간, 눈부신 불꽃놀이 우리의 이야기를 쓰는 거야
              <br />
              <br />
              <br />
              (Bridge) 별들이 노래하고, 바람이 춤추면 우리의 이야기는 더욱
              아름다워져 불꽃놀이의 밤, 우리의 마법 함께한 모든 순간이 영원히
              남아
              <br />
              <br />
              <br />
              (Chorus) 불꽃놀이야, 우리 함께 놀자 하늘에 불꽃을 피워 우리의 사랑
              놀라운 순간, 눈부신 불꽃놀이 우리의 이야기를 쓰는 거야
              <br />
              <br />
              <br />
              (Outro) 불빛 속에서 우리의 손을 놓지 말아 불꽃놀이의 밤, 영원히
              계속돼
            </LyricsBox>
          </LyricsInfo>

          <CommnetZone>
            <CommentTitle>댓글</CommentTitle>

            <CommentBOx>
              <InputArea>
                <CommenterInfo>
                  <CommentImg alt="작성자사진" src={commentimg} />
                  <CommenterName>작성자</CommenterName>
                </CommenterInfo>

                <TextInput
                  type="text"
                  placeholder="댓글을 입력해주세요"
                  value={writeValue}
                  onChange={handleInputChange}
                ></TextInput>

                <CommentButton onClick={hadleWrite}>등록</CommentButton>
              </InputArea>

              <Distinctline />

              <Comments>
                <CommenterInfo01>
                  <CommentImg01 alt="작성자사진01" src={commentimg01} />
                  <CommenterName01>작성자</CommenterName01>
                </CommenterInfo01>

                <CommentText>노래 개좋음</CommentText>

                <UpdateDelete>
                  <UpdateText>수정</UpdateText>
                  <div>|</div>
                  <DeleteText>삭제</DeleteText>
                </UpdateDelete>
              </Comments>
            </CommentBOx>
          </CommnetZone>
        </DetailInfoBox>
      </BottomInfoBox>
    </InfoContainer>
  );
};

export default MusicInfo;
