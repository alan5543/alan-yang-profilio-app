import React from 'react';
import './project.css';
import WebSlider from './webSlider/webSlider';
import { projectData } from '../../data/project';

const Project = () => {
  return (
    <div className='projectAppContainer' id="project">
      <div className="projectTitle">
        <h1 className="projectTitleName">My Project</h1>
        <h1 className="projectSubtitleName">Scroll and see my showcases</h1>
      </div>
      <WebSlider cards={projectData} />
    </div>
  );
};

export default Project;