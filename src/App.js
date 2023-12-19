import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./style/Header";
import GlobalStyle from "./style/GlobalStyle";
import Footer from "./style/Footer";
import Performance from "./pages/performance/Performance";
import PerformanceDetail from "./pages/performance/PerformanceDetail";
import KakaoLogin from "./api/KakaoLoginApi";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import MusicInfo from "./pages/MusicPage/MusicInfoPage";
import MusicRegistPage from "./pages/MusicPage/MusicRegistPage";
import MusicList from "./pages/MusicPage/MusicListPage";
import Test from "./pages/SimpleTest";
import PerformanceUpdate from "./pages/performance/PerformanceUpdate";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />

        <Routes>
          <Route path="/performance" element={<Performance />} />
          <Route path="/PerformanceUpdate" element={<PerformanceUpdate />}/>
          <Route
            path="/PerformanceDetail/:id"
            element={<PerformanceDetail/>}
          />
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/signup" element={<SignupPage></SignupPage>} />
          <Route path="/kakao" element={<KakaoLogin></KakaoLogin>} />
          <Route
            path="/music-regist"
            element={<MusicRegistPage></MusicRegistPage>}
          />
          <Route path="/music-list" element={<MusicList></MusicList>} />
          <Route path="//music-info/:id" element={<MusicInfo></MusicInfo>} />
          <Route path="/test" element={<Test></Test>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
