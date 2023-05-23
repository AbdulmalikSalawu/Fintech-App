import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Footer'

function Resources() {

  const showNav = useSelector((state) => state.navbar.show)

  return (
    <div className='pt-5'>
      {showNav ? (
        <div>
          <Footer />
        </div>
      ) : ""}
    </div>
  )
}

export default Resources
