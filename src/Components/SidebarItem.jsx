import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SidebarContent from './SidebarContent';


function SidebarItem({item}) {
    const [open,setOpen] = useState(false);

    if(item.childrens){
        return (
            <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
                
                <div className="sidebar-title">
                <i className='home'>{item.icon} </i>
                <Link className='link' to={item.path}><span>{item.title}</span></Link>
                <i className='toggle-btn' onClick={() => setOpen(!open)}>{item.icon2}</i>
                </div>
                
                <div className="sidebar-content">
                {item.childrens.map((item,index) => 
                <SidebarContent item={item} key={index}/>
                )}
                </div>
            </div>

        )
    }
    else{
        return (
            <div className='sidebar-item'>
                <div className="sidebar-title">
                <i className='home'>{item.icon} </i>
                <Link className='link' to={item.path}><span>{item.title}</span></Link>
                </div>
            </div>
        )
        
    }
  
}

export default SidebarItem