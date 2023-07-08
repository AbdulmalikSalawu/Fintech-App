import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import investImg from '../Assets/invest.PNG'
import smallShield from '../Assets/smallShield.png'
import safeLock from '../Assets/safeLock.png'
import greenlady from '../Assets/greenLady.PNG'
import smallInvestImg from '../Assets/smallInvestPic.PNG'
import note1 from '../Assets/note1.jpg'
import note2 from '../Assets/note2.jpg'
import note3 from '../Assets/note3.jpg'
import apple from '../Assets/apple-icon.svg'
import android from '../Assets/googleplay.svg'
import '../Styles/Invest.css'
import Nav from './Nav'

function Invest() {
    const url = "http://localhost:5000/testApi"
    const showNav = useSelector((state) => state.navbar.show)
    const navigate = useNavigate()

    const callOnApi = ()=>{
      axios.get(url).then((res)=>{
          console.log(res)
      }).catch((error)=>{
        console.log(error)
      })
   }

    const getApi = () => {
      axios.get(url).then((res) => {
        console.log(res)
    })
    }
    
  return (
    <div class='mt-5'>
      {showNav ? (
        <div>
          <Nav />
        <div class='mt-5 row'>
          <div className='col-md-10 col-lg-6 mt-3 mt-lg-5 ms-5 pt-lg-5'>
              <h1 class='mt-lg-5 pt-5 ms-5 bigHeading fw-bold'>Invest on the go.</h1>
              <p class='pe-lg-5 mt-3 ms-5 fs-5 mission'>Invest securely and confidently on the go.</p>
              <p class='pe-lg-5 ms-5 fs-5 mission2'>Up to 25% returns, 6-12 month duration.</p>
              <button onClick={() => navigate('/signup')} className='startSaving ms-lg-5 mt-3 btn-purple'>Start saving today</button><br/>
              </div>
              <div className='col-lg-5 ps-lg-1 pt-3 me-5'>
                  <img src={investImg} className='investPic mt-5 ms-lg-5 d-none d-lg-block' alt='invest' />
                  <img src={smallInvestImg} className='investPic mt-5 d-lg-none' alt='invest' />
          </div> 

        <div class='mt-5'>
          <h2 class='text-center col-lg-8 fw-bold d-block m-auto mt-5 px-3'>Simple investments with great returns</h2>
          <h5 class='text-center col-lg-8 d-block m-auto mt-2 px-3'>Investments are made readily accessible to everyone</h5>
        </div>

        <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5'>
            <div class="card col-lg-3 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top mb-4" src={smallShield} alt="Card image cap" />
              <div class="card-body">
              <h4 class="card-title fw-bold">Investments simplified</h4>
              <p class="card-text mt-4 fs-5">With minimum investments starting as low as N5,000, investment is no longer out of reach. Everyone is welcome.</p>
              </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top mb-4" src={smallShield} alt="Card image cap" />
              <div class="card-body">
              <h4 class="card-title fw-bold">Invest confidently</h4>
              <p class="card-text mt-4 fs-5">All listed investments are properly due diligenced and highly secured opportunities.</p>
            </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 bg-light border-0">
                <img class="card-img-top mb-4" src={safeLock} alt="Card image cap" />
                <div class="card-body">
                <h4 class="card-title fw-bold">Diversify your portfolio</h4>
                <p class="card-text mt-4 fs-5">Invest in various industries such as fixed income instruments, agriculture, transportation, etc.</p>
              </div>
              </div>
            </div>
            </div>

            <div className='row mt-5 pt-4 mb-5 textAndImg'>
                <div className='col-lg-6 ps-5 pt-5 mt-5 pe-5 text-white meet2'>
                    <h1 className='fw-bold text-white ms-lg-5 saver'>We’ve made it easier for anyone to get started.</h1>
                    <p className='mt-4 ms-lg-5 fs-5'>With as little as NGN5000, you can now access pre-vetted low-medium risk primary and secondary investment opportunities. No hidden fees/charges. Thorough due diligence and pre-vetting on all investments are carried out for maximum safety.</p>
                </div>
                <div className='col-lg-5 mt-lg-5 meet2'>
                    <img src={greenlady} alt='happyLady' className='happyMan' />
                </div>
            </div>

            <h1 class='text-center text-black col-lg-8 fw-bold d-block m-auto mt-5 mb-5 px-3'>Recent Opportunities on Investify</h1>

          <div className='row mt-5 mb-5'>
            <div className='cardcontainer mt-1'>
            <div class="card col-lg-3 ms-4 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top notes" src={note1} alt="Card image cap" />
              <div class="card-body">
                <h4 class="card-title fw-bold">Corporate debt note VI</h4>
                <p class="card-text mt-4 fs-5">N5000 per unit.</p>
                <button class='rounded-pill px-4 py-2 text-danger border-0'>Sold out</button>
              </div>
            </div>
            <div class="card col-lg-3 ms-4 ms-lg-3 pt-3 pb-3 bg-light border-0">
                <img class="card-img-top notes" src={note2} alt="Card image cap" />
                <div class="card-body">
                <h4 class="card-title fw-bold">Corporate debt note V</h4>
                <p class="card-text mt-4 fs-5">N5000 per unit.</p>
              <button class='rounded-pill px-4 py-2 text-danger border-0'>Sold out</button>
            </div>
            </div>
            <div class="card col-lg-3 ms-4 ms-lg-3 pt-3 bg-light border-0">
                <img class="card-img-top notes" src={note3} alt="Card image cap" />
                <div class="card-body">
                <h4 class="card-title fw-bold">Corporate debt note IV</h4>
                <p class="card-text mt-4 fs-5">N5000 per unit.</p>
                <button class='rounded-pill px-4 py-2 text-danger border-0'>Sold out</button>
              </div>
              </div>
            </div>
          </div>

          <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5 ps-lg-5'>
            <div class="card col-lg-5 ms-lg-5 pt-3 pb-3 bg-light border-0">
              <div class="card-body px-4 text-center text-lg-start">
                <h6 class="card-title fw-bold">Balqeez J.</h6>
                <p class="card-text mt-2">Thank you piggy vest for creating this platform for young entrepreneurs like me, this is my third year with Piggyvest. When I started saving with Piggyvest, I was just a 20 years old girl struggling as a beginner lash tech while in uni. Within these years I have been able to save over 5 million naira from my business. And every time I cash out my money I’ve been able to do tangible things with it. In 2021 I launched my branded lash tray from the money I saved with PiggyVest. I’ve been able to grow myself from 0-100. Recently I opened a beauty salon, all thanks to Piggyvest. I could go on and on 😫😫😫</p>
              </div>
            </div>

            <div class="card col-lg-7 border-0">
                <div class="card-body ms-lg-5 ps-lg-5 text-center text-lg-start">
                  <p className="fs-2 fw-bold fourways">4 Million + customers</p>
                  <p className='fs-5 col-lg-9'>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable..</p>
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
        </div>
      ) : ""}
    </div>
  )
}

export default Invest
