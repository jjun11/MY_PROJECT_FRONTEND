import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Header from "./style/Header";
import GlobalStyle from "./style/GlobalStyle";
import Footer from "./style/Footer";
import Performance from './pages/performance/Performance'

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
              <Router>        
                  <Routes>    
                      <Route path="/" element={<Performance />} />
                  </Routes>
              </Router>
            <Footer />
        </>
    );
};
export default App;