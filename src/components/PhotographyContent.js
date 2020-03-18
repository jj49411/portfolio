import React from 'react';

function PhotographyContent(props) {
  return (
    <div>
      { props.title && <h1 className='homeAbout display-4 font-weight-bolder'>{props.title}</h1> }
      { props.text && <h1 className='homeAboutText font-weight-light'>{props.text}</h1> }
    </div>
  )

}

export default PhotographyContent;
