import AxiosApi from "../../axios/PerformanceAxios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import KakaomapComponent from "../../component/performance/KakaomapComponent";
import MainAxios from "../../axios/MainAxios";

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
    height: auto;
    margin: 5rem;
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
        padding-bottom: 8rem;
        margin-bottom: 2rem;
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
        height: 50rem;
        background-color: green;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0rem 3rem 3rem -3rem rgba(0, 0, 0, 0.4);
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
              const res = await MainAxios.notLoginPerformList();
              console.log("공연리스트 조회 ",res.data);
              const matchingData = res.data.filter(item => item.performanceId === Number(id));
              console.log("id에 해당하는 공연정보 필터링: ", matchingData);  
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