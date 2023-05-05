import React from 'react'
import {useSelector} from 'react-redux'
import '../Styles/Home.css'

function Home() {

  const showNav = useSelector((state) => state.navbar.show)

  return (
    <div>
      {showNav ? (
        <div className='row pt-5'>
            <div className='col-sm-12 col-md-10 col-lg-6 mt-5 ms-5'>
              <h1 className='mt-5 ms-5'>The Better Way to Save and Invest</h1>
              <p className='pe-lg-5 ms-5 fs-5'>Piggy Vest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
              <button className='createAcct ms-5 mt-3'>Create free account</button>
            </div>
            <div className='col-lg-5'>
                {/* <img className='mainfood ms-lg-5' alt='jollof picture' /> */}
            </div>
          </div>
      ) : ""}
      
    </div>
  )
}

export default Home
