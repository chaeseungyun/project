import React from "react";
import { Button } from "./Button";

const ThirdFullpage = ( { fullpageApi } ) => {
    return (
        <>
        <p>Section 3</p>
            <Button onClick={() => fullpageApi.moveSectionUp()}>
              Click me to move up
            </Button>
            <Button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move Down
            </Button>
        </>
    )
}

export default ThirdFullpage;