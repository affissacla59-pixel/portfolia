import React from 'react'
import Image from '../assets/Image.png';
import './Style.css';

function Navbar() {
  const [burger, setBurger] = React.useState(false);

  const handleburger = () => {
    setBurger(!burger);
  };

  const closeMenu = () => {
    setBurger(false);
  };

  return (
    <nav className={`navbar ${burger ? "burgvis" : "navburg"}`}>
      <img src={Image} alt="" className='navimg'/>
      <h1 className='titre'>Mon Portfolio</h1>
      
      <ul className='navul'>
        <li className='navil'>
          <a href="/#" className='nava' onClick={closeMenu}>Home</a>
        </li>
        <li className='navil'>
          <a href="/#about" className='nava' onClick={closeMenu}>A propos</a>
        </li>
        <li className='navil'>
          <a href="/#services" className='nava' onClick={closeMenu}>Projets</a>
        </li>
        <li className='navil'>
          <a href="/#Contact" className='nava' onClick={closeMenu}>Contact</a>
        </li>
      </ul>

      <button className='navbtn' onClick={handleburger}>
        <span className='navbtn-bar'></span>
      </button>

      <a href="/#Contact" onClick={closeMenu}>
        <button className='ss'>Me contacter</button>
      </a>
    </nav>
  );
}

export default Navbar;