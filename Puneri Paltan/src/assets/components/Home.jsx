import React from 'react'
import Navbar from "../components/Navbar";
import Part2 from "../components/Part2";
import PaltanWorld from "../components/PaltanWorld";
import News from "../components/News";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    
    <div className="bodyy"><Navbar /></div>
      <div className="part2"><Part2 /></div>
      <div className="paltanworld"><PaltanWorld/></div>
      <div className="news"><News/></div>
      <div className="partners"><Partners/></div>
      <div className="footer"><Footer/></div>
  
    </>
  )
    
}

export default Home