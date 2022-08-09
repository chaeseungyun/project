import React, { useState, useEffect } from "react";
import { Map, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";
import { useLocation, useNavigate, Link } from "react-router-dom";
const { kakao } = window;

const KakaoMap = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.state.title;
  const overview = location.state.overview;
  const mapx = location.state.mapx;
  const mapy = location.state.mapy;
  console.log(mapx, mapy);
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: mapy, lng: mapx },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={() =>
              setState({
                center: { lat: 33.45058, lng: 126.574942 },
                isPanto: true,
              })
            }
          >
            지도 중심좌표 부드럽게 이동시키기
          </button>
          <MapInfoWindow // 인포윈도우를 생성하고 지도에 표시합니다
            position={{
              // 인포윈도우가 표시될 위치입니다
              lat: mapy,
              lng: mapx,
            }}
            removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
          >
            {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
            <div style={{ padding: "5px", color: "#000" }}>{title}</div>
          </MapInfoWindow>
          <Link to="/">
            <button>to Home</button>
          </Link>
        </div>
      </Map>
    </>
  );
};

export default KakaoMap;
