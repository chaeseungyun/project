import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GetGalleryList from './module/GetGalleryList';
import Home from './Component/Home';
import Kakaomap from './Component/KakaoMap';
import  NavBar  from './Navbar';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<GetGalleryList />}></Route>
          <Route path='/map/:id' element={<Kakaomap />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App; 
