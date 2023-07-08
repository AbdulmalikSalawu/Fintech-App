import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Login() {

  const showNav = useSelector((state) => state.navbar.show)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loginStatus, setLoginStatus] = useState("")

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
    <div>
      {showNav ? (
        <div class='mt-5'>
          <h3 class='text-center text-black mt-5'>Login to your account</h3>
          <h4>{loginStatus}</h4>
          <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-4 text-center" onChange={(e)=>(setEmail(e.target.value))} />
          <input type="text" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center" onChange={(e)=>(setPassword(e.target.value))} />
          <button className="btn btn-success d-block m-auto px-3 py-1 mt-3 w-75" onClick={loginBtn}>Login</button>
        </div>
      ) : ""}
        
    </div>
  )
}

export default Login
