import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

import { updateProfile } from '../../actions/users'
import './UserProfile.css'

const EditProfile = ({currUser,setSwitch}) => {

    const dispatch=useDispatch()

    const [name,setName]=useState(currUser?.result?.name)
    const [about,setAbout]=useState(currUser?.result?.about)
    const [tags,setTags]=useState('')

    const handleSubmit=(e)=>{
       e.preventDefault()

       if(tags.length === 0){
        console.log(currUser)
        dispatch(updateProfile(currUser?.result?._id,{name,about,tags:currUser?.result?.tags}))
       }
       else{
        console.log(currUser)
        dispatch(updateProfile(currUser?.result?._id,{name,about,tags}))
       }

       setSwitch(false)
    }

  return (
    <div>
        <h1 className='edit-profile-title'> Edit Your Profile</h1>
        <h2 className='edit-profile-title-2'> Public Infromation</h2>
        <form className='edit-profile-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>
                <h3>Display Name</h3>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label htmlFor='about'>
                <h3>About me</h3>
                <textarea id="about" col="30" rows="10" value={about} onChange={(e)=>setAbout(e.target.value)}/>
            </label>
            <label htmlFor='tags'>
               <h3>Watched tags</h3>
               <p>Add tags seperated by 1 space</p>
               <input type='text' id='tags' onChange={(e)=>setTags(e.target.value.split(' '))}/>
            </label> <br/>
            <input type='submit' value='Save Profile' className='user-submit-button'/>
            <button type='button' className='user-cancel-btn' onClick={()=>setSwitch(false)}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfile