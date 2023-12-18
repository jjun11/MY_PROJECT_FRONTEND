import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

const KAKAO = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  .close {
    display: none;
  }

  .open {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);

    .kakao {
      width: 30vw;
      height: 40vh;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      overflow: hidden;

      .header {
        position: relative;
        width: 100%;
        height: 20%;
        background: linear-gradient(97.89deg, #008bff 3.66%, #61e6ca 97.99%);
        color: white;
        font-size: 3rem;
        text-align: center;

        .close-button {
          border: none;
          border-radius: 5px;
          position: absolute;
          right: 5%;
          top: 10%;
        }
      }

      .body {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;

        .body-section {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }

      .footer {
        width: 100%;
        height: 20%;
        background: linear-gradient(97.89deg, #008bff 3.66%, #61e6ca 97.99%);
      }
    }
  }
`;

const PostContainer = styled.div`
  position: absolute;
  width: 40%;
`;

const Post = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid red;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  width: 50%;
  height: 20%;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  width: 20%;
  height: 20%;
  cursor: pointer;
`;

// 카카오 주소 찾기
const KakaoAddr = (props) => {
  const [isTrue, setIsTrue] = useState(false);
  // 카카오 props
  const { kakao, close, onAddress, onDetailAddress } = props;

  // 주소 입력
  const [address, setAddress] = useState("");
  // 상세 주소 입력
  const [detailAddress, setDetailAddress] = useState("");
  const onChangeDetailAddress = (e) => {
    setDetailAddress(e.target.value);
  };

  // 주소 입력
  const handleComplete = (data) => {
    // 선택한 주소 정보 처리
    console.log(data);
    // R타입이 true
    if (data.addressType === "R") {
      setAddress(data.address);
    } else {
      alert("주소를 다시 입력하시오.");
    }
  };

  //
  useEffect(() => {
    //
    onAddress(address);
    onDetailAddress(detailAddress);
  }, [address, detailAddress, onAddress, onDetailAddress]);

  // 상세 주소 저장
  const saveAddr = () => {
    if (address !== null && detailAddress !== null) {
      alert("주소가 저장되었습니다.");
    } else {
      if (address === null) {
        alert("주소를 입력하시오");
      } else {
        alert("상세 주소를 입력하시오");
      }
    }
  };
  return (
    <KAKAO>
      <div className={kakao ? "open" : "close"}>
        <div className="kakao">
          <div className="header">
            주소를 입력하세요
            <button className="close-button" onClick={close}>
              &times;
            </button>
          </div>
          <div className="body">
            <div className="body-section">
              <Input
                type="text"
                onClick={() => setIsTrue(true)}
                placeholder="주소를 입력합니다."
                value={address}
              />
              {isTrue && (
                <PostContainer>
                  <DaumPostcode onComplete={handleComplete} />
                </PostContainer>
              )}

              <Button onClick={() => setIsTrue(true)}>주소 찾기</Button>
            </div>
            <div className="body-section">
              <Input
                placeholder="상세 주소를 입력합니다."
                onChange={onChangeDetailAddress}
              />
              <Button onClick={saveAddr}>주소 저장</Button>
            </div>
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </KAKAO>
  );
};

export default KakaoAddr;
