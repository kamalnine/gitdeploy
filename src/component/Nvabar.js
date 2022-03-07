import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function Nvabar(props) {
  return (
    <nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className ="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/functions">Functions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">about</Link>
          </li>
         
        </ul>
        
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
</div>
<div className={`form-check form-switch text-${props.mode==='light'?'red':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault " onClick={props.tuggelMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault mx-3">{props.rmode==='light'?'Enable Red Mode':'Enable Light Mode'}</label>
</div>
<div className={`form-check form-switch text-${props.mode==='light'?'blue':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.tuggeMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault mx-3">{props.bmode==='light'?'Enable Blue Mode':'Enable Light Mode  '}</label>
</div>
</div>
      </div>
    
  </nav>
  )
}
Nvabar.defaultProps = {
    title: 'Set title here'
}
