import React from 'react'
import "./Styles/services.css"
function Services() {
  return (
    <div className='s-coantainer'>
    <div className="left-section">
          <button className='service'>Button 1</button>
          <p>Text for left section</p>
        </div>
        <div className="right-section">
          <button className='service'>Button 2</button>
          <p>Text for right section</p>
        </div>
    </div>
  )
}

export default Services