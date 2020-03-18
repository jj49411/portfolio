import React, { Component } from 'react';
import Projects from '../components/ProjectsContent';


export default class ProjectsPage extends Component {

  constructor(props) {
    super(props);
  }
  scrollToTop() {
    window.scrollTo(0, 0);
}
  render() {
    this.scrollToTop()
    return (
    <Projects title={this.props.title} text={this.props.text}></Projects>
  );
}

  }
  

