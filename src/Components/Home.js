import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../Styles/Home.css'
import croppedLady from '../Assets/goodsnip.PNG'
import apple from '../Assets/apple-icon.svg'
import android from '../Assets/googleplay.svg'
import shield from '../Assets/sheld.png'
import smallShield from '../Assets/smallShield.png'
import safeLock from '../Assets/safeLock.png'
import flexNaira from '../Assets/flexNaira.png'
import targetSaving from '../Assets/targetSavings.png'
import mobile from '../Assets/mobile.png'

import { motion, spring } from "framer-motion"
import happyMan from '../Assets/happyMan.PNG'
import testify from '../Assets/fallbackImg.png'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { navNeeded } from '../Features/navSlice'
import Nav from './Nav'

function Home() {

  const showNav = useSelector((state) => state.navbar.show)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navNeeded())
  }, []) 

  return (
    <div>
      {showNav ? (
        <div>
          {/* <Nav /> */}
          <div className='row pt-5 mb-5'>
              <div className='col-sm-12 col-md-10 col-lg-6 mt-3 mt-lg-5 ms-5 pt-4'>
                <h1 className='mt-5 ms-5 bigHeading fw-bold'>The Better Way to Save and Invest</h1>
                <p className='pe-lg-5 ms-5 fs-5 mission'>saveWyse helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>


                {/* BUTTON TO TEST FRAMER MOTION */}
                <motion.button

                  initial={{ x: '-50vw' }} 
                  animate={{ x:0 }}
                  // animate={{ scale:1.5 }} 
                  transition={{duration: 1,  type: 'spring', stiffness: 120 }}
                  whileHover={{ scale:1.1 }}
                  onClick={() => navigate('/signup')} className='createAcct ms-lg-5 mt-3'>Create free account

                </motion.button><br/>


                <button className='mt-5 btn btn-white border border-secondary ms-lg-5 px-3 py-2 iphone'><img src={apple} className='apple ms-0' alt='apple' /><Link class='text-dark text-decoration-none' target='_blank' to='https://apps.apple.com/ng/app/piggyvest/id1263117994'>Get on iPhone</Link></button>
                <button className='ms-2 mt-5 btn btn-white border border-secondary px-3 py-2 iphone'><img src={android} className='apple ms-0' alt='apple' /><Link class='text-dark text-decoration-none' to='https://play.google.com/store/apps/details?id=com.piggybankng.piggy'>Get on Android</Link></button>
              </div>
              <div className='col-lg-5 ps-lg-5 pt-5 me-3'>
                  <img src={croppedLady} className='lady mt-5 ms-lg-2' alt='happy lady' />
              </div> 
          </div><br/>

          <div className='col-lg-7 text-center mt-5 mb-5 px-3'>
            <img src={shield} className='me-5 shield mb-4' alt='shield' />
            <h2 className='fs-1 fw-bold security'>Your security is our priority</h2>
            <p className='text-center fs-5 info'>saveWyse uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
            <p className='text-info fs-5 fw-bold learn'><Link to='/' className='text-decoration-none'>Learn more</Link></p>
          </div>

        <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5'>
            <div class="card col-lg-3 border-0">
                <div class="card-body">
                    <p className="fs-1 fw-bold fourways">4 ways to build your savings</p>
                    <p className='fs-5'>Earn 5%-15% when you save with any of these saveWyse plans.</p>
                    <button className='start fs-5 mt-4'><Link class='text-white text-decoration-none' to='signup'>Start Saving</Link></button>
                </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top mb-4" src={smallShield} alt="Card image cap" />
              <div class="card-body">
            <h4 class="card-title fw-bold">Automated Savings</h4>
            <p class="card-text mt-4 fs-5">Build a dedicated savings faster on your terms automatically or manual</p>
                    <Link to='/' className='mt-5 ms-lg-5 text-decoration-none feature'>Piggy Bank</Link>
              </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 bg-light border-0">
                <img class="card-img-top mb-4" src={safeLock} alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title fw-bold">Fixed Savings</h4>
                    <p class="card-text mt-4 fs-5">Lock money away for a fixed duration with no access to it until maturity. It's like having a a custom fixed deposit.</p>
                    <Link to='/' className='mt-5 ms-lg-5 text-decoration-none feature'>Safelock</Link>
                        </div>
                    </div>
                </div>
            </div>

        <div className='row mt-5 pt-3 mb-5'>
          <div className='cardcontainer mt-5'>
          <div class="card col-lg-3 border-0 fff">
              <div class="card-body">
              </div>
          </div>
          <div class="card col-lg-3 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top mb-4" src={targetSaving} alt="Card image cap" />
            <div class="card-body">
          <h4 class="card-title fw-bold">Goal-oriented Savings</h4>
          <p class="card-text mt-4 fs-5">Build a dedicated savings faster on your terms automatically or manual</p>
                  <Link to='/' className='mt-5 ms-lg-5 text-decoration-none feature'>Target Savings</Link>
              </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 bg-light border-0">
                <img class="card-img-top mb-4" src={flexNaira} alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title fw-bold">Flexible savings</h4>
                    <p class="card-text mt-4 fs-5">We provide quality food for you and your loved ones for health.</p>
                    <Link to='/' className='mt-5 ms-lg-5 text-decoration-none feature'>Flex Naira</Link>
                        </div>
                    </div>
                </div>
          </div>

            <div className='row ps-lg-5 mt-5 pt-5 mb-5'>
                <div className='col-lg-4 ms-5 ps-5'>
                    <img src={mobile} alt='mobile' className='mobilee' />
                </div>
                <div className='col-lg-6 pe-5 ms-lg-4'>
                  <button className='mt-5 rounded-pill border-0 px-3 py-1 fs-5'>Up to 25% returns</button>
                  <h1 className='access mt-4 ms-3 ms-lg-0'>Access investment opportunities</h1>
                  <p className='mt-4 fs-5 text-center text-lg-start ms-3 ms-lg-0'>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
                  <p className='text-decoration-none learnMore mt-5 fs-5 text-center text-lg-start'>Learn more about investments</p>
                </div>
            </div>

            <div className='row mt-5 pt-4 mb-5'>
                <div className='col-lg-6 ps-5 pt-5 mt-5 bg-info pe-5 text-white meet'>
                    <h1 className='fw-bold text-white ms-lg-5 saver'>Meet the saver of the month!</h1>
                    <p className='mt-4 ms-lg-5 fs-5'>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.</p>
                    <p class='mt-5 fw-bold mb-5 ms-lg-5'>Meet the Solie's</p>
                </div>
                <div className='col-lg-5 mt-lg-5 bg-info'>
                    <img src={happyMan} alt='happyman' className='happyMan' />
                </div>
            </div>

          <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5 ps-lg-5'>
            <div class="card col-lg-5 ms-lg-5 pt-3 pb-3 bg-light border-0">
              <img class='testify' src={testify} alt='testify' />
              {/* <img class="card-img-top mb-4" src={smallShield} alt="Card image cap" /> */}
              {/* <div class="card-body px-4 text-center text-lg-start">
                <h6 class="card-title fw-bold">Balqeez J.</h6>
                <p class="card-text mt-2">Thank you piggy vest for creating this platform for young entrepreneurs like me, this is my third year with Piggyvest. When I started saving with Piggyvest, I was just a 20 years old girl struggling as a beginner lash tech while in uni. Within these years I have been able to save over 5 million naira from my business. And every time I cash out my money I’ve been able to do tangible things with it. In 2021 I launched my branded lash tray from the money I saved with PiggyVest. I’ve been able to grow myself from 0-100. Recently I opened a beauty salon, all thanks to Piggyvest. I could go on and on 😫😫😫</p>
              </div> */}
            </div>

            <div class="card col-lg-7 border-0">
                <div class="card-body ms-lg-5 ps-lg-5 text-center text-lg-start">
                  <p className="fs-2 fw-bold fourways">4 Million + customers</p>
                  <p className='fs-5 col-lg-9'>Since launching in 2016, over 4,000,000 people have used saveWyse to manage their money better, avoid over-spending and be more accountable..</p>
                  <button className='start fs-5 mt-4'>Create free account</button><br />
                  <div className='btnDuo mt-3'>
                    <button className='mt-4 btn btn-white border border-secondary px-3 py-2 iphone2'><img src={apple} className='apple ms-0' alt='apple' />Get on iPhone</button>
                    <button className='ms-2 mt-4 btn btn-white border border-secondary px-3 py-2 iphone2'><img src={android} className='apple ms-0' alt='apple' />Get on Android</button>
                  </div>
                </div>
              </div>           
            </div>
          </div>

          <Footer />
          </div>
      ) : ""}
      
    </div>
  )
}

export default Home
