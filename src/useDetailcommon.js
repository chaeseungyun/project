import { useEffect, useState } from "react";

const useDetailcommon = () => {
  const [data, setData] = useState(null);
  const getInfomation = async () => {
    const url =
      "https://api.visitkorea.or.kr/openapi/service/rest/KorService/detailcommon"; /*URL*/
    let queryParams =
      "?" +
      encodeURIComponent("ServiceKey") +
      "=" +
      "rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D"; /*Service Key*/
    queryParams +=
      "&" +
      encodeURIComponent("contentId") +
      "=" +
      encodeURIComponent("126508"); /**/
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
      "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");
    queryParams +=
      "&" + encodeURIComponent("firstImageYN") + "=" + encodeURIComponent("Y");
    queryParams +=
      "&" + encodeURIComponent("overviewYN") + "=" + encodeURIComponent("Y");
    const response = await fetch(url + queryParams);
    const json = await response.json();
    const result = await json.response.body.items.item;
    setData(result);
    console.log(result);
  };
  useEffect(() => {
    getInfomation();
  }, []);
  return data;
};

export default useDetailcommon;
