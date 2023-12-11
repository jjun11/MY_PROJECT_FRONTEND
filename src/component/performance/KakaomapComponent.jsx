import { useEffect, useState } from "react";
import MapMarker from "../../images/MapMarker.png";
import AxiosApi from "../../api/AxiosApi";

const { kakao } = window;

const KakaomapComponent = ({ performanceList }) => {
  // const[ tableData, setTableData ] = useState([]); // 테이블 데이터

  // const[performanceList, setPerformanceList] = useState([]); // 공연목록 데이터
  
  useEffect(() => {
    const Container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  const options = { // 지도 기본값 설정
    center: new kakao.maps.LatLng(37.498712, 127.031904), //지도의 중심좌표.
    level: 8 //지도의 레벨(확대, 축소 정도)
  };
  const map = new kakao.maps.Map(Container, options); //지도 생성 및 객체 리턴

  // 마커 이미지 및 표시위치 설정
  const imageSrc = MapMarker,
        imageSize = new kakao.maps.Size(40),
        imageOption = { offset: new kakao.maps.Point(20, 48.94) };

  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  const markerPosition = options.center;

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // Add this line to set the marker image
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // Geocoder 객체 생성, 주소 -> 좌표 변환 객체
  const geocoder = new window.kakao.maps.services.Geocoder();


  // AxiosApi.getPerformanceList().then (response =>  {
  //   // 공연 목록에서 주소 데이터만을 추출하여 tableData에 저장
  //   const newTableData = response.data.map(performance => ({ address: performance.venue }));
  //   console.log(newTableData);
  //   setTableData(newTableData);
  

      // 각 데이터 주소에 따라 지도 위에 마커를 표시합니다
    // newTableData.forEach(data => {
    //   geocoder.addressSearch(data.address, function(result, status) {
    //     if (status === window.kakao.maps.services.Status.OK) {
    //       const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

    // 각 데이터 주소에 따라 지도 위에 마커를 표시합니다
    performanceList.forEach(performance => {
      geocoder.addressSearch(performance.venue, function(result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 마커를 생성하고 지도에 표시합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage 
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);
        }
      });
    });
  }, [performanceList]); // performanceList가 변경될 때마다 useEffect를 실행합니다.
//         }
//       });
//     });
//   });

  

// }, []);

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

