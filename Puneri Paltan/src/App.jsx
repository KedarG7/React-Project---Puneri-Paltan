
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Players from './assets/pages/Players/players'
import Standings from './assets/pages/Standings/Standings';
import Fixtures from './assets/pages/Fixtures/Fixtures';
import PaltanWorld from '../src/assets/components/PaltanWorld';
import Tickets from './assets/pages/Tickets/Tickets';
import Part2 from './assets/components/Part2';
import News from './assets/components/News';
import Partners from './assets/components/Partners';
import Footer from './assets/components/Footer';

function App() {
  

  return (
    <>
      <div className="bodyy"><Navbar /></div>
      <div className="part2"><Part2 /></div>
      <div className="paltanworld"><PaltanWorld/></div>
      <div className="news"><News/></div>
      <div className="partners"><Partners/></div>
      <div className="footer"><Footer/></div>
      

      <Routes>
        <Route path="/" />

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
