import React from 'react';
import PhotographyContent from '../components/PhotographyContent';

function PhotographyPage(props) {

  return (
    <PhotographyContent title={props.title} text={props.text}></PhotographyContent>
  );
}

export default PhotographyPage;
