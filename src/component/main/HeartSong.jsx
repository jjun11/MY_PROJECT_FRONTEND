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
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  .left {
    width: 20%;
    height: 100%;
    background-color: white;
  }

  .middle {
    width: 60%;
    height: 100%;
    background-color: blue;
  }

  .right {
    width: 60%;
    height: 100%;
    background-color: antiquewhite;
  }
`;

const HeartSong = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await MainAxios.heartSong();
      console.log("음악 좋아요 정렬", res);
      if (res.status === 200) {
        setList(res.data);
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
          {list.map((data, index) => {
            <Content key={index}>
              <div className="left">{data}</div>
              <div className="middle">{data}</div>
              <div className="right">{data}</div>
            </Content>;
          })}
        </Main>
      </Container>
    </>
  );
};

export default HeartSong;
