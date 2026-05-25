
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Players from './assets/pages/Players/players'
import Standings from './assets/pages/Standings/Standings';
import Fixtures from './assets/pages/Fixtures/Fixtures';
import PaltanWorld from './assets/pages/Paltan World/PaltanWorld';
import Tickets from './assets/pages/Tickets/Tickets';
import Part2 from './assets/components/Part2';

function App() {
  

  return (
    <>
      <div className="bodyy">
        <Navbar />
      </div>
      <div className="part2">
        <Part2 />
      </div>

      <Routes>
        <Route path="/" element={<Players />} />

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
