import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBox from "../../conponent/MusicList/SearchBox";
import postimg01 from "../../images/postimg01.jpg";
import postimg02 from "../../images/postimg02.jpg";
import postimg03 from "../../images/postimg03.jpg";
import postimg04 from "../../images/postimg04.jpg";
import postimg05 from "../../images/postimg05.jpg";
import albumthuming from "../../images/albumthumimg01.jpg";
import Waveform from "../../conponent/MusicList/MusicPlayer";
import { Link } from "react-router-dom";

const SingList = styled.div`
  width: 100vw;
  height: 100rem;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: white;
`;

const SingerPost = styled.div`
  width: 100vw;
  height: 50rem;

  display: flex;
  position: relative;
  box-shadow: 5rem;
  color: white;
`;

const SingerPostImg = styled.img`
  width: 100vw;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  // bottom: 20rem;
`;

const SearchBarBox = styled.div`
  display: flex;
  position: relative;
  margin-top: 5rem;
  margin-bottom: 5rem;
  background-color: white;
  width: 100vw;
  height: 17rem;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 80rem;
  height: 8rem;
  border-radius: 1.5rem;
  border: 1px solid #008bff;
  // margin-left: 15rem;
  position: relative;
  display: flex;
  background-color: #eeeeee;
  align-items: center;
  justify-contents: center;
  box-shadow: 0px 4px 4px #00000040;
`;

const SingLIstBottom = styled.div`
  height: 150rem;
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListNavbar = styled.div`
  width: 80vw;
  height: 6rem;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  background-color: black;
  box-shadow: 5px;
  border: 0.5rem solid #00ffa8;
  // padding-left: 10rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* 음영 효과를 주는 box-shadow 설정 */
`;

const MusicCategory01 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트 밑으로 확장되지 않도록 오버플로우 제어 */

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    text-decoration: none; /* 밑줄 제거 */
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%; /* 초기에는 화면의 절반만큼의 너비를 가짐 */
    height: 2px; /* 밑줄 높이 */
    bottom: 0;
    background-color: #61e6ca; /* 밑줄 색상 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }

  &:hover:before,
  &:hover:after {
    width: 100%; /* 호버 시 전체 너비로 확장 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }
`;

