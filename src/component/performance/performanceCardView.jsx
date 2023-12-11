import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardView = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  width: 40.6rem;
  height: 68rem;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 3rem;
  background-color: white;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.15);
  line-height: 1.1;
  margin-bottom: 2rem;
`;

const Poster = styled.img`
  width: 36.5rem;
  height: 48.3rem;
  align-self: center;
  object-fit: cover;
  border-radius: 2rem;
`;

const Title = styled.h3`
  margin: 1.5rem 0 1rem 0;
  font-size: 2.2rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 40rem; /* adjust this value to your liking */
`;

const Venue = styled.div`
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: 200;
  color: black;
`;

const Performer = styled.div`
  margin-bottom: 0.5rem;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end !important;
  width: 100%;
  gap: 1rem; /* 버튼 사이의 간격 */
`

const Button = styled.button`
  background-color: var(--mainblue);
  color: white;
  width: 10.8rem;
  height: 3.9rem;
  border-radius: 2rem;
  border: none;
  font-size: 1.6rem;
`

const PerformanceCardView = ({
  id,
  image,
  title,
  venue,
  performer,
  date,
}) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    console.log(id);
    navigate(`/performanceDetail/${id}`);
  };

  const handleBookingClick = () => {
    navigate(`/booking/${id}`);
  };
  
  return (
    <CardView>
      <Poster src={image} alt={`${title} 포스터`} />
      <Title>{title}</Title>
      <Venue>{venue}</Venue>
      <Performer>{performer}</Performer>
      <PerformanceDate>{date}</PerformanceDate>
      <ButtonContainer>
        <Button onClick={handleDetailClick}>자세히</Button>
        <Button onClick={handleBookingClick}>예매하기</Button>
      </ButtonContainer>
    </CardView>
  );
};


export default PerformanceCardView;
