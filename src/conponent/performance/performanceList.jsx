import AxiosApi from "../../api/AxiosApi";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PerformanceCardView from "./performanceCardView";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 210rem;
  gap: 8px;
  justify-content: start;
  margin: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;
  height: auto;
`;

const PageButton = styled.button`
  border: 1px solid #ddd;
  padding: 5px;
  width: 3rem;
  height: 3rem;
  margin: 0 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkgray;
  }

  &:focus {
    outline: none;
    background-color: var(--mainblue);
    color: white;
  }
`;

const PerformanceList = ({ performanceList }) => {
  // const[performanceList, setPerformanceList] = useState([]); // 공연목록 데이터
  const[currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const[totalPage, setTotalPage] = useState(0); // 전체 페이지

  // 총 페이지 수 계산
  useEffect(() => {
    const totalPage = async () => {
      try {
        console.log("performanceList 총페이지수계산 시도")
        const res = await AxiosApi.getPerformancePage(0, 10);
        setTotalPage(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    totalPage();
  }, []);

  // // 공연 목록 조회
  // useEffect(() => {
  //   const performanceList = async () => {
  //     try {
  //       const res = await AxiosApi.getPerformancePageList(currentPage, 10);
  //       console.log(res.data);
  //       setPerformanceList(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   performanceList();
  // }, [currentPage]);

  // 페이지 이동
  const handlePageChange = (number) => {
    console.log(number);
    setCurrentPage(number - 1);
  };

  // 페이지네이션 렌더링
  const renderPagination = () => {
    return (
      <PaginationContainer>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <PageButton key={page} onClick={() => handlePageChange(page)}>
            {page}
          </PageButton>
        ))}
      </PaginationContainer>
    );
  };

  return (
    <>
    <CardContainer>
      {performanceList.map((performance) => (
        <PerformanceCardView
          key={performance.id}
          image={performance.performanceImage}
          title={performance.performanceName}
          venue={performance.venue}
          performer={performance.performer}
          date={performance.performanceDate}
          />
      ))}
    </CardContainer>
    {renderPagination()}
    
    </>
  )
}

export default PerformanceList;