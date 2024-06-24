import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Dessins from './Pages/Dessins';
import Dev from './Pages/Dev';


function App() {
  return (
    <Router>
      <Menu></Menu>
      <Routes id='page'>
        <Route exact path="/" element={<Home />} />
        <Route path="/experience" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/art" element={<Dessins />} />
        <Route path="/projects" element={<Dev />} />
      </Routes>
    </Router>
  );
}

export default App;