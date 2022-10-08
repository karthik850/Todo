import React from 'react'
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom'
function Button() {
    const location = useLocation()

    return (
<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group mr-2" role="group" aria-label="First group">
    <Link to={'/'} type="button" className={location.pathname ==="/"?"btn btn-primary":"btn btn-dark"}>All</Link>
  </div>
  <div className="btn-group mr-2" role="group" aria-label=" Second group">
    <Link to={'/inpending'} type="button" className={location.pathname ==="/inpending"?"btn btn-primary":"btn btn-dark"}>InProgess</Link>
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <Link to={'/completed'} className={location.pathname ==="/completed"?"btn btn-primary":"btn btn-dark"}>Completed</Link>
  </div>
  
</div>
        
    )
}

export default Button
