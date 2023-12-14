import React from "react";
import styled from "styled-components";
import registerimg from "../../images/musicplay.gif";

const RegistContainer = styled.div`
  width: 100vw;
  height: 210rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  border: 1px solid red;
`;

const RegisterInfoBox = styled.div`
  position: relative;
  display: flex;
  width: 158rem;
  height: 21.5rem;
  top: 14.7rem;
  gap: 8rem;
  background: linear-gradient(269.47deg, #008bff 4.68%, #61e6ca 93.53%);
  border-radius: 1rem;
  align-items: center;
`;

const RegistMusicInfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 158rem;
  height: 55rem;
  top: 22rem;
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;

const RegisterImg = styled.img`
  position: relative;
  display: flex;
  width: 13.5rem;
  height: 13.5rem;
  left: 3rem;
  border-radius: 10rem;
  border: 8px solid #ffffff;
`;

const InfoBox = styled.div`
  display: flex;
  position: relative;
  width: 27rem;
  height: 20rem;

  border: 1px solid white;
`;

const RegisterRankBox = styled.div`
  display: flex;
  position: relative;
  width: 60rem;
  height: 20rem;

  border: 1px solid white;
`;

const PointZone = styled.div`
  display: flex;
  position: relative;
  width: 28rem;
  height: 20rem;

  border: 1px solid white;
`;

const RegistTitle = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid black;
  width: 148rem;
  height: 10rem;
  align-items: center;
`;

const TitleWriete = styled.div`
  display: flex;
  position: relative;
  color: #97b0aa;
  font-size: 4rem;
  font-weight: bold;
`;

const RegistInfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 148rem;
  height: 42rem;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const InfoBox01 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 46rem;
  height: 40rem;
  border: 1px solid black;
  align-items: center;
  gap: 2.5rem;
`;

const SongNameBox = styled.div`
  width: 42rem;
  height: 4rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const SingerBox = styled.div`
  width: 42rem;
  height: 4rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const ComposerBox = styled.div`
  width: 42rem;
  height: 4rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const LyricsistBox = styled.div`
  width: 42rem;
  height: 4rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const GenreBox = styled.div`
  width: 42rem;
  height: 10rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const InfoBox2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 46rem;
  height: 40rem;
  border: 1px solid black;
  align-items: center;
  gap: 2.5rem;
`;

const TitleImgBox = styled.div`
  width: 42rem;
  height: 4rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const MusicIntroBox = styled.div`
  width: 42rem;
  height: 4rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const LyricsBox = styled.div`
  width: 42rem;
  height: 24rem;
  display: flex;
  position: relative;
  border: 1px solid black;
  top: 1.5rem;
`;

const InfoBox03 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 46rem;
  height: 40rem;
  border: 1px solid black;
  align-items: center;
`;

const MusicRegistPage = () => {
  return (
    <RegistContainer>
      <RegisterInfoBox>
        <RegisterImg alt="음원등록자이미지" src={registerimg} />
        <InfoBox></InfoBox>
        <RegisterRankBox></RegisterRankBox>
        <PointZone></PointZone>
      </RegisterInfoBox>

      <RegistMusicInfoBox>
        <RegistTitle>
          <TitleWriete>음원 등록하기</TitleWriete>
        </RegistTitle>
        <RegistInfoBox>
          <InfoBox01>
            <SongNameBox></SongNameBox>
            <SingerBox></SingerBox>
            <ComposerBox></ComposerBox>
            <LyricsistBox></LyricsistBox>
            <GenreBox></GenreBox>
          </InfoBox01>

          <InfoBox2>
            <TitleImgBox></TitleImgBox>
            <MusicIntroBox></MusicIntroBox>
            <LyricsBox></LyricsBox>
          </InfoBox2>

          <InfoBox03></InfoBox03>
        </RegistInfoBox>
      </RegistMusicInfoBox>
    </RegistContainer>
  );
};

export default MusicRegistPage;
