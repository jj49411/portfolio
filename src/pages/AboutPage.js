import React from 'react';
import AboutContent from '../components/AboutContent';

function AboutPage(props) {

  return (
    <AboutContent title={props.title} text1={props.text1} text2={props.text2} text3={props.text3}></AboutContent>
  );
}

export default AboutPage;
