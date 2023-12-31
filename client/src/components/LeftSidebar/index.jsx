import React from 'react'
import './index.css'
import {NavLink} from 'react-router-dom'
import { BsGlobeCentralSouthAsia } from 'react-icons/bs'


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
         <NavLink to='/' className='side-nav-links' activeClassName='active' >
          <p>Home</p>
         </NavLink>

         <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' className='side-nav-links' activeClassName='active'>
            <BsGlobeCentralSouthAsia style={{paddingRight:"4px"}}/>
            <p style={{paddingleft:"10px"}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeClassName='active' >
          <p>Tags</p>
         </NavLink>
         <NavLink to='/Users' className='side-nav-links' activeClassName='active' >
          <p>Users</p>
         </NavLink>
         </div>

      </nav>
    </div>
  )
}

export default LeftSidebar