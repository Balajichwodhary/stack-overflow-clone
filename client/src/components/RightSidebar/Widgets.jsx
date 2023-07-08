import React from 'react'
import {BiPencil,BiComment} from 'react-icons/bi'

const Widgets = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <BiPencil/>
                <p>This is balaji's stack overflow clone</p>
            </div>
            <div className='right-sidebar-div-2'>
                <BiComment/>
                <p>This is created by Pathipati Balaji</p>
            </div>
        </div>
            <h4>Featured on Meta</h4>
                <div className='right-sidebar-div-1'>
                    <div className='right-sidebar-div-2'>
                        <BiPencil/>
                        <p>This is balaji's stack overflow clone</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <BiComment/>
                        <p>This is created by Pathipati Balaji</p>
                    </div>
                </div>
            <h4>Hot Meta posts</h4>
              <div className='right-sidebar-div-1'>
                    <div className='right-sidebar-div-2'>
                        <BiPencil/>
                        <p>This is balaji's stack overflow clone</p>
                    </div>
                    <div className='right-sidebar-div-2'>
                        <BiComment/>
                        <p>This is created by Pathipati Balaji</p>
                    </div>
              </div>
    </div>
  )
}

export default Widgets