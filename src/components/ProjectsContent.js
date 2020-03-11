import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import gif1 from '../assets/images/gif1.gif';
import gif2 from '../assets/images/gif2.gif';
import gif3 from '../assets/images/gif3.gif';
import gif4 from '../assets/images/gif4.gif';
import gif5 from '../assets/images/gif5.gif';
import gif6 from '../assets/images/gif6.gif';

function Projects(props) {

  return (
    
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col md={8} sm={12}>
            { props.title && <h1 className='display-4 font-weight-light'>{props.title}</h1> }
          </Col>
        </Row>
      </Container>
     <Container>
      <h1 className='display-6 font-weight-light'>Recispeak</h1>
      <h1 className='lead font-weight-light'>Final project at Makers. A mobile app that uses speech recognition to fetch recipes based on the ingredients filtered out from the recording.</h1>
      <h1 className='lead font-weight-light'>Technologies Used: React Native, React Native Voice, Jest, Enzyme, Circle CI, REST APIs</h1>
      <img src={gif1}></img>
      <img src={gif2}></img>
     </Container>
     <Container className='mt-5'>
      <h1 className='display-6 font-weight-light'>Acebook</h1>
      <h1 className='lead font-weight-light'>A team project of Facebook clone with strict client requirements, using Rails and Active Record.</h1>
      <h1 className='lead font-weight-light'>Technologies Used: Ruby on Rails, HTML/CSS, Javascript(JQuery), PostgreSQL, Heroku, Rspec, Capybara, Travis CI</h1>
      <img src={gif3}></img>
      <img src={gif4}></img>
     </Container>
     <Container className='mt-5'>
      <h1 className='display-6 font-weight-light'>Bank</h1>
      <h1 className='lead font-weight-light'>A command line app that allows user to make deposits and withdrawals, and print bank statement.</h1>
      <h1 className='lead font-weight-light'>Technologies Used: Javascript, Jasmine, Karma</h1>
      <img src={gif5}></img>
     </Container>
     <Container className='mt-5'>
      <h1 className='display-6 font-weight-light'>Rock, Paper, Scissors</h1>
      <h1 className='lead font-weight-light'>A web-app that provides a "Rock, Paper, Scissors" game for the user to play against the computer. First web-app to test my understanding of MVC structure</h1>
      <h1 className='lead font-weight-light'>Technologies Used: Ruby, Rspec, Sinatra</h1>
      <img src={gif6}></img>
     </Container>
       

    </Jumbotron>
  );
}

export default Projects;
