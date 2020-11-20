import React from 'react';
import '../css/Projects.css';
import Project from './Project'

let projectList = [
  { id: 1, title: 'To-Do App', url: 'https/url', urlGit: 'https://github.com/bWierzba/to-do-app' },
  { id: 2, title: 'Museum of Candy', url: 'https://bwierzba.github.io/museum-of-candy/', urlGit: 'https://github.com/bWierzba/museum-of-candy' },
  { id: 3, title: 'Izolacja Okna', url: 'https://bwierzba.github.io/izolacja-okna/', urlGit: 'https://github.com/bWierzba/izolacja-okna' },
  { id: 4, title: 'Rock / Papper /Scissors', url: 'https://bwierzba.github.io/rock-paper-scissors/', urlGit: 'https://github.com/bWierzba/rock-paper-scissors' },
  { id: 5, title: 'Slot Machine', url: 'https://bwierzba.github.io/slot-machine/', urlGit: 'https://github.com/bWierzba/slot-machine' },
  { id: 6, title: 'Architecture Studio', url: 'https/url', urlGit: 'https://github.com/bWierzba/etn' },
]


class Projects extends React.Component {
  render() {
    let list = projectList.map(project => {
      const { id, title, url, urlGit } = project
      return (
        <Project key={id} id={id} title={title} url={url} urlGit={urlGit} />
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