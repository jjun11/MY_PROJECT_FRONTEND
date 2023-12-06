import React from "react";
import styled from "styled-components";
import footerlogo from "../images/footerlogo.png";

const FooterBox = styled.div`
  /* 공통 스타일 정의 */
  height: 60rem;
  width: 100vw;
  display: flex;
  position: relative;
  flex-direction: row;
`;

const ContentGroup = styled.div`
  /* OverlapGroup 스타일 정의 */
  background: linear-gradient(
    180deg,
    rgb(0, 139.09, 255) 0%,
    rgb(97, 230, 202) 100%
  );
  height: 60rem;
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-contents: center;
  padding: 13rem;
`;

const FooterLogo = styled.img`
  width: 39rem;
  height: 20.2rem;
  display: flex;
  position: relative;
  margin-right: 10.3rem;
  top: 10rem;
`;

const Content = styled.div`
  /* Content 스타일 정의 */
  color: #ffffff;
  font-family: "Noto Sans KR-Medium", Helvetica;
  font-size: 1.8rem;
  font-weight: 400;
  position: relative;
  text-align: center;
  width: 27rem;
  height: 38rem;
  top: 14.7rem;
`;

const Span = styled.span`
  /* Span 스타일 정의 */
  font-family: "Noto Sans KR-Black", Helvetica;
  font-size: 1.5rem;
  font-weight: 900;
`;

const TextWrapper = styled.span`
  /* TextWrapper 스타일 정의 */
  font-weight: 500;
`;

const TextWrapper2 = styled.span`
  /* TextWrapper2 스타일 정의 */
  font-family: "Noto Sans KR-Light", Helvetica;
  font-size: 1.5rem;
  font-weight: 300;
`;

const Content02 = styled.p`
  /* Content 스타일 정의 */
  color: #ffffff;
  font-family: "Noto Sans KR-Medium", Helvetica;
  font-size: 1.8rem;
  font-weight: 400;
  position: relative;
  text-align: center;
  width: 27rem;
  height: 38rem;
  top: 14.7rem;
`;

const Content03 = styled.p`
  /* Content 스타일 정의 */
  color: #ffffff;
  font-family: "Noto Sans KR-Medium", Helvetica;
  font-size: 1.8rem;
  font-weight: 400;
  position: relative;
  text-align: center;
  width: 27rem;
  height: 38rem;
  top: 14.7rem;
`;

const Footer = () => {
  return (
    <FooterBox>
      <ContentGroup>
        <FooterLogo alt="풋터로고" src={footerlogo}></FooterLogo>

        <Content className="CONTENT-CONTENT">
          <TextWrapper>내용</TextWrapper>
          <br />
          <Span>
            <br />
          </Span>
          <TextWrapper2>
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
          </TextWrapper2>
        </Content>

        <Content02 className="CONTENT-CONTENT">
          <TextWrapper>내용</TextWrapper>
          <br />
          <Span>
            <br />
          </Span>
          <TextWrapper2>
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
          </TextWrapper2>
        </Content02>

        <Content03 className="CONTENT-CONTENT">
          <TextWrapper>내용</TextWrapper>
          <br />
          <Span>
            <br />
          </Span>
          <TextWrapper2>
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
            <br />
            CONTENT 01
            <br />
          </TextWrapper2>
        </Content03>
      </ContentGroup>
    </FooterBox>
  );
};

export default Footer;
