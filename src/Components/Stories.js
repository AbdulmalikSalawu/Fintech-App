import React from 'react'
import '../Styles/Stories.css'
import Footer from './Footer'
import happyTeam from '../Assets/happyTeam.png'
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
              <div className='col-sm-12 col-md-10 col-lg-5 mt-5 ms-5 pt-4'>
                <h1 className='mt-5 ms-5 bigHeading fw-bold'>Loved by our Customers</h1>
                <p className='pe-lg-5 ms-5 fs-5 mission'>Piggy Vest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
                <button onClick={() => navigate('/signup')} className='createAcct ms-lg-5 mt-3'>Add your story</button><br/>
              </div>
              <div className='col-lg-6 pt-5 me-5 bg-dange'>
                  <img src={happyTeam} className='happyTeam mt-5' alt='happy lady' />
              </div>
          </div><br/>

          <Footer />
        </div>
      ) : ""}
    </div>
  )
}

export default Stories
