import React, { useRef } from 'react';
import '../css/Nav.css'
import down2 from '../img/down2.png'


const Nav = () => {
  const buttonRef = useRef();

  if (window.pageYOffset < 666) {
    console.log(buttonRef)
  }


  const handleClick = () => {
    window.scrollTo(0, 0);
  }



  return (
    <nav>
      <div onClick={handleClick} className={'navImageBox'}>
        <img ref={buttonRef} src={down2} alt="arrow up" />
      </div>
    </nav >
  );

}

export default Nav;
