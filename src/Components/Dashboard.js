import React, { useEffect, useState } from 'react'
import { FaBars} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { navNotNeeded } from '../Features/navSlice'
import '../Styles/Dashboard.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import headset from '../Assets/headset.svg';
import scan from '../Assets/upc-scan.svg';
import bell from '../Assets/bell.svg';
import eye from '../Assets/eye.svg'
import person from '../Assets/file-person-fill.svg';
import bank from '../Assets/bank2.svg';
import arrow from '../Assets/arrow-up-right-circle.svg'

function Dashboard() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 

  const navigate = useNavigate();
  const [userData,setUserData] = useState("")
  const [file, setFile] = useState("")
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
        // fetch("http://localhost:5000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token:localStorage.getItem("token"),
          }),
        })
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data, "userData")
            setUserData(data.data)
            if (data.data=="token expired") {
              alert("session expired, login again");
              localStorage.clear();
              navigate('/login')
            }
          })
      }, [])

      const logOut =()=> {
        localStorage.clear();
        navigate('/login')
      }

      //Converting images to base 64
      const [newImage, setNewImage] = useState("")
      const getFile = (e)=>{
        const myFile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(myFile);
        reader.onload = ()=>{
          setFile(reader.result)
        }
      }

      //Uploading images to the cloudinary/POST request
      const upload = ()=>{
        const url = "https://abdulmalikyinka.onrender.com/saveFile"
        const userData = {file}
        axios.post(url,userData).then((response)=>{
          alert(response.data.message)
          setNewImage(response.data.image)
        })
        
        .catch((error)=>{
            console.log(error)
        })
      }

  return (
    <div>
      {showNav ? (

        <div class='dflex mainDiv'>

          <div class='section1 pt-2'>
            <img class="d-block m-auto logo ms-2" src = {userData.newImage} alt="profile pic" />
            <span class='text-center fs-3  mt-2'><i>Hi, {userData.firstname}</i></span>
            <img class="allIcon" src = {headset} alt="headset" />
            <img class="allIcon" src = {scan} alt="scan" />
            <img class="allIcon me-2" src = {bell} alt="bell" />
          </div>

          <div class='section2 d-block m-auto mt-4 text-white'>
            <div class='balancemenu'>
              <div>
                <small>Available Balance</small>
                <span><img class='eye' src={eye} /></span>
              </div>
              <div>
                <small class='ms-4'>Transaction History</small>
              </div>
            </div>
            <div class='balancemenu2'>
              <p class='mt-3 fs-3'>8,627.05</p>
              <button class='addMoney px-3 py-2 rounded-pill fw-bold'><small>+ Add Money</small></button>
            </div>
          </div>

          <div class='section3 mt-5 pt-3'>
            <img class="person" src = {person} alt="scan" />
            <img class="bank" src = {bank} alt="scan" />
            <img class="arrow me-3" src = {arrow} alt="scan" />
          </div>

          <div class='sideNav d-none d-lg-block'>
            <button className='nav-btn nav-open-btn px-3 py-1 mt-3'>
              <FaBars />
            </button>
            <img className='d-block m-auto' src={whiteLogo} alt="svg image"/>
          </div>

          <div class='content ms-lg-5 mt-5'>
            <div>
              <span class='text-center fs-3 ms-3'><i>{userData.email}</i></span><br></br>
              <span class='text-center ms-3'>It's Save o'clock</span><br></br>
              <button onClick={logOut} class='btn btn-danger text-white px-3 py-2 mt-4 d-block m-auto'>Sign Out</button>

              {/* DIRECTING USERS TO EDIT THEIR DETAILS */}
              {/* <p><FontAwesomeIcon icon="fa-regular fa-pen-to-square" onClick={()=>navigate("/updatedetails", {state:userData})} /></p> */}
              <p className='f-2 ms-2 text-center fw-bold mt-4' onClick={()=>navigate('/updatedetails', {state:userData})}><button class='edit px-3 py-2 text-white'>EDIT details ✏🖍</button></p>
              {/* <h3>Work in progress...</h3> */}
            </div>

            {/* <div className='row mt-5 pt-3 mb-5'>
              <div className='cardcontainer text-white'>
              <div class="card card1 col-lg-3 border-0 dcard">
                  <div class="card-body">
                      <p className="fs-5">Total Balance</p>
                      <p className='fs-4'>$50,000.00</p>
                  </div>
              </div>
              <div class="card card2 col-lg-3 ms-lg-3 pt-3 border-0 dcard">
                <div class="card-body">
              <p class="card-title fw-bold fs-5">Total Investments</p>
              <p class="mt-4 fs-4">$17,286.00</p>
                </div>
              </div>
              <div class="card card3 col-lg-3 ms-lg-3 pt-3 border-0 dcard">
                <div class="card-body">
                  <p class="card-title fw-bold fs-5">Flex Dollar</p>
                  <p class="mt-4 fs-4">$0.00</p>
                </div>
              </div>
              </div>
              </div> */}

          </div>
        
        </div>
      ) : ""}
      
    </div>
  )
}

export default Dashboard
