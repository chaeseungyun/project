import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Detail from "./pages/DetailPage/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
