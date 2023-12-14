import React, { useState } from "react";
import styled from "styled-components";

const STYLE = styled.div`
  position: relative;
  & .close {
    display: none;
  }

  & .container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    /* right: 100%; */
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    & .main {
      border-radius: 20px;
      width: 30vw;
      height: 30vh;
      overflow: hidden;

      & .header {
        width: 100%;
        height: 20%;
        background: linear-gradient(97.89deg, #008bff 3.66%, #61e6ca 97.99%);
        display: flex;

        flex-direction: row;
        position: relative;
        color: white;
      }

      & .body {
        width: 100%;
        height: 60%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        & .body-input {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      }

      & .footer {
        width: 100%;
        height: 20%;
        background: linear-gradient(97.89deg, #008bff 3.66%, #61e6ca 97.99%);
      }
    }
  }
`;

const Button = styled.button`
  position: absolute;
  border: none;
  border-radius: 5px;
  right: 10px;
  top: 10px;
`;

const P = styled.p`
  font-size: 1.5rem;
  position: absolute;
  margin: 0;
  padding: 0;
  margin-top: 2%;
  margin-left: 5%;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  width: 60%;
  height: 40%;
`;

const SendButton = styled.button`
  border: none;
  border-radius: 10px;
  height: 40%;
  margin-left: 3%;
  cursor: pointer;
`;

// SMS를 보내는 기능을 담당하는 함수형 컴포넌트
const SmsApi = (props) => {
  // 속성
  const { open, close, tel, send, cn, cnum, onChangeCnum } = props;

  return (
    <STYLE>
      <div className={open ? "container" : "close"}>
        <div className="main">
          <div className="header">
            <P>휴대전화 인증을 위해 전화번호를 입력하시오.</P>
            <Button onClick={close}>&times;</Button>
          </div>
          <div className="body">
            {/* 수신자 전화번호 입력란 */}
            <div className="body-input">
              <Input type="text" value={tel} />
              {/* SMS 전송 버튼 */}
              <SendButton onClick={send}>인증번호</SendButton>
            </div>
            <div className="body-input">
              {/* SMS 내용 입력란 */}
              <Input
                type="text"
                value={cnum}
                onChange={onChangeCnum}
                placeholder="인증번호 입력"
              />
              <SendButton onClick={cn}>인증확인</SendButton>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </STYLE>
  );
};

export default SmsApi;
