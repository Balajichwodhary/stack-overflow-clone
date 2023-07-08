import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake,faPen} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
  
import LeftSidebar from '../../components/LeftSidebar'
import Avatar from '../../components/Avatar'
import ProfileBio from './ProfileBio'
import EditProfile from './EditProfile'
import './UserProfile.css'

const UserProfile = () => {

    const [switchbtn,setSwitch]=useState(false)

    const {id}= useParams()
    const users=useSelector((state)=>(state.userReducer))
    // console.log(users)
    const currProfile=users.filter((user)=>user.id===id)[0]
    const currUser=useSelector((state)=>(state.currentUserReducer))
    // console.log(currProfile)


  return (
   <div className='home-container-1'>
    <LeftSidebar/>
    <div className='home-container-2'>
        <section>
        <div className='user-details-container'> 

            <div className="user-details">
                    <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                        {currProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className='user-name'>
                        <h1> {currProfile?.name}</h1>
                        <p><FontAwesomeIcon icon={faBirthdayCake} />Joined {moment(currProfile?.joinedOn).fromNow()}</p>
                    </div>
             </div> 
                    {
                        currUser?.result?._id===id && (
                            <button type='button' onClick={()=> setSwitch(true)} className='edit-profile-button'>

                            <FontAwesomeIcon icon={faPen}/> Edit Profile
                            </button>
                        )

                    }
            </div> 
            <>
            {
                switchbtn ? (<EditProfile currUser={currUser}  setSwitch={setSwitch}/>) : (<ProfileBio currProfile={currProfile} />)
            }
            </>
     
        </section>


    </div>
 

   </div>
  )
}

export default UserProfile