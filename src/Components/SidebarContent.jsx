import React from 'react'
import { Link } from 'react-router-dom'

function SidebarContent({item}) {
  return (
    <div className='sidebar__content mb-3'>
       <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style={{'position' :'absolute','left' : '4px'}}/>
        <label className="form-check-label" htmlFor="flexRadioDefault1" style={{'position':'relative','left':'1.5rem'}}>{item.title}</label>
    </div>
  )
}

export default SidebarContent