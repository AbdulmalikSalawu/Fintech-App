import React from 'react'
import '../Styles/Stories.css'
import Footer from './Footer'
import happyTeam from '../Assets/happyTeam2.PNG'
import juliana from '../Assets/juliana.jpeg'
// import balqeez from '../Assets/balqeez.jpeg'
import apple from '../Assets/apple-icon.svg'
import android from '../Assets/googleplay.svg'
import smilingTeam from '../Assets/smilingTeam.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Stories() {

  const showNav = useSelector((state) => state.navbar.show)
  const navigate = useNavigate()

  return (
    <div>
      {showNav ? (
        <div>
          <div className='row pt-5 mb-5'>
              <div className='col-sm-12 col-md-10 col-lg-5 ps-5 ms-4 ms-lg-0 mt-5 pt-4'>
                <h1 className='mt-5 ms-4 ms-lg-5 bigHeading fw-bold'>Loved by our Customers💙</h1>
                <p className='pe-lg-5 ms-4 ms-lg-5 fs-5 aim'>Piggy Vest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
                <button onClick={() => navigate('/signup')} className='createAcct ms-lg-5 mt-3'>Add your story</button><br/>
              </div>
              <div className='col-lg-7 pt-5 bg-dange'>
                <img src={happyTeam} className='happyTeam mt-5' alt='happy lady' />
              </div>
          </div><br/>

        <div className='mt-5'>
          <h1 className='fs-1 fw-bold text-center'>Recently verified customer stories</h1>
        </div>

        <div>
        <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5'>
            <div class="card col-lg-3 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top mb-4" src={juliana} alt="Card image cap" />
              <div class="card-body">
              <h4 class="card-title fw-bold">Balqeez J.</h4>
              <p class="card-text mt-4 fs-5">Thank you piggyVest for creating a platform for young entrepreneurs like me.</p>
              </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 pb-3 bg-light border-0">
              <img class="card-img-top mb-4" src={juliana} alt="Card image cap" />
              <div class="card-body">
            <h4 class="card-title fw-bold">Juliana M</h4>
            <p class="card-text mt-4 fs-5">piggyVest has really helped me in the course of my business. It has been amazing saving money with them.</p>
            </div>
            </div>
            <div class="card col-lg-3 ms-lg-3 pt-3 bg-light border-0">
                <img class="card-img-top mb-4" src={juliana} alt="Card image cap" />
                <div class="card-body">
                    <h4 class="card-title fw-bold">Favour Nnena</h4>
                    <p class="card-text mt-4 fs-5">piggyVest has helped me with discipline principles for saving. I am grateful to come this far, thanks</p>
                </div>
                </div>
              </div>
            </div>
        </div>

        <div className='row mt-5 pt-3 mb-5'>
            <div className='cardcontainer mt-5 ps-lg-5'>
            <div class="card col-lg-5 ms-lg-5 pt-3 pb-3 border-0">
                <img src={smilingTeam} className='w-75' alt='' />
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
      ) : ""}
    </div>
  )
}


export default Stories
