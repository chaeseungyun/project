import KakaoMap from "../../components/KakaoMap";
import ReactFullpage from "@fullpage/react-fullpage";

const Explain = () => {
  return (
    <div>
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
              <div className="section">
                <KakaoMap />
              </div>
              <div className="section">
                <h1>hi</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};
export default Explain;
