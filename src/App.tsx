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
import Contact from "./Pages/Contact";
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState("english");
  return (
    <>
      <NavBar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
        <Route path="/training" element={<Training lang={lang} setLang={setLang} />} />
        <Route path="/training/strength" element={<Strength lang={lang} setLang={setLang} />} />
        <Route path="/training/hypertrophy" element={<Hypertrophy lang={lang} setLang={setLang} />} />
        <Route path="/training/endurance" element={<Endurance lang={lang} setLang={setLang} />} />
        <Route path="/dieting" element={<Dieting lang={lang} setLang={setLang} />} />
        <Route path="/dieting/bulking" element={<Bulking lang={lang} setLang={setLang} />} />
        <Route path="/dieting/cutting" element={<Cutting lang={lang} setLang={setLang} />} />
        <Route path="/dieting/maintaining" element={<Maintaining lang={lang} setLang={setLang} />} />
        <Route path="/analysis" element={<Analysis lang={lang} setLang={setLang} />} />
        <Route path="/contact" element={<Contact lang={lang} setLang={setLang} />} />
      </Routes>
    </>
  );
}

export default App;