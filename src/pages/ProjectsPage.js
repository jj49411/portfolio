import React from 'react';
import Projects from '../components/ProjectsContent';

function ProjectsPage(props) {

  return (
    <Projects title={props.title} text={props.text}></Projects>
  );
}

export default ProjectsPage;
