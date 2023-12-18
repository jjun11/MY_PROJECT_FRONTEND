import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Img from "../../images/Artist.png";
import Img2 from "../../images/Artist_2.png";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid red;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 30vh;
  background-image: ${(props) => `url(${props.imagePath})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const NewList = () => {
  const list = [Img, Img2, Img, Img2, Img, Img2];

  return (
    <Container>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {list.map((data, index) => (
          <SwiperSlide key={index}>
            <Content imagePath={data}></Content>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default NewList;
