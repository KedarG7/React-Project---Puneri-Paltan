
import './App.css'
import { Route,Routes } from 'react-router-dom'

import Players from './assets/pages/Players/players'
import Standings from './assets/pages/Standings/Standings';
import Fixtures from './assets/pages/Fixtures/Fixtures';
import PaltanWorld from '../src/assets/components/PaltanWorld'

import Tickets from './assets/pages/Tickets/Tickets';
import Home from './assets/components/Home';




function App() {
  

  return (
    <>
  
      

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/players" element={<Players />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/paltan-world" element={<PaltanWorld />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </>
  );
}

export default App
