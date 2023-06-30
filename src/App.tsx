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
import Analysis from "./Pages/Analysis";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training/strength" element={<Strength />} />
        <Route path="/training/hypertrophy" element={<Hypertrophy />} />
        <Route path="/training/endurance" element={<Endurance />} />
        <Route path="/dieting" element={<Dieting />} />
        <Route path="/dieting/bulking" element={<Bulking />} />
        <Route path="/dieting/cutting" element={<Cutting />} />
        <Route path="/dieting/maintaining" element={<Maintaining />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </>
  );
}

export default App;