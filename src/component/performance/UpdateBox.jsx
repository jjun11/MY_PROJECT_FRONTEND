import React, { useEffect, useState } from 'react';
import { UpdateZone, InputBox, Button, DescriptionInput, ImageInput, FileButton } from "../../style/performance/PerformanceUpdateStyle";
import AxiosApi from '../../axios/PerformanceAxios';
import DaumPostcode from 'react-daum-postcode';
import OutsideClickHandler from 'react-outside-click-handler';
import { storage } from '../../api/firebase';
import ModalComponent from '../../utils/ModalComponent';


const UpdateBox = ({ userList }) => {
  
  // 입력값 정보 저장
  const [ inputPerformer, setInputPerformer ] = useState([]); // 참여자
  // 닉네임 조회 정보 저장용
  const [searchResults, setSearchResults] = useState([]); // 조회된 회원 정보 저장
  const [inputValue, setInputValue] = useState(''); // 입력필드에 입력값을 저장
  const [ inputVenue, setInputVenue ] = useState(""); // 공연장소
  const [ inputDetailVenue, setInputDetailVenue ] = useState(""); // 상세공연장소
  const [ inputDate, setInputDate ] = useState(""); // 공연일시
  const [ inputPrice, setInputPrice ] = useState(""); // 공연티켓가격
  const [ inputTitle, setInputTitle ] = useState(""); // 공연제목
  // 포스터 관련
  const [file, setFile] = useState(""); // 프로필이미지 입력값
  const [url, setUrl] = useState(""); // 업로드된 이미지의 URL
  const [fileName, setFileName] = useState(''); //이미지이름
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 나타내는 상태 변수

  const [ inputSeat, setInputSeat ] = useState(""); // 좌석수
  const [ inputDescription, setInputDescription ] = useState(""); // 공연소개

  // 유효성 검사, 포스터이미지, 설명은 없어도 되는 값이므로 제외
  const [ isperformer, setIsPerformer ] = useState(false); // 참여자 입력유무
  const [ isvenue, setIsVenue ] = useState(false); // 공연장소 입력유무
  const [ isdetailVenue, setIsDetailVenue ] = useState(false); // 상세공연장소 입력유무
  const [ isdate, setIsDate ] = useState(false); // 공연일시 입력유무
  const [ istitle, setIsTitle ] = useState(false); // 공연제목 입력유무
  const [ isseat, setIsSeat ] = useState(false); // 좌석수 입력유무
  
  

  // 카카오 주소 API 관련
  const [showPostcode, setShowPostcode] = useState(false);
    
  // 아래 두 줄은 내가 post를 하기 위해 작성한 거라서, 두 줄은 상황에 맞춰 변경하면 되고 참고하지 않아도 된다.
  // const [calendarlocation, setCalendarLocation] = useState("")
  // const locations = { calendarLocation: calendarlocation }
  
  useEffect(() => {
    if (inputValue) {
      const filtered = (userList || []).filter(user => 
        user.userNickname.includes(inputValue)
      );
      setSearchResults(filtered);
    }
  }, [inputValue, userList]);

  // 조회된 닉네임을 클릭하면 inputPerformer 배열에 추가
  const handleSelect = (nickname) => {
    setInputPerformer([...inputPerformer, nickname]);
  };

  // // 참여자 입력값이 변경될 때마다 회원 정보 조회
  // useEffect(() => {
  //   if (inputPerformer) {
  //     const filtered = (userList || []).filter(nickname => 
  //       nickname.userNickname.includes(inputPerformer)
  //     );
  //     console.log(filtered);
  //     setSearchResults(filtered);
  //   }
  // }, [inputPerformer, userList]);
     

  // // 조회된 닉네임을 클릭하면 inputPerformer 배열에 추가
  // const addPerformer = (nickname) => {
  //   if (!inputPerformer.includes(nickname)) {
  //     setInputPerformer([...inputPerformer, nickname]);
  //   }
  // };

  // 주소검색 API 관련
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    setInputVenue(fullAddress);
    setShowPostcode(false);
  }
  
  // 포스터 이미지 업로드 관련
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log("파일선택 완료, 이미지명: " + e.target.files[0].name);    
  };

  // const handleUploadClick = () => {
  //   setIsLoading(true); // 파일 업로드가 시작될 때 로딩 상태를 true로 설정
  //   const storageRef = storage.ref();
  //   const fileRef = storageRef.child(file.name);
  //   fileRef.put(file).then(() => {
  //     console.log("File uploaded successfully!");
  //     fileRef.getDownloadURL().then((url) => {
  //       console.log("저장경로 확인 : " + url);
  //       setUrl(url);
  //       setIsLoading(false); // 파일 업로드가 끝났을 때 로딩 상태를 false로 설정
  //     });
  //   });
  // };

  
   // 공연 등록버튼 클릭 시 실행되는 함수
  const onClickSetPerformance = async () => {
    const formattedDate = inputDate.replace('T', ' ');

    setIsLoading(true); // 파일 업로드가 시작될 때 로딩 상태를 true로 설정
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully!");
      fileRef.getDownloadURL().then((url) => {
        console.log("저장경로 확인 : " + url);
        setUrl(url);
        setIsLoading(false); // 파일 업로드가 끝났을 때 로딩 상태를 false로 설정
      });
    });

    const performanceData = await AxiosApi.setPerformance( // 공연정보 입력값 BE로 전송
      {
        performer: inputPerformer, // 참여자
        venue: inputVenue, // 주소
        detailVenue: inputDetailVenue, // 상세주소
        performanceDate: formattedDate, // 공연일시
        price: inputPrice, // 공연티켓가격
        performanceName: inputTitle, // 공연제목
        performanceImage: url, // 포스터
        seatCount: inputSeat, // 좌석수
        description: inputDescription // 공연소개
      }
    )
    console.log(performanceData); // 입력값 확인용 콘솔
  }
  
  
  
  return (
    <>
      <UpdateZone>
        <h1>공연 등록하기</h1>
        <div className="performer">
          참여자
          <ModalComponent 
          open="참여자 입력" 
          content={
            <div style={{ width: '100%', height: '100%' }}> {/* 크기를 최대로 설정 */}
              <InputBox placeholder="중복입력 가능" value={inputPerformer.join(', ')} readOnly />
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              {searchResults.map(user => (
                <div key={user.userNickname} onClick={() => handleSelect(user.userNickname)}>
                  {user.userNickname}
                </div>
              ))}
            </div>
          } 
          close="닫기" 
          customButton={null}
        />
          </div>
        <div className="inputContainer">
          
          <div className="venue">
          공연 주소
            <InputBox placeholder="주소" value={inputVenue} onClick={() => setShowPostcode(true)} readOnly />
            {showPostcode && (
              <div style={{ position: 'absolute', zIndex: 1000, width: '90%'}}>
                <OutsideClickHandler onOutsideClick={() => {setShowPostcode(false); setInputVenue('');}}>
                  <DaumPostcode onComplete={handleComplete} />
                </OutsideClickHandler>
              </div>
            )}
          </div>
          <div className="detailVenue">
            상세 주소
            <InputBox placeholder="상세주소" value={inputDetailVenue} onChange={(e) => setInputDetailVenue(e.target.value)}/>
          </div>
          <div className="date">
            일시
            <InputBox type="datetime-local"  value={inputDate} onChange={(e) => setInputDate(e.target.value)}/>
          </div>
          <div className="price">
            티켓 가격
            <InputBox placeholder="가격" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)}/>
          </div>
          <div className="title">
            제목
            <InputBox placeholder="제목" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
          </div>
          <div className="poster">
            포스터
            <ImageInput onChange={handleFileInputChange}/>
            {/* <FileButton onClick={() => document.getElementById('file').click()} > 파일 선택</FileButton> */}
          </div>
          <div className="seat">
            좌석 수
            <InputBox placeholder="좌석 수" value={inputSeat} onChange={(e) => setInputSeat(e.target.value)}/>
          </div>
          <div className="discription">
            소개
            <DescriptionInput value={inputDescription} onChange={(e) => setInputDescription(e.target.value)}/>
          </div>
        </div>
        <div className="buttonContainer">
        <Button enabled onClick={onClickSetPerformance}>등록하기</Button>
        </div>
      </UpdateZone>
    </>
  );
};

export default UpdateBox;