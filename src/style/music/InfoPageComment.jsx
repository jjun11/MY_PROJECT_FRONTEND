import React, { useState } from "react";
import styled from "styled-components";
import commentimg from "../../images/postimg05.jpg";
import commentimg01 from "../../images/postimg03.jpg";

const CommnetZone = styled.div`
  left: 5rem;
  width: 50rem;
  border: 1px solid green;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const CommentTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  top: 3rem;
  display: flex;
  position: relative;
`;

const CommentBOx = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 110rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 2.3rem;

  color: #000000;
`;

const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48rem;
  height: 8rem;

  background: #eeeeee;
  border-radius: 1.5rem;
  gap: 1.5rem;
`;

const CommenterInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 5.5rem;
  height: 9rem;
  top: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const CommenterName = styled.div`
  position: relative;
  display: flex;
  color: black;
  font-size: 1rem;
  font-weight: light;
`;

const CommentImg = styled.img`
  position: relative;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 20rem;
  background: blue;
`;

const TextInput = styled.input`
  box-sizing: border-box;

  position: relative;
  display: flex;
  width: 30rem;
  height: 7rem;
  background: #ffffff;
  border: 0.3px solid #000000;
  border-radius: 10px;
  box-shadow: inset 1px 1px rgba(0, 0, 0, 0.7);
  /* 호버 효과 스타일 */
  &:hover {
    transform: scale(1.005);
    cursor: pointer; /* 호버 시 마우스 커서 변경 */

    /* 클릭 시 테두리 없애기 */
    &:focus {
      outline: none;
    }
  }
`;
const CommentButton = styled.div`
  position: relative;
  display: flex;
  width: 8rem;
  height: 6rem;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);

  background: #4296dc;
  border-radius: 1rem;
  transition: transform 0.3s ease;

  /* 호버 효과 스타일 */
  &:hover {
    transform: scale(1.1); /* 호버 시 크기를 1.1배로 확대 */
    cursor: pointer; /* 호버 시 마우스 커서 변경 */
  }
  /* 클릭 효과 스타일 */
  &:active {
    transform: scale(0.9); /* 클릭 시 크기를 0.9배로 축소 */
  }
`;

const Distinctline = styled.div`
  position: relative;
  display: flex;
  width: 46rem;
  height: 0px;
  top: 3.2rem;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Comments = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  top: 3.2rem;
  gap: 5rem;
  width: 46rem;
  height: 9rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const CommenterInfo01 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 5.5rem;
  height: 9rem;

  align-items: center;
  justify-content: center;
  // left: 2rem;
`;

const CommentImg01 = styled.img`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 2.3rem;
  background: blue;
`;

const CommenterName01 = styled.div`
  position: relative;
  display: flex;
  color: black;
  font-size: 1rem;
  font-weight: light;
`;

const CommentText = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 46rem;
  height: 6.7rem;

  align-items: center;
`;

const UpdateDelete = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 1.4rem;
  right: 1rem;
  top: 2rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
`;

const DeleteText = styled.div`
  position: relative;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
`;

const UpdateText = styled.div`
  position: relative;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.4rem;

  color: #000000;
`;

const InfoPageComment = () => {
  const [writeValue, setWriteValue] = useState("");

  const handleInputChange = (e) => {
    setWriteValue(e.target.value);
  };

  const hadleWrite = () => {
    console.log("댓글작성:", writeValue);
  };
  return (
    <CommnetZone>
      <CommentTitle>댓글</CommentTitle>

      <CommentBOx>
        <InputArea>
          <CommenterInfo>
            <CommentImg alt="작성자사진" src={commentimg} />
            <CommenterName>작성자</CommenterName>
          </CommenterInfo>

          <TextInput
            type="text"
            placeholder="댓글을 입력해주세요"
            value={writeValue}
            onChange={handleInputChange}
          ></TextInput>

          <CommentButton onClick={hadleWrite}>등록</CommentButton>
        </InputArea>

        <Distinctline />

        <Comments>
          <CommenterInfo01>
            <CommentImg01 alt="작성자사진01" src={commentimg01} />
            <CommenterName01>작성자</CommenterName01>
          </CommenterInfo01>

          <CommentText>노래 개좋음</CommentText>

          <UpdateDelete>
            <UpdateText>수정</UpdateText>
            <div>|</div>
            <DeleteText>삭제</DeleteText>
          </UpdateDelete>
        </Comments>
      </CommentBOx>
    </CommnetZone>
  );
};

export default InfoPageComment;
