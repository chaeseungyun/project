import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const { kakao } = window;

const KakaoMap = () => {
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    })
    return (
        <div>
            <div id='myMap' style={{
                width: '500px',
                height: '500px'
            }}>
            </div>
            <Link to='/'><Button>to Home</Button></Link>
        </div>

    );
}

export default KakaoMap; 
