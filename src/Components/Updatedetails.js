import React, { useEffect, useState } from 'react'
import { FaBars} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { navNotNeeded } from '../Features/navSlice'
import '../Styles/Dashboard.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import axios from 'axios';

function Updatedetails() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(navNotNeeded())
  }, []) 

  const navigate = useNavigate();
  const location = useLocation()

  useEffect(()=> {
        console.log(location)
        setFname(location.state.firstname)
        setLname(location.state.lastname)
        setEmail(location.state.email)
  }, [])

    const updateData = () => {
        console.log(fname,lname)
    }

  return (
    <div>
        <h1 className='text-center mt-3'>Edit your details</h1>

        <input type="text" placeholder="firstname" className="form-control w-50 d-block m-auto mt-2 text-center py-2" defaultValue={fname} onchange={(e)=>setFname(e.target.value)} />
        <input type="text" placeholder="lastname" className="form-control w-50 d-block m-auto mt-2 text-center py-2" defaultValue={lname} onchange={(e)=>setLname(e.target.value)} />
        <input type="text" placeholder="firstname" className="form-control w-50 d-block m-auto mt-2 text-center py-2" disabled defaultValue={email} />

        <button onClick={updateData} className='btn btn-info px-2 d-block m-auto mt-3'>Update details</button>

    </div>
  )
}

export default Updatedetails
