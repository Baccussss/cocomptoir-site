import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/General/Navbar';
import Home from './pages/Home';
import Dons from './pages/Dons';
import APropos from './pages/A_Propos';
import Local from './pages/Local';
import Footer from './components/General/Footer';
import Benevole from './pages/Benevole';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Dons />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/local" element={<Local />} />
        <Route path="/benevole" element={<Benevole />} />
        <Route path="/news" element={<News />} />
        {/* Ajouts d'autres routes ici si besoin */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;