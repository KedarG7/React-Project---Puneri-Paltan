import React from 'react'

const Partners = () => {
  return (
  <>
  <p id='partnerstext'>PARTNERS</p>
  <div className="principalpartner">
    <img src="../public/force_motors.png" alt="" />
    <p>Principal Partner</p>
  </div>
  <div className="associatepartners">
    <div className="associate1">
      <img src="../public/stihl-logo.png" alt="" />
      <p>Associate Partner</p>
    </div>
    <div className="associate2">
      <img src="../public/navitas_sponsor.webp" alt="" />
      <p>Associate Partner</p>
    </div>
  </div>
  <div className="copartner">
    <img src="../public/paras.webp" alt="" />
    <p>Co - Partner</p>
  </div>
  <div className="wellnesspartner">
    <img src="../public/better.webp" alt="" />
    <p>Wellness Partner</p>
  </div>
  <div className="kitpartner">
    <img src="../public/shivnaresh-logo.webp" alt="" />
    <p>Kit Partner</p>
  </div>
  </>
  )
}

export default Partners