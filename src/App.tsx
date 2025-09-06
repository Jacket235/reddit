import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import Aside from './layout/Aside';
import { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState<boolean>(false);
  
  return (
    <div className='app'>
        <Header />
        <div className='content'>
          <Sidebar />
          <div className="main-container">
            <Main />
            <Aside />
          </div>
        </div>
    </div>
  );
}

export default App;
