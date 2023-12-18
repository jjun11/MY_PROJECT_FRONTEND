// import { useEffect } from "react";
import UseAuth from "../hooks/UseAuth";

const Test = () => {
  // 로그인 체크 커스텀 훅
  UseAuth();

  return (
    <>
      <p>test</p>
    </>
  );
};

export default Test;
