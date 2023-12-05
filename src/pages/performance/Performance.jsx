// import MapComponent from "../../conponent/performance/MapComponent";
import KakaomapComponent from "../../conponent/performance/KakaomapComponent";
import GlobalStyle from "../../style/GlobalStyle";
import { Container, SearchBanner, Box, Map, ConcertList } from "../../style/performance/PerformanceStyle";


const Concert = () => {
    const handleSearch = () => {
        console.log("검색 버튼 클릭");

    };

    const handleRegister = () => {
        console.log("공연 등록 버튼 클릭");
    };
    

    return (
        <>
        <GlobalStyle />
        <Container>                
            <SearchBanner>
                <Box>
                    <div>공연 검색</div>
                </Box>
                <Box>
                    <input type="text" />
                    <button onClick={handleSearch}>공연 검색</button>
                    <button onClick={handleRegister}>공연 등록</button>
                </Box>
            </SearchBanner>
            <Map>
                <KakaomapComponent />
            </Map>
            <ConcertList>
                <div className="title">내 근처 공연</div>
            </ConcertList>
        </Container>
        </>
    );
};

export default Concert;