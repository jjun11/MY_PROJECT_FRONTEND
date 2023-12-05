import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Concert from './pages/performance/Performance';

function App() {
    return (
        <>
            <GlobalStyle />
                <Router>        
                    <Routes>    
                        <Route path="/" element={<Concert />} />
                    </Routes>
                </Router>
        </>
    );
};
export default App;