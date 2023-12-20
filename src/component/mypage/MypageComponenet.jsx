import {
  ButtonBox,
  ContentContainer,
  ItemList,
  ItemText1,
  ItemText2,
  ItemText3,
  ItemTextContainer,
  NameText,
  PerfomanceList,
  PerformanceBox,
  PerformanceButton,
  PerformancePicture,
  PerformancePictureBox,
  PerformanceText1,
  PerformanceText2,
  PerformanceText3,
  PerformanceText4,
  PerformanceTextBox,
  Picture,
  RegButton,
  SubTitle,
} from "../../style/MyPageStyle";

const MypageComponent = ({ userMusic }) => {
  return (
    <>
      <ContentContainer>
        <NameText>독산동 인디언</NameText>
        <SubTitle>
          노래 {userMusic ? userMusic.length : 0}
          <RegButton>음원 등록</RegButton>
        </SubTitle>
        <ItemList>
          {userMusic &&
            userMusic.map((music) => (
              <div key={music.musicId}>
                <Picture></Picture>
                <ItemTextContainer>
                  <ItemText1>{music.musicDTO.musicTitle}</ItemText1>
                  <ItemText2>
                    {music.userResDto && music.userResDto.userNickname}
                  </ItemText2>
                  <ItemText3>{music.musicDTO.genre}</ItemText3>
                </ItemTextContainer>
              </div>
            ))}
        </ItemList>
        <SubTitle>작사/작곡 3</SubTitle>
        <ItemList>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
          <div>
            <Picture></Picture>
            <ItemTextContainer>
              <ItemText1>음원 제목</ItemText1>
              <ItemText2>아티스트 이름</ItemText2>
              <ItemText3>장르</ItemText3>
            </ItemTextContainer>
          </div>
        </ItemList>
        <SubTitle>
          공연 8<RegButton>공연 등록</RegButton>
        </SubTitle>
        <PerfomanceList>
          <PerformanceBox>
            <PerformancePictureBox>
              <PerformancePicture></PerformancePicture>
            </PerformancePictureBox>
            <PerformanceTextBox>
              <PerformanceText1>공연</PerformanceText1>
              <PerformanceText2>장소</PerformanceText2>
              <PerformanceText3>아티스트 이름</PerformanceText3>
              <PerformanceText4>일시</PerformanceText4>
              <ButtonBox>
                <PerformanceButton>공연 종료</PerformanceButton>
                <RegButton>자세히</RegButton>
              </ButtonBox>
            </PerformanceTextBox>
          </PerformanceBox>
          <PerformanceBox></PerformanceBox>
          <PerformanceBox></PerformanceBox>
          <PerformanceBox></PerformanceBox>
        </PerfomanceList>
      </ContentContainer>
    </>
  );
};

export default MypageComponent;
