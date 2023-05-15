import React, {useRef,useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/piggyIcon.svg';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'
import {useDispatch} from 'react-redux'
import {setShow, removeShow} from '../Features/navSlice'
// import {useDispatch} from 'react-redux'

function Nav() {
    const [openNav,setOpenNav] = useState(true)
    const navRef = useRef();
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const toggle = () => {
        dispatch(removeShow())
        setOpenNav(false)
    }
    const toggle2 = () => {
        dispatch(setShow())
        setOpenNav(true)
    }

  return (
    <div>
        <header className='sticky-top shadow-sm'>
            <h4 className='ms- mt-2'><img src={logo} alt="svg image"/></h4>
            <nav ref={navRef} className='pb-2'>
                <NavLink className='save' onClick={showNavbar} to ='/'>Save</NavLink>
                <NavLink onClick={showNavbar}>Invest</NavLink>
                <NavLink onClick={showNavbar}>Stories</NavLink>
                <NavLink onClick={showNavbar}>FAQs</NavLink>
                <NavLink onClick={showNavbar}>Resources</NavLink>
                <NavLink className='signinbtn'>Sign in</NavLink>
                <button className='signupbtn'><NavLink className='text-white'>Create Free Account</NavLink></button>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes onClick={toggle2} />
                </button>
            </nav>
            {openNav? (<button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars onClick={toggle} />
            </button>) : ""}
            
        </header>
    </div>
  )
}

export default Nav