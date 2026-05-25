import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
      <nav>
        <span>
          <Link to="/">
            <img src="./logo.gif" className="logo" />
          </Link>
        </span>
        <div className='navv'>
          <Link to="/players">Players</Link>
          <Link to="/standings">Standings</Link>
          <Link to="/fixtures">Fixtures</Link>
          <Link to="/paltan-world">Paltan World</Link>
          <Link to="/tickets">Tickets</Link>
        </div>
      </nav>
    );
}