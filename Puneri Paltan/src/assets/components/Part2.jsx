import axios from 'axios'
import { useEffect, useState } from 'react'

const Part2 = () => {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `https://appy.trycatchtech.com/v3/puneri_paltan/category_list`,
        )
        setPlayers(response.data)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchPlayers()
  }, [])


  
  return (
    <>
    <p className="scroll">SCROLL</p>
      
    {/* <button onClick={}>Click</button> */}

    </>
  )
}

export default Part2