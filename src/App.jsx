import NavBar from './component/NavBar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Games from './pages/Games';
import LastCard from './pages/LastCard';
import About from './pages/About';
import BuriedCard from './pages/BuriedCard';
import ThirdCard from './pages/ThirdCard';
import Recensioni from './pages/Recensioni';
// import BackgroundMusic from './component/BackgroundMusic';

export default function App() {

  return <div>

    <BrowserRouter >
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Homepage />} />

          <Route path="/games" >
            <Route index element={<Games />} />
            <Route path="ultimo/:slug" element={<LastCard />} />
            <Route path="sepolti/:slug" element={<BuriedCard />} />
            <Route path="horror/:slug" element={<ThirdCard />} />
          </Route >

          <Route path="/about" element={<About />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="*" element={<h1>pagina non trovata </h1>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </div>
};

//<BackgroundMusic />


