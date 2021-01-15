import React from 'react';
import '../css/Footer.css'
import { Icon } from '@iconify/react';
import logoFlickr from '@iconify-icons/ion/logo-flickr';
import logoLinkedin from '@iconify-icons/ion/logo-linkedin';
import logoGithub from '@iconify-icons/ion/logo-github';




class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <h1>Bartłomiej Wierzba</h1>
          <div className='social'><Icon onClick={() => window.open("https://github.com/bWierzba", "_blank")} icon={logoGithub} height="2rem" /> <Icon onClick={() => window.open("https://www.linkedin.com/in/bart%C5%82omiej-wierzba-95a5a0150/", "_blank")} icon={logoLinkedin} height="2rem" /> <Icon onClick={() => window.open("https://www.flickr.com/photos/162574225@N05/", "_blank")} icon={logoFlickr} height="2rem" /></div>
          <h2>&copy; copyright Bartłomiej Wierzba. All Rights Reserved</h2>
        </div>
      </footer>
    );
  }

}

export default Footer;