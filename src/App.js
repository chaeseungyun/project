import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Kakaomap from "./components/KakaoMap";
import Test from "./Test.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:id" element={<Kakaomap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
