import React from 'react';
import HomeTitle from '../components/HomeTitle';
import HomeAbout from '../components/HomeAbout';
import ProjectsPage from './ProjectsPage';
import Container from 'react-bootstrap/Container';

import '../App.css';


function HomePage(props) {

  return (
    <Container>
      <Container className='background' fluid={true}>
        <HomeTitle title={props.title} subTitle={props.subTitle} text={props.text}></HomeTitle>
      </Container>
      <Container>
        <HomeAbout></HomeAbout>
      </Container>
    </Container>
  );
}

export default HomePage;


