import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../App.css';

function HomeTitle(props) {

  return (
    
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <Container fluid={true}>
        <Row>
          <Col className='homeTitle' md={8} sm={12}>
            { props.title && <h1 className='display-4 font-weight-bolder text-white'>{props.title}</h1> }
            { props.title2 && <h1 className='display-4 font-weight-bolder text-white'>{props.title2}</h1> }
            { props.subTitle && <h1 className='display-6 font-weight-light text-white'>{props.subTitle}</h1> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HomeTitle;
