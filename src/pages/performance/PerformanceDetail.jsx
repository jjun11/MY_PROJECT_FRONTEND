import AxiosApi from "../../axios/PerformanceAxios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import KakaomapComponent from "../../component/performance/KakaomapComponent";
import MainAxios from "../../axios/MainAxios";
import PerformerCardView from "../../component/performance/PerformerCardView";
import basket from "../../images/Basket.png";
import NoneBtnModalComponent from "../../utils/NoneBtnModalComponent";

const Container = styled.div`
    margin: 8rem; 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Image = styled.img`
    width: 42rem;
    height: 55rem;
    overflow: hidden;
    border-radius: 3rem;
    margin-right: 5rem;
    box-shadow: 0rem 3rem 5rem -3rem rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
`;

const Information = styled.div`
    width: 120rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 2rem;
    .title{
        width: 100%;
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
        height: 40rem;
        background-color: green;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0rem 3rem 3rem -3rem rgba(0, 0, 0, 0.4);
    }
`;

const Bottom = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    .lineup{
        flex: 1;
        font-size: 4rem;
        font-weight: 700;
        color: var(--mainolive);
        display: flex;
        flex-wrap: wrap;
        .lineupTitle{
            width: 100%;
        }
    }
    .ticket{
        width: 30rem;
        height: auto;
        /* background-color: lightgreen; */
        border-radius: 1.5rem;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-end;
        padding: 2rem;
        .price{
            font-size: 4rem;
            font-weight: 900;
        }   
        .ticketing{
            
            font-size: 2rem;
        }
        .button{
            margin-top: 2rem;
            width: 15rem;
            height: 6rem;
            background-color: white;
            border-radius: 5rem;
            box-shadow: 0rem 0.5rem 2rem -0.5rem rgba(43, 36, 36, 0.4);
            &:hover {
            // 마우스 호버링 효과
            cursor: pointer;
            background-color: var(--mainsky);
            transform: scale(1.1);
            transition: transform 0.05s ease-in-out; // transform 속성에 대한 전환 효과 설정
            }
            &:active {
                // 클릭 효과
                background-color: var(--mainblue);
            }
            .icon{
                width: 30%;
                height: 100%;
                background: url(${ basket }) no-repeat center center;
                background-size: contain;
                margin: auto;
            }
        }
    }
`;




const PerformanceDetail = () => {
    const { id } = useParams();
    const [performance, setPerformance] = useState(null); // performance 상태를 관리하는 useState 훅
    const [memberInfo, setMemberInfo] = useState(null); // memberInfo 상태를 관리하는 useState 훅

    const [showLoginModal, setShowLoginModal] = useState(false); // 로그인여부 확인 모달
    const [showPaymentModal, setShowPaymentModal] = useState(false); // 결제 모달

    useEffect(() => {
        console.log(id);
        const getPerformanceList = async () => {
            try {
              const res = await MainAxios.notLoginPerformList();
              console.log("공연리스트 조회 ",res.data);
              const matchingData = res.data.filter(item => item.performanceId === Number(id)); // item은 res.data의 요소 하나하나를 의미
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

    /* performance.nicknames = [{}, {}, {}] 은 특정 공연의 공연자 닉네임 닉네임 key는 nicknames /
       userRes.data = [{}, {}, {}] 은 전체 유저의 정보 닉네임 key는 userNickname
    */
    useEffect(() => {
        const getMemberInfo = async () => {
          try {
            const userRes = await AxiosApi.getUserList();
            console.log("userRes", userRes);
            const matchingUser = userRes.data.filter(user => performance.nicknames.some(nickname => nickname === user.userNickname));
            // matchingUser 에 userRes.data 중에서 userNickname이 performance.nicknames에 포함되어 있는 요소만 필터링
            // 즉 전체유저정보 중에서 특정공연의 공연자 닉네임이 포함되어 있는 요소만 필터링
            setMemberInfo(matchingUser);
            console.log("matchingUser", matchingUser);
          } catch (error) {
            console.log(error);
          }
        };
      
        if (performance) {
          getMemberInfo();
        }
      }, [performance]);

      const checkLocalStorage = () => { // 로컬스토리지상에서 이메일, accessToken, refreshToken이 있는지 확인
        const email = localStorage.getItem('email');
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        if (!email || !accessToken || !refreshToken) {
            setShowLoginModal(true);
        } else {
            setShowPaymentModal(true);
        }
    };

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
                <Bottom>
                    <div className="lineup">
                        <div className="lineupTitle">라인업</div>
                        {memberInfo && memberInfo.map(user => (
                        <PerformerCardView
                            key={user.id}
                            // profileImage={user.userImage}
                            nickname={user.userNickname}
                            />
                        ))}
                        </div>
                    <div className="ticket">
                        <div className="ticketing">티켓 구매</div>
                        <div className="price">{performance && performance.price} P</div>
                        <div className="button" onClick={checkLocalStorage}>
                            <div className="icon"></div>
                        </div>
                    </div>
                </Bottom>
            </Container>
            <NoneBtnModalComponent
                isOpen={showLoginModal}
                setIsOpen={setShowLoginModal}
                content="로그인이 필요합니다."
                close={{ text: "닫기"}}
                />
            <NoneBtnModalComponent
                isOpen={showPaymentModal}
                setIsOpen={setShowPaymentModal}
                content="결제루삥뽕"
                close={{ text: "닫기"}}
                />
            {/* // {showLoginModal && <NoneBtnModalComponent title="로그인이 필요합니다." onClose={() => setShowLoginModal(false)} />}
            // {showPaymentModal && <NoneBtnModalComponent title="결제를 진행합니다." onClose={() => setShowPaymentModal(false)} />} */}
        </>
    )
};

export default PerformanceDetail;