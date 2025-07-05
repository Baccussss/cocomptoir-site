import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dons from './pages/Dons';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Dons />} />
        {/* Ajoute d'autres routes ici si besoin */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;