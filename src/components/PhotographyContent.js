import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'
import m1 from '../assets/images/m1.jpg'
import m2 from '../assets/images/m2.jpg'
import m3 from '../assets/images/m3.jpg'
import m4 from '../assets/images/m4.jpg'
import c5 from '../assets/images/c5.jpg'
import c6 from '../assets/images/c6.jpg'
import f1 from '../assets/images/f1.jpg'
import f2 from '../assets/images/f2.jpg'
import line from '../assets/images/line.png'

function PhotographyContent(props) {
  return (

    <Jumbotron className='bg-transparent jumbotron-fluid p-0' data-test='photography'>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col md={8} sm={12}>
            { props.title && <h1 className='projectsTitle display-4 font-weight-bolder'>{props.title}</h1> }
            { props.text && <h1 className='photoText font-weight-light'>{props.text}</h1> }
          </Col>
        </Row>
      </Container>
      <img src={line} className='line'></img>

      <Container className='project'>
        <Row>
            <img src={p1} className='photo1'></img>
        </Row>
        <Row>
            <img src={p4} className='photo1'></img>
        </Row>
        <Row>
            <img src={p2} className='photo1'></img>
        </Row>
        <Row>
            <img src={p3} className='photo1'></img>
        </Row>
        <Row>
            <img src={p6} className='photo1'></img>
        </Row>
        <Row>
            <img src={p5} className='photo1'></img>
        </Row>
      </Container>
      <img src={line} className='line'></img>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col md={8} sm={12}>
            <h1 className='projectsTitle display-5 font-weight-bolder'>Concept and Inspiration</h1>
            <h1 className='photoText font-weight-light'>“ Freedom ”</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
          <Col>
            <img src={m1} className='moodboard'></img>
          </Col>
        </Row>
        <Row >
          <Col>
            <img src={m2} className='moodboard'></img>
          </Col>
        </Row>
        <Row >
          <Col>
            <img src={m3} className='moodboard'></img>
          </Col>
        </Row>
        <Row >
          <Col>
            <img src={m4} className='moodboard'></img>
          </Col>
        </Row>
      </Container>
      <img src={line} className='line'></img>
      <Container>  
        <Row className='double'>
          <Col>
            <img src={c5} className='singlePage'></img>
            <img src={c6} className='singlePage'></img>
          </Col>
        </Row>
        <Row className='double'>
          <Col>
            <img src={f1} className='singlePage'></img>
            <img src={f2} className='singlePage'></img>
          </Col>
        </Row>
     </Container>
    </Jumbotron>
  )

}

export default PhotographyContent
