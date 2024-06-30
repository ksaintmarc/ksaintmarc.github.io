
import './App.css';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import About from './routes/About';
import Dev from './routes/Dev';
import Dessins from './routes/Dessins';

import Home from './routes/Home';
import { useState } from 'react';

const menuItems = [  
  { text: 'Home', path: '/', elem: <Home/> },
  { text: 'Expérience', path: '/experience', elem:<About/> },
  { text: 'Projets', path: '/projects', elem: <Dev/> },
  { text: 'Art', path: '/art', elem: <Dessins/> },
];

function Menu({changePage}) {
  const [currentPage, setCurrentPage] = useState('Home');
  return (
    <nav>
      {menuItems.map((item, index) => (
          <button key={index} onClick={()=>{
            setCurrentPage(item.text);
            changePage(item.elem);
          }}>{item.text}{currentPage===item.text? <DarkModeIcon/>:""}</button>
      ))}
    </nav>
  );
}

export default Menu;
