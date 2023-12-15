import AxiosApi from "../../axios/PerformanceAxios";
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
    height: 63.5rem;
    overflow: hidden;
    border-radius: 3rem;
    box-shadow: 0rem 3rem 5rem -3rem rgba(0, 0, 0, 0.5);
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
        border-bottom: 0.1rem solid lightgray;
        padding-bottom: 2rem;
    }
    .info{
        width: 50rem;
        height: 39rem;
        margin-top: 1rem;
        .desc{
            margin-top: 3rem;
        }
    }
    .map{
        margin-top: 2rem;
        width: 60rem;
        height: 40rem;
        background-color: green;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0rem 3rem 3rem -3rem rgba(0, 0, 0, 0.4);
    }
`;

const LineUp = styled.div`
`;




const PerformanceDetail = () => {
    const { performanceId } = useParams();
    const [performance, setPerformance] = useState(null); // performance 상태를 관리하는 useState 훅

    useEffect(() => {
        console.log(performanceId);
        const getPerformanceList = async () => {
            try {
              const res = await AxiosApi.getPerformanceList(performanceId);
              console.log(res.data);
              const matchingData = res.data.filter(item => item.performanceId === Number(performanceId));
              console.log(matchingData);  
              const performance = matchingData[0]; 
              console.log(performance);
              setPerformance(performance); // API 호출이 완료되면 performance 상태를 업데이트
            } catch (error) {
              console.log(error);
              
            }
          };
        getPerformanceList();
    }, [performanceId]);
    
    return (
        <>
            <Container>
                <Image src={performance && performance.performanceImage}/>
                <Information>
                    <div className="title">{performance && performance.performanceName}</div>
                    <div className="info">
                        <div className="venue">공연 장소 : {performance && performance.venue +", "+ performance.detailVenue }</div>
                        <div className="date">일시 : {performance && performance.performanceDate}</div>
                        <div className="seat">좌석 수 : {performance && performance.seatCount}</div>
                        <div className="desc">{performance && performance.description}</div>
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