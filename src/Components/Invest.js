import React from 'react'
import axios from 'axios'
import Footer from './Footer'


function Invest() {
    const url = "https://localhost:4500/"
    axios.get(url).then((res) => {
        alert(res)
    }).catch((error)=>{
        console.log(error)
    })

  return (
    <div class='mt-5 ps-5'>
        <div class='mt-5'></div>
        <Footer />
    </div>
  )
}

export default Invest
