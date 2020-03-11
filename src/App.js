import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';



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
        title: "Julie's site",
        subTitle: 'Portfolio',
        text: 'Checkout my projects'
      },
      about: {
        title: "About Me",
        text: 'details here'
      },
      projects: {
        title: "My Projects"
      }
    }
  }


  render() {
     return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            {/* <Navbar.Brand>Julie Cheng</Navbar.Brand> */}
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}></HomePage>}></Route>
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}></AboutPage>}></Route>
          <Route path='/projects' render={() => <ProjectsPage title={this.state.projects.title}></ProjectsPage>}></Route>
        

          <Footer></Footer>
        </Container>
      </Router>

    );
  }
 
}

export default App;
