import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import pic3 from '../assets/images/pic3.png';


function HomeAbout(props) {

  return (
    
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col xs="4" className='mt-5 p-5'>
            <img src={pic3} width='300'></img>
          </Col>
          <Col xs="4" className='mt-5 p-5'>
            { props.titleA && <h1 className='display-4 font-weight-light'>{props.titleA}</h1> }
            { props.textA && <h1 className='lead font-weight-light'>{props.textA}</h1> }
            <Link to ='/projects'><h1 className='lead font-weight-light'>Checkout my projects</h1></Link>
            <h1><a href={'http://linkedin.com/in/julie-cheng'} className='lead font-weight-light'>Linkedin</a></h1>
            <h1><a href={'https://github.com/jj49411/CV'} className='lead font-weight-light'>GitHub</a></h1>
          </Col>
              
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeAbout;