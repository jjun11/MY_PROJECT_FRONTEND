import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from "./style/Header";
import GlobalStyle from "./style/GlobalStyle";
import Footer from "./style/Footer";
import Performance from './pages/performance/Performance'
import PerformanceDetail from './pages/performance/PerformanceDetail';
function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
              <Router>        
                  <Routes>    
                      <Route path="/" element={<Performance />} />
                      <Route path="/PerformanceDetail/:id" element={<PerformanceDetail />} />
                  </Routes>
              </Router>
            <Footer />
        </>
    );
};
export default App;