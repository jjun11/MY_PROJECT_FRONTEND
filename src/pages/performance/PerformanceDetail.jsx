import AxiosApi from "../../api/PerformanceAxios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import KakaomapComponent from "../../component/performance/KakaomapComponent";

const Container = styled.div`
    margin: 8rem; 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Image = styled.img`
    width: 48rem;
    height: 63rem;
    overflow: hidden;
    border-radius: 3rem;
`;

const Information = styled.div`
    width: 120rem;
    height: 48rem;
    margin-left: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 2rem;
    .title{
        width: 120rem;
        height: 5rem;
        font-size: 4rem;
        font-weight: 700;
    }
    .info{
        width: 50rem;
        height: 39rem;
    
    }
    .map{
        width: 70rem;
        height: 40rem;
        background-color: green;
        border-radius: 2rem;
        overflow: hidden;
    
    }
`;

const LineUp = styled.div`
`;




const PerformanceDetail = () => {
    const { id } = useParams();
    const [performance, setPerformance] = useState(null); // performance 상태를 관리하는 useState 훅

    useEffect(() => {
        console.log(id);
        const getPerformanceList = async () => {
            try {
              const res = await AxiosApi.getPerformanceList(id);
              console.log(res.data);
              const matchingData = res.data.filter(item => item.performanceId === Number(id));
              console.log(matchingData);  
              const performance = matchingData[0]; 
              console.log(performance);
              setPerformance(performance); // API 호출이 완료되면 performance 상태를 업데이트
            } catch (error) {
              console.log(error);
              
            }
          };
        getPerformanceList();
    }, [id]);
    
    return (
        <>
            <Container>
                <Image src={performance && performance.performanceImage}/>
                    
                <Information>
                    <div className="title">{performance && performance.performanceName}</div>
                    <div className="info">
                        <div>공연 장소 : {performance && performance.venue}</div>
                        <div>일시 : {performance && performance.performanceDate}</div>
                        <div>좌석 수 : {performance && performance.seatCount}</div>
                        <div>{performance && performance.description}</div>
                        </div>
                    <div className="map">
                        {performance && <KakaomapComponent performanceList={[performance]}/>}
                    </div>
                </Information>
                <div className="lineup"></div>
                <LineUp>

                </LineUp>
            </Container>
        </>
    )
};

export default PerformanceDetail;