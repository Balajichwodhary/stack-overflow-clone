import React from 'react'
import './UserProfile.css'

const ProfileBio = ({currProfile}) => {
  return (
    <div>
        <div>
            {
                currProfile?.tags.length!==0 ?(
                    <>
                    <h4>Tags Watched</h4>
                    {
                        currProfile?.tags.map((tag)=>(
                            <p key={tag}>{tag}</p>
                        ))
                    }
                    </>
                ): (<p> No tags Watched</p>)
            }
        </div>
        <div>
            {
                currProfile?.about?(
                    <>
                    <h4>
                        About
                    </h4>
                       <p>{currProfile?.about}</p> 
                    </>
                ):(<p>No Bio found</p>)
            }
        </div>
    </div>
  )
}

export default ProfileBio