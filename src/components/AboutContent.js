import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import pic3 from '../assets/images/pic3.png';
import linkedinPic from '../assets/images/linkedin.png';
import githubPic from '../assets/images/github.png';
import '../App.css';


function AboutContent(props) {

  return (
    
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
    <Container fluid={true}>
      <Row className='justify-content-center py-5'>
        <Col xs="4" className='mt-5 p-5'>
          <img src={pic3} width='300'></img>
        </Col>
        <Col xs="6" className='mt-4 p-4'>
          { props.title && <h1 className='homeAbout display-4 font-weight-bolder'>{props.title}</h1> }
          { props.text1 && <h1 className='homeAboutText font-weight-light'>{props.text1}</h1> }
          { props.text2 && <h1 className='homeAboutText font-weight-light'>{props.text2}</h1> }
          { props.text3 && <h1 className='homeAboutText font-weight-light'>{props.text3}</h1> }
          <Link to ='/projects' className='projectsLink'><h1 className='lead font-weight-light'>Checkout my projects</h1></Link>
          <h1>
            <a href={'http://linkedin.com/in/julie-cheng'} className='lead font-weight-light'>
              <img src={linkedinPic} className='icon' /></a>{'    '}
            <a href={'https://github.com/jj49411/CV'} className='lead font-weight-light'>
              <img src={githubPic} className='icon2' /> </a></h1>
        </Col>
      </Row>
    </Container>
    </Jumbotron>
  );
}


export default AboutContent;
