import React from 'react';
import '../css/Project.css'

function Project(props) {

  const { id, title, url, img } = props

  return (
    <div key={id} className='project-box'>
      <p>{title}</p>
      <p>{url}</p>
      <img url={img} alt='project screen' />
    </div>
  );
}

export default Project;
