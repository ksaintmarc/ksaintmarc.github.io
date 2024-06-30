import './App.css';
import Menu from './Menu';
import Home from './routes/Home';
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
