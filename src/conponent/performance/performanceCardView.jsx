import React from "react";
import styled from "styled-components";

const CardView = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 40rem;
  height: 68rem;
  padding: 1.5rem;
  border-radius: 3rem;
  background-color: white;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.15);
  line-height: 1.1;
`;

const Poster = styled.img`
  width: 36.57rem;
  height: 48.3rem;
  object-fit: cover;
  border-radius: 2rem;
`;

const Title = styled.h3`
  margin: 1.5rem 0;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 40rem; /* adjust this value to your liking */
`;

const Venue = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 200;
  color: black;
`;

const Performer = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--maindarkgreen);
`;

const PerformanceDate = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--mainolive);
`;


const PerformanceCardView = ({
  image,
  title,
  venue,
  performer,
  date,
}) => {
  
  return (
    <CardView>
      <Poster src={image} alt={`${title} 포스터`} />
      <Title>{title}</Title>
      <Venue>{venue}</Venue>
      <Performer>{performer}</Performer>
      <PerformanceDate>개봉일 : {date}</PerformanceDate>
    </CardView>
  );
};


export default PerformanceCardView;
