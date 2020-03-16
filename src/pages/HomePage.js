import React from 'react';
import HomeTitle from '../components/HomeTitle';
import HomeAbout from '../components/HomeAbout';
import AboutContent from '../components/AboutContent';
import ProjectsPage from './ProjectsPage';
import Container from 'react-bootstrap/Container';

import '../App.css';


function HomePage(props) {

  return (
    <div fluid={true}>
      <div className='background' >
        <HomeTitle title={props.title} title2={props.title2} subTitle={props.subTitle} text={props.text}></HomeTitle>
      </div>
      <div>
        <HomeAbout titleA={props.titleA} text1={props.text1} text2={props.text2} text3={props.text3}></HomeAbout>
      </div>
    </div>
  );
}

export default HomePage;


