import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Reset.css'
import logo from '../Assets/icon.png';
import { navNotNeeded } from '../Features/navSlice';
import { useNavigate } from 'react-router';
import {useFormik} from 'formik';
import {basicSchema} from '../Schemas/loginSchema';

function Resetpassword() {

  const showNav = useSelector((state) => state.navbar.show)
  const [email,setEmail] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [userLink,setUserLink] = useState("")

  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 

  const onSubmit = async (values,actions)=> {
    console.log(values);
    const email = values.email;
    
    fetch("https://abdulmalikyinka.onrender.com/forgot-password", {
    // fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
      }),
      
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      // alert(data.status)
      setUserLink(data.link)
      console.log(userLink)
    });
}
    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues: {
          email: "",
          password: "12345a",
      },
      validationSchema: basicSchema,
      onSubmit,
    })

  return (
    <div class='body'>
      {showNav ? (
        <div class='mt-5'>
          <span className='toplogo'><img class="logo mt-3 me-1" src={logo} alt="svg image"/><span class="brandname fw-bold text-white ms-2">saveWyse</span></span>
          <div class='inputCon col-md-8 col-lg-4 d-block m-auto mt-4'>
            <p className='text-center text-success mt-2 fs-5 fw-bold'>{userLink}</p>
            <h5 class='text-center mt-4 fw-bold fs-4'>Reset your password</h5>
            <p class='text-center'>Securely login to your piggyvest</p>
            <p class='ms-5'>Email</p>
            <input type="text" placeholder="email" name="email" value={values.email} className="form-control w-75 d-block m-auto mt-2 text-center py-2"  onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>}

            <input type="text" placeholder="password" name="password" className="form-control w-75 d-block m-auto d-none text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur}/>

            <button disabled={isSubmitting} type='submit' className="btn btn-info d-block m-auto px-3 py-2 mt-5 w-75 text-white userLogin fs-5" onClick={handleSubmit}>Enter</button>

            
            <p class='text-center mt-1' onClick={()=> navigate('/signup')}>No account yet? Signup</p>
          </div>
        </div>
      ) : ""}
        
    </div>
  )
}

export default Resetpassword
