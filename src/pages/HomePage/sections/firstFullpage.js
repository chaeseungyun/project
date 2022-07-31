import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./firstFullPage.css";

const FirstFullPage = ({ fullpageApi, item }) => {
  const navigate = useNavigate();
  const toDetailPage = () => {
    navigate("/map/" + item.galContentId, {
      state: {
        title: item.galTitle,
      },
    });
  };
  return (
    <>
      {!item ? (
        <h1>Loding...</h1>
      ) : (
        <div
          id="putGallary"
          style={{
            backgroundImage: `url(${item.galWebImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <span onClick={() => toDetailPage()} className="place-name">
            {item.galTitle}
          </span>

          <button onClick={() => fullpageApi.moveSectionDown()}></button>
        </div>
      )}
    </>
  );
};

export default FirstFullPage;
