import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const FirstFullPage = ({ fullpageApi }) => {
    return (
        <>
        <p>Section 1 (welcome to fullpage.js)</p>
            <Link to='/map/123'>go to map</Link>
            <Button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </Button>
        </>
    )
}

export default FirstFullPage;