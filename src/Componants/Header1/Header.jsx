import React from 'react'
import './Header.css'
import img from "../assets/w3schools_logo_500_04AA6D.webp"


const Header = () => {
  return (
    <div>

      <div class='header'>
        <div class='image'><img src={img} alt="" width="30" height="30" /></div>
        <div>Tutorials</div>
        <div>Exercises</div>
        <div>Certificates</div>
        <div>Service</div>
        <input type="text" placeholder='search' />
        <div>Plus</div>
        <div>For Teachers</div>
        <div>Spaces</div>
        <div>Get Certified</div>
        <div className='btn' >
          <button className='btn1'>Sign Up</button>
          <button>Log in</button>
        </div>

      </div>
      <div className='header2'>
        <div>HTML</div>
        <div>CSS</div>
        <div>JAVASCRIPT</div>
        <div>SQL</div>
        <div>PYTHON</div>
        <div>JAVA</div>
        <div>PHP</div>
        <div>HOW TO</div>
        <div>W3.CSS</div>
        <div>C</div>
        <div>C++</div>
        <div>C#</div>
        <div>BOOTSTRAP</div>
        <div>REACT</div>
        <div>MYSQL</div>
        <div>JQUERY</div>
      </div>
    </div>
  )
}

export default Header