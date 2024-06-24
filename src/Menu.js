import './App.css';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';

const menuItems = [  
  { text: 'Expérience', path: '/experience' },
  { text: 'Projets', path: '/projects' },
  { text: 'Home', path: '/' },
  { text: 'Art', path: '/art' },
  { text: 'Contact', path: '/contact' },
];

function Menu() {
  const location = useLocation()
  return (
    <nav>
      {menuItems.map((item, index) => (
          <Link className={location.pathname===item.path && 'selected'} underline='none' key={index} href={item.path}>{item.text}</Link>
      ))}
    </nav>
  );
}

export default Menu;
