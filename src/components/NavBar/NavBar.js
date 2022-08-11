import React from "react";
import * as S from "./NavBar.style";

function NavBar() {
  return <S.NavBox>
    <div style={{
      position: 'absolute',
      top: '10px',
      fontSize: '20px',
      left: '45.5vw'
    }}>
      축제를 소개합니다!
    </div>
  </S.NavBox>;
}

export default NavBar;
