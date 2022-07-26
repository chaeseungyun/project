import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FullPage from "./sections/Fullpage";
import NavBar from "../../components/NavBar/NavBar";
import useDetailCommon from "../../hooks/useDetailCommon";
const Home = () => {
  const imageAndTitle = useDetailCommon();
  console.log(imageAndTitle);
  return (
    <>
      {!imageAndTitle ? <h1>Loading...</h1> : (
        <ReactFullpage
          //fullpage options
          licenseKey={null}
          scrollingSpeed={1000} /* Options here */
          navigation={true}
          navigationPosition={"right"}
          slidesNavigation={true}
          loopBottom={true}
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                {imageAndTitle.map((item) => (
                  <div className="section" key={item.contentid}>
                    <NavBar />
                    <FullPage fullpageApi={fullpageApi} item={item} />
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      )}
    </>
  );
};

export default Home;
