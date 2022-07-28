import React, { useEffect, useState } from 'react';

const GetGalleryList = () => {
    const [tour,setTour] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [tourPlace, setTourplace] = useState('');
    let url = 'http://api.visitkorea.or.kr/openapi/service/rest/PhotoGalleryService/galleryList'; /*URL*/
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + 'rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
    queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json')

    useEffect(() => {
         fetch(url + queryParams)
        .then((response) => response.json())
        .then(data => setTour(data.response.body.items))
        .then(setImgSrc(tour.item[0].galWebImageUrl))
        //.then(setTourplace(tour.item[0].galTitle))
    }, [])
    console.log(tour);
    return (
        <>
        <img src={imgSrc} alt='img' style={{width: '400px', height: '400px'}}></img>
        //<p>{tourPlace}</p>
        </>
        
    )
}

export default GetGalleryList;