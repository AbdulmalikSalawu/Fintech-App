import React, {useRef,useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa';
import logo from '../Assets/piggyIcon.svg';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
    const displayMenu = () => {
        setShowMenu(true)
    }
    const hideMenu = () => {
        setShowMenu(false)
    }

  return (
    <div>
        <header className='sticky-top shadow-sm py-'>
            <h4 className='ms- mt-2'><img src={logo} alt="svg image"/></h4>
            <nav ref={navRef} className='pb-2'>
                <NavLink className='save' onClick={showNavbar} onMouseOver={displayMenu} onMouseLeave={hideMenu} to ='/'>Save</NavLink>
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