import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './layout/Main';

function App() {
  return (
    <div className='app'>
        <Header />
        <div className='content'>
          <Sidebar />
          <Main />
        </div>
    </div>
  );
}

export default App;
