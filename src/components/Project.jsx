import React from 'react';
import '../css/Project.css'

function Project(props) {

  const { id, title, url, urlGit, description } = props

  return (
    <div key={id} className='project-box'>
      <p className='projectTitle'>{title}</p>
      <div className='projectDescription'>
        <p>{description}</p>
      </div>
      <div className='buttonContainer'>
        <a href={url} target="_blank" rel="noopener noreferrer">live</a>
        <a href={urlGit} target="_blank" rel="noopener noreferrer">git</a>
      </div>
    </div>
  );
}

export default Project;
