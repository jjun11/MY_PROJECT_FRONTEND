import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpAxios from "../axios/SignUpAxios";

// 로그인 체크 커스텀 훅
const UseAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigator = useNavigate(); // React Router의 useHistory 훅을 사용하여 브라우저 히스토리를 조작합니다.

  useEffect(() => {
    // 로그인 상태를 체크
    const checkLoginStatus = async () => {
      try {
        // 로그인 체크
        const res = await SignUpAxios.isLogin();
        // console.log("로그인 상태 체크 :", res.data);

        if (res.data) {
          // 로그인 상태
          setIsLoggedIn(true);
        } else {
          alert("로그인 상태가 아닙니다. 로그인 페이지로 이동합니다.");
          navigator("/login"); // 로그인 페이지
          setIsLoggedIn(false);
        }
      } catch (e) {
        alert("서버의 연결 불안정 혹은 토큰이 만료 되었습니다.", e);
        navigator("/");
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, [isLoggedIn]);

  return isLoggedIn;
};

export default UseAuth;