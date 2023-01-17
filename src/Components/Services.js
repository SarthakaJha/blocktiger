import React from 'react'
import "./Styles/services.css"
function Services() {
  return (
    <div className='s-coantainer'>
    <div className="left-section">
          <button className='service type1'>Notarize the document</button>
          <p className='Info info1'>Your Notary Service!

This notary service specializes in notarizing your 
documents and recording them in a blockchain.</p>
        </div>
        <div className="right-section">
          <button className='service type2'>Check the Document</button>
          <p className='Info info2'>Check a document!You can also check if a document 
            notarized by us is legitimate.</p>
        </div>
    </div>
  )
}

export default Services