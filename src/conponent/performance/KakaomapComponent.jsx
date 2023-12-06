import { useEffect, useState } from "react";
import MapMarker from "../../images/MapMarker.png";
import AxiosApi from "../../api/AxiosApi";

const { kakao } = window;

const KakaomapComponent = () => {

  const[performanceList, setPerformanceList] = useState([]); // 공연목록 데이터
  const[currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const[totalPage, setTotalPage] = useState(0); // 전체 페이지

  // 총 페이지 수 계산
  useEffect(() => {
    const totalPage = async () => {
      try {
        const res = await AxiosApi.getPerformancePage(0, 10);
        setTotalPage(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    totalPage();
  }, []);

  // 페이지네이션 계산
  useEffect(() => {
    const performanceList = async () => {
      try {
        const res = await AxiosApi.getPerformancePageList(currentPage, 10);
        console.log(res.data);
        setPerformanceList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    performanceList();
  }, []);

  // 페이지 이동
  const handlePageChange = (number) => {
    console.log(number);
    setCurrentPage(number - 1);
  };

  useEffect(() => {
  const Container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  const options = { // 지도 기본값 설정
    center: new kakao.maps.LatLng(37.498712, 127.031904), //지도의 중심좌표.
    level: 9 //지도의 레벨(확대, 축소 정도)
  };
  const map = new kakao.maps.Map(Container, options); //지도 생성 및 객체 리턴

  // 마커 이미지 및 표시위치 설정
  const imageSrc = MapMarker,
        imageSize = new kakao.maps.Size(40),
        imageOption = { offset: new kakao.maps.Point(20, 48.94) };

  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  const markerPosition = new kakao.maps.LatLng(37.498712, 127.031904);

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // Add this line to set the marker image
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // Geocoder 객체 생성, 주소 -> 좌표 변환 객체
  const geocoder = new window.kakao.maps.services.Geocoder();

  // 테이블 데이터를 가져옵니다
    const tableData = [
      // 예시 데이터입니다. 실제 데이터로 교체해야 합니다
      { address: '서울특별시 강남구 테헤란로 134' },
      { address: '서울특별시 강남구 테헤란로 126' },
      { address: '서울특별시 강남구 강남대로94길 56-4' },
      { address: '서울특별시 강남구 테헤란로 124' },
      { address: '서울 마포구 성산동 515' },
      // ...
    ];

    // 각 데이터 주소에 따라 지도 위에 마커를 표시합니다
    tableData.forEach(data => {
      geocoder.addressSearch(data.address, function(result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커를 생성하고 지도에 표시합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage // 이 부분이 추가되었습니다.
          });
        }
      });
    });

}, []);

return (
  <>
    <div id="map" style={{
      width: "100%",
      height: "100%",
    }}> 
    </div>
  </>
  )
  }

export default KakaomapComponent;

