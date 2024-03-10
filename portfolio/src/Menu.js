import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
  { text: 'Art', path: '/art' },
  { text: 'Dev', path: '/dev' },
];

function Menu() {
  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li>
            <Link key={index} to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
