import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { isMobile } from "react-device-detect";
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import PhotographyPage from './pages/PhotographyPage';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Julie Cheng',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'}
      ],
      home: {
        title: "Hello!",
        title2: "I'm Julie Cheng",
        subTitle: 'A Software Engineer',
        text: 'Checkout my projects'
      },
      about: {
        title: "About",
        text1: "I am a goal-driven software engineer recently graduated from Makers Academy. Coming from a design/marketing background, I have a strong passion to build something aesthetic but also useful.  I’m always thinking from user’s perspectives and evaluating my actions that make a positive impact on those who use the product. Being a software developer combines all my motivations: constantly learning, always challenging myself, designing useful products and working with like-minded people.",
        text2: "• Tech Skills: Javascript, Ruby, Rails, React, React Native, JQuery, Sinatra, Capybara, HTML, CSS, RSpec, Jasmine, Jest, PostgreSQL, ActiveRecord",
        text3: "• Behavioural Skills: TDD, MVC, Agile, Pair Programming, Mobbing, Git Workflow, Growth mindset"
      },
      projects: {
        title: "My Projects"
      },
      photography: {
        title: "Photography",
        text: "A fashion photographic campaign for Stella McCartney"
      }
    }
  }


  render() {
    if (isMobile) {
      return (
        <div> Content not available on mobile</div>
      )
    }else {
     return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Julie Cheng</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/photography'>Photography</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} title2={this.state.home.title2} subTitle={this.state.home.subTitle} text={this.state.home.text} titleA={this.state.about.title} text1={this.state.about.text1} text2={this.state.about.text2} text3={this.state.about.text3}></HomePage>}></Route>
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} text1={this.state.about.text1} text2={this.state.about.text2} text3={this.state.about.text3}></AboutPage>}></Route>
          <Route path='/projects' render={() => <ProjectsPage title={this.state.projects.title}></ProjectsPage>}></Route>
          <Route path='/photography' render={() => <PhotographyPage title={this.state.photography.title} text={this.state.photography.text}></PhotographyPage>}></Route>
        

          <Footer></Footer>
        </Container>
      </Router>

    );
  }
}
 
}

export default App;
