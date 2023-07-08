import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar'
import RightSidebar from '../../components/RightSidebar'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>

      </div>
      
    </div>
  )
}

export default Home