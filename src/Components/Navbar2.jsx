import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

export const Navbar2 = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md mb-3" style={{"backgroundColor":"#FFFFFF" ,"fontFamily" : "Inter"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home"><img src="logo.png" alt="" /><h7 style={{"position": "relative","right": "16px"}} >Learning</h7></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <><h5 style={{'position' : 'relative' , 'left' : '7rem' , 'top' : '4px'}}>Dashboard</h5></>
            <form className="search_bar d-flex" role="search">
            {/* <a className="navbar-brand" href="/"><SearchIcon/></a> */}
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{"width" : '380px', 'height': '45px', 'outline' : 'none', "background": "#FFFFFF","border": "1px solid #E0E0E0","borderRadius": "8px",'position': 'absolute', 'left' : '33rem', 'bottom': '1.5rem'}}/>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img src="notification.png" className="img-fluid" alt="Responsive image" style={{"position": "absolute","left": "65rem", "bottom" : '2rem'}}/></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img src="bigSetting.png" className="img-fluid" alt="Responsive image" style={{"position": "absolute","left": "68rem","bottom": "2rem"}}/></a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img src="bigAvatar.png" className="img-fluid" alt="Responsive image" style={{"position": "absolute","left": "71rem","bottom": "26px"}}/> <span style={{"position": "absolute","left": "74rem","bottom": "42px"}}>Admin Name</span> </a>
                <li className="nav-item mb-0 "><p style={{"position": "absolute","left": "74rem","bottom": "13px", 'fontSize':'12px'}}>balajib.davegroup.com</p> </li>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar2