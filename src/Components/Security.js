import React, { useEffect } from 'react'
import { navNeeded } from '../Features/navSlice'
import { useDispatch } from 'react-redux'

function Security() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navNeeded())
  }, []) 

  return (
    <div>
      
    </div>
  )
}

export default Security
