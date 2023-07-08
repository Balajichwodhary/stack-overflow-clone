import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'
import TagsList from './TagsList'

const Tags = () => {

    const tagsList=[
        {id:1,
         tagName:"React.js",
         tagDESC:"Reactjs is a frontend javascript framework"
        }
        ]
  return (
   <div className='home-container-1'>
   <LeftSidebar/>
   <div className='home-container-2'>
    <h1>Tags</h1>
    <p>A tag is a key word or label that categorizes your question with other, similer questions</p>
    <p> using the right tags makes it easier for others to find and answer your question</p>
    <div className='tags-list-container'>
        {
            tagsList.map((tag)=>(
                <TagsList tag={tag} key={tag.id}/>
            ))
        }

    </div>
   </div>
   </div>
  )
}

export default Tags