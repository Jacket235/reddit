import './App.css'
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './layout/Main';
import Aside from './layout/Aside';

function App() {
    return (
        <div className='app'>
            <Header />
            <div className='grid-container'>
                <Sidebar />
                <div className='subgrid-container'>
                    <div className='main-container'>
                        <Main />
                        <Aside />
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default App;
