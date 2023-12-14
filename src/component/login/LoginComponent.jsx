import styled from "styled-components";
import Login_bg from "../../images/Login_Bg.png";
import Signup from "../../images/Signup.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BACKGROUND = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${Login_bg});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSginup = styled.div`
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & .login {
    width: 55%;
    height: 98%;
    margin: 5px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.65);
    /* min-width: 200px; */
    display: flex;
    flex-direction: column;

    & .inline {
      width: 80%;
      height: 100%;
      margin: 0 auto;
    }
  }

  & .signup {
    width: 40%;
    height: 98%;
    margin: 5px;
    /* min-width: 200px; */
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    align-items: center;

    & .inline {
      height: 100%;
      width: 60%;
    }
  }
`;

export const LoginTitle = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 3rem;
  font-weight: 900;
  margin-top: 10%;
  margin-bottom: 10%;
  opacity: 1;
`;

export const SignUpTitle = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 3rem;
  font-weight: 900;
  margin-top: 16%;
  margin-bottom: 10%;
  opacity: 1;
  color: white;
`;

export const InputEmail = styled.input`
  outline: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 200;
  width: 100%;
  height: 5%;
  font-size: 1rem;
  color: grey;
  margin-bottom: ${(props) => (props.emailmsg ? "0" : "10%")};
`;

export const InputPassword = styled.input`
  outline: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 200;
  width: 100%;
  height: 5%;
  font-size: 1rem;
  color: grey;
  margin-bottom: ${(props) => (props.passwordmsg ? "0" : "10%")};
`;

export const Bottom = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  & .login-button {
    width: 30%;
    height: 100%;
    background-color: none;
    outline: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  color: white;
  border-radius: 10px;
  background-color: #006eff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;

export const P = styled.p`
  line-height: none;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || "#007e5e;"};
  cursor: ${"isCursur" ? "pointer" : "none"};
`;

// 회원가입 버튼.
export const SignUpButton = styled.div`
  border: 2px solid green;
  border-radius: 10px;
  color: white;
  margin-top: 180px;
  width: 100%;
  height: 10%;
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */

  & .signup-img {
    width: 30%;
    background-image: url(${Signup});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }
`;

export const CheckInput = styled.div`
  &.false {
    color: red;
  }

  &.true {
    color: white;
  }
`;
