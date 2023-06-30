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
        <Route path="/better" element={<Home />} />
        <Route path="/better/Training" element={<Training />} />
        <Route path="/better/Training/Strength" element={<Strength />} />
        <Route path="/better/Training/Hypertrophy" element={<Hypertrophy />} />
        <Route path="/better/Training/Endurance" element={<Endurance />} />
        <Route path="/better/Dieting" element={<Dieting />} />
        <Route path="/better/Dieting/Bulking" element={<Bulking />} />
        <Route path="/better/Dieting/Cutting" element={<Cutting />} />
        <Route path="/better/Dieting/Maintaining" element={<Maintaining />} />
        <Route path="/better/Analysis" element={<Analysis />} />
      </Routes>
    </>
  );
}

export default App;