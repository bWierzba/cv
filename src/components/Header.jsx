import React from 'react';
import '../css/Header.css'
import down from '../img/down.png'
import down2 from '../img/down2.png'
import Typical from 'react-typical'
import { Link } from 'react-scroll'


const texts = [
  `jestem Bartłomiej Wierzba`,
  `web developer`,
  `więcej informacji`,
  `o mnie`,
  `oraz moje`,
  `projekty`,
  `skontaktuj się`,
  `ze mną`
]

const jobs = ['web developer', 2000, 'freelancer', 2000, 'game designer', 2000]

class Header extends React.Component {

  state = {
    img: down
  }
  render() {
    return (
      <header>
        {/* <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div> */}

        <div>
          <h1 className='name'>{texts[0]}</h1>
          <h1 className='job'><Typical
            loop={Infinity}
            wrapper='p'
            steps={jobs}
          /></h1>
          <h2 className='moreInfo'>{texts[2]}<Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          > {texts[3]}</Link></h2>
          <h2 className='moreInfo'>{texts[4]} <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          > {texts[5]}</Link></h2>
          <h2 className='moreInfo'><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >{texts[6]}</Link> {texts[7]}</h2>
        </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        ><img src={this.state.img} onMouseEnter={() => {
          this.setState({
            img: down2
          })
        }}
          onMouseOut={() => {
            this.setState({
              img: down
            })
          }} /></Link>

      </header>
    );
  }

}


export default Header;