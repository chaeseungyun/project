import React from "react";
import { Button } from "./styled";
import { Link } from "react-router-dom";
import GetGalleryList from "../module/GetGalleryList";

const FirstFullPage = ({ fullpageApi }) => {
    return (
        <div>
            <GetGalleryList />
        </div>
    )
}

export default FirstFullPage;