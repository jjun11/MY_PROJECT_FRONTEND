import styled from "styled-components";

export const SIGNUP = styled.div`
  width: 45vw;
  height: 90vh;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
`;

export const TOP = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;

  & .top-title {
    font-size: 2rem;
    color: white;
    font-weight: 900;
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;

  & .left {
    width: 50%;
    height: 100%;
    display: flex;

    & .input-session {
      margin-left: 10%;
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;

      & .input-session1 {
        width: 100%;
        height: 12%;

        & .input-session1-top {
          height: 30%;
        }

        & .input-session1-bottom {
          height: 70%;
        }
      }

      & .input-session2 {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;

        & .session-left {
          width: 50%;
          height: 100%;
          color: white;
          display: flex;
          flex-direction: column;

          & .session-left-top {
            width: 100%;
            height: 30%;
            font-size: 1rem;
            margin-left: 10%;
            margin-top: 10%;
          }

          & .session-left-bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            font-size: 2rem;
            font-weight: 900;
            width: 100%;
            height: 70%;
          }
        }

        & .session-right {
          width: 50%;
          height: 100%;
          color: white;

          & .session-right-top {
            width: 100%;
            height: 30%;
            font-size: 1rem;
            margin-left: 10%;
            margin-top: 10%;
          }

          & .session-right-bottom {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 20%;
          }
        }
      }
    }
  }

  & .right {
    width: 50%;
    height: 100%;

    & .busyness {
      padding: 5%;
      width: 80%;
      height: 62%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.7);

      & .text {
        width: 100%;
        height: 50%;

        & .text-title-option {
          height: 20%;
          color: #61e6ca;
          font-size: 2rem;
          font-weight: 900;
        }

        & .text-main {
          color: white;
          font-weight: 900;
        }
      }

      & .input-busyness-number {
        width: 100%;
        height: 50%;

        & .input-busyness-number-session {
          width: 70%;
          height: 75%;
          margin: 0 auto;
          color: white;
        }

        & .check-button-session {
          margin-top: 1%;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }

    & .agreement {
      width: 80%;
      height: 30%;
      display: flex;
      flex-direction: column;
      & .agreement-top {
        color: #61e6ca;
        font-size: 2rem;
        margin-top: 5%;
        margin-left: 10%;
      }

      & .agreement-main {
        margin: 0 auto;
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: white;
        font-size: 1.5rem;

        & .agreement-main-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }
`;

export const BOTTOM = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputTitle = styled.p`
  line-height: 0;
  color: white;
  font-weight: 900;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.7);
  width: ${(props) => props.width || "60%"};
  border: 1px solid #61e6ca;
  border-radius: 10px;
  color: white;
  margin-top: ${(props) => props.marginTop || "0px"};
`;

export const CheckButton = styled.button`
  width: 30%;
  height: 20px;
  margin-left: 5%;
  background-color: #61e6ca;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  color: white;
  cursor: pointer;
`;

export const BusynessButton = styled.button`
  background-color: #61e6ca;
  width: 30%;
  border: none;
  border-radius: 10px;
  font-weight: 900;
  cursor: pointer;
  margin: 0 auto;
`;

export const SignUpButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: linear-gradient(93.63deg, #61e6ca -11.12%, #008bff 82.25%);
  color: white;
  font-weight: 900;
  font-size: 2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const Gender = styled.input`
  width: 20px;
  height: 20px;
  outline: none;
  background-color: black;
`;

export const Agree = styled.input`
  width: 15px;
  height: 15px;
  outline: none;
`;
