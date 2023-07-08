import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import '../Styles/Signup.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import { neutralUser } from "../Features/navSlice";

function Signup() {
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const showNav = useSelector((state) => state.navbar.show)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(neutralUser())
  }, []) 

  const registerUser = ()=>{
    const url = "http://localhost:5000/signup"
    axios.post(url,{firstname,lastname,email,password}).then((response)=>{
        console.log(response.data)
        setMessage(response.data.message)
        if(response.data.message == "signup successful"){
          window.location.href = "/login"
        }
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <div className="pt-3 body">
      {showNav ? (<div>
        <h4><img className='d-block mt-3 m-auto' src={whiteLogo} alt="svg image"/></h4>
        <h4 className="text-center text-success mt-4">{message}</h4>
        <div class='inputCont col-md-8 col-lg-4 d-block m-auto'>
        <h3 class='text-center text-black mt-5'>Create an account with us today</h3 >
          <input type="text" placeholder="firstname" name="firstname" className="form-control w-75 d-block m-auto mt-5 text-center py-2" onChange={(e)=>(setFirstname(e.target.value))} />
          <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-3 text-center py-2" onChange={(e)=>(setLastname(e.target.value))} />
          <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-3 text-center py-2" onChange={(e)=>(setEmail(e.target.value))} />
          <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-3 text-center py-2" onChange={(e)=>(setPassword(e.target.value))} />
          <button className="btn btn-info px-3 py-2 w-75
          mt-4 fs-5 d-block m-auto" onClick={registerUser}>Create Account</button>
         </div>
      </div>) : ""}
    </div>
  )
}

export default Signup
