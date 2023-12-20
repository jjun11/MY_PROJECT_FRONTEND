// import { useEffect } from "react";
import UseAuth from "../hooks/UseAuth";

const Test = () => {
  // 로그인 체크 커스텀 훅
  const res = UseAuth();
  console.log("커스텀 훅 값 : ", res);
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Test;
