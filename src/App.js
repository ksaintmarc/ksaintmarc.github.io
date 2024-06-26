import './App.css';
import {Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import About from './routes/About';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Dessins from './routes/Dessins';
import Dev from './routes/Dev';


function App() {
  return (
    <>
      <Menu></Menu>
      <Routes id='page'>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/experience" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/art" element={<Dessins />} />
        <Route path="/projects" element={<Dev />} />
      </Routes>
    </>
  );
}

export default App;
