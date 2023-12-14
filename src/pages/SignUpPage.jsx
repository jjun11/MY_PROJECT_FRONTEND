import { useState, useEffect } from "react";
import { Container, BACKGROUND } from "../component/login/LoginComponent";
import {
  SIGNUP,
  TOP,
  Main,
  Input,
  InputTitle,
  CheckButton,
  BusynessButton,
  Gender,
  BOTTOM,
  SignUpButton,
  Agree,
} from "../component/signup/SignUpComponent";
import SignUpAxios from "../axios/SignUpAxios";
import { useNavigate } from "react-router-dom";
import Modal from "../component/signup/SignUpModal";
import SmsApi from "../api/SmsApi";
import KakaoAddr from "../api/KakaoAddrApi";

const SignupPage = () => {
  const navigate = useNavigate();
  // 모달창 제어
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };

  // 인증 번호 입력창 제어
  const [sms, setSms] = useState(false);
  const closeSms = () => {
    setSms(false);
  };

  // 주소 입력창 제어
  const [kakaoModal, setKakao] = useState(false);
  const openKakao = () => {
    setKakao(true);
  };
  const closeKakao = () => {
    setKakao(false);
  };

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isAddr, setIsAddr] = useState(false);
  const [isTel, setIsTel] = useState(false);
  const [isGender, setIsGender] = useState(false);
  const [isAge, setIsAge] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  // 이메일
  const [inputEmail, setInputEmail] = useState("");
  const onChangeEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setInputEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      // alert("이메일 형식이 올바르지 않습니다.");
    } else {
      // alert("올바른 형식입니다.");
    }
  };

  // 인증번호 체크
  const [EPW, setEPW] = useState("");
  const onChangeEPW = (e) => {
    setEPW(e.target.value);
  };

  // 비밀번호
  const [inputPassword, setInputPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // 비밀번호 입력
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    console.log("passwordCurrent:", passwordCurrent);
    setInputPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      // alert("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주십시오.");
      setIsPw(false);
    } else {
      // alert("유효한 비밀번호입니다.");
    }
  };
  // 비밀번호 확인
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    // console.log("confirmPassword : ", confirmPassword);
  };
  // 비밀번호 및 비밀번호 확인 체크
  const checkPassword = () => {
    if (inputPassword !== "" && confirmPassword !== "") {
      if (inputPassword === confirmPassword) {
        setIsConfirm(true);
        // console.log("isConfirm : ", isConfirm);
        alert("입력 정보가 동일합니다.");
        setIsPw(true);
      } else {
        alert("입력하신 비밀번호를 재확인하십시오.");
        setIsConfirm(false);
        // console.log("isConfirm : ", isConfirm);
      }
    } else {
      alert("비밀번호를 입력하시오");
    }
  };

  // 닉네임 (임시)
  const [nickName, setNickName] = useState("");
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // 이름
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
    // console.log("name", name);
    setIsName(true);
  };

  // 주소
  const [addr, setAddr] = useState("");
  // 상세 주소
  const [addrDetail, setAddrDetail] = useState("");
  // 주소창 열기
  const onClickAddr = () => {
    setKakao(true);
    if (addr !== null) {
      setIsAddr(true);
    } else {
      console.log("주소를 입력하시오.");
    }
  };

  // 휴대전화 번호
  const [tel, setTel] = useState("");
  const onChangeTel = (e) => {
    setTel(e.target.value);
    // console.log("tel:", tel);
    setIsTel(true);
  };

  // 인증 번호
  const [cnum, setCnum] = useState("");
  const onChangeCnum = (event) => {
    setCnum(event.target.value);
  };

  // 성별 선택
  const [gender, setGender] = useState("");
  const onChangegender = (e) => {
    const genderType = e.target.value;
    setGender(genderType);
    // console.log("genderType:", genderType);
    // console.log("e.target.value:", e.target.value);
    setIsGender(true);
  };

  // 나이
  const [age, setAge] = useState("");
  const onChangeAge = (e) => {
    setAge(e.target.value);
    // console.log("age", age);
    setIsAge(true);
  };

  // 이메일 인증
  const onClcikCheckEmail = async () => {
    try {
      const res = await SignUpAxios.memberEmail(inputEmail);
      if (res.data === true) {
        // 입력 모달 등장
        setModal(true);
      }
    } catch (error) {
      alert("이메일을 확인 하십시오!");
      console.log("이메일 입력:", error);
    }
  };

  // 입력받은 인증번호 체크
  const checkEPW = async () => {
    try {
      const res = await SignUpAxios.memberEpw(EPW);
      if (res.data === true) {
        setIsId(true);
        alert("인증 성공");
      } else {
        setIsId(false);
        alert("인증 실패");
      }
    } catch (error) {
      alert("연결 실패");
    }
  };

  // 닉네임 중복 체크
  const onClickCheckNickName = async () => {
    try {
      const checkNickName = await SignUpAxios.memberNickname(nickName);
      // 중복이 없어야 true 설정. false를 받아야 중복이 없는것.
      console.log(checkNickName.data);
      if (checkNickName.data === true) {
        alert("이미 존재하는 닉네임입니다.");
        setIsNickName(false);
      } else {
        alert("유효한 닉네임입니다.");
        setIsNickName(true);
      }
    } catch (error) {
      alert("닉네임 입력 정보를 확인하십시오.", error);
    }
  };

  // 휴대폰 번호 인증하기
  const onClickCheckTel = () => {
    setSms(true);
  };

  // SMS를 보내는 함수
  const handleSendMessage = async () => {
    try {
      const res = await SignUpAxios.memberTel(tel);
      console.log("휴대전화 번호", tel);
      console.log(res.data);
      if (res.data.statusCode === "2000") {
        alert("문자가 발송되었습니다.");
      } else {
        alert("전화 번호를 확인하십시오!!");
      }
    } catch (error) {
      // 오류 발생 시 처리
      alert("연결이 불안정합니다.");
      console.error("SMS 전송 실패:", error);
    }
  };

  // 인증 번호를 보내는 함수
  const handleSendCnum = async () => {
    try {
      const res = await SignUpAxios.memberTelAuth(cnum);
      if (res.data === true) {
        alert("인증 성공");
        setIsTel(true);
      } else {
        alert("인증 실패");
        setIsTel(false);
      }
    } catch (error) {
      console.log("인증 연결 실패", error);
      setIsTel(false);
    }
  };

  // 회원 가입
  const onClickSignUp = async () => {
    try {
      if (
        inputEmail !== "" &&
        inputPassword !== "" &&
        nickName !== "" &&
        name !== "" &&
        addr !== "" &&
        addrDetail !== "" &&
        tel !== "" &&
        gender !== "" &&
        age !== ""
      ) {
        const res = await SignUpAxios.signup(
          inputEmail,
          inputPassword,
          nickName,
          name,
          addr,
          addrDetail,
          tel,
          gender,
          age
        );
        console.log("회원 패스워드", inputPassword);
        console.log("회원가입 결과 : ", res);
        if (res.status === 200) {
          alert("회원가입에 성공하셨습니다.");
          //   navigate("/login");
          // 임시
          navigate("/");
        } else {
          alert("회원 가입에 실패하셨습니다.");
        }
      } else {
        if (isId === false) {
          alert("아이디를 확인하십시오.");
        } else if (isPw === false) {
          alert("비밀번호를 확인하십시오.");
        } else if (isNickName === false) {
          alert("닉네임을 확인하십시오.");
        } else if (isName === false) {
          alert("회원님의 성함을 입력하십시오.");
        } else if (isAddr === false) {
          alert("주소 정보를 입력하십시오.");
        } else if (isGender === false) {
          alert("성별 입력 정보를 확인하십시오.");
        } else if (isTel === false) {
          alert("전화번호를 확인하십시오.");
        } else if (isAge === false) {
          alert("연령을 입력하십시오.");
        } else {
          alert("정보를 확인하십시오.");
        }
      }
    } catch (error) {
      alert("서버의 연결이 불안정합니다.");
    }
  };

  return (
    <>
      <Container>
        <SmsApi
          open={sms}
          close={closeSms}
          tel={tel}
          send={handleSendMessage}
          cn={handleSendCnum}
          onChangeCnum={onChangeCnum}
        ></SmsApi>
        <BACKGROUND>
          <SIGNUP>
            <TOP>
              <p className="top-title">회원가입</p>
            </TOP>
            <Main>
              <div className="left">
                <div className="input-session">
                  <div className="input-session1">
                    <div className="input-session1-top">
                      <InputTitle>이메일(아이디)</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        onChange={onChangeEmail}
                        onBlur={onChangeEmail}
                      ></Input>
                      <CheckButton onClick={onClcikCheckEmail}>
                        인증하기
                      </CheckButton>
                      <Modal
                        header="인증번호를 입력하세요."
                        open={modal}
                        close={closeModal}
                      >
                        <input type="text" onChange={onChangeEPW} />
                        <button onClick={checkEPW}>확인 </button>
                      </Modal>
                    </div>
                  </div>

                  <div className="input-session1">
                    <div className="input-session1-top">
                      <InputTitle>비밀번호</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        type="password"
                        onChange={onChangePassword}
                        onBlur={onChangePassword}
                        onFocus={onChangePassword}
                      ></Input>
                    </div>
                  </div>
                  <div className="input-session1">
                    <div className="input-session1-top">
                      <InputTitle>비밀번호 확인</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        type="password"
                        onChange={onChangeConfirmPassword}
                        onBlur={onChangeConfirmPassword}
                        onFocus={onChangeConfirmPassword}
                      ></Input>
                      <CheckButton onClick={checkPassword}>
                        확인체크
                      </CheckButton>
                    </div>
                  </div>
                  <div className="input-session1">
                    <div className="input-session1-top">
                      <InputTitle>닉네임</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        onBlur={onChangeNickName}
                        onChange={onChangeNickName}
                      ></Input>
                      <CheckButton onClick={onClickCheckNickName}>
                        중복확인
                      </CheckButton>
                    </div>
                  </div>
                  <div className="input-session1">
                    <div className="input-session1-top">
                      <InputTitle>이름</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        onBlur={onChangeName}
                        onChange={onChangeName}
                      ></Input>
                    </div>
                  </div>
                  <div className="input-session1">
                    <div className="input-session1-top">
                      {/* 주소 제목 */}
                      <InputTitle>주소</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        // onChange={onChangeAddr}
                        // onBlur={onChangeAddr}
                        onClick={onClickAddr}
                        value={addr + " " + addrDetail}
                      ></Input>
                      <CheckButton onClick={openKakao}>주소찾기</CheckButton>

                      {/* 카카오 주소 찾기 */}
                      <KakaoAddr
                        kakao={kakaoModal}
                        close={closeKakao}
                        onAddress={setAddr}
                        onDetailAddress={setAddrDetail}
                      ></KakaoAddr>
                    </div>
                  </div>
                  <div className="input-session1">
                    <div className="input-session1-top">
                      <InputTitle>휴대폰 번호</InputTitle>
                    </div>
                    <div className="input-session1-bottom">
                      <Input
                        onChange={onChangeTel}
                        onBlur={onChangeTel}
                        onFocus={onChangeTel}
                      ></Input>
                      <CheckButton onClick={onClickCheckTel}>
                        인증하기
                      </CheckButton>
                    </div>
                  </div>

                  <div className="input-session2">
                    <div className="session-left">
                      <div className="session-left-top">성별</div>
                      <div className="session-left-bottom">
                        <span>남</span>
                        <label>
                          <Gender
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={onChangegender}
                          />
                        </label>
                        <span>여</span>
                        <label>
                          <Gender
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={onChangegender}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="session-right">
                      <div className="session-right-top">나이</div>
                      <div className="session-right-bottom">
                        <Input
                          width="80%"
                          onChange={onChangeAge}
                          onBlur={onChangeAge}
                          onFocus={onChangeAge}
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="busyness">
                  <div className="text">
                    <div className="text-title-option">
                      사업자정보입력(선택)
                    </div>
                    <div className="text-main">
                      영리목적의 음원등록, 공연등록, 반복적인 판매 서비스를
                      이용하는 경우 사업자등록 및 인증이 필요합니다.
                    </div>
                    <br />
                    <div className="text-main">
                      입력하지 않더라도 구매 서비스 및 단발성 판매 서비스는
                      이용하실 수 있습니다.
                    </div>
                    <br />
                    <div className="text-main">
                      작성하지 않더라도 회원가입 가능하며 필요시 마이페이지에서
                      인증하실 수 있습니다.
                    </div>
                  </div>
                  <div className="input-busyness-number">
                    <div className="input-busyness-number-session">
                      <p>사업자 번호</p>
                      <Input width="100%"></Input>
                      <p>상호 명</p>
                      <Input width="100%"></Input>
                    </div>
                    <div className="check-button-session">
                      <BusynessButton>확인하기</BusynessButton>
                    </div>
                  </div>
                </div>
                <div className="agreement">
                  <div className="agreement-top">약관 동의</div>
                  <div className="agreement-main">
                    <div className="agreement-main-row">
                      <span style={{ fontWeight: "900" }}>모두 동의</span>
                      <Agree type="radio"></Agree>
                    </div>
                    <div className="agreement-main-row">
                      <span>개인정보처리방침(필수)</span>
                      <Agree type="radio"></Agree>
                    </div>
                    <div className="agreement-main-row">
                      <span>이용약관(필수)</span>
                      <Agree type="radio"></Agree>
                    </div>
                  </div>
                </div>
              </div>
            </Main>
            <BOTTOM>
              <SignUpButton width="15%" height="40%" onClick={onClickSignUp}>
                가입
              </SignUpButton>
            </BOTTOM>
          </SIGNUP>
        </BACKGROUND>
      </Container>
    </>
  );
};

export default SignupPage;
