import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  UserInfo,
  UpdateZone,
  InputBox,
  Button,
} from "../../style/music/MusicUpdateStyle";
import UpdateBox from "../../component/MusicList/UpdateBox";
import UpdateUserInfo from "../../component/MusicList/UpdateUserInfo";

const MusicRegistPage = () => {
  // 입력값 정보 저장
  const [performer, setPerformer] = useState([]); // 참여자
  const [venue, setVenue] = useState(""); // 공연장소
  const [detailVenue, setDetailVenue] = useState(""); // 상세공연장소
  const [date, setDate] = useState(""); // 공연일시
  const [title, setTitle] = useState(""); // 공연제목
  const [poster, setPoster] = useState(""); // 포스터
  const [seat, setSeat] = useState(""); // 좌석수
  const [description, setDescription] = useState(""); // 공연소개

  // 유효성 검사, 포스터이미지, 설명은 없어도 되는 값이므로 제외
  const [isperformer, setIsPerformer] = useState(false); // 참여자 입력유무
  const [isvenue, setIsVenue] = useState(false); // 공연장소 입력유무
  const [isdetailVenue, setIsDetailVenue] = useState(false); // 상세공연장소 입력유무
  const [isdate, setIsDate] = useState(false); // 공연일시 입력유무
  const [istitle, setIsTitle] = useState(false); // 공연제목 입력유무
  const [isseat, setIsSeat] = useState(false); // 좌석수 입력유무

  // const navigate = useNavigate();

  // const email = window.localStorage.getItem("email");
  // console.log(email);

  // useEffect(() => {
  //   if (!email) {
  //     alert("로그인이 필요합니다.");
  //     navigate("/login");
  //   }
  // }, []);

  // 입력값을 서버로 전송할 부분

  return (
    <>
      <Container>
        <UpdateUserInfo />
        <UpdateBox />
      </Container>
    </>
  );
};

export default MusicRegistPage;
