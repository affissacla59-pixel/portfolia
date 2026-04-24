import React from 'react'
import Image from '../assets/Image.png';
import './Style.css';

function Navbar() {
  const[burger,setBurger]= React.useState(false);
  const handleburger=()=>{
    setBurger(!burger);
  };
  return (
    
    <nav className={`navbar ${burger ? "burgvis" : "navburg"}`}>
      <img src={Image} alt="" className='navimg'/>
      <h1 className='titre'>Mon Portfolio</h1>
      
      <ul className='navul'>
        <li className='navil'><a href="/#"className='nava'>Home</a></li>
        <li className='navil'><a href="/#about"className='nava'>A propos</a></li>
        <li className='navil'><a href="/#services"className='nava'>Projets</a></li>
        <li className='navil'><a href="/#Contact"className='nava'>Contact</a></li>
      </ul>
      <button className='navbtn' onClick={handleburger}>
        <span className='navbtn-bar'></span>
      </button>

      <a href="/#Contact"><button className='ss'>Me contacter</button></a>
    </nav>
      
    
  )
}

export default Navbar;
