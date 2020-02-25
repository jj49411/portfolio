import React from 'react';
import AboutContent from '../components/AboutContent';

function AboutPage(props) {

  return (
    <AboutContent title={props.title} text={props.text}></AboutContent>
  );
}

export default AboutPage;
