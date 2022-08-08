import { useEffect, useState } from "react";

const useDetailCommon = () => {
  const [data, setData] = useState(null);
  let rand = Math.ceil(Math.random() * 10);
  const detailCommon = async () => {
    const searchFestival = await fetch(
      `https://apis.data.go.kr/B551011/KorService/searchFestival?MobileOS=ETC&MobileApp=AppTest&serviceKey=rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D&_type=json&eventStartDate=20220808&eventEndDate=20220830`
    );
    const convertTojson = await searchFestival.json();
    const getSearched = await convertTojson.response.body.items.item;
    console.log(getSearched);
    let url = `https://apis.data.go.kr/B551011/KorService/detailCommon`; /*URL*/
    let queryParams =
      "?" +
      encodeURIComponent("serviceKey") +
      "=" +
      "rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D"; /*Service Key*/
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
      "&" + encodeURIComponent("contentId") + "=" + encodeURIComponent(getSearched[0].contentid);
    queryParams +=
      "&" + encodeURIComponent("overviewYN") + "=" + encodeURIComponent("Y");
    queryParams +=
      "&" + encodeURIComponent("firstImageYN") + "=" + encodeURIComponent("Y");
    queryParams +=
      "&" + encodeURIComponent("_type") + "=" + encodeURIComponent("json");
    const response = await fetch(url + queryParams);
    const json = await response.json();
    const result = await json.response.body.items.item;
    console.log(result)
    setData(result);
  };
  useEffect(() => {
    detailCommon();
  }, []);

  return data;
};

export default useDetailCommon;
