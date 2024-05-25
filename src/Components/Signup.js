import React, { useEffect, useState } from "react"
import app from "./firebaseConfig"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import logo from '../Assets/icon.png';
import {useFormik} from 'formik';
import {signupSchema} from '../Schemas/schema';
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import '../Styles/Signup.css'
// import whiteLogo from '../Assets/whiteLogo.svg';
import { navNotNeeded } from "../Features/navSlice";
import { useNavigate } from "react-router";

function Signup() {
  const auth = getAuth(app);
  const [message,setMessage] = useState("")
  const [file, setFile] = useState("")
  const [otp, setOtp] = useState("")
  const [otpInput,setOtpInput] = useState(false)
  const [verifyButton, setVerifyButton] = useState(false)
  const [verifyOtp, setVerifyOtp] = useState(false)
  const [success, setShowSuccess] = useState(false)
  const [wrongOtp, setWrongOtp] = useState(false)
  const showNav = useSelector((state) => state.navbar.show)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navNotNeeded())
  }, [])

  //Converting images to base 64
  const [newImage, setNewImage] = useState("")
  const [uploadStatus, setUploadStatus] = useState("")
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
     if(file == ""){
      setUploadStatus("(🤳 select an image)")
     } else {
      setUploadStatus("(uploading)")
     }
    const url = "https://abdulmalikyinka.onrender.com/saveFile"
    const userData = {file}
    axios.post(url,userData).then((response)=>{
      setNewImage(response.data.image)
      setUploadStatus("(image added ✔)")
     })
     .catch((error)=>{
        console.log(error)
     })
   }

  const onSubmit = async (values, actions) => {
    if(success === true){
      console.log(values);
      const firstname = values.firstname;
      const lastname = values.lastname;
      const phoneNumber = values.phoneNumber;
      const email = values.email;
      const password = values.password;
      // new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage("creating account...")
      // const url = "http://localhost:5000/signup"
      const url = "https://abdulmalikyinka.onrender.com/signup"
      try {
        await axios.post(url,{firstname,lastname,phoneNumber,email,password,newImage}).then((response)=>{
            console.log(response.data)
            setMessage(response.data.message)
            if(response.data.message == "Signup successful"){
              navigate('/login')
            }
            actions.resetForm();
        }).catch((error)=>{
            console.log(error)
        }) }
      catch(error){
        console.log(error)
      }
    } else{
      setMessage("verify your number")
    }
    }
  
  const {values, errors, touched, isSubmitting,  handleBlur, handleChange, handleSubmit} = 
  useFormik({
    initialValues: {
        firstname: "",
        lastname: "",
        phoneNumber: "",
        email: "",
        password: ""
    },
    validationSchema: signupSchema,
    onSubmit,
  })

  const checkMobile = () => {
    if(values.phoneNumber.length==9){
      setVerifyButton(true)
  }
}

//SENDING OTP TO USERS' NUMBER
const onSignInSubmit = () => {
  onCaptchVerify();
  const phoneNumber = "+234" + values.phoneNumber;
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    alert("otp sent")
    // ...
  }).catch((error) => {
    // Error; SMS not sent
    // ...
  });
}

  const onCaptchVerify = () => {
      setOtpInput(true)
      setVerifyButton(false)
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': (response) => {
            onSignInSubmit()
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback': () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
  }

  //CONFIRMING THE OTP INPUTTED
  const verifyCode = () => {
    window.confirmationResult.confirm(otp)
    .then((result) => {
      const user = result.user;
      console.log(user)
      // alert("verification done");
      setOtpInput(false);
      setVerifyOtp(false)
      setShowSuccess(true)
      setWrongOtp(false)
    }).catch((error) => {
      alert("invalid OTP")
      setWrongOtp(true)
    })
  }

  const checkOtp = () => {
    if(otp.length==5){
      setVerifyOtp(true)
  }
}

  return (
    <div className="pt-3 body">
      {showNav ? (<div>
        {/* <h4><img className='d-block mt-3 m-auto' src={whiteLogo} alt="svg image"/></h4> */}
        <span className='toplogo'><img class="logo mt-3 me-1" src={logo} alt="svg image"/><span class="brandname fw-bold text-white ms-2">saveWyse</span></span>
        <div class='inputCont mt-3 col-md-8 col-lg-4 d-block m-auto mb-5'>
          <h6 className={(message == "Signup successful" || "creating account...")? "text-center text-success fs-3 fw-bold mt-2" : "text-center text-danger fs-3 fw-bold"}>{message}</h6>
          <h5 class='text-center fw-bold mt-4 px-3 fs-2'>Create an account with us today</h5>  
          <input type="text" name='firstname' placeholder="firstname" className="form-control firstname w-75 d-block m-auto mt-3 text-center py-2 " value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
          {errors.firstname && touched.firstname && <p className='error text-center'>{errors.firstname}</p>}

          <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.lastname}  onChange={handleChange} onBlur={handleBlur} />
          {errors.lastname && touched.lastname && <p className='error text-center'>{errors.lastname}</p>}

          <div id="recaptcha-container"></div>
          {/* PHONE NUMBER VERIFICATION */}
          <span class="pe-lg-1 d-flex">
            <input value="+234" class='w-25 d-block m-auto mt-4 text-center py-2 border-0 ms-3' />
            <input type="text" placeholder="phone-number" name="phoneNumber" autoComplete="off"  value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} onInput={checkMobile} className="form-control phoneNo d-block m-auto mt-4 me-5 fs-5 text-center py-2" />
          </span>
          {errors.phoneNumber && touched.phoneNumber && <p className='error text-center'>{errors.phoneNumber}</p>}

          {verifyButton ? <button onClick={onSignInSubmit} class="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white">send OTP</button> : ""}

          {/* OTP VERIFICATION */}
          {otpInput ? <input type="number" placeholder="------" value={otp} onChange={e => {setOtp(e.target.value)}} onInput={checkOtp} className="form-control w-50 fs-3 d-block m-auto mt-4 text-center py-2" /> : ""}

          {verifyOtp ? <button onClick={verifyCode} class="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white">Confirm</button> : ""}
          {success ? <p className="text-success text-center">Phone Number Verified</p> : wrongOtp? <p className ="text-danger text-center">Invalid OTP</p> : ""}

          {/* EMAIL ADDRESS */}
          <input type="text" placeholder="email" name="email" value={values.email} className="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>} 

          {/*PASSWORD*/}
          <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur} /><br></br>
          {errors.password && touched.password && <p className='error text-center'>{errors.password}</p>}

          {/* Uploading image to the cloud storage */}
          <p class="ms-5">Add profile picture</p>
          <input type="file" class="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={(e)=>getFile(e)}/><br />
          <button className="btn btn-info px-2 d-block m-auto upload" onClick={upload}>Upload  {uploadStatus}</button>
          {/* <img className="w-50" src={newImage} alt="" /> */}
          
          <button type='submit' disabled={isSubmitting} className="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white" onClick={handleSubmit}>Create Account</button>

          

          <p class='text-center mb-5' onClick={()=> navigate('/login')}>Already have an account? Login</p>

         </div>
      </div>) : ""}
    </div>
  )
}

export default Signup
