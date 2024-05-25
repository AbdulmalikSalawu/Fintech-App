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
import eyeslash from '../Assets/eye-slash.svg'
import person from '../Assets/file-person-fill.svg';
import bank from '../Assets/bank2.svg';
import arrow from '../Assets/arrow-up-right-circle.svg'
import wifi from '../Assets/wifi.svg'
import gaming from '../Assets/controller.svg'
import tv from '../Assets/tv.svg'
import piggy from '../Assets/piggy-bank-fill.svg'
// import loan from '../Assets/piggyIcon.svg'
import health from '../Assets/hospital.svg'
import more from '../Assets/three-dots.svg'
// import { paywithpaystack } from '../../../SERVER/controllers/usersController';

function Dashboard() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 

  const navigate = useNavigate();
  const [userData,setUserData] = useState("")
  const [file, setFile] = useState("")
  const showNav = useSelector((state) => state.navbar.show)
  const [showBalance, setShowBalance] = useState(false)
  const [email, setEmail] = useState("")
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
            setEmail(data.data.email)
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
      const handleToggle = () => {
        setShowBalance(prevShowBalance => !prevShowBalance);
      };

      const paywithpaystack = () => {
          const totalCost = 90000
          axios.post(`http://localhost:5000/paywithpaystack`,{totalCost,email})
          // axios.post(`https://abdulmalikyinka.onrender.com/paywithpaystack`,{totalCost,email})
          .then((res)=>{
                let data = res.data
                window.location.href=data.data.authorization_url
                //CLEAR THE CART PAGE HERE !!
          })
      }

  return (
    <div>
      {showNav ? (

        <div class='dflex mainDiv'>

          <div class='section1 pt-2'>
            <img onClick={()=>navigate('/updatedetails', {state:userData})} class="d-block m-auto logo ms-2" src = {userData.newImage} alt="profile pic" />
            <span class='text-center fs-4  mt-2'><i>Hi, {userData.firstname}</i></span>
            <img class="allIcon" src = {headset} alt="headset" />
            <img class="allIcon" src = {scan} alt="scan" />
            <img class="allIcon me-2" src = {bell} alt="bell" />
          </div>
          <p class='ms-2'>Acc no: {userData.phoneNumber}</p>

          <div class='section2 d-block m-auto mt-4 text-white'>
            <div class='balancemenu'>
              <div>
                <small class='smallfont'>Available Balance</small>
                <span>
                  <button class='border-0 toggle' onClick={handleToggle}>
                    {showBalance ? <img class='eye' src={eyeslash} /> : <img class='eye' src={eye} />}
                  </button>
                </span>
              </div>
              <div>
                <small class='ms-4 smallfont'>Transaction History</small>
              </div>
            </div>
            <div class='balancemenu2'>
            <p class='mt-3 fs-3 bal'>
              {showBalance ? ("8674.09") : ("****")}
            </p>
            
              <button onClick={paywithpaystack} class='addMoney px-3 py-2 rounded-pill fw-bold'><small>+ Add Money</small></button>
            </div>
          </div>

          <div class='section3 mt-3 pt-2 pb-2'>
            <div>
              <img class="person" src = {person} alt="scan" /><br />
              <small class='ms-4 smallfont'>To SPay</small>
            </div>
            <div>
              <img class="bank" src = {bank} alt="scan" /><br />
              <small class='ms-4 smallfont'>To Bank</small>
            </div>
            <div>
              <img class="arrow me-3" src = {arrow} alt="scan" /><br />
              <small class='ms-4 smallfont'>Withdraw</small>
            </div>
          </div>

          <div class='section4 mt-3 pt-2 pb-2'>
            <div>
              <img class="sec4icons" src = {wifi} alt="scan" /><br />
              <small class='ms-4 smallfont'>Airtime</small>
            </div>
            <div>
              <img class="sec4icons" src = {bank} alt="scan" /><br />
              <small class='ms-4 smallfont'>Data</small>
            </div>
            <div>
              <img class="sec4icons me-3" src = {gaming} alt="scan" /><br />
              <small class='ms-4 smallfont'>Betting</small>
            </div>
            <div>
              <img class="sec4icons me-3" src = {tv} alt="scan" /><br />
              <small class='ms-4 smallfont'>TV</small>
            </div>

            <div>
              <img class="sec4icons" src = {piggy} alt="scan" /><br />
              <small class='ms-4 smallfont'>Save</small>
            </div>
            <div>
              <img class="sec4icons" src = {bank} alt="scan" /><br />
              <small class='ms-4 smallfont text-center'>Loan</small>
            </div>
            <div>
              <img class="sec4icons me-3" src = {health} alt="scan" /><br />
              <small class='ms-4 smallfont'>Health</small>
            </div>
            <div>
              <img class="sec4icons me-3" src = {more} alt="scan" /><br />
              <small class='ms-4 smallfont'>More</small>
            </div>
          </div>

          {/* <div class='sideNav d-none d-lg-block'>
            <button className='nav-btn nav-open-btn px-3 py-1 mt-3'>
              <FaBars />
            </button>
            <img className='d-block m-auto' src={whiteLogo} alt="svg image"/>
          </div> */}

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
