import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Training from './Pages/Training';
import Strength from './Pages/Strength';
import Hypertrophy from './Pages/Hypertrophy';
import Endurance from './Pages/Endurance';
import Dieting from './Pages/Dieting';
import Bulking from './Pages/Bulking';
import Cutting from './Pages/Cutting';
import Maintaining from './Pages/Maintaining';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Training/Strength" element={<Strength />} />
        <Route path="/Training/Hypertrophy" element={<Hypertrophy />} />
        <Route path="/Training/Endurance" element={<Endurance />} />
        <Route path="/Dieting" element={<Dieting />} />
        <Route path="/Dieting/Bulking" element={<Bulking />} />
        <Route path="/Dieting/Cutting" element={<Cutting />} />
        <Route path="/DIeting/Maintaining" element={<Maintaining />} />
      </Routes>
    </>
  );
}

export default App;