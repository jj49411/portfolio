import React from 'react';
import HomeTitle from '../components/HomeTitle';
import ProjectsPage from './ProjectsPage';


function HomePage(props) {

  return (
    <HomeTitle title={props.title} subTitle={props.subTitle} text={props.text}></HomeTitle>
  );
}

export default HomePage;
