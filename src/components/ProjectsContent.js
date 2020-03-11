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
      <img src={gif1}></img>
      <img src={gif2}></img>
     </Container>
     <Container>
      <h1 className='display-6 font-weight-light'>Acebook</h1>
      <img src={gif3}></img>
      <img src={gif4}></img>
     </Container>
     <Container>
      <h1 className='display-6 font-weight-light'>Bank</h1>
      <img src={gif5}></img>
     </Container>
     <Container>
      <h1 className='display-6 font-weight-light'>Rock, Paper, Scissors</h1>
      <img src={gif6}></img>
     </Container>
       

    </Jumbotron>
  );
}

export default Projects;
