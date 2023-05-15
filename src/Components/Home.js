import React from 'react'
import {useSelector} from 'react-redux'
import '../Styles/Home.css'
import croppedLady from '../Assets/goodsnip.PNG'
import apple from '../Assets/apple-icon.svg'
import android from '../Assets/googleplay.svg'
import shield from '../Assets/sheld.png'
import { Link } from 'react-router-dom'

function Home() {

  const showNav = useSelector((state) => state.navbar.show)

  return (
    <div>
      {showNav ? (
        <div>
          <div className='row pt-5 mb-5'>
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

          <div className='col-lg-7 text-center mt-5 mb-5 px-3'>
            <img src={shield} className='me-5 shield mb-4' alt='shield' />
            <h2 className='fs-1 fw-bold'>Your security is our priority</h2>
            <p className='text-center fs-5 info'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
            <p className='text-info fs-5 fw-bold learn'><Link to='/' className='text-decoration-none'>Learn more</Link></p>
          </div>

        <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5'>
            <div class="card col-lg-3 border-0">
                <div class="card-body">
                    <p className="fs-1 fw-bold fourways">4 ways to build your savings</p>
                    <p className='fs-5'>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
                    <button className='start fs-5'>Start saving</button>
                </div>
            </div>
            <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 pt-3 bg-light border-0">
              {/* <img class="card-img-top" src={card2} alt="Card image cap" /> */}
          <div class="card-body">
            <h4 class="card-title text-center fw-bold">Automated Savings</h4>
            <p class="card-text text-center mt-4">Build a dedicated savings faster on your terms automatically or manua</p>
                    <Link to='/' className='mt-5 ms-lg-5 text-decoration-none feature'>Piggy Bank</Link>
                </div>
            </div>
            <div class="card col-md-4 col-lg-3 ms-md-2 ms-lg-3 pt-3 bg-light border-0">
                {/* <img class="card-img-top" src={card3} alt="Card image cap" /> */}
                <div class="card-body">
                    <h4 class="card-title text-center fw-bold">100% quality</h4>
                    <p class="card-text text-center">We provide quality food for you and your loved ones for health.</p>
                    <Link to='/' className='mt-5 ms-lg-5 text-decoration-none feature'>Piggy Bank</Link>
                        </div>
                    </div>
                </div>
            </div>

          </div>
      ) : ""}
      
    </div>
  )
}

export default Home
