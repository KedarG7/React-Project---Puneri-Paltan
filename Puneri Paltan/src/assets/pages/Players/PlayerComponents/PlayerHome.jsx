import React from 'react'
import Navbar from '../../../components/Navbar'

const PlayerHome = () => {
  return (
    <>
      <div className="playerhome">
        <Navbar />
        <div className="playertogether">
          <div className="playertitle">
            <div className="logoimage1">
              <p>PLAYERS</p>
            </div>
          </div>
          <div className="playercome">
            <img src="public/players_page_banner_desktop_S12.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerHome