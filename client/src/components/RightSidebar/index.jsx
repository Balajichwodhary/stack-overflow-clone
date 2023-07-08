import React from 'react'
import Widgets from './Widgets'
import WidgetsTags from './WidgetsTags'
import './index.css'



const RightSidebar = () => {
  return (
    <div className='right-sidebar'>
      <Widgets/>
      <WidgetsTags/>
    </div>
  )
}

export default RightSidebar