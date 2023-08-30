import React, { useEffect, useState } from "react"
import {useFormik} from 'formik';
import {signupSchema} from '../Schemas/schema';
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import '../Styles/Signup.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import { navNotNeeded } from "../Features/navSlice";
import { useNavigate } from "react-router";

function Signup() {
  const [message,setMessage] = useState("")
  const [file, setFile] = useState("")
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
    setUploadStatus("(uploading...)")
    const url = "https://abdulmalikyinka.onrender.com/saveFile"
    const userData = {file}
    axios.post(url,userData).then((response)=>{
      setNewImage(response.data.image)
      setUploadStatus("(image added ✔)")
      if(file == ""){
        setUploadStatus("(🤳 select an image)")
      }
     })
     .catch((error)=>{
        console.log(error)
     })
   }

  const onSubmit = async (values, actions) => {
    console.log(values);
    const firstname = values.firstname;
    const lastname = values.lastname;
    const phoneNumber = values.phoneNumber;
    const email = values.email;
    const password = values.password;
    // new Promise((resolve) => setTimeout(resolve, 1000))
    setMessage("creating account...")
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

  return (
    <div className="pt-3 body">
      {showNav ? (<div>
        <h4><img className='d-block mt-3 m-auto' src={whiteLogo} alt="svg image"/></h4>
        <div class='inputCont col-md-8 col-lg-4 d-block m-auto mb-5'>
          <h6 className={(message == "Signup successful" || "creating account...")? "text-center text-success fs-3 fw-bold mt-2" : "text-center text-danger fs-3 fw-bold"}>{message}</h6>
          <h5 class='text-center fw-bold mt-4 px-3 fs-2'>Create an account with us today</h5>  
          <input type="text" name='firstname' placeholder="firstname" className="form-control firstname w-75 d-block m-auto mt-3 text-center py-2 " value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
          {errors.firstname && touched.firstname && <p className='error text-center'>{errors.firstname}</p>}

          <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.lastname}  onChange={handleChange} onBlur={handleBlur} />
          {errors.lastname && touched.lastname && <p className='error text-center'>{errors.lastname}</p>}

          <input type="text" placeholder="phone-number" name="phoneNumber"  value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}className="form-control w-75 d-block m-auto mt-4 text-center py-2" />
          {errors.phoneNumber && touched.phoneNumber && <p className='error text-center'>{errors.phoneNumber}</p>}

          <input type="text" placeholder="email" name="email" value={values.email} className="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>} 


          <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur} /><br></br>
          {errors.password && touched.password && <p className='error text-center'>{errors.password}</p>}

          {/* Uploading image to the cloud storage */}
          <p class="ms-5">Add profile picture</p>
          <input type="file" class="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={(e)=>getFile(e)}/><br />
          <button className="btn btn-info px-2 d-block m-auto upload" onClick={upload}>Upload  {uploadStatus}</button>
          {/* <img className="w-50" src={newImage} alt="" /> */}
          
          <button type='submit' disabled={isSubmitting} className="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white" onClick={handleSubmit}>Create Account</button>

          <p class='text-center' onClick={()=> navigate('/login')}>Already have an account? Login</p>

         </div>
      </div>) : ""}
    </div>
  )
}

export default Signup
