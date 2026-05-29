import React from 'react'
import Navbar from '../../../components/Navbar'

const PlayerHome = () => {
  return (
    <>
      <div className="playerhome">
        <Navbar />
        <div className="playertogether">
          <div className="playertitle">
            <img src="public/banner-title.png" alt="" />
            <p>PLAYERS</p>
          </div>
          <div className="playercome"></div>
        </div>
      </div>
    </>
  );
}

export default PlayerHome