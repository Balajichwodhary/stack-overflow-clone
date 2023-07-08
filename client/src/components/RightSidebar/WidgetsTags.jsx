import React from 'react'

const WidgetsTags = () => {

    const tags=['c++','css','HTML','JavaScript','Python','React','Node','Express']
  return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>

    </div>
  )
}

export default WidgetsTags