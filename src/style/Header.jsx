import React from "react";
import styled from "styled-components";
import headlogo from "../images/Symbol_white.png";

const NavContainer = styled.div`
  height: 8rem;
  width: 100vw;
  display: flex;
  position: relative;
  left: 0px;
  top: 0px;
  background: #000000;
`;

const Code8Head = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* border: 1px solid white; 변경점 */
  padding-left: 80px;
  align-items: center;
  flex-direction: row;
`;

const TextBox01 = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  font-weight: bold;
  color: white;
  padding-right: 130px;
  text-align: center;
  width: 50px;
`;
const Textbox02 = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  font-weight: bold;
  color: white;
  padding-right: 130px;
  text-align: center;
`;

const Textbox03 = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  font-weight: bold;
  color: white;
  padding-right: 400px;
  text-align: center;
  width: 100px;
`;

const HeadLogo = styled.img`
  width: 120px;
  height: 50px;
  display: flex;
  position: relative;
  padding-right: 600px;
`;

const Textbox04 = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  font-weight: bold;
  color: white;
  padding-right: 80px;
  text-align: center;
  width: 80px;
`;

const Textbox05 = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 100px;
  margin-right: 80px;
`;

const Header = () => {
  return (
    <NavContainer>
      <Code8Head>
        <TextBox01>공연</TextBox01>
        <Textbox02>STORE</Textbox02>
        <Textbox03>공지사항</Textbox03>
        <HeadLogo alt="헤더바로고" src={headlogo}></HeadLogo>
        <Textbox04>로그인</Textbox04>
        <Textbox05>회원가입</Textbox05>
      </Code8Head>
    </NavContainer>
  );
};

export default Header;
