import React from 'react'
import Footer from './Footer'
import { useSelector } from 'react-redux'

function Stories() {

  const showNav = useSelector((state) => state.navbar.show)

  return (
    <div>
      {showNav ? (
        <div>
          <Footer />
        </div>
      ) : ""}
    </div>
  )
}

export default Stories
