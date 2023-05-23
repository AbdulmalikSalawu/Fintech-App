import React from 'react'
import axios from 'axios'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import investImg from '../Assets/invest.PNG'
import smallInvestImg from '../Assets/smallInvestPic.PNG'
import '../Styles/Invest.css'

function Invest() {
    const url = "https://localhost:4500/"
    const showNav = useSelector((state) => state.navbar.show)
    const navigate = useNavigate()

    const get = () => {
      axios.get(url).then((res) => {
        alert(res)
    }).catch((error)=>{
        console.log(error)
    })
    }
    
  return (

    <div class='mt-5'>
      {showNav ? (
        <div class='mt-5 row'>
          <div className='col-md-10 col-lg-6 mt-3 mt-lg-5 ms-5 pt-lg-5'>
              <h1 class='mt-lg-5 pt-5 ms-5 bigHeading fw-bold'>Invest on the go.</h1>
              <p class='pe-lg-5 mt-3 ms-5 fs-5 mission'>Invest securely and confidently on the go.</p>
              <p class='pe-lg-5 ms-5 fs-5 mission'>Up to 25% returns, 6-12 month duration.</p>
              <button onClick={() => navigate('/signup')} className='startSaving ms-lg-5 mt-3 btn-purple'>Start saving today</button><br/>
              </div>
              <div className='col-lg-5 ps-lg-1 pt-3 me-5'>
                  <img src={investImg} className='investPic mt-5 ms-lg-5 d-none d-lg-block' alt='invest' />
                  <img src={smallInvestImg} className='investPic mt-5 ms-lg-5 d-lg-none' alt='invest' />
              </div> 
          <Footer />
          <button onClick={get}>GET</button>
        </div>
      ) : ""}
    </div>
  )
}

export default Invest
