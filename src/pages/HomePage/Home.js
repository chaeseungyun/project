import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstFullPage from "./sections/firstFullpage";
import NavBar from "../../components/NavBar/NavBar";
import useGalleryList from "../../hooks/useGalleryList";
const Home = () => {
  const imgSrc = useGalleryList();
  console.log(imgSrc);
  return (
    <>
      {imgSrc && (
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
                {imgSrc.map((item) => (
                  <div className="section" key={item.galContentId}>
                    <NavBar />
                    <FirstFullPage fullpageApi={fullpageApi} item={item} />
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
