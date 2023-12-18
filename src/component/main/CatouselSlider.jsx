import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Img from "../../images/Artist.png";
import Img2 from "../../images/Artist_2.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  /* border: 3px solid black; */
  height: 80%;
  width: 100%;
  margin-top: 3%;
`;

const Contents = styled.div`
  /* border: 3px solid gray; */
  width: 100%;
  height: 40vh;
`;

const Content = styled.div`
  /* border: 3px solid green; */
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  background-image: ${(props) => `url(${props.imagePath})`};
  /* background-color: green; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

// 좌우 이동 arrow 스타일 지정
const Custom = styled.div`
  /* border: 3px solid red; */
  background-color: red; /* 배경색 지정 */
`;

const CatouselSlider = () => {
  const usenavigate = useNavigate();

  // 해당 링크로 이동
  const onClick = () => {
    // 임시
    usenavigate("/login");
  };

  // 리스트 : 백엔드에서 가져올것.
  const list = [Img, Img2, Img, Img2, Img, Img2];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Custom />,
    prevArrow: <Custom />,
  };
  return (
    <Container>
      <Slider {...settings}>
        {list.map((data, index) => (
          <Contents key={index}>
            <Content onClick={onClick} imagePath={data}></Content>
          </Contents>
        ))}
      </Slider>
    </Container>
  );
};
export default CatouselSlider;
