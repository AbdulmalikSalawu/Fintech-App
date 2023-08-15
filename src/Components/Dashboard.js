import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Dashboard() {

  const navigate = useNavigate();
  const [userData,setUserData] = useState("")
  const showNav = useSelector((state) => state.navbar.show)
    
      //AXIOS method
        // const url = "http://localhost:5000/userData";
        // // JSON.stringify({
        //   token:window.localStorage.getItem("token")
        // // })
        // axios.post(url)
        // .then((res)=>res.json())
        // .then((data)=> {
        //     console.log(data, "userData")
        //     setUserData(data.data)
        //   })
        // .catch((error)=>{
        //   console.log(error)
        // })

      //FETCH method
      useEffect(() => {
        fetch("https://abdulmalikyinka.onrender.com/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token:localStorage.getItem("token"),
          }),
        })
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data, "userData")
            setUserData(data.data)
          })
      }, [])

      const logOut =()=> {
        localStorage.clear();
        navigate('/login')
      }

  return (
    <div class='mt-5 pt-5'>
      {showNav ? (
        <div>
          <h2 class='text-center'>Welcome to your dashboard!</h2>
          <h1 className='text-center text-success'>{userData.firstname}</h1>
          <h1 className='text-center text-success'>{userData.email}</h1>
          <button onClick={logOut} class='btn btn-danger text-white px-3 py-2 mt-4 d-block m-auto'>Sign Out</button>
          </div>
      ) : ""}
      
    </div>
  )
}

export default Dashboard
