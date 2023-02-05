import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
            <img src="logo.png" alt="" />
            <h3>Learning</h3>
        </div>
        {/* 2nd seach bar and title */}
        <div className="searchBar">
            <h3>Dashboard</h3>
            <img src="search.png" alt="" />
            <div className="search_box"></div>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
        {/* 3rd icons */}
        <div className="nav-icons">
            <img className='notification' src="notification.png" alt="" />
            <img className='setting' src="setting.png" alt="" />
            <div className="admin-section">
            <img className='avatar' src="Avatar.png" alt="" />
            <h4>Admin Name</h4>
            <h6>admin.davegroup@gmail.com</h6>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
