import React, { useEffect } from "react";

const Test = () => {
  const f = async () => {
    const url =
      "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword"; /*URL*/
    let queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D"; /*Service Key*/
    queryParams +=
      "&" +
      encodeURIComponent("numOfRows") +
      "=" +
      encodeURIComponent("10"); /**/
    queryParams +=
      "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("10"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("MobileOS") +
      "=" +
      encodeURIComponent("ETC"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("MobileApp") +
      "=" +
      encodeURIComponent("AppTest"); /**/
    queryParams +=
      "&" + encodeURIComponent("areaCode") + "=" + encodeURIComponent("1"); /**/
    queryParams +=
      "&" +
      encodeURIComponent("keyword") +
      "=" +
      encodeURIComponent("천안시 병천면");
    queryParams +=
      "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");
    const response = await fetch(url + queryParams);
    const json = await response.json();
    console.log(json);
  };
  useEffect(() => {
    f();
  }, []);
  return <h1>hi</h1>;
};

export default Test;
