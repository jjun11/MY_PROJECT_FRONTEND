import { Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Concert from './pages/concert/Concert';


function App() {
    return (
        <>
        <GlobalStyle>
            <Router>
                <Routes>
                    <Route path="/" element={<Concert/>}></Route>
                </Routes>
            </Router>
        </GlobalStyle>
        </>
    );
}



export default App;
