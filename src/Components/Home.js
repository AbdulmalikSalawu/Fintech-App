import React from 'react'
import {useSelector} from 'react-redux'
import '../Styles/Home.css'
import croppedLady from '../Assets/goodsnip.PNG'
import apple from '../Assets/apple-icon.svg'
import android from '../Assets/googleplay.svg'

function Home() {

  const showNav = useSelector((state) => state.navbar.show)

  return (
    <div>
      {showNav ? (
        <div>
          <div className='row pt-5'>
              <div className='col-sm-12 col-md-10 col-lg-6 mt-5 ms-5 pt-4'>
                <h1 className='mt-5 ms-5'>The Better Way to Save and Invest</h1>
                <p className='pe-lg-5 ms-5 fs-5 mission'>Piggy Vest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
                <button className='createAcct ms-lg-5 mt-3'>Create free account</button><br/>
                <button className='mt-5 btn btn-white border border-secondary ms-lg-5 px-3 py-2 iphone'><img src={apple} className='apple ms-0' alt='apple' />Get on iPhone</button>
                <button className='ms-2 mt-5 btn btn-white border border-secondary px-3 py-2 iphone'><img src={android} className='apple ms-0' alt='apple' />Get on Android</button>
              </div>
              <div className='col-lg-5 ps-lg-5 pt-5 me-3'>
                  <img src={croppedLady} className='lady mt-5 ms-lg-2' alt='happy lady' />
              </div> 
          </div><br/>
          <div className='col-lg-7 text-center mt-5'>
              <h2 className='fs-1 fw-bold'>Your security is our priority</h2>
              <p className='text-center fs-5'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
          </div>

          </div>
      ) : ""}
      
    </div>
  )
}

export default Home
