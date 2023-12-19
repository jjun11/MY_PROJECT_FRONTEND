import React, { useState } from "react";
import {
  UpdateZone,
  InputBox,
  Button,
  InputContainer,
  InputContainer02,
  InputContainer01,
  Terms,
  TermsTitle,
  Term01,
  Term02,
  SingName,
  Singer,
  Composer,
  Lyricist,
  Genre,
  Purpose,
  CategoryText,
  TitleText,
  GenreButtonBox,
  GenreButton,
  PurposeButtonBox,
  PurposeButton,
  Titleimg,
  TitleUploadButton,
  SingInfo,
  Lyrics,
  LyricsInputBox,
} from "../../style/music/MusicUpdateStyle";

const UpdateBox = () => {
  // 입력값 정보 저장
  const [performer, setPerformer] = useState([]); // 참여자
  const [venue, setVenue] = useState(""); // 공연장소
  const [detailVenue, setDetailVenue] = useState(""); // 상세공연장소
  const [date, setDate] = useState(""); // 공연일시
  const [title, setTitle] = useState(""); // 공연제목
  const [poster, setPoster] = useState(""); // 포스터
  const [seat, setSeat] = useState(""); // 좌석수
  const [description, setDescription] = useState(""); // 공연소개

  // 유효성 검사, 포스터이미지, 설명은 없어도 되는 값이므로 제외
  const [isperformer, setIsPerformer] = useState(false); // 참여자 입력유무
  const [isvenue, setIsVenue] = useState(false); // 공연장소 입력유무
  const [isdetailVenue, setIsDetailVenue] = useState(false); // 상세공연장소 입력유무
  const [isdate, setIsDate] = useState(false); // 공연일시 입력유무
  const [istitle, setIsTitle] = useState(false); // 공연제목 입력유무
  const [isseat, setIsSeat] = useState(false); // 좌석수 입력유무

  return (
    <>
      <UpdateZone>
        <h1>음원 등록하기</h1>
        <InputContainer>
          <InputContainer01>
            <SingName>
              <CategoryText>노래명</CategoryText>

              <InputBox placeholder="등록할 노래 제목 입력" />
            </SingName>

            <Singer>
              <CategoryText>가수</CategoryText>
              <InputBox placeholder="가수 활동명 입력" />
            </Singer>

            <Composer>
              <CategoryText>작곡가</CategoryText>
              <InputBox placeholder="작곡가 이름 입력" />
            </Composer>

            <Lyricist>
              <CategoryText>작사가</CategoryText>
              <InputBox placeholder="작사가 이름 입력" />
            </Lyricist>

            <Genre>
              <CategoryText>장르</CategoryText>
              <GenreButtonBox>
                <GenreButton>발라드</GenreButton>
                <GenreButton>락/메탈</GenreButton>
                <GenreButton>포크/블루스</GenreButton>
                <GenreButton>R&B/SOUL</GenreButton>
                <GenreButton>힙합/랩</GenreButton>
                <GenreButton>어쿠스틱</GenreButton>
                <GenreButton>트로트</GenreButton>
                <GenreButton>기타</GenreButton>
              </GenreButtonBox>
            </Genre>

            <Purpose>
              <CategoryText>목적</CategoryText>
              <PurposeButtonBox>
                <PurposeButton>영리</PurposeButton>
                <PurposeButton>비영리</PurposeButton>
              </PurposeButtonBox>
            </Purpose>
          </InputContainer01>

          <InputContainer02>
            <Titleimg>
              <TitleText>타이틀 이미지</TitleText>
              <InputBox />
              <TitleUploadButton>업로드</TitleUploadButton>
            </Titleimg>

            <SingInfo>
              <CategoryText>곡소개</CategoryText>
              <InputBox placeholder="곡에 대한 간략한 설명" />
            </SingInfo>

            <Lyrics>
              <CategoryText>가사</CategoryText>
              <LyricsInputBox />
            </Lyrics>
          </InputContainer02>

          <Terms>
            <TermsTitle>약관동의</TermsTitle>
            <Term01>
              서비스 이용 및 저작권 관련 약관
              <input type="checkbox" />
            </Term01>

            <Term02>
              판매수익 지급 및 분배 동의
              <input type="checkbox" />
            </Term02>
          </Terms>
        </InputContainer>

        <div className="buttonContainer">
          <Button>등록하기</Button>
        </div>
      </UpdateZone>
    </>
  );
};

export default UpdateBox;
