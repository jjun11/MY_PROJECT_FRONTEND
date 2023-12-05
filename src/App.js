import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Concert from './pages/performance/Performance';
import Header from './style/Header';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
                <Router>        
                    <Routes>    
                        <Route path="/" element={<Concert />} />
                    </Routes>
                </Router>
        </>
    );
};
export default App;