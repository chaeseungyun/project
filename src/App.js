import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Explain from "./pages/DetailPage/Explain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map/:id" element={<Explain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
