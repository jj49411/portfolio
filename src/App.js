import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';



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
        subTitle: 'A software engineer',
        text: 'Checkout my projects'
      },
      about: {
        title: "About Me"
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
            <Navbar.Brand>Julie Cheng</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
          <Footer></Footer>
        </Container>
      </Router>

    );
  }
 
}

export default App;
