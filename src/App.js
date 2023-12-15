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
import PerformanceUpdate from "./pages/performance/PerformanceUpdate";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path="/performance" element={<Performance />} />
          <Route path="/PerformanceDetail/:performanceId" element={<PerformanceDetail />}/>
          <Route path="/PerformanceUpdate" element={<PerformanceUpdate />}/>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
          <Route path="/signup" element={<SignupPage></SignupPage>} />
          <Route path="/kakao" element={<KakaoLogin></KakaoLogin>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
