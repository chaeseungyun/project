import React, { useEffect, useState } from 'react';

const GetGalleryList = () => {
    const [imgSrc, setImgSrc] = useState([]);
    const [tourPlace, setTourplace] = useState('');
    let url = 'http://api.visitkorea.or.kr/openapi/service/rest/PhotoGalleryService/galleryList'; /*URL*/
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + 'rdYSyhAxSxgM7723QGu5S%2B678lsmU6p9SqU1UpL9CzNHQeZdBnFQTEjIHAJAxcx7kNQYmO8LBMB0IuTA7sHidg%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
    queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json')

    const getImageList = async () => {
        const response = await fetch(url + queryParams);
        const json = await response.json();
        const result = await json.response.body.items.item;
        setImgSrc(current => current.concat(result));

    }
    useEffect(() => {
        getImageList();
    }, [])
    console.log(imgSrc)

    return (
        <>
            {imgSrc === [] ? <h1>Loding...</h1> : imgSrc.map(
                x =>
                    <div key={x.galContentId} id='gallayList'>
                        <img  src={x.galWebImageUrl} alt='image' width='200px' height='200px' />
                        <span>{x.galTitle}</span>
                    </div>
            )}
        </>

    )
}

export default GetGalleryList;