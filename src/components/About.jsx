import React from 'react';
import '../css/About.css';
import me from '../img/me.jpg'
import { Icon } from '@iconify/react';
import logoHtml5 from '@iconify/icons-ion/logo-html5';
import logoCss3 from '@iconify/icons-ion/logo-css3';
import logoGithub from '@iconify/icons-ion/logo-github';
import logoNodejs from '@iconify/icons-ion/logo-nodejs';
import logoReact from '@iconify/icons-ion/logo-react';
import logoSass from '@iconify/icons-ion/logo-sass';
import logoJavascript from '@iconify/icons-ion/logo-javascript';
import bootstrapFill from '@iconify/icons-bi/bootstrap-fill';
import visualStudio from '@iconify/icons-cib/visual-studio';



const aboutMe = 'Od roku interesuję się fron-endem, każdego dnia staram się poszerzać swoje umiejętności i zdobywać nową wiedzę. Poszukuję pracy jako junior front-end developer by móc zdobywać doświadczenie komercyjne. Uwielbiam rozwiązywać problemy i widzieć wymierene efekty swojej pracy, dodatkowo intersuję się również game designem oraz fotografią.'



const listOfSkills = [
  { id: 0, name: 'html5', img: logoHtml5 },
  { id: 1, name: 'css', img: logoCss3 },
  { id: 2, name: 'Javascript', img: logoJavascript },
  { id: 3, name: 'Sass', img: logoSass },
  { id: 4, name: 'React', img: logoReact },
  { id: 5, name: 'Git', img: logoGithub },
  { id: 6, name: 'Bootstrap', img: bootstrapFill },
  { id: 7, name: 'Visual Studio', img: visualStudio },
  { id: 8, name: 'Node.js', img: logoNodejs },

]



class About extends React.Component {

  skills = listOfSkills.map((skill) => {
    return (
      <div className='skill' key={skill.id}>
        <Icon icon={skill.img} />
        <h3>{skill.name}</h3>
      </div>
    )
  })

  render() {
    return (
      <div className='aboutSection' id='about'>
        <div className='aboutMeContainer'>
          <div className='aboutMe'>
            <div className='zoom'><img src={me} alt="" /></div>

            <h1>o mnie</h1>
            <p>{aboutMe}</p>
          </div>
          <div className='skills'>
            <h1>Umiejętności</h1>
            {this.skills}
          </div>
        </div>

      </div>
    );
  }

}

export default About;