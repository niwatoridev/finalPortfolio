import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MainSec from './components/MainSec/MainSec';
import InfoCard from './components/InfoCard/InfoCard';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='App-header'>
          <Routes>
            <Route path='/' element={<MainSec/>}/>
            <Route path='info' element={<InfoCard/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
