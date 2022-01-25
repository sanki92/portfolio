import React, { useEffect } from 'react'
import $ from 'jquery';
const Navbar = () => {
    useEffect(() => {
        $(document).ready(function(){
             $(".hamburger").click(function(){
                $(this).toggleClass("is-active");
              });
          })
    })
    return (
        <nav id="navID" className="navbar black fixed-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
        <button className="navbar-toggler" style={{"boxShadow":"none"}} type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger" id="hamburger-1">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul id="navBar" className="navbar-nav ">
            <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}

export default Navbar
