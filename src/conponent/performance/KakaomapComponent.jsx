import { useEffect } from "react";

const { kakao } = window;

const KakaomapComponent = () => {

  useEffect(() => {
  const Container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.499005, 127.032880),
    level: 3
  };
  const map = new kakao.maps.Map(Container, options);

  

  // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
  const markerPosition  = new kakao.maps.LatLng(37.499005, 127.032880); 

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

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

