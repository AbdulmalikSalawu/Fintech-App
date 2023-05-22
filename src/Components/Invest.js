import React from 'react'
import axios from 'axios'

function Invest() {
    const url = "https://localhost:4500/"
    axios.get(url).then((res) => {
        alert(res)
    }).catch((error)=>{
        console.log(error)
    })

  return (
    <div>
      
    </div>
  )
}

export default Invest
