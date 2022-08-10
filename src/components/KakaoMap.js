import React, { useState } from "react";
import {
  Map,
  MapMarker,
  ZoomControl,
  MapTypeControl,
} from "react-kakao-maps-sdk";
import { useLocation, Link } from "react-router-dom";
import './KakaoMap.css'
const { kakao } = window;

const KakaoMap = () => {
  const location = useLocation();
  const title = location.state.title;
  const overview = location.state.overview;
  const mapx = location.state.mapx;
  const mapy = location.state.mapy;
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: mapy, lng: mapx },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  const [isOpen, setIsOpen] = useState(true);
  let i = 1;
  return (
    <div className="map-overview">
      <div className="top-style">{title}</div>
      <Map // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
        onCenterChanged={(map) =>
          setState({
            level: map.getLevel(),
            center: {
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            },
          }) // 현재 위치의 중심 좌표 입력
        }
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
                center: { lat: mapy, lng: mapx },
                isPanto: true,
              })
            } // 클릭 시 초기 중심 좌표로 다시 설정
          >
            처음으로
          </button>
        </div>
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={{
            // 인포윈도우가 표시될 위치입니다
            lat: mapy,
            lng: mapx,
          }}
          clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
          onClick={() => setIsOpen(true)}
        >
          {isOpen && (
            <div style={{ minWidth: "150px" }}>
              <img
                alt="close"
                width="14"
                height="13"
                src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen(false)}
              />
              <div style={{ padding: "5px", color: "#000" }}>{title}</div>
            </div>
          )}
        </MapMarker>
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <Link to="/">
          <button>to Home</button>
        </Link>
      </Map>
      <div className="overview-style">{overview}</div>
    </div>
  );
};

export default KakaoMap;
