import React from 'react';
import '../css/Project.css'

function Project(props) {

  const { id, title, url, urlGit } = props

  return (
    <div key={id} className='project-box'>
      <p className='projectTitle'>{title}</p>
      <button class='projectLive'><a href={url} target="_blank" rel="noopener noreferrer">LIVE</a></button>
      <button class='projectGit'><a href={urlGit} target="_blank" rel="noopener noreferrer">GIT</a></button>
    </div>
  );
}

export default Project;
