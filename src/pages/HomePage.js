import React from 'react';
import HomeTitle from '../components/HomeTitle';
import ProjectsPage from './ProjectsPage';
import Container from 'react-bootstrap/Container';

import pic1 from '../assets/images/pic1.jpeg';



function HomePage(props) {

  return (
    <Container fluid={true}>
       <img src={pic1} width='1420'></img>
       <HomeTitle title={props.title} subTitle={props.subTitle} text={props.text}></HomeTitle>
    </Container>
  );
}

export default HomePage;
