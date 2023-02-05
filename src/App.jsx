import React from 'react'
import './App.css'
import Navbar2 from './Components/Navbar2'
import Sidebar from './Components/Sidebar'
import FileManager from './Pages/FileManager'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import {ManageLearning, PracticeTests , Video} from './Pages/ManageLearning'

function App() {
  return (
    <div className='main'>
     <Router>
      <Navbar2/>
      <Sidebar/>
      <Routes>
        <Route>
        <Route path='/home' element={<Dashboard/>}/>
        <Route path='/fileManager' element={<FileManager/>}/>
        <Route path='/manageLearning' element={<ManageLearning/>}/>
        <Route path='/manageLearning/practicetest' element={<PracticeTests/>}/>
        <Route path='/manageLearning/video' element={<Video/>}/>
        </Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App