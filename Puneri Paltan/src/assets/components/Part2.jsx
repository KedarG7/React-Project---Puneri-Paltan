import axios from 'axios'
import { useEffect, useState } from 'react'

const Part2 = () => {

  // const [players, setPlayers] = useState([])

  // useEffect(() => {
  //   const fetchPlayers = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://appy.trycatchtech.com/v3/puneri_paltan/category_list`,
  //       )
  //       setPlayers(response.data)
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   fetchPlayers()
  // }, [])


  
  return (
    <>
      <div className="scrollcontainer">
        <p className="scroll">SCROLL</p>
        <div className="line"></div>
      </div>

      <div className="teamdescription">
        <p>
          Puneri Paltan is currently one of the top performing teams in the Pro
          Kabaddi League. With a mix of unstoppable energy, honed-out skills and
          steely nerves, here's a force that consistently looks forward to
          perform better, challenge its opponents and make a difference.
        </p>
      </div>

      <div className="playercarousel">
        <div className="carouseltitle">
          <p>PLAYERS</p>
        </div>
        <div className="players"></div>
      </div>
      <div className="fixtures">
        <div className="container1">
          <div className="subcontain1">
            <div className="buyticket"></div>
          </div>
          <button className='buyticketbtn'>Buy Tickets</button>
          <div className="subcontain2"></div>
        </div>
      </div>

      {/* <button onClick={}>Click</button> */}
    </>
  );
}

export default Part2