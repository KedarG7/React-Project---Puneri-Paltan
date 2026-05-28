import React from 'react'

const News = () => {
  return (
    <>
      <div className="newsbox">
        <p id="puneripaltan">PUNERI PALTAN</p>
        <p id="inthenews">IN THE NEWS</p>
        <button id="newsenterbtn">Enter</button>
      </div>
      <div className="newsletter">
        <p id='subsnewsletter'>SUBSCRIBE TO OUR NEWSLETTER</p>
        <input type="email" name="" id="newsletterinp" placeholder='Enter your email ID'/>
        <button id='gobtn'>Go</button>
      </div>
    </>
  );
}

export default News