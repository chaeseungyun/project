import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/map/123'>지도로 이동</Link>
        </div>
    )
}

export default Home;