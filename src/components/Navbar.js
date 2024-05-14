import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/"> <img className='navbar-brand image mx-2' src="\favicon-32x32.png" alt="" srcSet="" />{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link active" aria-current="page">Home</Link>
                  {/* "a" or "anchor" tag is replaced by Link tag to navigate to Home page without reloading the whole website */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="/">{props.aboutTitle}</a> */}
                  <Link to={"/about"} className="nav-link" >About</Link>
                  {/* "a" or "anchor" tag is replaced by Link tag to navigate to About page without reloading the whole website */}
                </li>
                
              </ul>
              <form className="d-flex mx-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
              </form>
              <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
              {/* <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div> */}
            </div>
          </div>
        </nav>
        <Outlet />

      
      </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutTitle: PropTypes.string
};