import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { IoSearch } from 'react-icons/io5';
import decode from 'jwt-decode'

import './index.css'
import logo from '../../assets/logo.png'
import Avatar from '../Avatar'
import { setCurrentUser } from '../../actions/currentUser';
// import Button from '../Button'



const Navbar = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()


    var User=useSelector((state)=>(state.currentUserReducer))

    const handleLogout=()=>{
      dispatch({type:"LOGOUT"});
      navigate('/')
      dispatch(setCurrentUser(null))
    }
    useEffect(()=>{
      const token=User?.token
      if(token){
        const decodedToken=decode(token)
        if(decodedToken.exp*1000 < new Date().getTime()){
          handleLogout()
        }
      }

      dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

  return (
    <nav className='Main-nav'>
        <div className='navbar'>
        <Link to='/'  className='nav-item nav-logo'>
          <img src={logo} alt='Stack Overflow' width={125} />
        </Link>

        <Link to="/" className='nav-item nav-btn'> About</Link>

        <Link to="/" className='nav-item nav-btn'> Products</Link>
        <Link to="/" className='nav-item nav-btn'> For Teams</Link>
        <form>
            <input type='text' placeholder='Search...'/>
            {/* <img src={search} alt='search' width="18"/> */}
            <IoSearch className='search-icon'/>
        </form>
        {
            User===null?
                
                  <Link to="/Auth" className='nav-item nav-links'> Login</Link> 
                  
                   :
                  <>
                  <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"><Link to={`/Users/${User.result._id}`} style={{color:"white", textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> 
                  <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
                  </>


        }
        </div>


    </nav>
  )
}

export default Navbar