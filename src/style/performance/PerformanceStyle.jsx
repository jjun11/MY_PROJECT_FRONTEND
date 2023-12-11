import styled from "styled-components";
import backgroundImage from "../../images/Band.jpg";

export const Container = styled.div`
  width: 100vw;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // 또는 필요한 높이
  .title {
      width: 100vw;
      height: 7rem;
      background: linear-gradient(to right, var(--maingreen), var(--mainblue));
      color: white;
      font-size: 4rem;
      font-weight: 600;
      text-align: center;
  }
`;
export const Box = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: flex-start; 
    padding: 0 3rem;

    div {
      margin-top: 9rem;
      margin-bottom: 2rem;
      color: white;
      font-size: 5rem;
      font-weight: 600;
    }
`;

export const SearchBanner = styled.div`
    width: 100vw;
    height: 34rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    * {
      margin-left: 4.5rem;
    }

    

    input {
      width: 75.6rem;
      height: 6rem;
      border-radius: 5rem;
      font-size: 2.4rem;
      padding-left: 2rem;
      box-sizing: border-box;
    }

    button {
      width: 12.7rem;
      min-width: 12.7rem;
      height: 5.8rem;
      border-radius: 4rem;
      background-color: rgba(255, 255, 255, 0.3);
      border: 0.25rem solid white;
      color: white;
      font-size: 2.4rem;
      font-weight: 600;
      margin: 1rem;
    }
`;

export const Map = styled.div`
width: 100vw;
height: 50rem;
margin: 3rem;
display: flex;
justify-content: center;
align-items: center;
`;


   