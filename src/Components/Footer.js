import React from 'react'
import logo from '../Assets/piggyIcon.svg';
import ndpr from '../Assets/ndprAudit.png'
import facebook from '../Assets/facebook.svg'
import instagram from '../Assets/instagram.svg'
import twitter from '../Assets/twitter.svg'

function Footer() {
  return (
    <div>
      <div class='row pt-5'>
              <div class='col-lg-2 ms-5'>
                <img src={logo} class='col-lg-12' />
                <img src={ndpr} class='col-lg-6 mt-4 border border-secondary ndpr' />
              </div>

                <div class='col-lg-3 ms-5 text-lg-cente'>
                  <ul class='ms-lg-5'>
                    <li class='fw-bold mt-5 mt-lg-0'>Product</li>
                    <li class='mt-2'>Piggybank</li>
                    <li class='mt-1'>Invest</li>
                    <li class='mt-1'>Safelock</li>
                    <li class='mt-1'>Target savings</li>
                    <li class='mt-1'>Flexnaira</li>
                  </ul> 
                </div>
                <div class='col-lg-2 ms-5 ms-lg-0'>
                  <ul>
                    <li class='fw-bold mt-5 mt-lg-0'>Company</li>
                    <li class='mt-1'>About</li>
                    <li class='mt-1'>FAQs</li>
                    <li class='mt-1'>Blog</li>
                  </ul> 
                </div>

              <div class='col-lg-2 ms-5 ms-lg-0'>
                  <ul>
                    <li class='fw-bold mt-5 mt-lg-0'>Legal</li>
                    <li class='mt-1'>Terms</li>
                    <li class='mt-1'>Privacy</li>
                    <li class='mt-1'>Security</li>
                  </ul>
              </div>
              <div class='col-lg-2 ms-5 ms-lg-0 mb-5 pe-2'>
                <div class='socialsCont ms-4 ms-lg-0'>
                  <img class='socials' src={facebook} />
                  <img class='socials ms-3' src={twitter} />
                  <img class='socials ms-3' src={instagram} />
                </div>
                <p className='pe-3 ms-4 mt-3 ms-lg-0'>Tesmont house, Abdulrahmon Okene close, Victoria Island, Lagos, Nigeria</p>
                <p class='ms-4 mt-2 mt-lg-0 ms-lg-0'>contact@piggyvest.com</p>
                <p class='ms-4 mt-2 mt-lg-0 ms-lg-0'>+234 700 933 933 933</p>
              </div>
          </div>

          <p className='w-75 w-lg-50 d-block m-auto text-center mt-2 mb-5'>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
          <p className='text-info fw-bold w-75 w-lg-50 d-block m-auto text-center mt-2 mb-5'>Designed by Malik, 2022.</p>

    </div>
  )
}

export default Footer
