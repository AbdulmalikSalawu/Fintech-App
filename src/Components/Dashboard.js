import React, { useEffect, useState } from 'react'
import { FaBars} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { navNotNeeded } from '../Features/navSlice'
import '../Styles/Dashboard.css'
import whiteLogo from '../Assets/whiteLogo.svg';
function Dashboard() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 

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
    <div>
      {showNav ? (

        <div class='dflex'>

          <div class='sideNav d-none d-lg-block'>
            <button className='nav-btn nav-open-btn px-3 py-1 mt-3'>
              <FaBars />
            </button>
            <img className='d-block m-auto' src={whiteLogo} alt="svg image"/>
          </div>

          <div class='content ms-lg-5 mt-5'>
            <div>
              <span class='text-center fs-2 hi ms-3'><i>Hi {userData.firstname}😀</i></span><br></br>
              {/* <h4 class='text-center'>Welcome to your dashboard!</h4> */}
              <span class='text-center ms-3'>It's Save o'clock</span><br></br>
              <span class='text-center fs-3 ms-3'><i>{userData.email}</i></span>
              <button onClick={logOut} class='btn btn-danger text-white px-3 py-2 mt-4 d-block m-auto'>Sign Out</button>
            </div>

            <div className='row mt-5 pt-3 mb-5'>
              <div className='cardcontainer text-white'>
              <div class="card card1 col-lg-3 border-0">
                  <div class="card-body">
                      <p className="fs-5">Total Savings</p>
                      <p className='fs-4'>$5,000.00</p>
                  </div>
              </div>
              <div class="card card2 col-lg-3 ms-lg-3 pt-3 border-0">
                <div class="card-body">
              <p class="card-title fw-bold fs-5">Total Investments</p>
              <p class="mt-4 fs-4">$17,286.00</p>
                </div>
              </div>
              <div class="card card3 col-lg-3 ms-lg-3 pt-3 border-0">
                <div class="card-body">
                  <p class="card-title fw-bold fs-5">Flex Dollar</p>
                  <p class="mt-4 fs-4">$0.00</p>
                </div>
              </div>
              </div>
              </div>

          </div>
        
        </div>
      ) : ""}
      
    </div>
  )
}

export default Dashboard
