import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import pic3 from '../assets/images/pic3.png';
import '../App.css';


function AboutContent(props) {

  return (
    
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col xs="4" className='mt-5 p-5'>
            <img src={pic3} width='300'></img>
          </Col>
          <Col xs="4" className='mt-5 p-5'>
            { props.title && <h1 className='display-4 font-weight-light'>{props.title}</h1> }
            { props.text && <h1 className='lead font-weight-light'>{props.text}</h1> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>

  
  );
}


export default AboutContent;
