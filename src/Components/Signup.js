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
      setNewImage(response.data.image)
      alert(newImage)
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
    const url = "https://abdulmalikyinka.onrender.com/signup"
    try {
      await axios.post(url,{firstname,lastname,phoneNumber,email,password,newImage}).then((response)=>{
          console.log(response.data)
          setMessage(response.data.message)
          navigate('/login')
          // if(response.data.message == "signup successful"){
          // }
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
        <h4 className="text-center text-black mt-4">{message}</h4>
        <div class='inputCont col-md-8 col-lg-4 d-block m-auto'>
        <h5 class='text-center fw-bold mt-4 px-3 fs-2'>Create an account with us today</h5>  

          <input type="text" name='firstname' placeholder="firstname" className="form-control firstname w-75 d-block m-auto mt-3 text-center py-2 " value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
          {errors.firstname && touched.firstname && <p className='error text-center'>{errors.firstname}</p>}

          <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.lastname}  onChange={handleChange} onBlur={handleBlur} />
          {errors.lastname && touched.lastname && <p className='error text-center'>{errors.lastname}</p>}

          <input type="text" placeholder="phone-number" name="phoneNumber"  value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}className="form-control w-75 d-block m-auto mt-4 text-center py-2" />
          {errors.phoneNumber && touched.phoneNumber && <p className='error text-center'>{errors.phoneNumber}</p>}

          <input type="text" placeholder="email" name="email" value={values.email} className="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>} 


          <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password && <p className='error text-center'>{errors.password}</p>}

          {/* Uploading image to the cloud storage */}
          <input type="file" class="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={(e)=>getFile(e)}/><br />
          <button className="btn btn-info px-2 d-block m-auto" onClick={upload}>Upload</button>
          {/* <img className="w-50" src={newImage} alt="" /> */}
          
          <button type='submit' disabled={isSubmitting} className="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white" onClick={handleSubmit}>Create Account</button>

          <p class='text-center' onClick={()=> navigate('/login')}>Already have an account? Login</p>

          {/* <input type="text" placeholder="firstname" name="firstname" className="form-control w-75 d-block m-auto mt-4 text-center" onChange={(e)=>(setFirstname(e.target.value))} />
        <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-3 text-center" onChange={(e)=>(setLastname(e.target.value))} />
        <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-3 text-center" onChange={(e)=>(setEmail(e.target.value))} />
        <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-3 text-center" onChange={(e)=>(setPassword(e.target.value))} />
        <button type='submit' className="btn btn-info px-3 py-2 w-75 mt-5 fs-5 d-block m-auto border-0 userLogin text-white" onClick={createAccount}>Create Account</button> */}

         </div>
      </div>) : ""}
    </div>
  )
}

export default Signup
