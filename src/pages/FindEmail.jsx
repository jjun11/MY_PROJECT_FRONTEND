import { BACKGROUND, Container } from "../component/login/LoginComponent";
import {
  Contents,
  Content,
  INPUT,
  BUTTON,
} from "../component/find/FindComponent";
import { useState } from "react";
import SignUpAxios from "../axios/SignUpAxios";

const FindEmail = () => {
  const [isTrue, setIsTrue] = useState(true);
  // 전화 번호 인증
  const [tel, setTel] = useState("");
  const onChangeTel = (e) => {
    const numericInput = /[^0-9]/;
    const phone = e.target.value;
    if (phone === numericInput) setTel(phone);
  };

  const onClickSms = async () => {
    const res = await SignUpAxios.memberTel(tel);
    console.log("이메일 찾기 인증 번호", res);
  };

  // 인증 번호 입력
  const [auth, setAuth] = useState("");
  const onChangeAuth = (e) => {
    setAuth(e.target.value);
  };
  const onClickAuth = async () => {
    const res = await SignUpAxios.memberTelAuth(auth);
    if (res.data === true) {
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
  };

  return (
    <>
      <Container>
        <BACKGROUND>
          <Contents>
            <h1 style={{ marginLeft: "10%", color: "white" }}>
              이메일을 찾습니다.
            </h1>
            <Content>
              <INPUT
                onChange={onChangeTel}
                placeholder="인증 받을 전화번호를 입력하세요"
              ></INPUT>
              <BUTTON onClick={onClickSms}>문자 전송</BUTTON>
            </Content>
            <Content>
              <INPUT
                onChange={onChangeAuth}
                placeholder="인증 번호 입력"
              ></INPUT>
              <BUTTON onClick={onClickAuth}>인증 번호</BUTTON>
            </Content>
            <Content>
              <INPUT readOnly={{ isTrue }} placeholder="닉네임 입력"></INPUT>
              <BUTTON>닉네임</BUTTON>
              {}
            </Content>
          </Contents>
        </BACKGROUND>
      </Container>
    </>
  );
};

export default FindEmail;
