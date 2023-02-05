import React from 'react'
import './Sidebar.css'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import SmartDisplaySharpIcon from '@mui/icons-material/SmartDisplaySharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

// import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
const DemoSideBarItem = () => {
    return (
         <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{"backgroundColor":"/FFFFFF", "boxShadow": "0px 4px 4px 1px rgba(58, 53, 65, 0.14)" , "position" : "relative" , "top" : "72px", "width" : "17rem", 'height':'100%' , "fontFamily" : "Inter"}}>
            <ul className="nav flex-column sticky-top pl-0 pt-1 p-3 mt-2 ">
                <li className="nav-item mt-3" style={{'marginBottom': '1.5rem'}}><a className="nav-link text-secondary" href="/"><i style={{'position':'relative', 'right' : '13px', 'bottom' : '2px'}}><img src="avatar.png" className="img-fluid" alt="Responsive image"/></i><p style={{'fontSize' : '16px', "color" : "rgba(44, 44, 44, 0.87)","position": "absolute","left": "3rem","bottom": "30.9rem"}}>Admin Name</p><img src="smallSetting.png" className="img-fluid" alt="Responsive image" style={{"position": "relative" , "left": "11rem" , "bottom ": "10px"}}/></a></li>
                <li className="nav-item mb-0 "><p style={{"position" : "absolute", "left" : "50px" , "bottom" : "30.3rem" , "fontSize" : "10px"}}>Position</p> </li>
                <li className="home nav-item mb-0"><a className="nav-link text-secondary" href='/'><i style={{'position':'relative', 'right' : '13px', 'bottom' : '2px'}}><img src="home.png" className="img-fluid" alt="Responsive image"/></i><span className="ml-3" style={{'color':'black'}}>Dashboard</span></a></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><LocalLibrarySharpIcon/></i><span className="ml-3" style={{'color':'black'}}>Manage Learning</span></a></li>
                <li className="fileManager nav-item mb-0"><Link className="nav-link text-secondary" to="/fileManager"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><DescriptionOutlinedIcon/></i><span className="ml-3" style={{'color' : 'black'}}>File Manager</span></Link></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><ArticleSharpIcon/></i> <span className="ml-3" style={{'color':'black'}}>Manage Test's</span></a></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><HelpOutlineSharpIcon/></i> <span className="ml-3" style={{'color':'black'}}>Question Bank</span></a></li>
                <li className="videoBank nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><SmartDisplaySharpIcon/></i> <span className="ml-3" style={{'color':'black'}}>Video Bank</span></a></li>
                <li className="lessonBank nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'position':'relative', 'right' : '13px', 'bottom' : '2px'}}><img src="icon7.png" className="img-fluid" alt="Responsive image"/></i> <span className="ml-3" style={{'color':'black'}}>Lesson Bank</span></a></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><MonetizationOnSharpIcon/></i> <span className="ml-3" style={{'color':'black'}}>Monetization</span></a></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><GroupSharpIcon/></i> <span className="ml-3" style={{'color':'black'}}>Manage Users</span></a></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'position':'relative', 'right' : '13px', 'bottom' : '2px'}}><img src="icon10.png" className="img-fluid" alt="Responsive image"/></i> <span className="ml-3" style={{'color':'black'}}>Manage Subjects</span></a></li>
                <li className="nav-item mb-0"><a className="nav-link text-secondary" href="/"><i style={{'color':'black','position' : 'relative' , 'right' : '13px' , 'bottom' : '2px'}}><SettingsSharpIcon/></i> <span className="ml-3" style={{'color':'black'}}>Settings</span></a></li>  
            </ul>
       </div>
    )
}
 
export default DemoSideBarItem