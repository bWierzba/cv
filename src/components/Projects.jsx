import React from 'react';
import '../css/Projects.css';
import Project from './Project'

let projectList = [
  { id: 1, title: 'To-Do App', url: 'https://bwierzba.github.io/to-do-app/', urlGit: 'https://github.com/bWierzba/to-do-app', description: `WORK IN PROGRESS // Aplikacja do zapisywania zadań do wykonania, z możliwością odchaczania wykonanych zadań oraz dodawania deadline'u` },
  { id: 2, title: 'Museum of Candy', url: 'https://bwierzba.github.io/museum-of-candy/', urlGit: 'https://github.com/bWierzba/museum-of-candy', description: ' WORK IN PROGRESS // Strona fikcyjnego muzeum cukierków wykorzystująca bootstrap 4' },
  { id: 3, title: 'Izolacja Okna', url: 'https://bwierzba.github.io/izolacja-okna/', urlGit: 'https://github.com/bWierzba/izolacja-okna', description: 'WORK IN PROGRESS // aplikacja napisana dla firmy architektonicznej, ułatwiająca liczenie izolacji okna potrzebnej podczas projektowania, napisana w czystym javascript' },
  { id: 4, title: 'Slot Machine', url: 'https://bwierzba.github.io/slot-machine/', urlGit: 'https://github.com/bWierzba/slot-machine', description: 'WORK IN PROGRESS // Gra - jednoręki bandyta wykorzystująca programowanie obiektowe w javascript' },
  { id: 5, title: 'Rock / Papper /Scissors', url: 'https://bwierzba.github.io/rock-paper-scissors/', urlGit: 'https://github.com/bWierzba/rock-paper-scissors', description: 'WORK IN PROGRESS // Gra w papier, kamień, nożyce napisana w czystym Java Script' },
  { id: 6, title: 'Architecture Studio', url: 'https://bwierzba.github.io/etn/', urlGit: 'https://github.com/bWierzba/etn', description: 'WORK IN PROGRESS // Projekt nad którym pracuję - strona wizytówka studia projektowania architektury' },
]


class Projects extends React.Component {
  render() {
    let list = projectList.map(project => {
      const { id, title, url, urlGit, description } = project
      return (
        <Project key={id} id={id} title={title} url={url} urlGit={urlGit} description={description} />
      )
    })


    return (

      <div className='projectsSection' id='projects'>
        {list}
      </div >


    );
  }

}

export default Projects;