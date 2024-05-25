import React, { useEffect, useState } from 'react'
import { FaBars} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { navNotNeeded } from '../Features/navSlice'
import '../Styles/updatedetail.css'
import whiteLogo from '../Assets/whiteLogo.svg';
import axios from 'axios';

function Updatedetails() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
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
        setPhoneNumber(location.state.phoneNumber)
  }, [])

    const updateData = () => {
      fetch("https://abdulmalikyinka.onrender.com/updatedetails", {
        // fetch("http://localhost:5000/updatedetails", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
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
        <h4 className='text-center mt-3'>{firstname}, Welcome to your Profile</h4>

      <div class='inputBox d-block m-auto mt-4'>
        <img className='d-block m-auto' src={location.state.newImage} />
        <i className='text-center d-block m-auto text-white fs-3'>Click each detail to update it 🖍</i>
        <input type="text" className="form-control w-75 d-block m-auto mt-5 text-center py-2 editDetail"
        defaultValue={firstname}
        onChange={(e)=>setFirstName(e.target.value)} />
        
        <input type="text" className="form-control w-75 d-block m-auto mt-3 text-center py-2 editDetail"
        defaultValue={lastname}
        onChange={(e)=>setLastName(e.target.value)} />

        <input type="text" placeholder="firstname" className="form-control w-75 d-block m-auto mt-3 text-center py-2 editDetail" disabled defaultValue={email} />
        <p className='mt-3 d-block m-auto mt-4 text-center text-white'>0{phoneNumber}</p>
      </div>

        <button onClick={updateData} className='btn btn-info px-2 d-block m-auto mt-3'>Update details 🖍</button>

    </div>
  )
}

export default Updatedetails
