import './App.css';
import {Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import About from './routes/About';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Dessins from './routes/Dessins';
import Dev from './routes/Dev';
import { useState } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState(<Home/>);
  const changePage = (page) => {
    setCurrentPage(page);
  } 
  return (
    <>
      <Menu changePage={changePage}></Menu>
      {currentPage}
    </>
  );
}

export default App;
