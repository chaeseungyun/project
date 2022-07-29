import React from "react";
import { Link } from "react-router-dom";
import "./firstFullPage.css";

const FirstFullPage = ({ fullpageApi, item }) => {
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
          <Link to={"/map/" + item.galContentId}>
            <span className="place-name">{item.galTitle}</span>
          </Link>
          <button onClick={() => fullpageApi.moveSectionDown()}></button>
        </div>
      )}
    </>
  );
};

export default FirstFullPage;