const MusicCategory02 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트 밑으로 확장되지 않도록 오버플로우 제어 */

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    text-decoration: none; /* 밑줄 제거 */
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%; /* 초기에는 화면의 절반만큼의 너비를 가짐 */
    height: 2px; /* 밑줄 높이 */
    bottom: 0;
    background-color: #61e6ca; /* 밑줄 색상 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }

  &:hover:before,
  &:hover:after {
    width: 100%; /* 호버 시 전체 너비로 확장 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }
`;

const MusicCategory03 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트 밑으로 확장되지 않도록 오버플로우 제어 */

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    text-decoration: none; /* 밑줄 제거 */
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%; /* 초기에는 화면의 절반만큼의 너비를 가짐 */
    height: 2px; /* 밑줄 높이 */
    bottom: 0;
    background-color: #61e6ca; /* 밑줄 색상 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }

  &:hover:before,
  &:hover:after {
    width: 100%; /* 호버 시 전체 너비로 확장 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }
`;

const MusicCategory04 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트 밑으로 확장되지 않도록 오버플로우 제어 */

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    text-decoration: none; /* 밑줄 제거 */
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%; /* 초기에는 화면의 절반만큼의 너비를 가짐 */
    height: 2px; /* 밑줄 높이 */
    bottom: 0;
    background-color: #61e6ca; /* 밑줄 색상 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }

  &:hover:before,
  &:hover:after {
    width: 100%; /* 호버 시 전체 너비로 확장 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }
`;

const MusicCategory05 = styled.div`
  width: 11rem;
  height: 5.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  background-color: black;
  color: #aa9797;
  font-size: 1.8rem;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 텍스트 밑으로 확장되지 않도록 오버플로우 제어 */

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    text-decoration: none; /* 밑줄 제거 */
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%; /* 초기에는 화면의 절반만큼의 너비를 가짐 */
    height: 2px; /* 밑줄 높이 */
    bottom: 0;
    background-color: #61e6ca; /* 밑줄 색상 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }

  &:hover:before,
  &:hover:after {
    width: 100%; /* 호버 시 전체 너비로 확장 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }
`;

const ListContainer = styled.div`
  width: 80vw;
  height: 107rem;
  display: flex;
  position: relative;
  flex-direction: column;
  // border: 1px solid green;
  background-color: #171717;
`;

const ListBox = styled.div`
  width: 80vw;
  height: 10rem;
  margin-bottom: 1rem;
  // padding-left: 3rem;
  background-color: #171717;
   border: 0.2px solid white;
  display: flex;
  position: relative:
   flex-direction: row;
   align-items: center;
   justify-content: center;
   border-radius: 1rem;
   gap: 4rem;
`;

const MusicThumnail = styled.img`
  width: 4rem;
  height: 4rem;
  // border: 1px solid white;
  border-radius: 8rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  /* 호버 효과 스타일 */
  &:hover {
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    box-shadow: 0px 4px 8px white;
    transform: scale(1.1);
  }
`;

const MusicDet = styled.div`
  width: 15rem;
  height: 8.4rem;
  // border: 1px solid white;
  display: flex;
  position: relative;
  flex-direction: column;
`;

const SongName = styled.div`
  width: 15rem;
  height: 4.2rem;
  // border: 1px solid white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.4rem;
  overflow: hidden; /* 텍스트 밑으로 확장되지 않도록 오버플로우 제어 */

  /* 호버 효과 스타일 */
  &:hover {
    color: white; /* 호버 시 텍스트 색상 변경 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
    text-decoration: none; /* 밑줄 제거 */
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%; /* 초기에는 화면의 절반만큼의 너비를 가짐 */
    height: 10px; /* 밑줄 높이 */
    bottom: 0;
    background-color: #61e6ca; /* 밑줄 색상 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }

  &:hover:before,
  &:hover:after {
    width: 100%; /* 호버 시 전체 너비로 확장 */
    transition: width 0.3s ease; /* 변화 시 애니메이션 */
  }
`;

const SingerName = styled.div`
  width: 15rem;
  height: 4.2rem;
  // border: 1px solid white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #aaaaaa;
  font-size: 1.2rem;
`;

const MusicPlaySet = styled.div`
  width: 41rem;
  height: 6rem;
  display: flex;
  position: relative;
  // border: 1px solid white;
  color: white;
`;

const MusicTag = styled.div`
  width: 17rem;
  height: 4rem;
  // border: 1px solid white;
  color: white;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.3rem;
`;

const PublishDay = styled.div`
  width: 5rem;
  height: 4rem;
  border: 1px solid black;
  color: #00ffa8;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 1.3rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${(props) => (props.clicked ? "#00ffa8" : "black")};
  color: ${(props) => (props.clicked ? "black" : "white")};
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* 음영 효과 추가 */
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out; /* 음영 효과의 변화를 자연스럽게 설정 */

  /* 호버 효과 스타일 */
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* 호버 시 음영 효과 변경 */
  }
`;

const MusicList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postImages = [
    {
      id: 1,
      src: postimg01,
      alt: "홍보사진01",
    },
    {
      id: 2,
      src: postimg02,
      alt: "홍보사진02",
    },
    {
      id: 3,
      src: postimg03,
      alt: "홍보사진03",
    },
    {
      id: 4,
      src: postimg04,
      alt: "홍보사진04",
    },
    {
      id: 5,
      src: postimg05,
      alt: "홍보사진05",
    },
  ];
  //홍보사진 배열.

  //음악 파일 배열.
  const musicFiles = [
    require("../../conponent/MusicList/testmusic01.mp3"),
    require("../../conponent/MusicList/testmusic02.mp3"),
    require("../../conponent/MusicList/testmusic03.mp3"),
    require("../../conponent/MusicList/testmusic04.mp3"),
    require("../../conponent/MusicList/testmusic05.mp3"),
    require("../../conponent/MusicList/testmusic06.mp3"),
    require("../../conponent/MusicList/testmusic07.mp3"),
    require("../../conponent/MusicList/testmusic08.mp3"),
    require("../../conponent/MusicList/testmusic09.mp3"),
    require("../../conponent/MusicList/testmusic10.mp3"),
    require("../../conponent/MusicList/testmusic.mp3"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === postImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500); // 2초마다 슬라이드 변경 (원하는 시간으로 조정 가능)

    return () => clearInterval(interval);
  }, [postImages.length]);

  // 여기까지가 홍보사진 슬라이드

  //여기서부터 리스트 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;
  const totalItems = 110;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getItemsForPage = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const items = [];

    for (let i = startIndex; i < endIndex; i++) {
      items.push(
        <ListBox key={i}>
          <Link to="/music-info-page">
            <MusicThumnail alt="앨범썸네일" src={albumthuming}></MusicThumnail>
          </Link>
          <MusicDet>
            <SongName>노래제목</SongName>
            <SingerName>by 가수이름</SingerName>
          </MusicDet>
          <MusicPlaySet>
            <Waveform music={musicFiles[i % musicFiles.length]} />
          </MusicPlaySet>
          <MusicTag>#나른한 #뉴에이지 #피아노</MusicTag>
          <PublishDay>발매일: 23.11.13</PublishDay>
        </ListBox>
      );
    }

    return items;
  };

  const currentItems = getItemsForPage(currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationButton
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
          clicked={currentPage === i} // 클릭된 버튼의 스타일을 변경하기 위한 속성
        >
          {i}
        </PaginationButton>
      );
    }
    return pageNumbers;
  };

  return (
    <SingList>
      <SingerPost>
        <div
          style={{ width: "100%", overflow: "hidden", position: "relative" }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {postImages.map((postImg, index) => (
              <div
                key={postImg.id}
                style={{
                  flex: "0 0 auto",
                  maxWidth: "100%",
                }}
              >
                <SingerPostImg alt={postImg.alt} src={postImg.src} />
              </div>
            ))}
          </div>
        </div>
      </SingerPost>

      <SearchBarBox>
        <SearchBar>
          <SearchBox></SearchBox>
        </SearchBar>
      </SearchBarBox>

      <SingLIstBottom>
        <ListNavbar>
          <MusicCategory01>음악종류</MusicCategory01>
          <MusicCategory02>음악종류</MusicCategory02>
          <MusicCategory03>음악종류</MusicCategory03>
          <MusicCategory04>음악종류</MusicCategory04>
          <MusicCategory05>음악종류</MusicCategory05>
        </ListNavbar>

        <ListContainer>{currentItems}</ListContainer>

        <PaginationContainer>{renderPagination()}</PaginationContainer>
      </SingLIstBottom>
    </SingList>
  );
};

export default MusicList;
