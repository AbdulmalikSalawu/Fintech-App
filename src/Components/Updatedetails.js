import React, { useEffect, useState } from 'react'
import { FaBars} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { navNotNeeded } from '../Features/navSlice'
import '../Styles/Dashboard.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import axios from 'axios';

function Updatedetails() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 

  const navigate = useNavigate();
  const location = useLocation()

  useEffect(()=> {
        console.log(location)
        setFirstName(location.state.firstname)
        setLastName(location.state.lastname)
        setEmail(location.state.email)
  }, [])

    const updateData = () => {
      fetch("https://abdulmalikyinka.onrender.com/userData", {
        // fetch("http://localhost:5000/updatedetails", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              id:location.state._id,
              nameone:firstname,
              nametwo:lastname
            }),
          })
          .then((res)=>res.json())
          .then((data)=> {
              console.log(firstname,lastname)
              console.log(data)
              navigate('/dashboard')
            })
    }

  return (
    <div>
        <h1 className='text-center mt-3'>Edit your details</h1>

        <input type="text" className="form-control w-75 d-block m-auto mt-4 text-center py-2"
        defaultValue={firstname} 
        onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" className="form-control w-75 d-block m-auto mt-2 text-center py-2"
        defaultValue={lastname}
        onChange={(e)=>setLastName(e.target.value)} />

        <input type="text" placeholder="firstname" className="form-control w-75 d-block m-auto mt-2 text-center py-2" disabled defaultValue={email} />

        <button onClick={updateData} className='btn btn-info px-2 d-block m-auto mt-3'>Update details</button>

    </div>
  )
}

export default Updatedetails
