import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const  menubar =useRef()
  const navbar =useRef()
    function clicked(){
      menubar.current.classList.toggle('fa-times')
      navbar.current.classList.toggle('activ')
    }
  return (  
    <>
        <div className="header">
        <div class="fas fa-bars" id="menu-bar"  onClick={clicked} ref={menubar} ></div>

          <div className="logo">
            Shipment
          </div>
          <div className="navbar" ref={navbar}>
            <ul>
              <li>
                <NavLink to={'/'}>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={'/shipment'}>Shipment</NavLink>
              </li>
              <li>
                <NavLink to={'/profile'}>profile</NavLink>
              </li>
                <li>
                <NavLink to={'/customer'}>customer</NavLink>
              </li>
            </ul>
          </div>
          <div className="form-logo">
          <i className="fa-solid fa-user"></i>
          <i className="fas fa-search"></i>
          </div>
        </div>
    </>
 
  )
}

export default Navbar
