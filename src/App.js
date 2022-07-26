import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Component/Home';
import Kakaomap from './Component/KakaoMap';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/map/:id' element={<Kakaomap />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
