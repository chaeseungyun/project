import React from "react";
import { Button } from "./styled";

const SecondFullpage = ({ fullpageApi }) => {
    return (
        <>
            <div className='slide'>
                <Button onClick={() => { fullpageApi.moveSlideRight() }}>to right</Button>
            </div>
            <div className='slide'>
                <Button onClick={() => { fullpageApi.moveSlideRight() }}>to right</Button>
            </div>
            <div className='slide'>
                <Button onClick={() => { fullpageApi.moveSlideRight() }}>to right</Button>
            </div>
        </>
    )
}

export default SecondFullpage;