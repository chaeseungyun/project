import React from "react";
import { useNavigate } from "react-router-dom";
import "./FullPage.css";

const FirstFullPage = ({ fullpageApi, item }) => {
  const navigate = useNavigate();
  const toDetailPage = () => {
    navigate("/map/" + item.contentid, {
      state: {
        title: item.title,
        overview: item.overview,
        mapx: item.mapx,
        mapy: item.mapy,
      },
    });
  };
  return (
    <>
      {!item ? (
        <h1>Loding...</h1>
      ) : (
        <div
          id="putImage"
          style={{
            backgroundImage: `url(${item.firstimage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span onClick={() => toDetailPage()} className="place-name">
            {item.title}
          </span>

          <button onClick={() => fullpageApi.moveSectionDown()}></button>
        </div>
      )}
    </>
  );
};

export default FirstFullPage;
