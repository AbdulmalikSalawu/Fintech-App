import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import '../Styles/Signup.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import { navNotNeeded } from "../Features/navSlice";
import { useNavigate } from "react-router";
import {useFormik} from 'formik';
import {basicSchema} from '../Schemas/schema';

function Signup() {
  const [firstname,setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")
  const showNav = useSelector((state) => state.navbar.show)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navNotNeeded())
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

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
        username: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: ""
    },
    validationSchema: basicSchema,
    registerUser,
})

  return (
    <div className="pt-3 body">
      {showNav ? (<div>
        <h4><img className='d-block mt-3 m-auto' src={whiteLogo} alt="svg image"/></h4>
        <h4 className="text-center text-success mt-4">{message}</h4>
        <div class='inputCont col-md-8 col-lg-4 d-block m-auto'>
        <h5 class='text-center fw-bold mt-3 px-5 fs-2'>Create an account with us today</h5 >

          <input type="text" placeholder="firstname" className="form-control w-75 d-block m-auto mt-5 text-center py-2" value={values.username}  onChange={handleChange} onBlur={handleBlur} name='username' />
          {errors.username && touched.username && <p className='error text-center'>{errors.username}</p>}

          <input type="text" placeholder="lastname" name="lastname" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.lastname}  onChange={handleChange} onBlur={handleBlur} />
          {errors.lastname && touched.lastname && <p className='error text-center'>{errors.lastname}</p>}

          <input type="text" placeholder="email" name="email" value={values.email} className="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>}

          <input type="text" placeholder="phone-number" name="phoneNumber"  value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}className="form-control w-75 d-block m-auto mt-4 text-center py-2" />
          {errors.phoneNumber && touched.phoneNumber && <p className='error text-center'>{errors.phoneNumber}</p>}

          <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.password && touched.password && <p className='error'>{errors.password}</p>}
          
          <button className="btn btn-info px-3 py-2 w-75
          mt-5 fs-5 d-block m-auto border-0 userLogin text-white" onClick={registerUser}>Create Account</button>
            <p class='text-center' onClick={()=> navigate('/login')}>Already have an account? Login</p>
         </div>
      </div>) : ""}
    </div>
  )
}

export default Signup
