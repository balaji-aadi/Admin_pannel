import React from 'react'
import SidebarItem from './SidebarItem'
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <ul className="nav" style={{'position' : 'absolute'}}>
                <li className="nav-item mt-3" ><a className="nav-link text-secondary" href="/"><i style={{'position' : 'relative', 'bottom' : '11px'}}><img src="avatar.png" className="img-fluid" alt="Responsive image"/></i><p style={{'position' : 'relative', 'bottom':'43px','left' : '2rem'}}>Admin Name</p><img src="smallSetting.png" className="img-fluid" alt="Responsive image" style={{'position' : 'relative' , 'left' :'14.3rem', 'bottom' : '5rem'}}/></a></li>
                <li className="nav-item mb-0 "><p style={{'position' : 'relative' , 'top' : '24px','fontSize':'12px','right':'78px'}}> Position</p> </li>
    </ul>
        {SidebarData.map((item,index) => <SidebarItem  item={item} key={index}/>)}
    </div>
  )
}

export default Sidebar