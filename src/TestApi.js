import { useEffect } from "react";

const TestApi = () => {
    const TestFunction = async () => {
        const response = await fetch(`https://apis.data.go.kr/B551011/KorService/detailCommon?MobileOS=ETC&MobileApp=AppTest&serviceKey=rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D&_type=json&contentId=128778&firstImageYN=Y&overviewYN=Y`);
        const json = await response.json();
        console.log(json);
    }
    useEffect(()=>{
        TestFunction();
    },[])
    return(
        <div>hi</div>
    )
}

export default TestApi;