import { Button } from '@mui/material';
import './App.css';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';
import About from './routes/About';
import Dev from './routes/Dev';
import Dessins from './routes/Dessins';
import Contact from './routes/Contact';
import Home from './routes/Home';

const menuItems = [  
  { text: 'Expérience', path: '/experience', elem:<About/> },
  { text: 'Projets', path: '/projects', elem: <Dev/> },
  { text: 'Home', path: '/', elem: <Home/> },
  { text: 'Art', path: '/art', elem: <Dessins/> },
  { text: 'Contact', path: '/contact', elem: <Contact/> },
];

function Menu({changePage}) {
  const location = useLocation()
  return (
    <nav>
      {menuItems.map((item, index) => (
          <Button variant='text' key={index} onClick={()=>changePage(item.elem)}>{item.text}</Button>
      ))}
    </nav>
  );
}

export default Menu;
