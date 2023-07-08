import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth'
import Questions from './pages/Questions'
import AskQuestion from './pages/AskQuestion'
import Tags from './pages/Tags'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Auth' element={<Auth/>}/>
            <Route path='/Questions' element={<Questions/>}/>
            <Route path='/AskQuestion' element={<AskQuestion/>}/>
            <Route path='Questions/:id' element={<DisplayQuestion/>}/>
            <Route path='/Tags' element={<Tags/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Users/:id' element={<UserProfile/>}/>

        </Routes>
    </>
  )
}

export default Allroutes