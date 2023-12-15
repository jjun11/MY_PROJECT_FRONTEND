import React from "react";
import styled from "styled-components";
import headlogo from "../images/Symbol_white.png";

const NavContainer = styled.div`
  width: 100%;
  background-color: black;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .rightzone {
    margin-left: 4%;
    width: 35%;
    display: flex;
    justify-content: space-between;
  }

  .leftzone{
    display: flex;
    width: 35%;
    justify-content: flex-end;
    .leftinleft{
      display: flex;
      justify-content: space-between;
      width: 40%;
      margin-right: 10%;
    }
  }
`;

const HeadLogo = styled.div`
  width: 30%;
  height: 5rem;
  background-image: url(${headlogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

`;

const TextBox = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 300;
`;

const Header = () => {
  return (
    <NavContainer>
      <div className="rightzone">
          <TextBox>공연</TextBox>
          <TextBox>STORE</TextBox>
          <TextBox>음원</TextBox>
          <TextBox>커뮤니티</TextBox>
        </div>
      <HeadLogo />
        <div className="leftzone">
          <div className="leftinleft">
            <TextBox>로그인</TextBox>
            <TextBox>회원가입</TextBox>
          </div>
        </div>
    </NavContainer>
  );
};

export default Header;
