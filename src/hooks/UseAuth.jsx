import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpAxios from "../axios/SignUpAxios";

// 로그인 체크 커스텀 훅
const UseAuth = () => {
  const navigator = useNavigate(); // React Router의 useHistory 훅을 사용하여 브라우저 히스토리를 조작합니다.

  useEffect(() => {
    // 로그인 상태를 체크
    const checkLoginStatus = async () => {
      try {
        // 로그인 체크
        const res = await SignUpAxios.isLogin();
        console.log("로그인 상태 체크 :", res.data);

        // 만약 로그인 상태가 아니면
        if (!res.data) {
          alert("로그인 상태가 아닙니다. 로그인 페이지로 이동합니다.");
          navigator("/login"); // 로그인 페이지로 리다이렉트합니다. 실제 로그인 페이지 경로로 교체하세요.
        }
      } catch (e) {
        alert("서버의 연결이 불안정합니다.", e);
        navigator("/");
      }
    };

    checkLoginStatus();
  }, [navigator]);
};

export default UseAuth;
