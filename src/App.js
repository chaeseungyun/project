import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Component/Home';
import Kakaomap from './Component/KakaoMap';
import NavBar from './Navbar';


const App = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map/:id' element={<Kakaomap />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App; 
