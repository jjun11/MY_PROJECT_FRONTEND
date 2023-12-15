import React, { useState } from 'react';
import { UpdateZone, InputBox, Button} from "../../style/performance/PerformanceUpdateStyle";

const UpdateBox = () => {
  
  // 입력값 정보 저장
  const [ performer, setPerformer ] = useState([]); // 참여자
  const [ venue, setVenue ] = useState(""); // 공연장소
  const [ detailVenue, setDetailVenue ] = useState(""); // 상세공연장소
  const [ date, setDate ] = useState(""); // 공연일시
  const [ title, setTitle ] = useState(""); // 공연제목
  const [ poster, setPoster ] = useState(""); // 포스터
  const [ seat, setSeat ] = useState(""); // 좌석수
  const [ description, setDescription ] = useState(""); // 공연소개

  // 유효성 검사, 포스터이미지, 설명은 없어도 되는 값이므로 제외
  const [ isperformer, setIsPerformer ] = useState(false); // 참여자 입력유무
  const [ isvenue, setIsVenue ] = useState(false); // 공연장소 입력유무
  const [ isdetailVenue, setIsDetailVenue ] = useState(false); // 상세공연장소 입력유무
  const [ isdate, setIsDate ] = useState(false); // 공연일시 입력유무
  const [ istitle, setIsTitle ] = useState(false); // 공연제목 입력유무
  const [ isseat, setIsSeat ] = useState(false); // 좌석수 입력유무
  
  
  
  return (
    <>
      <UpdateZone>
        <h1>공연 등록하기</h1>
        <div className="inputContainer">
          <div className="performer">
            참여자
            <InputBox />
          </div>
          <div className="venue">
            공연 주소
            <InputBox placeholder="주소 입력"/>
          </div>
          <div className="detailVenue">
            상세 주소
            <InputBox />
          </div>
          <div className="date">
            일시
            <InputBox />
          </div>
          <div className="title">
            제목
            <InputBox />
          </div>
          <div className="poster">
            포스터
            <InputBox />
          </div>
          <div className="seat">
            좌석 수
            <InputBox />
          </div>
          <div className="discrip">
            소개
            <InputBox />
          </div>
          <div className="discription">
            소개
            <InputBox />
          </div>
        </div>
        <div className="buttonContainer">
        <Button>등록하기</Button>
        </div>
      </UpdateZone>
    </>
  );
};

export default UpdateBox;