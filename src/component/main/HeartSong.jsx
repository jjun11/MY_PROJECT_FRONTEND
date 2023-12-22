import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainAxios from "../../axios/MainAxios";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Main = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.2);
`;

const Contents = styled.div`
  width: 100%;
  height: 10%;
  border: 3px solid red;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  width: 10%;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeartSong = () => {
  const usenavigate = useNavigate();

  const [list, setList] = useState([]);

  const onClick = () => {
    usenavigate(`/music-list`);
  };

  useEffect(() => {
    const getList = async () => {
      const res = await MainAxios.heartSong();
      console.log("음악 좋아요 정렬", res);
      if (res.status === 200) {
        // heartCount를 기준으로 내림차순 정렬
        const sortedList = res.data.sort(
          // 비교 함수
          // a와 b를 비교하여 정렬 순서를 결정
          // a가 b보다 앞에 오려면 음수를 반환, a가 b보다 뒤에 오려면 양수를 반환, 같으면 0을 반환
          (a, b) => b.musicDTO.heartCount - a.musicDTO.heartCount
        );
        setList(sortedList);
      } else {
        setList([]);
      }
    };
    getList();
  }, []);

  return (
    <>
      <Container>
        <Main>
          {list.map((data, index) => (
            <Contents key={index}>
              <Content onDoubleClick={onClick}>{index + 1}</Content>
              <Content onDoubleClick={onClick}>
                {data.musicDTO.musicTitle}
              </Content>
              <Content onDoubleClick={onClick}></Content>
              <Content onDoubleClick={onClick}>
                {data.userResDto.userNickname}
              </Content>
              <Content onDoubleClick={onClick}>{data.musicDTO.genre}</Content>
              <Content>좋아요 수 :{data.musicDTO.heartCount}</Content>
            </Contents>
          ))}
        </Main>
      </Container>
    </>
  );
};

export default HeartSong;
