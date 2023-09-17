import React, {useRef,useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/icon.png';
// import { useNavigate } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Styles/Nav.css'
import {useDispatch} from 'react-redux'
import {setShow, removeShow} from '../Features/navSlice'
import apple from '../Assets/apple-icon.svg'
import flexNaira from '../Assets/flexNaira.png'
import safeLock from '../Assets/safeLock.png'
import smallShield from '../Assets/smallShield.png'
import targetSaving from '../Assets/targetSavings.png'
// import {useDispatch} from 'react-redux'

function Nav() {
    const [openNav,setOpenNav] = useState(true)
    const [showMenu,setShowMenu] = useState(false)
    const navRef = useRef();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
     const navLinks = () => {
        navRef.current.classList.toggle("responsive_nav")
        dispatch(setShow())
        setOpenNav(true)
     }
     const goToSignup = () => {
        navigate('signup')
        navRef.current.classList.toggle("responsive_nav")
        dispatch(setShow())
        setOpenNav(true)
     }
    const toggle = () => {
        dispatch(removeShow())
        setOpenNav(false)
    }
    const toggle2 = () => {
        dispatch(setShow())
        setOpenNav(true)
    }
    const displayMenu = () => {
        setShowMenu(true)
    }
    const hideMenu = () => {
        setShowMenu(false)
    }

  return (
    <div>
        <header className='sticky-top shadow-sm'>
            <span className='navsvg d-flex ms-lg-3'><img class="logo ms-5" src={logo} alt="svg image"/><span class="brandname mb-lg-3 fw-bold">saveWyse</span></span>
            {/* <span class="brandname fw-bold">saveWyse</span> */}
            <nav ref={navRef} className='pb-2'>
                <NavLink className='save' onClick={navLinks} onMouseOver={displayMenu} onMouseLeave={hideMenu} to ='/'>Save</NavLink>
                <NavLink to='/invest' onClick={navLinks}>Invest</NavLink>
                <NavLink to='/stories' onClick={navLinks}>Stories</NavLink>
                <NavLink to='/faqs' onClick={navLinks}>FAQs</NavLink>
                <NavLink to='/resources' onClick={navLinks}>Resources</NavLink>
                <NavLink to='/login' onClick={()=>navigate('login')} className='signinbtn mt-5'><small class='pt-5' onClick={navLinks}>Sign in</small></NavLink>
                <button onClick={goToSignup} className='signupbtn text-white px-4'>Create Free Account</button>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes onClick={toggle2} />
                </button>
            </nav>
            {openNav? (<button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars onClick={toggle} />
            </button>) : ""}
            
        </header>
        {showMenu? (
            <div className='bg-white shadow'>
                <div className='menuIcons'>
                    <span><img src={smallShield} className='apple' alt='piggy'/><small>Piggybank</small></span>
                    <span><img src={safeLock} className='apple' alt='piggy'/><small>Safelock</small></span>
                </div>
                <div className='menuIcons'>
                    <span><img src={targetSaving} className='apple' alt='piggy'/><small>Target</small></span>
                    <span><img src={flexNaira} className='apple' alt='piggy'/><small>Flexnaira</small></span>
                </div>
            </div>
        ) : ""}

    </div>
  )
}

export default Nav