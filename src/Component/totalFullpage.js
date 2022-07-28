import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import FirstFullPage from './firstFullpage';
import SecondFullpage from './SecondFullpage';
import ThirdFullpage from './ThirdFullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={null}
    scrollingSpeed={1000} /* Options here */
    navigation={true}
    navigationPosition={'right'}
    slidesNavigation={true}
    slidesNavPosition={'bottom'}
    scrollOverflowReset={true}
    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <FirstFullPage fullpageApi={fullpageApi} />
          </div>
          <div className="section">
            <SecondFullpage fullpageApi={fullpageApi} />
          </div>
          <div className="section">
            <ThirdFullpage fullpageApi={fullpageApi} />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;