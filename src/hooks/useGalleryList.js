import React, { useEffect, useState } from "react";

const useGalleryList = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const headers = {headers: {'Accept': 'application/json'}}
  let rand = Math.ceil(Math.random() * 10);
  let url = `https://cors-anywhere.herokuapp.com/http://api.visitkorea.or.kr/openapi/service/rest/PhotoGalleryService/galleryList?numOfRows=3&pageNo=${rand}`; /*URL*/
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
    const response = await fetch(url + queryParams, headers);
    const json = await response.json();
    const result = await json.response.body.items.item;
    console.log(result.__proto__);
    setImgSrc(result);
  };
  useEffect(() => {
    getImageList();
  }, []);

  return imgSrc;
};

export default useGalleryList;
