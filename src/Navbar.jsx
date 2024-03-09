
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";
import Body from "./Body";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">LinguaConnect</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                
                <Link to="/Body" className="nav-link active">Home</Link>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
              <Link to="/Register"  ><button type="button" class="btn btn-outline-primary">Register</button></Link>


              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/*

import React from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


 function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">LinguaConnect</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        
        <li className="nav-item">
         <button className="btn btn-primary" >Register</button>
        </li>
        
      
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
 }
 export default Navbar;



*/


{/* 

//import {useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { Link } from 'react-router-dom';


import Signup from "./Signup";
import Signin from "./Signin";

import "./App.css";

function Navbar() {

    
    return (


        <div className="nbr">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="dflex ">
                        <a class="navbar-brand " href="#" >Tech</a>

    
                        <Link className=" navbar-brand " aria-current="page" to="/" style={{ color: '#86B6F6' }}>Home</Link>


                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        
                        <div className="offcanvas-header">
                            <h6 className="offcanvas-title" id="offcanvasDarkNavbarLabel">"Embrace curiosity, learn with passion, grow endlessly, and inspire others."</h6>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
*/}
                             {/*}
                                <li class="nav-item ">
                                    

                                    <Link className=" nav-link" to="/Travel" >Travel
                                    </Link>

                                </li>

                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Education
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">A</a></li>
                                        <li><a className="dropdown-item">B</a></li>
                                        <li><a className="dropdown-item" href="#">C</a></li>
                                        <li><a className="dropdown-item" href="#">D</a></li>

                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Bussiness Ideas
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">E</a></li>
                                        <li><a className="dropdown-item">F</a></li>
                                        <li><a className="dropdown-item" href="#">G</a></li>
                                        <li><a className="dropdown-item" href="#">H</a></li>

                                    </ul>
                                </li>
   
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>

                            </ul>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 log">
                                <div className="dflex " >

                                    <Link to="/Signin"  ><button type="button" class="btn btn-outline-primary">Sign In</button></Link>


                                    <Link to="/Signup" style={{marginLeft:"20px"}}><button type="button" class="btn btn-outline-primary">Sign Up</button></Link>

                                    </div>
                            </ul>
                        



                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
 */}
 