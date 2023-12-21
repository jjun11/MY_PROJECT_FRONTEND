import {
  MainContainer,
  Main,
  TopText,
  Artist,
  Advertisement,
  MusicRankTitle,
  NewMusicList,
  MusicRank,
  News,
  P1,
  P2,
  P3,
} from "../component/main/MainPageComponent";
import Carousel from "../component/main/CatouselSlider";
import NewList from "../component/main/NewList";
import Comercial from "../component/main/Comercial";
import HeartSong from "../component/main/HeartSong";
const MainPage = () => {
  return (
    <>
      <MainContainer>
        <Main>
          <TopText>
            <P1>평범 했던 우리 모두가 가수가 되는 순간</P1>
            <P2>당신의 음악을 등록하세요.</P2>
            <P2>여러분의 음악이 세상에 등장하는 순간을 함께합니다. </P2>
          </TopText>
          <Artist>
            <P3>현재 활동중인 크리에이터들과</P3>
            <P3> 영감을 주고 받아보세요!</P3>
            <Carousel></Carousel>
          </Artist>

          <Advertisement>사이트 소개</Advertisement>
          <MusicRankTitle>지금 이 순간 인기 있는 음악 Best 100</MusicRankTitle>
          <MusicRank>
            <HeartSong></HeartSong>
          </MusicRank>
          <NewMusicList>
            <NewList></NewList>
          </NewMusicList>
          <News>
            <Comercial></Comercial>
          </News>
        </Main>
      </MainContainer>
    </>
  );
};

export default MainPage;
