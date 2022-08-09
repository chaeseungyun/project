import { useEffect, useState } from "react";

const useDetailCommon = () => {
  const [data, setData] = useState(null); // 최종 전달할 값
  let randomIndex = []; // 랜덤으로 중복없는 3개의 인덱스를 가질 배열
  const detailCommon = async () => {
    const searchFestival = await fetch(
      `https://apis.data.go.kr/B551011/KorService/searchFestival?MobileOS=ETC&MobileApp=AppTest&serviceKey=rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D&_type=json&eventStartDate=20220820&eventEndDate=20220830`
    ); // 행사정보의 contentId를 가져오기 위함
    const convertTojson = await searchFestival.json();
    const getSearched = await convertTojson.response.body.items.item;
    const existFirstImage = getSearched.filter(
      (item) => item.firstimage !== ""
    ); // 이미지가 있는 데이터만 가져옴
    const contentId = existFirstImage.map((item) => item.contentid); // contentId를 추려냄
    for (let i = 0; i < 3; i++) {
      let randNum = Math.floor(Math.random() * 7 + 1);
      let isSame = randomIndex.find((n) => n === randNum);
      if (!isSame) {
        randomIndex.push(randNum);
      } else {
        i--;
      }
    } // 0~7의 숫자 중 중복없이 3개의 숫자를 randomIndex에 저장
    let url = `https://apis.data.go.kr/B551011/KorService/detailCommon?serviceKey=rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D&MobileOS=ETC&MobileApp=App&overviewYN=Y&firstImageYN=Y&_type=json&defaultYN=Y&mapinfoYN=Y`; /*URL*/
    let firstQueryParams =
      "&" + encodeURIComponent("contentId") + "=" + encodeURIComponent(contentId[randomIndex[0]]);
    let secondQueryParams =
      "&" + encodeURIComponent("contentId") + "=" + encodeURIComponent(contentId[randomIndex[1]]);
    let thirdQueryParams =
      "&" + encodeURIComponent("contentId") + "=" + encodeURIComponent(contentId[randomIndex[2]]);
    const firstResponse = await fetch(url + firstQueryParams);
    const firstJson = await firstResponse.json();
    const firstResult = await firstJson.response.body.items.item;
    const secondResponse = await fetch(url + secondQueryParams);
    const secondJson = await secondResponse.json();
    const secondResult = await secondJson.response.body.items.item;
    const thirdResponse = await fetch(url + thirdQueryParams);
    const thirdJson = await thirdResponse.json();
    const thirdResult = await thirdJson.response.body.items.item; // 위 api는 하나의 정보를 가진 객체만 반환하므로 3번 호출
    const result = [...firstResult, ...secondResult, ...thirdResult]; // 한 개의 배열로 합침
    console.log(result);
    setData(result);
    
  };
  useEffect(() => {
    detailCommon();
  }, []); // useEffect를 통해 마운트 시 한 번만 실행

  return data;
};

export default useDetailCommon;
