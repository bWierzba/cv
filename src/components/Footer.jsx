import React from 'react';
import '../css/Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <h1>Bartłomiej Wierzba</h1>
          <div className='social'>obrazki</div>
          <h2>copyright Bartłomiej Wierzba. All Rights Reserved</h2>
        </div>
      </footer>
    );
  }

}

export default Footer;