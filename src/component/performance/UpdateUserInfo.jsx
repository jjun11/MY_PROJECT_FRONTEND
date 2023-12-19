import AxiosApi from "../../axios/PerformanceAxios";
import { UserInfo, Button } from "../../style/performance/PerformanceUpdateStyle";
import { useEffect, useState } from "react";

const UpdateUserInfo = ({ userList }) => {


  
  const userEmail = localStorage.getItem('email'); // 로컬 스토리지에서 이메일을 가져옵니다.
  const userArray = userList.filter(user => user.userEmail === userEmail); // 이메일이 일치하는 회원 정보를 찾습니다.
  const user = userArray[0] || {}; // 일치하는 회원 정보를 저장합니다.
  console.log(user); // 일치하는 회원 정보를 출력합니다.
  
  const [performerList, setPerformerList] = useState([]); // 퍼포머 정보를 저장할 상태를 선언합니다.

  useEffect(() => {
    const fetchPerformerList = async () => {
      try {
        const response = await AxiosApi.getPerformerList(); // 퍼포머 정보를 가져옵니다.
        setPerformerList(response.data); // 퍼포머 정보를 상태에 저장합니다.
        console.log("전체공연자조회결과: ", response.data);
      } catch (error) {
        console.error('Error fetching performer list', error);
      }
    };
    fetchPerformerList(); // 퍼포머 정보를 가져오는 함수를 호출합니다.
  }, []);

  const performer = performerList.filter(performer => performer.performer === user.userNickname); // 이메일이 일치하는 퍼포머 정보를 찾습니다.
  console.log("퍼포머정보: ", performer); // 일치하는 퍼포머 정보를 출력합니다.



  const point = 609428040;
  const pointComma = point.toLocaleString(); // point 값에 천단위마다 콤마를 추가

return (
  <>
    <UserInfo>
      <div className="image">
        {/* 프로필 이미지가 들어갈 부분 */}
      </div>
      <div className="leftInfo">
        <div className="authtitle">{user.authority}</div>
        <div className = "nick">{user.userNickname}</div>
        <div className ="heart">
          <div className="heartimg"/>
          <div className="count">1000</div>
        </div>
        {/* <div className="signdate">가입일 : date</div> */}
      </div>
      <div className="rightInfo">
        <div className="top">
          <div className="Cnt">공연횟수<cnt>{performer.length}</cnt></div>
          <div className="Cnt">등록한 곡 <cnt>10</cnt></div>
        </div>
        <div className="pointerZone">
          <div className="pointer"/>
        </div>
        <div className="mid">
          <div className="authGage">
            <div className="gageBar"/>
          </div>
          <div className="check">
            <div className="checker"/>
            <div className="checker"/>
            <div className="checker"/>
            <div className="checker"/>
          </div>
          <div className="auth">
            <div className="aut" style = {{transform: "translateX(-50%)"}}>일반회원</div>
            <div className="aut" style = {{transform: "translateX(-35%)"}}>아티스트</div>
            <div className="aut" style = {{transform: "translateX(-25%)"}}>뮤지션</div>
            <div className="aut" style = {{transform: "translateX(50%)"}}>스타</div>
          </div>
        </div>
      </div>
      <div className="pointZone">
        <div className="title">MY 포인트</div>
        <div className="point">{pointComma} P</div>
        <div className="buttonZone">
          <Button>충전하기</Button>
          <Button>환전하기</Button>
        </div>
      </div>
    </UserInfo>
  </>
);

};

export default UpdateUserInfo;
