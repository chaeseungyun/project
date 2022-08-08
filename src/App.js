import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Kakaomap from "./components/KakaoMap";
import TestCase from './TestCase.js';
import TestApi from "./TestApi";
import UseDetailCommon from "./hooks/useDetailCommon";
import UsecontentId from "./hooks/useContentId";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestCase />} />
        <Route path="/map/:id" element={<Kakaomap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
