import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import gif1 from '../assets/images/gif1.gif'
import gif2 from '../assets/images/gif2.gif'
import gif3 from '../assets/images/gif3.gif'
import gif4 from '../assets/images/gif4.gif'
import gif5 from '../assets/images/gif5.gif'
import gif6 from '../assets/images/gif6.gif'
import gif7 from '../assets/images/gif7.gif'
import cat1 from '../assets/images/cat1.gif'
import cat2 from '../assets/images/cat2.gif'
import line from '../assets/images/line.png'

function Projects(props) {

  return (
    
    <Jumbotron className='bg-transparent jumbotron-fluid p-0' data-test='projects'>
      <Container fluid={true}>
        <Row className='justify-content-center py-5'>
          <Col md={8} sm={12}>
            { props.title && <h1 className='projectsTitle display-4 font-weight-bolder'>{props.title}</h1> }
          </Col>
        </Row>
      </Container>
      <img src={line} className="line"></img>
      <Container className='project'>
       <Row>
        <Col>
          <img src={gif1}></img>
          <img src={gif2}></img>
        </Col>
        <Col xs="5">
          <h1 className='projectsContent display-8 font-weight' data-test='project-title'>• Recispeak</h1>
          <h1 className='projectsContent lead font-weight-light' data-test='project-content'>Final project at Makers. A mobile app that uses speech recognition to fetch recipes based on the ingredients filtered out from the recording.</h1>
          <h1 className='projectsContent lead font-weight-light' data-test='project-tech'>Technologies Used: React Native, React Native Voice, Jest, Enzyme, Circle CI, REST APIs</h1>
          <a href={'https://github.com/dbacall/Recispeak'} target='_blank' className='projectsContent lead font-weight-light'>View the repo</a>

        </Col>
      </Row>
    
     </Container>
     <img src={line} className="line"></img>
     <Container className='project'>
       <Row>
        <Col>
          <h1 className='projectsContent display-8 font-weight'>• Cat Browser</h1>
          <h1 className='projectsContent lead font-weight-light'>A full-stack MERN web application that allows users to browse cat images and save to a favourites list. A user can like an image when browsing, view all the liked images and delete an image from the Favourites page.</h1>
          <h1 className='projectsContent lead font-weight-light'>Technologies Used: JavaScript, React, Node.js, Express, MongoDB, Mongoose, Jest, Enzyme, Cat API</h1>
          <a href={'https://github.com/jj49411/cat_browser'} target='_blank' className='projectsContent lead font-weight-light'>View the repo</a>
        </Col>
        <Col>
          <img src={cat1}></img>
          <img src={cat2}></img>
        </Col>
       </Row>
     </Container>
     <img src={line} className="line"></img>
     <Container className='project'>
       <Row>
        <Col>
          <img src={gif7} width='550'></img>
        </Col>
        <Col>
          <h1 className='projectsContent display-8 font-weight'>• Weather App</h1>
          <h1 className='projectsContent lead font-weight-light'>A web application that allows users to type in a city and see the weather forecast, including temperature, summary, precipitation and weekly forecast.</h1>
          <h1 className='projectsContent lead font-weight-light'>Technologies Used: JavaScript, React, Jest, Enzyme, Geocoding API, Weather API</h1>
          <a href={'https://github.com/jj49411/weather_forecast'} target='_blank' className='projectsContent lead font-weight-light'>View the repo</a>
        </Col>
       </Row>     
     </Container>
     <img src={line} className="line"></img>
     <Container className='project'>
       <Row>
        <Col>
          <h1 className='projectsContent display-8 font-weight'>• Acebook</h1>
          <h1 className='projectsContent lead font-weight-light'>A team project of Facebook clone with strict client requirements, using Rails and Active Record.</h1>
          <h1 className='projectsContent lead font-weight-light'>Technologies Used: Ruby on Rails, HTML/CSS, JavaScript(JQuery), PostgreSQL, Heroku, Rspec, Capybara, Travis CI</h1>
          <a href={'https://github.com/Hyan18/acebook-luckerberg'} target='_blank' className='projectsContent lead font-weight-light'>View the repo</a>
        </Col>
        <Col>
          <img src={gif3}></img>
          <img src={gif4}></img>
        </Col>
       </Row>
     </Container>
     <img src={line} className="line"></img>
     <Container className='project'>
       <Row>
        <Col>
          <img src={gif5}></img>
        </Col>
        <Col>
          <h1 className='projectsContent display-8 font-weight'>• Bank</h1>
          <h1 className='projectsContent lead font-weight-light'>A command line app that allows user to make deposits and withdrawals, and print bank statement.</h1>
          <h1 className='projectsContent lead font-weight-light'>Technologies Used: Javascript, Jasmine, Karma</h1>
          <a href={'https://github.com/jj49411/bank-tech-test'} target='_blank' className='projectsContent lead font-weight-light'>View the repo</a>
        </Col>
       </Row>     
     </Container>
     <img src={line} className="line"></img>
     <Container className='project'>
       <Row>
         <Col >
          <h1 className='projectsContent display-8 font-weight'>• Rock, Paper, Scissors</h1>
          <h1 className='projectsContent lead font-weight-light'>A web-app that provides a "Rock, Paper, Scissors" game for the user to play against the computer. First web-app to test my understanding of MVC structure</h1>
          <h1 className='projectsContent lead font-weight-light'>Technologies Used: Ruby, Rspec, Sinatra</h1>
          <a href={'https://github.com/jj49411/rps-challenge'} target='_blank' className='projectsContent lead font-weight-light'>View the repo</a>          
         </Col>
         <Col >
          <img src={gif6}></img>
         </Col>
       </Row>
     </Container>
       

    </Jumbotron>
  )
}

export default Projects
