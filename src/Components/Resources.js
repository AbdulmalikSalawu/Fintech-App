import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import { navNeeded } from '../Features/navSlice'

function Resources() {

  const showNav = useSelector((state) => state.navbar.show)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navNeeded())
  }, []) 

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
