import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Login.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import { navNotNeeded } from '../Features/navSlice';
import { useNavigate } from 'react-router';

function Login() {

  const showNav = useSelector((state) => state.navbar.show)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 


  const loginBtn = ()=> {
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Alow-Origin": "*"
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status == "ok"){
        alert("login successful");
        localStorage.setItem("token", JSON.stringify(data.data));
        window.location.href = "/dashboard"
      }
      else{
        setLoginStatus("an error occured")
      }
    });
}

  return (
    <div class='body'>
      {showNav ? (
        <div class='mt-5'>
          <img className='d-block mt-3 m-auto' src={whiteLogo} alt="svg image"/>
          <div class='inputCon col-md-8 col-lg-4 d-block m-auto mt-5'>
            <h5 class='text-center mt-5 fw-bold fs-4'>Login to your account</h5>
            <p class='text-center'>Securely login to your piggyvest</p>
            <h4>{loginStatus}</h4>
            <p class='ms-5'>Email</p>
            <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-2 text-center py-2" onChange={(e)=>(setEmail(e.target.value))} />
            <p class='ms-5 mt-3'>Password</p>
            <input type="text" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-3 text-center py-2" onChange={(e)=>(setPassword(e.target.value))} />
            <button className="btn d-block m-auto px-3 py-2 mt-5 w-75 text-white userLogin fs-5" onClick={loginBtn}>Login</button>
            <p class='text-center mt-1' onClick={()=> navigate('/signup')}>No account yet? Signup</p>
          </div>
        </div>
      ) : ""}
        
    </div>
  )
}

export default Login
