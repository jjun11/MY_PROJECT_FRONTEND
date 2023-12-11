// import MapComponent from "../../component/performance/MapComponent";
import KakaomapComponent from "../../component/performance/KakaomapComponent";
import GlobalStyle from "../../style/GlobalStyle";
import { Container, SearchBanner, Box, Map, ConcertList } from "../../style/performance/PerformanceStyle";
import PerformanceList from "../../component/performance/performanceList";
import { useEffect, useState } from "react";
import AxiosApi from "../../api/AxiosApi";

const Performance = () => {

    const [inputValue, setInputValue] = useState(''); // 입력필드에 입력값을 저장
    const [searchTerm, setSearchTerm] = useState(''); // 실제 검색을 수행할 검색어를 저장(검색버튼을 통해 검색할 데이터와 입력데이터를 분리)
    const [performanceList, setPerformanceList] = useState([]); // AxiosApi로 가져온 공연데이터를 저장
    const [filteredPerformanceList, setFilteredPerformanceList] = useState([]); // 필터링된 공연 데이터를 저장 .

    useEffect(() => {
        // 컴포넌트가 마운트될 때 공연 데이터를 불러옵니다.
        AxiosApi.getPerformanceList()
            .then(response => {
                setPerformanceList(response.data);
            })
            .catch(error => {
                console.error('Error fetching performance list', error);
            });
    }, []);

    // searchTerm 또는 performanceList 상태가 변경될 때마다 필터링된 데이터를 업데이트합니다.
    useEffect(() => {
        const filtered = performanceList.filter(performance => 
            performance.performanceName.includes(searchTerm) || performance.performer.includes(searchTerm) // 공연명 또는 공연자명에 검색어가 포함되어 있을 경우 필터링
        );
        setFilteredPerformanceList(filtered);
    }, [searchTerm, performanceList]);

   // handleSearch 함수는 '공연 검색' 버튼을 클릭했을 때 호출됩니다.
    // inputValue가 있을 경우, inputValue를 searchTerm 상태로 설정하고, inputValue를 초기화합니다.
    // inputValue가 없을 경우, searchTerm 상태를 초기화합니다.
    const handleSearch = () => { 
        if (inputValue) { 
            setSearchTerm(inputValue);
            setInputValue('');
        } else{
            setSearchTerm('');
        }
    };

    // handleInputChange 함수는 입력 필드의 값이 변경될 때마다 호출됩니다.
    // 이 함수는 입력 필드의 값을 inputValue 상태로 설정합니다.
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
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
                    <input type="text" value={inputValue} onChange={handleInputChange}/>
                    <button onClick={handleSearch}>{inputValue ? '공연 검색' : (searchTerm ? '초기화' : '공연 검색')}</button>
                    <button onClick={handleRegister}>공연 등록</button>
                </Box>
            </SearchBanner>
            <Map>
                <KakaomapComponent performanceList={filteredPerformanceList}/>
            </Map>
            <div className="title">내 근처 공연</div>    
            <PerformanceList performanceList={filteredPerformanceList}/>

        </Container>
        </>
    );
};

export default Performance;