import React from 'react';
import '../css/Projects.css';
import Project from './Project'

let projectList = [
  { id: 1, title: 'project1', url: 'https/url', img: 'obarzek' },
  { id: 2, title: 'project2', url: 'https/url', img: 'obarzek' },
  { id: 3, title: 'project3', url: 'https/url', img: 'obarzek' },
  { id: 4, title: 'project4', url: 'https/url', img: 'obarzek' },
  { id: 5, title: 'project5', url: 'https/url', img: 'obarzek' },
  { id: 6, title: 'project6', url: 'https/url', img: 'obarzek' },
]


class Projects extends React.Component {
  render() {

    let list = projectList.map(project => {
      const { id, title, url, img } = project
      return (
        <Project id={id} title={title} url={url} img={img} />
      )
    })


    return (
      <div className='projectsSection' id='projects'>
        {list}
      </div>
    );
  }

}

export default Projects;