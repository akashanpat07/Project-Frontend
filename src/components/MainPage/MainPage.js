import React, { useEffect } from 'react'
//import Working from './Working'
import WhatWeDo from './WhatWeDo'
import Welcome from './Welcome'
import "../../css/MainPage/MainPage.css"

export default function MainPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <Welcome />
          <div className='pt-1 pb-1 bg-white rounded-5'>
            <WhatWeDo />
          </div>
          
        </div>
      </div>
    </div>
  )
}
