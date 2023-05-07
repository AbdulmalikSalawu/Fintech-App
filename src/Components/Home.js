import React from 'react'
import {useSelector} from 'react-redux'
import '../Styles/Home.css'
import mainfood from '../Assets/rect.png'
import finelady from '../Assets/fineLady.png'

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
                <button className='mt-5 btn btn-white border border-secondary ms-lg-5 px-3 py-2 iphone'>Get on iPhone</button>
                <button className='ms-2 mt-5 btn btn-white border border-secondary px-3 py-2 iphone'>Get on android</button>
              </div>
              <div className='col-lg-5 ps-lg-5 pt-5 ms-5 d-sm-none d-lg-block'>
                  <img src={mainfood} className='recta mt-5 ms-5' alt='rectangle' />
                  <img src={finelady} className='lady ms-lg-5 mt-5 ms-5' alt='happy lady' />
              </div> 
          </div><br/>
          <div className='pt-5 ms-5 d-md-block d-lg-none'>
                  <img src={mainfood} className='recta mt-5 ms-5' alt='rectangle' />
                  <img src={finelady} className='lady ms-lg-5 mt-5 ms-5' alt='happy lady' />
          </div> 
          </div>
      ) : ""}
      
    </div>
  )
}

export default Home
