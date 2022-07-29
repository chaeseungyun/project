import React, { useEffect, useState } from "react";

const useGalleryList = () => {
  const [imgSrc, setImgSrc] = useState(null);
  let rand = Math.ceil(Math.random() * 10);
  let url = `http://api.visitkorea.or.kr/openapi/service/rest/PhotoGalleryService/galleryList?numOfRows=3&pageNo=${rand}`; /*URL*/
  let queryParams =
    "&" +
    encodeURIComponent("ServiceKey") +
    "=" +
    "rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D"; /*Service Key*/
  queryParams +=
    "&" + encodeURIComponent("MobileOS") + "=" + encodeURIComponent("ETC"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("MobileApp") +
    "=" +
    encodeURIComponent("AppTest"); /**/
  queryParams +=
    "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");

  const getImageList = async () => {
    const response = await fetch(url + queryParams);
    const json = await response.json();
    const result = await json.response.body.items.item;
    setImgSrc(result);
  };
  useEffect(() => {
    getImageList();
  }, []);

  return imgSrc;
};

export default useGalleryList;
